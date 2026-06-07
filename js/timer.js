function showPage(p){
  // Close intent panel when navigating away from timer
  if(p!=='timer'){
    var ip=document.getElementById('intent-panel');
    if(ip) ip.style.display='none';
  }
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  // Reset support sub-tabs so their inline display:block doesn't bleed into other pages
  document.getElementById('sup-contact').style.display='none';
  document.getElementById('sup-help').style.display='none';
  document.getElementById('sup-legal').style.display='none';
  document.getElementById('sup-profile').style.display='none';
  document.getElementById('page-'+p).classList.add('active');
  const map={timer:'Timer',dashboard:'Dashboard',piechart:'Διάγραμμα',subjects:'Subjects',history:'History',achievements:'Achievements',shop:'Shop',support:'Support'};
  document.querySelectorAll('.nav-item').forEach(x=>{if(x.textContent.trim()===map[p])x.classList.add('active');});
  if(p==='dashboard'){renderDashboard();renderExams();}
  if(p==='piechart')renderPieChart();
  if(p==='subjects')renderSubjects();
  if(p==='history')renderHistory();
  if(p==='achievements')renderAchievements();
  if(p==='shop'){
    SHOP.tab='themes';
    document.querySelectorAll('#shop-tabs .tab').forEach((t,i)=>{t.classList.toggle('active',i===0);});
    renderShop();
  }
  if(p==='support'){setSupportTab('contact',document.getElementById('sup-tab-contact'));}
}

function renderYesterdayBanner(){
  const yest=new Date();yest.setDate(yest.getDate()-1);
  const yStr=yest.toDateString();
  const ySess=db.sessions.filter(s=>new Date(s.date).toDateString()===yStr);
  const b=document.getElementById('yesterday-banner');
  if(!ySess.length){b.style.display='none';return;}
  const mins=ySess.reduce((a,s)=>a+s.durationMin,0);
  const subs=[...new Set(ySess.map(s=>{const sub=db.subjects.find(x=>x.id===s.subjectId);return sub?sub.name:(s.topic||null);}))].filter(Boolean);
  const subTxt=subs.length?subs.join(', '):'διάφορα θέματα';
  document.getElementById('yesterday-text').innerHTML=`Χθες διάβασες <strong style="color:var(--accent)">${subTxt}</strong> για <strong style="color:var(--accent)">${mins}'</strong> (${ySess.length} sessions).`;
  b.style.display='flex';
}

function buildModeSelector(){
  const el=document.getElementById('mode-selector');el.innerHTML='';
  MODES.forEach(m=>{
    const isActive=m===T.mode;
    const d=document.createElement('div');
    d.className='mode-option'+(isActive?' active':'');
    d.innerHTML=`
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
        <span>${m.badge}</span>
        <span class="mode-name">${m.name}</span>
        ${isActive&&T.sessionStart?'<span style="font-size:9px;background:rgba(124,99,245,.2);color:var(--accent);padding:1px 6px;border-radius:10px;margin-left:2px">● τρέχει</span>':''}
      </div>
      <div class="mode-meta">${m.desc}</div>`;
    d.onclick=()=>{
      if(m===T.mode)return;
      if(T.sessionStart){
        showToast('🚫 Δεν μπορείς να μπεις σε άλλα modes όσο υπάρχει ενεργός timer. Αν θέλεις να αλλάξεις mode, τερμάτισε πρώτα τον timer.');
        return;
      }
      T.mode=m;buildModeSelector();
      document.getElementById('custom-panel').style.display=m.custom?'block':'none';
      if(m.custom){renderCustomCyclesList();renderSavedConfigs();}
      if(!m.custom)loadMode(m);
    };
    el.appendChild(d);
  });
}

function renderCustomCyclesList(){
  const list=document.getElementById('custom-cycles-list');
  if(!list)return;
  list.innerHTML='';
  T.customCycles.forEach((cyc,i)=>{
    const row=document.createElement('div');
    row.style.cssText='background:var(--surface3);border-radius:6px;padding:8px 10px;display:flex;align-items:center;gap:8px';
    row.innerHTML=`
      <span style="font-size:10px;color:var(--text3);min-width:52px;text-transform:uppercase;letter-spacing:.3px">Κύκλος ${i+1}</span>
      <div style="flex:1;display:flex;align-items:center;gap:5px">
        <span style="font-size:10px;color:var(--text3)">🎯</span>
        <input type="number" value="${cyc.focus}" min="1" max="180" data-ci="${i}" data-field="focus"
          style="width:48px;background:var(--surface);border:1px solid var(--border2);border-radius:4px;padding:4px 6px;color:var(--text);font-size:13px;font-family:inherit;outline:none;text-align:center"
          oninput="updateCustomCycle(${i},'focus',this.value)">
        <span style="font-size:10px;color:var(--text3)">λεπ.</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;gap:5px">
        <span style="font-size:10px;color:var(--text3)">☕</span>
        <input type="number" value="${cyc.brk}" min="0" max="60" data-ci="${i}" data-field="brk"
          style="width:44px;background:var(--surface);border:1px solid var(--border2);border-radius:4px;padding:4px 6px;color:var(--text);font-size:13px;font-family:inherit;outline:none;text-align:center"
          oninput="updateCustomCycle(${i},'brk',this.value)">
        <span style="font-size:10px;color:var(--text3)">δ.</span>
      </div>`;
    list.appendChild(row);
  });
  document.getElementById('custom-cycles-count').textContent=T.customCycles.length;
}

