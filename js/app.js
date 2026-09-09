/**
 * ===================================================================
 * SHILONG LI - PORTFOLIO INTERACTION & RENDERING ENGINE
 * Reads data/content.js and dynamically builds the entire UI
 * ===================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not found. Please verify data/content.js is loaded.");
    return;
  }

  initTheme();
  renderProfile(data.profile);
  renderHighlights(data.highlights);
  renderExperiences(data.experiences);
  renderPublications(data.publications);
  renderEducation(data.education);
  renderSkills(data.skills);
  renderHobbies(data.hobbies);
  renderFooter(data.profile);
  
  initTypewriter(data.profile.taglines);
  initExperienceFilter(data.experiences);
  initPhotoGallery(data.hobbies.photography);
  initPerspectiveSwitcher();
  initTerminal(data.terminal);
  initShortcuts();
});

/* -------------------------------------------------------------------
 * 1. THEME MANAGER (Dark / Light)
 * ------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("shilong_theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = storedTheme || (systemPrefersDark ? "dark" : "dark");
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("shilong_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} theme`);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === "light" 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
}

/* -------------------------------------------------------------------
 * 2. PROFILE & HERO RENDERING
 * ------------------------------------------------------------------- */
function renderProfile(profile) {
  // Brand name in navbar
  const brandName = document.getElementById("nav-brand-name");
  if (brandName) brandName.textContent = profile.name;

  // Status Badge
  const statusContainer = document.getElementById("hero-status");
  if (statusContainer && profile.status) {
    statusContainer.innerHTML = `
      <span class="status-indicator"></span>
      <span>${escapeHtml(profile.status.text)}</span>
    `;
  }

  // Hero Name & Chinese Name
  const heroName = document.getElementById("hero-name");
  if (heroName) {
    heroName.innerHTML = profile.chineseName 
      ? `${escapeHtml(profile.name)} <span class="hero-ch-name">${escapeHtml(profile.chineseName)}</span>`
      : escapeHtml(profile.name);
  }

  // Hero Bio
  const heroBio = document.getElementById("hero-bio");
  if (heroBio) {
    heroBio.innerHTML = escapeHtml(profile.about).replace(/\n\n/g, '<br><br>');
  }

  // Avatar
  const avatarImg = document.getElementById("hero-avatar-img");
  if (avatarImg) {
    avatarImg.src = profile.avatar;
    avatarImg.alt = profile.name;
    avatarImg.onerror = () => {
      // Fallback if avatar image is missing
      avatarImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 24 24' fill='%231e293b'><text x='50%' y='55%' text-anchor='middle' fill='%2394a3b8' font-size='8' font-family='sans-serif'>SL</text></svg>";
    };
  }

  // Location Badge under Avatar
  const avatarLoc = document.getElementById("avatar-location");
  if (avatarLoc) {
    avatarLoc.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      <span>${escapeHtml(profile.location)}</span>
    `;
  }

  // Actions (Resume, Email / LinkedIn)
  const actionsContainer = document.getElementById("hero-actions");
  if (actionsContainer) {
    let actionsHtml = `
      <a href="${escapeHtml(profile.resumeUrl)}" class="btn btn-primary" target="_blank" download>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download CV / Resume
      </a>
    `;

    if (profile.contactEmail) {
      actionsHtml += `
        <a href="mailto:${escapeHtml(profile.contactEmail)}" class="btn btn-secondary" id="btn-email-contact">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Get in Touch
        </a>
        <button class="btn btn-outline" id="btn-copy-email" data-email="${escapeHtml(profile.contactEmail)}" title="Copy email address">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          Copy Email
        </button>
      `;
    } else if (profile.social && profile.social.linkedin) {
      actionsHtml += `
        <a href="${escapeHtml(profile.social.linkedin)}" target="_blank" rel="noopener" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          Connect on LinkedIn
        </a>
      `;
    }

    actionsContainer.innerHTML = actionsHtml;

    const copyBtn = document.getElementById("btn-copy-email");
    if (copyBtn) {
      copyBtn.addEventListener("click", function() {
        const email = this.getAttribute("data-email");
        navigator.clipboard.writeText(email).then(() => {
          showToast("Copied email: " + email);
        });
      });
    }
  }

  // Social Links
  const socialContainer = document.getElementById("hero-social-links");
  if (socialContainer && profile.social) {
    const s = profile.social;
    socialContainer.innerHTML = `
      ${s.github ? `<a href="${s.github}" target="_blank" rel="noopener" class="social-link" title="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>` : ''}
      ${s.linkedin ? `<a href="${s.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>` : ''}
      ${s.googlescholar ? `<a href="${s.googlescholar}" target="_blank" rel="noopener" class="social-link" title="Google Scholar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></a>` : ''}
      ${s.instagram ? `<a href="${s.instagram}" target="_blank" rel="noopener" class="social-link" title="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>` : ''}
      ${s.twitter ? `<a href="${s.twitter}" target="_blank" rel="noopener" class="social-link" title="Twitter / X"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4"></path></svg></a>` : ''}
    `;
  }
}

/* -------------------------------------------------------------------
 * 3. TYPEWRITER ANIMATION FOR TAGLINES
 * ------------------------------------------------------------------- */
function initTypewriter(taglines) {
  const container = document.getElementById("hero-tagline");
  if (!container || !taglines || taglines.length === 0) return;

  let lineIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 50;
  const deleteSpeed = 25;
  const pauseEnd = 2200;

  function type() {
    const currentLine = taglines[lineIdx];
    if (isDeleting) {
      container.textContent = currentLine.substring(0, charIdx - 1);
      charIdx--;
    } else {
      container.textContent = currentLine.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === currentLine.length) {
      isDeleting = true;
      setTimeout(type, pauseEnd);
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      lineIdx = (lineIdx + 1) % taglines.length;
      setTimeout(type, 400);
    } else {
      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
  }

  type();
}

/* -------------------------------------------------------------------
 * 4. RECRUITER HIGHLIGHTS RENDERING
 * ------------------------------------------------------------------- */
function renderHighlights(highlights) {
  const container = document.getElementById("highlights-container");
  if (!container || !highlights) return;

  container.innerHTML = highlights.map(item => `
    <div class="highlight-card">
      <div class="highlight-metric">${escapeHtml(item.metric)}</div>
      <div class="highlight-label">${escapeHtml(item.label)}</div>
      <div class="highlight-subtext">${escapeHtml(item.subtext)}</div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
 * 5. EXPERIENCES RENDERING & FILTERING
 * ------------------------------------------------------------------- */
function renderExperiences(experiences, activeFilter = "all") {
  const container = document.getElementById("experiences-container");
  if (!container || !experiences) return;

  const filtered = activeFilter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  container.innerHTML = filtered.map(exp => `
    <div class="timeline-card" data-type="${escapeHtml(exp.type)}">
      <div class="timeline-header">
        <div class="timeline-role-group">
          <h3>${escapeHtml(exp.role)}</h3>
          <span class="timeline-company">${escapeHtml(exp.company)}</span>
        </div>
        <div class="timeline-meta">
          <span class="period-badge ${exp.isCurrent ? 'current-badge' : ''}">${escapeHtml(exp.period)}</span>
          <span class="location-badge">📍 ${escapeHtml(exp.location)}</span>
        </div>
      </div>
      <p class="timeline-summary">${escapeHtml(exp.summary)}</p>
      ${exp.bullets && exp.bullets.length ? `
        <ul class="timeline-bullets">
          ${exp.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
      ` : ''}
      ${exp.skills && exp.skills.length ? `
        <div class="skill-tags">
          ${exp.skills.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join("")}
        </div>
      ` : ''}
    </div>
  `).join("");
}

function initExperienceFilter(experiences) {
  const buttons = document.querySelectorAll(".exp-filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderExperiences(experiences, filter);
    });
  });
}

