const COLORS=[
  '#c8b8ff','#4fd1b0','#f5c842','#ff7e6b','#f06aaf','#6bcb8b','#85b7eb','#ef9f27',
  '#ff6b6b','#ffd93d','#6bcbff','#a29bfe','#fd79a8','#00cec9','#e17055','#74b9ff',
  '#55efc4','#fdcb6e','#d63031','#0984e3','#6c5ce7','#00b894','#e84393','#fab1a0',
  '#81ecec','#b2bec3','#ff7675','#2d3436','#636e72','#dfe6e9',
];
const DAYS=['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'];
const CIRC=552.92;

const MODES=[
  {id:'sprint',name:'Sprint',badge:'🏃',focus:20,brk:5,cycles:4,longBreak:0,
    desc:'4 κύκλοι · 20λ εστίαση · 5λ διάλειμμα'},
  {id:'classic',name:'Classic',badge:'🍅',focus:25,brk:5,cycles:4,longBreak:15,
    desc:'4 κύκλοι · 25λ εστίαση · 5λ διάλειμμα · 15λ μεγάλο διάλειμμα'},
  {id:'deepwork',name:'Deep Work',badge:'🧠',focus:30,brk:10,cycles:3,longBreak:0,
    desc:'3 κύκλοι · 30λ εστίαση · 10λ διάλειμμα'},
  {id:'flow',name:'Flow',badge:'🌊',focus:60,brk:20,cycles:2,longBreak:0,
    desc:'2 κύκλοι · 60λ εστίαση · 20λ διάλειμμα'},
  {id:'marathon',name:'Marathon',badge:'🏁',focus:90,brk:20,cycles:2,longBreak:0,
    desc:'90λ εστίαση · 20λ διάλειμμα · 70λ εστίαση',marathon:true},
  {id:'custom',name:'Custom',badge:'⚙',focus:25,brk:5,cycles:4,longBreak:0,
    desc:'Ορίζεις μόνος σου κάθε κύκλο',custom:true},
  {id:'freerun',name:'Free Run',badge:'∞',focus:0,brk:0,cycles:1,longBreak:0,
    desc:'Ο χρόνος μετράει από 0 — σταματάς όταν θες',freerun:true},
];

