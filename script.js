const stages = [
  {
    title:"第 1 關：先定義顧客與需求",
    prompt:"你的小組第一步應該做什麼，才算是在「規劃品質」？",
    concept:"規劃品質的第一步不是開拍，而是確認誰是利害關係人、他們真正需要什麼。品質不是最高級，而是符合需求。",
    options:[
      {title:"直接拍一支最酷的影片",desc:"先追求視覺效果，其他之後再說。",score:-5,risk:15,type:"bad",fb:"這是常見陷阱。高規格不等於高品質；如果沒對準受眾，拍得再酷也可能無效。",pick:"直接拍攝"},
      {title:"先訪問 5 位大一學生",desc:"了解他們為什麼會或不會參加 AI 講座。",score:20,risk:-15,type:"good",fb:"正確。先理解需求，才能定義品質標準。這就是從顧客/受眾需求出發。",pick:"訪問受眾"},
      {title:"請 AI 直接產出腳本",desc:"把活動資訊丟給 AI，請它一次完成。",score:5,risk:5,type:"ok",fb:"AI 可以協助，但不能取代需求理解。沒有受眾洞察，AI 只會產出一般化腳本。",pick:"AI 產腳本"},
      {title:"先問老師喜歡什麼風格",desc:"只要老師喜歡，應該就算品質好。",score:8,risk:0,type:"ok",fb:"老師是利害關係人之一，但不是唯一。真正品質要同時看目標受眾、專案目的與驗收標準。",pick:"詢問老師"}
    ]
  },
  {
    title:"第 2 關：選擇品質標準",
    prompt:"請選出最適合這個短影音專案的品質標準組合。",
    concept:"品質標準要能對應專案目的。傳播專案的品質常包含：清楚、正確、吸引、平台適配、可行動、倫理安全。",
    options:[
      {title:"畫質 4K、轉場華麗、配樂很炸",desc:"把製作規格拉到最高。",score:5,risk:10,type:"ok",fb:"這些可能加分，但不是核心。手機拍攝也能高品質，關鍵是是否符合需求。",pick:"高規格視覺"},
      {title:"主題清楚、資料正確、前 3 秒能吸引、報名資訊明確",desc:"每一項都能對應傳播目標。",score:22,risk:-15,type:"good",fb:"正確。這組標準能讓團隊判斷作品是否真的有效，而不是只看感覺。",pick:"清楚正確有效"},
      {title:"影片越長越完整",desc:"資訊越多，品質越好。",score:-8,risk:15,type:"bad",fb:"不一定。短影音要控制認知負荷；資訊太多可能降低完播率與理解度。",pick:"追求完整"},
      {title:"全部交給平台演算法決定",desc:"有流量就是品質好。",score:-10,risk:20,type:"bad",fb:"流量是結果指標之一，不等於品質本身。高流量但誤導或錯誤，仍然是低品質。",pick:"只看流量"}
    ]
  },
  {
    title:"第 3 關：設定品質指標",
    prompt:"品質標準不能只寫口號。你會怎麼把它變成可檢查的指標？",
    concept:"品質指標要可觀察、可測量、可檢查。規劃品質時要先決定如何驗收，而不是做完才憑感覺評分。",
    options:[
      {title:"大家覺得不錯就好",desc:"用小組成員直覺判斷。",score:-8,risk:18,type:"bad",fb:"太模糊。品質管理要避免只憑感覺，必須把標準轉成指標。",pick:"憑感覺"},
      {title:"完成影片就算達標",desc:"有交件就是品質合格。",score:-5,risk:15,type:"bad",fb:"完成不等於做好。交付物存在，只代表任務完成，不代表符合品質要求。",pick:"只看完成"},
      {title:"開頭 3 秒主題辨識、字幕錯誤 0、報名資訊完整、試看者能說出重點",desc:"把標準轉成檢核項目。",score:24,risk:-16,type:"good",fb:"正確。這是傳播專案最實用的品質指標設計。",pick:"可檢查指標"},
      {title:"只看按讚數",desc:"讚越多代表品質越好。",score:2,risk:8,type:"ok",fb:"按讚可以參考，但太單一。要搭配完播率、留言品質、報名轉換與內容查證。",pick:"只看按讚"}
    ]
  },
  {
    title:"第 4 關：成本－效益與最適品質",
    prompt:"小組想花 3 天做動畫特效，但會壓縮查證、試看與修改時間。你怎麼決策？",
    concept:"規劃品質不是追求最高品質，而是追求最適品質。要評估品質活動的成本與效益，避免把資源花在不影響目標的地方。",
    options:[
      {title:"特效越多越專業，全部投入特效",desc:"把時間都花在視覺效果。",score:-6,risk:18,type:"bad",fb:"這是把等級誤當品質。若特效不直接提升理解與報名，可能造成重工風險。",pick:"全部特效"},
      {title:"保留基本視覺，優先查證、試看與修改",desc:"把資源放在影響品質的關鍵活動。",score:24,risk:-15,type:"good",fb:"正確。這就是最適品質：把有限資源投入最能降低錯誤、提升效果的地方。",pick:"最適品質"},
      {title:"乾脆都不要設計",desc:"只要資訊正確就好。",score:4,risk:8,type:"ok",fb:"資訊正確是基本品質，但短影音仍需要一定程度的吸引力與平台適配。",pick:"最低成本"},
      {title:"問 AI 要不要做特效",desc:"AI 說做就做。",score:0,risk:10,type:"bad",fb:"AI 可提供建議，但成本效益判斷應回到專案目標、受眾需求與限制。",pick:"AI 代決策"}
    ]
  },
  {
    title:"第 5 關：建立品質檢核表",
    prompt:"發布前 30 分鐘，你最需要哪一種品質工具？",
    concept:"傳播管理最常用的品質工具是檢核表。它能把經驗變成流程，降低漏檢、錯字、錯誤資訊、侵權與平台格式錯誤。",
    options:[
      {title:"發布前檢核表",desc:"字幕、來源、音量、比例、CTA、版權、AI 查證逐項確認。",score:24,risk:-20,type:"good",fb:"正確。檢核表是媒體製作最實用的品質管理工具。",pick:"檢核表"},
      {title:"等發布後看留言再說",desc:"先上架，出事再修。",score:-10,risk:25,type:"bad",fb:"這會把品質成本轉成外部失敗成本。錯誤被受眾發現，代價通常更高。",pick:"事後修正"},
      {title:"只請剪輯同學自己確認",desc:"自己做的人最了解。",score:2,risk:10,type:"ok",fb:"製作者需要自檢，但最好加上第二人審查，避免盲點。",pick:"自我確認"},
      {title:"只檢查畫面比例",desc:"平台格式對了就可以。",score:0,risk:12,type:"bad",fb:"格式只是其中一項。內容正確、版權、CTA、AI 查證也都需要檢查。",pick:"只看格式"}
    ]
  },
  {
    title:"第 6 關：AI 時代的品質紅旗",
    prompt:"AI 幫你產出了一段很順的旁白，但裡面提到一個『研究指出』，沒有來源。你怎麼處理？",
    concept:"AI 時代的品質管理要新增可查證性、透明性、人工審查與責任歸屬。AI 讓產出變快，但也讓看似完整的錯誤更容易出現。",
    options:[
      {title:"刪除或查到來源後再使用",desc:"沒有來源就不當成事實。",score:24,risk:-20,type:"good",fb:"正確。AI 內容品質的核心是查證，不是文字順不順。",pick:"查證AI"},
      {title:"AI 應該不會亂說，直接用",desc:"語氣自然就代表可信。",score:-15,risk:30,type:"bad",fb:"這是 AI 時代最大的品質風險：看起來正確但其實不可查證。",pick:"直接相信AI"},
      {title:"改成『有人說』就好",desc:"模糊來源避免被查。",score:-12,risk:25,type:"bad",fb:"這會降低內容可信度，也可能形成誤導。",pick:"模糊來源"},
      {title:"保留，但在內部註記 AI 產生",desc:"只要小組知道即可。",score:4,risk:12,type:"ok",fb:"註記有幫助，但仍不夠。對外內容若作為事實陳述，必須查證。",pick:"內部註記"}
    ]
  }
];

