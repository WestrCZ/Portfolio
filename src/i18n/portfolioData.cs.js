// =========================================================================
// portfolioData.cs.js
//
// Czech portfolio content: profile, skills, experience, projects.
// Components never import this directly — they read the current locale's
// data through the useI18n() hook, which picks this file or
// portfolioData.en.js based on the active locale.
//
// Keep the structure of the localized portfolio data in sync.
// Content may differ, schema must not.
//
// Technology, company and project names are intentionally left
// untranslated (see portfolioData.en.js for the same rule) — "C#",
// "PostgreSQL", "RIGANTI s.r.o.", "HiveSync" etc. don't get translated.
// =========================================================================

const profile = {
  name: "Janek Hujer",
  title: "Backend .NET vývojář & Nadšenec do Kyberbezpečnosti",
  location: "Brno, CZ",
  availability: "Hledám 0.5 úvazek Remote / Hybrid (20h/týdně)",
  bio: "Backendový vývojář s téměř 1.5 rokem komerční praxe ve společnosti RIGANTI s.r.o. Specializuji se na C# / .NET Core, architektury DDD, CQS/CQRS a Onion. Aktivně se věnuji bezpečnosti webových aplikací (AppSec) a dalším oblastem kyberbezpečnosti.",
  links: {
    github: "https://github.com/WestrCZ/",
    linkedin: "https://www.linkedin.com/in/janek-hujer-8872a8280/",
    email: "mailto:janekhujer@gmail.com",
  },
};

// Ikony jsou napojené v StackSection.jsx přes klíč "icon" (název z lucide-react).
// Technologie se nepřekládají, pole je proto sdílené i obsahově stejné
// v obou jazykových verzích.
const skills = [
  { name: "REST API", icon: "Code2" },
  { name: "C#", icon: "Code2" },
  { name: "ASP.NET Core", icon: "Cpu" },
  { name: "Entity Framework Core", icon: "Database" },
  { name: "MartenDB", icon: "Database" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "MsSQL", icon: "Database" },
  { name: "JavaScript", icon: "Code2" },
  { name: "TypeScript", icon: "Code2" },
  { name: "CQRS / CQS", icon: "Code2" },
  { name: "DDD", icon: "Cpu" },
  { name: "Onion Architecture", icon: "Cpu" },
  { name: "Blazor", icon: "Code2" },
  { name: "React", icon: "Code2" },
  { name: "DotVVM", icon: "Code2" },
  { name: "AppSec / Cybersecurity", icon: "ShieldCheck" },
  { name: "Docker", icon: "Cpu" },
  { name: "Git", icon: "Folders" },
  { name: "Figma", icon: "LayoutPanelLeft" },
  { name: "Jira", icon: "CopyCheck" },
];

const experience = [
  {
    company: "RIGANTI s.r.o.",
    role: ".NET Backend Developer",
    duration: "Červen 2024 – září 2025 (1.5 roku)",
    overview:
      "Vývoj komerčních enterprise systémů pod vedením předních českých .NET architektů. Práce na reálných projektech s moderním stackem .NET 8, pokročilými architektonickými vzory (CQS, Use Case pattern) a kombinací relačních a dokumentových databází.",
    projects: [
      {
        id: "warrantytraq",
        name: "WarrantyTRAQ",
        summary: "Webová aplikace pro terénní servisní techniky provádějící údržbu a opravy zařízení.",
        stack: [".NET 8", "ASP.NET Core", "EF Core", "MSSQL", "DotVVM", "CQS"],
        description:
          "V rámci tříčlenného týmu jsem pracoval na aplikaci určené pro techniky v terénu. Mým hlavním architektonickým přínosem byl kompletní refaktoring projektu z původní MVC architektury na čisté CQS (Command Query Separation), což výrazně zpřehlednilo kódovou bázi a usnadnilo další škálování. Mimo to jsem samostatně navrhoval a upravoval Code-First databázové modely na MSSQL a vyvíjel kompletní backendovou i frontendovou logiku v UI frameworku DotVVM.",
      },
      {
        id: "flow-of-life",
        name: "Flow of Life",
        summary: "Kompletní systém pro evidenci pacientů v medicínské oblasti.",
        stack: [".NET 8", "ASP.NET Core", "EF Core", "Marten (PostgreSQL)", "Blazor", "Use Case pattern"],
        description:
          "Na rozsáhlém medicínském systému jsem se v šestičlenném týmu podílel na realizaci klíčové business logiky, vývoji REST API a datového feedingu. Celý projekt stavěl na Use Case patternu. Úzce jsem pracoval s dokumentovou databází Marten nad PostgreSQL, kde jsem navrhoval a upravoval datové struktury, a zároveň jsem odbavoval navazující úpravy a opravy v uživatelském rozhraní postaveném na Blazoru.",
      },
    ],
  },
  {
    company: "Soukromé zakázky",
    role: "IT Technik",
    duration: "",
    projects: [
      {
        id: "spravaPC",
        name: "Správa počítačů a sítí",
        summary: "Správa a údržba počítačů, zařízení a sítí pro soukromé klienty.",
        stack: ["Windows", "Linux", "Basic Networking", "Proxmox"],
        description:
          "Instalace, konfigurace a údržba počítačů, sítí a dalších zařízení pro soukromé klienty. Řešení a diagnostika problémů s hardwarem a softwarem, nastavení zabezpečení a správa Windows OS. Ve škole jsem spravoval Proxmox linux server na studentské projekty.",
      },
    ],
  },
];