const ACHIEVEMENTS=[
  // ── SESSIONS ──
  {id:'first',icon:'🌱',name:'Πρώτο βήμα',desc:'Ολοκλήρωσε 1 session',xp:50,check:s=>s.totalSessions>=1},
  {id:'s5',icon:'✌',name:'Πρώτη πεντάδα',desc:'5 sessions συνολικά',xp:100,check:s=>s.totalSessions>=5},
  {id:'s10',icon:'🎯',name:'Δεκάρα',desc:'10 sessions συνολικά',xp:150,check:s=>s.totalSessions>=10},
  {id:'s20',icon:'💪',name:'Τακτικός μαθητής',desc:'20 sessions',xp:250,check:s=>s.totalSessions>=20},
  {id:'s50',icon:'🏆',name:'50 sessions',desc:'50 ολοκληρωμένα',xp:500,check:s=>s.totalSessions>=50},
  {id:'s100',icon:'💎',name:'Centenary',desc:'100 sessions!',xp:1000,check:s=>s.totalSessions>=100},
  {id:'s200',icon:'👑',name:'Θρύλος',desc:'200 sessions!',xp:2000,check:s=>s.totalSessions>=200},
  {id:'s500',icon:'🌌',name:'Αιώνιος',desc:'500 sessions!',xp:5000,check:s=>s.totalSessions>=500},

  // ── ΩΡΕΣ ──
  {id:'h1',icon:'⏱',name:'1 ώρα',desc:'1 ώρα συνολικής εστίασης',xp:75,check:s=>s.totalFocusMin>=60},
  {id:'h5',icon:'⏰',name:'5 ώρες',desc:'5 ώρες συνολικά',xp:150,check:s=>s.totalFocusMin>=300},
  {id:'h10',icon:'📚',name:'10 ώρες',desc:'10 ώρες συνολικά',xp:300,check:s=>s.totalFocusMin>=600},
  {id:'h25',icon:'📖',name:'25 ώρες',desc:'25 ώρες συνολικά',xp:600,check:s=>s.totalFocusMin>=1500},
  {id:'h50',icon:'🎓',name:'50 ώρες',desc:'50 ώρες συνολικά',xp:1000,check:s=>s.totalFocusMin>=3000},
  {id:'h100',icon:'🌟',name:'100 ώρες',desc:'100 ώρες εστίασης!',xp:2000,check:s=>s.totalFocusMin>=6000},
  {id:'h250',icon:'🔭',name:'250 ώρες',desc:'250 ώρες εστίασης!',xp:4000,check:s=>s.totalFocusMin>=15000},
  {id:'h500',icon:'🏛',name:'500 ώρες',desc:'500 ώρες εστίασης!',xp:8000,check:s=>s.totalFocusMin>=30000},

  // ── STREAK ──
  {id:'streak2',icon:'✨',name:'2 μέρες',desc:'2 συνεχόμενες μέρες',xp:75,check:s=>s.maxStreak>=2},
  {id:'streak3',icon:'🔥',name:'3-day streak',desc:'3 συνεχόμενες μέρες',xp:150,check:s=>s.maxStreak>=3},
  {id:'streak7',icon:'🔥🔥',name:'7-day streak',desc:'7 συνεχόμενες μέρες',xp:400,check:s=>s.maxStreak>=7},
  {id:'streak14',icon:'🌙',name:'2 εβδομάδες',desc:'14-day streak',xp:700,check:s=>s.maxStreak>=14},
  {id:'streak30',icon:'🔥🔥🔥',name:'30-day streak',desc:'Μήνας συνέπειας!',xp:1500,check:s=>s.maxStreak>=30},
  {id:'streak60',icon:'💫',name:'60-day streak',desc:'2 μήνες αδιάλειπτα!',xp:3000,check:s=>s.maxStreak>=60},
  {id:'streak100',icon:'🌈',name:'100-day streak',desc:'100 μέρες — απίστευτο!',xp:6000,check:s=>s.maxStreak>=100},

  // ── MODES ──
  {id:'marathon_done',icon:'🏁',name:'Marathoner',desc:'Τελείωσε Marathon mode',xp:300,check:s=>s.marathonDone},
  {id:'deep5',icon:'🧠',name:'Deep Thinker',desc:'5 Deep Work sessions',xp:250,check:s=>s.deepWorkSessions>=5},
  {id:'deep10',icon:'🔬',name:'Researcher',desc:'10 Deep Work sessions',xp:500,check:s=>s.deepWorkSessions>=10},
  {id:'deep25',icon:'⚗',name:'Επιστήμονας',desc:'25 Deep Work sessions',xp:1000,check:s=>s.deepWorkSessions>=25},
  {id:'flow5',icon:'🌊',name:'Flow State',desc:'5 Flow sessions',xp:300,check:s=>s.flowSessions>=5},
  {id:'flow15',icon:'🌀',name:'Flow Master',desc:'15 Flow sessions',xp:700,check:s=>s.flowSessions>=15},
  {id:'freerun5',icon:'∞',name:'Ελεύθερος',desc:'5 Free Run sessions',xp:200,check:s=>(s.freeRunSessions||0)>=5},
  {id:'freerun20',icon:'🕊',name:'Αδέσμευτος',desc:'20 Free Run sessions',xp:600,check:s=>(s.freeRunSessions||0)>=20},

  // ── ΤΕΛΕΙΟΤΗΤΑ ──
  {id:'perfect_day',icon:'⭐',name:'Perfect Day',desc:'Focus score 100 σε session',xp:300,check:s=>s.perfectDays>=1},
  {id:'perfect5',icon:'🌠',name:'5 Perfect sessions',desc:'5 φορές score 100',xp:700,check:s=>s.perfectDays>=5},
  {id:'perfect20',icon:'💠',name:'Perfectionist',desc:'20 φορές score 100',xp:1500,check:s=>s.perfectDays>=20},

  // ── ΩΡΑ ΗΜΕΡΑΣ ──
  {id:'early_bird',icon:'🌅',name:'Early Bird',desc:'Session πριν τις 8πμ',xp:150,check:s=>s.earlyBirdDone},
  {id:'night_owl',icon:'🦉',name:'Night Owl',desc:'Session μετά τις 23:00',xp:150,check:s=>s.nightOwlDone},

  // ── SUBJECTS ──
  {id:'multi_subject',icon:'📖',name:'Πολυμαθής',desc:'Sessions σε 3+ subjects',xp:200,check:s=>s.uniqueSubjects>=3},
  {id:'multi_subject5',icon:'🗺',name:'Ερευνητής',desc:'Sessions σε 5+ subjects',xp:400,check:s=>s.uniqueSubjects>=5},
  {id:'subject5',icon:'🗂',name:'Οργανωμένος',desc:'5+ subjects δημιουργημένα',xp:150,check:s=>s.totalSubjects>=5},
  {id:'subject10',icon:'📋',name:'Αναλυτικός',desc:'10+ subjects δημιουργημένα',xp:350,check:s=>s.totalSubjects>=10},

  // ── LEVELS ──
  {id:'lvl5',icon:'🚀',name:'Level 5',desc:'Φτάσε Level 5',xp:500,check:s=>levelFromXP(s.xp||0)>=5},
  {id:'lvl10',icon:'🛸',name:'Level 10',desc:'Φτάσε Level 10',xp:1000,check:s=>levelFromXP(s.xp||0)>=10},
  {id:'lvl15',icon:'⚡',name:'Level 15',desc:'Φτάσε Level 15',xp:2000,check:s=>levelFromXP(s.xp||0)>=15},
  {id:'lvl20',icon:'🌋',name:'Level 20',desc:'Φτάσε Level 20',xp:5000,check:s=>levelFromXP(s.xp||0)>=20},
];

