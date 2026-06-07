const THEMES=[
  {id:'midnight',name:'Midnight',desc:'Το default σκούρο θέμα. Βαθύ μπλε και μοβ.',free:true,price:0,
   vars:{'--bg':'#0f0f13','--surface':'#17171e','--surface2':'#1e1e28','--surface3':'#252532','--accent':'#c8b8ff','--accent2':'#9f8aff','--accent3':'#7c63f5','--text':'#f0efe8'},
   preview:['#0f0f13','#7c63f5','#c8b8ff']},
  {id:'forest',name:'Forest',desc:'Βαθύ πράσινο/teal. Ηρεμιστικό, εμπνευσμένο από τη φύση.',price:80,
   vars:{'--bg':'#0a100c','--surface':'#111a14','--surface2':'#172019','--surface3':'#1e2a20','--accent':'#6bcb8b','--accent2':'#4dbb72','--accent3':'#2d9e52','--text':'#edf5ef'},
   preview:['#0a100c','#2d9e52','#6bcb8b']},
  {id:'sunset',name:'Sunset',desc:'Πορτοκαλί/amber παλέτα. Ζεστό και ενεργητικό.',price:80,
   vars:{'--bg':'#110a08','--surface':'#1c1008','--surface2':'#251508','--surface3':'#2e1c0a','--accent':'#f5a642','--accent2':'#e8882a','--accent3':'#d06a18','--text':'#fdf0e8'},
   preview:['#110a08','#d06a18','#f5a642']},
  {id:'ocean',name:'Ocean',desc:'Βαθύ μπλε/cyan. Συγκεντρωτικό και αναπνευστικό.',price:80,
   vars:{'--bg':'#050e18','--surface':'#091524','--surface2':'#0e1e30','--surface3':'#13263c','--accent':'#5bc8e8','--accent2':'#2eb5d8','--accent3':'#1898bb','--text':'#e8f5fd'},
   preview:['#050e18','#1898bb','#5bc8e8']},
  {id:'rose',name:'Rose',desc:'Ροζ/magenta παλέτα. Απαλό και δημιουργικό.',price:80,
   vars:{'--bg':'#110810','--surface':'#1a0d18','--surface2':'#221221','--surface3':'#2a172a','--accent':'#f06aaf','--accent2':'#e04a98','--accent3':'#c42e7c','--text':'#fdeef8'},
   preview:['#110810','#c42e7c','#f06aaf']},
  {id:'slate',name:'Slate',desc:'Σκούρο γκρι/ατσάλινο. Επαγγελματικό και minimal.',price:100,
   vars:{'--bg':'#0a0c10','--surface':'#111318','--surface2':'#181b22','--surface3':'#1f232c','--accent':'#94a3c8','--accent2':'#748bb5','--accent3':'#4f6a9e','--text':'#e8eaf2'},
   preview:['#0a0c10','#4f6a9e','#94a3c8']},
  {id:'ember',name:'Ember',desc:'Κόκκινο/κεραμιδί. Έντονο και παθιασμένο.',price:120,
   vars:{'--bg':'#110808','--surface':'#1c0e0e','--surface2':'#251414','--surface3':'#2e1a1a','--accent':'#f07070','--accent2':'#e04848','--accent3':'#c02828','--text':'#fdf0f0'},
   preview:['#110808','#c02828','#f07070']},
  {id:'lavender',name:'Lavender',desc:'Παστέλ λεβάντα. Ήρεμο και ονειρικό.',price:120,
   vars:{'--bg':'#0e0c14','--surface':'#161320','--surface2':'#1e1a2c','--surface3':'#252238','--accent':'#b8a8f0','--accent2':'#9a88e0','--accent3':'#7a65cc','--text':'#f2f0ff'},
   preview:['#0e0c14','#7a65cc','#b8a8f0']},
  {id:'arctic',name:'Arctic',desc:'Παγωμένο λευκό/γκρι. Καθαρό και εστιαστικό.',price:150,
   vars:{'--bg':'#080e12','--surface':'#0f161c','--surface2':'#151e26','--surface3':'#1c2730','--accent':'#a0d8ef','--accent2':'#70bde0','--accent3':'#3e9ec8','--text':'#e8f4fb'},
   preview:['#080e12','#3e9ec8','#a0d8ef']},
  {id:'cherry',name:'Cherry',desc:'Σκούρο κόκκινο/ροζ. Πάθος και εντατικότητα.',price:150,
   vars:{'--bg':'#130008','--surface':'#200010','--surface2':'#2c0016','--surface3':'#38001e','--accent':'#ff6b9d','--accent2':'#e84393','--accent3':'#c0185a','--text':'#ffeef5'},
   preview:['#130008','#c0185a','#ff6b9d']},
  {id:'moss',name:'Moss',desc:'Γήινο πράσινο/καφέ. Φυσικό και χαλαρωτικό.',price:150,
   vars:{'--bg':'#0c0e08','--surface':'#141810','--surface2':'#1c2216','--surface3':'#242c1c','--accent':'#a8c878','--accent2':'#88b050','--accent3':'#608830','--text':'#edf5e0'},
   preview:['#0c0e08','#608830','#a8c878']},
  {id:'copper',name:'Copper',desc:'Χάλκινο/rust παλέτα. Vintage και ζεστό.',price:180,
   vars:{'--bg':'#100c08','--surface':'#1c1410','--surface2':'#261c16','--surface3':'#30241c','--accent':'#e8906a','--accent2':'#d06840','--accent3':'#a84820','--text':'#fdf0e8'},
   preview:['#100c08','#a84820','#e8906a']},
  {id:'aurora',name:'Aurora',desc:'Βόρειο σέλας — πράσινο, μπλε, μοβ.',price:200,
   vars:{'--bg':'#040c12','--surface':'#081420','--surface2':'#0c1e2e','--surface3':'#10283c','--accent':'#88ffcc','--accent2':'#40d4a8','--accent3':'#18a880','--text':'#e8fff8'},
   preview:['#040c12','#18a880','#88ffcc']},
  {id:'dusk',name:'Dusk',desc:'Λυκόφως — μοβ, πορτοκαλί, ροζ.',price:200,
   vars:{'--bg':'#0e0818','--surface':'#160e24','--surface2':'#1e1430','--surface3':'#261a3c','--accent':'#ffb347','--accent2':'#e8882a','--accent3':'#c85a10','--text':'#fff5e8'},
   preview:['#0e0818','#c85a10','#ffb347']},
  {id:'midnight_blue',name:'Deep Blue',desc:'Βαθύ navy μπλε. Σοβαρό και εστιασμένο.',price:200,
   vars:{'--bg':'#020814','--surface':'#040e20','--surface2':'#07162e','--surface3':'#0a1e3c','--accent':'#6699ff','--accent2':'#4477ee','--accent3':'#2255cc','--text':'#e8f0ff'},
   preview:['#020814','#2255cc','#6699ff']},
  {id:'sakura',name:'Sakura',desc:'Ιαπωνικό ροζ/λευκό. Λεπτό και εκλεπτυσμένο.',price:220,
   vars:{'--bg':'#120810','--surface':'#1e1018','--surface2':'#2a1822','--surface3':'#36202c','--accent':'#ffb7c5','--accent2':'#ff85a1','--accent3':'#e0507a','--text':'#fff0f5'},
   preview:['#120810','#e0507a','#ffb7c5']},
  {id:'toxic',name:'Toxic',desc:'Νέον πράσινο/κίτρινο. Acid και cyberpunk.',price:250,
   vars:{'--bg':'#010a01','--surface':'#031203','--surface2':'#051a05','--surface3':'#082208','--accent':'#aaff00','--accent2':'#88dd00','--accent3':'#55aa00','--text':'#f5ffe0'},
   preview:['#010a01','#55aa00','#aaff00']},
  {id:'wine',name:'Wine',desc:'Σκούρο μπορντό/μοβ. Κομψό και πολυτελές.',price:250,
   vars:{'--bg':'#0e0408','--surface':'#1a0810','--surface2':'#260c18','--surface3':'#321020','--accent':'#c878a8','--accent2':'#a85888','--accent3':'#883868','--text':'#fce8f5'},
   preview:['#0e0408','#883868','#c878a8']},
  {id:'gold',name:'Gold',desc:'Πολυτελές χρυσό θέμα. Για τους αφοσιωμένους.',price:300,unlockHint:'7-day streak bonus',
   vars:{'--bg':'#0f0c00','--surface':'#1a1500','--surface2':'#221c00','--surface3':'#2a2300','--accent':'#f5c842','--accent2':'#e0a820','--accent3':'#b88500','--text':'#fdf8e8'},
   preview:['#0f0c00','#b88500','#f5c842']},
  {id:'neon',name:'Neon',desc:'Cyberpunk neon. Μόνο για τους πιο αφοσιωμένους.',price:350,unlockHint:'50 sessions bonus',
   vars:{'--bg':'#04000f','--surface':'#0a0020','--surface2':'#0f0030','--surface3':'#150040','--accent':'#e040fb','--accent2':'#aa00ff','--accent3':'#7c00cc','--text':'#f8e8ff'},
   preview:['#04000f','#7c00cc','#e040fb']},
  {id:'ice',name:'Ice',desc:'Παγωμένο λευκό/μπλε. Ultra clean και minimalist.',price:400,
   vars:{'--bg':'#f0f4f8','--surface':'#ffffff','--surface2':'#e8eef4','--surface3':'#d8e4ee','--accent':'#2b6cb0','--accent2':'#3182ce','--accent3':'#4299e1','--text':'#1a202c'},
   preview:['#f0f4f8','#2b6cb0','#4299e1']},
  {id:'obsidian',name:'Obsidian',desc:'Το πιο σκούρο θέμα. Για όσους αγαπούν το απόλυτο σκοτάδι.',price:500,
   vars:{'--bg':'#000000','--surface':'#080808','--surface2':'#101010','--surface3':'#181818','--accent':'#ffffff','--accent2':'#cccccc','--accent3':'#999999','--text':'#f5f5f5'},
   preview:['#000000','#555555','#ffffff']},
];

