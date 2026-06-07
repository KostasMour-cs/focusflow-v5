function setDashTab(t,el){T.dashTab=t;document.querySelectorAll('#page-dashboard .tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');renderDashboard();}

function setSupportTab(t,el){
  document.querySelectorAll('#page-support .tab').forEach(x=>x.classList.remove('active'));
  if(el)el.classList.add('active');
  document.getElementById('sup-contact').style.display=t==='contact'?'block':'none';
  document.getElementById('sup-help').style.display=t==='help'?'block':'none';
  document.getElementById('sup-legal').style.display=t==='legal'?'block':'none';
  document.getElementById('sup-profile').style.display=t==='profile'?'block':'none';
  if(t==='profile')renderProfileSection();
}
function getFiltered(tab){
  const now=new Date();
  if(tab==='today')return db.sessions.filter(s=>new Date(s.date).toDateString()===now.toDateString());
  if(tab==='week'){const w=new Date(now);w.setDate(w.getDate()-6);return db.sessions.filter(s=>new Date(s.date)>=w);}
  if(tab==='month'){const m=new Date(now);m.setDate(m.getDate()-29);return db.sessions.filter(s=>new Date(s.date)>=m);}
  return db.sessions;
}
function renderDashboard(){
  const sess=getFiltered(T.dashTab);
  const hrs=(sess.reduce((a,s)=>a+s.durationMin,0)/60).toFixed(1);
  const avg=sess.length?Math.round(sess.reduce((a,s)=>a+(s.focusScore||0),0)/sess.length):0;
  document.getElementById('dash-kpis').innerHTML=`
    <div class="kpi-card"><div class="kpi-icon">⏱</div><div class="kpi-val">${hrs}h</div><div class="kpi-lbl">Ώρες εστίασης</div></div>
    <div class="kpi-card"><div class="kpi-icon">🔁</div><div class="kpi-val">${sess.length}</div><div class="kpi-lbl">Sessions</div></div>
    <div class="kpi-card"><div class="kpi-icon">🎯</div><div class="kpi-val">${avg}%</div><div class="kpi-lbl">Focus Score</div></div>
    <div class="kpi-card"><div class="kpi-icon">🔥</div><div class="kpi-val">${db.stats.streak||0}</div><div class="kpi-lbl">Streak</div></div>`;
  renderWeekChart();renderBestTime();renderHeatmap();
}

let _heatmapOffset=0;

function heatmapNav(dir){
  if(dir>0&&_heatmapOffset>=0)return; // μην πας στο μέλλον
  _heatmapOffset+=dir;
  renderHeatmap();
  const nextBtn=document.getElementById('heatmap-next-btn');
  if(nextBtn){
    const atPresent=_heatmapOffset>=0;
    nextBtn.style.opacity=atPresent?'0.3':'1';
    nextBtn.style.pointerEvents=atPresent?'none':'auto';
  }
}

function dayKey(year,month,day){
  return year+'-'+String(month+1).padStart(2,'0')+'-'+String(day).padStart(2,'0');
}