// ── XP / LEVEL SYSTEM ──────────────────────────────────────────────
// 5 XP per minute of focus
// Level N→N+1 costs: 200 * 1.5^(N-1) XP  (BASE=200, SCALE=1.5)
// Level 1→2: 200 XP (~0.4 days), 5→6: ~1013 XP (~2.3 days), 10→11: ~7689 XP (~17 days)
const XP_PER_MIN = 5;
const XP_BASE    = 200;
const XP_SCALE   = 1.5;
function xpToNextLevel(lv){ return Math.round(XP_BASE * Math.pow(XP_SCALE, lv-1)); }
function xpForLevel(lv){ if(lv<=1)return 0; let t=0; for(let i=1;i<lv;i++)t+=xpToNextLevel(i); return t; }
function levelFromXP(totalXP){ let lv=1; while(totalXP>=xpForLevel(lv+1))lv++; return lv; }
function xpProgressInLevel(totalXP){ const lv=levelFromXP(totalXP); const base=xpForLevel(lv); const needed=xpToNextLevel(lv); return{lv,current:totalXP-base,needed,pct:Math.round((totalXP-base)/needed*100)}; }
// ───────────────────────────────────────────────────────────────────

// ── Pet XP & Milestones (must be defined before any session logic) ──
const PET_XP_PER_MIN = 3;
function petXpToNext(lv){ return 80 + lv * 40; }
function petXpForLevel(lv){ if(lv<=1)return 0; let t=0; for(let i=1;i<lv;i++)t+=petXpToNext(i); return t; }
function petLevelFromXP(xp){ let lv=1; while(xp>=petXpForLevel(lv+1))lv++; return lv; }
function petXpProgress(xp){ const lv=petLevelFromXP(xp); const base=petXpForLevel(lv); const needed=petXpToNext(lv); const cur=xp-base; return{lv,cur,needed,pct:Math.min(100,Math.round(cur/needed*100))}; }