const SOUND_PACKS=[
  {id:'default',name:'Default',desc:'Οι αρχικοί ήχοι. Καθαρά sine/square waves.',free:true,price:0,
   sounds:{start:()=>_playSynth([[440,.12,.18,'sine',0],[550,.12,.18,'sine',.13],[660,.25,.18,'sine',.26]]),
           end:()=>_playSynth([[660,.15,.2,'sine',0],[550,.15,.2,'sine',.16],[440,.15,.2,'sine',.32],[330,.4,.2,'sine',.48]]),
           break_start:()=>_playSynth([[392,.2,.15,'triangle',0],[523,.3,.15,'triangle',.22]]),
           break_end:()=>_playSynth([[523,.15,.15,'triangle',0],[659,.15,.15,'triangle',.17],[784,.3,.15,'triangle',.34]]),
           pause:()=>_playSynth([[440,.08,.14,'square',0],[330,.18,.12,'square',.1]]),
           resume:()=>_playSynth([[330,.08,.14,'square',0],[440,.2,.14,'square',.1]]),
           stop:()=>_playSynth([[300,.1,.16,'sawtooth',0],[220,.1,.14,'sawtooth',.12],[150,.35,.12,'sawtooth',.25]])}},
  {id:'bells',name:'Bells',desc:'Κρυστάλλινες κωδωνοκρουσίες. Γλυκές και ηρεμιστικές.',price:100,
   sounds:{start:()=>_playSynth([[1047,.5,.12,'sine',0],[1319,.5,.1,'sine',.15],[1568,.7,.1,'sine',.3]]),
           end:()=>_playSynth([[1568,.4,.12,'sine',0],[1319,.4,.1,'sine',.2],[1047,.4,.1,'sine',.4],[784,.8,.1,'sine',.6]]),
           break_start:()=>_playSynth([[1047,.6,.1,'sine',0],[1319,.7,.09,'sine',.25]]),
           break_end:()=>_playSynth([[784,.4,.1,'sine',0],[1047,.4,.1,'sine',.2],[1319,.6,.1,'sine',.4]]),
           pause:()=>_playSynth([[1047,.15,.1,'sine',0],[880,.3,.08,'sine',.18]]),
           resume:()=>_playSynth([[880,.15,.1,'sine',0],[1047,.3,.1,'sine',.18]]),
           stop:()=>_playSynth([[880,.2,.1,'sine',0],[784,.2,.09,'sine',.22],[659,.5,.08,'sine',.44]])}},
  {id:'retro',name:'Retro 8-bit',desc:'Chiptune ήχοι από παλιά videogames. Nostalgic!',price:120,
   sounds:{start:()=>_playSynth([[220,.06,.2,'square',0],[440,.06,.2,'square',.07],[880,.12,.2,'square',.14]]),
           end:()=>_playSynth([[880,.06,.2,'square',0],[660,.06,.18,'square',.07],[440,.06,.16,'square',.14],[220,.2,.15,'square',.21]]),
           break_start:()=>_playSynth([[330,.08,.18,'square',0],[440,.15,.18,'square',.1]]),
           break_end:()=>_playSynth([[220,.06,.18,'square',0],[330,.06,.18,'square',.08],[440,.15,.18,'square',.16]]),
           pause:()=>_playSynth([[440,.05,.2,'square',0],[330,.08,.18,'square',.07]]),
           resume:()=>_playSynth([[330,.05,.18,'square',0],[440,.08,.2,'square',.07]]),
           stop:()=>_playSynth([[440,.05,.2,'square',0],[330,.05,.18,'square',.07],[220,.15,.16,'square',.14]])}},
  {id:'nature',name:'Nature',desc:'Μαλακοί ήχοι εμπνευσμένοι από τη φύση.',price:150,
   sounds:{start:()=>_playSynth([[528,.3,.1,'sine',0],[594,.3,.09,'sine',.2],[660,.5,.09,'sine',.4]]),
           end:()=>_playSynth([[660,.3,.1,'sine',0],[594,.3,.09,'sine',.25],[528,.3,.09,'sine',.5],[440,.6,.08,'sine',.75]]),
           break_start:()=>_playSynth([[396,.5,.09,'sine',0],[528,.6,.08,'sine',.3]]),
           break_end:()=>_playSynth([[528,.4,.09,'sine',0],[594,.4,.09,'sine',.3],[660,.5,.08,'sine',.6]]),
           pause:()=>_playSynth([[528,.2,.09,'sine',0],[462,.35,.07,'sine',.25]]),
           resume:()=>_playSynth([[462,.2,.08,'sine',0],[528,.35,.09,'sine',.25]]),
           stop:()=>_playSynth([[528,.25,.09,'sine',0],[462,.25,.08,'sine',.28],[396,.5,.07,'sine',.55]])}},
  {id:'deep',name:'Deep',desc:'Χαμηλές meditating νότες. Για βαθιά συγκέντρωση.',price:150,
   sounds:{start:()=>_playSynth([[110,.4,.15,'sine',0],[138,.4,.13,'sine',.3],[165,.6,.13,'sine',.6]]),
           end:()=>_playSynth([[165,.4,.15,'sine',0],[138,.4,.13,'sine',.35],[110,.4,.12,'sine',.7],[82,.8,.12,'sine',.105]]),
           break_start:()=>_playSynth([[110,.6,.12,'sine',0],[138,.7,.11,'sine',.4]]),
           break_end:()=>_playSynth([[82,.4,.12,'sine',0],[110,.4,.12,'sine',.4],[138,.6,.11,'sine',.8]]),
           pause:()=>_playSynth([[138,.25,.13,'sine',0],[110,.4,.11,'sine',.3]]),
           resume:()=>_playSynth([[110,.25,.12,'sine',0],[138,.4,.13,'sine',.3]]),
           stop:()=>_playSynth([[138,.3,.13,'sine',0],[110,.3,.12,'sine',.35],[82,.6,.11,'sine',.7]])}},
  {id:'piano',name:'Piano',desc:'Απαλές πιανιστικές νότες. Κομψό και εκλεπτυσμένο.',price:200,
   sounds:{start:()=>_playSynth([[523,.3,.13,'sine',0],[659,.3,.11,'sine',.18],[784,.5,.11,'sine',.36]]),
           end:()=>_playSynth([[784,.3,.13,'sine',0],[659,.3,.11,'sine',.2],[523,.3,.11,'sine',.4],[392,.6,.1,'sine',.6]]),
           break_start:()=>_playSynth([[440,.4,.11,'sine',0],[554,.5,.1,'sine',.22]]),
           break_end:()=>_playSynth([[392,.3,.11,'sine',0],[523,.3,.11,'sine',.2],[659,.5,.1,'sine',.4]]),
           pause:()=>_playSynth([[523,.18,.12,'sine',0],[440,.3,.1,'sine',.2]]),
           resume:()=>_playSynth([[440,.18,.11,'sine',0],[523,.3,.12,'sine',.2]]),
           stop:()=>_playSynth([[659,.25,.12,'sine',0],[523,.25,.11,'sine',.28],[392,.5,.1,'sine',.56]])}},
  {id:'soft',name:'Soft',desc:'Πολύ απαλοί, σχεδόν 囁αδύνατοι ήχοι. Για night sessions.',price:150,
   sounds:{start:()=>_playSynth([[330,.4,.06,'sine',0],[440,.5,.05,'sine',.3]]),
           end:()=>_playSynth([[440,.4,.06,'sine',0],[330,.4,.05,'sine',.3],[220,.7,.04,'sine',.6]]),
           break_start:()=>_playSynth([[293,.5,.05,'sine',0],[370,.6,.04,'sine',.3]]),
           break_end:()=>_playSynth([[220,.3,.05,'sine',0],[330,.4,.05,'sine',.3],[440,.5,.05,'sine',.6]]),
           pause:()=>_playSynth([[330,.2,.05,'sine',0],[220,.3,.04,'sine',.2]]),
           resume:()=>_playSynth([[220,.2,.04,'sine',0],[330,.3,.05,'sine',.2]]),
           stop:()=>_playSynth([[330,.3,.05,'sine',0],[220,.3,.04,'sine',.3],[165,.5,.03,'sine',.55]])}},
  {id:'harp',name:'Harp',desc:'Αρπιστικές γλυκές νότες. Μουσικό και εμπνευστικό.',price:200,
   sounds:{start:()=>_playSynth([[784,.3,.11,'sine',0],[1047,.3,.09,'sine',.12],[1319,.4,.09,'sine',.24],[1568,.6,.08,'sine',.38]]),
           end:()=>_playSynth([[1568,.3,.1,'sine',0],[1319,.3,.09,'sine',.18],[1047,.3,.09,'sine',.36],[784,.3,.08,'sine',.54],[523,.7,.08,'sine',.72]]),
           break_start:()=>_playSynth([[659,.4,.09,'sine',0],[880,.5,.08,'sine',.2],[1047,.6,.07,'sine',.4]]),
           break_end:()=>_playSynth([[523,.3,.09,'sine',0],[659,.3,.09,'sine',.18],[784,.3,.08,'sine',.36],[1047,.5,.08,'sine',.54]]),
           pause:()=>_playSynth([[880,.2,.09,'sine',0],[784,.3,.07,'sine',.22]]),
           resume:()=>_playSynth([[784,.2,.08,'sine',0],[880,.3,.09,'sine',.22]]),
           stop:()=>_playSynth([[880,.25,.09,'sine',0],[784,.25,.08,'sine',.28],[659,.25,.07,'sine',.56],[523,.5,.07,'sine',.84]])}},
  {id:'lofi',name:'Lo-Fi',desc:'Ζεστοί, dusty ήχοι. Chill study vibes.',price:220,
   sounds:{start:()=>_playSynth([[277,.2,.12,'triangle',0],[370,.25,.1,'triangle',.15],[493,.4,.1,'triangle',.3]]),
           end:()=>_playSynth([[493,.2,.11,'triangle',0],[370,.2,.1,'triangle',.2],[277,.2,.09,'triangle',.4],[185,.5,.09,'triangle',.6]]),
           break_start:()=>_playSynth([[220,.3,.1,'triangle',0],[293,.4,.09,'triangle',.22]]),
           break_end:()=>_playSynth([[185,.25,.09,'triangle',0],[277,.25,.1,'triangle',.2],[370,.4,.09,'triangle',.4]]),
           pause:()=>_playSynth([[370,.15,.1,'triangle',0],[277,.25,.09,'triangle',.18]]),
           resume:()=>_playSynth([[277,.15,.09,'triangle',0],[370,.25,.1,'triangle',.18]]),
           stop:()=>_playSynth([[370,.2,.1,'triangle',0],[277,.2,.09,'triangle',.22],[185,.45,.08,'triangle',.44]])}},
  {id:'marimba',name:'Marimba',desc:'Ξυλόφωνο. Χαρούμενο και ζωηρό.',price:220,
   sounds:{start:()=>_playSynth([[523,.15,.15,'triangle',0],[659,.15,.13,'triangle',.1],[784,.15,.13,'triangle',.2],[1047,.3,.12,'triangle',.32]]),
           end:()=>_playSynth([[1047,.12,.13,'triangle',0],[784,.12,.12,'triangle',.12],[659,.12,.12,'triangle',.24],[523,.12,.11,'triangle',.36],[392,.4,.11,'triangle',.5]]),
           break_start:()=>_playSynth([[440,.15,.12,'triangle',0],[554,.15,.11,'triangle',.14],[659,.3,.11,'triangle',.28]]),
           break_end:()=>_playSynth([[392,.12,.11,'triangle',0],[523,.12,.12,'triangle',.14],[659,.12,.11,'triangle',.28],[784,.3,.11,'triangle',.42]]),
           pause:()=>_playSynth([[659,.1,.12,'triangle',0],[523,.2,.1,'triangle',.14]]),
           resume:()=>_playSynth([[523,.1,.1,'triangle',0],[659,.2,.12,'triangle',.14]]),
           stop:()=>_playSynth([[784,.12,.12,'triangle',0],[659,.12,.11,'triangle',.14],[523,.12,.1,'triangle',.28],[392,.4,.1,'triangle',.42]])}},
  {id:'space',name:'Space',desc:'Ηχητικά εφέ από το διάστημα. Sci-fi και futuristic.',price:250,
   sounds:{start:()=>_playSynth([[200,.05,.1,'sawtooth',0],[400,.1,.12,'sine',.08],[800,.2,.12,'sine',.2],[1200,.4,.1,'sine',.4]]),
           end:()=>_playSynth([[1200,.15,.12,'sine',0],[800,.2,.1,'sine',.18],[400,.2,.1,'sine',.4],[200,.5,.09,'sawtooth',.6]]),
           break_start:()=>_playSynth([[300,.1,.1,'sawtooth',0],[600,.3,.1,'sine',.15],[900,.4,.09,'sine',.35]]),
           break_end:()=>_playSynth([[300,.1,.1,'sawtooth',0],[600,.2,.1,'sine',.15],[1200,.4,.1,'sine',.4]]),
           pause:()=>_playSynth([[800,.08,.12,'sawtooth',0],[400,.2,.1,'sine',.1]]),
           resume:()=>_playSynth([[400,.08,.1,'sine',0],[800,.2,.12,'sawtooth',.1]]),
           stop:()=>_playSynth([[600,.1,.12,'sawtooth',0],[400,.1,.1,'sawtooth',.14],[200,.4,.09,'sawtooth',.28]])}},
  {id:'glass',name:'Glass',desc:'Κρυστάλλινοι ήχοι σαν ποτήρια. Καθαρό και αέρινο.',price:280,
   sounds:{start:()=>_playSynth([[1760,.4,.08,'sine',0],[2093,.4,.07,'sine',.18],[2637,.6,.07,'sine',.36]]),
           end:()=>_playSynth([[2637,.35,.08,'sine',0],[2093,.35,.07,'sine',.22],[1760,.35,.07,'sine',.44],[1397,.7,.06,'sine',.66]]),
           break_start:()=>_playSynth([[1568,.5,.07,'sine',0],[1760,.6,.06,'sine',.28]]),
           break_end:()=>_playSynth([[1397,.3,.07,'sine',0],[1568,.3,.07,'sine',.22],[1760,.5,.06,'sine',.44]]),
           pause:()=>_playSynth([[1760,.18,.07,'sine',0],[1568,.3,.06,'sine',.2]]),
           resume:()=>_playSynth([[1568,.18,.06,'sine',0],[1760,.3,.07,'sine',.2]]),
           stop:()=>_playSynth([[1760,.22,.07,'sine',0],[1568,.22,.06,'sine',.25],[1319,.22,.06,'sine',.5],[1047,.6,.05,'sine',.75]])}},
  {id:'zen',name:'Zen',desc:'Θιβετιανά singing bowls. Απόλυτη ηρεμία.',price:350,
   sounds:{start:()=>_playSynth([[432,.8,.1,'sine',0],[540,.8,.08,'sine',.1],[648,1.2,.08,'sine',.25]]),
           end:()=>_playSynth([[648,.6,.1,'sine',0],[540,.6,.09,'sine',.3],[432,.6,.09,'sine',.6],[324,1.2,.08,'sine',.9]]),
           break_start:()=>_playSynth([[360,.9,.09,'sine',0],[432,1.2,.08,'sine',.3]]),
           break_end:()=>_playSynth([[324,.7,.09,'sine',0],[432,.7,.09,'sine',.35],[540,1.0,.08,'sine',.7]]),
           pause:()=>_playSynth([[432,.35,.09,'sine',0],[360,.6,.07,'sine',.38]]),
           resume:()=>_playSynth([[360,.35,.08,'sine',0],[432,.6,.09,'sine',.38]]),
           stop:()=>_playSynth([[432,.4,.09,'sine',0],[360,.4,.08,'sine',.45],[288,.8,.07,'sine',.9]])}},
  {id:'orchestral',name:'Orchestral',desc:'Επικό ορχηστρικό θέμα. Σαν να σπουδάζεις σε ταινία.',price:400,
   sounds:{start:()=>_playSynth([[130,.1,.1,'sawtooth',0],[196,.1,.12,'sawtooth',.05],[261,.15,.14,'sine',.1],[392,.3,.16,'sine',.25],[523,.5,.15,'sine',.5]]),
           end:()=>_playSynth([[523,.2,.15,'sine',0],[392,.2,.14,'sine',.22],[329,.2,.13,'sine',.44],[261,.2,.12,'sine',.66],[196,.6,.12,'sawtooth',.88]]),
           break_start:()=>_playSynth([[261,.2,.12,'sine',0],[329,.2,.11,'sine',.2],[392,.5,.13,'sine',.4]]),
           break_end:()=>_playSynth([[196,.15,.11,'sawtooth',0],[261,.15,.12,'sine',.15],[392,.15,.13,'sine',.3],[523,.5,.14,'sine',.48]]),
           pause:()=>_playSynth([[392,.15,.13,'sine',0],[329,.15,.12,'sine',.16],[261,.3,.11,'sine',.32]]),
           resume:()=>_playSynth([[261,.15,.11,'sine',0],[329,.15,.12,'sine',.16],[392,.3,.13,'sine',.32]]),
           stop:()=>_playSynth([[523,.18,.14,'sine',0],[392,.18,.13,'sine',.2],[261,.18,.12,'sine',.4],[196,.18,.11,'sawtooth',.6],[130,.5,.1,'sawtooth',.8]])}},
  {id:'legendary',name:'Legendary',desc:'Μοναδικό ορχηστρικό θέμα. Το πιο σπάνιο pack.',price:500,
   sounds:{start:()=>_playSynth([[261,.1,.12,'sine',0],[329,.1,.1,'sine',.1],[392,.1,.1,'sine',.2],[523,.5,.14,'sine',.32],[659,.6,.12,'sine',.55]]),
           end:()=>_playSynth([[659,.2,.13,'sine',0],[523,.2,.12,'sine',.22],[392,.2,.11,'sine',.44],[329,.2,.1,'sine',.66],[261,.8,.1,'sine',.88]]),
           break_start:()=>_playSynth([[392,.2,.11,'sine',0],[494,.2,.1,'sine',.22],[587,.5,.1,'sine',.45]]),
           break_end:()=>_playSynth([[329,.15,.11,'sine',0],[415,.15,.1,'sine',.18],[523,.15,.1,'sine',.36],[659,.5,.12,'sine',.55]]),
           pause:()=>_playSynth([[523,.12,.12,'sine',0],[415,.12,.1,'sine',.14],[329,.3,.1,'sine',.28]]),
           resume:()=>_playSynth([[329,.12,.1,'sine',0],[415,.12,.1,'sine',.14],[523,.3,.12,'sine',.28]]),
           stop:()=>_playSynth([[523,.15,.12,'sine',0],[415,.15,.11,'sine',.18],[329,.15,.1,'sine',.36],[261,.6,.1,'sine',.54]])}},
];

