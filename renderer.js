(function(global){
  const SECTION_NAMES = {
    about: "About",
    education: "Education",
    skills: "Skills",
    interests: "Interests",
    connect: "Connect",
    projects: "Projects"
  };

  const SECTION_LABELS = {
    about: "ABOUT ME",
    education: "ACADEMIC BACKGROUND",
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
        html += `<section id="about" class="section"><div class="section-label">${labels.about || "01"} — ABOUT ME</div><div class="section-content about-copy"><h2>${esc(C.about?.heading || "A little about me.")}</h2>${(C.about?.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("")}${(C.about?.highlights || []).length ? `<div class="about-highlights-grid">${C.about.highlights.map(h => `<div class="highlight-card"><span class="highlight-label">${esc(h.label)}</span><strong>${esc(h.value)}</strong>${h.sub ? `<span class="highlight-sub">${esc(h.sub)}</span>` : ""}</div>`).join("")}</div>` : ""}</div></section>`;
      }
      if(key === "education"){
        html += `<section id="education" class="section"><div class="section-label">${labels.education || "02"} — ACADEMIC BACKGROUND</div><div class="section-content"><h2>Academic background.</h2><div class="education-timeline">${(C.education || []).map(e => `<article class="education-item ${e.current ? "current" : ""}"><div class="education-marker"></div><div class="education-main"><div class="education-badge-row"><span class="badge ${e.current ? "badge-current" : "badge-done"}">${e.current ? "● CURRENT PROGRAM" : "COMPLETED"}</span><span class="education-period">${esc(e.period)}</span></div><h3>${esc(e.title)}</h3><p class="education-inst">${esc(e.institution)}</p><p class="education-detail">${esc(e.detail)}</p>${(e.courseHighlights || []).length ? `<div class="course-highlights-box"><span class="course-label">Key Coursework &amp; Foundations:</span><div class="course-pills">${e.courseHighlights.map(c => `<span>${esc(c)}</span>`).join("")}</div></div>` : ""}</div></article>`).join("")}</div></div></section>`;
      }
      if(key === "skills"){
        const totalSkills = (C.skills || []).reduce((sum,g) => sum + (g.items || []).length,0);
        html += `<section id="skills" class="section"><div class="section-label">${labels.skills || "03"} — SKILLS</div><div class="section-content"><div class="section-header-row"><div><h2>Skills I’m building.</h2><p class="section-intro">My active skillset spanning commerce principles, digital business tools, and web fundamentals.</p></div><div class="verified-pill">${totalSkills} Core Skills</div></div><div class="skills-grid">${(C.skills || []).map(group => `<div class="skill-group"><div><div class="skill-group-head"><h3>${esc(group.category)}</h3><span class="count-tag">${esc(group.countLabel || ((group.items || []).length + " Skills"))}</span></div><p class="group-subtitle">${esc(group.subtitle || "")}</p><div class="skill-tags">${(group.items || []).map(skill => `<span class="skill-pill">${esc(skill)}</span>`).join("")}</div></div></div>`).join("")}</div></div></section>`;
      }
      if(key === "interests"){
        html += `<section id="interests" class="section"><div class="section-label">${labels.interests || "04"} — INTERESTS</div><div class="section-content"><h2>Areas I’m interested in.</h2><p class="section-intro">Key domains where I spend my time researching, reading, and exploring practical innovations.</p><div class="cards">${(C.interests || []).map((i,n) => `<article class="card"><div class="card-head"><span class="card-num">${esc(i.number || String(n+1).padStart(2,"0"))}</span>${i.subtitle ? `<span class="card-sub">${esc(i.subtitle)}</span>` : ""}</div><h3>${esc(i.title)}</h3><p>${esc(i.detail)}</p>${(i.keyPoints || []).length ? `<div class="interest-pills">${i.keyPoints.map(kp => `<span>${esc(kp)}</span>`).join("")}</div>` : ""}</article>`).join("")}</div></div></section>`;
      }
      if(key === "projects"){
        html += `<section id="projects" class="section"><div class="section-label">${labels.projects || "05"} — PROJECTS</div><div class="section-content"><h2>Selected projects.</h2><p class="section-intro">Practical work, experiments, and things I’m building.</p><div class="project-list">${(C.projects || []).map(project => `<article class="project-card"><h3>${esc(project.title)}</h3><p class="project-summary">${esc(project.summary)}</p>${project.tools ? `<p class="project-meta"><strong>Tools:</strong> ${esc(project.tools)}</p>` : ""}${project.outcome ? `<p class="project-meta"><strong>Outcome:</strong> ${esc(project.outcome)}</p>` : ""}${project.url ? `<a class="project-link" href="${esc(project.url)}"${linkAttrs(project.url)}>View project ↗</a>` : ""}</article>`).join("")}</div></div></section>`;
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
