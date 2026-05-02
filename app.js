const MOVE_DATE = "2026-05-31";
const STORAGE_KEY = "moriguchi-move-tasks-v1";

export const kanbanColumns = [
  { id: "now", title: "今すぐ", color: "#b4324a" },
  { id: "doing", title: "進行中", color: "#a55f00" },
  { id: "waiting", title: "待ち", color: "#3a6ea5" },
  { id: "next", title: "次", color: "#1f6f64" },
  { id: "done", title: "完了", color: "#68736f" }
];

const categories = [
  "調査",
  "住居・契約",
  "引っ越し",
  "退職・仕事",
  "守口の仕事探し",
  "役所手続き",
  "ライフライン",
  "住所変更",
  "荷造り",
  "家具・家電",
  "バイク・配達",
  "お金・家計",
  "クリニック移行",
  "荒川区でやる",
  "守口市でやる"
];

const currentFacts = [
  ["派遣退職", "退職は1か月前連絡が必要。5月31日退職なら、今すぐ派遣会社へ連絡期限を確認する。"],
  ["住居", "守口で住みたい部屋は内見済み。現在は保証会社の審査中。"],
  ["次の山場", "審査通過後は初期費用、契約、鍵受け取り、ライフライン開始を一気に進める。"]
];

const seedTasks = [
  ["引っ越し全体の予算上限を決める", "お金・家計", "2026-04-30", "high", "初期費用、移動費、家具家電、生活費1か月分を分ける"],
  ["5月末までの現金繰り表を作る", "お金・家計", "2026-04-30", "high", "家賃、初期費用、退職後の収入空白、移動費を週単位で見る"],
  ["派遣会社へ退職予定の連絡期限を確認する", "退職・仕事", "2026-04-30", "high", "1か月前連絡が必要。5月31日退職なら最優先で確認"],
  ["派遣元と派遣先への退職連絡の順番を確認する", "退職・仕事", "2026-04-30", "high", "契約上どちらへ先に伝えるか、メールか電話か"],
  ["保証会社の審査連絡にすぐ出られる準備をする", "住居・契約", "2026-04-30", "high", "本人確認電話、勤務先確認、緊急連絡先への電話に注意"],
  ["保証会社審査に必要な追加書類を確認する", "住居・契約", "2026-04-30", "high", "身分証、収入証明、在籍情報、緊急連絡先"],
  ["守口市で住む候補エリアを3つに絞る", "調査", "2026-05-01", "high", "駅、スーパー、配達稼働、クリニック通いやすさを見る"],
  ["保証会社の審査結果予定日を不動産会社に確認する", "住居・契約", "2026-05-01", "high", "通過後に契約・初期費用・入居日をすぐ決める"],
  ["審査通過後の初期費用支払い期限を確認する", "住居・契約", "2026-05-01", "high", "振込先、金額、期限、分割可否、領収書"],
  ["審査が落ちた場合の第二候補を1件だけ確保する", "住居・契約", "2026-05-01", "medium", "時間切れを避けるため、代替物件を最低1つ持つ"],
  ["守口市の生活地図を作る", "調査", "2026-05-01", "medium", "駅、スーパー、ドラッグストア、区役所、病院、駐輪場"],
  ["守口市のごみ出しルールを確認する", "調査", "2026-05-02", "medium", "曜日、分別、粗大ごみ、資源ごみ、指定袋の有無"],
  ["新居周辺の買い物ルートを確認する", "調査", "2026-05-02", "low", "スーパー、100均、ホームセンター、ドラッグストア"],
  ["大阪到着日の移動手段を決める", "引っ越し", "2026-05-02", "medium", "新幹線、夜行バス、荷物との分担、到着時間"],
  ["賃貸物件の内見候補を集める", "住居・契約", "2026-05-03", "high", "初期費用、審査条件、入居可能日をメモ"],
  ["賃貸申込に必要な書類を準備する", "住居・契約", "2026-05-03", "high", "身分証、収入証明、緊急連絡先、在籍情報"],
  ["内見時に確認するチェックリストを作る", "住居・契約", "2026-05-03", "medium", "騒音、日当たり、収納、虫、湿気、コンセント、ネット設備"],
  ["初期費用の支払い方法を確認する", "住居・契約", "2026-05-04", "high", "振込期限、カード可否、領収書、鍵渡し条件"],
  ["新居の入居可能日と鍵受け取り方法を確認する", "住居・契約", "2026-05-04", "high", "鍵の場所、本人確認、時間指定、遅れた場合"],
  ["緊急連絡先に賃貸申込の確認が来ることを伝える", "住居・契約", "2026-05-04", "medium", "審査連絡を見落とされないようにする"],
  ["退職日と最終出勤日の相談をする", "退職・仕事", "2026-05-05", "high", "有給、保険、源泉徴収票、離職票の確認"],
  ["退職後にもらう書類リストを作る", "退職・仕事", "2026-05-05", "high", "離職票、源泉徴収票、雇用保険被保険者証、健康保険資格喪失証明"],
  ["有給消化と給与締め日を確認する", "退職・仕事", "2026-05-05", "high", "最後の給与、社会保険料、住民税の控除を確認"],
  ["会社の貸与物と返却日を確認する", "退職・仕事", "2026-05-06", "medium", "PC、社員証、制服、鍵、交通系カード"],
  ["引っ越し業者の見積もりを2社以上取る", "引っ越し", "2026-05-06", "high", "単身パック、バイク・大型荷物、集荷日を確認"],
  ["荷物量の写真を撮って見積もり用にまとめる", "引っ越し", "2026-05-06", "medium", "家具、家電、段ボール予定数、搬出経路"],
  ["粗大ごみ・不用品処分の予約を確認する", "荒川区でやる", "2026-05-07", "high", "回収日が埋まりやすいので早めに見る"],
  ["退去通知が必要な期限を確認する", "荒川区でやる", "2026-05-07", "high", "賃貸契約書の退去予告期間、日割り可否"],
  ["火災保険と保証会社の条件を確認する", "住居・契約", "2026-05-07", "medium", "契約時必須か、自分で選べるか、更新料"],
  ["守口での仕事候補をリスト化する", "守口の仕事探し", "2026-05-08", "medium", "求人サイト、派遣、短期、配達との組み合わせ"],
  ["履歴書・職務経歴書を大阪用に更新する", "守口の仕事探し", "2026-05-08", "medium", "住所欄は移住予定で書ける形にする"],
  ["面接可能な日程をカレンダーに仮押さえする", "守口の仕事探し", "2026-05-08", "medium", "移動・内見・荷造りと重ならないようにする"],
  ["ハローワーク利用の必要性を確認する", "守口の仕事探し", "2026-05-09", "low", "失業給付、職業相談、必要書類の確認"],
  ["収入源の組み合わせ案を3パターン作る", "お金・家計", "2026-05-09", "medium", "本業、短期バイト、配達、貯金取り崩しの組み合わせ"],
  ["最低生活費を1か月分で試算する", "お金・家計", "2026-05-09", "high", "家賃、食費、通信、交通、医療、保険、配達経費"],
  ["引っ越し後2週間の食費・日用品費を確保する", "お金・家計", "2026-05-10", "medium", "初期費用で現金が薄くならないようにする"],
  ["Uber Eats・出前館の稼働条件を確認する", "バイク・配達", "2026-05-09", "medium", "レンタルバイク、保険、必要書類、エリア需要"],
  ["レンタルバイク会社を比較する", "バイク・配達", "2026-05-10", "medium", "月額、任意保険、距離制限、メンテ、駐輪場所"],
  ["配達バッグ・スマホホルダー等の備品を確認する", "バイク・配達", "2026-05-10", "low", "雨具、モバイルバッテリー、保温バッグ、手袋"],
  ["バイク駐輪場の候補を確認する", "バイク・配達", "2026-05-11", "medium", "新居に置けるか、近隣月極、夜間の安全性"],
  ["通院中のクリニックに紹介状を相談する", "クリニック移行", "2026-05-10", "high", "薬、診療情報提供書、次回予約の扱い"],
  ["守口周辺の通院先候補を3件探す", "クリニック移行", "2026-05-11", "high", "診療科、受付時間、予約方法、薬の継続可否"],
  ["引っ越し前に薬の残量を確認する", "クリニック移行", "2026-05-11", "high", "移動直後に切れないようにする"],
  ["保険証切替中の受診方法を確認する", "クリニック移行", "2026-05-12", "medium", "退職後の保険切替と受診タイミングが重なる場合"],
  ["お薬手帳と検査結果を持ち出しバッグに入れる", "クリニック移行", "2026-05-12", "high", "紙とアプリの両方があれば確認"],
  ["新居で必要な家具・家電リストを作る", "家具・家電", "2026-05-12", "medium", "冷蔵庫、洗濯機、電子レンジ、寝具、カーテン"],
  ["家電を新品・中古・レンタルで比較する", "家具・家電", "2026-05-13", "medium", "冷蔵庫、洗濯機、電子レンジ、配送設置込みか"],
  ["最低限すぐ必要な生活用品を分ける", "家具・家電", "2026-05-13", "high", "寝具、照明、カーテン、洗剤、トイレットペーパー、タオル"],
  ["配送日指定できる家具・家電を確認する", "家具・家電", "2026-05-14", "medium", "到着前に届かないようにする"],
  ["新居の採寸メモを作る", "家具・家電", "2026-05-14", "high", "洗濯機置場、冷蔵庫、カーテン、ベッド、搬入口"],
  ["転出届・転入届の流れを確認する", "役所手続き", "2026-05-15", "medium", "荒川区と守口市で必要なものを確認"],
  ["マイナンバーカードの住所変更手順を確認する", "役所手続き", "2026-05-15", "medium", "暗証番号、転入届と同時にできるか確認"],
  ["国民健康保険・年金の扱いを確認する", "役所手続き", "2026-05-16", "high", "退職タイミングと社会保険の切替を確認"],
  ["住民税の支払い方法を確認する", "お金・家計", "2026-05-16", "medium", "退職後に普通徴収へ切り替わる可能性を確認"],
  ["印鑑登録が必要か確認する", "役所手続き", "2026-05-16", "low", "賃貸・契約・車両関係で必要になるか見る"],
  ["免許証・銀行・カードの住所変更リストを作る", "住所変更", "2026-05-17", "medium", "優先度が高いものから並べる"],
  ["本人確認書類の住所ズレ期間を短くする順番を決める", "住所変更", "2026-05-17", "medium", "転入届、マイナンバー、免許証、銀行の順番"],
  ["電気・ガス・水道・ネットの開始日を決める", "ライフライン", "2026-05-18", "high", "入居日と開通工事の要否を見る"],
  ["東京側の電気・ガス・水道停止日を決める", "ライフライン", "2026-05-18", "high", "退去日、立会い、最終精算を確認"],
  ["インターネット回線かモバイル回線か決める", "ライフライン", "2026-05-19", "medium", "工事日が間に合わない場合の代替も考える"],
  ["ガス開栓の立会い予約を確認する", "ライフライン", "2026-05-19", "high", "入居初日にお湯が使えるようにする"],
  ["電球・照明器具の有無を確認する", "家具・家電", "2026-05-19", "medium", "夜に到着して暗い、を避ける"],
  ["郵便転送と主要サービス住所変更を洗い出す", "住所変更", "2026-05-20", "medium", "銀行、カード、携帯、保険、通販、免許"],
  ["携帯キャリア・保険・通販の住所変更を進める", "住所変更", "2026-05-21", "medium", "ログイン情報が必要なものを先に片づける"],
  ["サブスク・会員サービスの住所登録を確認する", "住所変更", "2026-05-21", "low", "Amazon、楽天、配送先、保険、ジム、会員証"],
  ["荷造りの箱と処分品を決める", "荷造り", "2026-05-22", "medium", "売る、捨てる、持っていくを分ける"],
  ["段ボールごとに中身ラベルを付けるルールを決める", "荷造り", "2026-05-22", "medium", "新居ですぐ使う、台所、服、書類など"],
  ["貴重品・重要書類だけ別バッグにまとめる", "荷造り", "2026-05-23", "high", "契約書、身分証、通帳、薬、充電器、印鑑"],
  ["PC・スマホ・充電器の移動方法を決める", "荷造り", "2026-05-23", "high", "仕事探しや連絡が止まらないように手持ちにする"],
  ["引っ越し当日バッグを作る", "荷造り", "2026-05-24", "high", "1泊分、薬、充電器、鍵、現金、タオル、着替え"],
  ["冷凍・冷蔵食品を使い切る計画を作る", "荒川区でやる", "2026-05-24", "medium", "前日までに冷蔵庫を空に近づける"],
  ["荒川区で最後に済ませる用事を確認する", "荒川区でやる", "2026-05-25", "medium", "役所、病院、解約、鍵、粗大ごみ"],
  ["近所や管理会社への退去前連絡を確認する", "荒川区でやる", "2026-05-25", "low", "必要なら挨拶、駐車・搬出時間の連絡"],
  ["退去立会いの日時と鍵返却方法を確認する", "荒川区でやる", "2026-05-26", "high", "原状回復、写真、精算、管理会社連絡"],
  ["退去前の部屋写真を撮る", "荒川区でやる", "2026-05-27", "high", "床、壁、設備、水回り、メーター、鍵返却前"],
  ["新居到着直後の部屋写真を撮る", "守口市でやる", "2026-05-27", "medium", "傷、汚れ、設備不良を早めに記録"],
  ["新居の近隣避難場所を確認する", "守口市でやる", "2026-05-28", "low", "避難所、ハザードマップ、非常用品の置き場所"],
  ["到着初日の買い出しリストを作る", "守口市でやる", "2026-05-28", "medium", "水、食料、洗剤、紙類、ゴミ袋、電池"],
  ["冷蔵庫・洗濯機まわりの前日準備を確認する", "引っ越し", "2026-05-29", "high", "水抜き、霜取り、搬出経路"],
  ["旧居のメーター写真を撮る", "ライフライン", "2026-05-29", "medium", "電気、ガス、水道の最終確認用"],
  ["引っ越し当日のタイムラインを作る", "引っ越し", "2026-05-30", "high", "起床、搬出、移動、鍵、ライフライン、買い出し"],
  ["当日連絡先を1か所にまとめる", "引っ越し", "2026-05-30", "high", "管理会社、引っ越し業者、ガス、家族、クリニック"],
  ["守口到着後3日以内にやることを並べる", "守口市でやる", "2026-05-28", "high", "転入届、買い出し、鍵、ライフライン、近所確認"],
  ["転入届を出す日を決める", "守口市でやる", "2026-06-01", "high", "役所に行く日、必要書類、受付時間"],
  ["新住所での配達アプリ登録情報を更新する", "バイク・配達", "2026-06-02", "medium", "住所、銀行口座、本人確認、稼働エリア"],
  ["近所のコインランドリー・銭湯を確認する", "守口市でやる", "2026-06-02", "low", "洗濯機やガスが遅れた場合の保険"],
  ["大阪での最初の1週間の予定を作る", "守口市でやる", "2026-06-03", "medium", "役所、仕事探し、配達準備、買い物、通院"]
].map(([title, category, due, priority, note], index) => ({
  id: `seed-${index + 1}`,
  title,
  category,
  due,
  priority,
  note,
  status: priority === "high" ? "now" : "next",
  done: false,
  createdAt: new Date().toISOString()
}));

