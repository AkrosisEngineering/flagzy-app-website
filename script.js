const storeLinks = {
  appStore: "#",
  googlePlay: "#"
};

const legalDocumentMap = {
  privacy: {
    en: "docs/privacyEN.md",
    tr: "docs/privacyTR.md"
  },
  agreement: {
    en: "docs/userEN.md",
    tr: "docs/userTR.md"
  }
};

const translations = {
  tr: {
    metaTitleHome: "Flagzy | Bayrak Tahmin Oyunu",
    metaTitlePrivacy: "Flagzy | Gizlilik Politikası",
    metaTitleAgreement: "Flagzy | Kullanıcı Sözleşmesi",
    menuLabel: "Menu",
    navOverview: "Genel Bakış",
    navModes: "Modlar",
    navEvent: "Haftalık Meydan Okuma",
    navCompliance: "Ekran Görüntüleri",
    navFaq: "SSS",
    heroEyebrow: "Flagzy İçin Tek Sayfalık Başlangıç Sitesi",
    heroTitle: "Çoklu modları ve haftalık etkinlikleri olan hızlı, görüntü açma temelli bayrak tahmin oyunu.",
    heroText:
      "Bu site GitHub Pages üzerinde yayınlanabilecek şekilde, store uygunluğu, app-ads.txt ve ürün sunumu için hazırlandı. Metinler, ekran görüntüleri ve final görseller daha sonra yapısal değişiklik olmadan yenilenebilir.",
    heroCtaPrimary: "Modları İncele",
    heroCtaSecondary: "Ekran Görsellerini Gör",
    heroStatModes: "Tek Oyunculu Mod",
    heroStatDifficulty: "Zorluk Seviyesi",
    heroStatEvent: "Haftalık Meydan Okuma",
    visualTag: "Oynanış Önizlemesi",
    mockModeLabel: "Klasik Tahmin",
    mockGuessOne: "Tahmin 1",
    mockGuessTwo: "Tahmin 2",
    mockGuessThree: "Tahmin 3",
    miniLabelSpeed: "60 Saniyelik Tur",
    miniValueSpeed: "Hızlı Turlar, Daha Yüksek Skor",
    miniLabelReveal: "Haftalık Meydan Okuma",
    miniValueReveal: "Her hafta yeni bir bayrak görevi oyuncuları bekler",
    loopEyebrow: "Temel Döngü",
    loopTitle: "Tanımaya, hafızaya ve zaman baskısına kurulu tasarım.",
    loopText:
      "Her mod aynı bayrak odaklı çekirdeği korurken, oyuncuya verilen süreyi, bilgiyi ve baskıyı farklı şekilde değiştirir.",
    stepOneTitle: "Hedefi İncele",
    stepOneText:
      "Moda göre oyuncu bayrağı doğrudan, kısmen, çok kısa süreli veya bulanık biçimde görür.",
    stepTwoTitle: "Ülke Tahminlerini Gönder",
    stepTwoText:
      "Sistem seçilen ülke ile hedef bayrağı karşılaştırır ve eşleşme ile alan oranına göre ilgili bölgeleri açar.",
    stepThreeTitle: "Kısıtlarla Yarış",
    stepThreeText:
      "Bazılarında tahmin hakkı, bazılarında süre, bazılarında ise çok kısa gösterim penceresi ön plandadır.",
    stepFourTitle: "Hız ve İsabetle Skor Kazan",
    stepFourText:
      "Daha hızlı tanıma, daha az deneme ve daha zor seviyeler daha güçlü skor üretir.",
    modesEyebrow: "Tek Oyunculu Modlar",
    modesTitle: "Dört mod, dünya çapında bir bayrak veritabanı.",
    modesText:
      "Ürünün temeli tüm ülkeleri kapsayan liste ve oyuncuları farklı baskılar altında test eden modlardan oluşur.",
    modeOneTitle: "Klasik Tahmin",
    modeOneText:
      "Oyuncu en fazla altı tahmin yapar. Seçilen her ülke, benzerlik ve ortak alan oranına göre hedef bayrağın bir kısmını açar.",
    modeOneTagA: "6 tahmin",
    modeOneTagB: "bölgesel açılım",
    modeTwoTitle: "60 Saniye Yarışı",
    modeTwoText:
      "Aynı mantık bu kez 60 saniyelik turda çalışır. Daha çok bayrağı hızlı ve az denemeyle bulmak daha fazla puan getirir.",
    modeTwoTagA: "60 saniye",
    modeTwoTagB: "kombo puanı",
    modeThreeTitle: "Flash Flag",
    modeThreeText:
      "Bayrak yaklaşık 400 ms boyunca görünür ve kaybolur. Oyuncu hafızasına güvenir; üç zorluk seviyesi gösterim süresini daha da kısaltır.",
    modeThreeTagA: "hafıza testi",
    modeThreeTagB: "3 zorluk",
    modeFourTitle: "Progressive Reveal",
    modeFourText:
      "Bayrak bulanık başlar. Daha zor seviyeler daha az tahmin süresi verir ama daha yüksek puan kazandırır.",
    modeFourTagA: "blur meydan okuması",
    modeFourTagB: "yüksek risk skoru",
    eventEyebrow: "Öne Çıkan Alan",
    eventTitle: "Haftalık meydan okumalar deneyimi yeni bayrak hedefleriyle canlı tutar.",
    eventText:
      "Her hafta yeni bir bayrak meydan okuması gelir. Görsel zamanla daha okunabilir hale gelir ve oyuncu hedef ülkeyi ne kadar erken bulursa o kadar fazla puan kazanır.",
    eventPointOneTitle: "Açılım Zamanla Değişir",
    eventPointOneText:
      "Görsel her saniye daha kolay okunur, ancak daha fazla detay açıldıkça puan değeri düşer.",
    eventPointTwoTitle: "Bayrak Temelli Haftalık Döngü",
    eventPointTwoText:
      "Haftalık format çeşitlilik katar, ama uygulamanın özündeki bayrak tahmin yapısından kopmaz.",
    playerLabel: "Placeholder görsel",
    playerFooterOne: "Bayrağı hızlı tahmin et",
    playerFooterTwo: "Daha yüksek hız = daha yüksek puan",
    complianceEyebrow: "Görsel Alan",
    complianceTitle: "Ekran görüntüleri ve oyun atmosferi için daha karakterli bir vitrin.",
    complianceText:
      "Bu alan daha sonra gerçek gameplay görüntüleri, store screenshot setleri, ilerleme sahneleri ve haftalık meydan okuma görselleriyle doldurulabilir.",
    complianceCardOneTitle: "Gerçek Store Görsellerini Yerleştir",
    complianceCardOneText:
      "Buradaki stilize placeholder kartlar, yayın öncesinde gerçek portre veya yatay ekran görüntüleriyle değiştirilebilir.",
    complianceCardOneLink: "app-ads.txt Aç",
    complianceCardTwoTitle: "Modları Tek Alanda Anlat",
    complianceCardTwoText:
      "Klasik tur, flash mod, progressive reveal ve haftalık meydan okumayı tek bir güçlü sahnede gösterebilirsin.",
    complianceCardTwoLink: "Gizlilik Politikasını Aç",
    complianceCardThreeTitle: "Sayfayı Daha Canlı Hissettir",
    complianceCardThreeText:
      "Katmanlı ışık, izometrik yüzeyler ve küçük hareketler sayfayı belge görünümünden çıkarıp oyun havasına yaklaştırır.",
    complianceCardThreeLink: "Kullanıcı Sözleşmesini Aç",
    showcaseCardOneLabel: "Ana Tur",
    showcaseCardTwoLabel: "Flash Flag",
    showcaseCardThreeLabel: "Haftalık Meydan Okuma",
    faqEyebrow: "Hızlı SSS",
    faqOneTitle: "Bu site tek sayfa olarak kalabilir mi?",
    faqOneText:
      "Evet. Ana ürün tanıtımı tek sayfada kalır; yasal dokümanlar ise ayrı herkese açık sayfalarda tutulur.",
    faqTwoTitle: "Daha sonra gerçek ekran görüntüleri ve varlıklar eklenebilir mi?",
    faqTwoText:
      "Evet. Mevcut görsel bloklar placeholder niteliğindedir ve istenen zamanda gerçek oynanış görüntüleri ile değiştirilebilir.",
    faqThreeTitle: "EN / TR seçimi diğer sayfalarda da çalışır mı?",
    faqThreeText:
      "Evet. Seçilen dil yerel olarak saklanır ve yasal sayfalarda da kullanılır.",
    downloadEyebrow: "Oyunu İndir",
    downloadTitle: "Bayrakları Daha Hızlı Tahmin Etmeye Hazır Mısın?",
    downloadText:
      "Placeholder store linklerini ve ekran görüntülerini güncelledikten sonra bu alanı yayınlanan sitenin final indirme bloğu olarak kullanabilirsin.",
    downloadPointOne: "Dört Tek Oyunculu Mod",
    downloadPointTwo: "Haftalık Meydan Okuma Güncellemeleri",
    downloadPointThree: "Hızlı Tanıma ve Skor Odaklı İlerleme",
    downloadCardTitle: "Flagzy",
    downloadCardSubtitle: "App Store ve Google Play üzerinde yayına hazır",
    footerCopy: "2026 Flagzy. Tüm hakları saklıdır.",
    footerPrivacy: "Gizlilik Politikası",
    footerAgreement: "Kullanıcı Sözleşmesi",
    legalBackHome: "Ana Sayfaya Dön",
    privacyEyebrow: "Yasal Sayfa",
    privacyTitle: "Gizlilik Politikası",
    agreementEyebrow: "Yasal Sayfa",
    agreementTitle: "Kullanıcı Sözleşmesi",
    legalLoading: "Belge yükleniyor...",
    legalLoadError: "Belge yüklenemedi. Lütfen docs klasöründeki markdown dosyasını kontrol edin."
  },
  en: {
    metaTitleHome: "Flagzy | Flag Guessing Game",
    metaTitlePrivacy: "Flagzy | Privacy Policy",
    metaTitleAgreement: "Flagzy | User Agreement",
    menuLabel: "Menu",
    navOverview: "Overview",
    navModes: "Modes",
    navEvent: "Weekly Challenge",
    navCompliance: "Screenshots",
    navFaq: "FAQ",
    heroEyebrow: "Single-Page Starter for Flagzy",
    heroTitle: "A fast, reveal-based flag guessing game with multiple modes and weekly events.",
    heroText:
      "This site is prepared as a GitHub Pages-ready landing page for store compliance, app-ads.txt, and product presentation. Copy, screenshots, and final visuals can be replaced later without changing the structure.",
    heroCtaPrimary: "Explore Modes",
    heroCtaSecondary: "View Screenshots",
    heroStatModes: "Single Player Modes",
    heroStatDifficulty: "Difficulty Tiers",
    heroStatEvent: "Weekly Challenge",
    visualTag: "Gameplay Preview",
    mockModeLabel: "Classic Guess",
    mockGuessOne: "Guess 1",
    mockGuessTwo: "Guess 2",
    mockGuessThree: "Guess 3",
    miniLabelSpeed: "60-Second Rush",
    miniValueSpeed: "Fast rounds, higher score",
    miniLabelReveal: "Weekly Challenge",
    miniValueReveal: "A fresh flag challenge rotates every week",
    loopEyebrow: "Core loop",
    loopTitle: "Designed around recognition, memory, and timing.",
    loopText:
      "Each mode keeps the same flag-focused DNA while changing how much time, information, and pressure the player receives.",
    stepOneTitle: "Study the target",
    stepOneText:
      "The player sees a flag directly, partially, briefly, or in a blurred form depending on the mode.",
    stepTwoTitle: "Submit country guesses",
    stepTwoText:
      "The system compares the selected country and target flag, then opens matching regions according to overlap and area.",
    stepThreeTitle: "Race against constraints",
    stepThreeText:
      "Some modes limit guesses, others limit time, and others test memory with very short exposure windows.",
    stepFourTitle: "Score for speed and precision",
    stepFourText:
      "Faster identification, fewer attempts, and harder difficulties translate into stronger scores.",
    modesEyebrow: "Single player modes",
    modesTitle: "Four modes, one world-scale flag database.",
    modesText:
      "The product foundation is a complete country list and multiple ways to test how players recognize flags under different pressure.",
    modeOneTitle: "Classic Guess",
    modeOneText:
      "Players can make up to six guesses. Every chosen country reveals part of the target flag based on similarity and shared area.",
    modeOneTagA: "6 guesses",
    modeOneTagB: "region reveal",
    modeTwoTitle: "60-Second Rush",
    modeTwoText:
      "The same reveal logic runs inside a 60-second round. Finding more flags quickly and with fewer attempts produces more points.",
    modeTwoTagA: "60 seconds",
    modeTwoTagB: "combo scoring",
    modeThreeTitle: "Flash Flag",
    modeThreeText:
      "A flag appears for around 400 ms and disappears. Players rely on memory, with three difficulties that shorten the display time.",
    modeThreeTagA: "memory test",
    modeThreeTagB: "3 difficulties",
    modeFourTitle: "Progressive Reveal",
    modeFourText:
      "The flag starts blurred. Harder settings give less time to guess but reward the player with higher score values.",
    modeFourTagA: "blur challenge",
    modeFourTagB: "high risk score",
    eventEyebrow: "Featured activity",
    eventTitle: "Weekly challenges keep the experience fresh with new flag-based goals.",
    eventText:
      "A new flag challenge appears every week. Players try to identify the target country as early as possible while the visual becomes easier to read over time.",
    eventPointOneTitle: "Reveal Changes Over Time",
    eventPointOneText:
      "Recognition becomes easier every second, but the score value drops as more visual detail is revealed.",
    eventPointTwoTitle: "Flag-Based Weekly Rotation",
    eventPointTwoText:
      "The weekly format adds variety while staying fully aligned with the core flag-guessing identity of the app.",
    playerLabel: "Placeholder visual",
    playerFooterOne: "Guess the flag fast",
    playerFooterTwo: "Higher speed = higher points",
    complianceEyebrow: "Visual Showcase",
    complianceTitle: "A more expressive area for screenshots and app atmosphere.",
    complianceText:
      "This section can later be replaced with real gameplay captures, store screenshots, progression visuals, and event highlights.",
    complianceCardOneTitle: "Drop in Real Store Screenshots",
    complianceCardOneText:
      "Replace these stylized placeholders with actual portrait or landscape captures from the live product.",
    complianceCardOneLink: "Open app-ads.txt",
    complianceCardTwoTitle: "Show Multiple Modes Clearly",
    complianceCardTwoText:
      "Highlight classic rounds, flash gameplay, progressive reveal, and weekly challenge content in one visual block.",
    complianceCardTwoLink: "Open Privacy Policy",
    complianceCardThreeTitle: "Make the Page Feel Alive",
    complianceCardThreeText:
      "Subtle floating motion, perspective cards, and layered light help the site feel more like a game world than a document.",
    complianceCardThreeLink: "Open User Agreement",
    showcaseCardOneLabel: "Main Round",
    showcaseCardTwoLabel: "Flash Flag",
    showcaseCardThreeLabel: "Weekly Challenge",
    faqEyebrow: "Quick FAQ",
    faqOneTitle: "Can this stay as a single-page site?",
    faqOneText:
      "Yes. The main product presentation stays on one page, while the legal documents live as separate public pages.",
    faqTwoTitle: "Can screenshots and real assets be added later?",
    faqTwoText:
      "Yes. The current visual blocks are placeholders and can be replaced with real gameplay captures at any time.",
    faqThreeTitle: "Is the EN / TR switch shared across pages?",
    faqThreeText:
      "Yes. The selected language is stored locally and reused on the legal pages.",
    downloadEyebrow: "Get the Game",
    downloadTitle: "Ready to Guess Flags Faster?",
    downloadText:
      "Replace the placeholder store links and screenshots, then use this section as the final download block for the published site.",
    downloadPointOne: "Four Single Player Modes",
    downloadPointTwo: "Weekly Challenge Updates",
    downloadPointThree: "Fast Recognition and Score-Based Progress",
    downloadCardTitle: "Flagzy",
    downloadCardSubtitle: "Available on the App Store and Google Play",
    footerCopy: "2026 Flagzy. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerAgreement: "User Agreement",
    legalBackHome: "Back to home",
    privacyEyebrow: "Legal page",
    privacyTitle: "Privacy Policy",
    agreementEyebrow: "Legal page",
    agreementTitle: "User Agreement",
    legalLoading: "Loading document...",
    legalLoadError: "Document could not be loaded. Please check the markdown file in the docs folder."
  }
};