function updateCustomCycle(i,field,val){
  const v=parseInt(val)||0;
  if(field==='focus')T.customCycles[i].focus=Math.max(1,Math.min(180,v));
  else T.customCycles[i].brk=Math.max(0,Math.min(60,v));
}

function customChangeCycles(delta){
  const n=T.customCycles.length+delta;
  if(n<1||n>12)return;
  if(delta>0){
    const last=T.customCycles[T.customCycles.length-1];
    T.customCycles.push({focus:last.focus,brk:last.brk});
  } else {
    T.customCycles.pop();
  }
  renderCustomCyclesList();
}

function saveCustomConfig(){
  const name=document.getElementById('custom-save-name').value.trim();
  if(!name){showToast('Δώσε όνομα ρύθμισης');return;}
  db.customConfigs=db.customConfigs||[];
  const existing=db.customConfigs.findIndex(c=>c.name===name);
  const config={name,cycles:JSON.parse(JSON.stringify(T.customCycles)),createdAt:Date.now()};
  if(existing>=0)db.customConfigs[existing]=config;
  else db.customConfigs.push(config);
  save();renderSavedConfigs();
  document.getElementById('custom-save-name').value='';
  showToast('💾 Αποθηκεύτηκε: '+name);
}

function loadCustomConfig(idx){
  const cfg=db.customConfigs[idx];
  if(!cfg)return;
  T.customCycles=JSON.parse(JSON.stringify(cfg.cycles));
  renderCustomCyclesList();
  showToast('📂 Φορτώθηκε: '+cfg.name);
}

function deleteCustomConfig(idx){
  db.customConfigs.splice(idx,1);
  save();renderSavedConfigs();
  showToast('🗑 Διαγράφηκε');
}

function renderSavedConfigs(){
  const wrap=document.getElementById('custom-saved-list');
  if(!wrap)return;
  wrap.innerHTML='';
  if(!db.customConfigs||!db.customConfigs.length){
    wrap.innerHTML='<div style="font-size:11px;color:var(--text3);padding:4px 0">Δεν υπάρχουν αποθηκευμένες ρυθμίσεις.</div>';
    return;
  }
  db.customConfigs.forEach((cfg,i)=>{
    const totalFocus=cfg.cycles.reduce((a,c)=>a+c.focus,0);
    const row=document.createElement('div');
    row.style.cssText='display:flex;align-items:center;gap:6px;padding:6px 8px;background:var(--surface3);border-radius:6px;cursor:pointer;transition:.15s';
    row.innerHTML=`
      <span style="font-size:12px;font-weight:500;color:var(--text);flex:1">${cfg.name}</span>
      <span style="font-size:10px;color:var(--text3)">${cfg.cycles.length} κύκλοι · ${totalFocus}'</span>
      <button onclick="event.stopPropagation();loadCustomConfig(${i})" style="padding:3px 8px;background:rgba(124,99,245,.15);border:1px solid var(--accent3);border-radius:4px;color:var(--accent);font-size:10px;cursor:pointer;font-family:inherit">Φόρτωση</button>
      <button onclick="event.stopPropagation();deleteCustomConfig(${i})" style="width:20px;height:20px;padding:0;background:transparent;border:none;color:var(--text3);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;border-radius:3px" title="Διαγραφή">✕</button>`;
    wrap.appendChild(row);
  });
}

function applyCustomMode(){
  // Read current values from inputs (in case user typed without blur)
  document.querySelectorAll('#custom-cycles-list input').forEach(inp=>{
    const ci=parseInt(inp.dataset.ci);const field=inp.dataset.field;
    if(isNaN(ci)||!field||!T.customCycles[ci])return;
    const v=parseInt(inp.value)||0;
    if(field==='focus')T.customCycles[ci].focus=Math.max(1,Math.min(180,v));
    else T.customCycles[ci].brk=Math.max(0,Math.min(60,v));
  });
  const totalFocus=T.customCycles.reduce((a,c)=>a+c.focus,0);
  const avgBrk=Math.round(T.customCycles.reduce((a,c)=>a+c.brk,0)/T.customCycles.length);
  T.mode={...MODES.find(m=>m.custom),
    focus:T.customCycles[0].focus,
    brk:avgBrk,
    cycles:T.customCycles.length,
    longBreak:0,
    perCycleFocus:T.customCycles.map(c=>c.focus),
    perCycleBrk:T.customCycles.map(c=>c.brk),
  };
  T.mode.desc=T.customCycles.length+" κύκλοι · "+totalFocus+"' εστίαση";
  loadMode(T.mode);showToast('Custom mode εφαρμόστηκε ✓');
}