let current = 0;
let score = 0;
let risk = 50;
let choices = [];

function startGame(){
  document.querySelector(".setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  renderStage();
}

function renderStage(){
  const s = stages[current];
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
  choices.push({stage:s.title, choice:o.title, pick:o.pick, feedback:o.fb});
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
  current++;
  if(current >= stages.length){
    showResult();
  }else{
    renderStage();
  }
}

function showResult(){
  document.getElementById("game").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  const level = score >= 110 ? "品質規劃高手" : score >= 75 ? "品質規劃合格製作人" : "需要補強的救火隊";
  const riskText = risk <= 25 ? "重工風險低" : risk <= 55 ? "重工風險中等" : "重工風險偏高";
  document.getElementById("resultSummary").innerHTML = `
    <p><span class="tag">${level}</span><span class="tag">${riskText}</span><span class="tag">品質分數 ${score}</span></p>
    <table class="plan-table">
      <tr><th>品質規劃元素</th><th>你的學習重點</th></tr>
      <tr><td>需求</td><td>品質要從受眾與利害關係人需求開始。</td></tr>
      <tr><td>標準</td><td>品質標準要對應專案目的，而不是追求最高規格。</td></tr>
      <tr><td>指標</td><td>標準必須轉成可檢查、可測量的指標。</td></tr>
      <tr><td>成本效益</td><td>最適品質比最高品質更重要。</td></tr>
      <tr><td>檢核</td><td>發布前檢核表能降低錯誤與重工。</td></tr>
      <tr><td>AI 品質</td><td>AI 產出要查證、審查、標示責任。</td></tr>
    </table>
    <h3>你的小組選擇紀錄</h3>
    <pre>${choices.map((c,i)=>`${i+1}. ${c.stage}\n選擇：${c.choice}\n回饋：${c.feedback}`).join("\n\n")}</pre>
  `;
}

function downloadPlan(){
  const content = `規劃品質救援任務｜小組品質計畫

品質分數：${score}
重工風險：${risk}%

三個最重要觀念：
1. 品質不是最高級，而是符合需求。
2. 品質不是最後檢查，而是一開始就要規劃。
3. 品質不是憑感覺，而是用標準、指標與檢核工具管理。

小組選擇紀錄：
${choices.map((c,i)=>`${i+1}. ${c.stage}
選擇：${c.choice}
回饋：${c.feedback}`).join("\n\n")}

發布前品質檢核表：
□ 主題是否清楚
□ 資料是否正確且可查證
□ 前 3 秒是否能吸引目標受眾
□ 字幕是否正確
□ 聲音與畫面是否清楚
□ 平台比例與長度是否正確
□ 報名資訊與 CTA 是否明確
□ 圖片、音樂、字體是否有授權
□ AI 生成內容是否經人工查證
□ 是否有可能造成誤解、偏見或倫理風險
`;
  const blob = new Blob([content], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "小組品質管理計畫.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function restartGame(){
  current = 0; score = 0; risk = 50; choices = [];
  document.getElementById("result").classList.add("hidden");
  document.querySelector(".setup").classList.remove("hidden");
}
