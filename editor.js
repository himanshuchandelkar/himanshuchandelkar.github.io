const KEY = "himanshu-site-content-v1";
const panel = document.getElementById("panel");
const frame = document.getElementById("previewFrame");

const deep = value => JSON.parse(JSON.stringify(value));

const defaultC = {
  "site": {
    "name": "Himanshu Chandelkar",
    "title": "B.Com (Computer Applications) Student at Jaywanti Haksar Post Graduation College, Betul",
    "goal": "Currently focused on internship opportunities in finance-tech and digital business.",
    "location": "Betul, Madhya Pradesh, India",
    "domain": "himanshuchandelkar.social",
    "primaryCtaLabel": "Connect",
    "primaryCtaTarget": "#connect",
    "resumeUrl": "./resume.pdf"
  },
  "about": {
    "heading": "A little about me.",
    "paragraphs": [
      "I am currently pursuing a Bachelor of Commerce (Computer Applications) at J.H. Govt. P.G. College, Betul. My academic journey combines core commerce disciplines—financial accounting, taxation, and business law—with practical computing tools that empower modern enterprises.",
      "I am deeply drawn to the intersection where financial principles meet digital technology. Rather than treating finance and computing as isolated disciplines, I explore how software, automation, and structured data systems optimize business operations, increase financial transparency, and improve decision-making.",
      "Beyond college coursework, I am a dedicated self-learner continuously building real-world competency across financial analysis, front-end web technologies, and collaborative workflows. I am actively seeking internship opportunities in finance-tech, digital commerce, and business operations."
    ],
    "highlights": [
      {
        "label": "Degree Program",
        "value": "B.Com (Computer Applications)",
        "sub": "Undergraduate Degree"
      },
      {
        "label": "College",
        "value": "J.H. Govt. P.G. College",
        "sub": "Betul, Madhya Pradesh"
      },
      {
        "label": "Availability",
        "value": "Open for Internships",
        "sub": "Finance-Tech & Digital Biz"
      }
    ]
  },
  "education": [
    {
      "current": true,
      "title": "B.Com (Computer Applications)",
      "institution": "J.H. Govt. P.G. College, Betul",
      "period": "Jul 2025 — Present",
      "detail": "Currently pursuing a Bachelor of Commerce with specialization in Computer Applications. Blending accounting principles, financial management, business regulation, and taxation with computing systems, e-commerce applications, and digital business operations.",
      "courseHighlights": [
        "Financial Accounting",
        "Business Law & Regulatory Framework",
        "Computer Applications in Business",
        "Tax Basics & Statutory Concepts",
        "E-Commerce & Digital Systems",
        "Market Dynamics"
      ]
    },
    {
      "current": false,
      "title": "Higher Secondary (XII), Commerce",
      "institution": "St. Thomas Mission HR. Sec. School, Amla",
      "period": "Jun 2023 — Apr 2025",
      "detail": "Built a solid academic foundation across double-entry bookkeeping, corporate accounting concepts, principles of management, macroeconomic dynamics, and professional communication.",
      "courseHighlights": [
        "Accountancy & Bookkeeping",
        "Business Studies & Management",
        "Micro & Macro Economics",
        "English & Professional Communication"
      ]
    },
    {
      "current": false,
      "title": "Secondary School (X)",
      "institution": "St. Thomas Mission HR. Sec. School, Amla",
      "period": "Mar 2022 — May 2023",
      "detail": "Completed secondary education with strong fundamentals across quantitative mathematics, general sciences, social studies, and language arts, preparing for advanced commerce studies.",
      "courseHighlights": [
        "Quantitative Mathematics",
        "General Science",
        "Social Sciences",
        "Language & Composition"
      ]
    }
  ],
  "skills": [
    {
      "category": "Finance",
      "subtitle": "Ledger systems, statutory concepts, regulatory compliance, and market evaluation.",
      "countLabel": "4 Core Skills",
      "items": [
        "Financial Accounting",
        "Tax Basics",
        "Business Law",
        "Market Research"
      ]
    },
    {
      "category": "Tools",
      "subtitle": "Spreadsheet modeling, collaborative workspaces, visual communication, and documentation.",
      "countLabel": "4 Essential Tools",
      "items": [
        "Excel",
        "Google Sheets",
        "Canva",
        "Notion"
      ]
    },
    {
      "category": "Tech Stack",
      "subtitle": "Semantic web markup, responsive design styling, client scripting, and version control.",
      "countLabel": "4 Core Technologies",
      "items": [
        "HTML",
        "CSS",
        "JavaScript",
        "Git & GitHub"
      ]
    }
  ],
  "interests": [
    {
      "number": "01",
      "title": "Finance & Financial Markets",
      "subtitle": "Capital Markets & Valuation",
      "detail": "Deeply interested in capital markets, investment mechanisms, corporate valuation, and macroeconomic dynamics. Analyzing how financial statements, interest rates, and liquidity drive Indian and global markets.",
      "keyPoints": [
        "Capital Markets",
        "Financial Statements",
        "Corporate Valuation",
        "Market Dynamics"
      ]
    },
    {
      "number": "02",
      "title": "Technology",
      "subtitle": "Digital Business & Automation",
      "detail": "Exploring how digital tools, software architectures, and automated workflows are transforming commerce. Passionate about identifying software solutions that eliminate operational friction in finance and enterprise.",
      "keyPoints": [
        "FinTech Systems",
        "Workflow Automation",
        "Spreadsheet Modeling",
        "Digital Business"
      ]
    },
    {
      "number": "03",
      "title": "Web3 & Blockchain",
      "subtitle": "Decentralized Infrastructure",
      "detail": "Investigating distributed ledger protocols, cryptographic consensus, smart contract execution, and the architecture of open financial systems that enable borderless, trustless transactions.",
      "keyPoints": [
        "Blockchain Protocols",
        "Smart Contracts",
        "Decentralized Systems",
        "Open Finance"
      ]
    }
  ],
  "socials": [
    {
      "name": "Instagram",
      "handle": "@himanshuchandelkar",
      "url": "https://www.instagram.com/himanshuchandelkar/"
    },
    {
      "name": "X",
      "handle": "@0x_HimanshuX",
      "url": "https://x.com/0x_HimanshuX"
    },
    {
      "name": "LinkedIn",
      "handle": "himanshuchandelkar",
      "url": "https://www.linkedin.com/in/himanshuchandelkar/"
    },
    {
      "name": "GitHub",
      "handle": "himanshuchandelkar",
      "url": "https://github.com/himanshuchandelkar"
    },
    {
      "name": "Email",
      "handle": "contacthimanshuyt@gmail.com",
      "url": "mailto:contacthimanshuyt@gmail.com"
    }
  ],
  "settings": {
    "accent": "#b9ff66",
    "background": "#090a0c",
    "text": "#f4f5f7",
    "muted": "#9da3ad",
    "show": {
      "hero": true,
      "about": true,
      "education": true,
      "skills": true,
      "interests": true,
      "projects": true,
      "connect": true
    },
    "sectionOrder": [
      "about",
      "education",
      "skills",
      "interests",
      "connect"
    ]
  }
};