function loadMode(m){
  clearInterval(T.interval);T.running=false;T.isBreak=false;T.cycle=0;T.doneCycles=0;
  T.maxCycles=m.cycles;
  if(m.freerun){
    T.focusSecs=0;T.breakSecs=0;T.longBreakSecs=0;
    T.remaining=0;T.total=0;T.elapsed=0;
  } else {
    const firstFocus=m.perCycleFocus?m.perCycleFocus[0]*60:m.focus*60;
    T.focusSecs=firstFocus;T.breakSecs=m.brk*60;
    T.longBreakSecs=(m.longBreak||0)*60;T.remaining=firstFocus;T.total=T.remaining;
  }
  T.totalFocusTime=0;T._startTime=null;T._pausedRemaining=null;T.skippedCycles=0;
  document.getElementById('btn-start').textContent='Έναρξη';
  document.getElementById('ring-fill').className='progress-ring-fill';
  // hide skip button for freerun
  const skipBtn=document.querySelector('[onclick="skipPhase()"]');
  if(skipBtn)skipBtn.style.display=m.freerun?'none':'inline-flex';
  updateTimerDisplay();
}

function openIntentPanel(){
  const chips=document.getElementById('intent-chips');chips.innerHTML='';
  db.subjects.forEach(s=>{
    const c=document.createElement('div');c.className='chip';c.textContent=s.name;c.dataset.id=s.id;
    c.style.borderColor=COLORS[s.color]+'55';
    c.onclick=()=>{document.querySelectorAll('#intent-chips .chip').forEach(x=>x.classList.remove('selected'));c.classList.add('selected');};
    chips.appendChild(c);
  });
  document.getElementById('intent-topic').value='';
  document.getElementById('intent-goal').value='';
  // Navigate to timer page first
  showPage('timer');
  // Show panel
  const panel=document.getElementById('intent-panel');
  panel.style.display='block';
  // Smooth scroll to panel
  setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'nearest'}),80);
}
function openIntentModal(){openIntentPanel();}  // backward-compat alias
function closeIntentPanel(){
  document.getElementById('intent-panel').style.display='none';
}
function confirmIntent(){
  const chip=document.querySelector('#intent-chips .chip.selected');
  T.sessionSubjectId=chip?parseInt(chip.dataset.id):null;
  T.sessionTopic=document.getElementById('intent-topic').value;
  T.sessionGoal=document.getElementById('intent-goal').value;
  closeIntentPanel();startActualTimer();updateSubjectPill();
}
function updateSubjectPill(){
  const pill=document.getElementById('t-subject-pill');
  if(T.sessionSubjectId){
    const s=db.subjects.find(x=>x.id===T.sessionSubjectId);
    if(s){pill.style.display='inline-flex';document.getElementById('t-sdot').style.background=COLORS[s.color];document.getElementById('t-sname').textContent=s.name+(T.sessionTopic?' — '+T.sessionTopic:'');return;}
  }
  if(T.sessionTopic){pill.style.display='inline-flex';document.getElementById('t-sdot').style.background='var(--text3)';document.getElementById('t-sname').textContent=T.sessionTopic;return;}
  pill.style.display='none';
}

function toggleTimer(){if(T.running)pauseTimer();else if(!T.sessionStart)openIntentPanel();else resumeTimer();}

function startActualTimer(){
  T.sessionStart=new Date();
  T._startTime=Date.now();
  T._deskState=null;
  if(T.mode&&T.mode.freerun){T.elapsed=0;T._pausedElapsed=0;}
  else{T._pausedRemaining=T.remaining;}
  T.interval=setInterval(tick,500);T.running=true;
  document.getElementById('btn-start').textContent='Παύση';
  document.getElementById('btn-stop').style.display='inline-block';
  document.getElementById('distraction-banner').classList.remove('show');
  const h=new Date().getHours();
  if(h<8)db.stats.earlyBirdDone=true;
  if(h>=23)db.stats.nightOwlDone=true;
  playSound('start');
  setPetTimerState(true);
}
function resumeTimer(){
  T._startTime=Date.now();
  if(T.mode&&T.mode.freerun){/* elapsed accumulated in _pausedElapsed */}
  T.interval=setInterval(tick,500);T.running=true;
  document.getElementById('btn-start').textContent='Παύση';
  playSound('resume');
  setPetTimerState(true);
}
function pauseTimer(){
  clearInterval(T.interval);T.running=false;
  if(T.mode&&T.mode.freerun){T._pausedElapsed=(T.elapsed||0);T._startTime=null;}
  else{T._pausedRemaining=T.remaining;T._startTime=null;}
  document.getElementById('btn-start').textContent='Συνέχεια';
  playSound('pause');
  setPetTimerState(false);
}
function resetTimer(){
  clearInterval(T.interval);T.running=false;T._startTime=null;T._pausedRemaining=null;
  if(T.sessionStart&&T.doneCycles===0){
    T.cancelledInRow++;
    if(T.cancelledInRow>=3)document.getElementById('distraction-banner').classList.add('show');
  }
  T.sessionStart=null;
  document.getElementById('btn-stop').style.display='none';
  loadMode(T.mode);
}