let SHOP={tab:'themes'};

function _playSynth(notes){
  const ctx=_ac.get();if(!ctx)return;
  const now=ctx.currentTime;
  notes.forEach(([freq,dur,vol,wave,delay])=>{
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.type=wave;o.frequency.value=freq;
    g.gain.setValueAtTime(0,now+delay);
    g.gain.linearRampToValueAtTime(vol,now+delay+0.02);
    g.gain.exponentialRampToValueAtTime(0.001,now+delay+dur);
    o.connect(g);g.connect(ctx.destination);
    o.start(now+delay);o.stop(now+delay+dur+0.05);
  });
}

function playSound(type){
  const pack=SOUND_PACKS.find(p=>p.id===(db.shop?.activeSoundPack||'default'))||SOUND_PACKS[0];
  if(pack.sounds[type])pack.sounds[type]();
}

function applyTheme(id){
  const theme=THEMES.find(t=>t.id===id);if(!theme)return;
  const root=document.documentElement;
  Object.entries(theme.vars).forEach(([k,v])=>root.style.setProperty(k,v));
}

function setShopTab(tab,el){
  SHOP.tab=tab;
  document.querySelectorAll('#shop-tabs .tab').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');
  if(tab==='pets'){
    document.getElementById('shop-grid-container').innerHTML='';
    renderShopPets();
    return;
  }
  renderShop();
}

