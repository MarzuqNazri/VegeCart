/* Culinary Quest: interactive kitchen missions.
   Edit the MISSION_BANK below to change the challenge content. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const screens = { home: $("homeScreen"), game: $("gameScreen"), results: $("resultsScreen") };

  // Learning content is kept separate from interface logic for easy editing.
  const MISSION_BANK = [
    {
      id: "french", name: "The French Atelier", emoji: "🔪",
      brief: "Build reliable knife skills and mise en place habits. The goal is consistent, safe preparation—not just memorising names.",
      tools: ["🔪 Chef's knife", "🪵 Cutting board"], badge: "Precision Pro", badgeIcon: "🔪",
      challenges: [
        { type:"sort", label:"DRAG & DROP", title:"Knife-cut sorting challenge", prompt:"Drag or tap each culinary term into the description that best fits it.", explanation:"Julienne is a thin matchstick cut; brunoise is a small dice; chiffonade produces ribbons from leafy ingredients; rondelle produces round slices. Consistent cuts support even cooking and presentation.",
          items:[{id:"julienne",text:"Julienne",cat:"sticks"},{id:"brunoise",text:"Brunoise",cat:"cubes"},{id:"chiffonade",text:"Chiffonade",cat:"ribbons"},{id:"rondelle",text:"Rondelle",cat:"rounds"}],
          categories:[{id:"sticks",name:"Thin matchsticks"},{id:"cubes",name:"Small, even cubes"},{id:"ribbons",name:"Leafy ribbons"},{id:"rounds",name:"Round slices"}] },
        { type:"mcq", label:"KNIFE-SKILL SCENARIO", title:"Choose the safest setup", prompt:"You are about to dice an onion. The cutting board keeps sliding on the workbench. What should you do first?", explanation:"Stabilise the board before cutting, for example by placing a damp cloth or suitable non-slip mat underneath. A stable board reduces the risk of the knife slipping. Follow your kitchen's safety procedure.", options:["Cut faster to finish quickly","Stabilise the board with a suitable non-slip layer","Hold the board with the hand closest to the blade","Use the knife tip to pin the board in place"], answer:"Stabilise the board with a suitable non-slip layer" },
        { type:"truefalse", label:"TRUE OR FALSE", title:"Consistency counts", prompt:"True or false: cutting vegetables into reasonably uniform pieces helps them cook more evenly.", explanation:"True. Uniformity helps pieces cook at a similar rate and supports consistent texture and presentation. Exact cut size should still suit the recipe and cooking method.", options:["True","False"], answer:"True" },
        { type:"multi", label:"SELECT ALL THAT APPLY", title:"Prepare before the rush", prompt:"Select every action that belongs in good mise en place before a busy service.", explanation:"Mise en place includes reading the recipe or production plan, gathering and preparing ingredients, checking equipment, and organising the workstation. Hand hygiene and a clean station are essential foundations.", options:["Read the recipe and production plan","Gather and prepare ingredients","Check the required equipment","Wait until the pan is hot before finding ingredients","Start cutting without checking the workstation"], answers:["Read the recipe and production plan","Gather and prepare ingredients","Check the required equipment"] }
      ]
    },
    {
      id: "italian", name: "Italian Flavour Lab", emoji: "🍅",
      brief: "Make decisions based on cooking principles. Match the method to the ingredient, desired texture and result.",
      tools: ["🧅 Aromatics", "🍳 Pan and utensils"], badge: "Flavour Architect", badgeIcon: "🍅",
      challenges: [
        { type:"match", label:"MATCH THE CONCEPT", title:"Connect method to outcome", prompt:"Match each kitchen situation with the most suitable concept.", explanation:"Soffritto is a common Italian aromatic base gently cooked in fat. Sautéing uses relatively high heat and a small amount of fat for quick cooking. Simmering uses liquid below a full boil. Methods should match the desired result and ingredient.", pairs:[
          {left:"Chopped onion, carrot and celery gently cooked in fat",options:["Soffritto","Deep-frying","Chiffonade"],answer:"Soffritto"},
          {left:"Small pieces cooked quickly in a little fat",options:["Sautéing","Simmering","Poaching"],answer:"Sautéing"},
          {left:"Gentle cooking in liquid below a full boil",options:["Simmering","Broiling","Roasting"],answer:"Simmering"}] },
        { type:"sequence", label:"PUT IT IN ORDER", title:"Build a flavour base", prompt:"Arrange the steps into a sensible sequence for preparing a basic soffritto.", explanation:"Start with clean, inspected ingredients; prepare the cuts; warm the recipe-specified fat; then cook the aromatics gently until softened. Avoid rushing or unintentionally burning the vegetables.", steps:[
          {id:"cook",text:"Cook aromatics gently until softened"},{id:"wash",text:"Wash and inspect the vegetables"},{id:"heat",text:"Warm the recipe-specified fat"},{id:"cut",text:"Peel if needed and cut evenly"}], correct:["wash","cut","heat","cook"] },
        { type:"spot", label:"SPOT THE KITCHEN ERROR", title:"What went wrong?", prompt:"A cook wants tender, lightly softened aromatics for a sauce. They heat the pan until smoking, add the chopped vegetables, then leave them unattended. Identify the main error.", explanation:"The cook has failed to manage heat and monitor the food. For a gentle aromatic base, control the heat and stir or monitor the vegetables so they soften without burning. The correct heat level depends on the recipe and pan.", options:["The vegetables were chopped before cooking","The pan was overheated and the vegetables were left unattended","The cook used a pan","The vegetables were placed in the pan"], answer:"The pan was overheated and the vegetables were left unattended" },
        { type:"mcq", label:"APPLY COOKING SCIENCE", title:"Choose the appropriate method", prompt:"A tender piece of fish needs gentle cooking in a small amount of liquid to help it retain moisture. Which method is the best match?", explanation:"Shallow poaching uses a relatively small amount of liquid and gentle heat. The method is selected to suit a delicate ingredient; avoid a vigorous boil that may damage its texture.", options:["Shallow poaching","Deep-frying","Broiling","Dry roasting"], answer:"Shallow poaching" }
      ]
    },
    {
      id: "malay", name: "Malay Heritage Kitchen", emoji: "🌶️",
      brief: "Use sound preparation, food-safety thinking and organised workflow to get a station ready for service.",
      tools: ["🧼 Clean workstation", "🥣 Prep bowls"], badge: "Service Strategist", badgeIcon: "🌶️",
      challenges: [
        { type:"sort", label:"PREPARATION LANGUAGE", title:"Sort the cut descriptions", prompt:"Match each term or description to the closest meaning used in this learning activity. Regional kitchen usage may vary.", explanation:"Potong serong means cutting diagonally. Mayang commonly refers to thin slicing. Racik may refer to cutting or shredding into small pieces or strips depending on ingredient and local usage; confirm the intended cut from the recipe or chef's brief.", items:[
          {id:"serong",text:"Potong serong",cat:"diagonal"},{id:"mayang",text:"Mayang",cat:"thin"},{id:"racik",text:"Racik (general usage)",cat:"small"}],
          categories:[{id:"diagonal",name:"Cut diagonally"},{id:"thin",name:"Thinly slice"},{id:"small",name:"Cut/shred into small pieces or strips"}] },
        { type:"multi", label:"FOOD-SAFETY DECISION", title:"Choose safe preparation habits", prompt:"Select all the actions that support safe food preparation in a teaching kitchen.", explanation:"Clean hands and surfaces, separation of raw and ready-to-eat food, and using clean equipment help control contamination risks. Always follow current local food-safety rules and institutional SOPs.", options:["Wash hands at appropriate points","Use separate/clean equipment to prevent cross-contamination","Keep raw food separate from ready-to-eat food","Use the same unwashed board for raw poultry and salad","Taste food with the same spoon repeatedly"], answers:["Wash hands at appropriate points","Use separate/clean equipment to prevent cross-contamination","Keep raw food separate from ready-to-eat food"] },
        { type:"truefalse", label:"TRUE OR FALSE", title:"Vegetable quality check", prompt:"True or false: cutting vegetables into very small pieces always means they should be cooked for the same time as larger pieces.", explanation:"False. Smaller pieces generally heat and cook faster than larger pieces. Adjust cooking time to the size, density, desired texture and cooking method rather than assuming one time fits all.", options:["True","False"], answer:"False" },
        { type:"scenario", label:"SERVICE SCENARIO", title:"The last-minute order", prompt:"A new order arrives while you are preparing ingredients. You realise one ingredient is missing from your station. What is the best professional response?", explanation:"Pause and check the recipe or production plan, communicate the shortage to the responsible chef, and obtain an approved substitute or adjust the workflow. Do not silently improvise an ingredient change that could affect quality, allergens or food safety.", options:["Substitute any ingredient without telling anyone","Ignore the missing ingredient and serve the dish anyway","Inform the chef, verify an approved solution and update the plan","Leave the station unattended without communicating"], answer:"Inform the chef, verify an approved solution and update the plan" }
      ]
    }
  ];

  let missionIndex=0, challengeIndex=0, firstTryCorrect=0, answeredCount=0, streak=0, bestStreak=0;
  let tries=0, locked=false, soundOn=false, audioCtx=null, challengeState=null;
  const TOTAL_CHALLENGES = MISSION_BANK.reduce((sum,m)=>sum+m.challenges.length,0);
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
    $("progressText").textContent=`Challenge ${MISSION_BANK.slice(0,missionIndex).reduce((n,m)=>n+m.challenges.length,0)+challengeIndex+1} of ${TOTAL_CHALLENGES}`;
    $("progressFill").style.width=`${((MISSION_BANK.slice(0,missionIndex).reduce((n,m)=>n+m.challenges.length,0)+challengeIndex)/TOTAL_CHALLENGES)*100}%`;
    $("scoreDisplay").textContent=`${Math.round((firstTryCorrect/TOTAL_CHALLENGES)*100)}%`;$("streakText").textContent=`✨ Streak: ${streak}`;
    const area=$("challengeArea");area.innerHTML="";
    if(challenge.type==="sort")renderSort(area,challenge);
    else if(challenge.type==="match")renderMatch(area,challenge);
    else if(challenge.type==="sequence")renderSequence(area,challenge);
    else if(challenge.type==="multi")renderMulti(area,challenge);
    else if(challenge.type==="truefalse"||challenge.type==="mcq"||challenge.type==="spot"||challenge.type==="scenario"||challenge.type==="transfer")renderTransfer(area,challenge);
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
  function renderMulti(area,c){
    challengeState.selectedMany=[];
    const list=document.createElement("div");list.className="match-list";
    c.options.forEach((opt,i)=>{const button=document.createElement("button");button.type="button";button.className="draggable-chip";button.style.textAlign="left";button.style.width="100%";button.setAttribute("aria-pressed","false");button.textContent="□  "+opt;button.addEventListener("click",()=>{if(locked)return;const idx=challengeState.selectedMany.indexOf(opt);if(idx>=0)challengeState.selectedMany.splice(idx,1);else challengeState.selectedMany.push(opt);button.classList.toggle("selected",idx<0);button.setAttribute("aria-pressed",String(idx<0));button.textContent=(idx<0?"☑  ":"□  ")+opt;playTone(400,.06);});list.append(button);});area.append(list);
  }
  function evaluate(c){
    if(c.type==="sort")return c.items.every(item=>challengeState.placed[item.id]===item.cat);
    if(c.type==="match")return c.pairs.every((p,i)=>challengeState.answers[i]===p.answer);
    if(c.type==="sequence")return c.correct.every((id,i)=>challengeState.order[i]===id);
    if(c.type==="multi"){const chosen=[...(challengeState.selectedMany||[])].sort();const expected=[...c.answers].sort();return chosen.length===expected.length&&chosen.every((v,i)=>v===expected[i]);}
    return challengeState.answer===c.answer;
  }
  function hasCompleteResponse(c){
    if(c.type==="sort")return c.items.every(item=>challengeState.placed[item.id]);
    if(c.type==="match")return c.pairs.every((p,i)=>challengeState.answers[i]);
    if(c.type==="sequence")return challengeState.order.length===c.steps.length;
    if(c.type==="multi")return (challengeState.selectedMany||[]).length>0;
    return Boolean(challengeState.answer);
  }
  $("checkButton").addEventListener("click",()=>{
    if(locked)return;
    const c=MISSION_BANK[missionIndex].challenges[challengeIndex];
    if(!hasCompleteResponse(c)){showFeedback(false,"Almost there — finish the activity first.","Place or select an answer for every item, then check your work.",false);playTone(230,.12,"triangle");return;}
    tries++;
    if(evaluate(c)){
      locked=true;answeredCount++;if(tries===1){firstTryCorrect++;missionStats[missionIndex].correct++;streak++;bestStreak=Math.max(bestStreak,streak);}else{streak=0;}
      $("scoreDisplay").textContent=`${Math.round((firstTryCorrect/TOTAL_CHALLENGES)*100)}%`;$("streakText").textContent=`✨ Streak: ${streak}`;
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
    if(c.type==="multi")return "Select every action that meets the criterion, and leave out the actions that do not. You can change your selections and try again.";
    if(c.type==="truefalse")return "Check the general culinary principle in the statement. Consider whether the wording is always accurate.";
    if(c.type==="spot")return "Focus on the action that causes the biggest quality or process problem in this situation.";
    if(c.type==="scenario")return "Choose the response that demonstrates communication, food safety and professional kitchen judgement.";
    return "Think about the culinary principle described in the question. Select another option and try again.";
  }
  function showFeedback(good,title,body,canContinue){const box=$("feedbackBox");box.hidden=false;box.className=`feedback-box ${good?"good":"bad"}`;box.innerHTML=`<strong>${good?"✓":"↻"} ${escapeHtml(title)}</strong>${escapeHtml(body)}`;if(!good&&canContinue===false){$("continueButton").hidden=true;}}
  $("continueButton").addEventListener("click",()=>{
    playTone(520,.07);challengeIndex++;
    if(challengeIndex>=MISSION_BANK[missionIndex].challenges.length){missionIndex++;challengeIndex=0;if(missionIndex>=MISSION_BANK.length){showResults();return;}soundSequence([523,659,784]);}
    renderChallenge();
  });
  function showResults(){
    showScreen("results");$("progressFill").style.width="100%";const score=Math.round(firstTryCorrect/TOTAL_CHALLENGES*100);
    $("finalMastery").textContent=`${score}%`;$("finalCorrect").textContent=`${firstTryCorrect}/${TOTAL_CHALLENGES}`;$("finalBadges").textContent=`${badgeUnlocks.size}/3`;
    $("resultsTitle").textContent=score>=85?"Kitchen legend in the making!":score>=60?"A strong shift, Chef!":"Your culinary journey has begun!";
    $("resultsLede").textContent=score>=85?"You demonstrated strong first-attempt understanding across the three culinary worlds.":score>=60?"You have built a foundation. Review the debrief and replay to strengthen your mastery.":"Every chef improves through deliberate practice. Review the concepts and try the quest again.";
    $("missionResults").innerHTML=MISSION_BANK.map((m,i)=>{const s=missionStats[i],pct=Math.round(s.correct/s.total*100);return `<div class="mission-result"><div><strong>${m.emoji} ${m.name}</strong><small>${s.correct} of ${s.total} challenges correct on first attempt · ${badgeUnlocks.has(m.id)?"Badge earned":"Badge not earned yet"}</small></div><b>${pct}%</b></div>`;}).join("");
    confetti(score>=60?70:25);soundSequence(score>=85?[523,659,784,1046]:[392,494,587]);
  }
  function confetti(count){const colors=["#a68aff","#ff83c4","#74f0c0","#ffd479","#ffffff"];for(let i=0;i<count;i++){const el=document.createElement("i");el.className="confetti";el.style.left=Math.random()*100+"vw";el.style.background=colors[i%colors.length];el.style.animationDelay=Math.random()*.5+"s";el.style.transform=`rotate(${Math.random()*180}deg)`;document.body.append(el);setTimeout(()=>el.remove(),2300);}}
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
})();