// ── MIDNIGHT SPLIT ────────────────────────────────────────────────
// Splits a session that crosses midnight into per-day segments.
// Returns [{date: ISOString, durationMin: number}, …] ordered oldest→newest.
// Minutes per segment are derived purely from real timestamps to avoid
// negative segments caused by drift between internal counters and wall clock.
function splitSessionByDay(startDate, endDate, totalDurationMin){
  if(totalDurationMin <= 0) return [{date: endDate.toISOString(), durationMin: 0}];

  const startMs = startDate.getTime();
  const endMs   = endDate.getTime();
  const realSpanMin = Math.round((endMs - startMs) / 60000);

  // Clamp totalDurationMin to actual wall-clock span to prevent negative segments
  const safeDur = Math.max(1, Math.min(totalDurationMin, realSpanMin > 0 ? realSpanMin : totalDurationMin));

  // Compute segments using timestamps (not counters)
  const segments = [];
  let cursor = new Date(startMs);

  while(true){
    const nextMidnight = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() + 1);
    if(nextMidnight.getTime() >= endMs){
      // Remaining time fits in current calendar day
      const mins = Math.round((endMs - cursor.getTime()) / 60000);
      if(mins > 0) segments.push({date: endDate.toISOString(), durationMin: mins});
      break;
    }
    // Segment up to midnight
    const mins = Math.round((nextMidnight.getTime() - cursor.getTime()) / 60000);
    if(mins > 0) segments.push({date: new Date(nextMidnight.getTime() - 1).toISOString(), durationMin: mins});
    cursor = nextMidnight;
  }

  if(!segments.length) return [{date: endDate.toISOString(), durationMin: safeDur}];

  // Scale segments proportionally to match safeDur (preserves midnight split ratio)
  const tsTotal = segments.reduce((a,s)=>a+s.durationMin, 0);
  if(tsTotal > 0 && tsTotal !== safeDur){
    let allocated = 0;
    segments.forEach((s, i) => {
      if(i === segments.length - 1){
        s.durationMin = Math.max(1, safeDur - allocated);
      } else {
        s.durationMin = Math.max(1, Math.round(s.durationMin / tsTotal * safeDur));
        allocated += s.durationMin;
      }
    });
  }

  return segments;
}

