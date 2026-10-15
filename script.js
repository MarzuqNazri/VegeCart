/* Culinary Quest: interactive kitchen missions.
   Edit the MISSION_BANK below to change the challenge content. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const screens = { home: $("homeScreen"), game: $("gameScreen"), results: $("resultsScreen") };

  // Learning content is kept separate from interface logic for easy editing.
  const MISSION_BANK = [
    {
      id: "french", name: "The French Atelier", emoji: "🔪", brief: "A chef's knife is only as useful as your understanding of the cut. Sort the classical cuts carefully.",
      tools: ["🔪 Chef's knife", "🪵 Cutting board"], badge: "Precision Pro", badgeIcon: "🔪",
      challenges: [
        { type:"sort", label:"DRAG & DROP", title:"Sort the classical cuts", prompt:"Place each cut into the correct category. On a phone, tap a cut and then tap its destination.", explanation:"Julienne produces thin matchsticks; brunoise is a fine dice; chiffonade makes thin ribbons from leafy ingredients; rondelle creates round slices.",
          items:[{id:"julienne",text:"Julienne",cat:"matchstick"},{id:"brunoise",text:"Brunoise",cat:"dice"},{id:"chiffonade",text:"Chiffonade",cat:"ribbons"},{id:"rondelle",text:"Rondelle",cat:"rounds"}],
          categories:[{id:"matchstick",name:"Thin matchsticks"},{id:"dice",name:"Fine cubes"},{id:"ribbons",name:"Leafy ribbons"},{id:"rounds",name:"Round slices"}] },
        { type:"match", label:"INGREDIENT MATCH", title:"Choose the best cut", prompt:"Match each ingredient or use case with the most suitable cut.", explanation:"Julienne is commonly used for thin vegetable strips; chiffonade is especially suited to leafy herbs and greens. Cut choice depends on the desired texture, cooking time and presentation.",
          pairs:[{left:"Carrot garnish with thin strips",options:["Julienne","Chiffonade","Rondelle"],answer:"Julienne"},{left:"Basil leaves cut into ribbons",options:["Brunoise","Chiffonade","Julienne"],answer:"Chiffonade"},{left:"Carrot cut into thin round coins",options:["Rondelle","Brunoise","Chiffonade"],answer:"Rondelle"}] },
        { type:"sort", label:"VISUAL CLASSIFICATION", title:"Which cut belongs here?", prompt:"Sort each description by the cut it describes.", explanation:"A fine dice is brunoise; matchsticks are julienne; thin leafy ribbons are chiffonade. Uniform cuts promote even cooking and consistent presentation.",
          items:[{id:"tiny",text:"Very small, even cubes",cat:"brunoise"},{id:"sticks",text:"Long, thin strips",cat:"julienne"},{id:"leaf",text:"Thin ribbons of leaves",cat:"chiffonade"}],
          categories:[{id:"brunoise",name:"Brunoise"},{id:"julienne",name:"Julienne"},{id:"chiffonade",name:"Chiffonade"}] },
        { type:"transfer", label:"CHEF'S TRANSFER TEST", title:"Apply the principle", prompt:"A new trainee needs leafy mint ribbons for a garnish. Which cut should they use?", explanation:"Chiffonade is the appropriate cut for thin ribbons of leafy herbs. This is a new example: the aim is to transfer the cut principle to a different ingredient.", options:["Brunoise","Chiffonade","Rondelle","Julienne"],answer:"Chiffonade" }
      ]
    },
    {
      id: "italian", name: "Italian Flavour Lab", emoji: "🍅", brief: "Build flavour with intention. Match ingredients to the preparation technique and culinary purpose.",
      tools: ["🧅 Aromatics", "🍅 Fresh produce"], badge: "Flavour Architect", badgeIcon: "🍅",
      challenges: [
        { type:"match", label:"TECHNIQUE MATCH", title:"Build the flavour base", prompt:"Match each preparation to the technique or ingredient group it describes.", explanation:"Soffritto is a flavour base made from finely chopped aromatics gently cooked in fat. Ingredient ratios and exact ingredients vary by regional and recipe tradition.",
          pairs:[{left:"Finely chopped aromatics gently cooked in fat",options:["Soffritto","Chiffonade","Rondelle"],answer:"Soffritto"},{left:"Thin ribbons cut from basil leaves",options:["Brunoise","Chiffonade","Soffritto"],answer:"Chiffonade"},{left:"Small, uniform cubes of vegetables",options:["Brunoise","Soffritto","Julienne"],answer:"Brunoise"}] },
        { type:"sort", label:"INGREDIENT KNOW-HOW", title:"Sort the mise en place", prompt:"Place each item into the best preparation group for this flavour-base task.", explanation:"Onion, carrot and celery are a common Italian soffritto combination. Garlic may be included in some recipes, but methods and proportions vary. Fresh basil is often added later when its fresh aroma is desired.",
          items:[{id:"onion",text:"Finely chopped onion",cat:"base"},{id:"carrot",text:"Finely chopped carrot",cat:"base"},{id:"celery",text:"Finely chopped celery",cat:"base"},{id:"basil",text:"Fresh basil ribbons",cat:"finish"}],
          categories:[{id:"base",name:"Common soffritto base"},{id:"finish",name:"Fresh finishing herb"}] },
        { type:"sequence", label:"KITCHEN WORKFLOW", title:"Arrange the workflow", prompt:"Reorder the steps into a sensible sequence for preparing a basic soffritto. Use the arrows if dragging is awkward.", explanation:"Prepare and cut the vegetables uniformly first, warm the fat, then cook the aromatics gently until softened. Avoid rushing the process or browning them unintentionally.",
          steps:[{id:"cook",text:"Cook aromatics gently until softened",order:3},{id:"wash",text:"Wash and inspect the vegetables",order:1},{id:"heat",text:"Warm the oil or other recipe-specified fat",order:2},{id:"cut",text:"Peel if needed and cut evenly",order:2.5}], correct:["wash","cut","heat","cook"] },
        { type:"transfer", label:"CHEF'S TRANSFER TEST", title:"A new service scenario", prompt:"You are preparing a tomato sauce and want a gentle aromatic base rather than crisp browned vegetables. What should you do?", explanation:"Cook the prepared aromatics gently in fat until softened. The goal here is to develop a flavour base without intentionally crisping or deeply browning the vegetables.", options:["Deep-fry until crisp","Gently cook the chopped aromatics in fat","Add whole vegetables at the end","Char the vegetables until black"],answer:"Gently cook the chopped aromatics in fat" }
      ]
    },
    {
      id: "malay", name: "Malay Heritage Kitchen", emoji: "🌶️", brief: "Good mise en place supports consistency, timing and safe service. Organise your work before the heat is on.",
      tools: ["🧼 Clean workstation", "🥣 Prep bowls"], badge: "Service Strategist", badgeIcon: "🌶️",
      challenges: [
        { type:"match", label:"PREPARATION MATCH", title:"Match the prep language", prompt:"Match each Malay preparation term with the closest general description used in this lesson. Regional and household usage can vary.", explanation:"Mayang commonly refers to thin slicing; racik can refer to cutting into small pieces or strips depending on context; potong serong means cutting on a diagonal. Culinary terms can vary regionally, so confirm the intended cut in a recipe or kitchen brief.",
          pairs:[{left:"Potong serong",options:["Cut diagonally","Cut into fine cubes","Cut into leafy ribbons"],answer:"Cut diagonally"},{left:"Mayang",options:["Thinly slice","Deep-fry","Blend into a paste"],answer:"Thinly slice"},{left:"Racik (general usage)",options:["Cut or shred into small pieces/strips","Bake until dry","Cut only into rounds"],answer:"Cut or shred into small pieces/strips"}] },
        { type:"sort", label:"STATION SET-UP", title:"Sort the station tasks", prompt:"Place each action into the best stage of preparation.", explanation:"A reliable mise en place starts with hygiene and inspection, then washing and preparation, followed by organising ingredients and tools. Keep raw and ready-to-eat foods separated and follow the recipe's actual sequence.",
          items:[{id:"wash",text:"Wash hands and sanitise the station",cat:"before"},{id:"inspect",text:"Inspect and wash ingredients",cat:"before"},{id:"portion",text:"Cut and portion ingredients",cat:"prep"},{id:"arrange",text:"Arrange labelled bowls for cooking",cat:"ready"}],
          categories:[{id:"before",name:"Before food prep"},{id:"prep",name:"Ingredient preparation"},{id:"ready",name:"Ready for cooking"}] },
        { type:"sequence", label:"SERVICE READINESS", title:"Build a mise en place sequence", prompt:"Put these tasks into a sensible order before cooking begins.", explanation:"Start with personal and workstation hygiene, check and gather ingredients, prepare them according to the recipe, then organise portions and tools within reach. Follow your institution's food-safety SOPs.",
          steps:[{id:"arrange",text:"Organise labelled ingredients and tools",order:4},{id:"hygiene",text:"Wash hands and prepare a clean station",order:1},{id:"gather",text:"Check recipe and gather ingredients",order:2},{id:"prep",text:"Wash, cut and portion ingredients",order:3}],correct:["hygiene","gather","prep","arrange"] },
        { type:"transfer", label:"CHEF'S TRANSFER TEST", title:"The final service decision", prompt:"A dish needs diagonally cut long beans for the intended presentation. Which instruction best matches that cut?", explanation:"Potong serong means cutting on a diagonal. This final example checks whether you can apply the term to a new ingredient rather than merely repeat a memorised example.", options:["Potong serong","Mayang","Chiffonade","Brunoise"],answer:"Potong serong" }
      ]
    }
  ];

  let missionIndex=0, challengeIndex=0, firstTryCorrect=0, answeredCount=0, streak=0, bestStreak=0;
  let tries=0, locked=false, soundOn=false, audioCtx=null, challengeState=null;
  const missionStats = MISSION_BANK.map(m=>({id:m.id,name:m.name,correct:0,total:m.challenges.length,completed:false}));
  const badgeUnlocks = new Set();

  function showScreen(name){Object.values(screens).forEach(s=>s.classList.remove("active"));screens[name].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
  function playTone(freq=500,duration=.12,type="sine",volume=.045){
    if(!soundOn)return;
    try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==="suspended")audioCtx.resume();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.setValueAtTime(freq,audioCtx.currentTime);g.gain.setValueAtTime(volume,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration);}catch(e){/* Audio is optional; gameplay remains available. */}
  }
  function soundSequence(notes){notes.forEach((n,i)=>setTimeout(()=>playTone(n,.14,"sine",.035),i*105));}
  $("soundToggle").addEventListener("click",()=>{soundOn=!soundOn;$("soundToggle").innerHTML=(soundOn?"🔊 <span>Sound on</span>":"🔇 <span>Sound off</span>");$("soundToggle").setAttribute("aria-pressed",String(soundOn));if(soundOn)soundSequence([440,554,659]);});
  function startGame(){missionIndex=0;challengeIndex=0;firstTryCorrect=0;answeredCount=0;streak=0;bestStreak=0;tries=0;locked=false;badgeUnlocks.clear();missionStats.forEach(s=>{s.correct=0;s.completed=false;});showScreen("game");renderChallenge();}
  $("startButton").addEventListener("click",()=>{playTone(440);startGame();});
  $("homeButton").addEventListener("click",()=>showScreen("home"));
  $("brandHome").addEventListener("click",e=>{e.preventDefault();showScreen("home");});
  $("resultsHomeButton").addEventListener("click",()=>showScreen("home"));
  $("restartButton").addEventListener("click",startGame);

  function renderChallenge(){
    const mission=MISSION_BANK[missionIndex], challenge=mission.challenges[challengeIndex];
    locked=false;tries=0;challengeState={answers:{},placed:{},order:[],selected:null};
    $("missionEmoji").textContent=mission.emoji;$("missionLabel").textContent=`MISSION 0${missionIndex+1}`;
    $("missionName").textContent=mission.name;$("briefText").textContent=mission.brief;
    $("toolList").innerHTML=mission.tools.map(t=>`<span>${t}</span>`).join("");
    $("badgeIcon").textContent=mission.badgeIcon;$("badgeName").textContent=badgeUnlocks.has(mission.id)?mission.badge:"Apprentice";
    $("challengeType").textContent=challenge.label;$("challengeTitle").textContent=challenge.title;$("challengePrompt").textContent=challenge.prompt;
    $("feedbackBox").hidden=true;$("feedbackBox").className="feedback-box";
    $("checkButton").hidden=false;$("continueButton").hidden=true;
    $("progressText").textContent=`Challenge ${missionIndex*4+challengeIndex+1} of 12`;
    $("progressFill").style.width=`${((missionIndex*4+challengeIndex)/12)*100}%`;
    $("scoreDisplay").textContent=`${Math.round((firstTryCorrect/12)*100)}%`;$("streakText").textContent=`✨ Streak: ${streak}`;
    const area=$("challengeArea");area.innerHTML="";
    if(challenge.type==="sort")renderSort(area,challenge);
    else if(challenge.type==="match")renderMatch(area,challenge);
    else if(challenge.type==="sequence")renderSequence(area,challenge);
    else renderTransfer(area,challenge);
  }

  function renderSort(area,c){
    const bank=document.createElement("div");bank.className="drag-bank";bank.id="dragBank";
    const shuffled=[...c.items].sort(()=>Math.random()-.5);
    shuffled.forEach(item=>{const chip=document.createElement("button");chip.className="draggable-chip";chip.type="button";chip.draggable=true;chip.dataset.item=item.id;chip.textContent=item.text;chip.setAttribute("aria-label",`${item.text}, draggable or tap to select`);chip.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",item.id);});chip.addEventListener("click",()=>selectChip(item.id,chip,c));bank.append(chip);});
    area.append(bank);
    const grid=document.createElement("div");grid.className="drop-grid";
    c.categories.forEach(cat=>{const zone=document.createElement("div");zone.className="drop-zone";zone.dataset.cat=cat.id;zone.tabIndex=0;zone.setAttribute("role","button");zone.setAttribute("aria-label",`Place selected item in ${cat.name}`);zone.innerHTML=`<h3>${cat.name}</h3><div class="drop-items"></div>`;zone.addEventListener("dragover",e=>{e.preventDefault();zone.classList.add("drag-over");});zone.addEventListener("dragleave",()=>zone.classList.remove("drag-over"));zone.addEventListener("drop",e=>{e.preventDefault();zone.classList.remove("drag-over");placeItem(e.dataTransfer.getData("text/plain"),cat.id,c);});zone.addEventListener("click",()=>{if(challengeState.selected)placeItem(challengeState.selected,cat.id,c);});zone.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&challengeState.selected){e.preventDefault();placeItem(challengeState.selected,cat.id,c);}});grid.append(zone);});
    area.append(grid);
  }
  function selectChip(id,chip,c){if(locked)return;
    // Selecting a placed item picks it up again so learners can correct their own sorting.
    if(challengeState.placed[id]){
      const oldTag=document.querySelector(`[data-placed-item="${id}"]`);if(oldTag)oldTag.remove();
      delete challengeState.placed[id];chip.classList.remove("placed");
    }
    document.querySelectorAll("#dragBank .draggable-chip").forEach(x=>x.classList.remove("selected"));
    chip.classList.add("selected");challengeState.selected=id;playTone(380,.06);
  }
  function placeItem(id,cat,c){if(!id||locked)return;const item=c.items.find(x=>x.id===id);if(!item)return;
    const previousTag=document.querySelector(`[data-placed-item="${id}"]`);if(previousTag)previousTag.remove();
    challengeState.placed[id]=cat;challengeState.selected=null;
    const chip=document.querySelector(`#dragBank [data-item="${id}"]`);
    if(chip){chip.classList.remove("selected");chip.classList.add("placed");}
    const zone=document.querySelector(`[data-cat="${cat}"] .drop-items`);const tag=document.createElement("span");
    tag.className="draggable-chip";tag.dataset.placedItem=id;tag.textContent=item.text;tag.title="Placed item — tap the item in the bank to move it";
    zone.append(tag);playTone(510,.06);
  }
  function renderMatch(area,c){
    const list=document.createElement("div");list.className="match-list";
    c.pairs.forEach((pair,i)=>{const row=document.createElement("div");row.className="match-row";const label=document.createElement("label");label.htmlFor=`match-${i}`;label.textContent=pair.left;const select=document.createElement("select");select.id=`match-${i}`;select.innerHTML=`<option value="">Choose a match…</option>`+pair.options.map(o=>`<option>${escapeHtml(o)}</option>`).join("");select.addEventListener("change",()=>{challengeState.answers[i]=select.value;});row.append(label,select);list.append(row);});area.append(list);
  }
  function renderSequence(area,c){
    challengeState.order=[...c.steps].sort(()=>Math.random()-.5).map(s=>s.id);
    const list=document.createElement("div");list.className="sequence-list";list.id="sequenceList";
    function draw(){list.innerHTML="";challengeState.order.forEach((id,i)=>{const step=c.steps.find(s=>s.id===id);const row=document.createElement("div");row.className="sequence-item";row.draggable=true;row.dataset.id=id;row.innerHTML=`<span class="sequence-number">${i+1}</span><span class="sequence-text">${step.text}</span><span class="sequence-buttons"><button type="button" aria-label="Move ${step.text} up" ${i===0?"disabled":""}>↑</button><button type="button" aria-label="Move ${step.text} down" ${i===challengeState.order.length-1?"disabled":""}>↓</button></span>`;const [up,down]=row.querySelectorAll("button");up.addEventListener("click",()=>move(i,-1));down.addEventListener("click",()=>move(i,1));row.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",id));row.addEventListener("dragover",e=>{e.preventDefault();row.classList.add("drag-over");});row.addEventListener("dragleave",()=>row.classList.remove("drag-over"));row.addEventListener("drop",e=>{e.preventDefault();const dragged=e.dataTransfer.getData("text/plain"),from=challengeState.order.indexOf(dragged),to=challengeState.order.indexOf(id);if(from>=0&&to>=0){const [item]=challengeState.order.splice(from,1);challengeState.order.splice(to,0,item);draw();}});list.append(row);});}
    function move(i,delta){const j=i+delta;if(j<0||j>=challengeState.order.length)return;[challengeState.order[i],challengeState.order[j]]=[challengeState.order[j],challengeState.order[i]];draw();}
    draw();area.append(list);
  }
  function renderTransfer(area,c){
    const list=document.createElement("div");list.className="match-list";
    c.options.forEach((opt,i)=>{const button=document.createElement("button");button.type="button";button.className="draggable-chip";button.style.textAlign="left";button.style.width="100%";button.textContent=String.fromCharCode(65+i)+". "+opt;button.addEventListener("click",()=>{if(locked)return;challengeState.answer=opt;list.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));button.classList.add("selected");playTone(400,.06);});list.append(button);});area.append(list);
  }
  function evaluate(c){
    if(c.type==="sort"){return c.items.every(item=>challengeState.placed[item.id]===item.cat);}
    if(c.type==="match"){return c.pairs.every((p,i)=>challengeState.answers[i]===p.answer);}
    if(c.type==="sequence"){return c.correct.every((id,i)=>challengeState.order[i]===id);}
    return challengeState.answer===c.answer;
  }
  function hasCompleteResponse(c){
    if(c.type==="sort")return c.items.every(item=>challengeState.placed[item.id]);
    if(c.type==="match")return c.pairs.every((p,i)=>challengeState.answers[i]);
    if(c.type==="sequence")return challengeState.order.length===c.steps.length;
    return Boolean(challengeState.answer);
  }
  $("checkButton").addEventListener("click",()=>{
    if(locked)return;
    const c=MISSION_BANK[missionIndex].challenges[challengeIndex];
    if(!hasCompleteResponse(c)){showFeedback(false,"Almost there — finish the activity first.","Place or select an answer for every item, then check your work.",false);playTone(230,.12,"triangle");return;}
    tries++;
    if(evaluate(c)){
      locked=true;answeredCount++;if(tries===1){firstTryCorrect++;missionStats[missionIndex].correct++;streak++;bestStreak=Math.max(bestStreak,streak);}else{streak=0;}
      $("scoreDisplay").textContent=`${Math.round((firstTryCorrect/12)*100)}%`;$("streakText").textContent=`✨ Streak: ${streak}`;
      showFeedback(true,tries===1?"Excellent — first-try mastery!":"Correct. You learned it through another attempt.",c.explanation,true);
      $("checkButton").hidden=true;$("continueButton").hidden=false;playTone(tries===1?740:620,.18);if(streak>0&&streak%3===0)confetti(28);
      if(challengeIndex===3){badgeUnlocks.add(MISSION_BANK[missionIndex].id);$("badgeName").textContent=MISSION_BANK[missionIndex].badge;missionStats[missionIndex].completed=true;confetti(16);}
    }else{
      streak=0;$("streakText").textContent="✨ Streak: 0";
      showFeedback(false,"Not quite — review and try again.",specificHint(c),false);playTone(180,.18,"triangle");
    }
  });
  function specificHint(c){
    if(c.type==="sort")return "Check the defining shape or preparation description for each item. You can move items and check again.";
    if(c.type==="match")return "Look for the technique's defining action and intended result. Change any selection and check again.";
    if(c.type==="sequence")return "Think about hygiene first, then preparation, then organising the workstation for cooking. Reorder the steps and try again.";
    return "Think about the culinary purpose described in the question. Select another option and try again.";
  }
  function showFeedback(good,title,body,canContinue){const box=$("feedbackBox");box.hidden=false;box.className=`feedback-box ${good?"good":"bad"}`;box.innerHTML=`<strong>${good?"✓":"↻"} ${escapeHtml(title)}</strong>${escapeHtml(body)}`;if(!good&&canContinue===false){$("continueButton").hidden=true;}}
  $("continueButton").addEventListener("click",()=>{
    playTone(520,.07);challengeIndex++;
    if(challengeIndex>=MISSION_BANK[missionIndex].challenges.length){missionIndex++;challengeIndex=0;if(missionIndex>=MISSION_BANK.length){showResults();return;}soundSequence([523,659,784]);}
    renderChallenge();
  });
  function showResults(){
    showScreen("results");$("progressFill").style.width="100%";const score=Math.round(firstTryCorrect/12*100);
    $("finalMastery").textContent=`${score}%`;$("finalCorrect").textContent=`${firstTryCorrect}/12`;$("finalBadges").textContent=`${badgeUnlocks.size}/3`;
    $("resultsTitle").textContent=score>=85?"Kitchen legend in the making!":score>=60?"A strong shift, Chef!":"Your culinary journey has begun!";
    $("resultsLede").textContent=score>=85?"You demonstrated strong first-attempt understanding across the three culinary worlds.":score>=60?"You have built a foundation. Review the debrief and replay to strengthen your mastery.":"Every chef improves through deliberate practice. Review the concepts and try the quest again.";
    $("missionResults").innerHTML=MISSION_BANK.map((m,i)=>{const s=missionStats[i],pct=Math.round(s.correct/s.total*100);return `<div class="mission-result"><div><strong>${m.emoji} ${m.name}</strong><small>${s.correct} of ${s.total} challenges correct on first attempt · ${badgeUnlocks.has(m.id)?"Badge earned":"Badge not earned yet"}</small></div><b>${pct}%</b></div>`;}).join("");
    confetti(score>=60?70:25);soundSequence(score>=85?[523,659,784,1046]:[392,494,587]);
  }
  function confetti(count){const colors=["#a68aff","#ff83c4","#74f0c0","#ffd479","#ffffff"];for(let i=0;i<count;i++){const el=document.createElement("i");el.className="confetti";el.style.left=Math.random()*100+"vw";el.style.background=colors[i%colors.length];el.style.animationDelay=Math.random()*.5+"s";el.style.transform=`rotate(${Math.random()*180}deg)`;document.body.append(el);setTimeout(()=>el.remove(),2300);}}
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
})();