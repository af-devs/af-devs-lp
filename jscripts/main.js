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
  // Update navbar links
  const navLinks = document.querySelectorAll('.navbar li a');
  if (navLinks.length >= 5) {
    navLinks[0].textContent = trans.nav.home;
    navLinks[1].textContent = trans.nav.activities;
    navLinks[2].textContent = trans.nav.blog;
    navLinks[3].textContent = trans.nav.join;
    navLinks[4].textContent = trans.nav.contact;
  }

  // Home section
  const homeParagraph = document.querySelector('.home-text p');
  if (homeParagraph) homeParagraph.textContent = trans.home.intro;
  const homeButton = document.querySelector('.home-text a.btn');
  if (homeButton) homeButton.textContent = trans.home.button;
  
  // Services section
  const servicesHeading = document.querySelector('.services .heading h2');
  if (servicesHeading) servicesHeading.textContent = trans.services.title;
  const servicesDesc = document.querySelector('.services .heading p');
  if (servicesDesc) servicesDesc.textContent = trans.services.description;
  const serviceBoxes = document.querySelectorAll('.services-container .box');
  if (serviceBoxes.length >= 4) {
    // Hackathons
    serviceBoxes[0].querySelector('h2').textContent = trans.services.boxes.hackathons.title;
    serviceBoxes[0].querySelector('p').textContent = trans.services.boxes.hackathons.description;
    serviceBoxes[0].querySelector('a.s-btn').textContent = trans.services.boxes.hackathons.button;
    // Meetups
    serviceBoxes[1].querySelector('h2').textContent = trans.services.boxes.meetups.title;
    serviceBoxes[1].querySelector('p').textContent = trans.services.boxes.meetups.description;
    serviceBoxes[1].querySelector('a.s-btn').textContent = trans.services.boxes.meetups.button;
    // Trainings
    serviceBoxes[2].querySelector('h2').textContent = trans.services.boxes.trainings.title;
    serviceBoxes[2].querySelector('p').textContent = trans.services.boxes.trainings.description;
    serviceBoxes[2].querySelector('a.s-btn').textContent = trans.services.boxes.trainings.button;
    // Collaboration
    serviceBoxes[3].querySelector('h2').textContent = trans.services.boxes.collaboration.title;
    serviceBoxes[3].querySelector('p').textContent = trans.services.boxes.collaboration.description;
    serviceBoxes[3].querySelector('a.s-btn').textContent = trans.services.boxes.collaboration.button;
  }
  
  // Blog section
  const blogHeading = document.querySelector('.blog h2');
  if (blogHeading) blogHeading.textContent = trans.blog.title;
  const blogSubtitle = document.querySelector('.blog .blog-subtitle');
  if (blogSubtitle) blogSubtitle.textContent = trans.blog.subtitle;
  
  // Community section
  const communityTitle = document.querySelector('.community-text h2');
  if (communityTitle) communityTitle.textContent = trans.community.title;
  const communityPara = document.querySelector('.community-text p');
  if (communityPara) communityPara.textContent = trans.community.description;
  const communityListItems = document.querySelectorAll('.community-benefits li');
  trans.community.benefits.forEach((benefit, i) => {
    if (communityListItems[i]) communityListItems[i].textContent = benefit;
  });
  const communityCtaPara = document.querySelector('.community-cta p');
  if (communityCtaPara) communityCtaPara.textContent = trans.community.ctaText;
  const communityCtaButton = document.querySelector('.community-btn');
  if (communityCtaButton) communityCtaButton.textContent = trans.community.ctaButton;
  
  // Contact section
  const contactTitle = document.querySelector('.contact-form h2');
  if (contactTitle) contactTitle.textContent = trans.contact.title;
  document.querySelector('label[for="name"]').textContent = trans.contact.nameLabel;
  document.querySelector('label[for="email"]').textContent = trans.contact.emailLabel;
  document.querySelector('label[for="message"]').textContent = trans.contact.messageLabel;
  const submitButton = document.querySelector('.contact-form button');
  if (submitButton) submitButton.textContent = trans.contact.submitButton;
  
  // Footer
  const footerCopyright = document.querySelector('.copyright p');
  if (footerCopyright) footerCopyright.textContent = trans.footer.copyright;
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