function stopSession(){
  if(!T.sessionStart)return;
  clearInterval(T.interval);T.running=false;T._startTime=null;
  document.getElementById('btn-start').textContent='Έναρξη';
  document.getElementById('btn-stop').style.display='none';
  const isFreerun=T.mode&&T.mode.freerun;
  // Wall-clock duration as authoritative fallback
  const wallClockMin=Math.max(0, Math.round((Date.now()-T.sessionStart)/60000));
  let dur,score;
  if(isFreerun){
    const counterMin=Math.round((T.elapsed||0)/60);
    dur=counterMin>0?counterMin:wallClockMin;
    score=100;
  } else {
    const focusedSecs=T.totalFocusTime+(T.isBreak?0:Math.max(0,T.focusSecs-(T.remaining||0)));
    const totalPossibleSecs=(T.maxCycles||1)*(T.focusSecs||1);
    const counterMin=Math.round(focusedSecs/60);
    dur=counterMin>0?counterMin:wallClockMin;
    score=Math.round(Math.min(100,(dur*60)/totalPossibleSecs*100));
  }
  // Guard: ensure dur is a valid positive number
  if(!dur||isNaN(dur)||dur<0)dur=0;
  playSound('stop');
  const startDate=new Date(T.sessionStart);
  const now=new Date();
  const segments=splitSessionByDay(startDate, now, dur);
  const baseSession={id:Date.now(),subjectId:T.sessionSubjectId,topic:T.sessionTopic,goal:T.sessionGoal,mode:T.mode.id,focusScore:score,notes:'',difficulties:''};
  const sessRecords=segments.map((seg,i)=>({...baseSession, id:Date.now()+i, date:seg.date, durationMin:seg.durationMin}));
  // The journal entry always references the last (most-recent) segment
  const sess=sessRecords[sessRecords.length-1];
  T.pendingJournal=sess;
  sessRecords.forEach(r=>db.sessions.unshift(r));
  db.stats.totalSessions++;db.stats.totalFocusMin=(db.stats.totalFocusMin||0)+dur;
  const xpGain=dur*XP_PER_MIN;db.stats.xp=(db.stats.xp||0)+xpGain;db.stats.level=levelFromXP(db.stats.xp);
  if(isFreerun)db.stats.freeRunSessions=(db.stats.freeRunSessions||0)+1;
  if(T.mode.id==='deepwork')db.stats.deepWorkSessions=(db.stats.deepWorkSessions||0)+1;
  if(T.mode.id==='flow')db.stats.flowSessions=(db.stats.flowSessions||0)+1;
  const coinsStop=isFreerun?Math.floor(dur/5):dur>=10?Math.floor(dur/10):0;
  let actualCoinsStop=0;
  if(coinsStop>0)actualCoinsStop=earnCoins(coinsStop);
  const xpBefore=db.stats.xp-xpGain;
  const levelBefore=levelFromXP(xpBefore);
  T._deskState='stopped';
  updateStreak();checkAchievements();updatePetAfterSession(dur,score);save();updateSidebar();renderYesterdayBanner();renderDeskScene();
  // Capture label before state reset
  const journalLabel='Τερματισμός · '+(T.sessionTopic||T.mode.name)+' · '+dur+"' · Score: "+score+'%';
  T.sessionStart=null;T.skippedCycles=0;loadMode(T.mode);
  // Floating numbers
  spawnFloatReward('+'+xpGain+' XP','var(--accent)');
  if(actualCoinsStop>0) setTimeout(()=>spawnFloatReward('+'+actualCoinsStop+' 🪙','var(--gold)'),220);
  // Reward modal → then journal
  setTimeout(()=>{
    showRewardModal({
      xpGain, coins:actualCoinsStop,
      xpBefore, xpAfter:db.stats.xp,
      levelBefore, levelAfter:db.stats.level,
      label:'Session · '+(T.sessionTopic||T.mode.name||''),
      onClose:()=>{
        document.getElementById('journal-sub').textContent=journalLabel;
        openJournalPanel();
      }
    });
  },300);
}

function skipPhase(){
  clearInterval(T.interval);T.running=false;T._startTime=null;
  document.getElementById('btn-start').textContent='Έναρξη';
  if(!T.isBreak)T.skippedCycles=(T.skippedCycles||0)+1;
  nextPhase(true);
}
function tick(){
  if(!T.running)return;
  if(T.mode&&T.mode.freerun){
    if(T._startTime){T.elapsed=Math.floor((Date.now()-T._startTime)/1000)+(T._pausedElapsed||0);}
    updateTimerDisplay();
    return;
  }
  if(T._startTime){const elapsed=Math.floor((Date.now()-T._startTime)/1000);T.remaining=Math.max(0,(T._pausedRemaining||T.total)-elapsed);}
  if(T.remaining<=0){nextPhase(false);return;}
  updateTimerDisplay();
}

function nextPhase(skipped){
  clearInterval(T.interval);T.running=false;T._startTime=null;document.getElementById('btn-start').textContent='Έναρξη';
  if(!T.isBreak){
    if(!skipped){
      T.totalFocusTime+=T.focusSecs;
      T.adaptiveData.times.push(T.focusSecs);
    }
    T.cycle++;
    const isLast=T.cycle>=T.maxCycles;
    if(isLast){completeSession(false);return;}
    T.isBreak=true;
    // Per-cycle break support
    const m=T.mode;
    let bSecs;
    if(m.perCycleBrk){
      bSecs=(m.perCycleBrk[T.cycle-1]||m.brk)*60;
    } else {
      bSecs=T.cycle===T.maxCycles-1&&T.longBreakSecs>0?T.longBreakSecs:T.breakSecs;
    }
    T.remaining=bSecs;T.total=bSecs;T._pausedRemaining=bSecs;
    document.getElementById('ring-fill').className='progress-ring-fill break-ring';
    playSound('break_start');notify('Διάλειμμα '+Math.round(bSecs/60)+"'!");
  } else {
    T.doneCycles++;
    if(!skipped)T.cancelledInRow=0;
    if(T.mode.id==='marathon'&&T.doneCycles===1)T.focusSecs=70*60;
    if(T.cycle>=T.maxCycles){completeSession(skipped);return;}
    T.isBreak=false;
    // Per-cycle focus support
    const m=T.mode;
    const nextFocus=m.perCycleFocus?m.perCycleFocus[T.cycle]*60:T.focusSecs;
    T.focusSecs=nextFocus;
    T.remaining=nextFocus;T.total=nextFocus;T._pausedRemaining=nextFocus;
    document.getElementById('ring-fill').className='progress-ring-fill';
    playSound('break_end');notify('Εστίαση! Κύκλος '+(T.cycle+1));
  }
  updateTimerDisplay();
}