/* -------------------------------------------------------------------
 * 6. PUBLICATIONS RENDERING
 * ------------------------------------------------------------------- */
function renderPublications(publications) {
  const container = document.getElementById("publications-container");
  if (!container || !publications) return;

  container.innerHTML = publications.map(pub => {
    const authorsFormatted = pub.authors.map(a => 
      a.includes("Shilong Li") ? `<strong>${escapeHtml(a)}</strong>` : escapeHtml(a)
    ).join(", ");

    return `
      <div class="publication-card" id="${escapeHtml(pub.id)}">
        <div class="pub-badge-row">
          <span class="pub-badge">${escapeHtml(pub.badge)}</span>
          <span class="pub-status">• ${escapeHtml(pub.status)} (${escapeHtml(pub.year)})</span>
        </div>
        <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
        <div class="pub-authors">${authorsFormatted}</div>
        <div class="pub-venue">${escapeHtml(pub.venue)}</div>
        <p class="pub-summary">${escapeHtml(pub.summary)}</p>
        <div class="pub-actions">
          ${pub.doiUrl ? `
            <a href="${escapeHtml(pub.doiUrl)}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              ACM Digital Library
            </a>
          ` : ''}
          ${pub.pdfUrl ? `
            <a href="${escapeHtml(pub.pdfUrl)}" target="_blank" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Paper PDF
            </a>
          ` : ''}
          ${pub.bibtex ? `
            <button class="btn btn-outline btn-copy-bibtex" data-bibtex="${escapeHtml(pub.bibtex)}" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Copy BibTeX
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join("");

  // BibTeX Copy Listener
  document.querySelectorAll(".btn-copy-bibtex").forEach(btn => {
    btn.addEventListener("click", function() {
      const bibtex = this.getAttribute("data-bibtex");
      navigator.clipboard.writeText(bibtex).then(() => {
        showToast("BibTeX citation copied!");
      });
    });
  });
}

/* -------------------------------------------------------------------
 * 7. EDUCATION RENDERING
 * ------------------------------------------------------------------- */
function renderEducation(education) {
  const container = document.getElementById("education-container");
  if (!container || !education) return;

  container.innerHTML = education.map(edu => `
    <div class="edu-card">
      <div class="period-badge" style="display:inline-block; margin-bottom: 0.75rem;">${escapeHtml(edu.period)}</div>
      <h3 class="edu-degree">${escapeHtml(edu.degree)}</h3>
      <div class="edu-school">${escapeHtml(edu.institution)} · ${escapeHtml(edu.location)}</div>
      ${edu.thesis ? `
        <div style="font-size: 0.9rem; color: var(--text-primary); margin-top: 0.6rem;">
          <strong>Thesis:</strong> <em>${escapeHtml(edu.thesis)}</em>
        </div>
      ` : ''}
      ${edu.advisor ? `
        <div style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.2rem;">
          Advisor: ${escapeHtml(edu.advisor)}
        </div>
      ` : ''}
      <p class="edu-details">${escapeHtml(edu.details)}</p>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
 * 8. SKILLS MATRIX RENDERING
 * ------------------------------------------------------------------- */
function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container || !skills) return;

  container.innerHTML = skills.map(group => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        ${escapeHtml(group.category)}
      </h3>
      <div class="skill-pill-list">
        ${group.items.map(s => `<span class="skill-pill">${escapeHtml(s)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
 * 9. HOBBIES & LIFE RENDERING (Photography, Fostering, Travel, Community)
 * ------------------------------------------------------------------- */
let photoList = [];
let currentPhotoIdx = 0;

function renderHobbies(hobbies) {
  if (!hobbies) return;

  // A. Animal Fostering Highlight
  const fosterContainer = document.getElementById("fostering-container");
  if (fosterContainer && hobbies.fostering) {
    const f = hobbies.fostering;
    fosterContainer.innerHTML = `
      <div class="foster-feature-card">
        <div>
          <span class="foster-badge">🐾 Animal Companion Fostering</span>
          <h3 class="foster-title">${escapeHtml(f.role)}</h3>
          <div class="foster-meta">
            ${escapeHtml(f.organization)} (${escapeHtml(f.period)}) · ${escapeHtml(f.location)}
          </div>
          <p class="foster-story">${escapeHtml(f.story)}</p>
          <a href="${escapeHtml(f.storyHighlightUrl || 'https://www.instagram.com/stories/highlights/17997739253052387/')}" target="_blank" rel="noopener" class="btn btn-secondary foster-btn" style="font-size: 0.9rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Follow Foster Stories on Instagram (${escapeHtml(f.instagramHandle)})
          </a>
        </div>
        <div class="foster-stats-box">
          ${f.stats.map(s => `
            <div class="foster-stat-item">
              <div class="foster-stat-val">${escapeHtml(s.value)}</div>
              <div class="foster-stat-lbl">${escapeHtml(s.label)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // B. Travel & Points of Interest Interactive Map + Open Source
  const travelCommunityContainer = document.getElementById("travel-community-container");
  if (travelCommunityContainer) {
    const travel = hobbies.travel || {};
    const community = hobbies.community || [];
    initTravelMapAndCommunity(travelCommunityContainer, travel, community);
  }
}

/* -------------------------------------------------------------------
 * 9B. INTERACTIVE EXPLORATION & TRAVEL MAP (Leaflet + Dark Matter)
 * ------------------------------------------------------------------- */
let travelLeafletMap = null;
let travelMarkerLayer = null;
let travelMarkersById = {};

function initTravelMapAndCommunity(container, travel, community) {
  const places = travel.places || [];
  const categories = travel.categories || [
    { id: "all", label: "All Spots", icon: "🗺️" },
    { id: "national-park", label: "National Parks", icon: "🌲" },
    { id: "scenic-drive", label: "Scenic Byways", icon: "🚗" },
    { id: "poi", label: "Points of Interest", icon: "📍" },
    { id: "coastal", label: "Coast & Waters", icon: "🌊" }
  ];

  const npCount = places.filter(p => p.category === "national-park").length;
  const driveCount = places.filter(p => p.category === "scenic-drive").length;
  const poiCount = places.filter(p => p.category === "poi" || p.category === "coastal").length;

  container.innerHTML = `
    <!-- Interactive Exploration & Wilderness Map Card -->
    <div class="travel-map-card" id="travel-map-card">
      <div class="travel-map-header">
        <div class="travel-map-title-group">
          <h3 class="travel-map-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            ${escapeHtml(travel.title || "Exploration & Wilderness Map")}
          </h3>
          <p class="travel-map-desc">${escapeHtml(travel.summary || "Drawn to road trips, high-altitude alpine trails, and America's magnificent national parks.")}</p>
        </div>
        <div class="travel-stats-bar">
          <span class="travel-stat-pill">📍 <strong>${places.length || travel.visitedParks?.length || 16}+</strong> Locations Explored</span>
          <span class="travel-stat-pill">🌲 <strong>${npCount || 11}</strong> National Parks</span>
          <span class="travel-stat-pill">🚗 <strong>${driveCount || 2}</strong> Scenic Byways</span>
          <span class="travel-stat-pill">🌊 <strong>${poiCount || 3}</strong> POIs & Coasts</span>
        </div>
      </div>

      <!-- Controls & Filter Bar -->
      <div class="travel-controls-bar">
        <div class="travel-filter-pills" id="travel-filter-pills">
          ${categories.map((cat, idx) => {
            const count = cat.id === "all" ? places.length : places.filter(p => p.category === cat.id).length;
            return `
              <button class="map-filter-btn ${idx === 0 ? 'active' : ''}" data-category="${escapeHtml(cat.id)}">
                <span>${cat.icon}</span>
                <span>${escapeHtml(cat.label)}</span>
                <span class="map-filter-count">${count}</span>
              </button>
            `;
          }).join("")}
        </div>
        <div class="travel-map-actions">
          <button class="btn-map-action" id="btn-map-reset-view" title="Fit all locations in view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            <span>Fit All US</span>
          </button>
        </div>
      </div>

      <!-- Leaflet Map Canvas -->
      <div class="travel-map-viewport">
        <div id="travel-map" role="region" aria-label="Interactive map of visited national parks and points of interest"></div>
      </div>

      <!-- Places Explorer List / Tray -->
      <div class="travel-places-section">
        <div class="travel-places-header">
          <h4 id="travel-places-count">
            <span>📍 Explored Locations (${places.length})</span>
          </h4>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Click any card to fly on map</span>
        </div>
        <div class="travel-places-grid" id="travel-places-grid"></div>
      </div>
    </div>

    <!-- Open Source & Service Showcase -->
    <div class="community-card">
      <h3 class="community-box-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        Open Source & Community Service
      </h3>
      <div class="community-list">
        ${community.map(item => `
          <div class="community-item">
            <h4>${escapeHtml(item.name)} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">• ${escapeHtml(item.role)}</span></h4>
            <p>${escapeHtml(item.desc)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // Initialize Map if Leaflet is available
  if (typeof L === "undefined") {
    console.warn("Leaflet library not loaded yet.");
    return;
  }

  setupLeafletMap(places, categories);
}

function setupLeafletMap(places, categories) {
  const mapElem = document.getElementById("travel-map");
  if (!mapElem) return;

  // Clean up existing map instance if re-rendered
  if (travelLeafletMap) {
    try {
      travelLeafletMap.remove();
    } catch (e) {
      console.warn("Error removing previous map instance", e);
    }
    travelLeafletMap = null;
  }

  // Create Leaflet Map centered on the US Continental extent
  // Create Leaflet Map with smooth zoom and hardware-accelerated transitions
  travelLeafletMap = L.map("travel-map", {
    center: [38.2, -96.5],
    zoom: 4,
    minZoom: 3,
    maxZoom: 16,
    zoomSnap: 1,              // Crisp integer zoom snaps prevent fuzzy tile scaling
    zoomDelta: 1,
    wheelDebounceTime: 120,   // Debounces rapid mouse wheel ticks to prevent animation backlog
    wheelPxPerZoomLevel: 100, // Smooth mouse wheel sensitivity
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true,
    scrollWheelZoom: false,   // Prevent page scrolling trap
    attributionControl: true
  });

  // Enable scroll-wheel zoom when user clicks into the map
  travelLeafletMap.on("focus", () => {
    travelLeafletMap.scrollWheelZoom.enable();
  });
  mapElem.addEventListener("mouseleave", () => {
    travelLeafletMap.scrollWheelZoom.disable();
  });

  // Esri World Dark Gray Canvas (Single optimized layer for 60fps performance)
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 16,
    updateWhenZooming: false, // Don't churn tile DOM while zooming
    updateWhenIdle: true,     // Fetch tiles only once zoom completes
    keepBuffer: 3,            // Keep nearby tiles in memory for instantaneous panning
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
  }).addTo(travelLeafletMap);

  travelMarkerLayer = L.featureGroup().addTo(travelLeafletMap);
  travelMarkersById = {};

  let currentCategory = "all";

  // Category Icon & Label Map
  const categoryMeta = {
    "national-park": { icon: "🌲", label: "National Park", class: "national-park" },
    "scenic-drive": { icon: "🚗", label: "Scenic Byway", class: "scenic-drive" },
    "poi": { icon: "📍", label: "Point of Interest", class: "poi" },
    "coastal": { icon: "🌊", label: "Coast & Waters", class: "coastal" }
  };

  function getCategoryInfo(catId) {
    return categoryMeta[catId] || { icon: "📍", label: "Place", class: "poi" };
  }

  // Render Markers & Cards for active category
  function renderFilteredPlaces(cat) {
    currentCategory = cat;
    travelMarkerLayer.clearLayers();
    travelMarkersById = {};

    const filtered = cat === "all" ? places : places.filter(p => p.category === cat);

    // Update count in places header
    const countHeader = document.getElementById("travel-places-count");
    if (countHeader) {
      countHeader.innerHTML = `<span>📍 Explored Locations (${filtered.length})</span>`;
    }

    // Render Cards in Grid
    const grid = document.getElementById("travel-places-grid");
    if (grid) {
      grid.innerHTML = filtered.map(place => {
        const meta = getCategoryInfo(place.category);
        return `
          <div class="place-card" data-id="${escapeHtml(place.id)}" id="card-${escapeHtml(place.id)}">
            <div>
              <div class="place-card-top">
                <span class="popup-category-badge badge-${meta.class}" style="margin: 0; font-size: 0.68rem; padding: 0.15rem 0.45rem;">
                  ${meta.icon} ${meta.label}
                </span>
                <span class="place-card-state">${escapeHtml(place.state)}</span>
              </div>
              <h5 class="place-card-name">${escapeHtml(place.name)}</h5>
              <p class="place-card-highlight">${escapeHtml(place.highlight || '')}</p>
            </div>
            <div class="place-card-footer">
              <span class="place-card-focus-btn">
                <span>View on map</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </span>
              ${place.photoRef ? `
                <button class="popup-photo-btn card-photo-btn" data-photoid="${escapeHtml(place.photoRef)}" style="padding: 0.2rem 0.5rem; font-size: 0.72rem;">
                  📸 Photo
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join("");

      // Bind Card clicks to fly map
      grid.querySelectorAll(".place-card").forEach(card => {
        card.addEventListener("click", (e) => {
          // If clicked photo button, don't focus card
          if (e.target.closest(".card-photo-btn")) {
            const photoId = e.target.closest(".card-photo-btn").getAttribute("data-photoid");
            openPhotoById(photoId);
            return;
          }
          const placeId = card.getAttribute("data-id");
          focusPlace(placeId);
        });
      });
    }

    // Add Markers to Leaflet
    filtered.forEach(place => {
      const meta = getCategoryInfo(place.category);
      const customIcon = L.divIcon({
        className: "custom-map-marker",
        html: `
          <div class="map-marker-pin marker-${meta.class}" id="pin-${place.id}" title="${escapeHtml(place.name)} (${escapeHtml(place.state)})">
            <span>${meta.icon}</span>
            <span class="marker-pulse"></span>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      });

      const popupHtml = `
        <div class="travel-popup-card">
          <span class="popup-category-badge badge-${meta.class}">
            ${meta.icon} ${meta.label}
          </span>
          <div class="popup-title">${escapeHtml(place.name)}</div>
          <div class="popup-state">📍 ${escapeHtml(place.state)} · ${place.coords[0].toFixed(2)}°N, ${Math.abs(place.coords[1]).toFixed(2)}°W</div>
          <p class="popup-highlight">${escapeHtml(place.highlight || '')}</p>
          <div class="popup-footer">
            <span class="popup-coords">${place.coords[0].toFixed(4)}, ${place.coords[1].toFixed(4)}</span>
            ${place.photoRef ? `<button class="popup-photo-btn map-popup-photo-btn" data-photoid="${escapeHtml(place.photoRef)}">📸 View Photo</button>` : ''}
          </div>
        </div>
      `;

      const marker = L.marker(place.coords, { icon: customIcon });
      marker.bindPopup(popupHtml, { maxWidth: 300 });

      marker.on("click", () => {
        highlightCard(place.id);
      });

      travelMarkerLayer.addLayer(marker);
      travelMarkersById[place.id] = { marker, place };
    });

    // Fit map bounds to show all markers in category
    if (filtered.length > 0) {
      try {
        const bounds = travelMarkerLayer.getBounds();
        if (bounds.isValid()) {
          travelLeafletMap.fitBounds(bounds.pad(0.12), { animate: true, duration: 1.0 });
        }
      } catch (e) {
        console.warn("Could not fit bounds", e);
      }
    }
  }

  // Focus a single place: fly to coordinates and open popup
  function focusPlace(placeId) {
    const entry = travelMarkersById[placeId];
    if (!entry) return;

    // Highlight card
    highlightCard(placeId);

    // Fly map to place with nice smooth animation
    travelLeafletMap.flyTo(entry.place.coords, 9, {
      duration: 1.25,
      easeLinearity: 0.25
    });

    setTimeout(() => {
      entry.marker.openPopup();
    }, 450);
  }

  function highlightCard(placeId) {
    document.querySelectorAll(".place-card").forEach(c => c.classList.remove("active"));
    const card = document.getElementById(`card-${placeId}`);
    if (card) {
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function openPhotoById(photoId) {
    if (!photoList || photoList.length === 0) return;
    const pIdx = photoList.findIndex(p => p.id === photoId);
    if (pIdx !== -1) {
      openLightbox(pIdx);
    } else {
      showToast("Photo not found in gallery.");
    }
  }

  // Handle clicks inside Leaflet Popups (e.g., View Photo button)
  travelLeafletMap.on("popupopen", (e) => {
    const popupNode = e.popup.getElement();
    if (!popupNode) return;
    const photoBtn = popupNode.querySelector(".map-popup-photo-btn");
    if (photoBtn) {
      photoBtn.addEventListener("click", () => {
        const photoId = photoBtn.getAttribute("data-photoid");
        openPhotoById(photoId);
      });
    }
  });

  // Filter Pill Button Event Listeners
  const filterPills = document.querySelectorAll(".map-filter-btn");
  filterPills.forEach(btn => {
    btn.addEventListener("click", () => {
      filterPills.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderFilteredPlaces(cat);
    });
  });

  // "Fit All US" Button Event Listener
  const resetBtn = document.getElementById("btn-map-reset-view");
  resetBtn?.addEventListener("click", () => {
    try {
      const bounds = travelMarkerLayer.getBounds();
      if (bounds.isValid()) {
        travelLeafletMap.fitBounds(bounds.pad(0.12), { animate: true, duration: 1.0 });
      } else {
        travelLeafletMap.flyTo([38.2, -96.5], 4, { duration: 1.0 });
      }
    } catch (e) {
      travelLeafletMap.flyTo([38.2, -96.5], 4, { duration: 1.0 });
    }
  });

  // Initial render of all places
  renderFilteredPlaces("all");

  // Invalidate size once visible / on window resize to ensure full tile rendering
  window.addEventListener("resize", () => {
    if (travelLeafletMap) travelLeafletMap.invalidateSize();
  });

  // IntersectionObserver to invalidateSize when user scrolls to map
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && travelLeafletMap) {
          travelLeafletMap.invalidateSize();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(mapElem);
  }
}

/* -------------------------------------------------------------------
 * 10. PHOTOGRAPHY GALLERY & LIGHTBOX
 * ------------------------------------------------------------------- */
function initPhotoGallery(photos) {
  const container = document.getElementById("photo-grid-container");
  const filterBar = document.getElementById("photo-filter-bar");
  if (!container || !photos) return;

  photoList = photos;

  // Extract unique categories for filter pills
  const categories = ["All", ...new Set(photos.map(p => p.category))];
  if (filterBar) {
    filterBar.innerHTML = categories.map((cat, idx) => `
      <button class="filter-btn photo-cat-btn ${idx === 0 ? 'active' : ''}" data-category="${escapeHtml(cat)}">
        ${escapeHtml(cat)}
      </button>
    `).join("");

    filterBar.querySelectorAll(".photo-cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBar.querySelectorAll(".photo-cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");
        renderPhotoGrid(category === "All" ? photoList : photoList.filter(p => p.category === category));
      });
    });
  }

  renderPhotoGrid(photoList);
  initLightboxControls();
}

function renderPhotoGrid(photos) {
  const container = document.getElementById("photo-grid-container");
  if (!container) return;

  container.innerHTML = photos.map((photo, index) => {
    // Find absolute index in full photoList for lightbox navigation
    const originalIndex = photoList.findIndex(p => p.id === photo.id);
    return `
      <div class="photo-card" data-index="${originalIndex}">
        <img class="photo-img" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.title)}" loading="lazy">
        <div class="photo-overlay">
          <span class="photo-category-pill">${escapeHtml(photo.category)}</span>
          <h4 class="photo-card-title">${escapeHtml(photo.title)}</h4>
          <span class="photo-location-text">📍 ${escapeHtml(photo.location)}</span>
        </div>
      </div>
    `;
  }).join("");

  // Card click opens Lightbox
  container.querySelectorAll(".photo-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      openLightbox(idx);
    });
  });
}

function initLightboxControls() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  prevBtn?.addEventListener("click", () => navigateLightbox(-1));
  nextBtn?.addEventListener("click", () => navigateLightbox(1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(idx) {
  currentPhotoIdx = idx;
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const captionTitle = document.getElementById("lightbox-title");
  const captionDesc = document.getElementById("lightbox-desc");

  const photo = photoList[currentPhotoIdx];
  if (!photo) return;

  img.src = photo.src;
  img.alt = photo.title;
  captionTitle.innerHTML = `${escapeHtml(photo.title)} <span style="font-size:0.85rem; color:var(--accent-cyan); font-weight:normal; margin-left:0.5rem;">📍 ${escapeHtml(photo.location)}</span>`;
  captionDesc.textContent = photo.description || "";
  captionDesc.style.display = photo.description ? "block" : "none";

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(step) {
  currentPhotoIdx = (currentPhotoIdx + step + photoList.length) % photoList.length;
  openLightbox(currentPhotoIdx);
}

/* -------------------------------------------------------------------
 * 11. PERSPECTIVE SWITCHER (All | Recruiter | Explorer)
 * ------------------------------------------------------------------- */
function initPerspectiveSwitcher() {
  const buttons = document.querySelectorAll(".view-mode-btn");
  const recruiterSections = ["section-experience", "section-publications", "section-education", "section-skills"];
  const explorerSections = ["section-hobbies"];

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-mode");

      if (mode === "recruiter") {
        document.getElementById("section-experience")?.scrollIntoView({ behavior: "smooth" });
        showToast("💼 Switched to Recruiter View: Professional timeline & papers highlighted");
      } else if (mode === "explorer") {
        document.getElementById("section-hobbies")?.scrollIntoView({ behavior: "smooth" });
        showToast("🏕️ Switched to Explorer View: Photography gallery & life stories highlighted");
      } else {
        showToast("Showing complete overview");
      }
    });
  });
}

/* -------------------------------------------------------------------
 * 12. INTERACTIVE TERMINAL / COMMAND PALETTE
 * ------------------------------------------------------------------- */
function initTerminal(terminalData) {
  const modal = document.getElementById("terminal-modal");
  const launcherBtn = document.getElementById("terminal-launcher-btn");
  const floatingBtn = document.getElementById("terminal-float-btn");
  const closeBtn = document.getElementById("terminal-close");
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  const chipsContainer = document.getElementById("terminal-chips");

  if (!modal || !terminalData) return;

  const openTerminal = () => {
    modal.classList.add("active");
    input.focus();
  };

  const closeTerminal = () => {
    modal.classList.remove("active");
  };

  launcherBtn?.addEventListener("click", openTerminal);
  floatingBtn?.addEventListener("click", openTerminal);
  closeBtn?.addEventListener("click", closeTerminal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeTerminal();
  });

  // Initial welcome message
  if (output) {
    output.textContent = terminalData.welcomeMessage || "Welcome to Shilong's Terminal Shell.\nType 'help' for commands.\n";
  }

  // Suggestion Chips
  if (chipsContainer) {
    const quickCmds = ["help", "bio", "exp", "pub", "photos", "map", "skills", "foster", "resume", "hire"];
    chipsContainer.innerHTML = quickCmds.map(cmd => `
      <span class="terminal-chip" data-cmd="${cmd}">${cmd}</span>
    `).join("");

    chipsContainer.querySelectorAll(".terminal-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        executeCommand(chip.getAttribute("data-cmd"));
      });
    });
  }

  // Handle Command Input
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const raw = input.value.trim();
      input.value = "";
      executeCommand(raw);
    }
  });

  function executeCommand(rawCmd) {
    if (!rawCmd) return;
    const cleanCmd = rawCmd.toLowerCase();
    let response = "";

    if (cleanCmd === "clear") {
      output.textContent = "";
      return;
    }

    if (cleanCmd.includes("hire")) {
      response = terminalData.commands.hire || "✨ Access granted! Shilong is thrilled to connect.";
      showToast("🚀 Offer accepted! Thanks for reaching out.");
    } else if (cleanCmd === "resume" || cleanCmd === "cv") {
      response = terminalData.commands.resume || "Opening resume...";
      window.open(window.PORTFOLIO_DATA.profile.resumeUrl, "_blank");
    } else if (cleanCmd === "photos" || cleanCmd === "gallery") {
      response = "Navigating to Photography Gallery...";
      closeTerminal();
      document.getElementById("section-hobbies")?.scrollIntoView({ behavior: "smooth" });
    } else if (cleanCmd === "map" || cleanCmd === "travel" || cleanCmd === "parks") {
      response = "Navigating to Exploration & Wilderness Map...";
      closeTerminal();
      document.getElementById("travel-map-card")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (travelLeafletMap) travelLeafletMap.invalidateSize();
      }, 300);
    } else if (terminalData.commands[cleanCmd]) {
      response = terminalData.commands[cleanCmd];
    } else {
      response = `sh: command not found: ${cleanCmd}. Type 'help' to view available commands.`;
    }

    output.textContent += `\n$ ${rawCmd}\n${response}\n`;
    output.parentElement.scrollTop = output.parentElement.scrollHeight;
  }
}

/* -------------------------------------------------------------------
 * 13. KEYBOARD SHORTCUTS (Cmd+K / Ctrl+K)
 * ------------------------------------------------------------------- */
function initShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      const modal = document.getElementById("terminal-modal");
      if (modal) {
        if (modal.classList.contains("active")) {
          modal.classList.remove("active");
        } else {
          modal.classList.add("active");
          document.getElementById("terminal-input")?.focus();
        }
      }
    }
  });
}

/* -------------------------------------------------------------------
 * 14. FOOTER & MOTTO
 * ------------------------------------------------------------------- */
function renderFooter(profile) {
  const footerMotto = document.getElementById("footer-motto");
  const footerCopy = document.getElementById("footer-copy");

  if (footerMotto && profile.motto) {
    footerMotto.textContent = `"${profile.motto}"`;
  }
  if (footerCopy) {
    const year = new Date().getFullYear();
    footerCopy.textContent = `© ${year} ${profile.name}. Hosted on GitHub Pages. Built with zero build steps & pure data architecture.`;
  }
}

/* -------------------------------------------------------------------
 * 15. TOAST NOTIFICATION UTILITY
 * ------------------------------------------------------------------- */
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

/* HTML Escaper */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