// Vybrané osobní / školní projekty.
const projects = [
  {
    id: "hivesync",
    name: "HiveSync",
    role: "Creator / Security Lab",
    description:
      "Vlastní full-stack Todo & synchronizační nástroj postavený na zelené louce (.NET backend + React frontend). Projekt vznikl jako maturitní práce, kterou jsem úspěšně obhájil na výbornou, aktuálně mi slouží jako bezpečnostní laboratoř pro zpětnou analýzu vlastní architektury a hledání AppSec zranitelností. V plánu je aplikaci dále rozvíjet, přidávat nové funkcionality. Celá aplikace je open-source a dostupná na GitHubu.",
    tags: [".NET", "C#", "Entity Framework Core", "SMTP", "PostgreSQL", "CQS", "Onion architecture", "Repository pattern", "React", "TypeScript", "Vite", "REST API", "UI/UX", "MobileFirst Design", "AppSec lab"],
    links: [
      { label: "GitHub Backend", url: "https://github.com/1-IT-Gymnazium/HiveSyncApi/" },
      { label: "GitHub Frontend", url: "https://github.com/1-IT-Gymnazium/HiveSyncUI/" },
      { label: "Dokumentace (PDF)", url: "https://drive.google.com/file/d/1eS1eWYL9PGp4rBwdygdiFaQDgqBLPrzC/view?usp=sharing" },
      { label: "HiveSync", url: "https://hivesyncui.onrender.com/" },
    ],
  },
  {
    id: "mapy-cz-smetana",
    name: "Mapy.cz — Hra k 200. výročí Bedřicha Smetany",
    role: "Software / Game Developer (Seznam.cz projekt)",
    description:
      "Full-cycle vývoj a integrace speciální interaktivní hry přímo do systému Mapy.cz (v rámci 5členného týmu studentů). Implementace herní logiky přes POI body (Points of Interest), návrh herní smyčky a UX v rámci limitů rozhraní Mapy.cz, end-to-end beta testování.",
    tags: ["System Integration", "Mapy.cz POIs", "UX / Game Loop", "QA"],
    links: [
      { label: "Článek na Seznam Blogu", url: "https://blog.seznam.cz/" },
      { label: "Novinky.cz", url: "https://www.novinky.cz/" },
    ],
  },
  {
    id: "Apple-Newton Game",
    name: "Apple Newton Game",
    role: "Game Developer",
    description:
      "Vývoj hry v JavaScriptu jako školní projekt v druhém ročníku SŠ. Hra je hostována jako statická webová aplikace na GitHub Pages. Hráč ovládá postavu Isaaca Newtona a snaží se vyhýbat padajícím jablkům, čímž získává skóre. Pokud hráče zasáhne jablko, hra končí. Hra je přizpůsobená i pro mobilní zařízení, na kterých je ovládání realizováno přes dotykový joystick na obrazovce. Hra je implementována v čistém JavaScriptu, HTML a CSS, bez použití externích knihoven.",
    tags: ["Game Development", "JavaScript", "HTML", "CSS", "Mobile Friendly"],
    links: [
      { label: "GitHub", url: "https://github.com/WestrCZ/newton-apple-game" },
      { label: "Hra", url: "https://westrcz.github.io/newton-apple-game/" },
    ],
  },
  {
    id: "FolkMusic",
    name: "Folk Music Web",
    role: "Web Developer",
    description:
      "Vývoj informačního webu věnovaného folkové hudbě. Web vznikl jako ročníková práce 1. ročníku v předmětu programování na střední škole. Web je implementován v čistém HTML a CSS. Web obsahuje informace o folkové hudbě, významných interpretech ve folkmetalu a nástroji Hurdy Gurdy. Původní verze nebyla plně responzivní, proto jsem web přepracoval a upravil tak, aby byl plně responzivní a přístupná i na mobilních zařízeních. Proto jsem ji později předělal.",
    tags: ["Web Development", "HTML", "CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/WestrCZ/FolkMusicWeb/" },
      { label: "Folk Music Web", url: "https://westrcz.github.io/FolkMusicWeb/" },
      { label: "GitHub (Původní verze)", url: "https://github.com/WestrCZ/FolkMusicWeb_Old" },
      { label: "Folk Music Web (Původní verze)", url: "https://westrcz.github.io/FolkMusicWeb_Old/" },
    ],
  },
  {
    id: "FlappyShip",
    name: "Flappy Ship",
    role: "Game Developer",
    description:
      "Hra vznikla v roce 2023 a cílem projektu bylo naučit se základní mechaniky herního vývoje v Unity engine a naprogramovat jednoduchou hru za jeden den. Vybral jsem proto jako inspiraci známou hru Flappy Bird a vytvořil její vlastní verzi s pirátskou lodí v tomto herním enginu. Celá hra byla opravdu naprogramována během jednoho dne a lze si ji zahrát skrze .exe soubor z mého GiHubu. Zdrojový kód už se mi bohužel nepovedlo zpětně dohledat, kvůli náhlému selhání disku starého počítače na kterém jsem ji vytvořil.",
    tags: ["Game Development", "Unity", "C#", "Game Mechanics"],
    links: [{ label: "GitHub", url: "https://github.com/WestrCZ/flappy-ship" }],
  },
  {
    id: "KultiKino",
    name: "KultiKino - Webová aplikace",
    role: "Web Developer & Designer",
    description:
      "Kompletní návrh a vývoj produkční frontendové webové aplikace pro oficiální prezentaci a harmonogram lokálního open-air festivalu KultiKino v Železném Brodě. Vývoj probíhal ve dvoučlenném týmu. Aplikace je navržena jako client-side SPA. Byla vyvíjena s mobile-first přístupem tak, aby si návštěvníci mohli snadno kontrolovat časový harmonogram festivalu a informace o jednotlivých umělcích a jejich dílech přímo z mobilních zařízení.",
    tags: ["Web Development", "React", "TypeScript", "SPA", "Mobile First UX"],
    links: [
      { label: "GitHub", url: "https://github.com/Kultikino/KultikinoWeb" },
      { label: "Kultikino.cz", url: "https://kultikino.cz" },
    ],
  },
  {
    id: "HogoFrogo",
    name: "HogoFrogo",
    role: "Game Developer",
    description:
      "Vývoj hry v jazyce Python spolu s knihovnou Pygame. Hra je implementována jako desktopová aplikace a je určena pro hraní na počítači. Hráč ovládá postavu žabáka, který se snaží proskákat levely a zachránit svůj sendvič, který mu ukradl král much. Hra obsahuje několik úrovní obtížnosti a je navržena tak, aby byla zábavná, ale zároveň obtížná. Momentální verze je nehratelná a dostupná pouze jako zdrojový kód. Vyvíjeli jsme ji v tříčlenném týmu abychom naučili kamaráda programovat, a bohužel jsme na ni neměli dále čas, plánujeme ji však dodělat.",
    tags: ["Game Development", "Python", "Pygame", "Desktop Application"],
    links: [{ label: "GitHub", url: "https://github.com/HogoFrogo/HogoFrogo/tree/hogo-frogo-pygame-attempt" }],
  },
  {
    id: "NeuralNetwork",
    name: "Neuronová síť",
    role: "Týmový vedoucí / Lead Developer",
    description:
      "Vývoj a implementace neuronové sítě v jazyce Python v rámci školního matematického semináře. Neuronová síť sloužila k rozpoznání ručně psané číslice. Tento projekt nakonec nebyl dodělán, protože jsme se rozhodli ho přenechat jednomu z nás jako maturitní projekt. Projekt je tedy v nefunkčním stavu a slouží pouze jako ukázka. Během vývoje jsme se naučili základy strojového učení. Projekt v budoucnu plánuji předělat a postavit jednak na základě běžných knihoven a druhak dodělat verzi, kterou jsme rozdělali, kde se snažíme knihovny nepoužívat.",
    tags: ["Machine Learning", "Python", "Data Analysis"],
    links: [{ label: "GitHub", url: "https://github.com/WestrCZ/NeuralNetworksITG" }],
  },
];

export const portfolioData = { profile, skills, experience, projects };