function completeSession(skipped){
  document.getElementById('btn-stop').style.display='none';
  // Wall-clock fallback in case totalFocusTime is 0
  const wallClockMin=Math.max(0, Math.round((Date.now()-T.sessionStart)/60000));
  const counterMin=Math.round(T.totalFocusTime/60);
  const dur=counterMin>0?counterMin:wallClockMin;
  const focusScore=skipped?Math.round(((T.doneCycles||0)/(T.maxCycles||1))*100):100;
  playSound('end');
  const startDate=new Date(T.sessionStart);
  const now=new Date();
  const segments=splitSessionByDay(startDate, now, dur);
  const baseSession={id:Date.now(),subjectId:T.sessionSubjectId,topic:T.sessionTopic,goal:T.sessionGoal,mode:T.mode.id,focusScore,notes:'',difficulties:''};
  const sessRecords=segments.map((seg,i)=>({...baseSession, id:Date.now()+i, date:seg.date, durationMin:seg.durationMin}));
  const sess=sessRecords[sessRecords.length-1];
  T.pendingJournal=sess;
  sessRecords.forEach(r=>db.sessions.unshift(r));
  db.stats.totalSessions++;db.stats.totalFocusMin=(db.stats.totalFocusMin||0)+dur;
  const xpGain=dur*XP_PER_MIN;db.stats.xp=(db.stats.xp||0)+xpGain;db.stats.level=levelFromXP(db.stats.xp);
  if(T.mode.id==='marathon')db.stats.marathonDone=true;
  if(T.mode.id==='deepwork')db.stats.deepWorkSessions=(db.stats.deepWorkSessions||0)+1;
  if(T.mode.id==='flow')db.stats.flowSessions=(db.stats.flowSessions||0)+1;
  if(T.mode.id==='freerun')db.stats.freeRunSessions=(db.stats.freeRunSessions||0)+1;
  if(focusScore===100)db.stats.perfectDays=(db.stats.perfectDays||0)+1;
  db.stats.uniqueSubjects=new Set(db.sessions.filter(s=>s.subjectId).map(s=>s.subjectId)).size;
  db.stats.totalSubjects=db.subjects.length;
  const coinsEarned=dur>=10?Math.floor(dur/10)+(focusScore>=100?3:0):0;
  let actualCoins=0;
  if(coinsEarned>0){actualCoins=earnCoins(coinsEarned);}
  const xpBefore=db.stats.xp-xpGain;
  const levelBefore=levelFromXP(xpBefore);
  T._deskState='stopped';
  updateStreak();checkAchievements();updatePetAfterSession(dur,focusScore);save();updateSidebar();renderYesterdayBanner();renderDeskScene();
  const journalLabel=T.mode.name+' · '+(T.sessionTopic||T.mode.name)+' · '+dur+' λεπτά · Score: '+focusScore+'%';
  const rewardLabel=T.mode.name+(T.sessionTopic?' · '+T.sessionTopic:'');
  T.sessionStart=null;T.skippedCycles=0;loadMode(T.mode);
  spawnFloatReward('+'+xpGain+' XP','var(--accent)');
  if(actualCoins>0) setTimeout(()=>spawnFloatReward('+'+actualCoins+' 🪙','var(--gold)'),220);
  setTimeout(()=>{
    showRewardModal({
      xpGain, coins:actualCoins,
      xpBefore, xpAfter:db.stats.xp,
      levelBefore, levelAfter:db.stats.level,
      label:rewardLabel,
      onClose:()=>{
        document.getElementById('journal-sub').textContent=journalLabel;
        openJournalPanel();
      }
    });
  },300);
}

// ── STREAK MILESTONE REWARDS ──────────────────────────────────────
// 5 days → +5, 10 → +10, 20 → +10, 30 → +10, 40 → +10 … (κάθε 10 μετά τη 10η)
function getStreakMilestoneReward(streakDays){
  if(streakDays===5)return 5;
  if(streakDays>=10&&streakDays%10===0)return 10;
  return 0;
}

// ── STREAK RECOVERY LOGIC ─────────────────────────────────────────
function checkStreakRecovery(){
  const today=new Date().toDateString();
  if(db.stats.lastStudyDate===today)return false; // ήδη μελέτησε σήμερα
  if(!db.stats.lastStudyDate||db.stats.streak<=0)return false; // δεν υπήρχε streak
  const last=new Date(db.stats.lastStudyDate);
  const now=new Date();
  const lastDay=new Date(last.getFullYear(),last.getMonth(),last.getDate());
  const nowDay=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const diffDays=Math.round((nowDay-lastDay)/(1000*60*60*24));
  if(diffDays<=1)return false; // diffDays===1 = χθες → συνεχίζει κανονικά
  if(diffDays<1)return false;  // edge case
  // diffDays===2 → χάθηκε ακριβώς 1 μέρα, diffDays===3 → 2 μέρες κ.ο.κ.
  return diffDays-1; // επιστρέφει τις πραγματικά χαμένες μέρες
}