const PET_MILESTONES=[
  {id:'pm_first',  icon:'🌱', name:'Πρώτη Γνωριμία', desc:'Πρώτο session μαζί',       check:p=>{var ps=(p.petStates&&p.petStates[p.activePetId||'ghost'])||{};return (ps.totalStudyMins||p.totalStudyMins||0)>=1;}},
  {id:'pm_1h',     icon:'⏱',  name:'1 Ώρα Μαζί',     desc:'1 ώρα συνολικά',           check:p=>{var ps=(p.petStates&&p.petStates[p.activePetId||'ghost'])||{};return (ps.totalStudyMins||p.totalStudyMins||0)>=60;}},
  {id:'pm_5h',     icon:'📚', name:'5 Ώρες Μαζί',    desc:'5 ώρες συνολικά',          check:p=>{var ps=(p.petStates&&p.petStates[p.activePetId||'ghost'])||{};return (ps.totalStudyMins||p.totalStudyMins||0)>=300;}},
  {id:'pm_10h',    icon:'🎓', name:'10 Ώρες',         desc:'Αφοσιωμένος μαθητής',      check:p=>{var ps=(p.petStates&&p.petStates[p.activePetId||'ghost'])||{};return (ps.totalStudyMins||p.totalStudyMins||0)>=600;}},
  {id:'pm_lv3',    icon:'⭐', name:'Level 3 Pet',     desc:'Ανέβηκες στο level 3',     check:p=>petLevelFromXP((p.petXPs&&p.petXPs[p.activePetId||'ghost'])||p.petXP||0)>=3},
  {id:'pm_lv5',    icon:'🌟', name:'Level 5 Pet',     desc:'Ανέβηκες στο level 5',     check:p=>petLevelFromXP((p.petXPs&&p.petXPs[p.activePetId||'ghost'])||p.petXP||0)>=5},
  {id:'pm_lv10',   icon:'💎', name:'Level 10 Pet',    desc:'Φτάσε Level 10!',          check:p=>petLevelFromXP((p.petXPs&&p.petXPs[p.activePetId||'ghost'])||p.petXP||0)>=10},
  {id:'pm_5sess',  icon:'✌',  name:'5 σε μια Μέρα',  desc:'5 sessions σε μία ημέρα',  check:p=>(p.maxDailySessions||0)>=5},
  {id:'pm_boost5', icon:'⚡', name:'Τροφοδότης',      desc:'5 φορές boost',             check:p=>(p.totalBoosts||0)>=5},
  {id:'pm_happy',  icon:'😊', name:'Χαρούμενο Pet',  desc:'Happiness 100% για 1 session',check:p=>(p.perfectHappySessions||0)>=1},
  {id:'pm_quest7', icon:'📋', name:'Quest Master',    desc:'7 daily quests ολοκλήρωσε', check:p=>(p.totalQuestsDone||0)>=7},
  {id:'pm_3pets',  icon:'🐾', name:'Συλλέκτης',      desc:'Απόκτησε 3 διαφορετικά pets',check:p=>(p.owned||['ghost']).length>=3},
];

let db={
  subjects:[{id:1,name:'Μαθηματικά',color:0,notes:''},{id:2,name:'Φυσική',color:1,notes:''},{id:3,name:'Αγγλικά',color:2,notes:''}],
  sessions:[],
  profile:{username:'Φοιτητής',pinnedAchievement:null},
  stats:{totalSessions:0,totalFocusMin:0,streak:0,maxStreak:0,lastStudyDate:'',xp:0,level:1,cancelledInRow:0,marathonDone:false,deepWorkSessions:0,perfectDays:0,earlyBirdDone:false,nightOwlDone:false,uniqueSubjects:0,flowSessions:0,totalSubjects:3,dailyGoalMins:120},
  achievements:[],
  customConfigs:[],
  dayNotes:{},
  exams:[],
};

let T={
  running:false,isBreak:false,remaining:0,total:0,cycle:0,maxCycles:4,
  focusSecs:0,breakSecs:0,longBreakSecs:0,doneCycles:0,totalFocusTime:0,
  cancelledInRow:0,skippedCycles:0,interval:null,mode:MODES[1],sessionStart:null,
  _startTime:null,_pausedRemaining:null,_deskState:null,
  sessionSubjectId:null,sessionTopic:'',sessionGoal:'',
  adaptiveData:{times:[]},pendingJournal:null,
  dashTab:'today',pieTab:'all',selectedColor:0,activeSubjectId:null,historyFilter:null,
  customCycles:[{focus:25,brk:5},{focus:25,brk:5},{focus:25,brk:5}],
};