function openDayNotes(year,month,dayNum,isFuture,isToday){
  const key=dayKey(year,month,dayNum);
  const isPast=!isFuture&&!isToday;
  const existing=db.dayNotes[key]||'';
  const MONTHS_FULL=['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'];
  const dateLabel=dayNum+' '+MONTHS_FULL[month]+' '+year;
  const statusLabel=isToday?'<span style="color:var(--accent);font-size:11px">● Σήμερα</span>':isFuture?'<span style="color:var(--teal);font-size:11px">📅 Μελλοντική — για προγραμματισμό</span>':'<span style="color:var(--text3);font-size:11px">🔒 Παρελθοντική — μόνο προβολή</span>';

  // get sessions for this day
  const daySess=db.sessions.filter(s=>{const d=new Date(s.date);return d.getFullYear()===year&&d.getMonth()===month&&d.getDate()===dayNum;});
  const sessHtml=daySess.length?daySess.map(s=>{
    const sub=s.subjectId?db.subjects.find(x=>x.id===s.subjectId):null;
    return `<div style="display:flex;align-items:center;gap:7px;padding:5px 8px;background:var(--surface3);border-radius:5px;font-size:11px;color:var(--text2)">
      ${sub?`<span style="width:7px;height:7px;border-radius:50%;background:${COLORS[sub.color]};flex-shrink:0;display:inline-block"></span>`:'<span style="font-size:9px">📖</span>'}
      <span style="flex:1">${sub?sub.name:(s.topic||s.mode)}</span>
      <span style="color:var(--text3)">${s.durationMin}'</span>
    </div>`;
  }).join(''):'<div style="font-size:11px;color:var(--text3);padding:4px 0">Δεν υπάρχουν sessions.</div>';

  document.getElementById('modal-day-notes-title').textContent=dateLabel;
  document.getElementById('modal-day-notes-status').innerHTML=statusLabel;
  document.getElementById('modal-day-notes-sessions').innerHTML=sessHtml;
  const textarea=document.getElementById('modal-day-notes-text');
  textarea.value=existing;
  textarea.readOnly=isPast;
  textarea.style.opacity=isPast?'0.6':'1';
  textarea.style.cursor=isPast?'default':'text';
  textarea.placeholder=isFuture?'Γράψε τι σκοπεύεις να κάνεις αυτή τη μέρα…':isToday?'Γράψε σημειώσεις για σήμερα…':'';
  document.getElementById('modal-day-notes-save').style.display=isPast?'none':'inline-block';
  document.getElementById('modal-day-notes-key').value=key;
  openModal('modal-day-notes');
}

function saveDayNotes(){
  const key=document.getElementById('modal-day-notes-key').value;
  const text=document.getElementById('modal-day-notes-text').value.trim();
  if(text)db.dayNotes[key]=text;
  else delete db.dayNotes[key];
  save();closeModal('modal-day-notes');showToast('📝 Σημειώσεις αποθηκεύτηκαν');
  renderHeatmap();
}

