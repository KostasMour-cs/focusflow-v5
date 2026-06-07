(function(){
  function isMobile(){return window.innerWidth<=768}

  /* ── Bottom nav: navigate to page ── */
  window.mobileNav=function(page, el){
    // Use the existing showPage function
    showPage(page);
    // Update active state on bottom nav
    document.querySelectorAll('.bnav-item').forEach(function(i){i.classList.remove('active')});
    if(el) el.classList.add('active');
    else{
      // Mark "more" as active for secondary pages
      const moreBtn=document.getElementById('bnav-more');
      if(moreBtn) moreBtn.classList.add('active');
    }
  };

  /* ── More panel toggle ── */
  window.toggleMorePanel=function(){
    const panel=document.getElementById('bnav-more-panel');
    const overlay=document.getElementById('sidebar-overlay');
    const isOpen=panel.classList.contains('show');
    if(isOpen){closeMorePanel();}
    else{
      panel.classList.add('show');
      overlay.classList.add('show');
      document.body.style.overflow='hidden';
    }
  };

  window.closeMorePanel=function(){
    const panel=document.getElementById('bnav-more-panel');
    const overlay=document.getElementById('sidebar-overlay');
    panel.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow='';
  };

  /* ── Sync mobile header stats (streak & coins) ── */
  window.syncMobileHeader=function(){
    if(!isMobile()) return;
    try{
      var raw=null;
      var keys=['ff3','ff_db2','ff_db'];
      for(var i=0;i<keys.length;i++){raw=localStorage.getItem(keys[i]);if(raw)break;}
      var d=raw?JSON.parse(raw):{};
      var mhS=document.getElementById('mh-streak');
      var mhC=document.getElementById('mh-coins');
      if(mhS) mhS.textContent=(d.stats&&d.stats.streak)||0;
      if(mhC) mhC.textContent=(d.shop&&d.shop.coins)||0;
    }catch(e){}
  };

  /* Poll header stats every 3s when on mobile */
  setInterval(function(){syncMobileHeader()},3000);
  document.addEventListener('DOMContentLoaded',function(){
    setTimeout(syncMobileHeader,800);
  });

  /* ── Wrap history table for horizontal scroll ── */
  document.addEventListener('DOMContentLoaded',function(){
    const histTable=document.querySelector('.history-table');
    if(histTable && !histTable.closest('.history-table-wrap')){
      const wrap=document.createElement('div');
      wrap.className='history-table-wrap';
      histTable.parentNode.insertBefore(wrap,histTable);
      wrap.appendChild(histTable);
    }
  });

  /* ── Intercept showPage to sync bottom nav active state ── */
  function patchShowPage(){
    const origShowPage=window.showPage;
    if(!origShowPage||origShowPage._patched) return;
    window.showPage=function(page){
      origShowPage(page);
      if(!isMobile()) return;
      document.querySelectorAll('.bnav-item').forEach(function(i){i.classList.remove('active')});
      const map={timer:'bnav-timer',dashboard:'bnav-dashboard',subjects:'bnav-subjects',history:'bnav-history'};
      const id=map[page];
      if(id) document.getElementById(id)&&document.getElementById(id).classList.add('active');
      else document.getElementById('bnav-more')&&document.getElementById('bnav-more').classList.add('active');
      syncMobileHeader();
    };
    window.showPage._patched=true;
  }
  document.addEventListener('DOMContentLoaded',function(){
    patchShowPage();
    if(!window.showPage||!window.showPage._patched) setTimeout(patchShowPage,300);
  });

  window.addEventListener('resize',function(){
    if(!isMobile()) closeMorePanel();
  });
})();