const documentTitleKey = document.body.dataset.titleKey;
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const legalDocumentContainer = document.querySelector("[data-legal-doc]");

const applyStoreLinks = () => {
  document.querySelectorAll("[data-store-link]").forEach((link) => {
    const storeKey = link.dataset.storeLink;
    if (storeLinks[storeKey]) {
      link.href = storeLinks[storeKey];
    }
  });
};

const parseInlineMarkdown = (text) =>
  text
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

const renderMarkdown = (markdown) => {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const paragraphBuffer = [];
  let activeList = null;

  const flushParagraph = () => {
    if (!paragraphBuffer.length) {
      return;
    }

    html.push(`<p>${parseInlineMarkdown(paragraphBuffer.join(" "))}</p>`);
    paragraphBuffer.length = 0;
  };

  const closeList = () => {
    if (activeList) {
      html.push(`</${activeList}>`);
      activeList = null;
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      closeList();
      return;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      closeList();
      const level = Math.min(headingMatch[1].length, 4);
      html.push(`<h${level}>${parseInlineMarkdown(headingMatch[2])}</h${level}>`);
      return;
    }

    const bulletMatch = line.match(/^[-*]\s+(.*)$/);
    if (bulletMatch) {
      flushParagraph();
      if (activeList !== "ul") {
        closeList();
        activeList = "ul";
        html.push("<ul>");
      }
      html.push(`<li>${parseInlineMarkdown(bulletMatch[1])}</li>`);
      return;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      if (activeList !== "ol") {
        closeList();
        activeList = "ol";
        html.push("<ol>");
      }
      html.push(`<li>${parseInlineMarkdown(orderedMatch[1])}</li>`);
      return;
    }

    paragraphBuffer.push(line);
  });

  flushParagraph();
  closeList();

  return html.join("\n");
};

