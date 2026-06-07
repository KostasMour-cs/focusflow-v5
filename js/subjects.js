function renderSubjects(){
  const list=document.getElementById('subject-list');list.innerHTML='';
  db.subjects.forEach(s=>{
    const sessCount=db.sessions.filter(x=>x.subjectId===s.id).length;
    const mins=db.sessions.filter(x=>x.subjectId===s.id).reduce((a,x)=>a+x.durationMin,0);
    const item=document.createElement('div');item.className='subject-list-item'+(T.activeSubjectId===s.id?' active-sub':'');
    item.innerHTML=`<div style="position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:3px 0 0 3px;background:${COLORS[s.color]}"></div><div class="sub-item-name">${s.name}</div><div class="sub-item-meta">${(mins/60).toFixed(1)}h · ${sessCount} sessions</div>`;
    item.onclick=()=>{T.activeSubjectId=s.id;renderSubjects();renderSubjectDetail(s.id);};
    list.appendChild(item);
  });
  if(!db.subjects.length)list.innerHTML='<div style="color:var(--text3);font-size:13px;padding:10px">Δεν υπάρχουν subjects.</div>';
  if(T.activeSubjectId&&db.subjects.find(s=>s.id===T.activeSubjectId))renderSubjectDetail(T.activeSubjectId);
}

function renderSubjectDetail(sid){
  const s=db.subjects.find(x=>x.id===sid);if(!s)return;
  const panel=document.getElementById('subject-detail-panel');
  const sessions=db.sessions.filter(x=>x.subjectId===sid);
  const mins=sessions.reduce((a,x)=>a+x.durationMin,0);
  const avgScore=sessions.length?Math.round(sessions.reduce((a,x)=>a+(x.focusScore||0),0)/sessions.length):0;
  const sessHtml=sessions.length?sessions.slice(0,10).map(sess=>`
    <div class="sub-sess-item">
      <div style="flex:1">
        <div class="sub-sess-meta">${new Date(sess.date).toLocaleDateString('el-GR',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})} · ${sess.durationMin}' · ${sess.mode}</div>
        ${sess.topic?`<div class="sub-sess-notes">${sess.topic}</div>`:''}
        ${sess.notes?`<div class="sub-sess-notes" style="color:var(--teal)">${sess.notes}</div>`:''}
        ${sess.difficulties?`<div class="sub-sess-notes" style="color:var(--coral)">${sess.difficulties}</div>`:''}
      </div>
      <span class="score-pill ${sess.focusScore>=80?'score-high':sess.focusScore>=50?'score-med':'score-low'}">${sess.focusScore||0}%</span>
    </div>`).join(''):'<div style="color:var(--text3);font-size:12px;padding:8px">Δεν υπάρχουν sessions ακόμα.</div>';
  panel.innerHTML=`
    <div class="subject-detail">
      <div class="sub-detail-header">
        <div style="width:13px;height:13px;border-radius:50%;background:${COLORS[s.color]};flex-shrink:0"></div>
        <div style="flex:1">
          <div style="font-size:18px;font-weight:500;color:var(--text)">${s.name}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${sessions.length} sessions · ${(mins/60).toFixed(1)}h συνολικά</div>
        </div>
        <button class="btn btn-xs btn-danger" onclick="deleteSubject(${s.id})">Διαγραφή</button>
      </div>
      <div class="sub-stats-row">
        <div class="sub-stat"><div class="sub-stat-val">${(mins/60).toFixed(1)}h</div><div class="sub-stat-lbl">Συνολικά</div></div>
        <div class="sub-stat"><div class="sub-stat-val">${sessions.length}</div><div class="sub-stat-lbl">Sessions</div></div>
        <div class="sub-stat"><div class="sub-stat-val">${avgScore}%</div><div class="sub-stat-lbl">Avg Score</div></div>
      </div>
      <div class="section-title">Σημειώσεις μαθήματος</div>
      <textarea class="notes-area" id="notes-${s.id}" placeholder="Γράψε ό,τι θέλεις: που σταμάτησες, τι πρέπει να θυμάσαι, από πού θα συνεχίσεις…">${s.notes||''}</textarea>
      <div style="display:flex;justify-content:flex-end;margin-top:6px">
        <button class="btn btn-xs btn-primary" onclick="saveSubjectNotes(${s.id})">Αποθήκευση σημειώσεων</button>
      </div>
      <div class="section-title" style="margin-top:16px">Ιστορικό sessions</div>
      <div class="sub-sessions-list">${sessHtml}</div>
    </div>`;
}

function saveSubjectNotes(sid){
  const el=document.getElementById('notes-'+sid);if(!el)return;
  const idx=db.subjects.findIndex(s=>s.id===sid);
  if(idx>=0){db.subjects[idx].notes=el.value;save();showToast('Σημειώσεις αποθηκεύτηκαν ✓');}
}

let newSubColor=0;
function openAddSubject(){
  newSubColor=0;document.getElementById('sub-name').value='';
  document.querySelectorAll('.cpick').forEach((x,i)=>x.style.outline=i===0?'2px solid white':'none');
  openModal('modal-subject');
}
function selectColor(i,el){newSubColor=i;document.querySelectorAll('.cpick').forEach(x=>x.style.outline='none');el.style.outline='2px solid white';}
function saveSubject(){
  const name=document.getElementById('sub-name').value.trim();if(!name)return;
  db.subjects.push({id:Date.now(),name,color:newSubColor,notes:''});
  db.stats.totalSubjects=db.subjects.length;
  save();closeModal('modal-subject');renderSubjects();showToast('Subject προστέθηκε!');
}
function deleteSubject(id){
  if(!confirm('Διαγραφή subject; Τα sessions δεν θα διαγραφούν.'))return;
  db.subjects=db.subjects.filter(s=>s.id!==id);
  db.stats.totalSubjects=db.subjects.length;
  if(T.activeSubjectId===id){T.activeSubjectId=null;document.getElementById('subject-detail-panel').innerHTML='<div style="color:var(--text3);font-size:13px;padding:40px 20px;text-align:center">Επίλεξε ένα μάθημα από τα αριστερά</div>';}
  save();renderSubjects();showToast('Subject διαγράφηκε.');
}