function save(){try{localStorage.setItem('ff3',JSON.stringify(db));}catch(e){}}
function load(){
  const KEYS=['ff3','ff_db2','ff_db'];
  let raw=null;
  for(const k of KEYS){const d=localStorage.getItem(k);if(d){raw=d;break;}}
  if(!raw)return;
  try{
    const p=JSON.parse(raw);
    if(p.subjects)db.subjects=p.subjects.map(s=>({notes:'',...s}));
    if(p.sessions)db.sessions=p.sessions;
    if(p.stats)db.stats={...db.stats,...p.stats};
    if(p.achievements)db.achievements=p.achievements;
    if(p.shop)db.shop=p.shop;
    if(p.customConfigs)db.customConfigs=p.customConfigs;
    if(p.dayNotes)db.dayNotes=p.dayNotes;
    if(p.exams)db.exams=p.exams;
    if(p.profile)db.profile={...db.profile,...p.profile};
    if(p.pet){
      db.pet=p.pet;
      // Strip any serialized (broken) check functions from stored quests.
      // Guard against null entries or non-array dailyQuests from corrupt saves.
      if(Array.isArray(db.pet.dailyQuests)){
        db.pet.dailyQuests=db.pet.dailyQuests
          .filter(q=>q&&typeof q==='object'&&q.id)
          .map(q=>({id:q.id,text:q.text||'',reward:q.reward||0,done:!!q.done}));
      } else {
        db.pet.dailyQuests=null; // force rebuild on next getPetDailyQuests()
      }
    }
    save();
  }catch(e){}
}
load();
/* ── Storage keys (must match the app's save() function) ── */
var FF_KEYS=['ff3','ff_db2','ff_db'];
var FF_PRIMARY_KEY='ff3';

function ffReadData(){
  for(var i=0;i<FF_KEYS.length;i++){
    var raw=localStorage.getItem(FF_KEYS[i]);
    if(raw) try{return JSON.parse(raw);}catch(e){}
  }
  return null;
}

/* ── EXPORT ── */
function exportFocusFlowData(){
  try{
    var data=ffReadData();
    if(!data){showToast('⚠ Δεν υπάρχουν δεδομένα για εξαγωγή.');return;}
    var exportObj={
      _app:'FocusFlow',
      _version:'5',
      _exported:new Date().toISOString(),
      data:data
    };
    var blob=new Blob([JSON.stringify(exportObj,null,2)],{type:'application/json'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    var date=new Date().toISOString().slice(0,10);
    a.href=url;
    a.download='focusflow_backup_'+date+'.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){URL.revokeObjectURL(url);document.body.removeChild(a);},1000);
    showToast('✅ Τα δεδομένα εξήχθησαν επιτυχώς!');
  }catch(e){
    showToast('❌ Σφάλμα κατά την εξαγωγή.');
    console.error(e);
  }
}

/* ── IMPORT ── */
function importFocusFlowData(input){
  var file=input.files[0];
  if(!file) return;
  input.value='';

  var statusEl=document.getElementById('import-status');
  function setStatus(msg,ok){
    statusEl.style.display='block';
    statusEl.style.background=ok?'rgba(107,203,139,.12)':'rgba(255,126,107,.12)';
    statusEl.style.border='1px solid '+(ok?'rgba(107,203,139,.3)':'rgba(255,126,107,.3)');
    statusEl.style.color=ok?'var(--green)':'var(--coral)';
    statusEl.innerHTML=msg;
  }

  if(!file.name.endsWith('.json')&&file.type!=='application/json'){
    setStatus('❌ Μη έγκυρος τύπος αρχείου. Επίλεξε ένα αρχείο <strong>.json</strong>.',false);
    return;
  }

  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var parsed=JSON.parse(e.target.result);

      // Accept wrapped {_app, data} or raw db object
      var incoming;
      if(parsed._app==='FocusFlow'&&parsed.data){
        incoming=parsed.data;
      }else if(parsed.sessions||parsed.subjects||parsed.streak!==undefined||parsed.coins!==undefined){
        incoming=parsed;
      }else{
        setStatus('❌ Το αρχείο δεν αναγνωρίστηκε ως αντίγραφο FocusFlow.',false);
        return;
      }

      // Normalize legacy flat format: top-level streak/coins -> nested stats/shop
      if(incoming.streak!==undefined&&!incoming.stats){
        incoming.stats=incoming.stats||{};
        incoming.stats.streak=incoming.streak;
      }
      if(incoming.streak!==undefined&&incoming.stats&&incoming.stats.streak===undefined){
        incoming.stats.streak=incoming.streak;
      }
      if(incoming.coins!==undefined&&!incoming.shop){
        incoming.shop=incoming.shop||{};
        incoming.shop.coins=incoming.coins;
      }
      if(incoming.coins!==undefined&&incoming.shop&&incoming.shop.coins===undefined){
        incoming.shop.coins=incoming.coins;
      }

      var sessionCount=(incoming.sessions||[]).length;
      var subjectCount=Object.keys(incoming.subjects||{}).length;

      var confirmed=window.confirm(
        '⚠ Εισαγωγή δεδομένων\n\n'+
        'Βρέθηκαν: '+sessionCount+' sessions, '+subjectCount+' subjects.\n\n'+
        'Τα ΤΡΕΧΟΝΤΑ δεδομένα θα αντικατασταθούν πλήρως.\nΣυνέχεια;'
      );
      if(!confirmed){setStatus('ℹ Η εισαγωγή ακυρώθηκε.',true);return;}

      // Write with the correct primary key so the app loads it on reload
      localStorage.setItem(FF_PRIMARY_KEY,JSON.stringify(incoming));

      setStatus(
        '✅ Εισαγωγή επιτυχής! Βρέθηκαν <strong>'+sessionCount+' sessions</strong> και <strong>'+subjectCount+' subjects</strong>.<br>'+
        '<span style="font-size:11px;opacity:.8">Η σελίδα θα ανανεωθεί σε 2 δευτερόλεπτα…</span>',
        true
      );
      showToast('✅ Δεδομένα εισήχθησαν! Ανανέωση…');
      setTimeout(function(){location.reload();},2000);

    }catch(err){
      setStatus('❌ Το αρχείο δεν ήταν έγκυρο JSON. Βεβαιώσου ότι το αρχείο δεν είναι κατεστραμμένο.',false);
      console.error(err);
    }
  };
  reader.onerror=function(){setStatus('❌ Σφάλμα κατά την ανάγνωση του αρχείου.',false);};
  reader.readAsText(file);
}
// ── SESSION PERSISTENCE (iOS Safari resilience) ──────────────────────
// Saves active timer state to localStorage so it survives process kills.
// Key: ff_active_session

