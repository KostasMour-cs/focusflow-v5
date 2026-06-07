const PET_DEFS=[
  // ── Starter ──────────────────────────────────────────────────────
  {id:'ghost',      name:'Pixel',      cost:0,   svg:petSvgGhost,      desc:'Starter ghost 👻',           category:'classic'},
  // ── Classic ──────────────────────────────────────────────────────
  {id:'robot',      name:'Circuit',    cost:50,  svg:petSvgRobot,      desc:'Tech companion 🤖',           category:'classic'},
  {id:'plant',      name:'Sprout',     cost:80,  svg:petSvgPlant,      desc:'Growing alongside you 🌿',   category:'classic'},
  {id:'cat',        name:'Mochi',      cost:100, svg:petSvgCat,        desc:'Soft & focused 🐱',           category:'classic'},
  {id:'penguin',    name:'Waddle',     cost:120, svg:petSvgPenguin,    desc:'Cool & steady 🐧',            category:'classic'},
  {id:'bunny',      name:'Hops',       cost:150, svg:petSvgBunny,      desc:'Always curious 🐰',           category:'classic'},
  {id:'dragon',     name:'Ember',      cost:180, svg:petSvgDragon,     desc:'Fierce focus 🐉',             category:'classic'},
  {id:'star',       name:'Nova',       cost:220, svg:petSvgStar,       desc:'Shine bright ⭐',             category:'classic'},
  // ── Ζώα ──────────────────────────────────────────────────────────
  {id:'bear',       name:'Cub',        cost:130, svg:petSvgBear,       desc:'Cozy study buddy 🐻',         category:'animals'},
  {id:'fox',        name:'Rusty',      cost:150, svg:petSvgFox,        desc:'Clever & curious 🦊',         category:'animals'},
  {id:'wolf',       name:'Lunar',      cost:170, svg:petSvgWolf,       desc:'Focused like a wolf 🐺',      category:'animals'},
  {id:'panda',      name:'Bao',        cost:160, svg:petSvgPanda,      desc:'Chill vibes only 🐼',         category:'animals'},
  {id:'owl',        name:'Hoot',       cost:190, svg:petSvgOwl,        desc:'Wisdom in every session 🦉',  category:'animals'},
  {id:'dino',       name:'Rexy',       cost:170, svg:petSvgDino,       desc:'Tiny dino, big study vibes 🦖',  category:'animals'},
  {id:'giraffe',    name:'Coco',       cost:160, svg:petSvgGiraffe,    desc:'High perspective 🦒',         category:'animals'},
  {id:'puppy',      name:'Biscuit',    cost:120, svg:petSvgPuppy,      desc:'Loyal & calm 🐶',             category:'animals'},
  // ── Φανταστικά ───────────────────────────────────────────────────
  {id:'unicorn',    name:'Starlight',  cost:250, svg:petSvgUnicorn,    desc:'Pure magic ✨',               category:'fantasy'},
  {id:'phoenix',    name:'Blaze',      cost:280, svg:petSvgPhoenix,    desc:'Rise from every break 🔥',    category:'fantasy'},
  {id:'mermaid',    name:'Coral',      cost:260, svg:petSvgMermaid,    desc:'Deep focus diver 🧜',         category:'fantasy'},
  {id:'wizard',     name:'Sage',       cost:240, svg:petSvgWizard,     desc:'Spells & deadlines 🧙',       category:'fantasy'},
  {id:'alien',      name:'Zyx',        cost:140, svg:petSvgAlien,      desc:'Studies from another galaxy 🛸', category:'fantasy'},
  // ── Kawaii ───────────────────────────────────────────────────────
  {id:'cloud',      name:'Nimbus',     cost:110, svg:petSvgCloud,      desc:'Soft & dreamy ☁️',            category:'kawaii'},
  {id:'crown',      name:'Regal',      cost:200, svg:petSvgCrown,      desc:'You deserve the crown 👑',    category:'kawaii'},
  {id:'mushroom',   name:'Spore',      cost:130, svg:petSvgMushroom,   desc:'Tiny but mighty 🍄',          category:'kawaii'},
  {id:'star2',      name:'Twinkle',    cost:160, svg:petSvgStar2,      desc:'Soft glow, big dreams 💜',    category:'kawaii'},
  {id:'tinybunny',  name:'Mochi',      cost:90,  svg:petSvgTinyBunny,  desc:'Pure comfort 🐰',             category:'kawaii'},
  {id:'sleepycat',  name:'Nap',        cost:110, svg:petSvgSleepyCat,  desc:'Always sleepy 🐱',            category:'kawaii'},
  // ── Sci-fi / Space ───────────────────────────────────────────────
  {id:'astronaut',  name:'Cosmo',      cost:220, svg:petSvgAstronaut,  desc:'One small step 🚀',           category:'scifi'},
  {id:'ufo',        name:'Zap',        cost:200, svg:petSvgUFO,        desc:'Beaming in for a session 🛸',  category:'scifi'},
  {id:'rocket',     name:'Boost',      cost:180, svg:petSvgRocket,     desc:'3… 2… 1… Focus! 🚀',          category:'scifi'},
  {id:'blackhole',  name:'Void',       cost:300, svg:petSvgBlackHole,  desc:'Absorbs all distractions ✦',  category:'scifi'},
  {id:'minirobot',  name:'Byte',       cost:130, svg:petSvgMiniRobot,  desc:'Tiny study assistant 🤖',     category:'scifi'},
  // ── Τρόφιμα ──────────────────────────────────────────────────────
  {id:'donut',      name:'Glazey',     cost:120, svg:petSvgDonut,      desc:'Sweet reward for hard work 🍩', category:'food'},
  {id:'icecream',   name:'Swirl',      cost:110, svg:petSvgIcecream,   desc:'Cool under pressure 🍦',      category:'food'},
  {id:'ramen',      name:'Noodle',     cost:140, svg:petSvgRamen,      desc:'Warm & wholesome 🍜',         category:'food'},
  {id:'boba',       name:'Bubbles',    cost:130, svg:petSvgBoba,       desc:'Sip & study 🧋',              category:'food'},
  {id:'cake',       name:'Slice',      cost:150, svg:petSvgCake,       desc:'Every session is a win 🎂',   category:'food'},
  {id:'teacup',     name:'Chai',       cost:100, svg:petSvgTeacup,     desc:'Focus energy in a cup 🍵',   category:'food'},
];

function getPetDef(id){return PET_DEFS.find(p=>p.id===id)||PET_DEFS[0];}

// Returns the custom name for a pet if set, otherwise the default name
function getPetName(id){
  id=id||'ghost';
  var customNames=(db.pet&&db.pet.customNames)||{};
  return customNames[id]||getPetDef(id).name;
}

// ── Daily Quests ─────────────────────────────────────────────────
// CHECK FUNCTIONS live ONLY here — never inside quest objects, never serialized
function getTodayQuestKey(){ return 'pq_'+new Date().toDateString(); }

var QUEST_CHECKS={
  q_2sess:  function(){ return getTodaySessionCount()>=2; },
  q_3sess:  function(){ return getTodaySessionCount()>=3; },
  q_45min:  function(){ return getTodayMins()>=45; },
  q_60min:  function(){ return getTodayMins()>=60; },
  q_boost:  function(){ return (db.pet.todayBoosts||0)>=1; },
  q_score:  function(){ return (db.pet.todayHighScore||0)>=90; },
  q_early:  function(){ return db.pet.todayEarlySession===true; },
  q_streak: function(){ return (db.stats.streak||0)>=1; }
};

var QUEST_DEFS={
  q_2sess:  {text:'Κάνε 2 sessions σήμερα',        reward:15},
  q_3sess:  {text:'Κάνε 3 sessions σήμερα',         reward:25},
  q_45min:  {text:'Μελέτησε 45+ λεπτά συνολικά',   reward:20},
  q_60min:  {text:'Μελέτησε 60+ λεπτά σήμερα',     reward:30},
  q_boost:  {text:'Κάνε boost το pet σου 1 φορά',  reward:10},
  q_score:  {text:'Τελείωσε session με score 90%+', reward:20},
  q_early:  {text:'Ξεκίνα session πριν τις 10πμ',  reward:15},
  q_streak: {text:'Διατήρησε το streak σου',        reward:10}
};

function pickTodayQuestIds(){
  var ids=Object.keys(QUEST_DEFS);
  var seed=new Date().getDate()+new Date().getMonth()*31;
  var picked=[], used=new Set();
  for(var i=0;i<3;i++){
    var idx=(seed+i*3)%ids.length;
    var found=null;
    for(var j=idx;j<ids.length;j++){if(!used.has(ids[j])){found=ids[j];break;}}
    if(!found){for(var j=0;j<ids.length;j++){if(!used.has(ids[j])){found=ids[j];break;}}}
    if(found){used.add(found);picked.push(found);}
  }
  return picked;
}

function getTodaySessionCount(){
  var t=new Date().toDateString();
  return (db.sessions||[]).filter(function(s){return s&&new Date(s.date).toDateString()===t;}).length;
}

function getPetDailyQuests(){
  initPetDb();
  var key=getTodayQuestKey();
  // Rebuild if missing, stale, not a valid array, or contains null/unknown entries
  var needsRebuild=!db.pet.dailyQuests
    ||!Array.isArray(db.pet.dailyQuests)
    ||db.pet.dailyQuestDate!==key
    ||db.pet.dailyQuests.length===0
    ||db.pet.dailyQuests.some(function(q){return !q||typeof q!=='object'||!q.id||!QUEST_DEFS[q.id];});
  if(needsRebuild){
    var ids=pickTodayQuestIds();
    db.pet.dailyQuests=ids.map(function(id){
      return {id:id, text:QUEST_DEFS[id].text, reward:QUEST_DEFS[id].reward, done:false};
    });
    db.pet.dailyQuestDate=key;
    db.pet.todayBoosts=0;
    db.pet.todayHighScore=0;
    db.pet.todayEarlySession=false;
    save();
  }
  // Return safe plain objects only — filter out any corrupt entries
  return db.pet.dailyQuests
    .filter(function(q){return q&&typeof q==='object'&&q.id&&QUEST_DEFS[q.id];})
    .map(function(q){
      var def=QUEST_DEFS[q.id];
      return {id:q.id, text:q.text||def.text||'', reward:q.reward||def.reward||0, done:!!q.done};
    });
}

function checkPetQuests(){
  try{
  initPetDb();
  var quests=getPetDailyQuests();
  var anyNewDone=false;
  quests.forEach(function(q){
    if(q.done) return;
    // Look up check function from static map — NEVER from the quest object
    var checkFn=QUEST_CHECKS[q.id];
    if(typeof checkFn==='function' && checkFn()){
      // Mark done in stored array
      var stored=db.pet.dailyQuests.find(function(s){return s.id===q.id;});
      if(stored) stored.done=true;
      anyNewDone=true;
      addActivePetXP(q.reward);
      db.pet.totalQuestsDone=(db.pet.totalQuestsDone||0)+1;
      showToast('📋 Quest ολοκλήρωση! +'+q.reward+' Pet XP');
    }
  });
  if(anyNewDone){checkPetMilestones();save();}
  }catch(e){console.warn('checkPetQuests error:',e);}
}
function renderPetQuests(){
  const panel=document.getElementById('pet-quests-panel');
  if(!panel||!isPetsEnabled()){if(panel)panel.style.display='none';return;}
  panel.style.display='';
  const quests=getPetDailyQuests();
  const done=quests.filter(q=>q.done).length;
  panel.innerHTML='<div class="pet-quests-title">📋 Daily Quests <span style="color:var(--accent);margin-left:auto">'+done+'/3</span></div>'+
    quests.map(function(q){
      var dc=q.done?' done':'';
      return '<div class="pet-quest-item">'+
        '<div class="pet-quest-check'+dc+'">'+(q.done?'✓':'')+'</div>'+
        '<div class="pet-quest-text'+dc+'">'+q.text+'</div>'+
        '<div class="pet-quest-reward">+'+q.reward+' XP</div>'+
      '</div>';
    }).join('');
}

initPetDb();getProfile();buildModeSelector();loadMode(T.mode);updateTimerDisplay();updateSidebar();checkAchievements();renderYesterdayBanner();renderSmartReminder();renderPet();
if(db.shop?.activeTheme&&db.shop.activeTheme!=='midnight')applyTheme(db.shop.activeTheme);
// Εμφάνιση welcome screen – πάντα εμφανίζεται, αλλά αν έχει ήδη αποδεχτεί τους όρους το checkbox είναι pre-checked
(function initWelcome(){
  const accepted=localStorage.getItem('ff_terms_accepted')==='1';
  if(accepted){
    const cb=document.getElementById('terms-checkbox');
    const btn=document.getElementById('welcome-start-btn');
    if(cb) cb.checked=true;
    if(btn) btn.disabled=false;
  }
  // Αν υπάρχει ενεργή session θα την επαναφέρει το persistence script — μην εμφανίσεις welcome
  if(!localStorage.getItem('ff_active_session')){
    setTimeout(()=>document.getElementById('welcome-screen').classList.add('visible'),50);
  }
})();

function enterFocusMode(){
  document.getElementById('focus-overlay').classList.add('active');
  updateFocusOverlay();
}
function exitFocusMode(){
  const o=document.getElementById('focus-overlay');
  if(o)o.classList.remove('active');
}
function updateFocusOverlay(){
  const o=document.getElementById('focus-overlay');
  if(!o||!o.classList.contains('active'))return;
  const isFreerun=T.mode&&T.mode.freerun;
  let dispM,dispS;
  if(isFreerun){const e=T.elapsed||0;dispM=Math.floor(e/60);dispS=e%60;}
  else{dispM=Math.floor(T.remaining/60);dispS=T.remaining%60;}
  document.getElementById('fm-clock').textContent=String(dispM).padStart(2,'0')+':'+String(dispS).padStart(2,'0');
  document.getElementById('fm-clock').className='fm-clock'+(T.isBreak?' break-mode':'');
  document.getElementById('fm-phase').textContent=isFreerun?'FREE RUN':T.isBreak?(T.remaining===T.longBreakSecs&&T.longBreakSecs>0?'ΜΕΓΑΛΟ ΔΙΑΛΕΙΜΜΑ':'ΔΙΑΛΕΙΜΜΑ'):'ΕΣΤΙΑΣΗ';
  const pb=document.getElementById('fm-pause-btn');
  if(pb)pb.textContent=T.running?'Παύση':'Συνέχεια';
  const sub=T.sessionSubjectId?db.subjects.find(x=>x.id===T.sessionSubjectId):null;
  const subEl=document.getElementById('fm-subject');
  subEl.textContent=sub?sub.name:(T.sessionTopic||'');
  subEl.style.display=(sub||T.sessionTopic)?'block':'none';
  const goalEl=document.getElementById('fm-goal');
  goalEl.textContent=T.sessionGoal?'🎯 '+T.sessionGoal:'';
  goalEl.style.display=T.sessionGoal?'block':'none';
  const dots=document.getElementById('fm-dots');
  dots.innerHTML='';
  if(!isFreerun){
    for(let i=0;i<T.maxCycles;i++){
      const d=document.createElement('div');
      d.className='fm-dot'+(i<T.doneCycles?' done':i===T.cycle?' current':'');
      dots.appendChild(d);
    }
  }
  const pct=isFreerun?((T.elapsed||0)%3600)/3600*100:T.total>0?((T.total-T.remaining)/T.total*100):0;
  const fill=document.getElementById('fm-progress-fill');
  if(fill)fill.style.width=pct.toFixed(1)+'%';
}