const loadLegalDocument = async (language) => {
  if (!legalDocumentContainer) {
    return;
  }

  const docType = legalDocumentContainer.dataset.legalDoc;
  const docPath = legalDocumentMap[docType]?.[language] || legalDocumentMap[docType]?.en;
  const dictionary = translations[language] || translations.en;

  if (!docPath) {
    legalDocumentContainer.innerHTML = `<p>${dictionary.legalLoadError}</p>`;
    return;
  }

  legalDocumentContainer.innerHTML = `<p>${dictionary.legalLoading}</p>`;

  try {
    const response = await fetch(docPath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load ${docPath}`);
    }

    const markdown = await response.text();
    legalDocumentContainer.innerHTML = renderMarkdown(markdown);
  } catch (error) {
    legalDocumentContainer.innerHTML = `<p>${dictionary.legalLoadError}</p>`;
    console.error(error);
  }
};

const applyLanguage = (language) => {
  const selected = translations[language] ? language : "en";
  const dictionary = translations[selected];

  document.documentElement.lang = selected;

  if (documentTitleKey && dictionary[documentTitleKey]) {
    document.title = dictionary[documentTitleKey];
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === selected);
  });

  window.localStorage.setItem("flagzy-language", selected);
  loadLegalDocument(selected);
};

const initialLanguage = window.localStorage.getItem("flagzy-language") || "en";
applyStoreLinks();
applyLanguage(initialLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
});

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
