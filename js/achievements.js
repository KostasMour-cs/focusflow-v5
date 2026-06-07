function checkAchievements(){
  ACHIEVEMENTS.forEach(a=>{
    if(!db.achievements.includes(a.id)&&a.check(db.stats)){
      db.achievements.push(a.id);
      db.stats.xp=(db.stats.xp||0)+a.xp;db.stats.level=levelFromXP(db.stats.xp);
      queueAchievementToast(a);
    }
  });
}
function renderAchievements(){
  var unEl=document.getElementById('ach-username-display');
  if(unEl)unEl.textContent=getUserDisplayName();
  document.getElementById('ach-xp').textContent=(db.stats.xp||0)+' XP';
  document.getElementById('ach-unlocked').textContent=db.achievements.length+'/'+ACHIEVEMENTS.length;
  document.getElementById('ach-streak2').textContent=db.stats.maxStreak||0;
  document.getElementById('ach-level').textContent=levelFromXP(db.stats.xp||0);
  const grid=document.getElementById('ach-grid');grid.innerHTML='';
  ACHIEVEMENTS.forEach(a=>{
    const unlocked=db.achievements.includes(a.id);
    const card=document.createElement('div');card.className='ach-card '+(unlocked?'unlocked':'locked');
    card.innerHTML=`<div class="ach-icon">${a.icon}</div><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div><div class="ach-xp-badge ${unlocked?'unlocked':'locked'}">${unlocked?(a.xp?'+'+a.xp+' XP':'✓'):'🔒'}</div>`;
    grid.appendChild(card);
  });
}

// ── Profile: username + pinned achievement ────────────────────────
function getProfile(){
  if(!db.profile||typeof db.profile!=='object') db.profile={username:'Φοιτητής',pinnedAchievement:null};
  if(!db.profile.username) db.profile.username='Φοιτητής';
  return db.profile;
}

function getUserDisplayName(){
  var p=getProfile();
  var name=p.username||'Φοιτητής';
  if(p.pinnedAchievement){
    var ach=ACHIEVEMENTS.find(function(a){return a.id===p.pinnedAchievement;});
    if(ach&&(db.achievements||[]).includes(ach.id)){
      return ach.icon+' '+name;
    }
  }
  return name;
}

function saveProfileUsername(){
  var inp=document.getElementById('profile-username-input');
  if(!inp)return;
  var val=inp.value.trim();
  if(!val){showToast('Το username δεν μπορεί να είναι κενό.');return;}
  getProfile();
  db.profile.username=val;
  save();
  renderProfileSection();
  updateSidebar();
  showToast('✅ Username αποθηκεύτηκε!');
}

function setPinnedAchievement(id){
  getProfile();
  db.profile.pinnedAchievement=(db.profile.pinnedAchievement===id)?null:id;
  save();
  renderProfileSection();
  updateSidebar();
  var label=id?'🏅 Badge επιλέχθηκε!':'Badge αφαιρέθηκε.';
  showToast(label);
}

function renderProfileSection(){
  var p=getProfile();
  // Fill username input
  var inp=document.getElementById('profile-username-input');
  if(inp) inp.value=p.username||'';

  // Badge picker — only unlocked achievements
  var picker=document.getElementById('profile-badge-picker');
  if(!picker)return;
  var unlocked=db.achievements||[];
  var available=ACHIEVEMENTS.filter(function(a){return unlocked.includes(a.id)&&a.icon;});

  if(available.length===0){
    picker.innerHTML='<div style="font-size:12px;color:var(--text3);padding:10px 0">Ξεκλείδωσε achievements για να επιλέξεις badge.</div>';
  } else {
    var html='';
    // "Κανένα" option
    var noneActive=!p.pinnedAchievement;
    html+='<div onclick="setPinnedAchievement(null)" style="cursor:pointer;padding:7px 12px;border-radius:20px;border:1.5px solid '+(noneActive?'var(--accent)':'var(--border2)')+';background:'+(noneActive?'var(--accent)':'var(--surface3)')+';color:'+(noneActive?'#fff':'var(--text3)')+';font-size:12px;transition:.15s">Κανένα</div>';
    available.forEach(function(a){
      var isActive=p.pinnedAchievement===a.id;
      var border=isActive?'var(--accent)':'var(--border2)';
      var bg=isActive?'var(--accent)':'var(--surface3)';
      var color=isActive?'#fff':'var(--text2)';
      html+='<div onclick="setPinnedAchievement(\''+a.id+'\')" title="'+a.name+'" style="cursor:pointer;display:flex;align-items:center;gap:6px;padding:7px 12px;border-radius:20px;border:1.5px solid '+border+';background:'+bg+';color:'+color+';font-size:12px;transition:.15s;white-space:nowrap"><span style="font-size:15px">'+a.icon+'</span><span>'+a.name+'</span></div>';
    });
    picker.innerHTML=html;
  }

  // Preview
  var preview=document.getElementById('profile-preview');
  if(preview) preview.textContent=getUserDisplayName();
}

function updateSidebar(){
  const st=db.stats;
  const xp=st.xp||0;
  const {lv,current,needed,pct}=xpProgressInLevel(xp);
  const streak=st.streak||0;
  document.getElementById('sb-streak').textContent=streak+(streak===1?' day':' days');
  document.getElementById('sb-level').textContent='Level '+lv;
  document.getElementById('sb-xp').textContent=current+'/'+needed+' XP';
  document.getElementById('sb-xpfill').style.width=pct+'%';
  const coins=(db.shop||{}).coins||0;
  document.getElementById('sb-coins').textContent=coins;
  var unEl=document.getElementById('sb-username-text');
  if(unEl)unEl.textContent=getUserDisplayName();
  // Sync mobile header badges
  var mhS=document.getElementById('mh-streak');
  var mhC=document.getElementById('mh-coins');
  if(mhS) mhS.textContent=streak;
  if(mhC) mhC.textContent=coins;
}

function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
let _tt=null;
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>t.classList.remove('show'),3000);}
function notify(msg){if(Notification&&Notification.permission==='granted')new Notification('FocusFlow',{body:msg});}

const _ac={ctx:null,get(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return this.ctx;}};