const els =
  typeof document === "undefined"
    ? {}
    : {
        daysLeft: document.querySelector("#daysLeft"),
        todayCount: document.querySelector("#todayCount"),
        weekCount: document.querySelector("#weekCount"),
        openCount: document.querySelector("#openCount"),
        moneyCount: document.querySelector("#moneyCount"),
        taskForm: document.querySelector("#taskForm"),
        taskTitle: document.querySelector("#taskTitle"),
        taskDue: document.querySelector("#taskDue"),
        taskCategory: document.querySelector("#taskCategory"),
        taskPriority: document.querySelector("#taskPriority"),
        taskStatus: document.querySelector("#taskStatus"),
        taskNote: document.querySelector("#taskNote"),
        taskList: document.querySelector("#taskList"),
        taskTemplate: document.querySelector("#taskTemplate"),
        viewTitle: document.querySelector("#viewTitle"),
        currentFacts: document.querySelector("#currentFacts"),
        toggleFacts: document.querySelector("#toggleFacts"),
        toggleTaskForm: document.querySelector("#toggleTaskForm"),
        kanbanBoard: document.querySelector("#kanbanBoard"),
        categoryFilter: document.querySelector("#categoryFilter"),
        categoryGrid: document.querySelector("#categoryGrid"),
        resetSeed: document.querySelector("#resetSeed"),
        exportTasks: document.querySelector("#exportTasks"),
        importTasks: document.querySelector("#importTasks")
      };