function showStreakRecovery(missedDays){
  const coins=(db.shop||{}).coins||0;
  const canRecover=missedDays===1;
  const canAfford=coins>=10;
  const msg=document.getElementById('streak-recovery-msg');
  const actions=document.getElementById('streak-recovery-actions');
  actions.innerHTML='';
  if(!canRecover){
    msg.innerHTML=`Το streak σου ήταν <strong style="color:var(--gold)">${db.stats.streak} ημέρες</strong> αλλά έχουν περάσει <strong style="color:var(--coral)">${missedDays} ημέρες</strong> χωρίς μελέτη.<br><br><span style="color:var(--coral)">Το streak δεν μπορεί να επαναφερθεί γιατί έχουν περάσει περισσότερες από 1 ημέρες.</span>`;
    const btn=document.createElement('button');btn.className='btn btn-primary';btn.textContent='Εντάξει, ξεκινώ πάλι';
    btn.onclick=()=>{db.stats.streak=0;save();updateSidebar();closeModal('modal-streak-recovery');};
    actions.appendChild(btn);
  } else if(!canAfford){
    msg.innerHTML=`Έχασες το streak σου 😔<br><br>Μπορείς να το επαναφέρεις αλλά <span style="color:var(--coral)">δεν έχεις αρκετά coins</span> (απαιτούνται <strong style="color:var(--gold)">10 🪙</strong>, έχεις <strong>${coins} 🪙</strong>).`;
    const btn=document.createElement('button');btn.className='btn btn-primary';btn.textContent='Εντάξει, ξεκινώ πάλι';
    btn.onclick=()=>{db.stats.streak=0;save();updateSidebar();closeModal('modal-streak-recovery');};
    actions.appendChild(btn);
  } else {
    msg.innerHTML=`Έχασες το streak σου 😔<br><br>Θέλεις να το επαναφέρεις;<br><strong style="color:var(--gold)">Κόστος: 10 🪙</strong> (έχεις ${coins} 🪙)<br><br><span style="font-size:11px;color:var(--text3)">Το streak σου: ${db.stats.streak} ημέρες</span>`;
    const btnYes=document.createElement('button');btnYes.className='btn btn-primary';btnYes.textContent='Ναι, επαναφορά (−10 🪙)';
    btnYes.onclick=()=>{
      db.shop=db.shop||{coins:0};
      db.shop.coins=Math.max(0,(db.shop.coins||0)-10);
      // Ορίζουμε lastStudyDate στο χθες ώστε η επόμενη μελέτη να μετράει κανονικά
      const yest=new Date();yest.setDate(yest.getDate()-1);
      db.stats.lastStudyDate=yest.toDateString();
      save();updateSidebar();closeModal('modal-streak-recovery');
      showToast('✅ Streak επαναφέρθηκε! −10 🪙');
    };
    const btnNo=document.createElement('button');btnNo.className='btn';btnNo.textContent='Όχι, μηδενισμός';
    btnNo.onclick=()=>{db.stats.streak=0;save();updateSidebar();closeModal('modal-streak-recovery');showToast('Streak μηδενίστηκε. Ξεκίνα πάλι! 💪');};
    actions.appendChild(btnNo);
    actions.appendChild(btnYes);
  }
  openModal('modal-streak-recovery');
}

function updateStreak(){
  const today=new Date().toDateString();
  // Already counted today AND streak is valid → nothing to do
  if(db.stats.lastStudyDate===today && db.stats.streak>0)return;

  const yDate=new Date();yDate.setDate(yDate.getDate()-1);
  const yesterday=yDate.toDateString();

  // Check for missed days (streak recovery logic)
  const missedDays=checkStreakRecovery();
  if(missedDays===1){
    // Χάθηκε ακριβώς 1 μέρα → δείξε modal επαναφοράς, μην αγγίξεις το streak ακόμα
    setTimeout(()=>showStreakRecovery(1),400);
    return; // σταμάτα εδώ — το streak ενημερώνεται μόνο αν ο χρήστης μελετήσει ξανά
  } else if(missedDays>=2){
    // Χάθηκαν 2+ μέρες → οριστική απώλεια
    setTimeout(()=>showStreakRecovery(missedDays),400);
    db.stats.streak=0;
  }

  // Determine if streak continues or resets
  const wasYesterday=db.stats.lastStudyDate===yesterday;
  if(wasYesterday){
    // Normal consecutive day: increment
    db.stats.streak=(db.stats.streak||0)+1;
  } else if(!db.stats.lastStudyDate||db.stats.streak===0||missedDays>=2){
    // Fresh start or reset
    db.stats.streak=1;
  } else {
    // Gap of unknown size: reset to 1
    db.stats.streak=1;
  }

  db.stats.lastStudyDate=today;
  if(db.stats.streak>db.stats.maxStreak)db.stats.maxStreak=db.stats.streak;

  const milestoneCoins=getStreakMilestoneReward(db.stats.streak);
  if(milestoneCoins>0){
    earnCoins(milestoneCoins);
    setTimeout(()=>{
      document.getElementById('streak-milestone-msg').innerHTML=
        `Έφτασες <strong style="color:var(--gold)">${db.stats.streak} ημέρες streak</strong>!<br>Κερδίζεις <strong style="color:var(--gold)">+${milestoneCoins} 🪙</strong> bonus!`;
      openModal('modal-streak-milestone');
    },600);
  }
}