const FF_SESSION_KEY = 'ff_active_session';

function saveActiveSession() {
  if (!T.sessionStart) {
    localStorage.removeItem(FF_SESSION_KEY);
    return;
  }
  try {
    const snap = {
      sessionStart: T.sessionStart.getTime(),
      modeId: T.mode ? T.mode.id : 'classic',
      isBreak: T.isBreak,
      cycle: T.cycle,
      doneCycles: T.doneCycles,
      maxCycles: T.maxCycles,
      remaining: T.remaining,
      total: T.total,
      focusSecs: T.focusSecs,
      breakSecs: T.breakSecs,
      longBreakSecs: T.longBreakSecs,
      totalFocusTime: T.totalFocusTime,
      elapsed: T.elapsed || 0,
      _pausedRemaining: T._pausedRemaining,
      _pausedElapsed: T._pausedElapsed || 0,
      running: T.running,
      sessionSubjectId: T.sessionSubjectId,
      sessionTopic: T.sessionTopic,
      sessionGoal: T.sessionGoal,
      customCycles: T.customCycles,
      savedAt: Date.now()
    };
    localStorage.setItem(FF_SESSION_KEY, JSON.stringify(snap));
  } catch(e) {}
}

function clearActiveSession() {
  localStorage.removeItem(FF_SESSION_KEY);
}