function renderHeatmap(){
  const wrap=document.getElementById('heatmap-wrap');if(!wrap)return;
  wrap.innerHTML='';
  const MONTHS_FULL=['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'];
  const WDAYS=['Δε','Τρ','Τε','Πε','Πα','Σα','Κυ'];
  const now=new Date();
  const viewDate=new Date(now.getFullYear(),now.getMonth()+_heatmapOffset,1);
  const year=viewDate.getFullYear(),month=viewDate.getMonth();
  document.getElementById('heatmap-month-label').textContent=MONTHS_FULL[month]+' '+year;
  const nextBtn=document.getElementById('heatmap-next-btn');
  if(nextBtn){nextBtn.style.opacity='1';nextBtn.style.pointerEvents='auto';}

  const CELL=32,GAP=4;

  const dayMap={};
  db.sessions.forEach(s=>{
    const d=new Date(s.date);
    if(d.getMonth()===month&&d.getFullYear()===year){
      const key=d.getDate();
      dayMap[key]=(dayMap[key]||0)+s.durationMin;
    }
  });
  const vals=Object.values(dayMap);
  const maxMins=vals.length?Math.max(...vals):1;

  function intensityClass(mins){
    if(!mins)return 'hm-0';
    const r=mins/maxMins;
    if(r<=0.25)return 'hm-1';
    if(r<=0.5)return 'hm-2';
    if(r<=0.75)return 'hm-3';
    return 'hm-4';
  }
  function textColor(cls){
    if(cls==='hm-0')return 'var(--text3)';
    if(cls==='hm-1')return 'rgba(200,184,255,0.7)';
    return '#fff';
  }

  const daysInMonth=new Date(year,month+1,0).getDate();
  const firstDow=new Date(year,month,1).getDay();
  const startOffset=(firstDow===0?6:firstDow-1);

  const outer=document.createElement('div');
  outer.style.cssText='width:100%;overflow-x:auto';

  const inner=document.createElement('div');
  inner.style.cssText='display:inline-block;min-width:0';

  const headerRow=document.createElement('div');
  headerRow.style.cssText=`display:grid;grid-template-columns:repeat(7,${CELL}px);gap:${GAP}px;margin-bottom:${GAP}px`;
  WDAYS.forEach(d=>{
    const h=document.createElement('div');
    h.style.cssText=`font-size:11px;color:var(--text3);text-align:center;height:20px;line-height:20px;font-weight:500`;
    h.textContent=d;
    headerRow.appendChild(h);
  });
  inner.appendChild(headerRow);

  const totalCells=Math.ceil((startOffset+daysInMonth)/7)*7;
  const grid=document.createElement('div');
  grid.style.cssText=`display:grid;grid-template-columns:repeat(7,${CELL}px);gap:${GAP}px`;

  for(let i=0;i<totalCells;i++){
    const cell=document.createElement('div');
    const dayNum=i-startOffset+1;
    if(dayNum<1||dayNum>daysInMonth){
      cell.style.cssText=`width:${CELL}px;height:${CELL}px;border-radius:6px`;
    } else {
      const mins=dayMap[dayNum]||0;
      const cls=intensityClass(mins);
      const cellDate=new Date(year,month,dayNum);
      const todayDate=new Date(now.getFullYear(),now.getMonth(),now.getDate());
      const isToday=cellDate.getTime()===todayDate.getTime();
      const isFuture=cellDate>todayDate;
      const key=dayKey(year,month,dayNum);
      const hasNote=!!db.dayNotes[key];

      cell.className='heatmap-cal-cell '+cls;
      cell.style.color=textColor(cls);
      cell.style.cursor='pointer';
      cell.style.position='relative';
      if(isToday){cell.style.outline='2px solid var(--accent)';cell.style.outlineOffset='1px';}
      if(isFuture){cell.style.opacity='0.5';}
      cell.textContent=dayNum;

      // note indicator dot
      if(hasNote){
        const dot=document.createElement('div');
        dot.style.cssText='position:absolute;bottom:2px;right:3px;width:4px;height:4px;border-radius:50%;background:var(--gold)';
        cell.appendChild(dot);
      }

      const hrs=mins>=60?(mins/60).toFixed(1)+'h':mins?mins+"'":'';
      cell.title=(isToday?'Σήμερα':isFuture?'Προγραμματισμός':hrs?hrs+' διάβασμα':'χωρίς session')+(hasNote?' · 📝 έχει σημείωση':'');
      cell.onclick=()=>openDayNotes(year,month,dayNum,isFuture,isToday);
    }
    grid.appendChild(cell);
  }
  inner.appendChild(grid);
  outer.appendChild(inner);
  wrap.appendChild(outer);

  // legend hint
  const hint=document.createElement('div');
  hint.style.cssText='font-size:10px;color:var(--text3);margin-top:7px;text-align:right';
  hint.innerHTML='Κλικ σε ημέρα για σημειώσεις &nbsp;·&nbsp; <span style="color:var(--gold)">●</span> = υπάρχει σημείωση';
  wrap.appendChild(hint);

  const totalMins=vals.reduce((a,b)=>a+b,0);
  const totalEl=document.getElementById('heatmap-month-total');
  if(totalEl){
    if(!totalMins){totalEl.textContent='Δεν υπάρχουν sessions αυτό τον μήνα.';}
    else{
      const activeDays=vals.length;
      const hrs=(totalMins/60).toFixed(1);
      totalEl.innerHTML=`<strong style="color:var(--accent)">${hrs}h</strong> συνολικά &nbsp;·&nbsp; <strong style="color:var(--accent)">${activeDays}</strong> ενεργές μέρες`;
    }
  }
}
function renderWeekChart(){
  const chart=document.getElementById('week-chart');chart.innerHTML='';
  const days7=[];const now=new Date();
  for(let i=6;i>=0;i--){const d=new Date(now);d.setDate(d.getDate()-i);days7.push(d);}
  const maxM=Math.max(1,...days7.map(d=>db.sessions.filter(s=>new Date(s.date).toDateString()===d.toDateString()).reduce((a,s)=>a+s.durationMin,0)));
  days7.forEach(d=>{
    const mins=db.sessions.filter(s=>new Date(s.date).toDateString()===d.toDateString()).reduce((a,s)=>a+s.durationMin,0);
    const isToday=d.toDateString()===new Date().toDateString();
    const col=document.createElement('div');col.className='bar-col';
    col.innerHTML=`<div class="bar-val">${mins?mins+"'":''}</div><div class="bar ${isToday?'today':''}" style="height:${Math.max(Math.round(mins/maxM*100),3)}%"></div><div class="bar-lbl">${DAYS[d.getDay()]}</div>`;
    chart.appendChild(col);
  });
}
function renderBestTime(){
  const el=document.getElementById('best-time-display');
  if(db.sessions.length<5){el.textContent='Χρειάζονται 5+ sessions.';return;}
  const slots={};
  db.sessions.forEach(s=>{const h=new Date(s.date).getHours();const slot=h<6?'νύχτα (00-06)':h<12?'πρωί (06-12)':h<18?'απόγευμα (12-18)':'βράδυ (18-24)';slots[slot]=(slots[slot]||0)+s.durationMin;});
  const best=Object.entries(slots).sort((a,b)=>b[1]-a[1])[0];
  el.textContent='🌟 Καλύτερη ώρα: '+best[0]+' ('+Math.round(best[1]/60*10)/10+'h)';
}