document.addEventListener('visibilitychange',()=>{
  if(document.hidden||!T.running)return;
  if(T.mode&&T.mode.freerun){
    if(T._startTime){T.elapsed=Math.floor((Date.now()-T._startTime)/1000)+(T._pausedElapsed||0);}
    updateTimerDisplay();
    return;
  }
  if(T._startTime){
    const elapsed=Math.floor((Date.now()-T._startTime)/1000);
    T.remaining=Math.max(0,(T._pausedRemaining||T.total)-elapsed);
    updateTimerDisplay();
    if(T.remaining<=0)nextPhase(false);
  }
});

// ══════════════════════════════════════════════════════════════════
// FOCUS PET SYSTEM
// ══════════════════════════════════════════════════════════════════

function petSvgGhost(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28" cy="30" rx="18" ry="20" fill="#a89be8"/><rect x="10" y="30" width="6" height="10" rx="3" fill="#a89be8"/><rect x="16" y="33" width="6" height="10" rx="3" fill="#a89be8"/><rect x="22" y="30" width="6" height="10" rx="3" fill="#a89be8"/><rect x="28" y="33" width="6" height="10" rx="3" fill="#a89be8"/><rect x="34" y="30" width="6" height="10" rx="3" fill="#a89be8"/><ellipse cx="28" cy="18" rx="18" ry="15" fill="#a89be8"/><circle cx="22" cy="17" r="4" fill="white"/><circle cx="34" cy="17" r="4" fill="white"/><circle cx="23" cy="18" r="2.5" fill="#2a1f6e"/><circle cx="35" cy="18" r="2.5" fill="#2a1f6e"/><path d="M23 24 Q28 28 33 24" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;}
function petSvgRobot(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="18" width="28" height="26" rx="5" fill="#5ec4b0"/><rect x="20" y="12" width="16" height="8" rx="3" fill="#5ec4b0"/><rect x="27" y="8" width="3" height="5" rx="1" fill="#3aa090"/><circle cx="28" cy="8" r="2" fill="#f5c842"/><rect x="18" y="24" width="8" height="7" rx="2" fill="white"/><rect x="30" y="24" width="8" height="7" rx="2" fill="white"/><circle cx="22" cy="27" r="2.5" fill="#2a6e6a"/><circle cx="34" cy="27" r="2.5" fill="#2a6e6a"/><rect x="21" y="34" width="14" height="3" rx="1.5" fill="white"/><rect x="8" y="22" width="6" height="14" rx="3" fill="#5ec4b0"/><rect x="42" y="22" width="6" height="14" rx="3" fill="#5ec4b0"/></svg>`;}
function petSvgPlant(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28" cy="38" rx="14" ry="10" fill="#6bcb8b"/><rect x="26" y="28" width="4" height="16" rx="2" fill="#4aa06a"/><ellipse cx="20" cy="24" rx="10" ry="8" fill="#6bcb8b" transform="rotate(-20 20 24)"/><ellipse cx="36" cy="24" rx="10" ry="8" fill="#6bcb8b" transform="rotate(20 36 24)"/><ellipse cx="28" cy="18" rx="9" ry="10" fill="#7ee89f"/><circle cx="23" cy="17" r="2.5" fill="white"/><circle cx="33" cy="17" r="2.5" fill="white"/><circle cx="23" cy="17" r="1.5" fill="#1a4a2a"/><circle cx="33" cy="17" r="1.5" fill="#1a4a2a"/><path d="M24 22 Q28 26 32 22" stroke="#1a4a2a" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;}
function petSvgStar(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="28,6 33,20 48,20 36,29 41,44 28,35 15,44 20,29 8,20 23,20" fill="#f5c842"/><circle cx="23" cy="22" r="2.5" fill="white"/><circle cx="33" cy="22" r="2.5" fill="white"/><circle cx="23" cy="22" r="1.5" fill="#7a5a00"/><circle cx="33" cy="22" r="1.5" fill="#7a5a00"/><path d="M23 27 Q28 31 33 27" stroke="#7a5a00" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;}
function petSvgCat(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28" cy="34" rx="16" ry="14" fill="#e8b4e8"/><ellipse cx="28" cy="22" rx="14" ry="13" fill="#e8b4e8"/><polygon points="14,14 18,26 10,26" fill="#e8b4e8"/><polygon points="42,14 38,26 46,26" fill="#e8b4e8"/><polygon points="15,14 18,24 11,24" fill="#f0c8f0" opacity=".7"/><polygon points="41,14 38,24 45,24" fill="#f0c8f0" opacity=".7"/><circle cx="22" cy="21" r="3.5" fill="white"/><circle cx="34" cy="21" r="3.5" fill="white"/><circle cx="22" cy="22" r="2" fill="#3a1a3a"/><circle cx="34" cy="22" r="2" fill="#3a1a3a"/><ellipse cx="28" cy="27" rx="3" ry="2" fill="#f0a0c0"/><path d="M28 29 Q23 33 20 32" stroke="#c060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M28 29 Q33 33 36 32" stroke="#c060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M14 24 Q8 22 6 25" stroke="#d090d0" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M42 24 Q48 22 50 25" stroke="#d090d0" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>`;}
function petSvgDragon(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28" cy="33" rx="16" ry="15" fill="#ff7e6b"/><ellipse cx="28" cy="20" rx="13" ry="12" fill="#ff7e6b"/><path d="M15 18 Q8 8 12 4 Q16 12 18 18Z" fill="#ff6050"/><path d="M41 18 Q48 8 44 4 Q40 12 38 18Z" fill="#ff6050"/><ellipse cx="28" cy="34" rx="10" ry="6" fill="#ffb0a0" opacity=".5"/><circle cx="23" cy="19" r="3.5" fill="white"/><circle cx="33" cy="19" r="3.5" fill="white"/><circle cx="23" cy="20" r="2" fill="#7a1000"/><circle cx="33" cy="20" r="2" fill="#7a1000"/><path d="M23 26 Q28 30 33 26" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M36 38 Q44 36 48 40 Q44 42 38 40Z" fill="#ff6050"/></svg>`;}
function petSvgPenguin(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28" cy="32" rx="16" ry="18" fill="#2a2a4e"/><ellipse cx="28" cy="30" rx="10" ry="13" fill="white"/><ellipse cx="28" cy="18" rx="13" ry="12" fill="#2a2a4e"/><circle cx="23" cy="17" r="3" fill="white"/><circle cx="33" cy="17" r="3" fill="white"/><circle cx="23" cy="17" r="1.8" fill="#1a1a3e"/><circle cx="33" cy="17" r="1.8" fill="#1a1a3e"/><ellipse cx="28" cy="23" rx="4" ry="2.5" fill="#f5c842"/><path d="M23 27 Q28 31 33 27" stroke="#2a2a4e" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="14" cy="34" rx="5" ry="3" fill="#2a2a4e" transform="rotate(-20 14 34)"/><ellipse cx="42" cy="34" rx="5" ry="3" fill="#2a2a4e" transform="rotate(20 42 34)"/><ellipse cx="22" cy="46" rx="5" ry="3" fill="#f5c842"/><ellipse cx="34" cy="46" rx="5" ry="3" fill="#f5c842"/></svg>`;}
function petSvgBunny(size=56){return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28" cy="35" rx="16" ry="14" fill="#f0f0f8"/><ellipse cx="28" cy="22" rx="13" ry="12" fill="#f0f0f8"/><ellipse cx="20" cy="10" rx="5" ry="11" fill="#f0f0f8"/><ellipse cx="36" cy="10" rx="5" ry="11" fill="#f0f0f8"/><ellipse cx="20" cy="10" rx="3" ry="8" fill="#ffb0b0" opacity=".7"/><ellipse cx="36" cy="10" rx="3" ry="8" fill="#ffb0b0" opacity=".7"/><circle cx="23" cy="21" r="3" fill="white"/><circle cx="33" cy="21" r="3" fill="white"/><circle cx="23" cy="21" r="1.8" fill="#3a1a5e"/><circle cx="33" cy="21" r="1.8" fill="#3a1a5e"/><ellipse cx="28" cy="26" rx="3" ry="2" fill="#ffb0b0"/><path d="M24 29 Q28 33 32 29" stroke="#9060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;}

/* ── NEW PETS ─────────────────────────────────────────────────────── */

// 🛸 Alien — big glossy eyes, antenna, pastel green skin
function petSvgAlien(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Antenna -->
    <line x1="28" y1="6" x2="28" y2="13" stroke="#7ee8b0" stroke-width="2" stroke-linecap="round"/>
    <circle cx="28" cy="5" r="3" fill="#a8f5d0"/>
    <circle cx="28" cy="5" r="1.5" fill="#f5c842" opacity=".9"/>
    <!-- Head -->
    <ellipse cx="28" cy="24" rx="16" ry="14" fill="#8de8b0"/>
    <!-- Big eyes -->
    <ellipse cx="21" cy="22" rx="6" ry="7" fill="#0a1a10" opacity=".9"/>
    <ellipse cx="35" cy="22" rx="6" ry="7" fill="#0a1a10" opacity=".9"/>
    <ellipse cx="21" cy="22" rx="5" ry="6" fill="#1a3a28"/>
    <ellipse cx="35" cy="22" rx="5" ry="6" fill="#1a3a28"/>
    <!-- Eye shine -->
    <circle cx="23" cy="19" r="2" fill="white" opacity=".85"/>
    <circle cx="37" cy="19" r="2" fill="white" opacity=".85"/>
    <circle cx="22" cy="24" r="1" fill="#6be8a0" opacity=".7"/>
    <circle cx="36" cy="24" r="1" fill="#6be8a0" opacity=".7"/>
    <!-- Mouth — small cute smile -->
    <path d="M22 31 Q28 35 34 31" stroke="#3a7a58" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- Ears (side bumps) -->
    <ellipse cx="12" cy="23" rx="4" ry="5" fill="#7ee8b0"/>
    <ellipse cx="44" cy="23" rx="4" ry="5" fill="#7ee8b0"/>
    <!-- Body -->
    <ellipse cx="28" cy="43" rx="11" ry="9" fill="#8de8b0"/>
    <!-- Hands -->
    <ellipse cx="14" cy="42" rx="4" ry="3" fill="#8de8b0" transform="rotate(-15 14 42)"/>
    <ellipse cx="42" cy="42" rx="4" ry="3" fill="#8de8b0" transform="rotate(15 42 42)"/>
  </svg>`;
}

// 🦒 Giraffe — long cute neck, spots, big lashes
function petSvgGiraffe(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Ossicones (horns) -->
    <rect x="20" y="2" width="3" height="7" rx="1.5" fill="#c8860a"/>
    <rect x="33" y="2" width="3" height="7" rx="1.5" fill="#c8860a"/>
    <circle cx="21.5" cy="2" r="2" fill="#e8a020"/>
    <circle cx="34.5" cy="2" r="2" fill="#e8a020"/>
    <!-- Neck -->
    <rect x="22" y="16" width="12" height="22" rx="6" fill="#f5c842"/>
    <!-- Neck spots -->
    <ellipse cx="25" cy="21" rx="2.5" ry="2" fill="#c8860a" opacity=".7"/>
    <ellipse cx="31" cy="27" rx="2" ry="2.5" fill="#c8860a" opacity=".7"/>
    <ellipse cx="27" cy="33" rx="2" ry="1.8" fill="#c8860a" opacity=".6"/>
    <!-- Head -->
    <ellipse cx="28" cy="14" rx="11" ry="10" fill="#f5c842"/>
    <!-- Ears -->
    <ellipse cx="17" cy="13" rx="4" ry="5" fill="#f5c842"/>
    <ellipse cx="39" cy="13" rx="4" ry="5" fill="#f5c842"/>
    <ellipse cx="17" cy="13" rx="2.5" ry="3.5" fill="#f0a040" opacity=".6"/>
    <ellipse cx="39" cy="13" rx="2.5" ry="3.5" fill="#f0a040" opacity=".6"/>
    <!-- Eyes -->
    <circle cx="23" cy="13" r="3.5" fill="white"/>
    <circle cx="33" cy="13" r="3.5" fill="white"/>
    <circle cx="23" cy="14" r="2" fill="#2a1a00"/>
    <circle cx="33" cy="14" r="2" fill="#2a1a00"/>
    <circle cx="24" cy="12.5" r="1" fill="white" opacity=".9"/>
    <circle cx="34" cy="12.5" r="1" fill="white" opacity=".9"/>
    <!-- Lashes -->
    <line x1="21" y1="10" x2="19" y2="8" stroke="#2a1a00" stroke-width="1" stroke-linecap="round"/>
    <line x1="23" y1="9.5" x2="22" y2="7.5" stroke="#2a1a00" stroke-width="1" stroke-linecap="round"/>
    <line x1="31" y1="9.5" x2="30" y2="7.5" stroke="#2a1a00" stroke-width="1" stroke-linecap="round"/>
    <line x1="33" y1="10" x2="35" y2="8" stroke="#2a1a00" stroke-width="1" stroke-linecap="round"/>
    <!-- Nose -->
    <ellipse cx="28" cy="18" rx="4" ry="2.5" fill="#f0a040"/>
    <circle cx="26.5" cy="18" r="1.2" fill="#c87020" opacity=".7"/>
    <circle cx="29.5" cy="18" r="1.2" fill="#c87020" opacity=".7"/>
    <!-- Body (small, peeking) -->
    <ellipse cx="28" cy="50" rx="10" ry="7" fill="#f5c842"/>
    <!-- Body spots -->
    <ellipse cx="24" cy="49" rx="2" ry="1.5" fill="#c8860a" opacity=".6"/>
    <ellipse cx="32" cy="51" rx="1.8" ry="1.5" fill="#c8860a" opacity=".6"/>
  </svg>`;
}

// 🤖 Mini Robot — compact, friendly, glowing eyes
function petSvgMiniRobot(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Antenna -->
    <rect x="26.5" y="4" width="3" height="7" rx="1.5" fill="#9f8aff"/>
    <circle cx="28" cy="4" r="3" fill="#c8b8ff"/>
    <circle cx="28" cy="4" r="1.5" fill="#7c63f5" opacity=".9"/>
    <!-- Head -->
    <rect x="13" y="11" width="30" height="22" rx="7" fill="#2e2b4a"/>
    <rect x="14" y="12" width="28" height="20" rx="6" fill="#3a365e"/>
    <!-- Eyes — glowing purple -->
    <rect x="17" y="17" width="9" height="8" rx="3" fill="#1a1830"/>
    <rect x="30" y="17" width="9" height="8" rx="3" fill="#1a1830"/>
    <rect x="18" y="18" width="7" height="6" rx="2" fill="#7c63f5" opacity=".9"/>
    <rect x="31" y="18" width="7" height="6" rx="2" fill="#7c63f5" opacity=".9"/>
    <!-- Eye shine -->
    <circle cx="20" cy="19.5" r="1.5" fill="white" opacity=".6"/>
    <circle cx="33" cy="19.5" r="1.5" fill="white" opacity=".6"/>
    <!-- Mouth — pixel smile -->
    <rect x="20" y="28" width="16" height="2.5" rx="1.2" fill="#9f8aff" opacity=".7"/>
    <rect x="22" y="30.5" width="12" height="2" rx="1" fill="#9f8aff" opacity=".4"/>
    <!-- Ear panels -->
    <rect x="7" y="16" width="6" height="11" rx="3" fill="#2e2b4a"/>
    <rect x="8" y="18" width="4" height="3" rx="1.5" fill="#7c63f5" opacity=".5"/>
    <rect x="43" y="16" width="6" height="11" rx="3" fill="#2e2b4a"/>
    <rect x="43" y="18" width="4" height="3" rx="1.5" fill="#7c63f5" opacity=".5"/>
    <!-- Body -->
    <rect x="16" y="34" width="24" height="17" rx="6" fill="#2e2b4a"/>
    <rect x="17" y="35" width="22" height="15" rx="5" fill="#3a365e"/>
    <!-- Chest panel -->
    <rect x="21" y="38" width="14" height="8" rx="3" fill="#1a1830"/>
    <circle cx="25" cy="42" r="2.5" fill="#4fd1b0" opacity=".8"/>
    <circle cx="31" cy="42" r="2.5" fill="#f5c842" opacity=".8"/>
    <!-- Arms -->
    <rect x="8" y="35" width="8" height="12" rx="4" fill="#2e2b4a"/>
    <circle cx="12" cy="47" r="3.5" fill="#3a365e"/>
    <rect x="40" y="35" width="8" height="12" rx="4" fill="#2e2b4a"/>
    <circle cx="44" cy="47" r="3.5" fill="#3a365e"/>
  </svg>`;
}

// 🐱 Sleepy Cat — half-closed eyes, cozy, soft lilac
function petSvgSleepyCat(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Ears -->
    <polygon points="12,20 17,8 22,20" fill="#d4a8d4"/>
    <polygon points="34,20 39,8 44,20" fill="#d4a8d4"/>
    <polygon points="13.5,20 17,10 20.5,20" fill="#f0c8f0" opacity=".7"/>
    <polygon points="35.5,20 39,10 42.5,20" fill="#f0c8f0" opacity=".7"/>
    <!-- Head -->
    <ellipse cx="28" cy="26" rx="16" ry="14" fill="#e2b8e2"/>
    <!-- Sleepy eyes — half closed arcs -->
    <path d="M20 24 Q23 21 26 24" stroke="#3a1a3a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M30 24 Q33 21 36 24" stroke="#3a1a3a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <!-- Eyelid fill (droopy) -->
    <path d="M20 24 Q23 22.5 26 24 Q23 25.5 20 24Z" fill="#e2b8e2"/>
    <path d="M30 24 Q33 22.5 36 24 Q33 25.5 30 24Z" fill="#e2b8e2"/>
    <!-- Tiny lashes -->
    <line x1="21" y1="23" x2="20" y2="21" stroke="#3a1a3a" stroke-width="1" stroke-linecap="round"/>
    <line x1="31" y1="23" x2="30" y2="21" stroke="#3a1a3a" stroke-width="1" stroke-linecap="round"/>
    <!-- Blush -->
    <ellipse cx="19" cy="28" rx="4" ry="2.5" fill="#f0a0c0" opacity=".45"/>
    <ellipse cx="37" cy="28" rx="4" ry="2.5" fill="#f0a0c0" opacity=".45"/>
    <!-- Nose -->
    <ellipse cx="28" cy="29" rx="2.5" ry="1.8" fill="#f0a0c0"/>
    <!-- Smile -->
    <path d="M24 32 Q28 36 32 32" stroke="#9060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- Whiskers -->
    <line x1="10" y1="28" x2="20" y2="29" stroke="#c090c0" stroke-width="1" stroke-linecap="round" opacity=".7"/>
    <line x1="10" y1="31" x2="20" y2="31" stroke="#c090c0" stroke-width="1" stroke-linecap="round" opacity=".7"/>
    <line x1="36" y1="29" x2="46" y2="28" stroke="#c090c0" stroke-width="1" stroke-linecap="round" opacity=".7"/>
    <line x1="36" y1="31" x2="46" y2="31" stroke="#c090c0" stroke-width="1" stroke-linecap="round" opacity=".7"/>
    <!-- Body -->
    <ellipse cx="28" cy="43" rx="13" ry="10" fill="#e2b8e2"/>
    <!-- Tail curl -->
    <path d="M39 48 Q48 45 46 38 Q44 33 40 36" stroke="#d4a8d4" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Paws -->
    <ellipse cx="21" cy="51" rx="5" ry="3" fill="#d4a8d4"/>
    <ellipse cx="35" cy="51" rx="5" ry="3" fill="#d4a8d4"/>
  </svg>`;
}

// 🐶 Calm Puppy — floppy ears, big soft eyes, sitting peacefully
function petSvgPuppy(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Floppy ears -->
    <ellipse cx="13" cy="22" rx="7" ry="11" fill="#c8a870" transform="rotate(-10 13 22)"/>
    <ellipse cx="43" cy="22" rx="7" ry="11" fill="#c8a870" transform="rotate(10 43 22)"/>
    <ellipse cx="13" cy="22" rx="4.5" ry="8.5" fill="#b89060" opacity=".7" transform="rotate(-10 13 22)"/>
    <ellipse cx="43" cy="22" rx="4.5" ry="8.5" fill="#b89060" opacity=".7" transform="rotate(10 43 22)"/>
    <!-- Head -->
    <ellipse cx="28" cy="22" rx="15" ry="13" fill="#e8c888"/>
    <!-- Eyes — big and soft -->
    <circle cx="22" cy="20" r="4.5" fill="white"/>
    <circle cx="34" cy="20" r="4.5" fill="white"/>
    <circle cx="22" cy="21" r="3" fill="#3a2000"/>
    <circle cx="34" cy="21" r="3" fill="#3a2000"/>
    <circle cx="23" cy="19" r="1.3" fill="white" opacity=".9"/>
    <circle cx="35" cy="19" r="1.3" fill="white" opacity=".9"/>
    <!-- Blush -->
    <ellipse cx="17" cy="25" rx="4" ry="2.5" fill="#f0a070" opacity=".4"/>
    <ellipse cx="39" cy="25" rx="4" ry="2.5" fill="#f0a070" opacity=".4"/>
    <!-- Snout -->
    <ellipse cx="28" cy="27" rx="6" ry="4.5" fill="#d4a860"/>
    <!-- Nose -->
    <ellipse cx="28" cy="25" rx="3.5" ry="2.5" fill="#3a2000"/>
    <ellipse cx="27" cy="24.5" rx="1.2" ry="0.8" fill="white" opacity=".5"/>
    <!-- Mouth -->
    <path d="M25 29 Q28 32 31 29" stroke="#3a2000" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <line x1="28" y1="27.5" x2="28" y2="29" stroke="#3a2000" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Body -->
    <ellipse cx="28" cy="43" rx="14" ry="11" fill="#e8c888"/>
    <!-- Sitting paws -->
    <ellipse cx="20" cy="51" rx="6" ry="4" fill="#d4a860"/>
    <ellipse cx="36" cy="51" rx="6" ry="4" fill="#d4a860"/>
    <!-- Tail wagging -->
    <path d="M40 44 Q50 38 48 30" stroke="#c8a870" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="48" cy="29" rx="3.5" ry="2.5" fill="#e8c888"/>
  </svg>`;
}

// 🐰 Tiny Bunny — extra small and soft, pastel pink, minimal
function petSvgTinyBunny(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tall ears -->
    <ellipse cx="20" cy="12" rx="5.5" ry="13" fill="#f8e8f8"/>
    <ellipse cx="36" cy="12" rx="5.5" ry="13" fill="#f8e8f8"/>
    <ellipse cx="20" cy="12" rx="3" ry="10" fill="#ffb8c8" opacity=".75"/>
    <ellipse cx="36" cy="12" rx="3" ry="10" fill="#ffb8c8" opacity=".75"/>
    <!-- Head -->
    <ellipse cx="28" cy="28" rx="14" ry="13" fill="#f8e8f8"/>
    <!-- Eyes — shiny dots -->
    <circle cx="23" cy="26" r="3.5" fill="white"/>
    <circle cx="33" cy="26" r="3.5" fill="white"/>
    <circle cx="23" cy="27" r="2.2" fill="#4a2060"/>
    <circle cx="33" cy="27" r="2.2" fill="#4a2060"/>
    <circle cx="24" cy="25.5" r="1" fill="white" opacity=".9"/>
    <circle cx="34" cy="25.5" r="1" fill="white" opacity=".9"/>
    <!-- Blush -->
    <ellipse cx="18" cy="30" rx="3.5" ry="2" fill="#ffb8c8" opacity=".5"/>
    <ellipse cx="38" cy="30" rx="3.5" ry="2" fill="#ffb8c8" opacity=".5"/>
    <!-- Tiny nose -->
    <ellipse cx="28" cy="31" rx="2" ry="1.5" fill="#ffb8c8"/>
    <!-- Smile -->
    <path d="M25 33 Q28 37 31 33" stroke="#9060a0" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <!-- Body — round and compact -->
    <ellipse cx="28" cy="45" rx="12" ry="10" fill="#f8e8f8"/>
    <!-- Tiny paw bumps -->
    <ellipse cx="20" cy="52" rx="4.5" ry="3" fill="#f0d8f0"/>
    <ellipse cx="36" cy="52" rx="4.5" ry="3" fill="#f0d8f0"/>
    <!-- Fluffy tail -->
    <circle cx="39" cy="48" r="4.5" fill="white" opacity=".85"/>
    <circle cx="39" cy="48" r="3" fill="#f8e8f8"/>
  </svg>`;
}

// 🍵 Tea Cup Pet — a cozy cup with a face and steam
function petSvgTeacup(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Steam wisps -->
    <path d="M21 10 Q19 6 21 2 Q23 6 21 10" stroke="#c8b8ff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M28 8 Q26 4 28 0 Q30 4 28 8" stroke="#c8b8ff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>
    <path d="M35 10 Q33 6 35 2 Q37 6 35 10" stroke="#c8b8ff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/>
    <!-- Saucer -->
    <ellipse cx="28" cy="50" rx="18" ry="5" fill="#d0c0f8"/>
    <ellipse cx="28" cy="49" rx="14" ry="3.5" fill="#c0a8f5"/>
    <!-- Cup body -->
    <path d="M12 24 L15 48 Q28 52 41 48 L44 24 Z" fill="#e8d8ff"/>
    <path d="M12 24 L15 46 Q28 50 41 46 L44 24 Z" fill="#f0e8ff"/>
    <!-- Cup rim -->
    <ellipse cx="28" cy="24" rx="16" ry="5" fill="#d8c8ff"/>
    <!-- Tea surface (inside) -->
    <ellipse cx="28" cy="24" rx="13" ry="4" fill="#f5c842" opacity=".5"/>
    <!-- Face on cup -->
    <circle cx="22" cy="34" r="3.5" fill="white" opacity=".9"/>
    <circle cx="34" cy="34" r="3.5" fill="white" opacity=".9"/>
    <circle cx="22" cy="35" r="2" fill="#4a2080"/>
    <circle cx="34" cy="35" r="2" fill="#4a2080"/>
    <circle cx="23" cy="33.5" r="0.9" fill="white" opacity=".9"/>
    <circle cx="35" cy="33.5" r="0.9" fill="white" opacity=".9"/>
    <!-- Smile -->
    <path d="M23 40 Q28 44 33 40" stroke="#7c63f5" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- Handle -->
    <path d="M44 28 Q52 28 52 36 Q52 44 44 44" stroke="#d8c8ff" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M44 28 Q50 28 50 36 Q50 44 44 44" stroke="#f0e8ff" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`;
}

// 🦖 Tiny Dino — pastel green, rounded, friendly and calm
function petSvgDino(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Spikes on head/back -->
    <polygon points="20,16 23,8 26,16" fill="#7ee8a8"/>
    <polygon points="26,14 29,5 32,14" fill="#8af0b4"/>
    <polygon points="32,16 35,8 38,16" fill="#7ee8a8"/>
    <!-- Head -->
    <ellipse cx="28" cy="20" rx="15" ry="12" fill="#9af0bc"/>
    <!-- Snout -->
    <ellipse cx="28" cy="26" rx="9" ry="6" fill="#8ae8a8"/>
    <!-- Nostrils -->
    <circle cx="25" cy="25" r="1.5" fill="#5ab870" opacity=".6"/>
    <circle cx="31" cy="25" r="1.5" fill="#5ab870" opacity=".6"/>
    <!-- Eyes — big and friendly -->
    <circle cx="21" cy="18" r="4.5" fill="white"/>
    <circle cx="35" cy="18" r="4.5" fill="white"/>
    <circle cx="21" cy="19" r="3" fill="#2a6040"/>
    <circle cx="35" cy="19" r="3" fill="#2a6040"/>
    <circle cx="22" cy="17" r="1.3" fill="white" opacity=".9"/>
    <circle cx="36" cy="17" r="1.3" fill="white" opacity=".9"/>
    <!-- Blush -->
    <ellipse cx="16" cy="23" rx="3.5" ry="2" fill="#f0c0a0" opacity=".4"/>
    <ellipse cx="40" cy="23" rx="3.5" ry="2" fill="#f0c0a0" opacity=".4"/>
    <!-- Smile -->
    <path d="M22 29 Q28 34 34 29" stroke="#3a8050" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- Teeth peek -->
    <rect x="25" y="29" width="3" height="2" rx="1" fill="white" opacity=".8"/>
    <rect x="29" y="29" width="3" height="2" rx="1" fill="white" opacity=".8"/>
    <!-- Body -->
    <ellipse cx="28" cy="44" rx="14" ry="12" fill="#9af0bc"/>
    <!-- Belly -->
    <ellipse cx="28" cy="45" rx="9" ry="8" fill="#c8fcd8" opacity=".75"/>
    <!-- Little arms -->
    <ellipse cx="12" cy="40" rx="5" ry="4" fill="#8ae8a8" transform="rotate(-20 12 40)"/>
    <ellipse cx="44" cy="40" rx="5" ry="4" fill="#8ae8a8" transform="rotate(20 44 40)"/>
    <!-- Legs/feet -->
    <ellipse cx="21" cy="53" rx="6" ry="4" fill="#8ae8a8"/>
    <ellipse cx="35" cy="53" rx="6" ry="4" fill="#8ae8a8"/>
    <!-- Tail -->
    <path d="M40 50 Q50 50 52 44 Q54 38 48 36" stroke="#9af0bc" stroke-width="5" fill="none" stroke-linecap="round"/>
    <ellipse cx="48" cy="35.5" rx="3" ry="2.5" fill="#8ae8a8"/>
  </svg>`;
}

// ── ANIMALS ──────────────────────────────────────────────────────
function petSvgBear(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="14" r="8" fill="#c8955a"/>
    <circle cx="40" cy="14" r="8" fill="#c8955a"/>
    <circle cx="16" cy="14" r="5" fill="#e8b480"/>
    <circle cx="40" cy="14" r="5" fill="#e8b480"/>
    <ellipse cx="28" cy="30" rx="20" ry="18" fill="#c8955a"/>
    <ellipse cx="28" cy="33" rx="12" ry="10" fill="#e8c898" opacity=".8"/>
    <circle cx="22" cy="24" r="4" fill="white"/>
    <circle cx="34" cy="24" r="4" fill="white"/>
    <circle cx="22" cy="25" r="2.5" fill="#3a1a00"/>
    <circle cx="34" cy="25" r="2.5" fill="#3a1a00"/>
    <circle cx="23" cy="23.5" r="1" fill="white" opacity=".9"/>
    <circle cx="35" cy="23.5" r="1" fill="white" opacity=".9"/>
    <ellipse cx="28" cy="32" rx="5" ry="3.5" fill="#b07840"/>
    <circle cx="26" cy="31" r="1.2" fill="#7a4a20" opacity=".6"/>
    <circle cx="30" cy="31" r="1.2" fill="#7a4a20" opacity=".6"/>
    <path d="M23 36 Q28 41 33 36" stroke="#7a4a20" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="14" cy="44" rx="6" ry="4" fill="#c8955a" transform="rotate(-15 14 44)"/>
    <ellipse cx="42" cy="44" rx="6" ry="4" fill="#c8955a" transform="rotate(15 42 44)"/>
  </svg>`;
}
function petSvgFox(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,6 18,24 6,20" fill="#e8702a"/>
    <polygon points="44,6 50,20 38,24" fill="#e8702a"/>
    <polygon points="13,8 17,22 8,19" fill="#f5c0a0" opacity=".7"/>
    <polygon points="43,8 48,19 39,22" fill="#f5c0a0" opacity=".7"/>
    <ellipse cx="28" cy="26" rx="16" ry="14" fill="#e8702a"/>
    <ellipse cx="28" cy="32" rx="10" ry="7" fill="#f8e0d0"/>
    <ellipse cx="28" cy="28" rx="7" ry="5" fill="#f8e0d0"/>
    <circle cx="21" cy="23" r="3.5" fill="white"/>
    <circle cx="35" cy="23" r="3.5" fill="white"/>
    <circle cx="21" cy="24" r="2" fill="#2a1000"/>
    <circle cx="35" cy="24" r="2" fill="#2a1000"/>
    <circle cx="22" cy="22.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="36" cy="22.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="28" cy="29" rx="3.5" ry="2" fill="#e09080"/>
    <path d="M23 33 Q28 37 33 33" stroke="#a03010" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="28" cy="46" rx="14" ry="10" fill="#e8702a"/>
    <path d="M42 50 Q52 52 54 46 Q52 40 46 42" stroke="#e8702a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <ellipse cx="54" cy="46" rx="3" ry="2.5" fill="#f8e0d0"/>
  </svg>`;
}
function petSvgWolf(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,4 20,22 8,18" fill="#9090b0"/>
    <polygon points="42,4 48,18 36,22" fill="#9090b0"/>
    <polygon points="15,6 19,20 10,17" fill="#d8d8e8" opacity=".7"/>
    <polygon points="41,6 46,17 37,20" fill="#d8d8e8" opacity=".7"/>
    <ellipse cx="28" cy="26" rx="17" ry="15" fill="#9090b0"/>
    <ellipse cx="28" cy="31" rx="11" ry="8" fill="#d8d8e8"/>
    <ellipse cx="28" cy="27" rx="8" ry="6" fill="#d8d8e8"/>
    <circle cx="21" cy="22" r="4" fill="white"/>
    <circle cx="35" cy="22" r="4" fill="white"/>
    <circle cx="21" cy="23" r="2.5" fill="#1a1a2e"/>
    <circle cx="35" cy="23" r="2.5" fill="#1a1a2e"/>
    <circle cx="22" cy="21.5" r="1" fill="white" opacity=".9"/>
    <circle cx="36" cy="21.5" r="1" fill="white" opacity=".9"/>
    <ellipse cx="28" cy="29" rx="4" ry="2.5" fill="#b08090"/>
    <circle cx="26" cy="28" r="1.2" fill="#705060" opacity=".7"/>
    <circle cx="30" cy="28" r="1.2" fill="#705060" opacity=".7"/>
    <path d="M23 33 Q28 38 33 33" stroke="#605070" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="28" cy="46" rx="15" ry="10" fill="#9090b0"/>
    <ellipse cx="10" cy="42" rx="6" ry="4" fill="#9090b0" transform="rotate(-20 10 42)"/>
    <ellipse cx="46" cy="42" rx="6" ry="4" fill="#9090b0" transform="rotate(20 46 42)"/>
  </svg>`;
}
function petSvgPanda(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="14" r="8" fill="#2a2a2a"/>
    <circle cx="40" cy="14" r="8" fill="#2a2a2a"/>
    <ellipse cx="28" cy="30" rx="20" ry="18" fill="#f0f0f0"/>
    <ellipse cx="22" cy="24" rx="5.5" ry="6" fill="#2a2a2a"/>
    <ellipse cx="34" cy="24" rx="5.5" ry="6" fill="#2a2a2a"/>
    <circle cx="22" cy="25" r="3.5" fill="white"/>
    <circle cx="34" cy="25" r="3.5" fill="white"/>
    <circle cx="22" cy="26" r="2" fill="#1a1a1a"/>
    <circle cx="34" cy="26" r="2" fill="#1a1a1a"/>
    <circle cx="23" cy="24.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="24.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="28" cy="31" rx="5" ry="3" fill="#e0c0c0" opacity=".6"/>
    <circle cx="26" cy="30.5" r="1.2" fill="#a06060" opacity=".5"/>
    <circle cx="30" cy="30.5" r="1.2" fill="#a06060" opacity=".5"/>
    <path d="M23 35 Q28 39 33 35" stroke="#606060" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="14" cy="44" rx="7" ry="5" fill="#2a2a2a" transform="rotate(-10 14 44)"/>
    <ellipse cx="42" cy="44" rx="7" ry="5" fill="#2a2a2a" transform="rotate(10 42 44)"/>
  </svg>`;
}
function petSvgOwl(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,4 16,18 24,16" fill="#8a6a40"/>
    <polygon points="36,4 32,16 40,18" fill="#8a6a40"/>
    <ellipse cx="28" cy="24" rx="16" ry="18" fill="#a07840"/>
    <ellipse cx="28" cy="32" rx="10" ry="10" fill="#c8a060" opacity=".7"/>
    <circle cx="21" cy="20" r="6.5" fill="white"/>
    <circle cx="35" cy="20" r="6.5" fill="white"/>
    <circle cx="21" cy="20" r="5" fill="#f5c842"/>
    <circle cx="35" cy="20" r="5" fill="#f5c842"/>
    <circle cx="21" cy="21" r="3" fill="#1a1000"/>
    <circle cx="35" cy="21" r="3" fill="#1a1000"/>
    <circle cx="22" cy="19.5" r="1.2" fill="white" opacity=".9"/>
    <circle cx="36" cy="19.5" r="1.2" fill="white" opacity=".9"/>
    <polygon points="25,27 28,24 31,27 28,30" fill="#e8a030"/>
    <ellipse cx="12" cy="30" rx="5" ry="8" fill="#a07840" transform="rotate(-10 12 30)"/>
    <ellipse cx="44" cy="30" rx="5" ry="8" fill="#a07840" transform="rotate(10 44 30)"/>
    <ellipse cx="20" cy="44" rx="6" ry="4" fill="#8a6a40"/>
    <ellipse cx="36" cy="44" rx="6" ry="4" fill="#8a6a40"/>
  </svg>`;
}

// ── FANTASY ───────────────────────────────────────────────────────
function petSvgUnicorn(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4 L31 16 L34 4" stroke="#f5c842" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="28" cy="21" rx="15" ry="13" fill="#f8e8f8"/>
    <ellipse cx="18" cy="12" rx="6" ry="8" fill="#f8e8f8" transform="rotate(-20 18 12)"/>
    <ellipse cx="38" cy="12" rx="6" ry="8" fill="#f8e8f8" transform="rotate(20 38 12)"/>
    <ellipse cx="18" cy="12" rx="3.5" ry="5" fill="#f0c8f0" opacity=".6" transform="rotate(-20 18 12)"/>
    <ellipse cx="38" cy="12" rx="3.5" ry="5" fill="#f0c8f0" opacity=".6" transform="rotate(20 38 12)"/>
    <circle cx="22" cy="20" r="3.5" fill="white"/>
    <circle cx="34" cy="20" r="3.5" fill="white"/>
    <circle cx="22" cy="21" r="2" fill="#3a1a5e"/>
    <circle cx="34" cy="21" r="2" fill="#3a1a5e"/>
    <circle cx="23" cy="19.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="19.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="18" cy="25" rx="3" ry="2" fill="#ffb0e0" opacity=".5"/>
    <ellipse cx="38" cy="25" rx="3" ry="2" fill="#ffb0e0" opacity=".5"/>
    <path d="M23 26 Q28 30 33 26" stroke="#c060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="28" cy="42" rx="16" ry="12" fill="#f8e8f8"/>
    <path d="M6 38 Q10 30 16 34" stroke="#f5c842" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M50 38 Q46 30 40 34" stroke="#c8b8ff" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M8 44 Q4 50 8 54" stroke="#ffb0e0" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M48 44 Q52 50 48 54" stroke="#ffb0e0" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgPhoenix(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 48 Q14 38 10 24 Q8 14 18 12 Q22 20 28 22 Q34 20 38 12 Q48 14 46 24 Q42 38 28 48Z" fill="#e8602a"/>
    <path d="M28 48 Q16 40 14 28 Q14 20 22 18 Q25 24 28 26 Q31 24 34 18 Q42 20 42 28 Q40 40 28 48Z" fill="#f5a030"/>
    <path d="M28 48 Q20 42 20 32 Q22 24 28 28 Q34 24 36 32 Q36 42 28 48Z" fill="#f5c842"/>
    <path d="M4 8 Q10 14 16 12 Q12 20 10 28" stroke="#e8602a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M52 8 Q46 14 40 12 Q44 20 46 28" stroke="#e8602a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M2 18 Q8 20 12 16" stroke="#f5a030" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M54 18 Q48 20 44 16" stroke="#f5a030" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="23" cy="24" r="3" fill="white"/>
    <circle cx="33" cy="24" r="3" fill="white"/>
    <circle cx="23" cy="25" r="1.8" fill="#7a1000"/>
    <circle cx="33" cy="25" r="1.8" fill="#7a1000"/>
    <circle cx="24" cy="23.5" r=".8" fill="white" opacity=".9"/>
    <circle cx="34" cy="23.5" r=".8" fill="white" opacity=".9"/>
    <path d="M24 30 Q28 34 32 30" stroke="#c03010" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgMermaid(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="16" rx="13" ry="12" fill="#f0d0b8"/>
    <ellipse cx="20" cy="8" rx="5" ry="7" fill="#4fd1b0" transform="rotate(-20 20 8)"/>
    <ellipse cx="36" cy="8" rx="5" ry="7" fill="#4fd1b0" transform="rotate(20 36 8)"/>
    <path d="M16 22 Q28 28 40 22 L38 40 Q28 48 18 40Z" fill="#4fd1b0"/>
    <ellipse cx="28" cy="28" rx="8" ry="5" fill="#6be8c8" opacity=".5"/>
    <circle cx="22" cy="15" r="3.5" fill="white"/>
    <circle cx="34" cy="15" r="3.5" fill="white"/>
    <circle cx="22" cy="16" r="2" fill="#3a1a5e"/>
    <circle cx="34" cy="16" r="2" fill="#3a1a5e"/>
    <circle cx="23" cy="14.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="14.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="18" cy="19" rx="3" ry="1.8" fill="#ffb0b0" opacity=".5"/>
    <ellipse cx="38" cy="19" rx="3" ry="1.8" fill="#ffb0b0" opacity=".5"/>
    <path d="M23 21 Q28 25 33 21" stroke="#e080a0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M18 40 Q14 50 20 54 Q28 56 36 54 Q42 50 38 40" fill="#4fd1b0"/>
    <path d="M20 54 Q24 48 28 52 Q32 48 36 54" stroke="#3ab898" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="18" cy="41" rx="3" ry="2" fill="#6be8c8" opacity=".6" transform="rotate(-20 18 41)"/>
    <ellipse cx="38" cy="41" rx="3" ry="2" fill="#6be8c8" opacity=".6" transform="rotate(20 38 41)"/>
  </svg>`;
}
function petSvgWizard(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 2 L36 22 L20 22Z" fill="#7c63f5"/>
    <ellipse cx="28" cy="10" rx="3" ry="3" fill="#f5c842"/>
    <circle cx="20" cy="6" r="1.5" fill="#f5c842" opacity=".7"/>
    <circle cx="36" cy="8" r="1.2" fill="#f5c842" opacity=".7"/>
    <ellipse cx="28" cy="30" rx="15" ry="14" fill="#9f8aff"/>
    <rect x="13" y="20" width="30" height="5" rx="2.5" fill="#7c63f5"/>
    <circle cx="22" cy="28" r="4" fill="white"/>
    <circle cx="34" cy="28" r="4" fill="white"/>
    <circle cx="22" cy="29" r="2.5" fill="#2a0060"/>
    <circle cx="34" cy="29" r="2.5" fill="#2a0060"/>
    <circle cx="23" cy="27.5" r="1" fill="white" opacity=".9"/>
    <circle cx="35" cy="27.5" r="1" fill="white" opacity=".9"/>
    <path d="M23 35 Q28 39 33 35" stroke="#5a40c0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="28" cy="46" rx="14" ry="10" fill="#7c63f5"/>
    <path d="M12 35 Q6 38 8 44" stroke="#c8b8ff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="8" cy="44" r="2.5" fill="#f5c842" opacity=".9"/>
    <text x="40" y="38" font-size="7" fill="#f5c842" opacity=".8">✦</text>
    <text x="14" y="50" font-size="5" fill="#c8b8ff" opacity=".6">✦</text>
  </svg>`;
}

// ── KAWAII / CUTE ─────────────────────────────────────────────────
function petSvgCloud(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="30" rx="20" ry="14" fill="#e8e8f8"/>
    <ellipse cx="18" cy="24" rx="10" ry="10" fill="#e8e8f8"/>
    <ellipse cx="34" cy="22" rx="12" ry="12" fill="#e8e8f8"/>
    <ellipse cx="44" cy="28" rx="8" ry="8" fill="#e8e8f8"/>
    <ellipse cx="12" cy="30" rx="7" ry="7" fill="#e8e8f8"/>
    <circle cx="22" cy="30" r="3.5" fill="white"/>
    <circle cx="34" cy="30" r="3.5" fill="white"/>
    <circle cx="22" cy="31" r="2" fill="#5a6080"/>
    <circle cx="34" cy="31" r="2" fill="#5a6080"/>
    <circle cx="23" cy="29.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="29.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="18" cy="34" rx="3" ry="2" fill="#c0c8e8" opacity=".4"/>
    <ellipse cx="38" cy="34" rx="3" ry="2" fill="#c0c8e8" opacity=".4"/>
    <path d="M23 36 Q28 40 33 36" stroke="#8090b0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M20 42 L18 50" stroke="#a8c8f8" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>
    <path d="M28 44 L27 52" stroke="#a8c8f8" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>
    <path d="M36 42 L38 50" stroke="#a8c8f8" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>
  </svg>`;
}
function petSvgCrown(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32 L14 16 L22 26 L28 10 L34 26 L42 16 L48 32Z" fill="#f5c842"/>
    <rect x="8" y="30" width="40" height="12" rx="3" fill="#f5c842"/>
    <circle cx="8" cy="32" r="3.5" fill="#ff7e6b"/>
    <circle cx="28" cy="10" r="3.5" fill="#c8b8ff"/>
    <circle cx="48" cy="32" r="3.5" fill="#4fd1b0"/>
    <circle cx="14" cy="16" r="2.5" fill="#ff7e6b" opacity=".7"/>
    <circle cx="42" cy="16" r="2.5" fill="#4fd1b0" opacity=".7"/>
    <ellipse cx="18" cy="36" rx="3" ry="2.5" fill="#e8a800" opacity=".5"/>
    <ellipse cx="28" cy="36" rx="3" ry="2.5" fill="#e8a800" opacity=".5"/>
    <ellipse cx="38" cy="36" rx="3" ry="2.5" fill="#e8a800" opacity=".5"/>
    <ellipse cx="28" cy="48" rx="14" ry="6" fill="#f0d0f0"/>
    <circle cx="22" cy="46" r="3" fill="white"/>
    <circle cx="34" cy="46" r="3" fill="white"/>
    <circle cx="22" cy="47" r="1.8" fill="#3a1a5e"/>
    <circle cx="34" cy="47" r="1.8" fill="#3a1a5e"/>
    <path d="M23 50 Q28 53 33 50" stroke="#c060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgMushroom(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="28" rx="14" ry="20" fill="#f5f5e8"/>
    <ellipse cx="28" cy="30" rx="11" ry="14" fill="#f0ece0" opacity=".8"/>
    <ellipse cx="28" cy="18" rx="22" ry="16" fill="#e83838"/>
    <circle cx="20" cy="12" r="5" fill="white" opacity=".85"/>
    <circle cx="34" cy="10" r="4" fill="white" opacity=".85"/>
    <circle cx="12" cy="20" r="3.5" fill="white" opacity=".75"/>
    <circle cx="40" cy="20" r="3" fill="white" opacity=".75"/>
    <circle cx="28" cy="8" r="3" fill="white" opacity=".8"/>
    <circle cx="22" cy="32" r="3.5" fill="white"/>
    <circle cx="34" cy="32" r="3.5" fill="white"/>
    <circle cx="22" cy="33" r="2" fill="#5a2a20"/>
    <circle cx="34" cy="33" r="2" fill="#5a2a20"/>
    <circle cx="23" cy="31.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="31.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="18" cy="37" rx="3" ry="1.8" fill="#f0c0a0" opacity=".5"/>
    <ellipse cx="38" cy="37" rx="3" ry="1.8" fill="#f0c0a0" opacity=".5"/>
    <path d="M23 38 Q28 42 33 38" stroke="#8a4030" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgStar2(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="28,4 33,19 49,19 36,28 41,44 28,35 15,44 20,28 7,19 23,19" fill="#c8b8ff"/>
    <polygon points="28,8 32,20 45,20 35,28 39,41 28,33 17,41 21,28 11,20 24,20" fill="#d8ccff" opacity=".5"/>
    <circle cx="22" cy="24" r="3.5" fill="white"/>
    <circle cx="34" cy="24" r="3.5" fill="white"/>
    <circle cx="22" cy="25" r="2" fill="#3a1a5e"/>
    <circle cx="34" cy="25" r="2" fill="#3a1a5e"/>
    <circle cx="23" cy="23.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="23.5" r=".9" fill="white" opacity=".9"/>
    <ellipse cx="18" cy="29" rx="3" ry="2" fill="#ffb0e0" opacity=".5"/>
    <ellipse cx="38" cy="29" rx="3" ry="2" fill="#ffb0e0" opacity=".5"/>
    <path d="M23 31 Q28 35 33 31" stroke="#8060c0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <text x="6" y="14" font-size="6" fill="#f5c842" opacity=".8">✦</text>
    <text x="44" y="12" font-size="5" fill="#f5c842" opacity=".7">✦</text>
    <text x="46" y="40" font-size="6" fill="#c8b8ff" opacity=".6">✦</text>
  </svg>`;
}

// ── SCI-FI / SPACE ────────────────────────────────────────────────
function petSvgAstronaut(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="22" rx="18" ry="18" fill="#e0e8f8"/>
    <ellipse cx="28" cy="22" rx="14" ry="14" fill="#c8d8f0"/>
    <rect x="18" y="14" width="20" height="16" rx="6" fill="#1a2040"/>
    <ellipse cx="28" cy="22" rx="9" ry="8" fill="#2a3860" opacity=".9"/>
    <circle cx="22" cy="20" r="3" fill="white" opacity=".15"/>
    <path d="M20 30 Q28 34 36 30" stroke="#a0b0c8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <rect x="22" y="28" width="4" height="2" rx="1" fill="#4fd1b0" opacity=".8"/>
    <ellipse cx="28" cy="44" rx="16" ry="12" fill="#e0e8f8"/>
    <rect x="20" y="34" width="16" height="12" rx="4" fill="#c8d8f0"/>
    <rect x="22" y="36" width="5" height="7" rx="2" fill="#4fd1b0" opacity=".6"/>
    <rect x="29" y="36" width="5" height="7" rx="2" fill="#ff7e6b" opacity=".6"/>
    <ellipse cx="10" cy="36" rx="5" ry="4" fill="#e0e8f8"/>
    <ellipse cx="46" cy="36" rx="5" ry="4" fill="#e0e8f8"/>
    <ellipse cx="20" cy="52" rx="5" ry="4" fill="#c8d8f0"/>
    <ellipse cx="36" cy="52" rx="5" ry="4" fill="#c8d8f0"/>
  </svg>`;
}
function petSvgUFO(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="32" rx="24" ry="10" fill="#9090c8"/>
    <ellipse cx="28" cy="30" rx="24" ry="8" fill="#b0b0e0"/>
    <ellipse cx="28" cy="22" rx="14" ry="12" fill="#c8c8f0"/>
    <ellipse cx="28" cy="20" rx="10" ry="9" fill="#e0e0ff"/>
    <ellipse cx="28" cy="18" rx="6" ry="6" fill="#4040a0" opacity=".7"/>
    <circle cx="22" cy="20" r="2.5" fill="white" opacity=".3"/>
    <circle cx="14" cy="32" r="3" fill="#f5c842" opacity=".8"/>
    <circle cx="22" cy="36" r="3" fill="#4fd1b0" opacity=".8"/>
    <circle cx="34" cy="36" r="3" fill="#ff7e6b" opacity=".8"/>
    <circle cx="42" cy="32" r="3" fill="#c8b8ff" opacity=".8"/>
    <ellipse cx="28" cy="42" rx="12" ry="4" fill="#4fd1b0" opacity=".15"/>
    <path d="M16 44 L12 52" stroke="#4fd1b0" stroke-width="1.5" opacity=".3" fill="none" stroke-linecap="round"/>
    <path d="M28 46 L28 54" stroke="#4fd1b0" stroke-width="1.5" opacity=".3" fill="none" stroke-linecap="round"/>
    <path d="M40 44 L44 52" stroke="#4fd1b0" stroke-width="1.5" opacity=".3" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgRocket(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4 Q38 10 40 28 L28 32 L16 28 Q18 10 28 4Z" fill="#e0e8f8"/>
    <path d="M28 4 Q33 10 34 28 L28 32 L22 28 Q23 10 28 4Z" fill="#c8d8f0"/>
    <ellipse cx="28" cy="20" rx="6" ry="6" fill="#4a70d0"/>
    <ellipse cx="28" cy="20" rx="4" ry="4" fill="#6090f8"/>
    <path d="M16 28 L10 38 L20 34Z" fill="#ff7e6b"/>
    <path d="M40 28 L46 38 L36 34Z" fill="#ff7e6b"/>
    <path d="M22 32 L20 44 Q28 48 36 44 L34 32Z" fill="#c8d8f0"/>
    <ellipse cx="28" cy="44" rx="8" ry="4" fill="#e0e8f8"/>
    <path d="M22 44 Q20 50 24 54" stroke="#f5c842" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M34 44 Q36 50 32 54" stroke="#f5a030" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M28 46 L28 54" stroke="#f5c842" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>
    <circle cx="24" cy="16" r="1.5" fill="white" opacity=".6"/>
    <circle cx="32" cy="12" r="1" fill="white" opacity=".5"/>
  </svg>`;
}
function petSvgBlackHole(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="28" rx="22" ry="8" fill="#2a1060" opacity=".5" transform="rotate(-20 28 28)"/>
    <ellipse cx="28" cy="28" rx="20" ry="6" fill="#3a1880" opacity=".6" transform="rotate(-20 28 28)"/>
    <circle cx="28" cy="28" r="14" fill="#1a0840"/>
    <circle cx="28" cy="28" r="10" fill="#0a0420"/>
    <circle cx="28" cy="28" r="6" fill="#050210"/>
    <ellipse cx="28" cy="28" rx="22" ry="6" fill="none" stroke="#9f8aff" stroke-width="1.5" opacity=".5" transform="rotate(20 28 28)"/>
    <ellipse cx="28" cy="28" rx="18" ry="4" fill="none" stroke="#c8b8ff" stroke-width="1" opacity=".4" transform="rotate(20 28 28)"/>
    <circle cx="22" cy="26" r="2.5" fill="white"/>
    <circle cx="34" cy="26" r="2.5" fill="white"/>
    <circle cx="22" cy="27" r="1.5" fill="#c8b8ff"/>
    <circle cx="34" cy="27" r="1.5" fill="#c8b8ff"/>
    <path d="M23 31 Q28 34 33 31" stroke="#9f8aff" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <text x="6" y="14" font-size="5" fill="#f5c842" opacity=".7">✦</text>
    <text x="44" y="10" font-size="4" fill="#c8b8ff" opacity=".6">✦</text>
    <text x="48" y="44" font-size="5" fill="#f5c842" opacity=".6">✦</text>
    <text x="4" y="44" font-size="4" fill="#c8b8ff" opacity=".5">✦</text>
  </svg>`;
}

// ── FOOD ──────────────────────────────────────────────────────────
function petSvgDonut(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="30" rx="22" ry="18" fill="#f0a878"/>
    <ellipse cx="28" cy="28" rx="22" ry="18" fill="#f5c0a0"/>
    <ellipse cx="28" cy="26" rx="22" ry="17" fill="#f5b890"/>
    <path d="M6 26 Q8 14 16 10 Q22 6 28 6 Q34 6 40 10 Q48 14 50 26 Q44 22 36 20 Q30 19 28 19 Q26 19 20 20 Q12 22 6 26Z" fill="#e83870"/>
    <circle cx="18" cy="12" r="2" fill="#f5c842" opacity=".9"/>
    <circle cx="28" cy="8" r="2.5" fill="#4fd1b0" opacity=".9"/>
    <circle cx="38" cy="12" r="2" fill="#c8b8ff" opacity=".9"/>
    <circle cx="12" cy="20" r="1.5" fill="#f5c842" opacity=".7"/>
    <circle cx="44" cy="20" r="1.5" fill="#4fd1b0" opacity=".7"/>
    <ellipse cx="28" cy="30" rx="9" ry="7" fill="#c8955a"/>
    <ellipse cx="28" cy="30" rx="7" ry="5" fill="#dba870"/>
    <circle cx="22" cy="32" r="3.5" fill="white"/>
    <circle cx="34" cy="32" r="3.5" fill="white"/>
    <circle cx="22" cy="33" r="2" fill="#5a2a10"/>
    <circle cx="34" cy="33" r="2" fill="#5a2a10"/>
    <circle cx="23" cy="31.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="31.5" r=".9" fill="white" opacity=".9"/>
    <path d="M23 37 Q28 41 33 37" stroke="#a06030" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgIcecream(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 34 L28 56 L36 34Z" fill="#f5c842"/>
    <path d="M22 34 L28 52 L34 34Z" fill="#e8b030" opacity=".6"/>
    <ellipse cx="28" cy="30" rx="16" ry="14" fill="#ffb0c8"/>
    <ellipse cx="28" cy="26" rx="14" ry="12" fill="#ffc8d8"/>
    <ellipse cx="22" cy="22" rx="8" ry="7" fill="#ffd8e8"/>
    <ellipse cx="34" cy="22" rx="8" ry="7" fill="#ffd8e8"/>
    <circle cx="20" cy="14" r="2" fill="#e83870" opacity=".7"/>
    <circle cx="28" cy="11" r="2.5" fill="#e83870" opacity=".8"/>
    <circle cx="36" cy="14" r="2" fill="#e83870" opacity=".7"/>
    <path d="M12 26 Q10 30 14 32" stroke="#ffb0c8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M44 26 Q46 30 42 32" stroke="#ffb0c8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="22" cy="28" r="3.5" fill="white"/>
    <circle cx="34" cy="28" r="3.5" fill="white"/>
    <circle cx="22" cy="29" r="2" fill="#5a1a2e"/>
    <circle cx="34" cy="29" r="2" fill="#5a1a2e"/>
    <circle cx="23" cy="27.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="27.5" r=".9" fill="white" opacity=".9"/>
    <path d="M23 33 Q28 37 33 33" stroke="#c06080" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgRamen(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="38" rx="20" ry="14" fill="#e8a860"/>
    <ellipse cx="28" cy="34" rx="20" ry="12" fill="#f0bc78"/>
    <ellipse cx="28" cy="30" rx="20" ry="10" fill="#f8d090"/>
    <ellipse cx="28" cy="28" rx="18" ry="8" fill="#fff0c8"/>
    <path d="M12 28 Q14 24 20 22 Q24 26 28 24 Q32 22 36 24 Q42 26 44 28" stroke="#f0a060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M14 26 Q16 22 22 20 Q26 24 28 22 Q30 20 34 22 Q40 24 42 26" stroke="#e89050" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/>
    <ellipse cx="20" cy="24" rx="3" ry="2" fill="#e83838" opacity=".7"/>
    <ellipse cx="36" cy="24" rx="3" ry="2" fill="#e83838" opacity=".7"/>
    <circle cx="28" cy="22" r="3" fill="#f0f080" opacity=".8"/>
    <circle cx="22" cy="34" r="3.5" fill="white"/>
    <circle cx="34" cy="34" r="3.5" fill="white"/>
    <circle cx="22" cy="35" r="2" fill="#5a2a10"/>
    <circle cx="34" cy="35" r="2" fill="#5a2a10"/>
    <circle cx="23" cy="33.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="33.5" r=".9" fill="white" opacity=".9"/>
    <path d="M23 39 Q28 43 33 39" stroke="#a06030" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M20 12 Q18 6 22 4" stroke="#c8d8f8" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".5"/>
    <path d="M28 10 Q28 4 30 2" stroke="#c8d8f8" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".5"/>
    <path d="M36 12 Q38 6 34 4" stroke="#c8d8f8" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".5"/>
  </svg>`;
}
function petSvgBoba(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="22" width="20" height="28" rx="6" fill="#d4a870"/>
    <rect x="20" y="24" width="16" height="24" rx="5" fill="#f8e8c8"/>
    <ellipse cx="28" cy="22" rx="10" ry="5" fill="#c89050"/>
    <ellipse cx="28" cy="20" rx="10" ry="5" fill="#e0b870"/>
    <path d="M26 4 L26 22" stroke="#c8b8ff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="26" cy="4" r="3" fill="#c8b8ff"/>
    <circle cx="22" cy="38" r="3.5" fill="#5a2a10"/>
    <circle cx="28" cy="42" r="3.5" fill="#5a2a10"/>
    <circle cx="34" cy="38" r="3.5" fill="#5a2a10"/>
    <circle cx="22" cy="44" r="3" fill="#3a1a00"/>
    <circle cx="34" cy="44" r="3" fill="#3a1a00"/>
    <circle cx="22" cy="30" r="3.5" fill="white"/>
    <circle cx="34" cy="30" r="3.5" fill="white"/>
    <circle cx="22" cy="31" r="2" fill="#3a1a2e"/>
    <circle cx="34" cy="31" r="2" fill="#3a1a2e"/>
    <circle cx="23" cy="29.5" r=".9" fill="white" opacity=".9"/>
    <circle cx="35" cy="29.5" r=".9" fill="white" opacity=".9"/>
    <path d="M23 34 Q28 38 33 34" stroke="#7a3a20" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function petSvgCake(size=56){
  return `<svg width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6 Q28 2 32 6 L30 16 Q28 14 26 16Z" fill="#f5c842"/>
    <ellipse cx="28" cy="16" rx="3" ry="2" fill="#ff7e6b"/>
    <rect x="14" y="16" width="28" height="10" rx="3" fill="#f8e8f8"/>
    <path d="M14 20 Q20 16 28 20 Q36 24 42 20" stroke="#e0b0d0" stroke-width="2" fill="none"/>
    <rect x="12" y="26" width="32" height="12" rx="3" fill="#ffc8d8"/>
    <path d="M12 30 Q20 26 28 30 Q36 34 44 30" stroke="#ff90b0" stroke-width="2" fill="none"/>
    <rect x="10" y="38" width="36" height="12" rx="4" fill="#e8c8f0"/>
    <path d="M10 42 Q18 38 28 42 Q38 46 46 42" stroke="#c890d0" stroke-width="2" fill="none"/>
    <circle cx="20" cy="40" r="2" fill="#f5c842" opacity=".8"/>
    <circle cx="28" cy="40" r="2" fill="#ff7e6b" opacity=".8"/>
    <circle cx="36" cy="40" r="2" fill="#c8b8ff" opacity=".8"/>
    <circle cx="22" cy="44" r="3" fill="white"/>
    <circle cx="34" cy="44" r="3" fill="white"/>
    <circle cx="22" cy="45" r="1.8" fill="#5a1a3e"/>
    <circle cx="34" cy="45" r="1.8" fill="#5a1a3e"/>
    <path d="M23 48 Q28 51 33 48" stroke="#c060a0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

// ═══════════════════════════════════════════════════════════════════
// PET GAMIFICATION SYSTEM v2
// ═══════════════════════════════════════════════════════════════════

// ── Pet XP thresholds (per pet level, separate from player XP) ──



// ── Init & helpers ───────────────────────────────────────────────
function initPetDb(){
  if(!db.pet) db.pet={};
  var p=db.pet;
  if(!p.activePetId)     p.activePetId='ghost';
  if(!p.owned)           p.owned=['ghost'];
  if(!Array.isArray(p.owned)) p.owned=['ghost'];
  // Per-pet XP map — always reset to {} if not a plain object
  try{
    if(!p.petXPs || typeof p.petXPs !== 'object' || Array.isArray(p.petXPs)) p.petXPs={};
    // Migrate legacy flat petXP to per-pet map (one-time, active pet only)
    if(p.petXP!==undefined && p.petXP>0 && !p.petXPs[p.activePetId||'ghost']){
      p.petXPs[p.activePetId||'ghost']=p.petXP;
      p.petXP=0; // erase so future pets don't inherit it
    }
  }catch(e){ p.petXPs={}; }
  if(p.petXP===undefined) p.petXP=0;
  // Per-pet instance state map (energy, happiness, mood, totalStudyMins, moodHistory, lastActivity)
  try{
    if(!p.petStates||typeof p.petStates!=='object'||Array.isArray(p.petStates)) p.petStates={};
    var _aid=p.activePetId||'ghost';
    if(!p.petStates[_aid]){
      // One-time migration of legacy global fields into the active pet only
      p.petStates[_aid]={
        energy:      p.energy!==undefined      ? p.energy      : 60,
        happiness:   p.happiness!==undefined   ? p.happiness   : 70,
        mood:        p.mood                    || 'neutral',
        moodHistory: Array.isArray(p.moodHistory) ? p.moodHistory.slice() : [],
        totalStudyMins: p.totalStudyMins!==undefined ? p.totalStudyMins : 0,
        lastActivity: p.lastActivity           || new Date().toISOString()
      };
      // Erase legacy global fields so future pets don't inherit them
      p.energy=undefined; p.happiness=undefined; p.mood=undefined;
      p.moodHistory=[]; p.totalStudyMins=0; p.lastActivity=undefined;
    }
  }catch(e){ p.petStates={}; }
  if(!Array.isArray(p.milestones))      p.milestones=[];
  if(p.totalBoosts===undefined)         p.totalBoosts=0;
  if(p.maxDailySessions===undefined)    p.maxDailySessions=0;
  if(p.perfectHappySessions===undefined)p.perfectHappySessions=0;
  if(p.totalQuestsDone===undefined)     p.totalQuestsDone=0;
  if(p.petsEnabled===undefined)         p.petsEnabled=true;
  if(!p.customNames||typeof p.customNames!=='object'||Array.isArray(p.customNames)) p.customNames={};
}

// ── Per-pet instance state helpers ─────────────────────────────────
// Returns the state object for the active pet (creates default if missing)
function getActivePetState(){
  initPetDb();
  var id=db.pet.activePetId||'ghost';
  if(!db.pet.petStates||typeof db.pet.petStates!=='object'||Array.isArray(db.pet.petStates)) db.pet.petStates={};
  if(!db.pet.petStates[id]){
    db.pet.petStates[id]={
      energy:60, happiness:70, mood:'neutral',
      moodHistory:[], totalStudyMins:0,
      lastActivity:new Date().toISOString()
    };
  }
  var s=db.pet.petStates[id];
  if(s.energy===undefined)         s.energy=60;
  if(s.happiness===undefined)      s.happiness=70;
  if(!s.mood)                      s.mood='neutral';
  if(!Array.isArray(s.moodHistory))s.moodHistory=[];
  if(s.totalStudyMins===undefined) s.totalStudyMins=0;
  if(!s.lastActivity)              s.lastActivity=new Date().toISOString();
  return s;
}

// Proxy getters that always read from the active pet's instance state
function getPetLevel(m){if(m>=600)return 5;if(m>=300)return 4;if(m>=150)return 3;if(m>=60)return 2;return 1;}

// Per-pet XP helpers — each pet tracks its own XP independently
function getActivePetXP(){
  try{
    initPetDb();
    var id=db.pet.activePetId||'ghost';
    if(!db.pet.petXPs||typeof db.pet.petXPs!=='object'||Array.isArray(db.pet.petXPs))db.pet.petXPs={};
    return db.pet.petXPs[id]||0;
  }catch(e){return 0;}
}
function addActivePetXP(amount){
  try{
    initPetDb();
    var id=db.pet.activePetId||'ghost';
    if(!db.pet.petXPs||typeof db.pet.petXPs!=='object'||Array.isArray(db.pet.petXPs))db.pet.petXPs={};
    db.pet.petXPs[id]=(db.pet.petXPs[id]||0)+amount;
  }catch(e){}
}

// ── Check milestones & trigger animations ───────────────────────
function checkPetMilestones(){
  initPetDb();
  PET_MILESTONES.forEach(ms=>{
    if(!db.pet.milestones.includes(ms.id)&&ms.check(db.pet)){
      db.pet.milestones.push(ms.id);
      setTimeout(()=>{
        queueAchievementToast({icon:ms.icon,name:ms.name,desc:ms.desc,xp:0,isPetMilestone:true});
      },400);
    }
  });
}

// ── Pet confetti burst on the card ──────────────────────────────
function petConfettiBurst(){
  var card=document.getElementById('pet-card');
  if(!card)return;
  var colors=['#c8b8ff','#f5c842','#6bcb8b','#ff7e6b','#4fd1b0'];
  var rect=card.getBoundingClientRect();
  for(var i=0;i<14;i++){
    var el=document.createElement('div');
    el.className='pet-confetti-piece';
    el.style.cssText='position:fixed;left:'+(rect.left+Math.random()*rect.width)+'px;top:'+(rect.top+Math.random()*30)+'px;background:'+colors[Math.floor(Math.random()*colors.length)]+';width:'+(5+Math.random()*6)+'px;height:'+(5+Math.random()*6)+'px;border-radius:2px;pointer-events:none;z-index:9999;animation:pet-confetti-fall '+(0.7+Math.random()*0.6)+'s ease-out '+(Math.random()*0.3)+'s forwards';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),1500);
  }
  card.classList.add('levelup-flash');
  setTimeout(()=>card.classList.remove('levelup-flash'),1300);
}

function updatePetAfterSession(durationMin, focusScore){
  try{
  initPetDb();
  var prevLevel=petLevelFromXP(getActivePetXP());
  var ps=getActivePetState(); // per-pet instance state

  ps.totalStudyMins=(ps.totalStudyMins||0)+durationMin;

  // Pet XP gain — tracked per individual pet
  var xpGain=Math.round(durationMin*PET_XP_PER_MIN);
  addActivePetXP(xpGain);

  // Energy — per pet
  ps.energy=Math.min(100,(ps.energy||0)+Math.round(durationMin*1.5));

  // Happiness – rises with sessions, bonus for longer ones
  var hapGain=10+Math.min(20,Math.round(durationMin/3));
  ps.happiness=Math.min(100,(ps.happiness||0)+hapGain);

  ps.mood='happy';
  ps.lastActivity=new Date().toISOString();

  // Track mood history (keep last 5) — per pet
  var entry=new Date().toLocaleDateString('el-GR',{day:'2-digit',month:'2-digit'})+' — 😊 Happy';
  ps.moodHistory=(ps.moodHistory||[]);
  ps.moodHistory.unshift(entry);
  if(ps.moodHistory.length>5)ps.moodHistory.length=5;

  // Track perfect happiness
  if(ps.happiness>=100)db.pet.perfectHappySessions=(db.pet.perfectHappySessions||0)+1;

  // Track daily high score for quests
  if(focusScore&&focusScore>(db.pet.todayHighScore||0))db.pet.todayHighScore=focusScore;

  // Max daily sessions for milestones
  var todaySess=getTodaySessionCount();
  if(todaySess>(db.pet.maxDailySessions||0))db.pet.maxDailySessions=todaySess;

  // Early session tracking for quests
  if(new Date().getHours()<10)db.pet.todayEarlySession=true;

  var newLevel=petLevelFromXP(getActivePetXP());
  checkPetMilestones();
  checkPetQuests();
  save();

  // Level-up celebration
  if(newLevel>prevLevel){
    setTimeout(()=>{
      petConfettiBurst();
      showToast('🎉 Pet Level Up! Lv.'+newLevel+'!');
    },700);
  }
  renderPet();
  }catch(e){console.warn('updatePetAfterSession error:',e);try{renderPet();}catch(e2){}}
}

function updatePetMoodFromInactivity(){
  initPetDb();
  var ps=getActivePetState();
  var _safeDate=ps.lastActivity?new Date(ps.lastActivity):new Date();
  if(isNaN(_safeDate.getTime()))_safeDate=new Date();
  var hoursAgo=(Date.now()-_safeDate.getTime())/(1000*60*60);

  // Happiness decays gradually (per hour)
  var hapDecay=Math.floor(hoursAgo*1.5); // -1.5% per hour
  if(hapDecay>0){
    ps.happiness=Math.max(0,(ps.happiness||70)-hapDecay);
    ps.lastActivity=new Date().toISOString(); // reset so decay is not applied twice per session
  }

  if(hoursAgo>=48){
    ps.mood='sad';
    ps.energy=Math.max(0,(ps.energy||0)-20);
    // Record sad in history
    var entry=new Date().toLocaleDateString('el-GR',{day:'2-digit',month:'2-digit'})+' — 😔 Λείπεις';
    ps.moodHistory=(ps.moodHistory||[]);
    if(!ps.moodHistory[0]||!ps.moodHistory[0].includes('Λείπεις')){
      ps.moodHistory.unshift(entry);
      if(ps.moodHistory.length>5)ps.moodHistory.length=5;
    }
  } else if(hoursAgo>=24&&ps.mood!=='happy'){
    ps.mood='neutral';
    ps.energy=Math.max(0,(ps.energy||0)-8);
  }
}

function petBoost(){
  initPetDb();
  var coins=(db.shop||{}).coins||0;
  if(coins<5){showToast('Δεν έχεις αρκετά coins (χρειάζονται 5 🪙)');return;}
  db.shop.coins=coins-5;
  var ps=getActivePetState();
  // If exhausted (happiness=0) need 2 boosts to recover
  var wasExhausted=ps.happiness<=0;
  ps.energy=Math.min(100,(ps.energy||0)+20);
  ps.happiness=Math.min(100,(ps.happiness||0)+15);
  if(ps.mood==='sad'&&ps.happiness>15)ps.mood='neutral';
  db.pet.totalBoosts=(db.pet.totalBoosts||0)+1;
  db.pet.todayBoosts=(db.pet.todayBoosts||0)+1;

  // Boost also gives small pet XP
  addActivePetXP(5);

  var card=document.getElementById('pet-card');
  if(card){card.classList.add('pet-boost-anim');setTimeout(()=>card.classList.remove('pet-boost-anim'),750);}
  checkPetMilestones();checkPetQuests();
  save();renderPet();updateSidebar();
  showToast(wasExhausted?'⚡ Boost! Χρειάζεται ακόμα ένα για να ξυπνήσει!':'⚡ Energy & Joy boost! −5 🪙');
}

function isPetsEnabled(){
  initPetDb();
  return db.pet.petsEnabled !== false;
}

function renderPet(){
  try{
  initPetDb();updatePetMoodFromInactivity();
  var card=document.getElementById('pet-card');
  if(!card)return;
  if(!isPetsEnabled()){card.style.display='none';var qp=document.getElementById('pet-quests-panel');if(qp)qp.style.display='none';renderInlinePet();return;}
  card.style.display='';
  var def=getPetDef(db.pet.activePetId);
  var isRunning=T.running;
  var ps=getActivePetState(); // per-pet instance state

  // Stage
  var stage=card.querySelector('.pet-stage');
  if(stage){stage.innerHTML='<div class="pet-glow"></div><div class="pet-scene-svg-wrap" style="position:relative;z-index:1">'+buildPetSceneSvg(def,isRunning,ps.mood,72)+'</div>';}

  // Name & level
  var nameEl=document.getElementById('pet-name');
  var lvlEl=document.getElementById('pet-level-badge');
  if(nameEl)nameEl.textContent=getPetName(db.pet.activePetId);
  var petLv=petLevelFromXP(getActivePetXP());
  if(lvlEl)lvlEl.textContent='Lv.'+petLv;

  // Mood
  var isExhausted=(ps.happiness||0)<=0;
  var moodMap={
    happy:{color:'#6bcb8b',label:isRunning?'📖 Studying with you!':isExhausted?'😴 Εξαντλημένο':'😊 Happy'},
    neutral:{color:'#f5c842',label:isRunning?'📖 Studying with you!':isExhausted?'😴 Εξαντλημένο':'Waiting… 😐'},
    sad:{color:'#ff7e6b',label:isExhausted?'😴 Εξαντλημένο — boost x2!':'Needs attention 😔'}
  };
  var moodDot=document.getElementById('pet-mood-dot');
  var moodLbl=document.getElementById('pet-mood-label');
  var m=moodMap[ps.mood]||moodMap.neutral;
  if(moodDot)moodDot.style.background=isExhausted?'#5a5868':m.color;
  if(moodLbl)moodLbl.textContent=m.label;

  // Energy bar
  var en=ps.energy||0;
  var energyFill=document.getElementById('pet-energy-fill');
  if(energyFill)energyFill.style.width=en+'%';
  card.classList.toggle('high-energy',en>=75&&!isExhausted);
  card.classList.toggle('exhausted',isExhausted);

  // Happiness bar
  var hap=ps.happiness||0;
  var hapFill=document.getElementById('pet-hap-fill');
  var hapPct=document.getElementById('pet-hap-pct');
  if(hapFill){
    var hapColor=hap>=70?'linear-gradient(90deg,#6bcb8b,#4dbb72)':hap>=35?'linear-gradient(90deg,#f5c842,#e8882a)':'linear-gradient(90deg,#ff7e6b,#e04a00)';
    hapFill.style.background=hapColor;
    hapFill.style.width=hap+'%';
  }
  if(hapPct){hapPct.textContent=hap+'%';hapPct.style.color=hap>=70?'var(--green)':hap>=35?'var(--gold)':'var(--coral)';}

  // Pet XP bar
  var xpProg=petXpProgress(getActivePetXP());
  var xpFill=document.getElementById('pet-xp-fill');
  var xpPctEl=document.getElementById('pet-xp-pct');
  if(xpFill)xpFill.style.width=xpProg.pct+'%';
  if(xpPctEl)xpPctEl.textContent=xpProg.pct+'%';

  // Badges inline (top 3 most recent milestones)
  var badgesEl=document.getElementById('pet-badges-inline');
  if(badgesEl){
    var earned=(db.pet.milestones||[]).slice(-3);
    badgesEl.innerHTML=earned.map(id=>{var ms=PET_MILESTONES.find(m=>m.id===id);return ms?'<span title="'+ms.name+'" style="font-size:12px">'+ms.icon+'</span>':''}).join('');
  }

  try{renderPetQuests();}catch(e){console.warn('renderPetQuests error:',e);}
  try{renderInlinePet();}catch(e){console.warn('renderInlinePet error:',e);}
  }catch(e){console.warn('renderPet error:',e);}
}


// ── Pet Rename ────────────────────────────────────────────────────
function renamePet(){
  var inp=document.getElementById('pp-rename-input');
  if(!inp)return;
  var val=inp.value.trim();
  if(!val){showToast('Το όνομα δεν μπορεί να είναι κενό.');return;}
  if(val.length>20){showToast('Το όνομα δεν μπορεί να ξεπερνά 20 χαρακτήρες.');return;}
  initPetDb();
  var id=db.pet.activePetId||'ghost';
  db.pet.customNames=db.pet.customNames||{};
  db.pet.customNames[id]=val;
  save();
  document.getElementById('pp-name').textContent=val;
  if(document.getElementById('pet-name'))document.getElementById('pet-name').textContent=val;
  showToast('✅ Νέο όνομα: '+val);
}

function resetPetName(){
  initPetDb();
  var id=db.pet.activePetId||'ghost';
  db.pet.customNames=db.pet.customNames||{};
  delete db.pet.customNames[id];
  save();
  var defaultName=getPetDef(id).name;
  document.getElementById('pp-name').textContent=defaultName;
  var inp=document.getElementById('pp-rename-input');
  if(inp)inp.value='';
  if(document.getElementById('pet-name'))document.getElementById('pet-name').textContent=defaultName;
  showToast('↩️ Όνομα επαναφέρθηκε στο '+defaultName);
}

// ── Pet Profile Modal ────────────────────────────────────────────
function openPetProfile(){
  initPetDb();
  var def=getPetDef(db.pet.activePetId);
  var petLv=petLevelFromXP(getActivePetXP());
  var xpProg=petXpProgress(getActivePetXP());
  var ps=getActivePetState(); // per-pet instance state

  document.getElementById('pp-avatar').innerHTML=buildPetUprightSvg(def,false,ps.mood,64);
  document.getElementById('pp-name').textContent=getPetName(db.pet.activePetId);
  document.getElementById('pp-lvl').textContent='Level '+petLv+' · '+xpProg.cur+'/'+xpProg.needed+' XP to next';
  document.getElementById('pp-hours').textContent=(Math.round((ps.totalStudyMins||0)/60*10)/10)+'h';
  document.getElementById('pp-sessions').textContent=db.stats.totalSessions||0;
  document.getElementById('pp-totalxp').textContent=getActivePetXP();

  // Badges
  var badgesEl=document.getElementById('pp-badges');
  var earned=db.pet.milestones||[];
  badgesEl.innerHTML=earned.length?earned.map(id=>{var ms=PET_MILESTONES.find(m=>m.id===id);return ms?'<span title="'+ms.name+'" style="font-size:18px" title="'+ms.name+'">'+ms.icon+'</span>':''}).join(''):'<span style="font-size:11px;color:var(--text3)">Κανένα badge ακόμα</span>';

  // Mood history — per pet
  var hist=(ps.moodHistory||[]);
  document.getElementById('pp-mood-history').innerHTML=hist.length?hist.map(h=>'<div>'+h+'</div>').join(''):'<div style="color:var(--text3);font-size:12px">Κάνε το πρώτο σου session!</div>';

  // Milestones grid
  var grid=document.getElementById('pp-milestones');
  grid.innerHTML=PET_MILESTONES.map(ms=>{
    var unlocked=earned.includes(ms.id);
    return '<div class="pet-milestone-card '+(unlocked?'unlocked':'locked')+'" title="'+(unlocked?ms.desc:'???')+'"><div class="pet-milestone-icon">'+(unlocked?ms.icon:'🔒')+'</div><div class="pet-milestone-name">'+(unlocked?ms.name:'???')+'</div><div class="pet-milestone-desc">'+(unlocked?ms.desc:'')+'</div></div>';
  }).join('');

  // Pre-fill rename input with current name
  var renameInp=document.getElementById('pp-rename-input');
  if(renameInp)renameInp.value=getPetName(db.pet.activePetId);
  openModal('pet-profile-modal');
}

// ── DESK SCENE ────────────────────────────────────────────────────
// state: 'idle' | 'studying' | 'paused' | 'stopped'
// paused  → laptop open (dark screen), lamp ON, sleep-droop animation
// stopped → laptop lid closed, lamp OFF, deep-sleep animation + heavy zzz

function buildDeskScene(state, petDef){
  var isStudying = state==='studying';
  var isPaused   = state==='paused';
  var isStopped  = state==='stopped';
  var isIdle     = state==='idle';

  // ── Screen ──────────────────────────────────────────────────────
  var screenGlow = isStudying ? '#7c63f5' : '#1a1830';
  var glowOpacity = isStudying ? '.18' : '.0';
  var screenContent = isStudying
    ? `<rect x="62" y="34" width="20" height="2" rx="1" fill="#c8b8ff" opacity=".8"/>
       <rect x="62" y="38" width="14" height="2" rx="1" fill="#a89be8" opacity=".6"/>
       <rect x="62" y="42" width="17" height="2" rx="1" fill="#a89be8" opacity=".5"/>
       <rect x="62" y="46" width="11" height="2" rx="1" fill="#7c63f5" opacity=".7"/>`
    : '';

  // ── Laptop lid (stopped = half-closed, pivot at hinge y=43) ─────
  // When stopped: screen rotates down ~55° from vertical → lid appears collapsed
  // We fake it with a squished screen rect + hidden screen content
  var laptopScreenSvg;
  if(isStopped){
    // Lid half-closed: show only the lower edge of screen peeking above hinge
    laptopScreenSvg = `
    <!-- laptop lid half-shut (stopped) -->
    <rect x="58" y="40" width="48" height="5" rx="3" fill="#1e1b38" opacity=".85"/>
    <rect x="58" y="40" width="48" height="3" rx="2" fill="#252240" opacity=".7"/>`;
  } else {
    laptopScreenSvg = `
    <!-- screen body open -->
    <rect x="55" y="14" width="54" height="32" rx="4" fill="#1e1b38"/>
    <rect x="57" y="16" width="50" height="28" rx="3" fill="${screenGlow}" opacity="${isStudying ? '1' : '.18'}"/>
    <rect x="57" y="16" width="50" height="28" rx="3" fill="${screenGlow}" opacity="${glowOpacity}"/>
    ${screenContent}
    <rect x="55" y="14" width="54" height="32" rx="4" fill="none" stroke="#3a365e" stroke-width="1.5"/>
    <circle cx="82" cy="15.5" r="1.2" fill="#5a5680"/>`;
  }

  // ── Lamp ─────────────────────────────────────────────────────────
  // On: studying or paused. Off: idle or stopped.
  var lampOn = isStudying || isPaused;
  var lampBulbColor = lampOn ? '#f5c842' : '#2e2b4a';
  var lampBulbOpacity = lampOn ? '.7' : '.5';
  var lampGlow = lampOn ? `<ellipse cx="149.5" cy="36" rx="14" ry="6" fill="#f5c842" opacity=".06"/>` : '';

  // ── Pet animation ─────────────────────────────────────────────────
  var petAnim = isStudying
    ? 'pet-read-bob 4s ease-in-out infinite'
    : isStopped
      ? 'pet-deep-sleep 5s ease-in-out infinite'
      : isPaused
        ? 'pet-sleep-droop 4.5s ease-in-out infinite'
        : 'pet-idle-breathe 5s ease-in-out infinite';

  // ── ZZZ bubbles (paused = light, stopped = heavy) ─────────────────
  var zzz = '';
  if(isPaused){
    zzz = `
    <text x="36" y="22" font-size="6"  fill="#a89be8" opacity=".8" style="animation:pet-zzz-float 3s ease-in-out infinite">z</text>
    <text x="44" y="14" font-size="7"  fill="#a89be8" opacity=".5" style="animation:pet-zzz-float 3s ease-in-out .9s infinite">z</text>`;
  } else if(isStopped){
    zzz = `
    <text x="34" y="24" font-size="8"  fill="#a89be8" style="animation:pet-zzz-float 2.6s ease-in-out infinite">z</text>
    <text x="43" y="14" font-size="10" fill="#a89be8" opacity=".65" style="animation:pet-zzz-float 2.6s ease-in-out .75s infinite">z</text>
    <text x="53" y="6"  font-size="12" fill="#a89be8" opacity=".35" style="animation:pet-zzz-float 2.6s ease-in-out 1.5s infinite">z</text>`;
  }

  // ── Sparkles (studying only) ──────────────────────────────────────
  var sparks = isStudying ? `
    <text x="8"   y="18" font-size="8" fill="#f5c842" style="animation:pet-spark 4s ease-in-out infinite;opacity:0">✦</text>
    <text x="155" y="22" font-size="7" fill="#c8b8ff" style="animation:pet-spark 5s ease-in-out 1.5s infinite;opacity:0">✦</text>
  ` : '';

  // ── Pet SVG embedded into scene ────────────────────────────────────
  var def = petDef || getPetDef((typeof db !== 'undefined' && db.pet) ? db.pet.activePetId : 'ghost');
  var petInner = def.svg(46).replace(/<svg[^>]*>/,'').replace(/<\/svg>/,'');

  return `<svg width="200" height="90" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
    ${sparks}${zzz}

    <!-- ── CHAIR ─────────────────────────────── -->
    <rect x="18" y="58" width="5" height="28" rx="2.5" fill="#3a3560"/>
    <rect x="38" y="58" width="5" height="28" rx="2.5" fill="#3a3560"/>
    <rect x="13" y="54" width="35" height="8"  rx="3" fill="#5c4f8a"/>
    <rect x="18" y="34" width="5"  height="24" rx="2.5" fill="#5c4f8a"/>
    <rect x="38" y="34" width="5"  height="24" rx="2.5" fill="#5c4f8a"/>
    <rect x="13" y="32" width="35" height="7"  rx="3" fill="#6d5fa8"/>

    <!-- ── PET ON CHAIR ─────────────────────────── -->
    <g transform="translate(7, 6)" style="animation:${petAnim};transform-origin:23px 42px">
      ${petInner}
    </g>

    <!-- ── DESK ──────────────────────────────── -->
    <rect x="58"  y="58" width="6" height="28" rx="3" fill="#3a3560"/>
    <rect x="136" y="58" width="6" height="28" rx="3" fill="#3a3560"/>
    <rect x="50"  y="52" width="100" height="8" rx="4" fill="#4a4080"/>
    <rect x="52"  y="53" width="96"  height="2" rx="1" fill="#6a60a8" opacity=".4"/>

    <!-- ── LAPTOP ────────────────────────────── -->
    <rect x="58" y="44" width="48" height="9" rx="3" fill="#2e2b4a"/>
    <rect x="60" y="45" width="44" height="6" rx="2" fill="#3a365e"/>
    <rect x="62" y="46" width="40" height="1.5" rx=".75" fill="#5a5680" opacity=".5"/>
    <rect x="62" y="49" width="40" height="1.5" rx=".75" fill="#5a5680" opacity=".4"/>
    <rect x="58" y="43" width="48" height="2.5" rx="1.2" fill="#252240"/>
    ${laptopScreenSvg}

    <!-- ── LAMP ─────────────────────────────── -->
    <rect x="148" y="30" width="3"  height="24" rx="1.5" fill="#3a3560"/>
    <ellipse cx="149.5" cy="30" rx="12" ry="5" fill="#4a4080"/>
    <ellipse cx="149.5" cy="32" rx="9"  ry="3.5" fill="${lampBulbColor}" opacity="${lampBulbOpacity}"/>
    ${lampGlow}
    <rect x="145" y="52" width="9" height="3" rx="1.5" fill="#3a3560"/>
  </svg>`;
}

function renderDeskScene(){
  var el = document.getElementById('desk-scene');
  if(!el) return;
  var state;
  if(T._deskState==='stopped'){
    state = 'stopped';
  } else if(T.running){
    state = 'studying';
  } else if(T.sessionStart && T._pausedRemaining!=null){
    state = 'paused';
  } else {
    state = 'idle';
  }
  initPetDb();
  var def = getPetDef(db.pet.activePetId);
  el.innerHTML = buildDeskScene(state, def);
}

// Pet card stage (small pet icon only — no desk there)
function buildPetSceneSvg(def, isRunning, mood, size){
  if(!def||typeof def.svg!=='function') def=PET_DEFS[0];
  return buildPetUprightSvg(def, isRunning, mood, size || 72);
}

function buildPetUprightSvg(def, isRunning, mood, size){
  if(!def||typeof def.svg!=='function') def=PET_DEFS[0];
  size = size || 58;
  var s = size;
  var innerSvg = def.svg(s).replace(/<svg[^>]*>/,'').replace(/<\/svg>/,'');
  var anim = isRunning ? 'pet-read-bob 4s ease-in-out infinite' : 'pet-idle-breathe 4s ease-in-out infinite';
  var extras = isRunning
    ? `<text x="${s*.70}" y="${s*.14}" font-size="${s*.12}" fill="#f5c842" style="animation:pet-spark 4.5s ease-in-out 1s infinite;opacity:0">✦</text>`
    : `<text x="${s*.62}" y="${s*.18}" font-size="${s*.11}" fill="#a89be8" style="animation:pet-zzz-float 3s ease-in-out infinite">z</text>
       <text x="${s*.74}" y="${s*.08}" font-size="${s*.13}" fill="#a89be8" opacity=".5" style="animation:pet-zzz-float 3s ease-in-out .9s infinite">z</text>`;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" fill="none"
    xmlns="http://www.w3.org/2000/svg" style="overflow:visible;display:block">
    ${extras}
    <g style="animation:${anim};transform-origin:${s*.5}px ${s*.75}px">${innerSvg}</g>
  </svg>`;
}

function renderInlinePet(){
  initPetDb();
  var fmWrap = document.getElementById('fm-pet-wrap');
  if(!isPetsEnabled()){
    var el = document.getElementById('desk-scene');
    if(el) el.innerHTML = '';
    if(fmWrap) fmWrap.innerHTML = '';
    return;
  }
  renderDeskScene();
  var def    = getPetDef(db.pet.activePetId);
  var isRunning = T.running;
  var ps = getActivePetState();
  if(fmWrap) fmWrap.innerHTML = buildPetUprightSvg(def, isRunning, ps.mood, 80);
}

function setPetTimerState(running){renderPet();}


function togglePets(enable){
  initPetDb();
  db.pet.petsEnabled = enable;
  save();
  renderShopPets();
  renderPet();
  showToast(enable ? '🐾 Pets ενεργοποιήθηκαν' : '🚫 Pets απενεργοποιήθηκαν');
}

var _shopPetTab = 'classic';

var PET_CATEGORIES = [
  { id:'classic',  label:'⭐ Κλασικά' },
  { id:'animals',  label:'🦊 Ζώα'     },
  { id:'fantasy',  label:'🦄 Fantasy'  },
  { id:'kawaii',   label:'🌸 Kawaii'   },
  { id:'scifi',    label:'🚀 Sci-Fi'   },
  { id:'food',     label:'🍩 Τρόφιμα' },
];

function renderShopPets(){
  var container=document.getElementById('shop-grid-container');
  if(!container)return;
  initPetDb();
  var enabled = isPetsEnabled();
  var owned=db.pet.owned||['ghost'];
  var coins=(db.shop||{}).coins||0;

  function buildGrid(category){
    var pets=PET_DEFS.filter(function(p){return p.category===category;});
    var html='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:4px">';
    pets.forEach(function(def){
      var isOwned=owned.includes(def.id);
      var isActive=db.pet.activePetId===def.id;
      var canAfford=coins>=def.cost;
      var borderColor=isActive?'var(--accent3)':isOwned?'rgba(107,203,139,.35)':'var(--border)';
      var bgColor=isActive?'var(--surface3)':'var(--surface2)';
      var btn=isActive
        ?'<div style="font-size:11px;color:var(--accent3);font-weight:600;text-align:center">✓ Ενεργό</div>'
        :isOwned
          ?`<button onclick="activatePet('${def.id}')" style="width:100%;padding:5px 0;background:var(--accent3);border:none;border-radius:var(--radius-xs);color:#fff;font-size:11px;font-weight:500;cursor:pointer;font-family:inherit">Επιλογή</button>`
          :`<button onclick="buyPet('${def.id}')" ${canAfford?'':'disabled'} style="width:100%;padding:5px 0;background:var(--surface3);border:1px solid var(--border2);border-radius:var(--radius-xs);color:${canAfford?'var(--text2)':'var(--text3)'};font-size:11px;cursor:${canAfford?'pointer':'not-allowed'};font-family:inherit">${canAfford?'Αγορά':'Λίγα <span class=\'coin-sym\'></span>'}</button>`;
      html+=`<div style="background:${bgColor};border:1.5px solid ${borderColor};border-radius:var(--radius-sm);padding:10px 8px;text-align:center;transition:.2s">
        <div style="display:flex;justify-content:center;margin-bottom:5px">${def.svg(44)}</div>
        <div style="font-size:12px;font-weight:600;color:var(--text);margin-bottom:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${def.name}</div>
        <div style="font-size:9px;color:var(--text3);margin-bottom:4px;line-height:1.3;min-height:22px">${def.desc}</div>
        <div style="font-size:11px;color:var(--gold);margin-bottom:6px">${def.cost===0?'🎁 Δωρεάν':def.cost+' <span class=\'coin-sym\'></span>'}</div>
        ${btn}
      </div>`;
    });
    html+='</div>';
    return html;
  }

  var html='';

  // ── Enable / Disable toggle ──────────────────────────────────────
  html+=`<div style="display:flex;align-items:center;justify-content:space-between;background:var(--surface2);border:1px solid var(--border2);border-radius:var(--radius-sm);padding:11px 15px;margin-bottom:14px">
    <div>
      <div style="font-size:13px;font-weight:500;color:var(--text)">Εμφάνιση Pet</div>
      <div style="font-size:11px;color:var(--text3);margin-top:2px">Εμφάνιση ή απόκρυψη του pet στον timer</div>
    </div>
    <div style="display:flex;gap:0;background:var(--surface3);border-radius:var(--radius-xs);padding:3px">
      <button onclick="togglePets(true)"
        style="padding:5px 16px;border-radius:calc(var(--radius-xs) - 1px);border:none;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;transition:.15s;
               background:${enabled?'var(--accent3)':'transparent'};color:${enabled?'#fff':'var(--text3)'}">Ενεργό</button>
      <button onclick="togglePets(false)"
        style="padding:5px 16px;border-radius:calc(var(--radius-xs) - 1px);border:none;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;transition:.15s;
               background:${!enabled?'var(--coral)':'transparent'};color:${!enabled?'#fff':'var(--text3)'}">Ανενεργό</button>
    </div>
  </div>`;

  // ── Category tabs ────────────────────────────────────────────────
  html+=`<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">`;
  PET_CATEGORIES.forEach(function(cat){
    var isActive=_shopPetTab===cat.id;
    // Count owned pets in category
    var catPets=PET_DEFS.filter(function(p){return p.category===cat.id;});
    var ownedCount=catPets.filter(function(p){return owned.includes(p.id);}).length;
    var badge=ownedCount>0?`<span style="background:var(--accent3);color:#fff;border-radius:8px;font-size:9px;padding:1px 5px;margin-left:4px">${ownedCount}</span>`:'';
    html+=`<button onclick="_shopPetTab='${cat.id}';renderShopPets();"
      style="padding:5px 11px;border-radius:20px;border:1.5px solid ${isActive?'var(--accent)':'var(--border2)'};
             background:${isActive?'var(--accent)':'var(--surface2)'};color:${isActive?'#fff':'var(--text2)'};
             font-size:11px;font-weight:${isActive?'600':'400'};cursor:pointer;font-family:inherit;transition:.15s;white-space:nowrap">
      ${cat.label}${badge}
    </button>`;
  });
  html+=`</div>`;

  // ── Grid (dimmed when disabled) ──────────────────────────────────
  var gridOpacity=enabled?'1':'0.38';
  var gridPointer=enabled?'auto':'none';
  html+=`<div style="opacity:${gridOpacity};pointer-events:${gridPointer};transition:opacity .2s">`;
  html+=buildGrid(_shopPetTab);
  html+=`</div>`;

  container.innerHTML=html;
}

function buyPet(id){
  initPetDb();
  var def=getPetDef(id);
  var coins=(db.shop||{}).coins||0;
  if(coins<def.cost){showToast('Δεν έχεις αρκετά coins');return;}
  db.shop.coins=coins-def.cost;
  db.pet.owned=db.pet.owned||['ghost'];
  if(!db.pet.owned.includes(id))db.pet.owned.push(id);
  db.pet.activePetId=id;
  save();updateSidebar();renderShopPets();renderPet();
  showToast('🐾 '+getPetName(id)+' ξεκλειδώθηκε!');
}

function activatePet(id){
  initPetDb();
  db.pet.activePetId=id;
  save();renderShopPets();renderPet();
  showToast('🐾 '+getPetName(id)+' επιλέχθηκε!');
}

function openTermsModal(e){
  if(e){e.preventDefault();e.stopPropagation();}
  document.getElementById('terms-modal-overlay').classList.add('open');
}
function closeTermsModal(){
  document.getElementById('terms-modal-overlay').classList.remove('open');
}
function onTermsChange(){
  const cb=document.getElementById('terms-checkbox');
  const btn=document.getElementById('welcome-start-btn');
  btn.disabled=!cb.checked;
}

function enterApp(){
  // Save acceptance to localStorage
  localStorage.setItem('ff_terms_accepted','1');
  const ws=document.getElementById('welcome-screen');
  ws.classList.remove('visible');
  ws.classList.add('hidden');
}

// ── EXAM SCHEDULE ─────────────────────────────────────────────────
function getDaysUntil(dateStr){
  const today=new Date();today.setHours(0,0,0,0);
  const exam=new Date(dateStr);exam.setHours(0,0,0,0);
  return Math.round((exam-today)/(1000*60*60*24));
}

function openAddExam(){
  document.getElementById('exam-name-input').value='';
  document.getElementById('exam-date-input').value='';
  openModal('modal-exam');
}

function saveExam(){
  const name=document.getElementById('exam-name-input').value.trim();
  const date=document.getElementById('exam-date-input').value;
  if(!name){showToast('Γράψε όνομα μαθήματος');return;}
  if(!date){showToast('Επίλεξε ημερομηνία');return;}
  if(getDaysUntil(date)<0){showToast('Η ημερομηνία έχει περάσει');return;}
  db.exams=db.exams||[];
  db.exams.push({id:Date.now(),name,date});
  db.exams.sort((a,b)=>new Date(a.date)-new Date(b.date));
  save();closeModal('modal-exam');renderExams();renderSmartReminder();
  showToast('📅 Εξέταση αποθηκεύτηκε!');
}

function deleteExam(id){
  db.exams=(db.exams||[]).filter(e=>e.id!==id);
  save();renderExams();renderSmartReminder();
}

function renderExams(){
  const list=document.getElementById('exam-list');
  const empty=document.getElementById('exam-empty');
  if(!list)return;
  list.innerHTML='';
  const exams=(db.exams||[]).filter(e=>getDaysUntil(e.date)>=0);
  if(!exams.length){empty.style.display='block';return;}
  empty.style.display='none';
  exams.forEach(e=>{
    const days=getDaysUntil(e.date);
    const urgency=days<=3?'urgent':days<=7?'soon':'ok';
    const urgencyLabel=days===0?'Σήμερα!':days===1?'Αύριο!':days+'  μέρες';
    const dateStr=new Date(e.date).toLocaleDateString('el-GR',{day:'2-digit',month:'short',year:'numeric'});
    const div=document.createElement('div');
    div.className='exam-item '+urgency;
    div.innerHTML=`
      <div style="flex:1">
        <div class="exam-name">${escHtml(e.name)}</div>
        <div class="exam-date">${dateStr}</div>
      </div>
      <span class="exam-days ${urgency}">${urgencyLabel}</span>
      <button class="exam-del" onclick="deleteExam(${e.id})">✕</button>`;
    list.appendChild(div);
  });
}

// ── SMART REMINDER ────────────────────────────────────────────────
// Μήνυμα αλλάζει μία φορά τη μέρα, βασισμένο στην πιο κοντινή εξέταση
function getSmartReminder(){
  const exams=(db.exams||[]).filter(e=>getDaysUntil(e.date)>=0).sort((a,b)=>getDaysUntil(a.date)-getDaysUntil(b.date));
  if(!exams.length)return null;
  const top=exams[0]; // πιο κοντινή (ήδη ταξινομημένη)
  const days=getDaysUntil(top.date);
  const name=top.name;

  // Επιλογή ομάδας μηνυμάτων βάσει επείγοντος
  let pool;
  if(days<=3){
    pool=[
      {icon:'⚡',text:`Το <strong>${name}</strong> έχει προτεραιότητα τώρα`},
      {icon:'⚡',text:`Εστίασε στο <strong>${name}</strong> — πλησιάζει η εξέταση`},
      {icon:'⚡',text:`Μην το αφήνεις άλλο, δώσε βάση στο <strong>${name}</strong>`},
    ];
  } else if(days<=7){
    pool=[
      {icon:'📌',text:`Έρχεται η ώρα για το <strong>${name}</strong>`},
      {icon:'📌',text:`Καλό θα ήταν να ξεκινήσεις το <strong>${name}</strong>`},
      {icon:'💪',text:`Μικρά βήματα κάθε μέρα — ξεκίνα με το <strong>${name}</strong>`},
    ];
  } else {
    pool=[
      {icon:'💪',text:`Μπορείς να το κάνεις — αφιέρωσε λίγο χρόνο στο <strong>${name}</strong>`},
      {icon:'💪',text:`Η συνέπεια φέρνει αποτέλεσμα — δούλεψε το <strong>${name}</strong> σήμερα`},
      {icon:'💪',text:`Λίγο διάβασμα τώρα = λιγότερο άγχος μετά 📈`},
      {icon:'📌',text:`Κάνε το μέλλον σου πιο εύκολο — ξεκίνα τώρα με το <strong>${name}</strong>`},
    ];
  }

  // Seed βάσει ημέρας ώστε να αλλάζει μία φορά/μέρα
  const today=new Date();
  const daySeed=today.getFullYear()*10000+( today.getMonth()+1)*100+today.getDate();
  const idx=daySeed%pool.length;
  return pool[idx];
}

function renderSmartReminder(){
  const wrap=document.getElementById('smart-reminder-wrap');
  if(!wrap)return;
  const reminder=getSmartReminder();
  if(!reminder){wrap.innerHTML='';return;}
  wrap.innerHTML=`
    <div class="smart-reminder">
      <div class="smart-reminder-icon">${reminder.icon}</div>
      <div class="smart-reminder-text">${reminder.text}</div>
    </div>`;
}