function openJournalPanel(){
  var p=document.getElementById('journal-panel');
  p.style.display='block';
  p.scrollTop=0;
  // Ensure we're on timer page view so panel is on top
  showPage('timer');
}
function closeJournalPanel(){
  document.getElementById('journal-panel').style.display='none';
}
function saveJournal(doSave){
  if(T.pendingJournal&&doSave){
    const idx=db.sessions.findIndex(s=>s.id===T.pendingJournal.id);
    if(idx>=0){db.sessions[idx].notes=document.getElementById('journal-done').value;db.sessions[idx].difficulties=document.getElementById('journal-diff').value;}
  }
  T.pendingJournal=null;document.getElementById('journal-done').value='';document.getElementById('journal-diff').value='';save();closeJournalPanel();
}

function updateTimerDisplay(){
  const isFreerun=T.mode&&T.mode.freerun;
  if(isFreerun){
    const elapsed=T.elapsed||0;
    const m=Math.floor(elapsed/60),s=elapsed%60;
    document.getElementById('time-display').textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    document.getElementById('time-display').className='timer-display';
    document.getElementById('t-phase-lbl').textContent='ΕΣΤΙΑΣΗ';
    document.getElementById('t-cycle-lbl').textContent='Free Run';
    document.getElementById('ring-fill').style.strokeDashoffset=(CIRC*(1-(elapsed%3600)/3600)).toFixed(2);
    const dots=document.getElementById('cycle-dots');dots.innerHTML='';
    document.getElementById('ms-done').textContent='—';
    document.getElementById('ms-time').textContent=m+"'";
    document.getElementById('ms-score').textContent=T.sessionStart?'∞':'—';
  } else {
    const m=Math.floor(T.remaining/60),s=T.remaining%60;
    document.getElementById('time-display').textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    document.getElementById('time-display').className='timer-display'+(T.isBreak?' break-mode':'');
    document.getElementById('t-phase-lbl').textContent=T.isBreak?(T.remaining===T.longBreakSecs&&T.longBreakSecs>0?'ΜΕΓΑΛΟ ΔΙΑΛΕΙΜΜΑ':'ΔΙΑΛΕΙΜΜΑ'):'ΕΣΤΙΑΣΗ';
    document.getElementById('t-cycle-lbl').textContent='κύκλος '+(T.cycle+1)+' / '+T.maxCycles;
    const pct=T.total>0?(T.total-T.remaining)/T.total:0;
    document.getElementById('ring-fill').style.strokeDashoffset=(CIRC*(1-pct)).toFixed(2);
    const dots=document.getElementById('cycle-dots');dots.innerHTML='';
    for(let i=0;i<T.maxCycles;i++){const d=document.createElement('div');d.className='cdot'+(i<T.doneCycles?' done':i===T.cycle?' current':'');dots.appendChild(d);}
    document.getElementById('ms-done').textContent=T.doneCycles;
    document.getElementById('ms-time').textContent=Math.round(T.totalFocusTime/60)+"'";
    const liveScore=T.maxCycles>0?Math.round(Math.min(100,(T.totalFocusTime+(T.isBreak?0:Math.max(0,T.focusSecs-T.remaining)))/(T.maxCycles*T.focusSecs)*100)):0;
    document.getElementById('ms-score').textContent=T.sessionStart?liveScore+'%':'—';
  }
  const todayMins=getTodayMins();const goalMins=db.stats.dailyGoalMins||120;const pctG=Math.min(100,Math.round(todayMins/goalMins*100));
  document.getElementById('goal-text').textContent=todayMins+' / '+goalMins+"' εστίαση";
  document.getElementById('goal-pct').textContent=pctG+'%';
  document.getElementById('goal-fill').style.width=pctG+'%';
  const fb=document.getElementById('btn-focus-mode');
  if(fb){if(T.sessionStart)fb.classList.add('visible');else{fb.classList.remove('visible');exitFocusMode();}}
  updateFocusOverlay();
}
function getTodayMins(){const t=new Date().toDateString();return (db.sessions||[]).filter(s=>s&&new Date(s.date).toDateString()===t).reduce((a,s)=>a+(s.durationMin||0),0);}

