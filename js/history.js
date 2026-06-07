function renderHistory(){
  const filt=document.getElementById('history-filters');filt.innerHTML='';
  const allC=document.createElement('button');allC.className='filter-chip'+(T.historyFilter===null?' active':'');allC.textContent='Όλα';allC.onclick=()=>{T.historyFilter=null;renderHistory();};filt.appendChild(allC);
  db.subjects.forEach(s=>{
    const c=document.createElement('button');c.className='filter-chip'+(T.historyFilter===s.id?' active':'');
    c.innerHTML=`<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${COLORS[s.color]};margin-right:5px;vertical-align:middle"></span>${s.name}`;
    c.onclick=()=>{T.historyFilter=s.id;renderHistory();};filt.appendChild(c);
  });
  const filtered=T.historyFilter?db.sessions.filter(s=>s.subjectId===T.historyFilter):db.sessions;
  const container=document.getElementById('history-cards');container.innerHTML='';
  const empty=document.getElementById('history-empty');
  if(!filtered.length){empty.style.display='block';container.style.display='none';return;}
  empty.style.display='none';container.style.display='flex';
  filtered.slice(0,100).forEach(s=>{
    const sub=db.subjects.find(x=>x.id===s.subjectId);
    const color=sub?COLORS[sub.color]:'var(--text3)';
    const card=document.createElement('div');card.className='history-card';
    const hasNotes=s.notes&&s.notes.trim();
    const hasDiff=s.difficulties&&s.difficulties.trim();
    const notesHtml=hasNotes||hasDiff?`
      <div class="hc-notes-section">
        ${hasNotes?`<div class="hc-notes-label">Τι έκανα</div><div class="hc-notes-text">${escHtml(s.notes)}</div>`:''}
        ${hasDiff?`<div class="hc-notes-label" style="margin-top:${hasNotes?'8px':'0'}">Δυσκολίες</div><div class="hc-diff-text">${escHtml(s.difficulties)}</div>`:''}
      </div>`:'';
    card.innerHTML=`
      <div>
        <div class="hc-top">
          <span class="hc-date">${new Date(s.date).toLocaleString('el-GR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'})}</span>
          ${sub?`<span class="hc-subject"><span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;display:inline-block"></span>${sub.name}</span>`:''}
          ${s.topic?`<span class="hc-topic">— ${escHtml(s.topic)}</span>`:''}
          <span class="hc-mode-badge">${s.mode||'—'}</span>
          <span class="hc-dur">${s.durationMin}'</span>
        </div>
        ${s.goal?`<div style="font-size:11px;color:var(--text3);margin-bottom:4px">🎯 ${escHtml(s.goal)}</div>`:''}
        ${notesHtml}
      </div>
      <button class="del-btn" onclick="deleteSession(${s.id})" style="align-self:flex-start;margin-top:2px">✕</button>`;
    container.appendChild(card);
  });
}

function escHtml(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function deleteSession(id){db.sessions=db.sessions.filter(s=>s.id!==id);recalcStats();save();renderHistory();showToast('Session διαγράφηκε.');}
function confirmClearAll(){if(!db.sessions.length)return;if(!confirm('Διαγραφή ΟΛΩΝ των sessions;'))return;db.sessions=[];recalcStats();save();renderHistory();showToast('Όλα τα sessions διαγράφηκαν.');}
function recalcStats(){
  db.stats.totalSessions=db.sessions.length;
  db.stats.totalFocusMin=db.sessions.reduce((a,s)=>a+s.durationMin,0);
  db.stats.uniqueSubjects=new Set(db.sessions.filter(s=>s.subjectId).map(s=>s.subjectId)).size;
  db.stats.deepWorkSessions=db.sessions.filter(s=>s.mode==='deepwork').length;
  db.stats.flowSessions=db.sessions.filter(s=>s.mode==='flow').length;
  db.stats.freeRunSessions=db.sessions.filter(s=>s.mode==='freerun').length;
  db.stats.marathonDone=db.sessions.some(s=>s.mode==='marathon');
  updateSidebar();
}

