const stages = [
  {caseName:"第一關｜AI 素養短影音", title:"1-1 先定義顧客與需求", type:"quiz", prompt:"你的小組第一步應該做什麼，才算是在「規劃品質」？", concept:"規劃品質的第一步不是開拍，而是確認利害關係人、使用情境與真正需求。品質不是最高級，而是符合需求。", options:[
    {title:"直接拍一支最酷的影片",desc:"先追求視覺效果，其他之後再說。",score:-5,risk:15,type:"bad",fb:"高規格不等於高品質；如果沒對準受眾，拍得再酷也可能無效。"},
    {title:"先訪問 5 位大一學生",desc:"了解他們為什麼會或不會參加 AI 講座。",score:20,risk:-15,type:"good",fb:"正確。先理解需求，才能定義品質標準。"},
    {title:"請 AI 直接產出腳本",desc:"把活動資訊丟給 AI，請它一次完成。",score:5,risk:5,type:"ok",fb:"AI 可以協助，但不能取代需求理解。沒有受眾洞察，AI 只會產出一般化腳本。"},
    {title:"先問老師喜歡什麼風格",desc:"只要老師喜歡，應該就算品質好。",score:8,risk:0,type:"ok",fb:"老師是利害關係人之一，但不是唯一。真正品質要同時看目標受眾、專案目的與驗收標準。"}
  ]},
  {caseName:"第一關｜AI 素養短影音", title:"1-2 選擇品質標準", type:"quiz", prompt:"請選出最適合這個短影音專案的品質標準組合。", concept:"品質標準要能對應專案目的。傳播專案的品質常包含：清楚、正確、吸引、平台適配、可行動、倫理安全。", options:[
    {title:"畫質 4K、轉場華麗、配樂很炸",desc:"把製作規格拉到最高。",score:5,risk:10,type:"ok",fb:"這些可能加分，但不是核心。手機拍攝也能高品質，關鍵是是否符合需求。"},
    {title:"主題清楚、資料正確、前 3 秒能吸引、報名資訊明確",desc:"每一項都能對應傳播目標。",score:22,risk:-15,type:"good",fb:"正確。這組標準能讓團隊判斷作品是否真的有效，而不是只看感覺。"},
    {title:"影片越長越完整",desc:"資訊越多，品質越好。",score:-8,risk:15,type:"bad",fb:"不一定。短影音要控制認知負荷；資訊太多可能降低完播率與理解度。"},
    {title:"全部交給平台演算法決定",desc:"有流量就是品質好。",score:-10,risk:20,type:"bad",fb:"流量是結果指標之一，不等於品質本身。高流量但誤導或錯誤，仍然是低品質。"}
  ]},
  {caseName:"第一關｜AI 素養短影音", title:"1-3 設定品質指標", type:"quiz", prompt:"品質標準不能只寫口號。你會怎麼把它變成可檢查的指標？", concept:"品質指標要可觀察、可測量、可檢查。規劃品質時要先決定如何驗收，而不是做完才憑感覺評分。", options:[
    {title:"大家覺得不錯就好",desc:"用小組成員直覺判斷。",score:-8,risk:18,type:"bad",fb:"太模糊。品質管理要避免只憑感覺，必須把標準轉成指標。"},
    {title:"完成影片就算達標",desc:"有交件就是品質合格。",score:-5,risk:15,type:"bad",fb:"完成不等於做好。交付物存在，只代表任務完成，不代表符合品質要求。"},
    {title:"開頭 3 秒主題辨識、字幕錯誤 0、報名資訊完整、試看者能說出重點",desc:"把標準轉成檢核項目。",score:24,risk:-16,type:"good",fb:"正確。這是傳播專案最實用的品質指標設計。"},
    {title:"只看按讚數",desc:"讚越多代表品質越好。",score:2,risk:8,type:"ok",fb:"按讚可以參考，但太單一。要搭配完播率、留言品質、報名轉換與內容查證。"}
  ]},
  {caseName:"第一關｜AI 素養短影音", title:"1-4 互動工具：發布前檢核表", type:"checklist", prompt:"請勾選你認為『發布前一定要檢查』的項目。你不需要全選，而是選出真正能降低品質風險的檢查點。", concept:"檢核表適合用在媒體內容發布前，將容易被遺漏的品質要求轉成逐項確認。重點不是形式，而是避免外部失敗成本。", items:[
    {text:"主題是否在前 3 秒內清楚出現",good:true,why:"這直接影響短影音的理解與留存。"},
    {text:"字幕、姓名、活動日期與報名連結是否正確",good:true,why:"這是基本品質，錯了會直接造成誤導。"},
    {text:"AI 產生的資料、數字或研究說法是否已查到來源",good:true,why:"AI 時代的內容品質一定要檢查可查證性。"},
    {text:"音樂、圖片、字體是否有授權或可合法使用",good:true,why:"版權是發布前必檢項目。"},
    {text:"影片比例、長度、封面與 CTA 是否符合發布平台",good:true,why:"平台適配會影響觸及、理解與轉換。"},
    {text:"老師或客戶是否喜歡每一個轉場特效",good:false,why:"這可能是偏好，不一定是品質底線；不應取代受眾與專案目標。"},
    {text:"每一頁字幕是否都做成最華麗的動畫",good:false,why:"華麗不是必要品質，反而可能降低可讀性。"},
    {text:"影片是否一定要達到 4K 畫質",good:false,why:"對手機社群短影音來說，清楚與可理解通常比 4K 更關鍵。"}
  ]},
  {breakAfter:true, caseName:"第一關｜AI 素養短影音", title:"1-5 AI 品質紅旗", type:"quiz", prompt:"AI 幫你產出了一段很順的旁白，但裡面提到一個『研究指出』，沒有來源。你怎麼處理？", concept:"AI 時代的品質管理要新增可查證性、透明性、人工審查與責任歸屬。AI 讓產出變快，也讓看似完整的錯誤更容易出現。", options:[
    {title:"刪除或查到來源後再使用",desc:"沒有來源就不當成事實。",score:24,risk:-20,type:"good",fb:"正確。AI 內容品質的核心是查證，不是文字順不順。"},
    {title:"AI 應該不會亂說，直接用",desc:"語氣自然就代表可信。",score:-15,risk:30,type:"bad",fb:"這是 AI 時代最大的品質風險：看起來正確但其實不可查證。"},
    {title:"改成『有人說』就好",desc:"模糊來源避免被查。",score:-12,risk:25,type:"bad",fb:"這會降低內容可信度，也可能形成誤導。"},
    {title:"保留，但在內部註記 AI 產生",desc:"只要小組知道即可。",score:4,risk:12,type:"ok",fb:"註記有幫助，但仍不夠。對外內容若作為事實陳述，必須查證。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-1 複雜專案的品質邊界", type:"quiz", prompt:"你要在四週內辦理『校園 AI 素養週』，包含講座、攤位、社群宣傳、報名、現場動線與成果報告。你會先規劃哪件事？", concept:"專案越複雜，越不能只從活動內容開始。要先界定品質邊界：哪些交付物、哪些利害關係人、哪些驗收條件。", options:[
    {title:"先找最有名的講者",desc:"名氣夠大，活動品質自然好。",score:4,risk:12,type:"ok",fb:"講者是品質的一部分，但不是全部。若報名流程、現場動線、宣傳訊息出錯，整體品質仍會失敗。"},
    {title:"先列出交付物與利害關係人",desc:"講座、攤位、宣傳、報名、現場體驗、成果報告，各自對誰負責。",score:26,risk:-18,type:"good",fb:"正確。複雜專案要先把品質對象拆開，否則很容易只顧某一部分。"},
    {title:"先做漂亮主視覺",desc:"視覺一出來，大家比較有感。",score:2,risk:15,type:"bad",fb:"主視覺重要，但太早進入設計，可能讓專案忽略需求、流程與驗收。"},
    {title:"先開一個群組，大家想到什麼就丟",desc:"資訊流動越快越好。",score:-2,risk:18,type:"bad",fb:"群組不是品質規劃。沒有標準與分工，溝通只會變成雜訊。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-2 衝突需求的取捨", type:"quiz", prompt:"學生希望活動好玩，老師希望內容正確，學校希望有成果數據，贊助單位希望品牌露出。你要怎麼設定品質標準？", concept:"傳播管理的品質常是多重標準，不是單一顧客說了算。規劃品質要把不同利害關係人的期待轉成可管理的標準。", options:[
    {title:"全部滿足，標準越多越好",desc:"每個人要什麼都寫進去。",score:-6,risk:18,type:"bad",fb:"標準過多會讓團隊失焦。品質規劃需要排序，不是願望清單。"},
    {title:"只看報名人數",desc:"人多就是成功。",score:0,risk:15,type:"bad",fb:"報名人數是重要指標，但不能代表內容正確、現場體驗、學習成效與品牌安全。"},
    {title:"分成基本品質、成效品質、加分品質",desc:"基本：資訊正確與安全；成效：參與與學習；加分：互動與品牌好感。",score:28,risk:-18,type:"good",fb:"正確。複雜專案要分層設定品質標準，才能同時兼顧底線與亮點。"},
    {title:"以贊助單位為主",desc:"有錢的人決定品質。",score:-5,risk:20,type:"bad",fb:"贊助方重要，但教育活動仍有學習品質、學生體驗與公共責任。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-3 指標設計：不要只看熱鬧", type:"quiz", prompt:"哪一組指標最能判斷 AI 素養週是否有品質？", concept:"好的品質指標要同時包含輸入、過程、輸出與結果。傳播專案不能只看表面熱度，也要看理解、行動、風險與改善。", options:[
    {title:"現場照片看起來熱鬧、貼文按讚很多",desc:"方便呈現，也很直觀。",score:4,risk:12,type:"ok",fb:"可以參考，但太表面。熱鬧不代表學習有效，也不代表流程品質穩定。"},
    {title:"報名數、出席率、活動滿意度、學習前後測、社群觸及、問題回報數、成果報告準時交付",desc:"同時看活動、學習、傳播與流程。",score:30,risk:-20,type:"good",fb:"正確。這組指標能把複雜專案拆成可檢查的品質面向。"},
    {title:"老師覺得成功就好",desc:"老師是課程主要負責人。",score:-4,risk:15,type:"bad",fb:"老師判斷重要，但不能取代學生、參與者、學校與贊助方的品質需求。"},
    {title:"活動結束後再想指標",desc:"先把活動辦完比較重要。",score:-10,risk:24,type:"bad",fb:"這是規劃品質失敗。指標若活動後才想，過程中就無法監控與修正。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-4 互動工具：活動流程圖", type:"flowchart", prompt:"請依照品質管理邏輯，安排『校園 AI 素養週』的流程檢查順序。點擊步驟加入流程圖；排錯可以重設。", concept:"流程圖適合用在活動或跨單位專案，因為品質問題常發生在流程交界處。好的流程圖會把每個階段的品質檢查點提前放進流程。", steps:[
    "確認需求與利害關係人",
    "設定品質標準與指標",
    "設計活動流程與分工",
    "審查內容、AI 使用與版權",
    "測試報名系統與現場動線",
    "活動彩排與風險檢查",
    "正式執行與即時問題回報",
    "活動後數據回收與改善報告"
  ], distractors:["先做最炫主視覺","活動後才決定成功指標","出問題再補流程"], correct:["確認需求與利害關係人","設定品質標準與指標","設計活動流程與分工","審查內容、AI 使用與版權","測試報名系統與現場動線","活動彩排與風險檢查","正式執行與即時問題回報","活動後數據回收與改善報告"]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-5 最適品質與成本效益", type:"quiz", prompt:"團隊想加做 AR 互動牆，但會用掉大半預算，並壓縮講者溝通、志工訓練與報名系統測試。你怎麼判斷？", concept:"最適品質不是最炫品質。品質規劃要評估：這項投入是否真的降低風險、提升使用者體驗或達成專案目標。", options:[
    {title:"做 AR，因為看起來最創新",desc:"創新元素越多越好。",score:-8,risk:24,type:"bad",fb:"創新不等於品質。若犧牲基本流程，反而可能造成外部失敗成本。"},
    {title:"先保住基本品質，再評估縮小版互動設計",desc:"優先講者溝通、志工訓練、報名測試；有餘力再做低成本互動。",score:30,risk:-22,type:"good",fb:"正確。最適品質是把資源放在最能影響成功與降低失敗成本的位置。"},
    {title:"完全不要互動",desc:"只要講座內容完整就好。",score:6,risk:5,type:"ok",fb:"可以，但可能犧牲學生參與感。更好的做法是設計低成本但有效的互動。"},
    {title:"請 AI 生成 AR 概念，直接交給同學做",desc:"AI 可以加速創意。",score:-2,risk:18,type:"bad",fb:"AI 可發想，但不能忽略預算、技術可行性、維護與現場風險。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-6 風險與 AI 治理", type:"quiz", prompt:"活動宣傳要使用 AI 生成圖與文案。哪一種品質規劃最完整？", concept:"AI 進入傳播專案後，品質規劃要新增資料來源、偏誤、版權、揭露、人工審查與責任歸屬。", options:[
    {title:"AI 產出快，就大量使用",desc:"速度就是優勢。",score:-12,risk:28,type:"bad",fb:"速度不是品質。AI 圖文可能有錯誤、偏誤、版權與品牌風險。"},
    {title:"建立 AI 使用規則與審查清單",desc:"可用範圍、不可輸入資料、來源查證、人工審稿、視覺一致性與責任人。",score:32,risk:-24,type:"good",fb:"正確。AI 時代的品質規劃要把工具使用納入治理，而不是只看產出效率。"},
    {title:"完全禁止 AI",desc:"避免所有風險。",score:4,risk:8,type:"ok",fb:"可以降低部分風險，但也失去效率與學習機會。更好的做法是規範使用。"},
    {title:"只要標註 AI 生成就好",desc:"透明就能解決問題。",score:2,risk:15,type:"bad",fb:"揭露重要，但不能取代查證、審稿、版權檢查與責任分工。"}
  ]}
];

let current = 0, score = 0, risk = 50;
let choices = [], caseOneChoices = [], flowSelection = [];

function startGame(){
  document.querySelector(".setup").classList.add("hidden");
  document.getElementById("betweenCases").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  renderStage();
}

function renderStage(){
  const s = stages[current];
  document.getElementById("caseLabel").textContent = s.caseName;
  document.getElementById("stageTitle").textContent = s.title;
  document.getElementById("prompt").innerHTML = `<h2>${s.prompt}</h2>`;
  document.getElementById("conceptText").innerHTML = `<p>${s.concept}</p>`;
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
  const container = document.getElementById("options");
  container.innerHTML = "";
  container.className = s.type === "quiz" ? "options" : "activity-area";
  if(s.type === "checklist") renderChecklist(s, container);
  else if(s.type === "flowchart") renderFlowchart(s, container);
  else renderQuiz(s, container);
  updateScore();
}

function renderQuiz(s, container){
  s.options.forEach((o, idx)=>{
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<h4>${o.title}</h4><p>${o.desc}</p>`;
    btn.onclick = ()=>selectOption(idx);
    container.appendChild(btn);
  });
}

function renderChecklist(s, container){
  const intro = document.createElement("div");
  intro.className = "tool-note";
  intro.innerHTML = `<strong>工具任務：建立發布前檢核表</strong><br>勾選後按「送出檢核表」，系統會告訴你哪些是品質底線，哪些只是偏好或炫技。`;
  container.appendChild(intro);
  s.items.forEach((item, idx)=>{
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `<input type="checkbox" value="${idx}"><span>${item.text}</span>`;
    container.appendChild(label);
  });
  const btn = document.createElement("button");
  btn.className = "primary";
  btn.textContent = "送出檢核表";
  btn.onclick = submitChecklist;
  container.appendChild(btn);
}

function submitChecklist(){
  const s = stages[current];
  const checked = Array.from(document.querySelectorAll('.check-item input:checked')).map(x=>Number(x.value));
  let correct = 0, missed = [], over = [];
  s.items.forEach((item, idx)=>{
    if(item.good && checked.includes(idx)) correct++;
    if(item.good && !checked.includes(idx)) missed.push(item);
    if(!item.good && checked.includes(idx)) over.push(item);
  });
  const totalGood = s.items.filter(i=>i.good).length;
  const points = correct * 6 - missed.length * 5 - over.length * 4;
  const riskDelta = missed.length * 8 + over.length * 4 - correct * 3;
  score += points; risk = Math.max(0, Math.min(100, risk + riskDelta));
  const quality = missed.length === 0 && over.length <= 1 ? "good" : missed.length <= 1 ? "ok" : "bad";
  choices.push({caseName:s.caseName, stage:s.title, choice:`勾選 ${checked.length} 項，命中 ${correct}/${totalGood} 個必要檢查`, feedback:"檢核表的價值是把重要但容易漏掉的品質要求固定下來。", type:quality});
  document.querySelectorAll('.check-item input').forEach(x=>x.disabled=true);
  const fb = document.getElementById("feedback");
  fb.innerHTML = `<strong>檢核表回饋：</strong><br>你命中了 ${correct}/${totalGood} 個必要檢查點。${missed.length?`<br><br><strong>漏掉的品質底線：</strong><ul>${missed.map(i=>`<li>${i.text}：${i.why}</li>`).join("")}</ul>`:"<br>必要檢查點完整，重工風險明顯下降。"}${over.length?`<br><strong>可討論但不一定是品質底線：</strong><ul>${over.map(i=>`<li>${i.text}：${i.why}</li>`).join("")}</ul>`:""}`;
  fb.classList.remove("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
  updateScore();
}

function renderFlowchart(s, container){
  flowSelection = [];
  const note = document.createElement("div");
  note.className = "tool-note";
  note.innerHTML = `<strong>工具任務：建立活動品質流程圖</strong><br>請依順序點擊流程步驟。流程圖的重點是把檢查點提前放進專案，而不是活動前一天才救火。`;
  container.appendChild(note);
  const board = document.createElement("div"); board.id = "flowBoard"; board.className = "flow-board"; board.innerHTML = `<div class="empty-flow">尚未選擇步驟</div>`; container.appendChild(board);
  const pool = document.createElement("div"); pool.className = "flow-pool";
  shuffle([...s.steps, ...s.distractors]).forEach(step=>{
    const btn = document.createElement("button"); btn.className = "flow-chip"; btn.textContent = step;
    btn.onclick = ()=>{ flowSelection.push(step); btn.disabled=true; renderFlowBoard(); };
    pool.appendChild(btn);
  });
  container.appendChild(pool);
  const actions = document.createElement("div"); actions.className = "flow-actions";
  actions.innerHTML = `<button class="secondary" onclick="resetFlowchart()">重設流程</button> <button class="primary" onclick="submitFlowchart()">送出流程圖</button>`;
  container.appendChild(actions);
}

function renderFlowBoard(){
  const board = document.getElementById("flowBoard");
  if(!flowSelection.length){ board.innerHTML = `<div class="empty-flow">尚未選擇步驟</div>`; return; }
  board.innerHTML = flowSelection.map((x,i)=>`<div class="flow-step"><span>${i+1}</span>${x}</div>`).join(`<div class="flow-arrow">↓</div>`);
}

function resetFlowchart(){ renderStage(); }

function submitFlowchart(){
  const s = stages[current];
  const selectedCore = flowSelection.filter(x=>s.correct.includes(x));
  let orderScore = 0;
  selectedCore.forEach((x,i)=>{ if(x === s.correct[i]) orderScore++; });
  const badPicked = flowSelection.filter(x=>s.distractors.includes(x)).length;
  const missed = s.correct.filter(x=>!flowSelection.includes(x));
  const points = orderScore * 5 - badPicked * 8 - missed.length * 4;
  const riskDelta = missed.length * 7 + badPicked * 10 - orderScore * 3;
  score += points; risk = Math.max(0, Math.min(100, risk + riskDelta));
  const quality = missed.length === 0 && badPicked === 0 && orderScore >= 6 ? "good" : missed.length <= 2 && badPicked <= 1 ? "ok" : "bad";
  choices.push({caseName:s.caseName, stage:s.title, choice:`完成 ${flowSelection.length} 步流程，順序命中 ${orderScore}/${s.correct.length}`, feedback:"流程圖的價值是讓品質檢查點出現在每個關鍵階段，而不是最後補救。", type:quality});
  document.querySelectorAll('.flow-chip').forEach(x=>x.disabled=true);
  const fb = document.getElementById("feedback");
  fb.innerHTML = `<strong>流程圖回饋：</strong><br>順序命中 ${orderScore}/${s.correct.length}。${badPicked?`<br>你放入了 ${badPicked} 個會增加重工風險的步驟。`:""}${missed.length?`<br><br><strong>漏掉的關鍵流程：</strong><ul>${missed.map(x=>`<li>${x}</li>`).join("")}</ul>`:"<br>關鍵流程完整，能把品質檢查提前到專案過程中。"}<br><br><strong>建議流程：</strong><div class="mini-flow">${s.correct.map((x,i)=>`<span>${i+1}. ${x}</span>`).join("<b>→</b>")}</div>`;
  fb.classList.remove("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
  updateScore();
}

function selectOption(idx){
  const s = stages[current], o = s.options[idx];
  score += o.score; risk = Math.max(0, Math.min(100, risk + o.risk));
  choices.push({caseName:s.caseName, stage:s.title, choice:o.title, feedback:o.fb, type:o.type});
  document.querySelectorAll(".option").forEach((el,i)=>{ el.disabled = true; if(i===idx) el.classList.add("selected", o.type); });
  const fb = document.getElementById("feedback");
  fb.innerHTML = `<strong>回饋：</strong>${o.fb}`;
  fb.classList.remove("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
  updateScore();
}

function updateScore(){ document.getElementById("score").textContent = score; document.getElementById("risk").textContent = risk; }
function nextStage(){ if(stages[current].breakAfter){ caseOneChoices = choices.slice(); showCaseOneSummary(); return; } current++; current >= stages.length ? showResult() : renderStage(); }

function showCaseOneSummary(){
  document.getElementById("game").classList.add("hidden"); document.getElementById("betweenCases").classList.remove("hidden");
  document.getElementById("caseOneSummary").innerHTML = `<p><span class="tag">目前品質分數 ${score}</span><span class="tag">目前重工風險 ${risk}%</span></p><div class="summary-grid"><div class="summary-box"><h3>第一關重點</h3><p>短影音專案讓你看到規劃品質的基本流程：先理解受眾，再設定品質標準、品質指標、發布前檢核表與 AI 查證規則。</p></div><div class="summary-box"><h3>第一個工具：檢核表</h3><p>檢核表適合用在發布前，避免字幕、來源、版權、CTA、AI 查證與平台格式等關鍵事項被漏掉。</p></div></div><h3>你的第一關選擇</h3><div class="timeline">${caseOneChoices.map(c=>`<div><strong>${c.stage}</strong><br>選擇：${c.choice}<br><span>${c.feedback}</span></div>`).join("")}</div>`;
}
function continueToCaseTwo(){ current++; document.getElementById("betweenCases").classList.add("hidden"); document.getElementById("game").classList.remove("hidden"); renderStage(); }

function showResult(){
  document.getElementById("game").classList.add("hidden"); document.getElementById("result").classList.remove("hidden");
  const level = score >= 230 ? "品質規劃高手" : score >= 160 ? "品質規劃合格製作人" : "需要補強的救火隊";
  const riskText = risk <= 25 ? "重工風險低" : risk <= 55 ? "重工風險中等" : "重工風險偏高";
  const caseTwoChoices = choices.filter(c=>c.caseName.includes("第二關"));
  document.getElementById("resultSummary").innerHTML = `<p><span class="tag">${level}</span><span class="tag">${riskText}</span><span class="tag">品質分數 ${score}</span><span class="tag">重工風險 ${risk}%</span></p><h3>兩個案例 × 兩個工具</h3><div class="summary-grid"><div class="summary-box"><h3>案例一工具：檢核表</h3><p>適合用在短影音、社群貼文、新聞稿、圖卡發布前。功能是避免漏檢，將品質底線固定成逐項確認。</p></div><div class="summary-box"><h3>案例二工具：流程圖</h3><p>適合用在活動、展覽、跨平台傳播與跨組協作專案。功能是看見流程交界處，提前放入品質檢查點。</p></div></div><h3>專案品質規劃通則</h3><div class="principle-list"><div class="principle"><strong>1. 先定義品質對象</strong>列出交付物、利害關係人與使用情境，才知道要管理什麼品質。</div><div class="principle"><strong>2. 把需求轉成標準</strong>不要只說「要好」，要寫成清楚、正確、可用、安全、準時、平台適配。</div><div class="principle"><strong>3. 把標準轉成指標</strong>標準必須可觀察，例如出席率、滿意度、錯誤數、前後測、問題回報數。</div><div class="principle"><strong>4. 依專案選工具</strong>內容發布用檢核表；跨階段協作用流程圖；問題追因可用魚骨圖。</div><div class="principle"><strong>5. 在流程中設檢查點</strong>品質不是最後驗收，而是在需求、內容、設計、宣傳、現場、成果報告各階段提前檢查。</div><div class="principle"><strong>6. AI 要納入品質治理</strong>管理來源查證、偏誤、版權、隱私、人工審查與責任人。</div></div><h3>傳播管理專案品質規劃表</h3><table class="plan-table"><tr><th>規劃問題</th><th>學生可以怎麼寫</th></tr><tr><td>品質對象</td><td>短影音、活動流程、報名系統、現場體驗、社群貼文、成果報告。</td></tr><tr><td>品質標準</td><td>內容正確、受眾看得懂、流程順暢、平台格式正確、資訊安全、品牌一致。</td></tr><tr><td>品質指標</td><td>報名完成率、出席率、滿意度、完播率、錯誤數、問題回報數、成果交付準時率。</td></tr><tr><td>檢核工具</td><td>檢核表、流程圖、魚骨圖、Kano 模型、風險清單、AI 使用檢查表。</td></tr><tr><td>改善方法</td><td>每週品質檢查、第二人審稿、試看測試、現場彩排、活動後回顧。</td></tr></table><h3>第二關選擇與回饋</h3><div class="timeline">${caseTwoChoices.map(c=>`<div><strong>${c.stage}</strong><br>選擇：${c.choice}<br><span>${c.feedback}</span></div>`).join("")}</div>`;
}

function restartGame(){ current = 0; score = 0; risk = 50; choices = []; caseOneChoices = []; flowSelection = []; document.getElementById("result").classList.add("hidden"); document.getElementById("betweenCases").classList.add("hidden"); document.querySelector(".setup").classList.remove("hidden"); }
function shuffle(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); }