function restoreActiveSession() {
  try {
    const raw = localStorage.getItem(FF_SESSION_KEY);
    if (!raw) return false;
    const snap = JSON.parse(raw);
    if (!snap || !snap.sessionStart) return false;

    // Αν πέρασαν πάνω από 4 ώρες, πετάμε τη session (πιθανόν τελείωσε)
    if (Date.now() - snap.savedAt > 4 * 60 * 60 * 1000) {
      localStorage.removeItem(FF_SESSION_KEY);
      return false;
    }

    // Ανακατασκευή mode
    let mode = MODES.find(m => m.id === snap.modeId) || MODES[1];
    if (snap.modeId === 'custom' && snap.customCycles) {
      const totalFocus = snap.customCycles.reduce((a, c) => a + c.focus, 0);
      const avgBrk = Math.round(snap.customCycles.reduce((a, c) => a + c.brk, 0) / snap.customCycles.length);
      mode = {
        ...MODES.find(m => m.custom),
        focus: snap.customCycles[0].focus,
        brk: avgBrk,
        cycles: snap.customCycles.length,
        perCycleFocus: snap.customCycles.map(c => c.focus),
        perCycleBrk: snap.customCycles.map(c => c.brk),
        desc: snap.customCycles.length + ' κύκλοι · ' + totalFocus + '\' εστίαση'
      };
      T.customCycles = snap.customCycles;
    }

    // Ανακατασκευή T state
    T.mode = mode;
    T.sessionStart = new Date(snap.sessionStart);
    T.isBreak = snap.isBreak;
    T.cycle = snap.cycle;
    T.doneCycles = snap.doneCycles;
    T.maxCycles = snap.maxCycles;
    T.total = snap.total;
    T.focusSecs = snap.focusSecs;
    T.breakSecs = snap.breakSecs;
    T.longBreakSecs = snap.longBreakSecs;
    T.totalFocusTime = snap.totalFocusTime;
    T.sessionSubjectId = snap.sessionSubjectId;
    T.sessionTopic = snap.sessionTopic;
    T.sessionGoal = snap.sessionGoal;
    T.running = false; // Θα γίνει resume παρακάτω αυτόματα

    if (mode.freerun) {
      const offlineGap = Math.floor((Date.now() - snap.savedAt) / 1000);
      T.elapsed = snap.elapsed + (snap.running ? offlineGap : 0);
      T._pausedElapsed = T.elapsed;
      T._startTime = null;
    } else {
      const offlineGap = Math.floor((Date.now() - snap.savedAt) / 1000);
      let remaining = snap.remaining;
      if (snap.running) {
        remaining = Math.max(0, snap.remaining - offlineGap);
      }
      T.remaining = remaining;
      T._pausedRemaining = remaining;
      T._startTime = null;
    }

    return true;
  } catch(e) {
    localStorage.removeItem(FF_SESSION_KEY);
    return false;
  }
}

// Hooks σε όλες τις state-changing functions
const _origStartActualTimer = startActualTimer;
window.startActualTimer = function() {
  _origStartActualTimer.apply(this, arguments);
  saveActiveSession();
};

const _origResumeTimer = resumeTimer;
window.resumeTimer = function() {
  _origResumeTimer.apply(this, arguments);
  saveActiveSession();
};

const _origPauseTimer = pauseTimer;
window.pauseTimer = function() {
  _origPauseTimer.apply(this, arguments);
  saveActiveSession();
};

const _origResetTimer = resetTimer;
window.resetTimer = function() {
  _origResetTimer.apply(this, arguments);
  clearActiveSession();
};

const _origStopSession = stopSession;
window.stopSession = function() {
  _origStopSession.apply(this, arguments);
  clearActiveSession();
};

const _origCompleteSession = completeSession;
window.completeSession = function() {
  _origCompleteSession.apply(this, arguments);
  clearActiveSession();
};

// Αποθήκευση κάθε ~5 δευτερόλεπτα κατά τη διάρκεια tick
const _origTick = tick;
window.tick = function() {
  _origTick.apply(this, arguments);
  if (T.running && T.sessionStart) {
    if (!window._tickSaveCount) window._tickSaveCount = 0;
    window._tickSaveCount++;
    if (window._tickSaveCount % 10 === 0) saveActiveSession();
  }
};

// ── STARTUP: έλεγχος για ενεργή session πριν φανεί οτιδήποτε ────────
(function initWithSessionRestore() {
  const hasSession = restoreActiveSession();

  if (hasSession) {
    // Κρύψε το welcome screen εντελώς — χωρίς flash
    const ws = document.getElementById('welcome-screen');
    if (ws) { ws.style.display = 'none'; }

    // Ανακατασκευή UI για την επαναφερθείσα session
    buildModeSelector();
    document.getElementById('btn-stop').style.display = 'inline-block';
    document.getElementById('ring-fill').className = 'progress-ring-fill' + (T.isBreak ? ' break-ring' : '');
    updateSubjectPill();
    updateTimerDisplay();
    renderDeskScene();

    // Auto-resume — συνεχίζει αυτόματα χωρίς να χρειαστεί ο χρήστης να πατήσει κάτι
    resumeTimer();

    // Toast ενημέρωσης
    setTimeout(() => {
      const elapsed = Math.round((Date.now() - T.sessionStart.getTime()) / 60000);
      showToast('🔄 Session επαναφέρθηκε! (' + elapsed + '\' πριν)');
    }, 600);
  }
})();
