/* AI Vault by Tareq Samara | Built with Kayan.ai */
(function(){
var root=document.getElementById("aiv"); if(!root){root=document.createElement("div");root.id="aiv";document.body.appendChild(root);}
root.innerHTML="\n\n<span class=\"sig\">Built with Kayan.ai</span>\n\n<div class=\"wrap\">\n  <header class=\"hero\">\n    <div class=\"topline\">\n      <div class=\"author\">\n        <img class=\"avatar\" src=\"https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/0777aaac3b.jpg\" alt=\"Tareq Samara\">\n        <div class=\"author-txt\"><small data-i18n=\"by\"></small><b data-i18n=\"name\"></b></div>\n      </div>\n      <div class=\"meta\"><span data-i18n=\"vault\"></span><span class=\"dot\"></span><span data-i18n=\"updated\"></span>\n        <button type=\"button\" class=\"lang\" id=\"lang\"></button>\n      </div>\n    </div>\n    <h1 data-i18n=\"h1\"></h1>\n    <p class=\"lede\" data-i18n=\"lede\"></p>\n    <div class=\"caps-hero\">\n      <span class=\"ltr\" style=\"display:inline-flex;gap:10px;align-items:center\"><span class=\"kc\" data-tok=\"Mod\"></span><span class=\"plus\">+</span><span class=\"kc\">/</span></span>\n      <span class=\"hint\" id=\"tool-hint\"></span>\n    </div>\n    <div class=\"stats\" id=\"stats\"></div>\n  </header>\n\n  <section class=\"verify\" id=\"verify\" aria-labelledby=\"verify-t\">\n    <div class=\"verify-head\">\n      <span class=\"rule\" data-i18n=\"v_rule\"></span>\n      <h2 id=\"verify-t\" data-i18n=\"v_t\"></h2>\n      <p data-i18n=\"v_p\"></p>\n    </div>\n    <div class=\"vgrid\" id=\"vgrid\"></div>\n  </section>\n\n  <div class=\"console\">\n    <div class=\"tools\" id=\"tools\" role=\"group\" aria-label=\"AI tool\"></div>\n    <label class=\"search\" for=\"q\">\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.5-3.5\"/></svg>\n      <input id=\"q\" type=\"search\" autocomplete=\"off\">\n      <span class=\"count\" id=\"count\"></span>\n    </label>\n    <div class=\"bar\">\n      <div class=\"chips\" id=\"chips\" role=\"group\"></div>\n      <div class=\"os\" role=\"group\" aria-label=\"Keyboard\">\n        <button type=\"button\" id=\"os-win\" aria-pressed=\"true\">Windows</button>\n        <button type=\"button\" id=\"os-mac\" aria-pressed=\"false\">Mac</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"legend\">\n    <div><span class=\"badge b-official\" data-i18n=\"b_official\"></span><strong data-i18n=\"lg1t\"></strong><span data-i18n=\"lg1d\"></span></div>\n    <div><span class=\"badge b-varies\" data-i18n=\"b_varies\"></span><strong data-i18n=\"lg2t\"></strong><span data-i18n=\"lg2d\"></span></div>\n    <div><span class=\"badge b-community\" data-i18n=\"b_community\"></span><strong data-i18n=\"lg3t\"></strong><span data-i18n=\"lg3d\"></span></div>\n  </div>\n\n  <main id=\"main\"></main>\n  <div class=\"empty\" id=\"empty\" hidden></div>\n\n  <aside class=\"truth\">\n    <h3 data-i18n=\"truth_t\"></h3>\n    <p data-i18n=\"truth_p\"></p>\n  </aside>\n\n  \n  <section class=\"ladder\" aria-labelledby=\"lad-t\">\n    <h2 id=\"lad-t\" data-i18n=\"lad_t\"></h2>\n    <p data-i18n=\"lad_p\"></p>\n    <div class=\"lcards\">\n      <article class=\"lcard k\"><span class=\"le\" data-i18n=\"k_eye\"></span><h3 data-i18n=\"k_t\"></h3><p data-i18n=\"k_p\"></p>\n        <a class=\"go\" href=\"https://kayan.ai\" target=\"_blank\" rel=\"noopener\"><span data-i18n=\"k_cta\"></span><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg></a></article>\n      <article class=\"lcard e\"><span class=\"le\" data-i18n=\"e_eye\"></span><h3 data-i18n=\"e_t\"></h3><p data-i18n=\"e_p\"></p>\n        <a class=\"go\" href=\"https://elitedigitalcoach.com/reviews\" target=\"_blank\" rel=\"noopener\"><span data-i18n=\"e_cta\"></span><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg></a></article>\n    </div>\n  </section>\n\n  <footer>\n    <div>\n      <h4 data-i18n=\"next_t\"></h4>\n      <div class=\"next\" id=\"next\"></div>\n    </div>\n    <div>\n      <h4 data-i18n=\"src_t\"></h4>\n      <ul id=\"srcs\"></ul>\n    </div>\n    <p style=\"margin:0\" data-i18n=\"foot\"></p>\n  </footer>\n</div>\n\n";

const T = {
 en:{
  by:"Collected by", name:"Tareq Samara", vault:"Free AI Vault", updated:"Updated 15 Oct 2026", langBtn:"العربية",
  h1:'Every ChatGPT shortcut.<br><em>One page.</em> No comment required.',
  lede:'Creators keep asking you to comment a word to get ten of these. Here is <strong>the whole set in one place</strong>: keyboard shortcuts, real slash commands, hidden features, and the viral tricks with the full prompt behind each one so they work every time.',
  hint:"opens ChatGPT's own shortcut list. Start there.",
  search:"Search: new chat, fog, headshot, memory, copy...", shown:"shown",
  all:"All", kit:"My kit",
  b_official:"Official", b_varies:"Varies", b_community:"Prompt trick",
  lg1t:"Built into ChatGPT", lg1d:"Documented by OpenAI.",
  lg2t:"Depends on your plan or app", lg2d:"Real, but not on every account or version yet.",
  lg3t:"Not a feature, still works", lg3d:"ChatGPT reads it as an instruction. Use the full prompt for reliable results.",
  before:"Before", after:"After", closeLb:"Close", enlarge:"Tap to enlarge", example:"Example",
  learnNote:"Examples with an image were made by running the full prompt once, as written, with the topic filled in. Results vary, and labels are not always accurate, so check the facts.",
  sampleNote:"Examples marked with a photo were made by running the full prompt once, as written, on the same photo of a fictional person. Your results will vary a little each time.",
  v_rule:"Rule zero", v_t:"Before you trust any answer, check it", v_p:"ChatGPT sounds confident even when it is wrong. These six prompts take ten seconds and turn it from a yes man into a sparring partner. Use them on anything you will publish, sell or decide on.",
  st_total:"shortcuts and tricks", st_off:"official features", st_prompts:"full prompts included",
  copy:"Copy", copyTrick:"Copy trick", copyPrompt:"Copy full prompt", copied:"Copied", seePrompt:"See the full prompt", save:"Save to My kit",
  or:"or", winOnly:"Windows only", macOnly:"Mac only", setOwn:"Set your own", to9:"1 to 9",
  empty:'Nothing matches that search. Try a simpler word like <b>chat</b>, <b>copy</b> or <b>photo</b>.',
  kitEmpty:'Your kit is empty. Tap the star on any shortcut or trick to save it here. It stays on this device.',
  truth_t:"Why does /fog work if it isn't a real command?",
  truth_p:"OpenAI never built <strong>/droneview</strong>, <strong>/fog</strong> or <strong>/hdreal</strong>. ChatGPT simply understands the word and guesses what you mean. That is why the same trick gives a great photo one day and a strange one the next. The fix is simple: <strong>give it the full instruction</strong>. Every trick here comes with a full prompt you can copy, so the result stays consistent.",
  next_t:"Coming next to the Vault", next:["Claude skills and how to install them","Claude shortcuts","Grok tricks","Gemini shortcuts","Business prompt packs"],
  src_t:"Sources",
  foot:"Shortcuts change as OpenAI ships updates. Spotted one that moved? Tell Tareq and it gets fixed in the next update.<br>&copy; 2026 Tareq Samara. Free to use and share."
 },
 ar:{
  by:"جمعها لكم", name:"طارق سمارة", vault:"خزنة الذكاء الاصطناعي المجانية", updated:"آخر تحديث: 15 أكتوبر 2026", langBtn:"English",
  h1:'كل اختصارات ChatGPT.<br><em>في صفحة واحدة.</em> دون الحاجة إلى التعليق بأي كلمة.',
  lede:'يطلب صناع المحتوى التعليق بكلمة للحصول على عشرة من هذه الحيل. هنا <strong>المجموعة كاملة في مكان واحد</strong>: اختصارات لوحة المفاتيح، وأوامر الشرطة المائلة الحقيقية، والمزايا المخفية، والحيل المنتشرة مع الأمر الكامل خلف كل حيلة لتعمل في كل مرة.',
  hint:"يفتح قائمة الاختصارات داخل ChatGPT. ابدأ من هنا.",
  search:"ابحث: محادثة جديدة، fog، صورة، الذاكرة، نسخ...", shown:"معروض",
  all:"الكل", kit:"مجموعتي",
  b_official:"رسمي", b_varies:"حسب الاشتراك", b_community:"حيلة أوامر",
  lg1t:"ميزة مدمجة في ChatGPT", lg1d:"موثقة من OpenAI.",
  lg2t:"تعتمد على الاشتراك أو التطبيق", lg2d:"ميزة حقيقية، لكنها غير متاحة لكل الحسابات أو الإصدارات بعد.",
  lg3t:"ليست ميزة، لكنها تعمل", lg3d:"يفهمها ChatGPT على أنها تعليمات. استخدم الأمر الكامل للحصول على نتيجة ثابتة.",
  before:"قبل", after:"بعد", closeLb:"إغلاق", enlarge:"اضغط للتكبير", example:"مثال",
  learnNote:"الأمثلة المرفقة بصور أُنشئت بتشغيل الأمر الكامل مرة واحدة كما هو مكتوب بعد تعبئة الموضوع. تختلف النتائج، والتسميات ليست دقيقة دائمًا، لذا تحقّق من المعلومات.",
  sampleNote:"الأمثلة المرفقة بصور أُنشئت بتشغيل الأمر الكامل مرة واحدة كما هو مكتوب، على صورة واحدة لشخصية خيالية. ستختلف نتائجك قليلًا في كل مرة.",
  v_rule:"القاعدة الأولى", v_t:"قبل أن تثق بأي إجابة، تحقّق منها", v_p:"يتحدث ChatGPT بثقة حتى عندما يخطئ. هذه الأوامر الستة تستغرق عشر ثوانٍ وتحوّله من مجامل يوافقك على كل شيء إلى شريك يناقشك بجدية. استخدمها مع كل ما ستنشره أو تبيعه أو تبني عليه قرارًا.",
  st_total:"اختصار وحيلة", st_off:"ميزة رسمية", st_prompts:"أمر كامل جاهز للنسخ",
  copy:"نسخ", copyTrick:"نسخ الحيلة", copyPrompt:"نسخ الأمر الكامل", copied:"تم النسخ", seePrompt:"عرض الأمر الكامل", save:"حفظ في مجموعتي",
  or:"أو", winOnly:"ويندوز فقط", macOnly:"ماك فقط", setOwn:"يُحدَّد من الإعدادات", to9:"1 إلى 9",
  empty:'لا توجد نتائج لهذا البحث. جرّب كلمة أبسط مثل <b>محادثة</b> أو <b>نسخ</b> أو <b>صورة</b>.',
  kitEmpty:'مجموعتك فارغة. اضغط على النجمة بجانب أي اختصار أو حيلة لحفظها هنا. تبقى محفوظة على هذا الجهاز.',
  truth_t:"لماذا يعمل /fog رغم أنه ليس أمرًا حقيقيًا؟",
  truth_p:"لم تُطوّر OpenAI أوامر مثل <strong>/droneview</strong> أو <strong>/fog</strong> أو <strong>/hdreal</strong>. كل ما في الأمر أن ChatGPT يفهم الكلمة ويخمّن المقصود منها، ولهذا تعطي الحيلة نفسها صورة رائعة اليوم وصورة غريبة غدًا. والحل بسيط: <strong>أعطه التعليمات كاملة</strong>. كل حيلة هنا مرفقة بأمر كامل جاهز للنسخ لتبقى النتيجة ثابتة.",
  next_t:"قريبًا في الخزنة", next:["مهارات Claude وطريقة تثبيتها","اختصارات Claude","حيل Grok","اختصارات Gemini","حزم أوامر للأعمال"],
  src_t:"المصادر",
  foot:"تتغير الاختصارات مع تحديثات OpenAI. إن لاحظت اختصارًا تغيّر، أخبر طارق ليُحدَّث في الإصدار القادم.<br>&copy; 2026 طارق سمارة. مجانية للاستخدام والمشاركة."
 }
};

const DATA = [
 {id:"web", label:"Web app", lar:"الموقع", eyebrow:"chatgpt.com", ear:"chatgpt.com", title:"Keyboard shortcuts in the browser", tar:"اختصارات لوحة المفاتيح في المتصفح", intro:"Work on chatgpt.com in Chrome, Safari, Edge or Firefox. Press Ctrl or Cmd with / inside ChatGPT to see the live list for your account.", iar:"للعمل على chatgpt.com من Chrome أو Safari أو Edge أو Firefox. اضغط Ctrl أو Cmd مع / داخل ChatGPT لرؤية القائمة الخاصة بحسابك.", kind:"keys", items:[
  {a:"Open a new chat", ar:"فتح محادثة جديدة", k:"Mod Shift O", s:"official"},
  {a:"Search your chats", ar:"البحث في المحادثات", k:"Mod K", s:"official"},
  {a:"Show or hide the sidebar", ar:"إظهار الشريط الجانبي أو إخفاؤه", k:"Mod Shift S", s:"official"},
  {a:"Jump to the message box", ar:"الانتقال إلى مربع الكتابة", k:"Shift Esc", s:"official", d:"Start typing without touching the mouse.", dar:"ابدأ الكتابة دون لمس الفأرة."},
  {a:"Copy the last answer", ar:"نسخ آخر إجابة", k:"Mod Shift C", s:"official"},
  {a:"Copy the last code block", ar:"نسخ آخر جزء من الكود", k:"Mod Shift ;", s:"official"},
  {a:"Open custom instructions", ar:"فتح التعليمات المخصصة", k:"Mod Shift I", s:"official", d:"Tell ChatGPT who you are and how to answer, once.", dar:"عرّف ChatGPT بنفسك وبطريقة الإجابة المفضلة مرة واحدة."},
  {a:"Delete the current chat", ar:"حذف المحادثة الحالية", k:"Mod Shift Bksp", s:"official", d:"Asks you to confirm first.", dar:"يطلب التأكيد أولًا."},
  {a:"Show all shortcuts", ar:"عرض كل الاختصارات", k:"Mod /", s:"official"}
 ]},
 {id:"composer", label:"Typing", lar:"الكتابة", eyebrow:"The message box", ear:"مربع الكتابة", title:"Typing like a power user", tar:"الكتابة باحتراف", intro:"Small habits in the message box that save the most time over a week.", iar:"عادات صغيرة في مربع الكتابة توفر وقتًا كبيرًا خلال الأسبوع.", kind:"keys", items:[
  {a:"Send your message", ar:"إرسال الرسالة", k:"Enter", s:"official"},
  {a:"New line without sending", ar:"سطر جديد دون إرسال", k:"Shift Enter", s:"official", d:"Write longer, structured prompts in one go.", dar:"لكتابة أوامر طويلة ومنظمة دفعة واحدة."},
  {a:"Bring back your last prompt", ar:"استرجاع آخر أمر كتبته", k:"Up", s:"official", d:"Works when the message box is empty. Edit and resend.", dar:"يعمل عندما يكون مربع الكتابة فارغًا. عدّل ثم أعد الإرسال."},
  {a:"Open the tools menu", ar:"فتح قائمة الأدوات", k:"/", s:"official", d:"Type / at the start of the box to see the tools your account has.", dar:"اكتب / في بداية المربع لرؤية الأدوات المتاحة لحسابك."},
  {a:"Call a custom GPT into the chat", ar:"استدعاء GPT مخصص داخل المحادثة", k:"@", s:"varies", d:"Type @ and pick a GPT you have used. It answers inside the same chat.", dar:"اكتب @ واختر GPT استخدمته سابقًا ليجيب داخل المحادثة نفسها."},
  {a:"Stop the answer midway", ar:"إيقاف الإجابة أثناء كتابتها", k:"Esc", s:"varies", d:"Or tap the stop button.", dar:"أو اضغط زر الإيقاف."},
  {a:"Paste without formatting", ar:"لصق النص دون تنسيق", k:"Mod Shift V", s:"varies", d:"Strips fonts and colors from copied text.", dar:"يزيل الخطوط والألوان من النص المنسوخ."}
 ]},
 {id:"desktop", label:"Desktop app", lar:"تطبيق سطح المكتب", eyebrow:"Mac and Windows app", ear:"تطبيق ماك وويندوز", title:"Desktop app shortcuts", tar:"اختصارات تطبيق سطح المكتب", intro:"The ChatGPT desktop app has its own, longer list. These come from OpenAI's documentation for the current app.", iar:"لتطبيق ChatGPT على سطح المكتب قائمة أطول خاصة به. هذه الاختصارات مأخوذة من توثيق OpenAI للإصدار الحالي.", kind:"keys", items:[
  {a:"Open the chat bar from anywhere (Mac)", ar:"فتح شريط المحادثة من أي مكان (ماك)", k:{w:null,m:"Alt Space"}, s:"official", d:"Ask ChatGPT without switching apps. Change it in Settings.", dar:"اسأل ChatGPT دون التنقل بين التطبيقات. يمكن تغييره من الإعدادات."},
  {a:"Open the companion window (Windows)", ar:"فتح النافذة المرافقة (ويندوز)", k:{w:"Alt Space",m:null}, s:"official", d:"Change it in Settings, App, Companion window hotkey.", dar:"يمكن تغييره من الإعدادات، ثم التطبيق، ثم اختصار النافذة المرافقة."},
  {a:"Command menu", ar:"قائمة الأوامر", k:"Mod Shift P|Mod K", s:"official", d:"Search every action in the app.", dar:"للبحث في كل إجراءات التطبيق."},
  {a:"New chat", ar:"محادثة جديدة", k:"Mod N|Mod Shift O", s:"official"},
  {a:"New temporary chat", ar:"محادثة مؤقتة جديدة", k:"Mod Shift N", s:"official", d:"Not saved to history or memory.", dar:"لا تُحفظ في السجل ولا في الذاكرة."},
  {a:"Quick chat", ar:"محادثة سريعة", k:"Mod Alt N", s:"official"},
  {a:"Open the model picker", ar:"فتح قائمة اختيار النموذج", k:{w:"Ctrl Shift M",m:"Ctl Shift M"}, s:"official"},
  {a:"Start voice chat", ar:"بدء محادثة صوتية", k:{w:null,m:"Ctl Shift V"}, s:"varies", d:"Where voice is available.", dar:"حيث تتوفر الميزة الصوتية."},
  {a:"Show or hide the sidebar", ar:"إظهار الشريط الجانبي أو إخفاؤه", k:"Mod B|Mod Shift S", s:"official"},
  {a:"Archive the chat", ar:"أرشفة المحادثة", k:"Mod Shift A", s:"official"},
  {a:"Pin or unpin the chat", ar:"تثبيت المحادثة أو إلغاء تثبيتها", k:"Mod Alt P", s:"official"},
  {a:"Rename the chat", ar:"إعادة تسمية المحادثة", k:"Mod Alt R", s:"official"},
  {a:"Mark as unread", ar:"تمييز كغير مقروءة", k:"Mod Shift U", s:"official"},
  {a:"Find inside a chat", ar:"البحث داخل المحادثة", k:"Mod F", s:"official", d:"Then Mod G for the next match.", dar:"ثم Mod G للانتقال إلى النتيجة التالية."},
  {a:"Go to chat 1 to 9", ar:"الانتقال إلى المحادثة من 1 إلى 9", k:"Mod 1to9", s:"official"},
  {a:"Switch between Chat, Work and Codex", ar:"التبديل بين Chat وWork وCodex", k:{w:"Alt 1|Alt 2|Alt 3",m:"Ctl 1|Ctl 2|Ctl 3"}, s:"official"},
  {a:"Search chats", ar:"البحث في المحادثات", k:"SET", s:"official", d:"No default key. Assign one in Settings, Keyboard Shortcuts.", dar:"لا يوجد اختصار افتراضي. حدده من الإعدادات، ثم اختصارات لوحة المفاتيح."},
  {a:"Bring back your last prompt", ar:"استرجاع آخر أمر كتبته", k:"Up", s:"official"},
  {a:"Text bigger, smaller, reset", ar:"تكبير النص، تصغيره، إعادته", k:"Mod Plus|Mod Minus|Mod 0", s:"official"},
  {a:"Open settings", ar:"فتح الإعدادات", k:"Mod ,", s:"official"},
  {a:"Show all shortcuts", ar:"عرض كل الاختصارات", k:"Mod /", s:"official"}
 ]},
 {id:"slash", label:"Slash commands", lar:"أوامر /", eyebrow:"Type / in the desktop app", ear:"اكتب / في تطبيق سطح المكتب", title:"Real slash commands", tar:"أوامر الشرطة المائلة الحقيقية", intro:"These are built in. Type / in the desktop app composer and pick from the list. Some only appear in Codex mode or on certain plans.", iar:"هذه أوامر مدمجة فعلًا. اكتب / في مربع الكتابة داخل تطبيق سطح المكتب واختر من القائمة. بعضها يظهر فقط في وضع Codex أو في اشتراكات محددة.", kind:"cmd", items:[
  {c:"/model", a:"Choose the model for this chat", ar:"اختيار النموذج لهذه المحادثة", s:"official"},
  {c:"/reasoning", a:"Choose how hard it thinks", ar:"تحديد عمق التفكير", s:"official"},
  {c:"/plan", a:"Turn plan mode on for multi step work", ar:"تفعيل وضع التخطيط للمهام متعددة الخطوات", s:"official"},
  {c:"/goal", a:"Set a goal ChatGPT keeps working toward", ar:"تحديد هدف يواصل ChatGPT العمل عليه", s:"official", d:"Use /plan first to sharpen it.", dar:"استخدم /plan أولًا لتوضيحه."},
  {c:"/side", a:"Open a quick side chat without losing your place", ar:"فتح محادثة جانبية سريعة دون فقدان مكانك", s:"official"},
  {c:"/project", a:"Pick a project for new chats", ar:"اختيار مشروع للمحادثات الجديدة", s:"official"},
  {c:"/chat", a:"Start a chat outside any project", ar:"بدء محادثة خارج أي مشروع", s:"official"},
  {c:"/memories", a:"Control whether this chat uses or creates memories", ar:"التحكم في استخدام الذاكرة أو إنشائها في هذه المحادثة", s:"varies"},
  {c:"/rename", a:"Rename the chat", ar:"إعادة تسمية المحادثة", s:"official"},
  {c:"/pin", a:"Pin or unpin the chat", ar:"تثبيت المحادثة أو إلغاء تثبيتها", s:"varies"},
  {c:"/archive", a:"Archive the chat", ar:"أرشفة المحادثة", s:"official"},
  {c:"/compact", a:"Shrink a long chat so it stays sharp", ar:"ضغط المحادثة الطويلة لتبقى دقيقة", s:"official"},
  {c:"/fork", a:"Copy the chat into a new one", ar:"نسخ المحادثة إلى محادثة جديدة", s:"official"},
  {c:"/status", a:"See chat ID, context used and limits", ar:"عرض معرّف المحادثة والسياق المستخدم والحدود", s:"official"},
  {c:"/usage", a:"Open usage and billing", ar:"فتح صفحة الاستخدام والفوترة", s:"varies"},
  {c:"/fast", a:"Turn the faster tier on or off", ar:"تشغيل الفئة الأسرع أو إيقافها", s:"varies"},
  {c:"/feedback", a:"Send feedback to OpenAI", ar:"إرسال ملاحظات إلى OpenAI", s:"official"},
  {c:"/pet", a:"Wake or hide the desktop pet", ar:"إظهار الرفيق الافتراضي أو إخفاؤه", s:"official"},
  {c:"/new", a:"Blank chat in the same workspace", ar:"محادثة فارغة في مساحة العمل نفسها", s:"varies", d:"Codex mode", dar:"وضع Codex"},
  {c:"/review", a:"Review your code changes", ar:"مراجعة تعديلات الكود", s:"official", d:"Codex mode", dar:"وضع Codex"},
  {c:"/init", a:"Create an AGENTS.md file for a project", ar:"إنشاء ملف AGENTS.md للمشروع", s:"official", d:"Codex mode", dar:"وضع Codex"},
  {c:"/local", a:"Run the chat in your local project", ar:"تشغيل المحادثة داخل مشروعك المحلي", s:"official", d:"Codex mode", dar:"وضع Codex"},
  {c:"/cloud", a:"Run the chat in the cloud", ar:"تشغيل المحادثة على السحابة", s:"varies", d:"Codex mode", dar:"وضع Codex"},
  {c:"/worktree", a:"Run the chat in a new Git worktree", ar:"تشغيل المحادثة في Git worktree جديد", s:"official", d:"Codex mode", dar:"وضع Codex"},
  {c:"/mcp", a:"See connected MCP servers", ar:"عرض خوادم MCP المتصلة", s:"official", d:"Codex mode", dar:"وضع Codex"},
  {c:"$skill", a:"Call a skill by name", ar:"استدعاء مهارة باسمها", s:"official", d:"Type $ and the skill name. Enabled skills also show in the / list.", dar:"اكتب $ ثم اسم المهارة. تظهر المهارات المفعلة أيضًا في قائمة /."}
 ]},
 {id:"webslash", label:"Web tools", lar:"أدوات الموقع", eyebrow:"Type / on chatgpt.com", ear:"اكتب / على chatgpt.com", title:"Tools in the web menu", tar:"أدوات قائمة الموقع", intro:"On the website, / opens a tools menu. What you see depends on your plan and region, so type / and check your own list.", iar:"على الموقع، تفتح / قائمة الأدوات. ما يظهر يعتمد على اشتراكك ومنطقتك، لذا اكتب / وتحقق من قائمتك.", kind:"cmd", items:[
  {c:"/canvas", a:"Open Canvas for long writing or code", ar:"فتح Canvas للكتابة الطويلة أو الكود", s:"official", d:"Or just say: put this in canvas.", dar:"أو اكتب ببساطة: put this in canvas."},
  {c:"/study", a:"Turn on study mode with guided questions", ar:"تفعيل وضع الدراسة بأسئلة موجهة", s:"varies"},
  {c:"/image", a:"Create an image", ar:"إنشاء صورة", s:"varies"},
  {c:"/search", a:"Search the web with sources", ar:"البحث في الإنترنت مع ذكر المصادر", s:"varies"},
  {c:"/reason", a:"Ask it to think longer", ar:"طلب تفكير أعمق", s:"varies"}
 ]},
 {id:"features", label:"Hidden features", lar:"مزايا مخفية", eyebrow:"Where to find them", ear:"أين تجدها", title:"Features most people never touch", tar:"مزايا لا يستخدمها أغلب الناس", intro:"Not shortcuts, but the settings and buttons that change how useful ChatGPT is day to day.", iar:"ليست اختصارات، لكنها إعدادات وأزرار تغيّر مدى فائدة ChatGPT في عملك اليومي.", kind:"path", items:[
  {a:"Projects", ar:"المشاريع (Projects)", c:"Sidebar > Projects", car:"الشريط الجانبي > Projects", d:"Keep files, chats and instructions for one client or topic together.", dar:"لجمع الملفات والمحادثات والتعليمات الخاصة بعميل أو موضوع واحد في مكان واحد.", s:"official"},
  {a:"Memory", ar:"الذاكرة", c:"Settings > Personalization > Memory", car:"الإعدادات > التخصيص > الذاكرة", d:"See, edit or delete what ChatGPT remembers about you.", dar:"لعرض ما يتذكره ChatGPT عنك أو تعديله أو حذفه.", s:"official"},
  {a:"Custom instructions", ar:"التعليمات المخصصة", c:"Settings > Personalization", car:"الإعدادات > التخصيص", d:"Your role, your audience and how you like answers, applied to every chat.", dar:"دورك وجمهورك وطريقة الإجابة المفضلة، تُطبَّق على كل محادثة.", s:"official"},
  {a:"Temporary chat", ar:"المحادثة المؤقتة", c:"New chat > Temporary", car:"محادثة جديدة > Temporary", d:"Nothing saved to history or memory. Good for sensitive questions.", dar:"لا يُحفظ شيء في السجل أو الذاكرة. مناسبة للأسئلة الحساسة.", s:"official"},
  {a:"Branch a chat", ar:"تفريع المحادثة", c:"Hover a message > More > Branch", car:"مرّر المؤشر على رسالة > المزيد > Branch", d:"Try a different direction from any point without losing the original.", dar:"لتجربة اتجاه مختلف من أي نقطة دون فقدان المحادثة الأصلية.", s:"varies"},
  {a:"Edit an earlier message", ar:"تعديل رسالة سابقة", c:"Hover your message > Edit", car:"مرّر المؤشر على رسالتك > Edit", d:"Fix your question and get a fresh answer from that point.", dar:"عدّل سؤالك واحصل على إجابة جديدة من تلك النقطة.", s:"official"},
  {a:"Apps (connectors)", ar:"التطبيقات المتصلة", c:"Settings > Apps", car:"الإعدادات > Apps", d:"Connect Google Drive, Gmail, Slack and more, then ask about your own files.", dar:"اربط Google Drive وGmail وSlack وغيرها، ثم اسأل عن ملفاتك مباشرة.", s:"varies"},
  {a:"Scheduled tasks", ar:"المهام المجدولة", c:"Ask: remind me every Monday at 9 to...", car:"اكتب: ذكّرني كل اثنين الساعة 9 بأن...", d:"ChatGPT runs a prompt on a schedule and notifies you.", dar:"ينفّذ ChatGPT أمرًا في موعد محدد ويرسل لك إشعارًا.", s:"varies"},
  {a:"Voice mode", ar:"الوضع الصوتي", c:"Tap the voice icon", car:"اضغط أيقونة الصوت", d:"Talk naturally and interrupt anytime. Great for practicing a pitch.", dar:"تحدّث بشكل طبيعي وقاطع متى شئت. ممتاز للتدرّب على عرض البيع.", s:"varies"},
  {a:"Work mode", ar:"وضع العمل (Work)", c:"Desktop app > Work", car:"تطبيق سطح المكتب > Work", d:"Describe the outcome and let it handle the steps.", dar:"صِف النتيجة المطلوبة ودعه يتولى الخطوات.", s:"varies"},
  {a:"Share a chat", ar:"مشاركة المحادثة", c:"Share button, top of the chat", car:"زر Share أعلى المحادثة", d:"Send a read only link to anyone.", dar:"لإرسال رابط للقراءة فقط لأي شخص.", s:"official"},
  {a:"Export all your data", ar:"تصدير كل بياناتك", c:"Settings > Data controls > Export", car:"الإعدادات > Data controls > Export", d:"Get a full copy of your chats by email.", dar:"للحصول على نسخة كاملة من محادثاتك عبر البريد.", s:"official"}
 ]},
 {id:"links", label:"Link tricks", lar:"حيل الروابط", eyebrow:"Bookmarks that do the work", ear:"إشارات مرجعية تختصر الوقت", title:"Link tricks", tar:"حيل الروابط", intro:"Save these as browser bookmarks or phone shortcuts and skip the typing.", iar:"احفظها كإشارات مرجعية في المتصفح أو اختصارات على الهاتف ووفّر الكتابة.", kind:"cmd", items:[
  {c:"chatgpt.com/?q=your+prompt", a:"Open a new chat with your prompt already sent", ar:"فتح محادثة جديدة مع إرسال الأمر تلقائيًا", s:"community", d:"Replace the words after q= with your prompt. Spaces become +.", dar:"استبدل الكلمات بعد q= بأمرك. المسافات تُكتب +."},
  {c:"chatgpt.com/?q=your+prompt&hints=search", a:"Same, and force a web search", ar:"الشيء نفسه مع فرض البحث في الإنترنت", s:"community"},
  {c:"chatgpt.com/g/", a:"Open a custom GPT directly", ar:"فتح GPT مخصص مباشرة", s:"official", d:"Add the GPT's ID after /g/.", dar:"أضف معرّف GPT بعد /g/."},
  {c:"chatgpt.com/library", a:"Open every image you have created", ar:"فتح كل الصور التي أنشأتها", s:"varies"}
 ]},
 {id:"image", label:"Photo tricks", lar:"حيل الصور", eyebrow:"The viral ones", ear:"الأكثر انتشارًا", title:"Photo \"slash\" tricks", tar:"حيل الصور بالشرطة المائلة", intro:"Upload a photo of yourself, then type the trick. Or paste the full prompt under each one for a consistent result.", iar:"ارفع صورتك ثم اكتب الحيلة، أو الصق الأمر الكامل الموجود تحت كل حيلة للحصول على نتيجة ثابتة.", kind:"prompt", items:[
  {c:"/droneview", a:"Turn your photo into a drone shot from above", ar:"تحويل صورتك إلى لقطة من طائرة درون", p:"Recreate this photo as an aerial drone shot taken about 30 meters above the subject, angled 45 degrees down. Keep my face, body, clothing and pose exactly the same and show me small in the frame. Extend the surroundings naturally so they match the original setting. Photorealistic, natural daylight, sharp detail."},
  {c:"/fog", a:"Add soft, moody fog", ar:"إضافة ضباب ناعم بأجواء سينمائية", p:"Edit this photo to add thick, dense morning fog. The background should fade into soft grey mist so buildings and trees are only faint silhouettes. Keep me sharp and fully visible in the foreground, with a little mist around my legs. Keep my face, clothing and pose exactly the same. Overcast, muted cool tones, cinematic and realistic."},
  {c:"/hdreal", a:"Sharpen into a clean, high detail photo", ar:"تحسين الصورة إلى جودة عالية ووضوح تام", p:"Recreate this photo as an ultra sharp, high resolution, true to life image. Remove noise and blur, improve skin and fabric texture naturally, and keep colors realistic. Do not change my face, expression, body, clothing, pose or background. No filters, no beauty smoothing."},
  {c:"/proshot", a:"Pro portrait with studio lighting", ar:"صورة احترافية بإضاءة استوديو", p:"Turn this snapshot into a professional portrait as if shot on a full frame camera with an 85mm lens. Soft key light, gentle rim light, shallow depth of field with a blurred background. Keep my face, clothing and pose exactly the same. Natural skin, realistic colors."},
  {c:"/proshot sunset", a:"Pro portrait at sunset by the sea", ar:"صورة احترافية وقت الغروب على البحر", p:"Turn this snapshot into a professional portrait taken at sunset on a terrace overlooking the sea. Warm low sun behind me, soft fill light on my face, shallow depth of field. Keep my face, clothing and pose exactly the same. Photorealistic."},
  {c:"/newbg", a:"Swap the background", ar:"تغيير الخلفية", p:"Keep me exactly as I am in this photo: same face, body, clothing, pose and lighting direction. Replace only the background with [describe the place, for example a modern office with city views]. Match the light, shadows and perspective so it looks like one real photo."},
  {c:"/headshot", a:"Professional LinkedIn headshot", ar:"صورة شخصية احترافية لـ LinkedIn", p:"Turn this photo into a professional LinkedIn headshot: chest up, facing the camera, soft studio light, neutral grey background, sharp focus on the eyes. Keep my face, hair and features exactly the same. Dress me in [a navy blazer and white shirt]."},
  {c:"/thumbnail", a:"YouTube thumbnail with your face", ar:"صورة مصغرة ليوتيوب بوجهك", p:"Create a YouTube thumbnail, 16:9, using my photo on the right with a surprised but natural expression. Big bold text on the left: [3 to 5 words]. High contrast, one bright accent color, simple background. Make the text easy to read on a phone."},
  {c:"/goldenhour", a:"Warm golden hour light", ar:"إضاءة الساعة الذهبية الدافئة", p:"Relight this photo as if taken during golden hour. Warm, low sunlight from the side, long soft shadows and a gentle glow on my skin and clothes. Keep my face, pose, clothing and background layout exactly the same. Realistic, not overdone."},
  {c:"/closeup", a:"Sharp close up portrait", ar:"لقطة قريبة واضحة", p:"Create a close up portrait from this photo, framed from the chest up. Keep my face exactly the same, with realistic skin texture and sharp eyes. Softly blur the background. Natural light, photorealistic."},
  {c:"/outfit", a:"Change only your clothes", ar:"تغيير الملابس فقط", p:"Keep me exactly as I am in this photo, same face, body, pose and background. Change only my clothes to [describe the outfit]. Make the fabric folds and fit look natural."},
  {c:"/together", a:"Put two people in one photo", ar:"جمع شخصين في صورة واحدة", p:"Using the two photos I uploaded, create one realistic photo of both people standing together in [describe the place]. Keep each person's face, body and clothing exactly as in their own photo. Match the lighting so it looks like one real picture."},
  {c:"/actionfigure", a:"You as a boxed action figure", ar:"مجسّم لك داخل علبة ألعاب", p:"Turn me into a realistic collectible action figure inside a clear blister pack on a cardboard backing card. The card shows the name [your name] and the title [your role] at the top. Add 3 small accessories next to the figure that match my work: [item 1], [item 2], [item 3]. Keep my face, hair and outfit recognizable. Studio product lighting, plain background. Do not use any real brand logos."},
  {c:"/figurine", a:"Desk collectible figurine of you", ar:"تمثال صغير لك على المكتب", p:"Create a photo of a 1/7 scale collectible figurine of me standing on a round clear acrylic base, placed on a wooden desk next to a computer screen that shows the 3D model of the same figure. Keep my face, hairstyle and outfit recognizable. Realistic product photography, soft indoor light."},
  {c:"/minime", a:"A tiny 3D you in a real scene", ar:"نسخة صغيرة ثلاثية الأبعاد منك في مكان حقيقي", p:"Add a tiny 3D animated version of me, about 15 cm tall, into this real photo of my [desk, kitchen, car]. It should interact with the objects around it, with correct shadows and scale. Keep the real scene unchanged."},
  {c:"/cartoon", a:"Animated movie character version", ar:"نسخة كرتونية بأسلوب أفلام الرسوم المتحركة", p:"Turn me into a 3D animated movie character with a slightly larger head and expressive eyes. Keep my hairstyle, outfit, accessories and pose recognizable from the photo. Bright, clean colors and soft lighting in the same setting."},
  {c:"/anime", a:"Hand drawn anime version", ar:"نسخة بأسلوب الأنمي المرسوم يدويًا", p:"Turn this selfie into a hand drawn anime character. Keep my pose, outfit colors and hairstyle. Clean line art, soft cel shading, simple background."},
  {c:"/chibi", a:"Cute chibi figure", ar:"شخصية تشيبي لطيفة", p:"Turn me into a cute chibi style figure with a big head, large eyes and a small body. Keep my hairstyle, outfit colors and accessories recognizable. Plain light background, clean lines, soft shading."},
  {c:"/roastme", a:"Friendly caricature based on your chats", ar:"كاريكاتير ودود بناءً على محادثاتك", p:"Based on what you know about me from our chats, create a funny, friendly caricature of me with an exaggerated head and small body, surrounded by small visual jokes about my habits and work. Keep it kind, not insulting. Bright colors, clean cartoon style."},
  {c:"/howyouseeme", a:"How ChatGPT sees you", ar:"كيف يراك ChatGPT", p:"Based on everything you know about me from our conversations, create an image that shows how you see me and how we work together. Do not ask questions, just create it, then explain the symbols in two lines."},
  {c:"/sticker", a:"Die cut sticker of you", ar:"ملصق مقصوص على شكلك", p:"Turn me into a cute die cut sticker: cartoon style, thick white border around the shape, plain background, happy expression."},
  {c:"/claymation", a:"Stop motion clay scene", ar:"مشهد بالصلصال بأسلوب الإيقاف الحركي", p:"Recreate this photo as a stop motion clay scene: me and the background made of handmade clay with visible fingerprints and texture, warm soft lighting."},
  {c:"/filmlook", a:"Imperfect old film camera look", ar:"مظهر كاميرا الأفلام القديمة", p:"Make this photo look like it was shot on an old film camera: soft grain, slight blur, warm faded colors, a gentle light leak in one corner and a small date stamp in the bottom right. Keep the subject exactly the same."},
  {c:"/polaroid", a:"Instant camera print", ar:"صورة بولارويد فورية", p:"Make this photo look like a real instant camera print: white frame with a thicker bottom border, soft faded colors, slight vignette and light film grain. Keep the subject exactly the same."},
  {c:"/noir", a:"Black and white film noir", ar:"أبيض وأسود بأسلوب الأفلام الكلاسيكية", p:"Restyle this photo as a black and white film noir still: strong contrast, hard side light, deep shadows, light film grain. Keep my face, pose and clothing exactly the same."},
  {c:"/timetravel", a:"Place yourself in another era", ar:"انتقل بصورتك إلى حقبة زمنية أخرى", p:"Place me in [era, for example 1920s Paris]. Change my clothing, hairstyle and the background to match that period accurately, with lighting and colors that look like a real photo from that time. Keep my face exactly the same."},
  {c:"/older", a:"See yourself at 70", ar:"شاهد نفسك في سن السبعين", p:"Show me as I might look at age [70], with natural aging: grey hair, realistic wrinkles and skin texture. Keep my face shape and features recognizable, same pose and background."},
  {c:"/scrapbook", a:"Vintage scrapbook page", ar:"صفحة ألبوم ذكريات كلاسيكية", p:"Turn this photo into a vintage scrapbook page: the photo taped at a slight angle on textured paper, surrounded by pressed flowers, old stamps, ticket stubs and handwritten notes. Faded sepia tones, soft natural light from above."},
  {c:"/travelposter", a:"Double exposure travel poster", ar:"ملصق سفر بتقنية التعريض المزدوج", p:"Create a vintage travel poster using a double exposure: my side profile silhouette filled with the landmarks of [city]. Muted retro colors, paper texture, the city name in bold retro lettering at the bottom."},
  {c:"/magazine", a:"Magazine cover starring you", ar:"غلاف مجلة بصورتك", p:"Put me on the cover of a fashion magazine with an invented title [title]. Studio lighting, confident pose, a few short cover lines about [my work]. Keep my face exactly the same. Do not use any real magazine name."},
  {c:"/hairstyles", a:"Try different haircuts on yourself", ar:"جرّب قصات شعر مختلفة", p:"Create a 2 by 3 grid of portraits of me with six different hairstyles and hair colors that would suit my face. Keep my face exactly the same in every tile. Label each tile with the style name. Same lighting and background in all six."},
  {c:"/sunglassestryon", a:"Try on sunglasses", ar:"جرّب النظارات الشمسية", p:"Show me wearing [describe the sunglasses, for example black rectangular acetate frames]. Keep my face, pose, clothing and background exactly the same. Make the reflections and shadows on the lenses realistic."},
  {c:"/pethuman", a:"Your pet as a human", ar:"حيوانك الأليف على هيئة إنسان", p:"Imagine my pet in this photo as a human. Keep the same personality, turn the fur colors into hair and clothing colors, and keep the same expression. Show them as a realistic person in a setting that fits their character."},
  {c:"/productshot", a:"Premium product photo", ar:"صورة منتج احترافية", p:"Turn this product photo into a premium e-commerce shot: product centered on a seamless [white or soft beige] background, soft studio light, subtle reflection under it, sharp detail. Do not change the product shape, label or colors."},
  {c:"/roomredesign", a:"Redesign a room", ar:"إعادة تصميم غرفة", p:"Redesign this room in [modern minimalist, warm Scandinavian, etc] style. Keep the walls, windows, doors and room size exactly the same. Change furniture, colors, lighting and decor only. Photorealistic interior photo."},
  {c:"/restore", a:"Restore an old family photo", ar:"ترميم صورة عائلية قديمة", p:"Restore this old photo: remove scratches, dust and tears, fix fading, sharpen details and add natural, realistic colors. Do not change faces or expressions."},
  {c:"/blueprint", a:"Turn an object into a blueprint", ar:"تحويل شيء إلى مخطط هندسي", p:"Turn the main object in this photo into a technical blueprint drawing: white lines on a deep blue background, front and side views, with simple labels. Keep the proportions true to the photo. Any measurements are illustrative."},
  {c:"/isometric", a:"Tiny isometric 3D scene", ar:"مجسم ثلاثي الأبعاد مصغّر", p:"Turn this scene into a miniature isometric 3D diorama on a small square base, clean soft lighting, pastel colors, high detail, plain background."},
  {c:"/pencil", a:"Realistic pencil sketch", ar:"رسم واقعي بقلم الرصاص", p:"Turn this photo into a realistic graphite pencil sketch on textured paper, fine shading, a few loose construction lines at the edges."},
  {c:"/coloring", a:"Coloring page for kids", ar:"صفحة تلوين للأطفال", p:"Turn this photo into a black and white coloring book page for kids: clean bold outlines, no shading, white background, simple shapes."},
  {c:"/mspaint", a:"Hilariously bad drawing", ar:"رسم بدائي مضحك", p:"Redraw this photo as a deliberately bad, clumsy drawing made in an old paint program with a mouse: shaky lines, flat colors, white background. Keep it funny but recognizable."},
  {c:"/handwritten", a:"Text as a handwritten note", ar:"نص بخط اليد", p:"Write the following text as a photo of a handwritten note in blue ink on lined paper, natural handwriting with slight variation, soft daylight: [your text]"},
  {c:"/3dicon", a:"Glossy 3D app icon", ar:"أيقونة تطبيق ثلاثية الأبعاد", p:"Turn this object into a glossy 3D app icon: rounded square, soft gradient, soft shadow, centered, simple and clean."}
 ]},
 {id:"learn", label:"Study visuals", lar:"شرح بالصور", eyebrow:"Learn anything faster", ear:"تعلّم أي شيء أسرع", title:"Study and explainer visuals", tar:"صور الشرح والدراسة", intro:"Type the trick plus your topic, for example /mindmap the nervous system. Or paste the full prompt for a cleaner, more reliable result. Always double check labels and facts: AI diagrams can mislabel parts.", iar:"اكتب الحيلة ثم موضوعك، مثل: /mindmap الجهاز العصبي. أو الصق الأمر الكامل لنتيجة أوضح وأكثر ثباتًا. تحقّق دائمًا من التسميات والمعلومات، فقد تخطئ رسوم الذكاء الاصطناعي في تسمية الأجزاء.", kind:"prompt", items:[
  {c:"/timelineview", a:"Any topic as an illustrated timeline", ar:"أي موضوع كخط زمني مصوّر", p:"Create a clean, illustrated horizontal timeline infographic of [topic]. Show 6 to 8 key dates in order, each with a short title, one line explanation and a small illustration. Use a consistent color palette, clear readable labels and a title at the top. Landscape format."},
  {c:"/visualcheatsheet", a:"One page visual cheat sheet", ar:"ورقة مراجعة مصوّرة في صفحة واحدة", p:"Create a one page visual cheat sheet about [topic]. Split it into clear numbered boxes for each key idea, with a short definition, a simple formula or rule where relevant, and a small illustrated example in each box. Bright, organized, easy to read, with a bold title at the top."},
  {c:"/anatomy", a:"Labeled anatomy diagram", ar:"رسم تشريحي مع التسميات", p:"Create a detailed, labeled anatomy diagram of [subject]. Show the main parts from the outside and inside, with clean leader lines and clear labels for each part. Textbook illustration style on a light background."},
  {c:"/explodedview", a:"Exploded view of any object", ar:"عرض مفكّك لأي جهاز أو شيء", p:"Create a photorealistic exploded view of [object], with every major component separated and floating in order along one axis, as it would sit when assembled. Add thin leader lines with clear labels for each part. Clean studio background."},
  {c:"/mindmap", a:"Colorful mind map of a topic", ar:"خريطة ذهنية ملوّنة لأي موضوع", p:"Create a colorful mind map of [topic] with the main idea in the center and 5 to 7 branches. Each branch has a short label, 2 to 4 sub points and a small icon. Clear readable text, organized layout, white background."},
  {c:"/stickynotes", a:"Fun sticky notes summary for kids", ar:"ملخص بأوراق لاصقة ممتعة للأطفال", p:"Create a board of colorful sticky notes that explains [topic] for [audience, for example grade 4 students]. One note per key idea, with a short heading, 2 to 3 simple bullet points and a fun cartoon character on each. Playful but easy to read."},
  {c:"/animeexplainer", a:"Explain it as an anime comic", ar:"اشرحه كقصة مصوّرة بأسلوب الأنمي", p:"Explain [topic] as a one page anime style comic with 4 to 6 panels. A friendly character walks the reader through each step with short speech bubbles. Clear readable text, bright colors, simple backgrounds."},
  {c:"/crosssection", a:"Cross section of anything", ar:"مقطع عرضي لأي شيء", p:"Create a detailed cross section illustration of [object], sliced open to reveal its internal structure and compartments. Label each part with clean leader lines. Technical illustration style, light background."},
  {c:"/cutaway", a:"Cutaway showing the inside", ar:"رسم مقطوع يكشف الداخل", p:"Create a cutaway illustration of [object] where part of the outer shell is removed to show the inner mechanism while the rest stays intact. Label the key parts. Realistic rendering, soft studio light."},
  {c:"/xray", a:"X ray look inside an object", ar:"رؤية داخل الشيء كأنها أشعة سينية", p:"Show [object] as if under an X ray: a semi transparent outer shell revealing the internal parts, glowing softly. Dark background, clean labels for the main components."},
  {c:"/flowchart", a:"Process as a clear flowchart", ar:"العملية كمخطط انسيابي واضح", p:"Create a clear flowchart of [process]. Use rounded boxes for steps, diamonds for decisions with yes and no paths, and arrows showing direction. Short readable labels, consistent colors, white background."},
  {c:"/whiteboard", a:"Teacher style whiteboard explainer", ar:"شرح على السبورة البيضاء كأنه معلّم", p:"Explain [topic] as a hand drawn whiteboard sketch: marker drawings, arrows, simple diagrams and short handwritten notes, like a teacher explaining it on a whiteboard. Clean and readable."},
  {c:"/comicstrip", a:"Concept as a 4 panel comic", ar:"المفهوم كقصة مصوّرة من 4 مربعات", p:"Explain [concept] as a 4 panel comic strip with a simple story, friendly characters and short speech bubbles. The last panel delivers the key lesson."},
  {c:"/infographic", a:"Phone friendly infographic", ar:"إنفوغرافيك مناسب للهاتف", p:"Create a vertical infographic about [topic] with a bold title, 5 to 7 sections, simple icons, short text and one key number or fact in each section. Modern flat design, consistent palette, easy to read on a phone."},
  {c:"/conceptmap", a:"Concept map with linked ideas", ar:"خريطة مفاهيم مترابطة", p:"Create a concept map of [topic]. Put key concepts in boxes and connect them with labeled arrows that explain the relationship, for example causes, part of, leads to. Clean layout, readable labels."},
  {c:"/venndiagram", a:"Venn diagram comparing two things", ar:"مخطط فِن للمقارنة بين أمرين", p:"Create a Venn diagram comparing [A] and [B]. List what is unique to each in its circle and what they share in the overlap. Short readable points, two clear colors, a title at the top."},
  {c:"/cyclediagram", a:"Circular cycle diagram", ar:"مخطط دائري لدورة متكررة", p:"Create a circular cycle diagram of [process, for example the water cycle], with each stage in order around the circle, arrows between stages, a small illustration and a one line explanation for each."},
  {c:"/comparison", a:"Side by side comparison graphic", ar:"مقارنة مصوّرة جنبًا إلى جنب", p:"Create a side by side comparison graphic of [A] vs [B] across 5 criteria, with icons, short points and a clear verdict row at the bottom. Clean, balanced layout."},
  {c:"/howitworks", a:"How it works, step by step", ar:"كيف يعمل، خطوة بخطوة", p:"Create an annotated how it works explainer of [thing]. Show the mechanism step by step with numbered callouts, arrows showing movement or flow, and one short sentence per step."},
  {c:"/chalkboard", a:"Chalkboard lesson", ar:"درس على السبورة الطباشيرية", p:"Explain [topic] as a chalkboard drawing: white and colored chalk on a dark green board, with simple diagrams, arrows and short handwritten notes."},
  {c:"/sketchnote", a:"Hand drawn sketchnote page", ar:"صفحة ملاحظات مرسومة باليد", p:"Turn [topic or my notes] into a sketchnote page: hand drawn doodles, icons, banners, arrows and short handwritten key points connected in a visual flow. Black ink with one accent color."},
  {c:"/storyboard", a:"Six panel storyboard", ar:"لوحة قصة من ستة مشاهد", p:"Turn [story or process] into a 6 panel storyboard. Each panel shows one key moment with a short caption underneath. Clean illustrated style, consistent characters."},
  {c:"/mapit", a:"Illustrated map of a place or event", ar:"خريطة مصوّرة لمكان أو حدث", p:"Create an illustrated map of [place or historical event] with labeled cities, routes, key landmarks and a small legend. Vintage atlas style, readable labels."},
  {c:"/flashcards", a:"Printable picture flashcards", ar:"بطاقات تعليمية مصوّرة للطباعة", p:"Create a sheet of 8 picture flashcards for [vocabulary or terms]. Each card has a clear illustration and the word in large readable text underneath. Bright, simple, printable."},
  {c:"/formulacard", a:"Visual formula card", ar:"بطاقة القوانين والمعادلات", p:"Create a visual formula card for [subject or chapter] listing the key formulas, what each symbol means and one tiny worked example for each. Clean layout, readable math notation."},
  {c:"/memorypalace", a:"Memory palace scene to remember a list", ar:"قصر الذاكرة لحفظ أي قائمة", p:"Create a memory palace scene to help me remember [list]. Place each item as a vivid, slightly funny object in a different spot of one room, with small labels. Detailed, colorful illustration."},
  {c:"/iconsummary", a:"Topic as 9 labeled icons", ar:"الموضوع في 9 أيقونات مع عناوين", p:"Summarize [topic] as a grid of 9 icons, each with a 2 to 4 word label underneath. Consistent flat icon style, one accent color, white background."},
  {c:"/posternotes", a:"Printable study poster", ar:"ملصق مراجعة للطباعة", p:"Turn [chapter or topic] into a printable study poster with a bold title, color coded sections, key definitions, one diagram and a remember this box. A4 portrait, easy to read from a distance."}
 ]},
 {id:"styles", label:"Style shortcuts", lar:"أنماط وزوايا", eyebrow:"Add to any image request", ear:"أضفها إلى أي طلب صورة", title:"Style, camera and design shortcuts", tar:"اختصارات الأسلوب والكاميرا والتصميم", intro:"Short words that change the look of any image. Type the trick plus your subject, or use the full prompt.", iar:"كلمات قصيرة تغيّر شكل أي صورة. اكتب الحيلة ثم موضوعك، أو استخدم الأمر الكامل.", kind:"prompt", items:[
  {c:"/watercolor", a:"Soft watercolor painting", ar:"لوحة ألوان مائية ناعمة", p:"Create [subject] as a soft watercolor painting with gentle washes, visible paper texture and loose edges."},
  {c:"/oilpaint", a:"Classic oil painting", ar:"لوحة زيتية كلاسيكية", p:"Create [subject] as a classic oil painting with rich colors, visible brush strokes and dramatic light."},
  {c:"/gouache", a:"Matte gouache illustration", ar:"رسم بألوان الغواش المطفية", p:"Create [subject] as a matte gouache illustration with flat painted shapes and a warm, limited palette."},
  {c:"/papercut", a:"Layered paper cut art", ar:"فن الورق المقصوص بطبقات", p:"Create [subject] as layered paper cut art with soft shadows between the layers, giving real depth."},
  {c:"/collage", a:"Mixed media collage", ar:"كولاج بخامات متعددة", p:"Create [subject] as a mixed media editorial collage with cut paper, photo pieces, tape and hand drawn marks."},
  {c:"/lineart", a:"Clean minimal line art", ar:"رسم خطي بسيط ونظيف", p:"Create [subject] as clean minimal line art: one consistent line weight, no shading, white background."},
  {c:"/pixelart", a:"Retro pixel art", ar:"فن البكسل الكلاسيكي", p:"Create [subject] as retro 16 bit pixel art with a limited color palette and crisp pixels."},
  {c:"/voxel", a:"3D voxel blocks", ar:"مكعبات ثلاثية الأبعاد", p:"Create [subject] built entirely from small 3D voxel cubes, isometric angle, soft lighting."},
  {c:"/lowpoly", a:"Low poly geometric 3D", ar:"مجسم هندسي منخفض المضلعات", p:"Create [subject] as a low poly 3D model with visible geometric facets and soft gradient lighting."},
  {c:"/felt", a:"Handmade felt craft", ar:"مجسم من قماش اللباد", p:"Create [subject] as a handmade felt craft scene with visible stitching and soft fabric texture."},
  {c:"/embroidered", a:"Embroidered on fabric", ar:"تطريز على القماش", p:"Create [subject] as an embroidery on linen fabric with visible thread texture and a wooden hoop around it."},
  {c:"/topdown", a:"Shot from directly above", ar:"لقطة من الأعلى مباشرة", p:"Show [subject] from directly above, a perfect top down view with even lighting."},
  {c:"/birdsview", a:"High aerial perspective", ar:"منظور جوي من ارتفاع عالٍ", p:"Show [subject] from a high bird's eye view, wide and detailed, with the surroundings visible."},
  {c:"/wormsview", a:"Dramatic low angle from the ground", ar:"زاوية منخفضة درامية من الأرض", p:"Show [subject] from a dramatic worm's eye view, camera near the ground looking up."},
  {c:"/ultrawide", a:"Wide cinematic composition", ar:"تكوين عريض سينمائي", p:"Show [subject] in an ultra wide cinematic shot with lots of environment around it, 21:9 format."},
  {c:"/macro", a:"Extreme close up of texture", ar:"لقطة مقرّبة جدًا للتفاصيل", p:"Show an extreme macro close up of [subject], revealing fine texture, shallow depth of field."},
  {c:"/flatlay", a:"Neat flat lay from above", ar:"ترتيب الأغراض من الأعلى", p:"Create a neat flat lay of [items] arranged on [surface], shot from directly above with soft natural light."},
  {c:"/symmetry", a:"Perfectly symmetrical composition", ar:"تكوين متناظر تمامًا", p:"Show [subject] in a perfectly symmetrical, centered composition with clean lines."},
  {c:"/rimlight", a:"Glowing edge lighting", ar:"إضاءة حواف متوهّجة", p:"Light [subject] with strong rim light that outlines its edges against a dark background."},
  {c:"/backlit", a:"Backlit with a soft glow", ar:"إضاءة خلفية بتوهّج ناعم", p:"Show [subject] backlit by the sun, with a warm glow around the edges and soft flare."},
  {c:"/spotlight", a:"Dramatic spotlight", ar:"إضاءة مسرحية مركّزة", p:"Light [subject] with a single dramatic spotlight from above, everything else falling into shadow."},
  {c:"/silhouette", a:"Bold silhouette", ar:"ظل داكن جريء", p:"Show [subject] as a bold dark silhouette against a bright colorful sky."},
  {c:"/heroshot", a:"Dramatic hero product shot", ar:"لقطة منتج بطولية مميزة", p:"Create a dramatic hero shot of [product] on a pedestal, low angle, cinematic lighting, premium feel."},
  {c:"/floatingproduct", a:"Product floating in mid air", ar:"منتج يطفو في الهواء", p:"Show [product] floating in mid air with a soft shadow below, clean studio background, premium lighting."},
  {c:"/levitate", a:"Ingredients flying around the product", ar:"مكوّنات تطير حول المنتج", p:"Show [product] at the center with its ingredients or parts levitating around it, frozen in motion, studio light."},
  {c:"/materialstudy", a:"Close study of materials", ar:"دراسة مقرّبة للخامات", p:"Show [object] as a close material study, focusing on texture, finish and how light hits the surface."},
  {c:"/iconset", a:"Matching icon set", ar:"مجموعة أيقونات متناسقة", p:"Create a set of 9 matching icons for [theme], same style, same line weight, on a plain background."},
  {c:"/glassicons", a:"Glossy glass icons", ar:"أيقونات زجاجية لامعة", p:"Create a set of 6 translucent glass style 3D icons for [theme] with soft reflections and gradients."},
  {c:"/stickerpack", a:"Matching sticker pack", ar:"حزمة ملصقات متناسقة", p:"Create a sticker pack of 8 cute die cut stickers about [theme], consistent style, white borders."},
  {c:"/mascotset", a:"One mascot in many poses", ar:"شخصية تعريفية بوضعيات متعددة", p:"Create a friendly mascot for [brand or idea] shown in 6 poses: waving, thinking, celebrating, pointing, working and sleeping."},
  {c:"/appicon", a:"Mobile app icon", ar:"أيقونة تطبيق للهاتف", p:"Design a clean mobile app icon for [app idea], simple symbol, bold color, rounded square, no text."},
  {c:"/lettering", a:"Custom hand lettering", ar:"خط يدوي مميز", p:"Write [word or phrase] in expressive custom hand lettering as the main visual, with decorative flourishes."},
  {c:"/annotation", a:"Handwritten notes and arrows on top", ar:"ملاحظات وأسهم بخط اليد فوق الصورة", p:"Add handwritten notes, arrows and circles on top of [image or subject] to explain the key parts, like a marked up photo."},
  {c:"/highlighter", a:"Highlighter marked text", ar:"نص مظلّل بقلم التحديد", p:"Show [text or page] with key phrases marked in bright yellow highlighter, like a real studied page."},
  {c:"/newspaper", a:"Newspaper front page", ar:"صفحة أولى لجريدة", p:"Create a vintage newspaper front page with the headline [headline], a photo, and columns of text about [topic]. Use an invented newspaper name."},
  {c:"/miniature", a:"Tiny miniature world", ar:"عالم مصغّر", p:"Rebuild [subject] as a tiny miniature world, tilt shift look, tiny people and details."},
  {c:"/diorama", a:"Handcrafted diorama", ar:"مجسم ديوراما يدوي", p:"Create [scene] inside a handcrafted diorama box with miniature models and warm lighting."},
  {c:"/museum", a:"Displayed as a museum artifact", ar:"معروض كقطعة متحفية", p:"Show [object] displayed as a museum artifact behind glass, with a small label and gallery lighting."},
  {c:"/billboard", a:"Your design on a billboard", ar:"تصميمك على لوحة إعلانية", p:"Show [design or message] on a large outdoor billboard in a busy city street, realistic photo."},
  {c:"/poster", a:"Campaign poster", ar:"ملصق حملة إعلانية", p:"Design a bold campaign poster for [event or message] with a strong headline, one striking visual and clean layout."},
  {c:"/packaging", a:"Premium product packaging", ar:"تغليف منتج فاخر", p:"Design premium retail packaging for [product], shown as a realistic 3D box mockup on a studio background. Use an invented brand name."}
 ]},
 {id:"text", label:"Text tricks", lar:"حيل الكتابة", eyebrow:"Shorthand people swear by", ear:"اختصارات يعتمد عليها المحترفون", title:"Text \"slash\" tricks", tar:"حيل الكتابة بالشرطة المائلة", intro:"Same idea for thinking and writing. The short word helps, the full prompt is what makes it reliable.", iar:"الفكرة نفسها للتفكير والكتابة. الكلمة القصيرة تساعد، لكن الأمر الكامل هو ما يجعل النتيجة موثوقة.", kind:"prompt", items:[
  {c:"/askfirst", a:"Make it ask questions before answering", ar:"اجعله يسألك قبل أن يجيب", p:"Before you answer, ask me up to 5 questions that would change your answer. Wait for my replies, then give the final answer. My request: [request]"},
  {c:"/promptme", a:"Let ChatGPT write the prompt for you", ar:"دع ChatGPT يكتب الأمر نيابة عنك", p:"I want to [goal]. Write the best possible prompt I could give you for this, including role, context, steps and output format. Ask me for anything you need first."},
  {c:"/reverse", a:"Reverse engineer a great output", ar:"استخراج الأمر من نتيجة أعجبتك", p:"Here is an output I like: [paste]. Reverse engineer the prompt that would produce something like this, so I can reuse it."},
  {c:"/whatdoyouknow", a:"See what it remembers about you", ar:"اعرف ما يتذكره عنك", p:"What do you remember about me? List it by category, then tell me anything that looks outdated so I can correct it."},
  {c:"/oneword", a:"Describe me in one word", ar:"صِفني بكلمة واحدة", p:"Based on our past conversations, describe me in one word. Then explain why in three sentences with examples of things I said."},
  {c:"/mirror", a:"Brutally honest self review", ar:"مراجعة صريحة جدًا لطريقة عملك", p:"Based on what you know about how I work, be brutally honest: what are my 3 biggest blind spots, and what should I do differently starting this week? Be specific and kind, not harsh."},
  {c:"/blindspots", a:"Find what your plan is missing", ar:"اكتشف ما ينقص خطتك", p:"Here is my plan. What am I missing? List risks, wrong assumptions and things I have not considered, ranked by impact. Plan: [paste]"},
  {c:"/devil", a:"Devil's advocate on your idea", ar:"محامي الشيطان لفكرتك", p:"Argue against my idea below as a smart skeptic. Give the 5 strongest objections, then tell me which ones I should actually worry about. Idea: [idea]"},
  {c:"/decide", a:"Decide between two options", ar:"المفاضلة بين خيارين", p:"Help me decide between [option A] and [option B]. Build a simple scoring table with the 5 factors that matter most for [my situation], score each option, then give your recommendation and the biggest risk."},
  {c:"/verify", a:"Make it check its own answer", ar:"اجعله يراجع إجابته بنفسه", p:"Check your last answer. List any claims that could be wrong or outdated, rate your confidence in each, and correct anything you are not sure about."},
  {c:"/eli5", a:"Explain it like I'm five", ar:"اشرحها كأنني طفل", p:"Explain the following in very simple words, as if to a smart 10 year old. Use one everyday comparison and keep it under 120 words: [topic]"},
  {c:"/feynman", a:"Learn anything with the Feynman method", ar:"تعلّم أي شيء بطريقة فاينمان", p:"Teach me [topic] using the Feynman method: explain it simply, find the gaps in my understanding by asking me 3 questions, then fill those gaps."},
  {c:"/8020", a:"The 20% that gives 80% of results", ar:"الـ 20% التي تحقق 80% من النتائج", p:"What is the 20 percent of [skill] that gives 80 percent of the results? Give me a 7 day learning plan around it with one small practice task per day."},
  {c:"/quiz", a:"Quiz yourself on any topic", ar:"اختبر نفسك في أي موضوع", p:"Quiz me on [topic] with 5 multiple choice questions, one at a time. Wait for my answer, then explain if I was right before the next question."},
  {c:"/tldr", a:"Short summary", ar:"ملخص قصير", p:"Summarize the text below in 3 bullet points and one sentence called Bottom line. Keep my wording where it matters. Text: [paste]"},
  {c:"/summarize", a:"Structured summary", ar:"ملخص منظم", p:"Summarize the text below into: key points, decisions made, open questions, and action items with owners if mentioned. Text: [paste]"},
  {c:"/meetingnotes", a:"Meeting notes into action items", ar:"تحويل ملاحظات الاجتماع إلى مهام", p:"Turn these meeting notes into: summary in 3 lines, decisions, action items with owner and deadline, and open questions. Notes: [paste]"},
  {c:"/table", a:"Turn anything into a table", ar:"تحويل أي محتوى إلى جدول", p:"Turn this into a clean table with clear column names. Add a final row or column with the key takeaway. Content: [paste]"},
  {c:"/steps", a:"Goal into a step by step plan", ar:"تحويل الهدف إلى خطة خطوة بخطوة", p:"Turn the goal below into a numbered, step by step plan with the time each step takes and what done looks like for each one. Goal: [goal]"},
  {c:"/humanize", a:"Make AI text sound natural", ar:"اجعل نص الذكاء الاصطناعي طبيعيًا", p:"Rewrite the text below so it sounds like a real person talking to a friend. Vary sentence length, cut filler and buzzwords, and keep every fact. Do not add new claims. Text: [paste]"},
  {c:"/simplify", a:"Make it readable in 10 seconds", ar:"اجعله مفهومًا في 10 ثوانٍ", p:"Rewrite this so a busy person understands it in 10 seconds. Short sentences, no jargon, keep the meaning. Text: [paste]"},
  {c:"/hooks", a:"10 scroll stopping opening lines", ar:"10 افتتاحيات توقف التمرير", p:"Write 10 scroll stopping opening lines for a short video about [topic] for [audience]. Mix curiosity, contrarian and story hooks. Under 12 words each."},
  {c:"/roastmy", a:"Roast my page, offer or bio", ar:"انتقاد ساخر لصفحتك أو عرضك أو نبذتك", p:"Roast my [landing page, offer, bio] like a sharp marketing expert. Be funny but useful: list what a visitor actually thinks in the first 5 seconds, then give me 5 fixes. Here it is: [paste]"},
  {c:"/critique", a:"Find the weak spots", ar:"اكتشف نقاط الضعف", p:"Review my [post, offer, email] below as a tough but fair editor. List the 5 biggest weaknesses in order of impact, then give a rewritten version that fixes them. Text: [paste]"},
  {c:"/reply", a:"Write a clear email reply", ar:"كتابة رد واضح على بريد", p:"Write a reply to this email. Goal: [goal]. Tone: warm and direct. Under 120 words, with one clear next step. Email: [paste]"},
  {c:"/expert", a:"Answer like a specialist", ar:"أجب كخبير متخصص", p:"Act as a senior [field] specialist with 15 years of hands on experience. Answer the question below with practical steps, common mistakes to avoid, and what you would do first. Question: [question]"},
  {c:"/translate", a:"Natural translation", ar:"ترجمة طبيعية", p:"Translate the text below into [language]. Keep the meaning and tone, use natural everyday phrasing instead of word for word translation, and keep names and numbers unchanged. Text: [paste]"}
 ]}
];

const IMGS = {"base": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/9799536884.webp", "/droneview": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/c942edfb6a.webp", "/proshot sunset": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/2731d00e02.webp", "/newbg": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/927566e014.webp", "/headshot": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/6757a346e3.webp", "/thumbnail": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/889116bf36.webp", "/actionfigure": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/41cbebaf58.webp", "/figurine": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/2ba466afa8.webp", "/cartoon": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/2b8ad29720.webp", "/anime": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/db267dc3a9.webp", "/claymation": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/70a7b1df96.webp", "/older": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/c7e43dde36.webp", "/timetravel": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/050e52b30c.webp", "/filmlook": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/9dcd4e6102.webp", "/magazine": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/b0fda20102.webp", "/timelineview": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/6735feefe5.webp", "/visualcheatsheet": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/8c8fda7ae9.webp", "/anatomy": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/1da1863731.webp", "/explodedview": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/ba9d9854ca.webp", "/mindmap": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/1ae2551816.webp", "/stickynotes": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/ddffe23907.webp", "/animeexplainer": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/501ec10c34.webp", "/crosssection": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/b0680694c9.webp", "/flowchart": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/63608c0a95.webp", "/whiteboard": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/e0d1034c52.webp", "/comicstrip": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/ffd3a9a805.webp", "/cutaway": "https://cdn.jsdelivr.net/gh/tsamara80/kayan-assets@ai-vault/ai-vault/img/f739a89fc3.webp"};
function openLb(cmd){
  let it=null, isPhoto=false;
  DATA.forEach(s=>{ const f=s.items.find(i=>i.c===cmd); if(f && !it){ it=f; isPhoto = s.id==="image"; } });
  if(!it) return;
  const lb = document.createElement("div"); lb.className="lb"; lb.setAttribute("role","dialog"); lb.setAttribute("aria-modal","true");
  const body = isPhoto
    ? '<div class="lb-pair"><figure><img src="'+IMGS.base+'" alt=""><figcaption>'+t("before")+'</figcaption></figure><figure><img src="'+IMGS[cmd]+'" alt="'+esc(L(it,"a","ar"))+'"><figcaption>'+t("after")+'</figcaption></figure></div>'
    : '<div class="lb-single"><img src="'+IMGS[cmd]+'" alt="'+esc(L(it,"a","ar"))+'"></div>';
  lb.innerHTML = '<div class="lb-inner"><div class="lb-top"><span class="slash">'+esc(cmd)+'</span><button type="button" class="lb-close">'+t("closeLb")+'</button></div>'+body+'</div>';
  const close = ()=>{lb.remove(); document.removeEventListener("keydown",onKey);};
  const onKey = e=>{ if(e.key==="Escape") close(); };
  lb.addEventListener("click",e=>{ if(e.target===lb || e.target.closest(".lb-close")) close(); });
  document.addEventListener("keydown",onKey);
  document.body.appendChild(lb); lb.querySelector(".lb-close").focus();
}

const VERIFY = [
 {t:"Find the blind spot", tar:"اكتشف النقطة العمياء", d:"Ask this after any plan, idea or answer. It makes ChatGPT pick apart what it just agreed with.", dar:"اسأل هذا بعد أي خطة أو فكرة أو إجابة، ليبدأ ChatGPT بتفكيك ما وافقك عليه للتو.", p:"What is the one thing I'm missing? Be specific and tell me why it matters."},
 {t:"Demand the evidence", tar:"اطلب الدليل", d:"Then open the links and read them yourself. A source you did not open is not a source.", dar:"ثم افتح الروابط واقرأها بنفسك. المصدر الذي لم تفتحه ليس مصدرًا.", p:"Show me supporting data for each claim in your answer, with a link to the original source I can open. If you cannot find a source for a claim, say so clearly."},
 {t:"Socrates mode", tar:"وضع سقراط", d:"It asks you questions instead of giving answers. Active recall is the fastest way to actually learn.", dar:"يطرح عليك الأسئلة بدل أن يعطيك الإجابات. الاسترجاع النشط هو أسرع طريقة لتتعلم فعلًا.", p:"Socrates: ask me questions one at a time to test whether I really understand [topic]. Do not give me the answer until I have tried. Then tell me what I got wrong."},
 {t:"Rate your confidence", tar:"قيّم درجة ثقتك", d:"Separates what it knows from what it is guessing.", dar:"يفصل بين ما يعرفه فعلًا وما يخمّنه.", p:"Go through your last answer claim by claim. Rate your confidence in each one from 1 to 10 and mark anything that is a guess, an assumption or possibly outdated."},
 {t:"Argue the other side", tar:"دافع عن الرأي المعاكس", d:"Breaks the habit of agreeing with you.", dar:"يكسر عادته في موافقتك على كل شيء.", p:"Now argue against your own answer. Give me the strongest case for the opposite view, then tell me which parts of your original answer still hold up."},
 {t:"Get a second opinion", tar:"خذ رأيًا ثانيًا", d:"Paste the answer into a different AI, like Claude or Gemini, and let it hunt for mistakes.", dar:"الصق الإجابة في أداة ذكاء اصطناعي أخرى مثل Claude أو Gemini ودعها تبحث عن الأخطاء.", p:"Another AI gave me the answer below. Fact check it. List anything that is wrong, outdated or unsupported, and explain why. Answer: [paste]"}
];
function renderVerify(){
  document.getElementById("vgrid").innerHTML = VERIFY.map((v,i)=>'<article class="vcard"><span class="vn">'+(i+1)+'</span><h3>'+esc(L(v,"t","tar"))+'</h3><p>'+esc(L(v,"d","dar"))+'</p><q>'+esc(v.p)+'</q>'+copyBtn(v.p,t("copy"))+'</article>').join("");
}

const TOK = {
 Mod:{w:"Ctrl",m:"⌘"}, Alt:{w:"Alt",m:"⌥"}, Ctl:{w:"Ctrl",m:"⌃"}, Shift:{w:"Shift",m:"⇧"},
 Enter:{w:"Enter",m:"Return"}, Bksp:{w:"Backspace",m:"Delete"}, Esc:{w:"Esc",m:"Esc"}, Up:{w:"↑",m:"↑"},
 Space:{w:"Space",m:"Space"}, Plus:{w:"+",m:"+"}, Minus:{w:"−",m:"−"}
};
const store = {get(k){try{return localStorage.getItem(k)}catch(e){return null}}, set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let OS = /Mac|iPhone|iPad/i.test(navigator.platform||navigator.userAgent) ? "m" : "w";
if(store.get("vault-os")==="m"||store.get("vault-os")==="w") OS = store.get("vault-os");
let LANG = (/(^#|-)ar$/.test(location.hash)) ? "ar" : (store.get("vault-lang")==="ar" ? "ar" : "en");
let FILTER = "all", Q = "";
let KIT = new Set(); try{KIT = new Set(JSON.parse(store.get("vault-kit")||"[]"))}catch(e){}

const t = k => T[LANG][k];
const L = (o,en,ar) => (LANG==="ar" && o[ar]) ? o[ar] : o[en];
const esc = s => String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const label = tk => tk==="1to9" ? t("to9") : (TOK[tk] ? TOK[tk][OS] : tk);
const keyOf = (sec,it) => sec.id+":"+(it.c||it.a);

function keysHTML(k){
  if(k==="SET") return '<span class="na">'+t("setOwn")+'</span>';
  const spec = (typeof k==="object") ? k[OS] : k;
  if(spec==null) return '<span class="na">'+(OS==="m"?t("winOnly"):t("macOnly"))+'</span>';
  return spec.split("|").map(c=>c.trim().split(" ").map(x=>'<span class="kc">'+esc(label(x))+'</span>').join("")).join('<span class="or">'+t("or")+'</span>');
}
const BADGE = {official:"b-official", varies:"b-varies", community:"b-community"};
const badge = s => '<span class="badge '+BADGE[s]+'">'+t("b_"+s)+'</span>';
const copyIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const chev = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
const starSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
const starBtn = key => '<button type="button" class="star" data-star="'+esc(key)+'" aria-pressed="'+KIT.has(key)+'" aria-label="'+t("save")+'" title="'+t("save")+'">'+starSvg+'</button>';
const copyBtn = (txt,lbl) => '<button type="button" class="copy" data-copy="'+esc(txt)+'" data-label="'+esc(lbl)+'">'+copyIcon+esc(lbl)+'</button>';

function hay(sec,it){
  const k = typeof it.k==="object" ? JSON.stringify(it.k) : (it.k||"");
  return [sec.label,sec.lar,sec.title,sec.tar,it.a,it.ar,it.c,it.car,it.d,it.dar,it.p,k].join(" ").toLowerCase();
}

function render(){
  const main = document.getElementById("main");
  const terms = Q.toLowerCase().split(/\s+/).filter(Boolean);
  let html="", shown=0;
  DATA.forEach(sec=>{
    if(FILTER!=="all" && FILTER!=="kit" && FILTER!==sec.id) return;
    const items = sec.items.filter(it => (FILTER!=="kit" || KIT.has(keyOf(sec,it))) && terms.every(x => hay(sec,it).includes(x)));
    if(!items.length) return;
    shown += items.length;
    html += '<section class="grp" id="'+sec.id+'"><div class="grp-head"><span class="eyebrow">'+esc(L(sec,"eyebrow","ear"))+' &middot; '+items.length+'</span><h2>'+esc(L(sec,"title","tar"))+'</h2><p>'+esc(L(sec,"intro","iar"))+'</p></div>';
    const what = it => '<div class="what"><strong>'+esc(L(it,"a","ar"))+'</strong>'+(it.d?'<small>'+esc(L(it,"d","dar"))+'</small>':'')+'</div>';
    if(sec.kind==="keys"){
      html += '<div class="rows">'+items.map(it=>'<div class="row">'+what(it)+'<div class="keys">'+keysHTML(it.k)+'</div><div class="side">'+badge(it.s)+starBtn(keyOf(sec,it))+'</div></div>').join("")+'</div>';
    } else if(sec.kind==="cmd"){
      html += '<div class="rows">'+items.map(it=>'<div class="row">'+what(it)+'<div class="cmd">'+esc(it.c)+'</div><div class="side">'+badge(it.s)+copyBtn(it.c,t("copy"))+starBtn(keyOf(sec,it))+'</div></div>').join("")+'</div>';
    } else if(sec.kind==="path"){
      html += '<div class="rows">'+items.map(it=>'<div class="row">'+what(it)+'<div class="path">'+esc(L(it,"c","car"))+'</div><div class="side">'+badge(it.s)+starBtn(keyOf(sec,it))+'</div></div>').join("")+'</div>';
    } else {
      const sorted = items.slice().sort((x,y)=>(IMGS[y.c]?1:0)-(IMGS[x.c]?1:0));
      const isPhoto = sec.id==="image";
      if(sorted.some(it=>IMGS[it.c])) html += '<p class="sample-note">'+t(isPhoto?"sampleNote":"learnNote")+'</p>';
      const shot = it => !IMGS[it.c] ? '' : isPhoto
        ? '<button type="button" class="shot" data-shot="'+esc(it.c)+'" aria-label="'+t("enlarge")+'"><img class="after'+(it.c==="/thumbnail"?' wide':'')+'" src="'+IMGS[it.c]+'" alt="'+esc(it.a)+'" loading="lazy"><span class="tag a">'+t("after")+'</span><span class="binset"><img class="before" src="'+IMGS.base+'" alt="" loading="lazy"><span class="tag b">'+t("before")+'</span></span></button>'
        : '<button type="button" class="shot natural" data-shot="'+esc(it.c)+'" aria-label="'+t("enlarge")+'"><img class="after" src="'+IMGS[it.c]+'" alt="'+esc(it.a)+'" loading="lazy"><span class="tag a">'+t("example")+'</span></button>';
      html += '<div class="cards">'+sorted.map(it=>'<article class="card">'+shot(it)+'<div class="card-top"><span class="slash">'+esc(it.c)+'</span><div class="top-right">'+badge("community")+starBtn(keyOf(sec,it))+'</div></div><p class="what">'+esc(L(it,"a","ar"))+'</p><div class="card-actions">'+copyBtn(it.c,t("copyTrick"))+copyBtn(it.p,t("copyPrompt"))+'</div><details'+(terms.length?' open':'')+'><summary>'+chev+t("seePrompt")+'</summary><pre>'+esc(it.p)+'</pre></details></article>').join("")+'</div>';
    }
    html += '</section>';
  });
  main.innerHTML = html;
  const empty = document.getElementById("empty");
  empty.hidden = shown>0;
  empty.innerHTML = FILTER==="kit" && !terms.length ? t("kitEmpty") : t("empty");
  document.getElementById("count").textContent = shown+" "+t("shown");
}

function stats(){
  const total = DATA.reduce((n,s)=>n+s.items.length,0);
  const off = DATA.reduce((n,s)=>n+s.items.filter(i=>i.s==="official").length,0);
  const pr = DATA.filter(s=>s.kind==="prompt").reduce((n,s)=>n+s.items.length,0);
  document.getElementById("stats").innerHTML = '<div><b>'+total+'</b>'+t("st_total")+'</div><div><b>'+off+'</b>'+t("st_off")+'</div><div><b>'+pr+'</b>'+t("st_prompts")+'</div>';
}

function chips(){
  const el = document.getElementById("chips");
  const list = [{id:"all",l:t("all")},{id:"kit",l:t("kit"),n:KIT.size}].concat(DATA.map(s=>({id:s.id,l:L(s,"label","lar")})));
  el.innerHTML = list.map(s=>'<button type="button" class="chip" data-f="'+s.id+'" aria-pressed="'+(s.id===FILTER)+'">'+(s.id==="kit"?starSvg:'')+esc(s.l)+(s.id==="kit"?'<span class="n">'+s.n+'</span>':'')+'</button>').join("");
}
document.getElementById("chips").addEventListener("click",e=>{const b=e.target.closest(".chip"); if(!b) return; FILTER=b.dataset.f; chips(); render();});

function applyLang(){
  const r = document.documentElement;
  r.lang = LANG; r.dir = LANG==="ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(n=>n.innerHTML = t(n.dataset.i18n));
  document.getElementById("lang").textContent = t("langBtn");
  document.getElementById("q").placeholder = t("search");
  document.getElementById("next").innerHTML = t("next").map(x=>'<span>'+esc(x)+'</span>').join("");
  chips(); stats(); renderVerify(); render();
}
document.getElementById("lang").onclick = ()=>{LANG = LANG==="ar"?"en":"ar"; store.set("vault-lang",LANG); try{history.replaceState(null,"","#"+TOOL+(LANG==="ar"?"-ar":""));}catch(_){} applyLang();};

function setOS(v){
  OS=v; store.set("vault-os",v);
  document.getElementById("os-win").setAttribute("aria-pressed",String(v==="w"));
  document.getElementById("os-mac").setAttribute("aria-pressed",String(v==="m"));
  document.querySelectorAll(".caps-hero [data-tok]").forEach(n=>n.textContent=label(n.dataset.tok));
  render();
}
document.getElementById("os-win").onclick=()=>setOS("w");
document.getElementById("os-mac").onclick=()=>setOS("m");
document.getElementById("q").addEventListener("input",e=>{Q=e.target.value.trim(); render();});

document.addEventListener("click", e=>{
  const sh = e.target.closest(".shot");
  if(sh){ openLb(sh.dataset.shot); return; }
  const s = e.target.closest(".star");
  if(s){
    const k = s.dataset.star;
    if(KIT.has(k)) KIT.delete(k); else KIT.add(k);
    store.set("vault-kit", JSON.stringify([...KIT]));
    s.setAttribute("aria-pressed", String(KIT.has(k)));
    chips(); if(FILTER==="kit") render();
    return;
  }
  const b = e.target.closest(".copy"); if(!b) return;
  const text = b.dataset.copy, orig = b.innerHTML;
  const ok = ()=>{b.classList.add("done"); b.textContent=t("copied"); setTimeout(()=>{b.classList.remove("done"); b.innerHTML=orig;},1400);};
  const fallback = ()=>{const ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.opacity="0"; document.body.appendChild(ta); ta.select(); try{document.execCommand("copy"); ok();}catch(_){} ta.remove();};
  if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(ok, fallback); } else fallback();
});


console.log("%c Built with Kayan.ai ","background:#FDCA05;color:#0B0B0A;font-weight:700;padding:4px 8px;border-radius:4px");
/* New tools for the AI Vault. Same schema as the ChatGPT DATA. Arabic in plural address. Prompts stay in English. */
const DATA_NEW = [
 /* ================= CLAUDE ================= */
 {id:"cl-setup", tool:"claude", label:"Setup", lar:"الإعداد", eyebrow:"Do this once", ear:"مرة واحدة فقط", title:"Five settings that make Claude remember you", tar:"خمسة إعدادات تجعل Claude يتذكركم", intro:"Most people never open these. Ten minutes here saves you from re-explaining yourself in every chat.", iar:"معظم المستخدمين لا يفتحون هذه الإعدادات أبدًا. عشر دقائق هنا توفر عليكم إعادة شرح كل شيء في كل محادثة.", kind:"path", items:[
  {a:"Turn on memory", ar:"تفعيل الذاكرة", c:"Settings > Your Claude > Generate memory from chats", car:"Settings > Your Claude > Generate memory from chats", s:"official", d:"On by default for most personal plans. Check it is on.", dar:"مفعّلة افتراضيًا في معظم الخطط الشخصية. تأكدوا من تفعيلها."},
  {a:"Let Claude search your past chats", ar:"السماح لـ Claude بالبحث في محادثاتكم السابقة", c:"Settings > Your Claude > Search and reference chats", car:"Settings > Your Claude > Search and reference chats", s:"official", d:"Then ask: what did we discuss about [topic]?", dar:"ثم اسألوا: ماذا ناقشنا بخصوص [الموضوع]؟"},
  {a:"Start a chat that leaves no trace", ar:"بدء محادثة لا تُحفظ", c:"New chat > ghost icon, top right", car:"محادثة جديدة > أيقونة الشبح أعلى الشاشة", s:"official", d:"Incognito chats stay out of your history and memory.", dar:"المحادثات المخفية لا تُحفظ في السجل ولا في الذاكرة."},
  {a:"Let Claude create real files", ar:"السماح لـ Claude بإنشاء ملفات حقيقية", c:"Settings > Capabilities > Create and edit files", car:"Settings > Capabilities > Create and edit files", s:"official", d:"Needed for Word, Excel, PowerPoint and PDF output, and for skills.", dar:"ضروري لإنشاء ملفات Word وExcel وPowerPoint وPDF، ولتشغيل المهارات."},
  {a:"Connect Gmail, Drive or Calendar", ar:"ربط Gmail أو Drive أو Calendar", c:"Customize > Connectors > +", car:"Customize > Connectors > +", s:"official", d:"Then in any chat: + > Connectors > switch on the ones you need.", dar:"ثم في أي محادثة: + ثم Connectors ثم فعّلوا ما تحتاجونه."},
  {a:"Give each client or project its own memory", ar:"تخصيص ذاكرة مستقلة لكل عميل أو مشروع", c:"Project page > Memory > Use account memory: off", car:"صفحة المشروع > Memory > إيقاف Use account memory", s:"official", d:"Keeps one client's details out of another's chats.", dar:"يمنع تداخل تفاصيل عميل مع محادثات عميل آخر."},
  {a:"See every shortcut on your account", ar:"عرض كل الاختصارات المتاحة في حسابكم", c:"Profile menu > Learn more > Keyboard shortcuts", car:"قائمة الحساب > Learn more > Keyboard shortcuts", s:"official"}
 ]},
 {id:"cl-skills", tool:"claude", label:"Skills", lar:"المهارات", eyebrow:"Claude skills", ear:"مهارات Claude", title:"Skills: teach Claude a job once, reuse it forever", tar:"المهارات: علّموا Claude مهمة مرة واحدة واستخدموها دائمًا", intro:"A skill is a folder with a SKILL.md file that tells Claude exactly how to do one job: your proposal format, your brand rules, your report template. Claude loads it only when the task needs it.", iar:"المهارة مجلد يحتوي على ملف SKILL.md يشرح لـ Claude طريقة أداء مهمة محددة: صيغة عروضكم، أو قواعد علامتكم التجارية، أو قالب تقاريركم. ويستدعيها Claude فقط عندما تحتاجها المهمة.", kind:"path", items:[
  {a:"Step 1: switch on file creation", ar:"الخطوة 1: تفعيل إنشاء الملفات", c:"Settings > Capabilities > Create and edit files", car:"Settings > Capabilities > Create and edit files", s:"official", d:"Skills run on code execution, so this must be on.", dar:"المهارات تعمل عبر تنفيذ الأكواد، لذا يجب تفعيل هذا الخيار."},
  {a:"Step 2: open your skills", ar:"الخطوة 2: فتح قائمة المهارات", c:"Customize > Skills", car:"Customize > Skills", s:"official", d:"Anthropic's built-in skills are here: Excel, Word, PowerPoint and PDF.", dar:"ستجدون هنا المهارات الجاهزة من Anthropic: Excel وWord وPowerPoint وPDF."},
  {a:"Step 3: upload your own skill", ar:"الخطوة 3: رفع مهارة خاصة بكم", c:"Customize > Skills > + > Create skill > Upload a skill", car:"Customize > Skills > + > Create skill > Upload a skill", s:"official", d:"Upload the skill folder as a ZIP file, then switch it on.", dar:"ارفعوا مجلد المهارة كملف ZIP، ثم فعّلوه."},
  {a:"The rule most uploads break", ar:"القاعدة التي يخالفها معظم من يرفع مهارة", c:"Folder name = skill name, with SKILL.md inside", car:"اسم المجلد = اسم المهارة، وبداخله SKILL.md", s:"official", d:"Most failed uploads are a missing SKILL.md, a mismatched folder name, or a ZIP that is too big.", dar:"أغلب حالات الفشل سببها غياب ملف SKILL.md، أو اختلاف اسم المجلد، أو حجم ZIP كبير."},
  {a:"Free skills made by Anthropic", ar:"مهارات مجانية من Anthropic", c:"github.com/anthropics/skills", car:"github.com/anthropics/skills", s:"official", d:"Download a folder, ZIP it, upload it in step 3.", dar:"حمّلوا المجلد، واضغطوه بصيغة ZIP، ثم ارفعوه كما في الخطوة 3."},
  {a:"Skills for the whole team", ar:"مهارات للفريق بالكامل", c:"Organization settings > Plugins & skills > Policy", car:"Organization settings > Plugins & skills > Policy", s:"varies", d:"Team and Enterprise owners can provision skills for everyone.", dar:"يمكن لمالكي حسابات Team وEnterprise تفعيل المهارات للجميع."},
  {a:"Use a skill", ar:"استخدام المهارة", c:"Just ask. Claude picks the right skill itself.", car:"اطلبوا المهمة فقط، وسيختار Claude المهارة المناسبة.", s:"official", d:"No command needed. Name the skill in your message if you want to be sure.", dar:"لا حاجة لأي أمر. اذكروا اسم المهارة في رسالتكم إن أردتم التأكد."}
 ]},
 {id:"cl-keys", tool:"claude", label:"Shortcuts", lar:"الاختصارات", eyebrow:"Desktop app and Docs", ear:"تطبيق سطح المكتب وClaude Docs", title:"Claude shortcuts worth learning", tar:"اختصارات Claude التي تستحق التعلم", intro:"Claude has fewer shortcuts than ChatGPT. These are the ones that are real and save time.", iar:"اختصارات Claude أقل من ChatGPT. هذه هي الاختصارات الحقيقية التي توفر الوقت فعلًا.", kind:"keys", items:[
  {a:"Open Claude from any app", ar:"فتح Claude من أي تطبيق", k:{m:"Alt Alt", w:"SET"}, s:"official", d:"Mac: double tap Option. Windows: set your own in the desktop app settings.", dar:"على Mac: اضغطوا Option مرتين. على Windows: حدّدوا اختصاركم من إعدادات التطبيق."},
  {a:"Alternative quick entry", ar:"اختصار بديل للفتح السريع", k:{m:"Alt Space", w:null}, s:"official", d:"Choose it instead of double Option in settings.", dar:"اختاروه بدل Option المزدوج من الإعدادات."},
  {a:"Talk instead of typing", ar:"التحدث بدل الكتابة", k:{m:"Caps", w:null}, s:"varies", d:"Off by default. Turn on in Settings > General. Press again to stop.", dar:"غير مفعّل افتراضيًا. فعّلوه من Settings > General، واضغطوا مرة أخرى للإيقاف."},
  {a:"Open the tools menu in a chat", ar:"فتح قائمة الأدوات داخل المحادثة", k:"/", s:"official", d:"Type / to reach connectors, skills and more.", dar:"اكتبوا / للوصول إلى الموصلات والمهارات وغيرها."},
  {a:"New line without sending", ar:"سطر جديد دون إرسال", k:"Shift Enter", s:"official"},
  {a:"Claude Docs: show all doc shortcuts", ar:"Claude Docs: عرض كل اختصارات المستندات", k:"Mod /", s:"official"},
  {a:"Claude Docs: comment on selected text", ar:"Claude Docs: إضافة تعليق على النص المحدد", k:{w:"Ctrl Alt M", m:"Mod Alt M"}, s:"official"},
  {a:"Claude Docs: insert a table, checklist or date", ar:"Claude Docs: إدراج جدول أو قائمة مهام أو تاريخ", k:"/", s:"official"}
 ]},
 {id:"cl-prompts", tool:"claude", label:"Power prompts", lar:"أوامر احترافية", eyebrow:"Claude prompt tricks", ear:"حيل أوامر Claude", title:"Prompts that use what Claude is best at", tar:"أوامر تستفيد من أقوى ما في Claude", intro:"Long documents, careful writing and building small tools. Copy the full prompt and fill the brackets.", iar:"المستندات الطويلة، والكتابة الدقيقة، وبناء الأدوات الصغيرة. انسخوا الأمر الكامل واملؤوا ما بين الأقواس.", kind:"prompt", items:[
  {c:"/makeskill", a:"Turn this chat into a reusable skill", ar:"تحويل هذه المحادثة إلى مهارة دائمة", p:"Look at everything we did in this chat. Turn the process into a Claude skill: write a complete SKILL.md with a clear name, a one line description of when to use it, step by step instructions, the quality checks you applied, and one worked example. Then package it as a folder I can ZIP and upload in Customize > Skills."},
  {c:"/interviewme", a:"Interview me before you write", ar:"اسألني قبل أن تكتب", p:"Before you write anything, interview me. Ask me one question at a time, up to 8 questions, about my goal, my audience, what I have tried, and what a great result looks like. When you have enough, summarize what you understood in 5 bullet points and wait for my OK before you start."},
  {c:"/myvoice", a:"Write in my voice, not yours", ar:"اكتب بأسلوبي لا بأسلوبك", p:"Here are 3 samples of my writing: [paste]. Study my sentence length, vocabulary, humor, and how I open and close. Write a short style guide of what makes it mine, then write [piece] in that voice. Avoid any phrase I would never use."},
  {c:"/onepager", a:"Build a small tool I can share", ar:"ابنِ لي أداة صغيرة أشاركها", p:"Build an interactive one page tool as an artifact: a [calculator / quiz / checklist] that helps [audience] [result]. Keep it mobile friendly, in [language], with my brand colors [colors]. Ask me 3 questions first if anything is unclear."},
  {c:"/bigdoc", a:"Pull the decisions out of a long document", ar:"استخراج القرارات من مستند طويل", p:"I am attaching a long document. Give me: 1) a 5 line summary, 2) every decision, deadline and number in a table with the page or section it came from, 3) anything that contradicts itself, 4) the 3 questions I should ask before I sign or act. Quote the exact text for anything important."},
  {c:"/editor", a:"Edit like a tough editor", ar:"حرّر كمحرر صارم", p:"Act as a tough editor. Cut this text by 30 percent without losing meaning. Remove filler, repeated ideas and weak openings. Then list the 5 biggest changes you made and why. Text: [paste]"},
  {c:"/continue", a:"Pick up where we left off", ar:"أكمل من حيث توقفنا", p:"Search our past chats about [project]. Summarize where we stopped, what we decided, and what is still open. Then suggest the next 3 steps and start with the first one."},
  {c:"/sop", a:"Turn how I work into a written process", ar:"تحويل طريقة عملي إلى إجراء مكتوب", p:"I will describe how I do [task] in my own messy words. Turn it into a clear standard operating procedure: purpose, who does it, tools needed, numbered steps, quality checks, and common mistakes. Keep it short enough for a new team member to follow on day one. My description: [paste]"}
 ]},

 /* ================= GEMINI ================= */
 {id:"ge-news", tool:"gemini", label:"Gems are changing", lar:"تغيير Gems", eyebrow:"Act before 17 Nov 2026", ear:"تصرّفوا قبل 17 نوفمبر 2026", title:"Gems are becoming skills. Here is what to do.", tar:"Gems تتحول إلى مهارات. هذا ما يجب فعله.", intro:"Google is replacing Gems with skills for personal accounts. Gems turn read only on 17 November 2026 and disappear on 17 December 2026. Most will convert automatically, but some files will not.", iar:"تستبدل Google ميزة Gems بالمهارات في الحسابات الشخصية. تصبح Gems للقراءة فقط في 17 نوفمبر 2026، وتُحذف في 17 ديسمبر 2026. معظمها سيتحول تلقائيًا، لكن بعض الملفات لن تنتقل.", kind:"path", items:[
  {a:"17 Nov 2026: Gems become read only", ar:"17 نوفمبر 2026: تصبح Gems للقراءة فقط", c:"Personal accounts, 18+", car:"الحسابات الشخصية لمن هم فوق 18 عامًا", s:"official", d:"Work and school accounts move in 2027.", dar:"حسابات العمل والتعليم تنتقل في 2027."},
  {a:"17 Dec 2026: Gems are removed", ar:"17 ديسمبر 2026: حذف Gems نهائيًا", c:"Gems > Edit > download your Knowledge files", car:"Gems > Edit > تحميل ملفات Knowledge", s:"official", d:"Audio, video, GitHub files, old .doc/.xls/.ppt and archives do not carry over. Save them now.", dar:"ملفات الصوت والفيديو وGitHub وملفات .doc/.xls/.ppt القديمة والملفات المضغوطة لن تنتقل. احفظوها الآن."},
  {a:"Create a skill", ar:"إنشاء مهارة", c:"Customize > Skills > Create > Create manually", car:"Customize > Skills > Create > Create manually", s:"official", d:"Add a name, a description and the instructions your Gem used.", dar:"أضيفوا الاسم والوصف والتعليمات التي كانت في Gem."},
  {a:"Use a skill in any chat", ar:"استخدام المهارة في أي محادثة", c:"Type / then the skill name", car:"اكتبوا / ثم اسم المهارة", s:"official", d:"Google says this will switch to @ soon. Gemini can also apply skills by itself.", dar:"تقول Google إن ذلك سيتحول إلى @ قريبًا، كما يمكن لـ Gemini تطبيق المهارات تلقائيًا."},
  {a:"Add files to a skill", ar:"إضافة ملفات إلى المهارة", c:"More options > Download, add files beside SKILL.md, More options > Replace skill", car:"More options > Download، ضعوا الملفات بجانب SKILL.md، ثم More options > Replace skill", s:"varies", d:"Folder name must match the skill name. Web and Mac app only for now.", dar:"يجب أن يطابق اسم المجلد اسم المهارة. متاح حاليًا على الويب وتطبيق Mac فقط."},
  {a:"The limits to know", ar:"الحدود التي يجب معرفتها", c:"100 active skills, 100 MB of files per skill", car:"100 مهارة نشطة، و100 ميغابايت للملفات في كل مهارة", s:"official", d:"Skills do not yet work with Canvas, Deep Research or video creation.", dar:"لا تعمل المهارات بعد مع Canvas أو Deep Research أو إنشاء الفيديو."}
 ]},
 {id:"ge-apps", tool:"gemini", label:"@ apps", lar:"تطبيقات @", eyebrow:"Type @ in the chat", ear:"اكتبوا @ في المحادثة", title:"Point Gemini at your Google apps", tar:"وجّهوا Gemini إلى تطبيقات Google لديكم", intro:"Type @ and pick an app so Gemini works with your real inbox, calendar and the live web. Keep Activity must be on for this to work on the web.", iar:"اكتبوا @ واختاروا التطبيق ليعمل Gemini على بريدكم وتقويمكم الحقيقيين وعلى الويب مباشرة. يجب تفعيل Keep Activity ليعمل ذلك على الويب.", kind:"cmd", items:[
  {c:"@Gmail", a:"Summarize or find emails", ar:"تلخيص الرسائل أو البحث فيها", s:"official", d:"Try: @Gmail summarize unread emails from clients this week.", dar:"جرّبوا: @Gmail summarize unread emails from clients this week."},
  {c:"@Google Calendar", a:"Check or create events", ar:"مراجعة المواعيد أو إنشاؤها", s:"official"},
  {c:"@YouTube", a:"Find and summarize videos", ar:"البحث عن مقاطع الفيديو وتلخيصها", s:"official"},
  {c:"@Google Maps", a:"Places, routes and local businesses", ar:"الأماكن والطرق والأنشطة المحلية", s:"official"},
  {c:"@Google Flights", a:"Compare flights", ar:"مقارنة رحلات الطيران", s:"official"},
  {c:"@Google Hotels", a:"Compare hotels", ar:"مقارنة الفنادق", s:"official"},
  {c:"@WhatsApp", a:"Send a message", ar:"إرسال رسالة", s:"varies", d:"Android only.", dar:"على Android فقط."},
  {c:"@ + tab name", a:"Ask about an open Chrome tab", ar:"السؤال عن تبويب مفتوح في Chrome", s:"varies", d:"In Gemini in Chrome. Up to 10 tabs at once.", dar:"عبر Gemini in Chrome، حتى 10 تبويبات في المرة الواحدة."}
 ]},
 {id:"ge-chrome", tool:"gemini", label:"Gemini in Chrome", lar:"Gemini في Chrome", eyebrow:"Desktop", ear:"سطح المكتب", title:"Put Gemini one shortcut away", tar:"اجعلوا Gemini على بعد اختصار واحد", intro:"Gemini in Chrome reads the page you are on. Turn on its tray icon and shortcut once.", iar:"يقرأ Gemini in Chrome الصفحة التي تتصفحونها. فعّلوا أيقونته واختصاره مرة واحدة.", kind:"path", items:[
  {a:"Turn on the shortcut", ar:"تفعيل الاختصار", c:"Chrome Settings > AI innovations > Gemini in Chrome > Preferences", car:"Chrome Settings > AI innovations > Gemini in Chrome > Preferences", s:"varies", d:"Then switch on: Show Gemini in system tray (Windows) or menu bar (Mac) and turn on keyboard shortcut.", dar:"ثم فعّلوا خيار إظهار Gemini في شريط النظام مع تفعيل اختصار لوحة المفاتيح."},
  {a:"Desktop app", ar:"تطبيق سطح المكتب", c:"gemini.google/desktop", car:"gemini.google/desktop", s:"official", d:"Gemini now has apps for Windows and Mac.", dar:"أصبح لـ Gemini تطبيقات على Windows وMac."}
 ]},
 {id:"ge-prompts", tool:"gemini", label:"Power prompts", lar:"أوامر احترافية", eyebrow:"Gemini prompt tricks", ear:"حيل أوامر Gemini", title:"Prompts that use Google's data", tar:"أوامر تستفيد من بيانات Google", intro:"Gemini's edge is your Google account and Google's own data. These prompts lean on that.", iar:"قوة Gemini في حساب Google الخاص بكم وفي بيانات Google نفسها. هذه الأوامر تستفيد من ذلك.", kind:"prompt", items:[
  {c:"/inboxzero", a:"Morning inbox brief", ar:"ملخص البريد الصباحي", p:"@Gmail look at emails from the last 24 hours. Group them into: needs my reply today, waiting on someone, FYI, and promotions. For the first group, draft a short reply for each one in my tone. Do not send anything."},
  {c:"/videonotes", a:"Turn a YouTube video into notes", ar:"تحويل فيديو YouTube إلى ملاحظات", p:"@YouTube [video link]. Give me the 7 key ideas with timestamps, the one action I should take this week, and 3 quotes worth sharing. Skip the intro and sponsor parts."},
  {c:"/localscan", a:"Scan local competitors", ar:"تحليل المنافسين المحليين", p:"@Google Maps find [type of business] near [area]. For the top 8, list rating, number of reviews, opening hours, and what reviewers praise or complain about most. Then tell me the gap I could own."},
  {c:"/weekplan", a:"Plan my week from my calendar", ar:"خطط أسبوعي من التقويم", p:"@Google Calendar look at my next 7 days. Find my 3 biggest free blocks, flag days with back to back meetings, and suggest where to place [task] so I finish it by [day]."},
  {c:"/deepbrief", a:"Research brief with sources", ar:"تقرير بحثي مع المصادر", p:"Use Deep Research. Write a brief on [topic] for [audience]: current state, the 5 numbers that matter with sources, the main players, risks, and what a newcomer should do first. Link every claim to a source I can open."},
  {c:"/gemtoskill", a:"Rebuild an old Gem as a skill", ar:"إعادة بناء Gem قديم كمهارة", p:"Here are the instructions from my old Gem: [paste]. Rewrite them as a skill: a clear name, a one line description of when it should be used, and step by step instructions. Remove anything vague and add 2 examples of good output."}
 ]},

 /* ================= GROK ================= */
 {id:"gr-basics", tool:"grok", label:"Basics", lar:"الأساسيات", eyebrow:"grok.com, apps and X", ear:"grok.com والتطبيقات ومنصة X", title:"Where Grok is different", tar:"ما الذي يميز Grok", intro:"Grok's edge is live X posts and the web. Use it for what people are saying right now, not for long documents.", iar:"ميزة Grok الأساسية هي منشورات X والويب لحظة بلحظة. استخدموه لمعرفة ما يقوله الناس الآن، لا للمستندات الطويلة.", kind:"path", items:[
  {a:"Open Grok inside X", ar:"فتح Grok داخل X", c:"X app or web > Grok icon in the navigation bar", car:"تطبيق X أو موقعه > أيقونة Grok في شريط التنقل", s:"varies", d:"Needs X Premium or Premium+.", dar:"يتطلب اشتراك X Premium أو Premium+."},
  {a:"Use it free", ar:"استخدامه مجانًا", c:"grok.com or the Grok app", car:"grok.com أو تطبيق Grok", s:"official", d:"Free to start. SuperGrok raises the limits.", dar:"البداية مجانية، واشتراك SuperGrok يرفع الحدود."},
  {a:"Make images and video", ar:"إنشاء الصور والفيديو", c:"Grok Imagine", car:"Grok Imagine", s:"official", d:"Results carry a Grok watermark you cannot remove.", dar:"تحمل النتائج علامة Grok المائية ولا يمكن إزالتها."},
  {a:"Connect email, files and calendar", ar:"ربط البريد والملفات والتقويم", c:"Connectors, inside a chat", car:"Connectors داخل المحادثة", s:"official"},
  {a:"Check how much you have left", ar:"معرفة الرصيد المتبقي", c:"Settings > Usage", car:"Settings > Usage", s:"official", d:"One weekly allowance shared across chat and Imagine.", dar:"رصيد أسبوعي واحد مشترك بين المحادثة وImagine."},
  {a:"Control your data", ar:"التحكم في بياناتكم", c:"Profile > Settings > Data Controls", car:"Profile > Settings > Data Controls", s:"official"}
 ]},
 {id:"gr-x", tool:"grok", label:"On X", lar:"على X", eyebrow:"Inside posts", ear:"داخل المنشورات", title:"Use Grok without leaving X", tar:"استخدموا Grok دون مغادرة X", intro:"Tag Grok under any post to get context, a summary or a fact check in the thread.", iar:"اذكروا Grok تحت أي منشور للحصول على سياق أو ملخص أو تحقق من المعلومة داخل النقاش.", kind:"cmd", items:[
  {c:"@grok explain this", a:"Get context on a post", ar:"فهم سياق منشور", s:"varies", d:"Reply to the post with this. Grok answers publicly in the thread.", dar:"اكتبوه ردًا على المنشور، وسيرد Grok علنًا في النقاش."},
  {c:"@grok is this true?", a:"Fact check a viral claim", ar:"التحقق من ادعاء منتشر", s:"varies", d:"Still open the sources it cites.", dar:"افتحوا المصادر التي يذكرها بأنفسكم."},
  {c:"@grok summarize this thread", a:"Summarize a long thread", ar:"تلخيص نقاش طويل", s:"varies"}
 ]},
 {id:"gr-prompts", tool:"grok", label:"Power prompts", lar:"أوامر احترافية", eyebrow:"Grok prompt tricks", ear:"حيل أوامر Grok", title:"Prompts for live market research", tar:"أوامر لأبحاث السوق المباشرة", intro:"Ask Grok to search X and the web, and always ask for links you can open.", iar:"اطلبوا من Grok البحث في X والويب، واطلبوا دائمًا روابط يمكنكم فتحها.", kind:"prompt", items:[
  {c:"/pulse", a:"What people say about a topic this week", ar:"ما يقوله الناس عن موضوع هذا الأسبوع", p:"Search X posts from the last 7 days about [topic]. Group what people say into the top 5 opinions, with 2 example posts and links for each. Then tell me which complaint nobody is solving yet."},
  {c:"/painpoints", a:"Find your audience's real problems", ar:"اكتشاف مشكلات جمهوركم الحقيقية", p:"Search X and the web for how [audience] describe their problems with [topic], in their own words. Give me 15 exact phrases they use, the emotion behind each, and which ones show they would pay for a solution."},
  {c:"/competitorx", a:"Watch a competitor", ar:"مراقبة منافس", p:"Look at what [competitor or account] posted in the last 30 days. Which posts got the most replies and reposts, what topics and formats do they repeat, and what are their followers asking for that they are not answering?"},
  {c:"/hooks", a:"Hooks from what is working now", ar:"افتتاحيات من المحتوى الناجح الآن", p:"Find the most engaged X posts this week about [topic]. Pull out the opening line of each, explain why it works, then write 10 new hooks in the same style for my audience of [audience]. Do not copy any line."},
  {c:"/newsdesk", a:"News that affects my business", ar:"الأخبار التي تؤثر على نشاطي", p:"As of today, what changed in the last 14 days that affects [industry] in [country or region]? Only include items with a source link and a date. For each, one line on what it means for a small business like mine."},
  {c:"/factcheck", a:"Check before you share", ar:"تحقّقوا قبل أن تشاركوا", p:"Someone shared this claim: [paste]. Is it true? Show me the original source, when it was first posted, and any credible source that contradicts it. Rate your confidence from 1 to 10 and say what would change your mind."}
 ]},

 /* ================= BUSINESS PROMPTS ================= */
 {id:"bz-coach", tool:"biz", label:"Coaches & experts", lar:"للمدربين والخبراء", eyebrow:"Works in any AI", ear:"يعمل مع أي أداة ذكاء اصطناعي", title:"Prompts for coaches, consultants and experts", tar:"أوامر للمدربين والاستشاريين والخبراء", intro:"Each one is written to give you something you can use today, not a generic essay. Fill the brackets with real details.", iar:"كل أمر مكتوب ليعطيكم نتيجة تستخدمونها اليوم، لا مقالًا عامًا. املؤوا ما بين الأقواس بتفاصيل حقيقية.", kind:"prompt", items:[
  {c:"/offer", a:"Sharpen your offer in one line", ar:"صياغة عرضكم في سطر واحد", p:"I help [who] get [result] in [time] without [pain]. Challenge this sentence: is the who specific enough, is the result measurable, is the pain real? Give me 5 sharper versions and tell me which one a stranger would understand in 5 seconds."},
  {c:"/avatar", a:"Know your ideal client deeply", ar:"فهم عميلكم المثالي بعمق", p:"Describe my ideal client for [offer]: a day in their life, the 3 problems keeping them up at night in their own words, what they already tried, what they fear about hiring someone like me, and where they spend time online."},
  {c:"/objections", a:"Answer the top sales objections", ar:"الرد على أهم اعتراضات البيع", p:"My offer is [offer] at [price]. List the 8 objections I will hear most, the real fear behind each, and a calm, honest reply for each one in under 40 words. No pressure tactics."},
  {c:"/30days", a:"30 days of content in one go", ar:"محتوى 30 يومًا دفعة واحدة", p:"Create a 30 day content plan for [platform] for my audience of [audience] who want [result]. Mix teaching, stories, proof and invitation posts. For each day: the hook, the main point, and a soft call to action."},
  {c:"/webinar", a:"Outline a free workshop that sells", ar:"مخطط ورشة مجانية تبيع", p:"Outline a 45 minute free workshop for [audience] on [topic] that leads naturally to [offer]. Include the promise, 3 teaching points that each break a false belief, a short story slot, and an honest invitation at the end."},
  {c:"/salespage", a:"First draft of a sales page", ar:"مسودة أولى لصفحة مبيعات", p:"Write a sales page draft for [offer] for [audience]. Sections: headline, the problem in their words, why other solutions failed, what is inside, who it is not for, proof placeholders, FAQ, and a clear call to action. Plain language, no hype."},
  {c:"/onboard", a:"Welcome a new client properly", ar:"استقبال عميل جديد باحتراف", p:"Write a welcome sequence for a new client of [program]: a welcome message for today, what happens in week 1, what I need from them, and a check in message for day 7. Warm, clear, and short enough to read on a phone."},
  {c:"/testimonial", a:"Ask for a testimonial that sells", ar:"طلب شهادة عميل مقنعة", p:"Write a short message asking [client] for a testimonial. Include 4 guiding questions: where they were before, what changed, a specific result or number, and who they would recommend me to. Make it easy to answer by voice note."}
 ]},
 {id:"bz-local", tool:"biz", label:"Business owners", lar:"لأصحاب الأنشطة", eyebrow:"Works in any AI", ear:"يعمل مع أي أداة ذكاء اصطناعي", title:"Prompts for clinics, centers, shops and local businesses", tar:"أوامر للعيادات والمراكز والمتاجر والأنشطة المحلية", intro:"The daily jobs that eat your week: replies, reviews, offers and staff instructions.", iar:"المهام اليومية التي تستهلك أسبوعكم: الردود، والتقييمات، والعروض، وتعليمات الموظفين.", kind:"prompt", items:[
  {c:"/reviewreply", a:"Reply to any Google review", ar:"الرد على أي تقييم في Google", p:"Write a reply to this Google review for my [business type]. If it is positive, thank them and mention the specific thing they liked. If it is negative, apologize without excuses, take it offline with a contact, and keep it under 60 words. Review: [paste]"},
  {c:"/broadcast", a:"A WhatsApp broadcast people read", ar:"رسالة واتساب جماعية تُقرأ فعلًا", p:"Write a WhatsApp broadcast for my [business] about [news or offer]. Under 70 words, one clear benefit, one call to action, friendly tone, no all caps and no spammy words. Give me 3 versions."},
  {c:"/faqbot", a:"FAQ for your chatbot or staff", ar:"أسئلة شائعة لروبوت المحادثة أو الموظفين", p:"List the 25 questions customers ask a [business type] most, then write a short, accurate answer for each using these facts about my business: [hours, prices, location, policies]. Mark any answer where you need more information from me."},
  {c:"/staffsop", a:"Staff instructions anyone can follow", ar:"تعليمات واضحة لأي موظف", p:"Turn this into a one page instruction sheet for my staff: [describe task]. Numbered steps, what good looks like, the 3 most common mistakes, and what to do if something goes wrong."},
  {c:"/promo", a:"Plan a promotion that does not cheapen you", ar:"خطة عرض ترويجي لا تقلل من قيمتكم", p:"Plan a 2 week promotion for my [business] to [goal]. Suggest 3 offer ideas that add value instead of cutting price, the message for each channel (WhatsApp, Instagram, Google Business Profile), and how I will know it worked."},
  {c:"/priceup", a:"Announce a price increase calmly", ar:"إعلان رفع الأسعار بهدوء", p:"Write a short, honest message telling my customers prices will rise by [amount] on [date]. Explain why in one line, thank them, and give loyal customers a reason to book before the date. No apologies, no drama."},
  {c:"/complaint", a:"Calm an angry customer", ar:"تهدئة عميل غاضب", p:"An angry customer sent this: [paste]. Write a reply that acknowledges their frustration, takes responsibility for our part, offers [solution], and moves the conversation to a call or private chat. Keep it human and short."},
  {c:"/gbppost", a:"Weekly Google Business Profile post", ar:"منشور أسبوعي على Google Business Profile", p:"Write 4 short Google Business Profile posts for my [business] in [area] for the next 4 weeks. Each one under 80 words, with a local detail, one offer or tip, and a clear call to action button suggestion."}
 ]}
];


/* ===== AI Vault v2: multi tool extension (appended after the original app) ===== */
DATA.forEach(function(s){ if(!s.tool) s.tool="chatgpt"; });
DATA.push.apply(DATA, DATA_NEW);
TOK.Caps = {w:"Caps Lock", m:"Caps Lock"};

const TOOLS = [
 {id:"chatgpt", n:"ChatGPT"},
 {id:"claude", n:"Claude"},
 {id:"gemini", n:"Gemini"},
 {id:"grok", n:"Grok"},
 {id:"biz", n:"Business prompts", nar:"أوامر الأعمال"}
];
const SRC = {
 chatgpt:[
  ["OpenAI Help: Using ChatGPT for Windows","https://help.openai.com/en/articles/9982051-using-chatgpt-for-windows"],
  ["OpenAI: ChatGPT app commands and keyboard shortcuts","https://learn.chatgpt.com/docs/reference/commands"],
  ["OpenAI: ChatGPT app slash commands","https://learn.chatgpt.com/docs/reference/slash-commands"],
  ["TechRepublic: ChatGPT photo editing trends 2026","https://www.techrepublic.com/article/news-chatgpt-photo-editing-trends-2026/"],
  ["Schieb.de: ChatGPT image commands","https://www.schieb.de/?p=814488"]],
 claude:[
  ["Claude Help: Use skills in Claude","https://support.claude.com/en/articles/12512180-use-skills-in-claude"],
  ["Claude Help: Chat search and memory","https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context"],
  ["Claude Help: Connectors","https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities"],
  ["Claude Help: Quick entry on Mac","https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac"],
  ["Claude Help: Claude Docs keyboard shortcuts","https://support.claude.com/en/articles/17458093"],
  ["Anthropic: example skills on GitHub","https://github.com/anthropics/skills"]],
 gemini:[
  ["Gemini Help: The transition from Gems to skills","https://support.google.com/gemini/answer/18560919"],
  ["Gemini Help: Connected Apps","https://support.google.com/gemini/answer/13695044"],
  ["Gemini Help: Use Gemini in Chrome","https://support.google.com/gemini/answer/16283624"],
  ["Google: Gemini for desktop","https://gemini.google/desktop/"]],
 grok:[
  ["xAI: Welcome to Grok","https://docs.x.ai/grok/overview"],
  ["xAI: Grok website and apps FAQ","https://docs.x.ai/grok/faq"],
  ["X Help: About Grok","https://help.x.com/en/using-x/about-grok"]],
 biz:[]
};
const T2 = {
 en:{updated:"Updated 3 Nov 2026", vault:"Free AI Vault",
  h1:'Every AI shortcut, skill and prompt.<br><em>One page.</em> No comment required.',
  lede:'Creators ask you to comment a word to get ten of these. Here is <strong>the whole set in one place</strong>, for ChatGPT, Claude, Gemini and Grok, plus business prompt packs you can use today. Every trick comes with the full prompt so it works every time.',
  hint_chatgpt:"opens ChatGPT's own shortcut list. Start there.",
  hint_claude:"Start with Setup. Five settings, ten minutes, and Claude stops forgetting you.",
  hint_gemini:"Gems turn read only on 17 Nov 2026. The first section shows what to do.",
  hint_grok:"Use Grok for what people are saying right now. Always ask for links.",
  hint_biz:"Works in any AI. Fill the brackets with real details, not placeholders.",
  st_total:"shortcuts, skills and prompts", st_tools:"AI tools covered",
  v_p:"AI sounds confident even when it is wrong. These six prompts take ten seconds and turn any AI from a yes man into a sparring partner. Use them on anything you will publish, sell or decide on.",
  inTool:"in", allTools:"Results from every tool",
  next:["Perplexity shortcuts","Prompt packs by industry","AI video tools","Ready made automation recipes"],
  srcNone:"Written for this vault. Test the output before you rely on it.",
  search:"Search: skills, memory, @Gmail, headshot, reviews...",
  lg1t:"Built into the tool", lg1d:"Documented by the company that makes it.",
  lg3t:"Not a feature, still works", lg3d:"The AI reads it as an instruction. Use the full prompt for reliable results.",
  lad_t:"A prompt saves you minutes. A system saves you the week.",
  lad_p:"Copying prompts into a chat tab is step one. The real gain comes when AI works inside your business while you are busy with clients.",
  k_eye:"For business owners", k_t:"Put AI to work inside your business", k_p:"Kayan answers WhatsApp, Instagram and Facebook messages in Arabic and English, books appointments, follows up with leads and asks happy customers for reviews. Built for clinics, centers, shops, coaches and experts.", k_cta:"Try Kayan free for 14 days",
  e_eye:"For coaches, consultants and specialists", e_t:"Turn your expertise into paying clients", e_p:"Elite Digital Coach builds your offer, your content and your sales system with you, step by step, so AI saves you time and your expertise brings in clients. Arabic program.", e_cta:"See client results",
  foot:"AI tools change every week. Spotted something that moved? Tell Tareq and it gets fixed in the next update.<br>&copy; 2026 Tareq Samara. Free to use and share."},
 ar:{updated:"آخر تحديث: 3 نوفمبر 2026", vault:"خزنة الذكاء الاصطناعي المجانية",
  h1:'كل اختصارات الذكاء الاصطناعي ومهاراته وأوامره.<br><em>في صفحة واحدة.</em> دون الحاجة إلى التعليق بأي كلمة.',
  lede:'يطلب صناع المحتوى التعليق بكلمة للحصول على عشرة من هذه الحيل. هنا <strong>المجموعة كاملة في مكان واحد</strong> لأدوات ChatGPT وClaude وGemini وGrok، مع حزم أوامر للأعمال تستخدمونها اليوم. كل حيلة مرفقة بالأمر الكامل لتعمل في كل مرة.',
  hint_chatgpt:"يفتح قائمة الاختصارات داخل ChatGPT. ابدؤوا من هنا.",
  hint_claude:"ابدؤوا بقسم الإعداد: خمسة إعدادات في عشر دقائق، ولن ينساكم Claude بعدها.",
  hint_gemini:"تصبح Gems للقراءة فقط في 17 نوفمبر 2026. القسم الأول يشرح ما يجب فعله.",
  hint_grok:"استخدموا Grok لمعرفة ما يقوله الناس الآن، واطلبوا الروابط دائمًا.",
  hint_biz:"تعمل مع أي أداة ذكاء اصطناعي. املؤوا ما بين الأقواس بتفاصيل حقيقية.",
  st_total:"اختصار ومهارة وأمر", st_tools:"أدوات ذكاء اصطناعي",
  v_p:"يتحدث الذكاء الاصطناعي بثقة حتى عندما يخطئ. هذه الأوامر الستة تستغرق عشر ثوانٍ وتحوّل أي أداة من مجامل يوافقكم على كل شيء إلى شريك يناقشكم بجدية. استخدموها مع كل ما ستنشرونه أو تبيعونه أو تبنون عليه قرارًا.",
  inTool:"في", allTools:"نتائج من كل الأدوات",
  next:["اختصارات Perplexity","حزم أوامر حسب القطاع","أدوات الفيديو بالذكاء الاصطناعي","وصفات أتمتة جاهزة"],
  srcNone:"كُتبت خصيصًا لهذه الخزنة. اختبروا النتيجة قبل الاعتماد عليها.",
  search:"ابحثوا: مهارات، الذاكرة، @Gmail، صورة، تقييمات...",
  lg1t:"ميزة مدمجة في الأداة", lg1d:"موثقة من الشركة المطورة لها.",
  lg3t:"ليست ميزة، لكنها تعمل", lg3d:"تفهمها الأداة على أنها تعليمات. استخدموا الأمر الكامل للحصول على نتيجة ثابتة.",
  lad_t:"الأمر يوفر عليكم دقائق. والنظام يوفر عليكم الأسبوع.",
  lad_p:"نسخ الأوامر في نافذة محادثة هو الخطوة الأولى. أما المكسب الحقيقي فيأتي عندما يعمل الذكاء الاصطناعي داخل نشاطكم بينما أنتم مشغولون مع عملائكم.",
  k_eye:"لأصحاب الأنشطة", k_t:"اجعلوا الذكاء الاصطناعي يعمل داخل نشاطكم", k_p:"يرد كيان على رسائل واتساب وإنستغرام وفيسبوك بالعربية والإنجليزية، ويحجز المواعيد، ويتابع العملاء المحتملين، ويطلب التقييمات من العملاء الراضين. مصمم للعيادات والمراكز والمتاجر والمدربين والخبراء.", k_cta:"جرّبوا كيان مجانًا لمدة 14 يومًا",
  e_eye:"للمدربين والاستشاريين والأخصائيين", e_t:"حوّلوا خبرتكم إلى عملاء يدفعون", e_p:"يبني معكم برنامج Elite Digital Coach عرضكم ومحتواكم ونظام مبيعاتكم خطوة بخطوة، ليوفر الذكاء الاصطناعي وقتكم وتجلب خبرتكم العملاء.", e_cta:"شاهدوا نتائج العملاء",
  foot:"تتغير أدوات الذكاء الاصطناعي كل أسبوع. إن لاحظتم شيئًا تغيّر، أخبروا طارق ليُحدَّث في الإصدار القادم.<br>&copy; 2026 طارق سمارة. مجانية للاستخدام والمشاركة."}
};
Object.assign(T.en, T2.en); Object.assign(T.ar, T2.ar);

const toolName = function(id){ const x=TOOLS.find(function(o){return o.id===id;}); return x ? (LANG==="ar" && x.nar ? x.nar : x.n) : id; };
let TOOL = "chatgpt";
(function(){
  const h = (location.hash||"").toLowerCase();
  TOOLS.forEach(function(o){ if(h.indexOf(o.id)>-1) TOOL=o.id; });
  if(TOOL==="chatgpt"){ const st=store.get("vault-tool"); if(st && TOOLS.some(function(o){return o.id===st;})) TOOL=st; }
})();

function keysHTML(k){
  if(k==="SET") return '<span class="na">'+t("setOwn")+'</span>';
  const spec = (typeof k==="object") ? k[OS] : k;
  if(spec==="SET") return '<span class="na">'+t("setOwn")+'</span>';
  if(spec==null) return '<span class="na">'+(OS==="m"?t("winOnly"):t("macOnly"))+'</span>';
  return spec.split("|").map(function(c){return c.trim().split(" ").map(function(x){return '<span class="kc">'+esc(label(x))+'</span>';}).join("");}).join('<span class="or">'+t("or")+'</span>');
}

function tabs(){
  const el = document.getElementById("tools");
  el.innerHTML = TOOLS.map(function(o){
    const n = DATA.filter(function(s){return s.tool===o.id;}).reduce(function(a,s){return a+s.items.length;},0);
    return '<button type="button" class="tool" data-tool="'+o.id+'" aria-pressed="'+(o.id===TOOL)+'">'+esc(toolName(o.id))+'<span class="n">'+n+'</span></button>';
  }).join("");
  const capsHero = document.querySelector(".caps-hero");
  capsHero.classList.toggle("is-chatgpt", TOOL==="chatgpt");
  document.getElementById("tool-hint").textContent = t("hint_"+TOOL);
  document.querySelector(".os").style.display = DATA.some(function(s){return s.tool===TOOL && s.kind==="keys";}) ? "" : "none";
  document.querySelector(".truth").style.display = TOOL==="chatgpt" ? "" : "none";
  const src = SRC[TOOL]||[];
  document.getElementById("srcs").innerHTML = src.length ? src.map(function(x){return '<li><a href="'+x[1]+'" target="_blank" rel="noopener">'+esc(x[0])+'</a></li>';}).join("") : '<li>'+t("srcNone")+'</li>';
}
document.getElementById("tools").addEventListener("click", function(e){
  const b = e.target.closest(".tool"); if(!b) return;
  TOOL = b.dataset.tool; store.set("vault-tool", TOOL); FILTER = "all";
  try{ history.replaceState(null,"","#"+TOOL+(LANG==="ar"?"-ar":"")); }catch(_){}
  tabs(); chips(); render();
  const c = document.querySelector(".console"); if(c && c.getBoundingClientRect().top < 0) window.scrollTo({top: c.offsetTop - 4, behavior:"smooth"});
});

function chips(){
  const el = document.getElementById("chips");
  const secs = DATA.filter(function(s){return s.tool===TOOL;});
  const list = [{id:"all",l:t("all")},{id:"kit",l:t("kit"),n:KIT.size}].concat(secs.map(function(s){return {id:s.id,l:L(s,"label","lar")};}));
  el.innerHTML = list.map(function(s){return '<button type="button" class="chip" data-f="'+s.id+'" aria-pressed="'+(s.id===FILTER)+'">'+(s.id==="kit"?starSvg:'')+esc(s.l)+(s.id==="kit"?'<span class="n">'+s.n+'</span>':'')+'</button>';}).join("");
}

function render(){
  const main = document.getElementById("main");
  const terms = Q.toLowerCase().split(/\s+/).filter(Boolean);
  const wide = terms.length>0 || FILTER==="kit";
  let html = wide && terms.length ? '<p class="scope">'+t("allTools")+'</p>' : "", shown=0;
  DATA.forEach(function(sec){
    if(!wide && sec.tool!==TOOL) return;
    if(FILTER!=="all" && FILTER!=="kit" && FILTER!==sec.id) return;
    const items = sec.items.filter(function(it){ return (FILTER!=="kit" || KIT.has(keyOf(sec,it))) && terms.every(function(x){ return hay(sec,it).includes(x); }); });
    if(!items.length) return;
    shown += items.length;
    const toolTag = wide ? esc(toolName(sec.tool))+' &middot; ' : '';
    html += '<section class="grp" id="'+sec.id+'"><div class="grp-head"><span class="eyebrow">'+toolTag+esc(L(sec,"eyebrow","ear"))+' &middot; '+items.length+'</span><h2>'+esc(L(sec,"title","tar"))+'</h2><p>'+esc(L(sec,"intro","iar"))+'</p></div>';
    const what = function(it){ return '<div class="what"><strong>'+esc(L(it,"a","ar"))+'</strong>'+(it.d?'<small>'+esc(L(it,"d","dar"))+'</small>':'')+'</div>'; };
    if(sec.kind==="keys"){
      html += '<div class="rows">'+items.map(function(it){return '<div class="row">'+what(it)+'<div class="keys">'+keysHTML(it.k)+'</div><div class="side">'+badge(it.s)+starBtn(keyOf(sec,it))+'</div></div>';}).join("")+'</div>';
    } else if(sec.kind==="cmd"){
      html += '<div class="rows">'+items.map(function(it){return '<div class="row">'+what(it)+'<div class="cmd">'+esc(it.c)+'</div><div class="side">'+badge(it.s)+copyBtn(it.c,t("copy"))+starBtn(keyOf(sec,it))+'</div></div>';}).join("")+'</div>';
    } else if(sec.kind==="path"){
      html += '<div class="rows">'+items.map(function(it){return '<div class="row">'+what(it)+'<div class="path">'+esc(L(it,"c","car"))+'</div><div class="side">'+badge(it.s)+starBtn(keyOf(sec,it))+'</div></div>';}).join("")+'</div>';
    } else {
      const sorted = items.slice().sort(function(x,y){return (IMGS[y.c]?1:0)-(IMGS[x.c]?1:0);});
      const isPhoto = sec.id==="image";
      if(sorted.some(function(it){return IMGS[it.c];})) html += '<p class="sample-note">'+t(isPhoto?"sampleNote":"learnNote")+'</p>';
      const shot = function(it){ return !IMGS[it.c] ? '' : isPhoto
        ? '<button type="button" class="shot" data-shot="'+esc(it.c)+'" aria-label="'+t("enlarge")+'"><img class="after'+(it.c==="/thumbnail"?' wide':'')+'" src="'+IMGS[it.c]+'" alt="'+esc(it.a)+'" loading="lazy"><span class="tag a">'+t("after")+'</span><span class="binset"><img class="before" src="'+IMGS.base+'" alt="" loading="lazy"><span class="tag b">'+t("before")+'</span></span></button>'
        : '<button type="button" class="shot natural" data-shot="'+esc(it.c)+'" aria-label="'+t("enlarge")+'"><img class="after" src="'+IMGS[it.c]+'" alt="'+esc(it.a)+'" loading="lazy"><span class="tag a">'+t("example")+'</span></button>'; };
      html += '<div class="cards">'+sorted.map(function(it){return '<article class="card">'+shot(it)+'<div class="card-top"><span class="slash">'+esc(it.c)+'</span><div class="top-right">'+badge("community")+starBtn(keyOf(sec,it))+'</div></div><p class="what">'+esc(L(it,"a","ar"))+'</p><div class="card-actions">'+(sec.tool==="chatgpt"?copyBtn(it.c,t("copyTrick")):'')+copyBtn(it.p,t("copyPrompt"))+'</div><details'+(terms.length?' open':'')+'><summary>'+chev+t("seePrompt")+'</summary><pre>'+esc(it.p)+'</pre></details></article>';}).join("")+'</div>';
    }
    html += '</section>';
  });
  main.innerHTML = html;
  const empty = document.getElementById("empty");
  empty.hidden = shown>0;
  empty.innerHTML = FILTER==="kit" && !terms.length ? t("kitEmpty") : t("empty");
  document.getElementById("count").textContent = shown+" "+t("shown");
}

function stats(){
  const total = DATA.reduce(function(n,s){return n+s.items.length;},0);
  const pr = DATA.filter(function(s){return s.kind==="prompt";}).reduce(function(n,s){return n+s.items.length;},0);
  document.getElementById("stats").innerHTML = '<div><b>'+total+'</b>'+t("st_total")+'</div><div><b>4</b>'+t("st_tools")+'</div><div><b>'+pr+'</b>'+t("st_prompts")+'</div>';
}

function applyLang(){
  const r = document.documentElement;
  r.lang = LANG; r.dir = LANG==="ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(function(n){ n.innerHTML = t(n.dataset.i18n); });
  document.getElementById("lang").textContent = t("langBtn");
  document.getElementById("q").placeholder = t("search");
  document.getElementById("next").innerHTML = t("next").map(function(x){return '<span>'+esc(x)+'</span>';}).join("");
  tabs(); chips(); stats(); renderVerify(); render();
}

setOS(OS); applyLang();

})();