let tasks = typeof document === "undefined" ? normalizeTasks(seedTasks) : normalizeTasks(loadTasks());
let activeFilter = "now";
let activeCategory = "all";
let activeView = "list";

if (typeof document !== "undefined") {
  mergeSeedTasks();
}

function todayStart() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function daysUntil(value) {
  return Math.ceil((parseDate(value) - todayStart()) / 86400000);
}

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return seedTasks;

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : seedTasks;
  } catch {
    return seedTasks;
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function normalizeTask(task) {
  const done = Boolean(task.done || task.status === "done");
  const status = done ? "done" : task.status || (task.priority === "high" ? "now" : "next");
  return { ...task, status, done };
}

function normalizeTasks(items) {
  return items.map(normalizeTask);
}

function mergeSeedTasks() {
  const existingTitles = new Set(tasks.map((task) => task.title));
  const missingSeeds = seedTasks.filter((task) => !existingTitles.has(task.title));
  if (missingSeeds.length === 0) return;

  tasks = normalizeTasks([...tasks, ...missingSeeds]);
  saveTasks();
}

function priorityLabel(priority) {
  return { high: "高", medium: "中", low: "低" }[priority] || "中";
}

function urgencyText(task) {
  const days = daysUntil(task.due);
  if (days < 0) return `${Math.abs(days)}日遅れ`;
  if (days === 0) return "今日";
  if (days === 1) return "明日";
  return `${days}日後`;
}

function isNow(task) {
  const days = daysUntil(task.due);
  return !task.done && task.status !== "done" && (task.status === "now" || task.priority === "high" || days <= 3);
}

function isDone(task) {
  return task.done || task.status === "done";
}

function filteredTasks() {
  return tasks
    .filter((task) => {
      const days = daysUntil(task.due);
      const filterMatch =
        activeFilter === "all" ||
        (activeFilter === "now" && isNow(task)) ||
        (activeFilter === "open" && !isDone(task)) ||
        (activeFilter === "week" && !isDone(task) && days <= 7) ||
        (activeFilter === "done" && isDone(task));

      const categoryMatch = activeCategory === "all" || task.category === activeCategory;
      return filterMatch && categoryMatch;
    })
    .sort((a, b) => {
      if (isDone(a) !== isDone(b)) return Number(isDone(a)) - Number(isDone(b));
      const dateDiff = parseDate(a.due) - parseDate(b.due);
      if (dateDiff !== 0) return dateDiff;
      return ["high", "medium", "low"].indexOf(a.priority) - ["high", "medium", "low"].indexOf(b.priority);
    });
}

function renderSelects() {
  els.taskCategory.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  els.taskStatus.innerHTML = kanbanColumns
    .filter((column) => column.id !== "done")
    .map((column) => `<option value="${column.id}">${column.title}</option>`)
    .join("");
  els.categoryFilter.innerHTML = `<option value="all">すべてのカテゴリ</option>${categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("")}`;
}

function renderStats() {
  const moveDays = daysUntil(MOVE_DATE);
  els.daysLeft.textContent = String(Math.max(moveDays, 0));
  els.todayCount.textContent = tasks.filter(isNow).length;
  els.weekCount.textContent = tasks.filter((task) => !isDone(task) && daysUntil(task.due) <= 7).length;
  els.openCount.textContent = tasks.filter((task) => !isDone(task)).length;
  els.moneyCount.textContent = tasks.filter((task) => !isDone(task) && task.category === "お金・家計").length;
}

function renderFacts() {
  els.currentFacts.innerHTML = "";
  currentFacts.forEach(([title, body]) => {
    const card = document.createElement("article");
    card.className = "fact-card";
    card.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    els.currentFacts.append(card);
  });
}

function renderTasks() {
  const viewLabels = {
    now: "今すぐやること",
    open: "未完了のやること",
    week: "7日以内のやること",
    all: "すべてのやること",
    done: "完了したこと"
  };
  els.viewTitle.textContent = viewLabels[activeFilter];
  els.taskList.innerHTML = "";

  const visibleTasks = filteredTasks();
  if (visibleTasks.length === 0) {
    els.taskList.innerHTML = `<div class="empty">この表示に該当するタスクはありません。</div>`;
    return;
  }

  visibleTasks.forEach((task) => {
    const node = els.taskTemplate.content.firstElementChild.cloneNode(true);
    node.classList.toggle("done", isDone(task));
    node.querySelector("h3").textContent = task.title;
    node.querySelector(".task-meta").textContent = `${task.category} / ${statusLabel(task.status)} / 期限 ${task.due} / ${urgencyText(task)}`;
    node.querySelector(".task-note").textContent = task.note || "";

    const pill = node.querySelector(".pill");
    pill.textContent = `優先度 ${priorityLabel(task.priority)}`;
    pill.classList.add(task.priority);

    const check = node.querySelector(".task-check");
    check.checked = isDone(task);
    check.addEventListener("change", () => {
      tasks = tasks.map((item) =>
        item.id === task.id ? normalizeTask({ ...item, done: check.checked, status: check.checked ? "done" : "now" }) : item
      );
      saveTasks();
      render();
    });

    const statusSelect = document.createElement("select");
    statusSelect.className = "status-select";
    statusSelect.setAttribute("aria-label", "状態を変更");
    statusSelect.innerHTML = kanbanColumns.map((column) => `<option value="${column.id}">${column.title}</option>`).join("");
    statusSelect.value = task.status;
    statusSelect.addEventListener("change", () => updateTaskStatus(task.id, statusSelect.value));
    node.querySelector(".task-body").append(statusSelect);

    node.querySelector(".delete-task").addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveTasks();
      render();
    });

    els.taskList.append(node);
  });
}

