// jsscripts/main.js

import { getTranslations } from './lang.js';
import { fetchBlogPosts, fetchCategories } from './api.js';
import { H1_TEXTS } from './config.js';

/**
 * App entry point.
 * Detects language, updates UI texts, kicks off animations & loads blog content.
 */
document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en'; // auto-detect
  const trans = getTranslations(userLang);

  updateStaticTexts(trans, userLang);
  animateHomeH1(userLang);
  initScrollAnimations();
  setupNavToggle();
  loadBlogContent(userLang, trans);
});

/**
 * Updates all static UI texts.
 * @param {Object} trans - The translations object.
 * @param {string} userLang - 'fr' or 'en'
 */
function updateStaticTexts(trans, userLang) {
  // Navbar
  document.getElementById("nav-link-1").textContent = trans.nav.home;
  document.getElementById("nav-link-2").textContent = trans.nav.activities;
  document.getElementById("nav-link-3").textContent = trans.nav.blog;
  document.getElementById("nav-link-4").textContent = trans.nav.join;
  document.getElementById("nav-link-5").textContent = trans.nav.contact;

  // Home Section
  document.getElementById("home-heading-1").textContent = trans.home.heading;
  document.getElementById("home-paragraph-1").textContent = trans.home.paragraph;
  document.getElementById("home-btn-1").textContent = trans.home.button;

  // Services Section
  document.getElementById("services-title-1").textContent = trans.services.title;
  document.getElementById("services-subtitle-1").textContent = trans.services.subtitle;
  
  // Service Box 1: Hackathons
  document.getElementById("service-title-1").textContent = trans.services.boxes.hackathons.title;
  document.getElementById("service-desc-1").textContent = trans.services.boxes.hackathons.description;
  document.getElementById("service-btn-1").textContent = trans.services.boxes.hackathons.button;

  // Service Box 2: Meetups
  document.getElementById("service-title-2").textContent = trans.services.boxes.meetups.title;
  document.getElementById("service-desc-2").textContent = trans.services.boxes.meetups.description;
  document.getElementById("service-btn-2").textContent = trans.services.boxes.meetups.button;

  // Service Box 3: Trainings
  document.getElementById("service-title-3").textContent = trans.services.boxes.trainings.title;
  document.getElementById("service-desc-3").textContent = trans.services.boxes.trainings.description;
  document.getElementById("service-btn-3").textContent = trans.services.boxes.trainings.button;

  // Service Box 4: Collaboration
  document.getElementById("service-title-4").textContent = trans.services.boxes.collaboration.title;
  document.getElementById("service-desc-4").textContent = trans.services.boxes.collaboration.description;
  document.getElementById("service-btn-4").textContent = trans.services.boxes.collaboration.button;

  // Blog Section
  document.getElementById("blog-title-1").textContent = trans.blog.title;
  document.getElementById("blog-subtitle-1").textContent = trans.blog.subtitle;

  // Community Section
  document.getElementById("community-heading-1").textContent = trans.community.heading;
  document.getElementById("community-paragraph-1").textContent = trans.community.paragraph;
  
  // Benefits
  const benefitIds = ["benefit-1", "benefit-2", "benefit-3", "benefit-4", "benefit-5"];
  trans.community.benefits.forEach((benefit, index) => {
    const benefitEl = document.getElementById(benefitIds[index]);
    if (benefitEl) {
      benefitEl.textContent = benefit;
    }
  });
  
  document.getElementById("community-cta-text-1").textContent = trans.community.ctaText;
  document.getElementById("community-btn-1").textContent = trans.community.ctaButton;

  // Contact Section
  document.getElementById("contact-heading-1").textContent = trans.contact.title;
  document.getElementById("label-name-1").textContent = trans.contact.nameLabel;
  document.getElementById("label-email-1").textContent = trans.contact.emailLabel;
  document.getElementById("label-message-1").textContent = trans.contact.messageLabel;
  document.getElementById("contact-submit-1").textContent = trans.contact.submitButton;

  // Footer Section
  document.getElementById("footer-logo-1").textContent = trans.footer.logo;
  document.getElementById("footer-motto-1").textContent = trans.footer.motto;
  
  // Footer - Explore
  document.getElementById("footer-title-explorer-1").textContent = trans.footer.explorer.title;
  document.getElementById("footer-link-anchor-1").textContent = trans.footer.explorer.links.home;
  document.getElementById("footer-link-anchor-2").textContent = trans.footer.explorer.links.projects;
  document.getElementById("footer-link-anchor-3").textContent = trans.footer.explorer.links.blog;
  document.getElementById("footer-link-anchor-4").textContent = trans.footer.explorer.links.events;
  document.getElementById("footer-link-anchor-5").textContent = trans.footer.explorer.links.contact;
  
  // Footer - Ressources
  document.getElementById("footer-title-resources-1").textContent = trans.footer.resources.title;
  document.getElementById("footer-resource-anchor-1").textContent = trans.footer.resources.links.docs;
  document.getElementById("footer-resource-anchor-2").textContent = trans.footer.resources.links.tutorials;
  document.getElementById("footer-resource-anchor-3").textContent = trans.footer.resources.links.tools;
  document.getElementById("footer-resource-anchor-4").textContent = trans.footer.resources.links.careers;
  document.getElementById("footer-resource-anchor-5").textContent = trans.footer.resources.links.faq;
  
  // Footer - Legal link
  document.getElementById("legal-link-terms-1").textContent = trans.footer.legal.terms;
  document.getElementById("legal-link-privacy-1").textContent = trans.footer.legal.privacy;
  document.getElementById("legal-link-cookies-1").textContent = trans.footer.legal.cookies;
  
  // Footer - Copyright
  document.getElementById("copyright-1").textContent = trans.footer.copyright;
}

