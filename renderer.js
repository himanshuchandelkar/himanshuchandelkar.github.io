(function(global){
  const SECTION_NAMES = {
    about: "About",
    education: "Education",
    skills: "Skills",
    interests: "Interests",
    projects: "Projects",
    connect: "Connect"
  };

  const SECTION_LABELS = {
    about: "ABOUT ME",
    education: "EDUCATION",
    skills: "SKILLS",
    interests: "INTERESTS",
    projects: "PROJECTS"
  };

  const LABELLED_SECTIONS = ["about", "education", "skills", "interests", "projects"];

  const esc = value => String(value ?? "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));

  const linkAttrs = url => String(url || "").startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"';

  function sectionLabelMap(order){
    const map = {};
    let index = 1;
    for(const key of order || []){
      if(LABELLED_SECTIONS.includes(key)){
        map[key] = String(index++).padStart(2, "0");
      }
    }
    return map;
  }

  function renderHero(C){
    if(!C.settings?.show?.hero) return "";
    const ctaLabel = C.site?.primaryCtaLabel || "View Projects";
    const ctaTarget = C.site?.primaryCtaTarget || "#projects";
    const resumeUrl = C.site?.resumeUrl || "";

    return `<section class="hero"><div class="hero-copy"><p class="eyebrow">HELLO, I'M</p><h1>${esc(C.site?.name).replace(" ", "<br>")}</h1><p class="role">${esc(C.site?.title)}</p>${C.site?.goal ? `<p class="goal">${esc(C.site.goal)}</p>` : ""}<p class="location">📍 ${esc(C.site?.location)}</p><div class="actions"><a class="button primary" href="${esc(ctaTarget)}">${esc(ctaLabel)}</a>${resumeUrl ? `<a class="button secondary" href="${esc(resumeUrl)}"${linkAttrs(resumeUrl)}>Download Resume</a>` : ""}</div></div><div class="social-strip">${(C.socials || []).map(s => `<a href="${esc(s.url)}"${linkAttrs(s.url)}>${esc(s.name)}</a>`).join("")}</div></section>`;
  }

  function renderSections(C){
    const order = C.settings?.sectionOrder || [];
    const labels = sectionLabelMap(order);
    let html = "";

    for(const key of order){
      if(!C.settings?.show?.[key]) continue;

      if(key === "about"){
        html += `<section id="about" class="section"><div class="section-label">${labels.about} — ${SECTION_LABELS.about}</div><div class="section-content about-copy"><h2>${esc(C.about?.heading)}</h2>${(C.about?.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("")}</div></section>`;
      }

      if(key === "education"){
        html += `<section id="education" class="section"><div class="section-label">${labels.education} — ${SECTION_LABELS.education}</div><div class="section-content"><div class="education-timeline">${(C.education || []).map(e => `<article class="education-item ${e.current ? "current" : ""}"><div class="education-marker"></div><div class="education-main">${e.current ? '<span class="tag">CURRENT</span>' : ""}<h3>${esc(e.title)}</h3><p class="institution">${esc(e.institution)}</p><p class="muted">${esc(e.period)}</p><p class="education-detail">${esc(e.detail)}</p></div></article>`).join("")}</div></div></section>`;
      }

      if(key === "skills"){
        html += `<section id="skills" class="section"><div class="section-label">${labels.skills} — ${SECTION_LABELS.skills}</div><div class="section-content"><h2>Skills I’m building.</h2><div class="skills-grid">${(C.skills || []).map(group => `<article class="skill-group"><h3>${esc(group.category)}</h3><div class="skill-tags">${(group.items || []).map(item => `<span>${esc(item)}</span>`).join("")}</div></article>`).join("")}</div></div></section>`;
      }

      if(key === "interests"){
        html += `<section id="interests" class="section"><div class="section-label">${labels.interests} — ${SECTION_LABELS.interests}</div><div class="section-content"><h2>Areas I’m interested in.</h2><div class="cards">${(C.interests || []).map((i, n) => `<article class="card"><span>${String(n + 1).padStart(2, "0")}</span><h3>${esc(i.title)}</h3><p>${esc(i.detail)}</p></article>`).join("")}</div></div></section>`;
      }

      if(key === "connect"){
        html += `<section id="connect" class="contact"><p class="eyebrow">CONNECT</p><h2>Find me online.</h2><p class="contact-intro">You can find me across these platforms.</p><div class="connect-list">${(C.socials || []).map(s => `<a href="${esc(s.url)}"${linkAttrs(s.url)}><strong>${esc(s.name)}</strong><span>${esc(s.handle)} ↗</span></a>`).join("")}</div></section>`;
      }
    }

    return html;
  }

  function renderDocument(doc, C){
    doc.documentElement.style.setProperty("--accent", C.settings?.accent || "#b9ff66");
    doc.documentElement.style.setProperty("--bg", C.settings?.background || "#090a0c");
    doc.documentElement.style.setProperty("--text", C.settings?.text || "#f4f5f7");
    doc.documentElement.style.setProperty("--muted", C.settings?.muted || "#9da3ad");

    const nav = doc.getElementById("navLinks");
    if(nav){
      nav.innerHTML = (C.settings?.sectionOrder || [])
        .filter(key => C.settings?.show?.[key])
        .map(key => `<a href="#${key}">${SECTION_NAMES[key] || key}</a>`)
        .join("");
    }

    const top = doc.getElementById("top");
    if(top) top.innerHTML = `${renderHero(C)}${renderSections(C)}`;

    const year = doc.getElementById("year");
    if(year) year.textContent = new Date().getFullYear();
  }

  global.PortfolioRenderer = { renderDocument };
})(window);