function renderCategories() {
  els.categoryGrid.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter((task) => task.category === category);
    const done = categoryTasks.filter(isDone).length;
    const total = categoryTasks.length;
    const percent = total ? Math.round((done / total) * 100) : 0;

    const card = document.createElement("article");
    card.className = "category-card";
    card.innerHTML = `
      <strong>${category}</strong>
      <div class="progress" aria-label="${category} ${percent}% 完了"><span style="width: ${percent}%"></span></div>
      <p class="task-meta">${done}/${total} 完了</p>
    `;
    els.categoryGrid.append(card);
  });
}

function statusLabel(status) {
  return kanbanColumns.find((column) => column.id === status)?.title || "次";
}

export function getKanbanSummary(items) {
  return kanbanColumns.map((column) => ({
    ...column,
    count: items.filter((task) => task.status === column.id).length
  }));
}

function updateTaskStatus(taskId, status) {
  tasks = tasks.map((task) => (task.id === taskId ? normalizeTask({ ...task, status, done: status === "done" }) : task));
  saveTasks();
  render();
}

function renderKanban() {
  els.kanbanBoard.innerHTML = "";

  kanbanColumns.forEach((column) => {
    const columnTasks = tasks
      .filter((task) => task.status === column.id)
      .sort((a, b) => parseDate(a.due) - parseDate(b.due));
    const section = document.createElement("section");
    section.className = "kanban-column";
    section.dataset.status = column.id;
    section.style.setProperty("--status-color", column.color);
    section.innerHTML = `
      <header>
        <h3>${column.title}</h3>
        <span class="kanban-count">${columnTasks.length}</span>
      </header>
      <div class="kanban-lane" data-drop-status="${column.id}"></div>
    `;

    const lane = section.querySelector(".kanban-lane");
    columnTasks.forEach((task) => {
      const card = document.createElement("article");
      card.className = "kanban-card";
      card.draggable = true;
      card.dataset.taskId = task.id;
      card.innerHTML = `
        <strong>${task.title}</strong>
        <p>${task.category} / ${task.due} / 優先度 ${priorityLabel(task.priority)}</p>
      `;
      lane.append(card);
    });

    els.kanbanBoard.append(section);
  });
}