/**
 * Animates the home H1 with a typing/deleting effect.
 * Cycles through texts in H1_TEXTS.
 * @param {string} lang - 'fr' or 'en'
 */
function animateHomeH1(lang) {
  const h1 = document.querySelector('.home-text h1');
  if (!h1) return;
  
  const texts = H1_TEXTS[lang] || H1_TEXTS.fr;
  let index = 0;
  h1.textContent = ""; // clear any existing text
  
  /**
   * Types a given text, one character at a time.
   * @param {string} text - The text to type.
   * @param {number} [charIndex=0] - Current character index.
   */
  function typeText(text, charIndex = 0) {
    if (charIndex < text.length) {
      h1.textContent += text.charAt(charIndex);
      setTimeout(() => typeText(text, charIndex + 1), 100); // adjust typing speed as needed
    } else {
      // Once done, wait before deleting
      setTimeout(() => deleteText(), 2000);
    }
  }
  
  /**
   * Deletes the current text one character at a time,
   * then moves to the next text.
   */
  function deleteText() {
    if (h1.textContent.length > 0) {
      h1.textContent = h1.textContent.slice(0, -1);
      setTimeout(deleteText, 50); // deletion speed
    } else {
      index = (index + 1) % texts.length;
      setTimeout(() => typeText(texts[index]), 500);
    }
  }
  
  // Kick off the typing effect
  typeText(texts[index]);
}

/**
 * Sets up scroll-triggered animations.
 * When elements with .scroll-animate enter the viewport, add .visible.
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

/**
 * Enables mobile menu toggle.
 * Clicking the menu icon toggles the navbar's 'active' state.
 */
function setupNavToggle() {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }
}

/**
 * Loads blog posts and filter buttons via simulated API calls.
 * @param {string} lang - 'fr' or 'en'
 * @param {Object} trans - Translations object.
 */
function loadBlogContent(lang, trans) {
  fetchBlogPosts().then(posts => {
    const blogPostsContainer = document.querySelector('.blog-posts');
    if (blogPostsContainer) {
      blogPostsContainer.innerHTML = "";
      posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.setAttribute('data-category', post.category);
        article.innerHTML = `
          <div class="post-img">
            <img src="${post.image}" alt="${post.title[lang]}">
          </div>
          <div class="post-content">
            <span class="post-category">${post.category.toUpperCase()}</span>
            <h3>${post.title[lang]}</h3>
            <p>${post.description[lang]}</p>
            <a href="${post.link}" class="post-link">${trans.blog.readMore}</a>
          </div>
        `;
        blogPostsContainer.appendChild(article);
      });
    }
  });
  
  fetchCategories().then(categories => {
    const filterContainer = document.querySelector('.blog-filters');
    if (filterContainer) {
      filterContainer.innerHTML = "";
      categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', cat);
        if (cat === 'all') {
          button.textContent = trans.blog.filters.all;
          button.classList.add('active');
        } else if (cat === 'ia') {
          button.textContent = lang === 'fr' ? "IA" : "AI";
        } else {
          button.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        }
        filterContainer.appendChild(button);
      });
      setupBlogFilters();
    }
  });
}

/**
 * Sets up blog filters.
 * Clicking a filter shows/hides posts by category.
 */
function setupBlogFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.blog-post').forEach(post => {
        post.style.display = (filter === 'all' || post.getAttribute('data-category') === filter) ? 'block' : 'none';
      });
    });
  });
}
