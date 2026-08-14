// =========================================================================
// portfolioData.en.js
//
// English portfolio content: profile, skills, experience, projects.
// This is a natural English portfolio, not a mechanical translation of
// portfolioData.cs.js — wording is adapted so it reads like something a
// native English speaker would write about themselves.
//
// Keep the structure of the localized portfolio data in sync.
// Content may differ, schema must not.
//
// Technology, company and (real, branded) project names are intentionally
// left untranslated — "C#", "PostgreSQL", "RIGANTI s.r.o.", "HiveSync",
// "KultiKino" etc. stay the same in both locales. A few purely descriptive,
// non-branded labels (e.g. the generic "Správa počítačů a sítí" freelance
// project, or "Neuronová síť") ARE translated, since they're plain
// descriptions rather than proper names — see the accompanying
// documentation for this judgment call.
// =========================================================================

const profile = {
  name: "Janek Hujer",
  title: "Backend .NET Developer & Cybersecurity Enthusiast",
  location: "Brno, CZ",
  availability: "Looking for a 0.5 FTE remote/hybrid role (20h/week)",
  bio: "Backend developer with almost 1.5 years of professional experience at RIGANTI s.r.o. I specialize in C# / .NET Core, DDD, CQS/CQRS and Onion architecture. I'm also actively involved in web application security (AppSec) and cybersecurity more broadly.",
  links: {
    github: "https://github.com/WestrCZ/",
    linkedin: "https://www.linkedin.com/in/janek-hujer-8872a8280/",
    email: "mailto:janekhujer@gmail.com",
  },
};

// Icons are wired up in StackSection.jsx via the "icon" key (a lucide-react
// component name). Technology names aren't translated, so this array is
// content-identical to the one in portfolioData.cs.js.
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
    duration: "June 2024 – September 2025 (1.5 years)",
    overview:
      "Development of commercial enterprise systems under the guidance of leading Czech .NET architects. Work on real-world projects using a modern .NET 8 stack, advanced architectural patterns (CQS, the Use Case pattern) and a mix of relational and document databases.",
    projects: [
      {
        id: "warrantytraq",
        name: "WarrantyTRAQ",
        summary: "A web application for field service technicians performing equipment maintenance and repairs.",
        stack: [".NET 8", "ASP.NET Core", "EF Core", "MSSQL", "DotVVM", "CQS"],
        description:
          "Working in a three-person team, I built an application for field technicians. My main architectural contribution was a complete refactor of the project from its original MVC architecture to clean CQS (Command Query Separation), which significantly clarified the codebase and made it easier to scale. I also independently designed and maintained Code-First database models on MSSQL, and developed both backend and frontend logic in the DotVVM UI framework.",
      },
      {
        id: "flow-of-life",
        name: "Flow of Life",
        summary: "A complete patient-record system for the medical field.",
        stack: [".NET 8", "ASP.NET Core", "EF Core", "Marten (PostgreSQL)", "Blazor", "Use Case pattern"],
        description:
          "On a large-scale medical system, I worked within a six-person team on core business logic, REST API development and data feeding. The whole project was built on the Use Case pattern. I worked closely with the Marten document database on top of PostgreSQL, designing and adjusting data structures, while also handling follow-up changes and fixes in the Blazor-based UI.",
      },
    ],
  },
  {
    company: "Freelance clients",
    role: "IT Technician",
    duration: "",
    projects: [
      {
        id: "spravaPC",
        name: "Computer & Network Administration",
        summary: "Maintenance and administration of computers, devices and networks for private clients.",
        stack: ["Windows", "Linux", "Basic Networking", "Proxmox"],
        description:
          "Installation, configuration and maintenance of computers, networks and other devices for private clients. Troubleshooting and diagnosing hardware and software issues, security setup and Windows administration. At school, I also administered a Proxmox Linux server used for student projects.",
      },
    ],
  },
];

