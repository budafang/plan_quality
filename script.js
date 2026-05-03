const stages = [
  {caseName:"第一關｜AI 素養短影音", title:"1-1 先定義顧客與需求", prompt:"你的小組第一步應該做什麼，才算是在「規劃品質」？", concept:"規劃品質的第一步不是開拍，而是確認利害關係人、使用情境與真正需求。品質不是最高級，而是符合需求。", options:[
    {title:"直接拍一支最酷的影片",desc:"先追求視覺效果，其他之後再說。",score:-5,risk:15,type:"bad",fb:"高規格不等於高品質；如果沒對準受眾，拍得再酷也可能無效。"},
    {title:"先訪問 5 位大一學生",desc:"了解他們為什麼會或不會參加 AI 講座。",score:20,risk:-15,type:"good",fb:"正確。先理解需求，才能定義品質標準。"},
    {title:"請 AI 直接產出腳本",desc:"把活動資訊丟給 AI，請它一次完成。",score:5,risk:5,type:"ok",fb:"AI 可以協助，但不能取代需求理解。沒有受眾洞察，AI 只會產出一般化腳本。"},
    {title:"先問老師喜歡什麼風格",desc:"只要老師喜歡，應該就算品質好。",score:8,risk:0,type:"ok",fb:"老師是利害關係人之一，但不是唯一。真正品質要同時看目標受眾、專案目的與驗收標準。"}
  ]},
  {caseName:"第一關｜AI 素養短影音", title:"1-2 選擇品質標準", prompt:"請選出最適合這個短影音專案的品質標準組合。", concept:"品質標準要能對應專案目的。傳播專案的品質常包含：清楚、正確、吸引、平台適配、可行動、倫理安全。", options:[
    {title:"畫質 4K、轉場華麗、配樂很炸",desc:"把製作規格拉到最高。",score:5,risk:10,type:"ok",fb:"這些可能加分，但不是核心。手機拍攝也能高品質，關鍵是是否符合需求。"},
    {title:"主題清楚、資料正確、前 3 秒能吸引、報名資訊明確",desc:"每一項都能對應傳播目標。",score:22,risk:-15,type:"good",fb:"正確。這組標準能讓團隊判斷作品是否真的有效，而不是只看感覺。"},
    {title:"影片越長越完整",desc:"資訊越多，品質越好。",score:-8,risk:15,type:"bad",fb:"不一定。短影音要控制認知負荷；資訊太多可能降低完播率與理解度。"},
    {title:"全部交給平台演算法決定",desc:"有流量就是品質好。",score:-10,risk:20,type:"bad",fb:"流量是結果指標之一，不等於品質本身。高流量但誤導或錯誤，仍然是低品質。"}
  ]},
  {caseName:"第一關｜AI 素養短影音", title:"1-3 設定品質指標", prompt:"品質標準不能只寫口號。你會怎麼把它變成可檢查的指標？", concept:"品質指標要可觀察、可測量、可檢查。規劃品質時要先決定如何驗收，而不是做完才憑感覺評分。", options:[
    {title:"大家覺得不錯就好",desc:"用小組成員直覺判斷。",score:-8,risk:18,type:"bad",fb:"太模糊。品質管理要避免只憑感覺，必須把標準轉成指標。"},
    {title:"完成影片就算達標",desc:"有交件就是品質合格。",score:-5,risk:15,type:"bad",fb:"完成不等於做好。交付物存在，只代表任務完成，不代表符合品質要求。"},
    {title:"開頭 3 秒主題辨識、字幕錯誤 0、報名資訊完整、試看者能說出重點",desc:"把標準轉成檢核項目。",score:24,risk:-16,type:"good",fb:"正確。這是傳播專案最實用的品質指標設計。"},
    {title:"只看按讚數",desc:"讚越多代表品質越好。",score:2,risk:8,type:"ok",fb:"按讚可以參考，但太單一。要搭配完播率、留言品質、報名轉換與內容查證。"}
  ]},
  {caseName:"第一關｜AI 素養短影音", title:"1-4 建立發布前檢核", prompt:"發布前 30 分鐘，你最需要哪一種品質工具？", concept:"傳播管理最常用的品質工具是檢核表。它能把經驗變成流程，降低漏檢、錯字、錯誤資訊、侵權與平台格式錯誤。", options:[
    {title:"發布前檢核表",desc:"字幕、來源、音量、比例、CTA、版權、AI 查證逐項確認。",score:24,risk:-20,type:"good",fb:"正確。檢核表是媒體製作最實用的品質管理工具。"},
    {title:"等發布後看留言再說",desc:"先上架，出事再修。",score:-10,risk:25,type:"bad",fb:"這會把品質成本轉成外部失敗成本。錯誤被受眾發現，代價通常更高。"},
    {title:"只請剪輯同學自己確認",desc:"自己做的人最了解。",score:2,risk:10,type:"ok",fb:"製作者需要自檢，但最好加上第二人審查，避免盲點。"},
    {title:"只檢查畫面比例",desc:"平台格式對了就可以。",score:0,risk:12,type:"bad",fb:"格式只是其中一項。內容正確、版權、CTA、AI 查證也都需要檢查。"}
  ]},
  {breakAfter:true, caseName:"第一關｜AI 素養短影音", title:"1-5 AI 品質紅旗", prompt:"AI 幫你產出了一段很順的旁白，但裡面提到一個『研究指出』，沒有來源。你怎麼處理？", concept:"AI 時代的品質管理要新增可查證性、透明性、人工審查與責任歸屬。AI 讓產出變快，也讓看似完整的錯誤更容易出現。", options:[
    {title:"刪除或查到來源後再使用",desc:"沒有來源就不當成事實。",score:24,risk:-20,type:"good",fb:"正確。AI 內容品質的核心是查證，不是文字順不順。"},
    {title:"AI 應該不會亂說，直接用",desc:"語氣自然就代表可信。",score:-15,risk:30,type:"bad",fb:"這是 AI 時代最大的品質風險：看起來正確但其實不可查證。"},
    {title:"改成『有人說』就好",desc:"模糊來源避免被查。",score:-12,risk:25,type:"bad",fb:"這會降低內容可信度，也可能形成誤導。"},
    {title:"保留，但在內部註記 AI 產生",desc:"只要小組知道即可。",score:4,risk:12,type:"ok",fb:"註記有幫助，但仍不夠。對外內容若作為事實陳述，必須查證。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-1 複雜專案的品質邊界", prompt:"你要在四週內辦理『校園 AI 素養週』，包含講座、攤位、社群宣傳、報名、現場動線與成果報告。你會先規劃哪件事？", concept:"專案越複雜，越不能只從活動內容開始。要先界定品質邊界：哪些交付物、哪些利害關係人、哪些驗收條件。", options:[
    {title:"先找最有名的講者",desc:"名氣夠大，活動品質自然好。",score:4,risk:12,type:"ok",fb:"講者是品質的一部分，但不是全部。若報名流程、現場動線、宣傳訊息出錯，整體品質仍會失敗。"},
    {title:"先列出交付物與利害關係人",desc:"講座、攤位、宣傳、報名、現場體驗、成果報告，各自對誰負責。",score:26,risk:-18,type:"good",fb:"正確。複雜專案要先把品質對象拆開，否則很容易只顧某一部分。"},
    {title:"先做漂亮主視覺",desc:"視覺一出來，大家比較有感。",score:2,risk:15,type:"bad",fb:"主視覺重要，但太早進入設計，可能讓專案忽略需求、流程與驗收。"},
    {title:"先開一個群組，大家想到什麼就丟",desc:"資訊流動越快越好。",score:-2,risk:18,type:"bad",fb:"群組不是品質規劃。沒有標準與分工，溝通只會變成雜訊。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-2 衝突需求的取捨", prompt:"學生希望活動好玩，老師希望內容正確，學校希望有成果數據，贊助單位希望品牌露出。你要怎麼設定品質標準？", concept:"傳播管理的品質常是多重標準，不是單一顧客說了算。規劃品質要把不同利害關係人的期待轉成可管理的標準。", options:[
    {title:"全部滿足，標準越多越好",desc:"每個人要什麼都寫進去。",score:-6,risk:18,type:"bad",fb:"標準過多會讓團隊失焦。品質規劃需要排序，不是願望清單。"},
    {title:"只看報名人數",desc:"人多就是成功。",score:0,risk:15,type:"bad",fb:"報名人數是重要指標，但不能代表內容正確、現場體驗、學習成效與品牌安全。"},
    {title:"分成基本品質、成效品質、加分品質",desc:"基本：資訊正確與安全；成效：參與與學習；加分：互動與品牌好感。",score:28,risk:-18,type:"good",fb:"正確。複雜專案要分層設定品質標準，才能同時兼顧底線與亮點。"},
    {title:"以贊助單位為主",desc:"有錢的人決定品質。",score:-5,risk:20,type:"bad",fb:"贊助方重要，但教育活動仍有學習品質、學生體驗與公共責任。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-3 指標設計：不要只看熱鬧", prompt:"哪一組指標最能判斷 AI 素養週是否有品質？", concept:"好的品質指標要同時包含輸入、過程、輸出與結果。傳播專案不能只看表面熱度，也要看理解、行動、風險與改善。", options:[
    {title:"現場照片看起來熱鬧、貼文按讚很多",desc:"方便呈現，也很直觀。",score:4,risk:12,type:"ok",fb:"可以參考，但太表面。熱鬧不代表學習有效，也不代表流程品質穩定。"},
    {title:"報名數、出席率、活動滿意度、學習前後測、社群觸及、問題回報數、成果報告準時交付",desc:"同時看活動、學習、傳播與流程。",score:30,risk:-20,type:"good",fb:"正確。這組指標能把複雜專案拆成可檢查的品質面向。"},
    {title:"老師覺得成功就好",desc:"老師是課程主要負責人。",score:-4,risk:15,type:"bad",fb:"老師判斷重要，但不能取代學生、參與者、學校與贊助方的品質需求。"},
    {title:"活動結束後再想指標",desc:"先把活動辦完比較重要。",score:-10,risk:24,type:"bad",fb:"這是規劃品質失敗。指標若活動後才想，過程中就無法監控與修正。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-4 設計品質檢查點", prompt:"活動專案容易在不同階段出錯。哪一種檢查點設計最合理？", concept:"品質不是最後驗收，而是沿著流程設計檢查點。越早發現問題，重工成本越低。", options:[
    {title:"活動前一天總檢查",desc:"集中火力，最後一次確認。",score:2,risk:18,type:"bad",fb:"前一天才檢查太晚。若講者、場地、報名資料、物資或宣傳出問題，修正成本會很高。"},
    {title:"每週檢查一個關鍵交付物",desc:"第 1 週需求與標準，第 2 週內容與宣傳，第 3 週流程與物資，第 4 週彩排與風險。",score:30,risk:-22,type:"good",fb:"正確。這就是把品質規劃放進專案流程，而不是最後才檢查。"},
    {title:"讓各組自己檢查",desc:"各組最了解自己的工作。",score:8,risk:5,type:"ok",fb:"自檢需要，但跨組整合也要檢查。活動專案常壞在交界處。"},
    {title:"只檢查講座內容",desc:"內容正確最重要。",score:0,risk:15,type:"bad",fb:"內容正確是基本品質，但活動還有現場、宣傳、動線、報名、互動與成果品質。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-5 最適品質與成本效益", prompt:"團隊想加做 AR 互動牆，但會用掉大半預算，並壓縮講者溝通、志工訓練與報名系統測試。你怎麼判斷？", concept:"最適品質不是最炫品質。品質規劃要評估：這項投入是否真的降低風險、提升使用者體驗或達成專案目標。", options:[
    {title:"做 AR，因為看起來最創新",desc:"創新元素越多越好。",score:-8,risk:24,type:"bad",fb:"創新不等於品質。若犧牲基本流程，反而可能造成外部失敗成本。"},
    {title:"先保住基本品質，再評估縮小版互動設計",desc:"優先講者溝通、志工訓練、報名測試；有餘力再做低成本互動。",score:30,risk:-22,type:"good",fb:"正確。最適品質是把資源放在最能影響成功與降低失敗成本的位置。"},
    {title:"完全不要互動",desc:"只要講座內容完整就好。",score:6,risk:5,type:"ok",fb:"可以，但可能犧牲學生參與感。更好的做法是設計低成本但有效的互動。"},
    {title:"請 AI 生成 AR 概念，直接交給同學做",desc:"AI 可以加速創意。",score:-2,risk:18,type:"bad",fb:"AI 可發想，但不能忽略預算、技術可行性、維護與現場風險。"}
  ]},
  {caseName:"第二關｜校園 AI 素養週", title:"2-6 風險與 AI 治理", prompt:"活動宣傳要使用 AI 生成圖與文案。哪一種品質規劃最完整？", concept:"AI 進入傳播專案後，品質規劃要新增資料來源、偏誤、版權、揭露、人工審查與責任歸屬。", options:[
    {title:"AI 產出快，就大量使用",desc:"速度就是優勢。",score:-12,risk:28,type:"bad",fb:"速度不是品質。AI 圖文可能有錯誤、偏誤、版權與品牌風險。"},
    {title:"建立 AI 使用規則與審查清單",desc:"可用範圍、不可輸入資料、來源查證、人工審稿、視覺一致性與責任人。",score:32,risk:-24,type:"good",fb:"正確。AI 時代的品質規劃要把工具使用納入治理，而不是只看產出效率。"},
    {title:"完全禁止 AI",desc:"避免所有風險。",score:4,risk:8,type:"ok",fb:"可以降低部分風險，但也失去效率與學習機會。更好的做法是規範使用。"},
    {title:"只要標註 AI 生成就好",desc:"透明就能解決問題。",score:2,risk:15,type:"bad",fb:"揭露重要，但不能取代查證、審稿、版權檢查與責任分工。"}
  ]}
];

let current = 0;
let score = 0;
let risk = 50;
let choices = [];
let caseOneChoices = [];

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
  const options = document.getElementById("options");
  options.innerHTML = "";
  s.options.forEach((o, idx)=>{
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<h4>${o.title}</h4><p>${o.desc}</p>`;
    btn.onclick = ()=>selectOption(idx);
    options.appendChild(btn);
  });
  updateScore();
}

function selectOption(idx){
  const s = stages[current];
  const o = s.options[idx];
  score += o.score;
  risk += o.risk;
  risk = Math.max(0, Math.min(100, risk));
  choices.push({caseName:s.caseName, stage:s.title, choice:o.title, feedback:o.fb, type:o.type});
  document.querySelectorAll(".option").forEach((el,i)=>{
    el.disabled = true;
    if(i===idx) el.classList.add("selected", o.type);
  });
  const fb = document.getElementById("feedback");
  fb.innerHTML = `<strong>回饋：</strong>${o.fb}`;
  fb.classList.remove("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
  updateScore();
}

function updateScore(){
  document.getElementById("score").textContent = score;
  document.getElementById("risk").textContent = risk;
}

function nextStage(){
  if(stages[current].breakAfter){
    caseOneChoices = choices.slice();
    showCaseOneSummary();
    return;
  }
  current++;
  if(current >= stages.length){ showResult(); } else { renderStage(); }
}

function showCaseOneSummary(){
  document.getElementById("game").classList.add("hidden");
  document.getElementById("betweenCases").classList.remove("hidden");
  document.getElementById("caseOneSummary").innerHTML = `
    <p><span class="tag">目前品質分數 ${score}</span><span class="tag">目前重工風險 ${risk}%</span></p>
    <div class="summary-grid">
      <div class="summary-box"><h3>第一關重點</h3><p>短影音專案讓你看到規劃品質的基本流程：先理解受眾，再設定品質標準、品質指標、檢核表與 AI 查證規則。</p></div>
      <div class="summary-box"><h3>接下來的挑戰</h3><p>第二關不只是做內容，而是辦一個跨單位活動。品質對象會變多，標準會衝突，流程也更容易在交界處出錯。</p></div>
    </div>
    <h3>你的第一關選擇</h3>
    <div class="timeline">${caseOneChoices.map(c=>`<div><strong>${c.stage}</strong><br>選擇：${c.choice}<br><span>${c.feedback}</span></div>`).join("")}</div>
  `;
}

function continueToCaseTwo(){
  current++;
  document.getElementById("betweenCases").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  renderStage();
}

function showResult(){
  document.getElementById("game").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  const level = score >= 230 ? "品質規劃高手" : score >= 160 ? "品質規劃合格製作人" : "需要補強的救火隊";
  const riskText = risk <= 25 ? "重工風險低" : risk <= 55 ? "重工風險中等" : "重工風險偏高";
  const caseTwoChoices = choices.filter(c=>c.caseName.includes("第二關"));
  document.getElementById("resultSummary").innerHTML = `
    <p><span class="tag">${level}</span><span class="tag">${riskText}</span><span class="tag">品質分數 ${score}</span><span class="tag">重工風險 ${risk}%</span></p>
    <h3>兩關之後，你應該帶走的專案品質規劃通則</h3>
    <div class="principle-list">
      <div class="principle"><strong>1. 先定義品質對象</strong>品質不是抽象口號。先列出交付物、利害關係人與使用情境，才知道要管理什麼品質。</div>
      <div class="principle"><strong>2. 把需求轉成標準</strong>不要只說「要好」。要寫成清楚、正確、可用、安全、準時、平台適配、受眾能理解等標準。</div>
      <div class="principle"><strong>3. 把標準轉成指標</strong>標準必須可觀察，例如報名完成率、出席率、滿意度、錯誤數、前後測、問題回報數、準時交付。</div>
      <div class="principle"><strong>4. 在流程中設檢查點</strong>品質不是最後驗收，而是在需求、內容、設計、宣傳、現場、發布、成果報告各階段提前檢查。</div>
      <div class="principle"><strong>5. 追求最適品質</strong>資源有限時，先保住基本品質，再做加分亮點。最炫的功能不一定最有品質。</div>
      <div class="principle"><strong>6. AI 要納入品質治理</strong>AI 不是外掛工具，而是品質風險來源之一。要管理來源查證、偏誤、版權、隱私、人工審查與責任人。</div>
    </div>
    <h3>傳播管理專案品質規劃表</h3>
    <table class="plan-table">
      <tr><th>規劃問題</th><th>學生可以怎麼寫</th></tr>
      <tr><td>品質對象</td><td>短影音、活動流程、報名系統、現場體驗、社群貼文、成果報告。</td></tr>
      <tr><td>品質標準</td><td>內容正確、受眾看得懂、流程順暢、平台格式正確、資訊安全、品牌一致。</td></tr>
      <tr><td>品質指標</td><td>報名完成率、出席率、滿意度、完播率、錯誤數、問題回報數、成果交付準時率。</td></tr>
      <tr><td>檢核工具</td><td>檢核表、流程圖、魚骨圖、Kano 模型、風險清單、AI 使用檢查表。</td></tr>
      <tr><td>改善方法</td><td>每週品質檢查、第二人審稿、試看測試、現場彩排、活動後回顧。</td></tr>
    </table>
    <h3>第二關選擇與回饋</h3>
    <div class="timeline">${caseTwoChoices.map(c=>`<div><strong>${c.stage}</strong><br>選擇：${c.choice}<br><span>${c.feedback}</span></div>`).join("")}</div>
  `;
}

function restartGame(){
  current = 0; score = 0; risk = 50; choices = []; caseOneChoices = [];
  document.getElementById("result").classList.add("hidden");
  document.getElementById("betweenCases").classList.add("hidden");
  document.querySelector(".setup").classList.remove("hidden");
}