// ── REWARD ENGINE ─────────────────────────────────────────────────

// Floating +XP / +🪙 label that rises and fades from the timer area
function spawnFloatReward(text, color){
  const el=document.createElement('div');
  el.className='float-reward';
  el.textContent=text;
  el.style.color=color||'var(--accent)';
  // Anchor near the timer ring
  const ring=document.getElementById('time-display');
  if(ring){
    const r=ring.getBoundingClientRect();
    el.style.left=(r.left+r.width/2-20)+'px';
    el.style.top=(r.top-10)+'px';
  } else {
    el.style.left='50%';el.style.top='40%';
  }
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 1000);
}

// Animated counter: ticks from 0 → target over ~duration ms
function animateCounter(el, from, to, duration, format){
  // Guard against NaN or invalid values
  if(!el)return;
  const safeTo=(!to||isNaN(to))?0:to;
  const safeFrom=(!from||isNaN(from))?0:from;
  if(safeTo===safeFrom){el.textContent=format(safeTo);return;}
  const start=performance.now();
  function step(now){
    const p=Math.min(1,(now-start)/duration);
    const ease=1-Math.pow(1-p,3); // ease-out cubic
    const val=Math.round(safeFrom+(safeTo-safeFrom)*ease);
    el.textContent=format(val);
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Achievement toast queue (one at a time, top-right)
let _achQueue=[];
let _achShowing=false;
function queueAchievementToast(a){
  _achQueue.push(a);
  if(!_achShowing)drainAchQueue();
}
function drainAchQueue(){
  if(!_achQueue.length){_achShowing=false;return;}
  _achShowing=true;
  const a=_achQueue.shift();
  const el=document.createElement('div');
  el.className='ach-toast';
  el.innerHTML=`<div class="ach-toast-icon">${a.icon}</div>
    <div><div class="ach-toast-title">Achievement unlocked!</div>
    <div class="ach-toast-desc">${a.name}</div>
    ${a.xp?`<div class="ach-toast-xp">+${a.xp} XP</div>`:''}
    </div>`;
  document.body.appendChild(el);
  setTimeout(()=>{
    el.classList.add('out');
    setTimeout(()=>{el.remove();drainAchQueue();},350);
  },2800);
}

// Level-up overlay
function showLevelUp(newLevel, onDone){
  const ov=document.getElementById('levelup-overlay');
  document.getElementById('lvlup-badge').textContent=newLevel;
  document.getElementById('lvlup-number').textContent='Level '+newLevel;
  const subs=['Εντυπωσιακό! 🚀','Συνέχισε! 💪','Τα πας φανταστικά! ⭐','Αξέχαστο! 🔥','Δυνατός! ⚡'];
  document.getElementById('lvlup-sub').textContent=subs[newLevel%subs.length]||'Συνέχισε! 💪';
  ov.style.display='flex';

  // Replace button to clear all stale listeners
  const oldBtn=document.getElementById('lvlup-btn');
  const btn=oldBtn.cloneNode(true);
  oldBtn.parentNode.replaceChild(btn,oldBtn);

  btn.onclick=function(){
    ov.style.display='none';
    showPage('timer');
    if(typeof onDone==='function') onDone();
  };

  // Play a quick celebratory tone
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const now=ctx.currentTime;
    [[523,.12,.2,0],[659,.12,.2,.13],[784,.12,.2,.26],[1047,.4,.22,.4]].forEach(([f,d,v,t])=>{
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='sine';o.frequency.value=f;
      g.gain.setValueAtTime(0,now+t);g.gain.linearRampToValueAtTime(v,now+t+.02);
      g.gain.exponentialRampToValueAtTime(.001,now+t+d);
      o.connect(g);g.connect(ctx.destination);o.start(now+t);o.stop(now+t+d+.05);
    });
  }catch(e){}
}
function closeLevelUp(){
  document.getElementById('levelup-overlay').style.display='none';
  showPage('dashboard');
  if(typeof window._lvlupDone==='function'){window._lvlupDone();window._lvlupDone=null;}
}

// Main reward modal
function showRewardModal({xpGain, coins, xpBefore, xpAfter, levelBefore, levelAfter, label, onClose}){
  const ov=document.getElementById('reward-overlay');
  const counter=document.getElementById('reward-xp-counter');
  const bar=document.getElementById('reward-xp-bar');
  const coinsWrap=document.getElementById('reward-coins-wrap');
  const lvLabel=document.getElementById('reward-lv');
  const progress=document.getElementById('reward-xp-progress');
  const sessionLabel=document.getElementById('reward-session-label');

  sessionLabel.textContent=label||'Session ολοκληρώθηκε';
  counter.textContent='+0 XP';
  bar.style.transition='none';
  coinsWrap.innerHTML='';

  // XP bar: show position BEFORE this gain
  const lvAfterProg=xpProgressInLevel(xpAfter);
  const lvBeforeProg=xpProgressInLevel(xpBefore);
  const sameLevelGain=levelBefore===levelAfter;

  // Set bar to pre-gain position instantly, then animate to post
  const fromPct=sameLevelGain ? lvBeforeProg.pct : 0;
  const toPct=lvAfterProg.pct;
  bar.style.width=fromPct+'%';
  lvLabel.textContent='Level '+levelAfter;
  progress.textContent=lvAfterProg.current+' / '+lvAfterProg.needed+' XP';

  ov.style.display='flex';

  // Animate XP counter
  animateCounter(counter, 0, xpGain, 1000, v=>'+'+v+' XP');

  // Animate bar after a short delay
  setTimeout(()=>{
    bar.style.transition='width 1.1s cubic-bezier(.4,0,.2,1)';
    bar.style.width=toPct+'%';
  }, 80);

  // Coins row
  if(coins>0){
    const row=document.createElement('div');
    row.className='reward-coins-row';
    row.innerHTML=`<span class="coin-sym" style="width:18px;height:18px;border-width:2px"></span><span id="reward-coin-counter">+0</span><span style="font-size:13px;color:var(--text3);font-weight:400">coins</span>`;
    coinsWrap.appendChild(row);
    setTimeout(()=>animateCounter(
      document.getElementById('reward-coin-counter'),0,coins,700,v=>'+'+v
    ),200);
  }

  // Close button wires up to optional level-up chain
  const closeBtn=document.getElementById('reward-close-btn');
  closeBtn.onclick=()=>{
    ov.style.display='none';
    if(levelAfter>levelBefore){
      showLevelUp(levelAfter, onClose);
    } else {
      if(typeof onClose==='function')onClose();
    }
  };
}

function earnCoins(amount){
  db.shop=db.shop||{coins:0,owned:[],activeTheme:'midnight',activeSoundPack:'default'};
  db.shop.coins=(db.shop.coins||0)+amount;
  return amount;
}

function renderShop(){
  db.shop=db.shop||{coins:0,owned:[],activeTheme:'midnight',activeSoundPack:'default'};
  const s=db.shop;
  const coinsEl=document.getElementById('shop-coins-display');
  if(coinsEl)coinsEl.innerHTML=(s.coins||0)+' <span class="coin-sym" style="width:20px;height:20px;border-width:2px"></span>';
  document.getElementById('sb-coins').textContent=s.coins||0;
  const owned=s.owned||[];
  const container=document.getElementById('shop-grid-container');
  container.innerHTML='';
  const grid=document.createElement('div');grid.className='shop-grid';

  const items=SHOP.tab==='themes'?THEMES:SOUND_PACKS;
  items.forEach(item=>{
    const isOwned=item.free||owned.includes(item.id);
    const isActive=SHOP.tab==='themes'?(s.activeTheme===item.id):(s.activeSoundPack===item.id);
    const card=document.createElement('div');
    card.className='shop-card'+(isActive?' active-item':isOwned?' owned':item.free?' free-item':' locked-item');

    let previewHtml='';
    if(SHOP.tab==='themes'){
      const [bg,mid,accent]=item.preview;
      previewHtml=`<div class="shop-preview" style="background:${bg}">
        <div style="width:22px;height:22px;border-radius:50%;background:${accent}"></div>
        <div style="flex:1;height:8px;background:${mid};border-radius:4px;margin:0 6px"></div>
        <div style="width:14px;height:14px;border-radius:3px;background:${accent};opacity:.6"></div>
      </div>`;
    } else {
      const notes=['▐','▌','▐▐','▌▌','▐▐▐'];
      const cols=['#c8b8ff','#6bcb8b','#ff7e6b','#4fd1b0','#f06aaf'];
      const ci=SOUND_PACKS.indexOf(item);
      previewHtml=`<div class="shop-preview" style="background:var(--surface2);gap:4px">
        ${notes.map((n,i)=>`<span style="color:${cols[(ci+i)%cols.length]};font-size:${14+i*2}px">${n}</span>`).join('')}
      </div>
      <div style="margin-bottom:8px">
        <button onclick="previewSound('${item.id}')" style="width:100%;padding:6px;background:var(--surface3);border:1px solid var(--border2);border-radius:var(--radius-xs);color:var(--text2);font-size:11px;cursor:pointer;font-family:inherit">▶ Δοκίμασε τον ήχο</button>
      </div>`;
    }

    let btnHtml='';
    if(isActive){
      btnHtml=`<div class="shop-btn applied">● Ενεργό</div>`;
    } else if(isOwned){
      btnHtml=`<button class="shop-btn apply" onclick="applyItem('${item.id}','${SHOP.tab}')">Εφαρμογή</button>`;
    } else {
      const canAfford=(s.coins||0)>=item.price;
      btnHtml=`<button class="shop-btn buy" onclick="buyItem('${item.id}','${SHOP.tab}')" ${canAfford?'':'disabled style="opacity:.45;cursor:not-allowed"'}>
        Αγορά — ${item.price} <span class="coin-sym"></span>
      </button>`;
    }

    card.innerHTML=`
      ${item.free?`<div style="font-size:10px;color:var(--gold);margin-bottom:8px;display:flex;align-items:center;gap:5px"><span>🎁</span> Δωρεάν</div>`:''}
      ${item.unlockHint?`<div style="font-size:10px;color:var(--text3);margin-bottom:6px">💡 ${item.unlockHint}</div>`:''}
      <div class="shop-name">${item.name}</div>
      <div class="shop-desc">${item.desc}</div>
      ${previewHtml}
      ${btnHtml}`;
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

function previewSound(packId){
  const pack=SOUND_PACKS.find(p=>p.id===packId);
  if(pack&&pack.sounds.start)pack.sounds.start();
}

function buyItem(id,tab){
  db.shop=db.shop||{coins:0,owned:[],activeTheme:'midnight',activeSoundPack:'default'};
  const items=tab==='themes'?THEMES:SOUND_PACKS;
  const item=items.find(x=>x.id===id);if(!item)return;
  if((db.shop.coins||0)<item.price){showToast('Δεν έχεις αρκετά coins!');return;}
  db.shop.coins-=item.price;
  if(!db.shop.owned.includes(id))db.shop.owned.push(id);
  save();applyItem(id,tab);showToast('🛍 Αγοράστηκε: '+item.name+'!');
}

function applyItem(id,tab){
  db.shop=db.shop||{coins:0,owned:[],activeTheme:'midnight',activeSoundPack:'default'};
  if(tab==='themes'){
    db.shop.activeTheme=id;applyTheme(id);showToast('🎨 Theme εφαρμόστηκε: '+(THEMES.find(t=>t.id===id)?.name||id));
  } else {
    db.shop.activeSoundPack=id;showToast('🎵 Sound pack εφαρμόστηκε: '+(SOUND_PACKS.find(p=>p.id===id)?.name||id));
  }
  save();renderShop();
}


function sendSupportEmail(){
  const type=document.querySelector('input[name="sup-type"]:checked')?.value||'(δεν επιλέχθηκε)';
  const description=(document.getElementById('sup-description')?.value||'').trim();
  const whatHappened=(document.getElementById('sup-what-happened')?.value||'').trim();
  const expected=(document.getElementById('sup-expected')?.value||'').trim();
  const steps=(document.getElementById('sup-steps')?.value||'').trim();
  const device=(document.getElementById('sup-device')?.value||'').trim();
  const os=(document.getElementById('sup-os')?.value||'').trim();
  const browser=(document.getElementById('sup-browser')?.value||'').trim();
  const ideaBenefit=(document.getElementById('sup-idea-benefit')?.value||'').trim();
  const extra=(document.getElementById('sup-extra')?.value||'').trim();

  const lines=[];
  lines.push('=== ΑΝΑΦΟΡΑ FOCUSFLOW ===');
  lines.push('');
  lines.push('🔹 Τύπος: '+type);
  lines.push('');
  if(description){lines.push('🔹 Περιγραφή:');lines.push(description);lines.push('');}
  if(whatHappened||expected||steps){
    lines.push('🔹 Λεπτομέρειες bug:');
    if(whatHappened){lines.push('• Τι συνέβη: '+whatHappened);}
    if(expected){lines.push('• Τι περίμενα: '+expected);}
    if(steps){lines.push('• Βήματα αναπαραγωγής:');lines.push(steps);}
    lines.push('');
  }
  if(device||os||browser){
    lines.push('🔹 Πληροφορίες συσκευής:');
    if(device)lines.push('• Συσκευή: '+device);
    if(os)lines.push('• Λ.Σ.: '+os);
    if(browser)lines.push('• Browser: '+browser);
    lines.push('');
  }
  if(ideaBenefit){lines.push('🔹 Τι θα βελτίωνε η ιδέα:');lines.push(ideaBenefit);lines.push('');}
  if(extra){lines.push('🔹 Επιπλέον σχόλια:');lines.push(extra);lines.push('');}
  lines.push('=== ΤΕΛΟΣ ===');

  const body=lines.join('\n');
  const subject='FocusFlow — '+type;
  window.location.href='mailto:komouro@cs.duth.gr?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
}