// Selected personal / school projects.
const projects = [
  {
    id: "hivesync",
    name: "HiveSync",
    role: "Creator / Security Lab",
    description:
      "A full-stack Todo & sync tool I built from scratch (.NET backend + React frontend). It started as my final high-school thesis, which I successfully defended with the highest grade, and today it doubles as a security lab where I reverse-engineer my own architecture and look for AppSec vulnerabilities. I plan to keep extending it with new features. The whole app is open-source and available on GitHub.",
    tags: [".NET", "C#", "Entity Framework Core", "SMTP", "PostgreSQL", "CQS", "Onion architecture", "Repository pattern", "React", "TypeScript", "Vite", "REST API", "UI/UX", "MobileFirst Design", "AppSec lab"],
    links: [
      { label: "GitHub Backend", url: "https://github.com/1-IT-Gymnazium/HiveSyncApi/" },
      { label: "GitHub Frontend", url: "https://github.com/1-IT-Gymnazium/HiveSyncUI/" },
      { label: "Documentation (PDF)", url: "https://drive.google.com/file/d/1eS1eWYL9PGp4rBwdygdiFaQDgqBLPrzC/view?usp=sharing" },
      { label: "HiveSync", url: "https://hivesyncui.onrender.com/" },
    ],
  },
  {
    id: "mapy-cz-smetana",
    name: "Mapy.cz — Game for the 200th Anniversary of Bedřich Smetana",
    role: "Software / Game Developer (Seznam.cz project)",
    description:
      "Full-cycle development and integration of a special interactive game directly into the Mapy.cz platform, as part of a 5-person student team. Implemented game logic through POIs (Points of Interest), designed the game loop and UX within the constraints of the Mapy.cz interface, and ran end-to-end beta testing.",
    tags: ["System Integration", "Mapy.cz POIs", "UX / Game Loop", "QA"],
    links: [
      { label: "Article on Seznam Blog", url: "https://blog.seznam.cz/" },
      { label: "Novinky.cz", url: "https://www.novinky.cz/" },
    ],
  },
  {
    id: "Apple-Newton Game",
    name: "Apple Newton Game",
    role: "Game Developer",
    description:
      "A JavaScript game built as a school project in my second year of high school, hosted as a static web app on GitHub Pages. The player controls Isaac Newton and dodges falling apples to rack up points — getting hit by an apple ends the game. It's also adapted for mobile, with an on-screen touch joystick for controls. The game is built in plain JavaScript, HTML and CSS, with no external libraries.",
    tags: ["Game Development", "JavaScript", "HTML", "CSS", "Mobile Friendly"],
    links: [
      { label: "GitHub", url: "https://github.com/WestrCZ/newton-apple-game" },
      { label: "Play the game", url: "https://westrcz.github.io/newton-apple-game/" },
    ],
  },
  {
    id: "FolkMusic",
    name: "Folk Music Web",
    role: "Web Developer",
    description:
      "An informational website about folk music, built as a first-year assignment for a programming class in high school. It's implemented in plain HTML and CSS and covers folk music, notable folk-metal artists and the hurdy-gurdy instrument. The original version wasn't fully responsive, so I later reworked it to be fully responsive and accessible on mobile devices as well.",
    tags: ["Web Development", "HTML", "CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/WestrCZ/FolkMusicWeb/" },
      { label: "Folk Music Web", url: "https://westrcz.github.io/FolkMusicWeb/" },
      { label: "GitHub (Original version)", url: "https://github.com/WestrCZ/FolkMusicWeb_Old" },
      { label: "Folk Music Web (Original version)", url: "https://westrcz.github.io/FolkMusicWeb_Old/" },
    ],
  },
  {
    id: "FlappyShip",
    name: "Flappy Ship",
    role: "Game Developer",
    description:
      "Built in 2023, this project's goal was to learn the basics of game development in the Unity engine and code a simple game in a single day. I took the well-known Flappy Bird as inspiration and made my own version with a pirate ship. The whole game really was coded in one day, and you can still play it via the .exe file on my GitHub. Unfortunately I can no longer recover the source code — the old computer's disk it was on failed.",
    tags: ["Game Development", "Unity", "C#", "Game Mechanics"],
    links: [{ label: "GitHub", url: "https://github.com/WestrCZ/flappy-ship" }],
  },
  {
    id: "KultiKino",
    name: "KultiKino - Web Application",
    role: "Web Developer & Designer",
    description:
      "Complete design and development of the production frontend web app for the official presentation and schedule of the local open-air festival KultiKino in Železný Brod, built in a two-person team. The app is a client-side SPA, built mobile-first so visitors can easily check the festival's schedule and information about individual artists and their work straight from their phones.",
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
      "A game built in Python with the Pygame library, designed as a desktop application for PC. The player controls a frog trying to hop through levels and rescue his sandwich, stolen by the king of the flies. It has several difficulty levels and aims to be fun but challenging. The current version isn't playable and is only available as source code — we built it in a three-person team to teach a friend how to code, and unfortunately ran out of time to finish it. We do plan to complete it eventually.",
    tags: ["Game Development", "Python", "Pygame", "Desktop Application"],
    links: [{ label: "GitHub", url: "https://github.com/HogoFrogo/HogoFrogo/tree/hogo-frogo-pygame-attempt" }],
  },
  {
    id: "NeuralNetwork",
    name: "Neural Network",
    role: "Team Lead / Lead Developer",
    description:
      "Development of a neural network in Python for a school math seminar project, meant to recognize handwritten digits. The project was ultimately left unfinished, since we decided to hand it off to one of the team members as their final thesis project instead. It's in a non-working state now and only serves as a sample. Along the way I learned the basics of machine learning. I'd like to rebuild it in the future — once based on standard libraries, and once as a from-scratch version without them, continuing where we left off.",
    tags: ["Machine Learning", "Python", "Data Analysis"],
    links: [{ label: "GitHub", url: "https://github.com/WestrCZ/NeuralNetworksITG" }],
  },
];

export const portfolioData = { profile, skills, experience, projects };