let C;

function escapeAttr(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function loadC() {
  try {
    const value = localStorage.getItem(KEY);
    C = value ? JSON.parse(value) : deep(defaultC);
  } catch (error) {
    C = deep(defaultC);
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(C));
  const button = document.getElementById("saveBtn");
  button.textContent = "Saved ✓";
  setTimeout(() => {
    button.textContent = "Save";
  }, 1200);
  refresh();
}

function renderPreview() {
  const rendererUrl = new URL("renderer.js", window.location.href).href;
  const html = `<!doctype html><html><head><link rel="stylesheet" href="style.css"></head><body><header class="nav"><a class="brand" href="#top">HC<span>.</span></a><nav id="navLinks"></nav></header><main id="top"></main><footer><span>© <span id="year"></span> Himanshu Chandelkar</span><span>himanshuchandelkar.social</span></footer><script src="${rendererUrl}"><\/script><script>window.PortfolioRenderer.renderDocument(document, ${JSON.stringify(C)});<\/script></body></html>`;
  frame.srcdoc = html;
}

function bindPaths() {
  panel.querySelectorAll("[data-path]").forEach(element => {
    element.addEventListener("input", () => {
      const parts = element.dataset.path.split(".");
      let node = C;
      for (let index = 0; index < parts.length - 1; index += 1) node = node[parts[index]];
      node[parts[parts.length - 1]] = element.value;
      renderPreview();
    });
  });

  panel.querySelectorAll("[data-toggle]").forEach(element => {
    element.addEventListener("change", () => {
      C.settings.show[element.dataset.toggle] = element.checked;
      save();
    });
  });
}

function inputField(label, path) {
  const value = path.reduce((acc, key) => acc[key], C);
  return `<div class="field"><label>${label}</label><input data-path="${path.join(".")}" value="${escapeAttr(value)}"></div>`;
}

function textareaField(label, path) {
  const value = path.reduce((acc, key) => acc[key], C);
  return `<div class="field"><label>${label}</label><textarea data-path="${path.join(".")}">${value ?? ""}</textarea></div>`;
}

function sectionName(key) {
  return ({
    about: "About",
    education: "Academic Background",
    skills: "Skills",
    interests: "Interests",
    projects: "Projects",
    connect: "Connect"
  })[key] || key;
}

function renderPanel(tab = document.querySelector(".tab.active")?.dataset.tab || "hero") {
  let html = "";

  if (tab === "hero") {
    html = `<h1 class="panel-title">Hero</h1><p class="panel-sub">Change the first section and calls to action.</p>${inputField("Name", ["site", "name"])}${inputField("Headline", ["site", "title"])}${textareaField("Current goal", ["site", "goal"])}${inputField("Location", ["site", "location"])}${inputField("Primary CTA label", ["site", "primaryCtaLabel"])}${inputField("Primary CTA target", ["site", "primaryCtaTarget"])}${inputField("Resume link", ["site", "resumeUrl"])}<div class="notice">Tip: Set primary CTA target to #projects or #connect.</div>`;
  }

  if (tab === "about") {
    html = `<h1 class="panel-title">About</h1><p class="panel-sub">Edit your introduction.</p>${inputField("Heading", ["about", "heading"])}${C.about.paragraphs.map((paragraph, index) => `<div class="item"><div class="item-head"><strong>Paragraph ${index + 1}</strong><button class="mini danger" data-del="about.${index}">Delete</button></div><textarea data-about-index="${index}">${paragraph}</textarea></div>`).join("")}<button class="add" id="addAbout">+ Add paragraph</button><h3 style="margin:22px 0 10px">About highlights</h3>${(C.about.highlights || []).map((h,i) => `<div class="item"><div class="field"><label>Label</label><input data-about-highlight="${i}.label" value="${escapeAttr(h.label)}"></div><div class="field"><label>Value</label><input data-about-highlight="${i}.value" value="${escapeAttr(h.value)}"></div><div class="field"><label>Subtext</label><input data-about-highlight="${i}.sub" value="${escapeAttr(h.sub)}"></div></div>`).join("")}`;
  }

  if (tab === "education") {
    html = `<h1 class="panel-title">Academic Background</h1><p class="panel-sub">Add, remove or edit education entries.</p>${C.education.map((entry, index) => `<div class="item"><div class="item-head"><strong>${index + 1}. ${entry.title || "Education"}</strong><button class="mini danger" data-del="education.${index}">Delete</button></div><div class="field"><label>Title</label><input data-edu="${index}.title" value="${escapeAttr(entry.title)}"></div><div class="field"><label>Institution</label><input data-edu="${index}.institution" value="${escapeAttr(entry.institution)}"></div><div class="row"><div class="field"><label>Period</label><input data-edu="${index}.period" value="${escapeAttr(entry.period)}"></div><div class="field"><label>Current?</label><label class="check"><input type="checkbox" data-edu-check="${index}" ${entry.current ? "checked" : ""}> Show CURRENT tag</label></div></div><div class="field"><label>Description</label><textarea data-edu="${index}.detail">${entry.detail}</textarea></div><div class="field"><label>Coursework (comma separated)</label><input data-edu-courses="${index}" value="${escapeAttr((entry.courseHighlights || []).join(", "))}"></div></div>`).join("")}<button class="add" id="addEdu">+ Add education</button>`;
  }

  if (tab === "skills") {
    html = `<h1 class="panel-title">Skills</h1><p class="panel-sub">Group your finance, tools, and tech stack skills.</p>${C.skills.map((entry, index) => `<div class="item"><div class="item-head"><strong>${entry.category || "Skill Group"}</strong><button class="mini danger" data-del="skills.${index}">Delete</button></div><div class="field"><label>Category</label><input data-skill="${index}.category" value="${escapeAttr(entry.category)}"></div><div class="field"><label>Description</label><textarea data-skill="${index}.subtitle">${entry.subtitle || ""}</textarea></div><div class="field"><label>Count label</label><input data-skill="${index}.countLabel" value="${escapeAttr(entry.countLabel || "")}"></div><div class="field"><label>Items (comma separated)</label><input data-skill-items="${index}" value="${escapeAttr((entry.items || []).join(", "))}"></div></div>`).join("")}<button class="add" id="addSkill">+ Add skill group</button>`;
  }

  if (tab === "interests") {
    html = `<h1 class="panel-title">Interests</h1><p class="panel-sub">Your interest cards.</p>${C.interests.map((entry, index) => `<div class="item"><div class="item-head"><strong>Interest ${index + 1}</strong><button class="mini danger" data-del="interests.${index}">Delete</button></div><div class="field"><label>Title</label><input data-interest="${index}.title" value="${escapeAttr(entry.title)}"></div><div class="field"><label>Subtitle</label><input data-interest="${index}.subtitle" value="${escapeAttr(entry.subtitle || "")}"></div><div class="field"><label>Description</label><textarea data-interest="${index}.detail">${entry.detail}</textarea></div><div class="field"><label>Topic tags (comma separated)</label><input data-interest-tags="${index}" value="${escapeAttr((entry.keyPoints || []).join(", "))}"></div></div>`).join("")}<button class="add" id="addInterest">+ Add interest</button>`;
  }

  if (tab === "projects") {
    html = `<h1 class="panel-title">Projects</h1><p class="panel-sub">Add work examples with tools and outcomes.</p>${C.projects.map((project, index) => `<div class="item"><div class="item-head"><strong>${project.title || "Project"}</strong><button class="mini danger" data-del="projects.${index}">Delete</button></div><div class="field"><label>Title</label><input data-project="${index}.title" value="${escapeAttr(project.title)}"></div><div class="field"><label>Summary</label><textarea data-project="${index}.summary">${project.summary}</textarea></div><div class="field"><label>Tools</label><input data-project="${index}.tools" value="${escapeAttr(project.tools)}"></div><div class="field"><label>Outcome</label><textarea data-project="${index}.outcome">${project.outcome}</textarea></div><div class="field"><label>Project URL (optional)</label><input data-project="${index}.url" value="${escapeAttr(project.url)}"></div></div>`).join("")}<button class="add" id="addProject">+ Add project</button>`;
  }

  if (tab === "socials") {
    html = `<h1 class="panel-title">Socials</h1><p class="panel-sub">Edit links shown on your site.</p>${C.socials.map((entry, index) => `<div class="item"><div class="item-head"><strong>${entry.name || "Social"}</strong><button class="mini danger" data-del="socials.${index}">Delete</button></div><div class="row"><div class="field"><label>Name</label><input data-social="${index}.name" value="${escapeAttr(entry.name)}"></div><div class="field"><label>Handle / display text</label><input data-social="${index}.handle" value="${escapeAttr(entry.handle)}"></div></div><div class="field"><label>URL</label><input data-social="${index}.url" value="${escapeAttr(entry.url)}"></div></div>`).join("")}<button class="add" id="addSocial">+ Add social link</button>`;
  }

  if (tab === "design") {
    html = `<h1 class="panel-title">Design & Sections</h1><p class="panel-sub">Control colors, visibility, and section order.</p><div class="swatches">${inputField("Accent", ["settings", "accent"])}${inputField("Background", ["settings", "background"])}${inputField("Text", ["settings", "text"])}${inputField("Muted text", ["settings", "muted"])}</div><h3 style="margin:18px 0 10px">Show / hide</h3>${["hero", "about", "education", "skills", "interests", "projects", "connect"].map(key => `<label class="check" style="margin:10px 0"><input type="checkbox" data-toggle="${key}" ${C.settings.show[key] ? "checked" : ""}> ${key[0].toUpperCase() + key.slice(1)}</label>`).join("")}<h3 style="margin:22px 0 10px">Section order</h3><div class="section-order">${C.settings.sectionOrder.map((key, index) => `<div class="order-row"><span>${sectionName(key)}</span><span><button class="mini" data-up="${index}">↑</button><button class="mini" data-down="${index}">↓</button></span></div>`).join("")}</div>`;
  }

  panel.innerHTML = html;
  bindExtra();
  bindPaths();
}

function bindExtra() {
  panel.querySelectorAll("[data-about-index]").forEach(element => {
    element.oninput = () => {
      C.about.paragraphs[+element.dataset.aboutIndex] = element.value;
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-edu]").forEach(element => {
    element.oninput = () => {
      const [index, key] = element.dataset.edu.split(".");
      C.education[+index][key] = element.value;
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-about-highlight]").forEach(element => {
    element.oninput = () => { const [index,key] = element.dataset.aboutHighlight.split("."); C.about.highlights[+index][key] = element.value; renderPreview(); };
  });
  panel.querySelectorAll("[data-edu-courses]").forEach(element => {
    element.oninput = () => { C.education[+element.dataset.eduCourses].courseHighlights = element.value.split(",").map(v=>v.trim()).filter(Boolean); renderPreview(); };
  });
  panel.querySelectorAll("[data-edu-check]").forEach(element => {
    element.onchange = () => {
      C.education[+element.dataset.eduCheck].current = element.checked;
      save();
    };
  });

  panel.querySelectorAll("[data-skill]").forEach(element => {
    element.oninput = () => {
      const [index, key] = element.dataset.skill.split(".");
      C.skills[+index][key] = element.value;
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-skill-items]").forEach(element => {
    element.oninput = () => {
      const index = +element.dataset.skillItems;
      C.skills[index].items = element.value.split(",").map(item => item.trim()).filter(Boolean);
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-interest-tags]").forEach(element => {
    element.oninput = () => { C.interests[+element.dataset.interestTags].keyPoints = element.value.split(",").map(v=>v.trim()).filter(Boolean); renderPreview(); };
  });
  panel.querySelectorAll("[data-interest]").forEach(element => {
    element.oninput = () => {
      const [index, key] = element.dataset.interest.split(".");
      C.interests[+index][key] = element.value;
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-project]").forEach(element => {
    element.oninput = () => {
      const [index, key] = element.dataset.project.split(".");
      C.projects[+index][key] = element.value;
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-social]").forEach(element => {
    element.oninput = () => {
      const [index, key] = element.dataset.social.split(".");
      C.socials[+index][key] = element.value;
      renderPreview();
    };
  });

  panel.querySelectorAll("[data-del]").forEach(button => {
    button.onclick = () => {
      const [arrayName, index] = button.dataset.del.split(".");
      C[arrayName].splice(+index, 1);
      save();
    };
  });

  document.getElementById("addAbout")?.addEventListener("click", () => {
    C.about.paragraphs.push("New paragraph");
    save();
  });

  document.getElementById("addEdu")?.addEventListener("click", () => {
    C.education.push({ current: false, title: "New qualification", institution: "Institution", period: "Year — Year", detail: "Description" });
    save();
  });

  document.getElementById("addSkill")?.addEventListener("click", () => {
    C.skills.push({ category: "New category", items: ["Skill"] });
    save();
  });

  document.getElementById("addInterest")?.addEventListener("click", () => {
    C.interests.push({ title: "New interest", detail: "Description" });
    save();
  });

  document.getElementById("addProject")?.addEventListener("click", () => {
    C.projects.push({ title: "New project", summary: "What you built", tools: "Tools used", outcome: "Result or impact", url: "" });
    save();
  });

  document.getElementById("addSocial")?.addEventListener("click", () => {
    C.socials.push({ name: "New link", handle: "@username", url: "https://" });
    save();
  });

  panel.querySelectorAll("[data-up]").forEach(button => {
    button.onclick = () => {
      const index = +button.dataset.up;
      if (index > 0) {
        [C.settings.sectionOrder[index - 1], C.settings.sectionOrder[index]] = [C.settings.sectionOrder[index], C.settings.sectionOrder[index - 1]];
        save();
      }
    };
  });

  panel.querySelectorAll("[data-down]").forEach(button => {
    button.onclick = () => {
      const index = +button.dataset.down;
      if (index < C.settings.sectionOrder.length - 1) {
        [C.settings.sectionOrder[index + 1], C.settings.sectionOrder[index]] = [C.settings.sectionOrder[index], C.settings.sectionOrder[index + 1]];
        save();
      }
    };
  });
}

function refresh() {
  renderPanel();
  renderPreview();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderPanel(tab.dataset.tab);
  };
});

document.getElementById("saveBtn").onclick = save;
document.getElementById("resetBtn").onclick = () => {
  if (confirm("Reset editor to the original website content?")) {
    localStorage.removeItem(KEY);
    loadC();
    refresh();
  }
};
document.getElementById("exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify(C, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "content.json";
  link.click();
  URL.revokeObjectURL(link.href);
};

loadC();
renderPanel();
renderPreview();
