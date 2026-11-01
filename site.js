const fallback = {
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

let C = fallback;

async function load() {
  try {
    const response = await fetch(`content.json?${Date.now()}`);
    if (response.ok) C = await response.json();
  } catch (error) {}
  window.PortfolioRenderer.renderDocument(document, C);
}

load();