function setPieTab(t,el){T.pieTab=t;document.querySelectorAll('#page-piechart .tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');renderPieChart();}
function renderPieChart(){
  const tab=T.pieTab==='all'?'all':T.pieTab;
  const sessions=tab==='all'?db.sessions:getFiltered(tab);
  const svg=document.getElementById('big-pie-svg');const leg=document.getElementById('pie-legend-full');
  svg.innerHTML='';leg.innerHTML='';
  const subMap={};
  sessions.forEach(s=>{if(s.subjectId)subMap[s.subjectId]=(subMap[s.subjectId]||0)+s.durationMin;});
  const entries=Object.entries(subMap).sort((a,b)=>b[1]-a[1]);
  const emptyMsg=document.getElementById('pie-empty-msg');const container=document.getElementById('big-pie-container');
  if(!entries.length){emptyMsg.style.display='block';container.style.display='none';leg.innerHTML='<div style="color:var(--text3);font-size:13px;padding:8px">Κάνε sessions με subjects για δεδομένα.</div>';return;}
  emptyMsg.style.display='none';container.style.display='block';
  const totalMin=entries.reduce((a,[,v])=>a+v,0);
  document.getElementById('pie-total-hrs').textContent=(totalMin/60).toFixed(1)+'h';
  const cx=130,cy=130,r=100,sw=42,C=2*Math.PI*r;
  let off=0;
  entries.forEach(([sid,mins])=>{
    const sub=db.subjects.find(x=>x.id==sid);const pct=mins/totalMin;const color=COLORS[sub?sub.color:0];
    const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx',cx);circle.setAttribute('cy',cy);circle.setAttribute('r',r);
    circle.setAttribute('fill','none');circle.setAttribute('stroke',color);circle.setAttribute('stroke-width',sw);
    circle.setAttribute('stroke-dasharray',`${C*pct} ${C*(1-pct)}`);
    circle.setAttribute('stroke-dashoffset',`${-(off*C)}`);circle.setAttribute('transform',`rotate(-90 ${cx} ${cy})`);
    svg.appendChild(circle);off+=pct;
    const item=document.createElement('div');item.className='pie-leg-item';
    item.innerHTML=`<div class="pie-leg-left"><div class="pie-leg-dot" style="background:${color}"></div><span class="pie-leg-name">${sub?sub.name:'—'}</span></div><div style="text-align:right"><div class="pie-leg-hrs">${(mins/60).toFixed(1)}h</div><div class="pie-leg-pct">${Math.round(pct*100)}%</div></div>`;
    leg.appendChild(item);
  });
}