function render() {
  renderStats();
  renderFacts();
  renderTasks();
  renderKanban();
  renderCategories();
}

function addTask(event) {
  event.preventDefault();
  const title = els.taskTitle.value.trim();
  if (!title) return;

  tasks = [
    {
      id: `task-${Date.now()}`,
      title,
      due: els.taskDue.value,
      category: els.taskCategory.value,
      priority: els.taskPriority.value,
      status: els.taskStatus.value,
      note: els.taskNote.value.trim(),
      done: els.taskStatus.value === "done",
      createdAt: new Date().toISOString()
    },
    ...tasks
  ];

  saveTasks();
  els.taskForm.reset();
  els.taskDue.value = new Date().toISOString().slice(0, 10);
  els.taskPriority.value = "medium";
  els.taskStatus.value = "now";
  render();
}

function bindEvents() {
  els.taskForm.addEventListener("submit", addTask);
  els.toggleFacts.addEventListener("click", () => {
    const isOpen = els.currentFacts.classList.toggle("open");
    els.toggleFacts.setAttribute("aria-expanded", String(isOpen));
  });

  els.toggleTaskForm.addEventListener("click", () => {
    const isOpen = els.taskForm.classList.toggle("open");
    els.toggleTaskForm.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".view-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      document.querySelectorAll(".view-tab").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".view-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === activeView);
      });
    });
  });

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.dataset.filter) return;
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".view-tab").forEach((item) => item.classList.toggle("active", item.dataset.view === "list"));
      document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === "list"));
      activeView = "list";
      render();
    });
  });

  els.categoryFilter.addEventListener("change", () => {
    activeCategory = els.categoryFilter.value;
    renderTasks();
  });

  els.kanbanBoard.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-task-id]");
    if (!card) return;
    event.dataTransfer.setData("text/plain", card.dataset.taskId);
  });

  els.kanbanBoard.addEventListener("dragover", (event) => {
    const column = event.target.closest(".kanban-column");
    if (!column) return;
    event.preventDefault();
    column.classList.add("over");
  });

  els.kanbanBoard.addEventListener("dragleave", (event) => {
    const column = event.target.closest(".kanban-column");
    if (column) column.classList.remove("over");
  });

  els.kanbanBoard.addEventListener("drop", (event) => {
    const column = event.target.closest(".kanban-column");
    if (!column) return;
    event.preventDefault();
    column.classList.remove("over");
    updateTaskStatus(event.dataTransfer.getData("text/plain"), column.dataset.status);
  });

  els.resetSeed.addEventListener("click", () => {
    const existingCustom = tasks.filter((task) => !String(task.id).startsWith("seed-"));
    tasks = normalizeTasks([...seedTasks, ...existingCustom]);
    saveTasks();
    render();
  });

  els.exportTasks.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "moriguchi-move-tasks.json";
    link.click();
    URL.revokeObjectURL(url);
  });

  els.importTasks.addEventListener("change", async () => {
    const file = els.importTasks.files[0];
    if (!file) return;

    try {
      const imported = JSON.parse(await file.text());
      if (!Array.isArray(imported)) throw new Error("Invalid task file");
      tasks = normalizeTasks(imported.filter((task) => task.title && task.due && task.category));
      saveTasks();
      render();
    } catch {
      alert("読み込みできませんでした。書き出したJSONファイルを選んでください。");
    } finally {
      els.importTasks.value = "";
    }
  });
}

if (typeof document !== "undefined") {
  renderSelects();
  els.taskDue.value = new Date().toISOString().slice(0, 10);
  els.taskStatus.value = "now";
  bindEvents();
  render();
}
