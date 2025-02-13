/**
 * Translation dictionary for our project.
 * Supports French (fr) and English (en).
 */
export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      activities: "Nos Activités",
      blog: "Blog",
      join: "Rejoindre",
      contact: "Contact"
    },
    home: {
      intro: "AF-DEV est la communauté de développeurs africains qui façonne l'avenir technologique du continent. Ensemble, construisons des solutions open-source innovantes et propulsons l'Afrique au cœur de la révolution numérique.",
      button: "Rejoignez la révolution"
    },
    services: {
      title: "Nos activités",
      description: "Nous collaborons sur des projets open-source pour faire de l'Afrique un nouveau hub du développement.",
      boxes: {
        hackathons: {
          title: "Hackathons",
          description: "Des compétitions pour résoudre des problèmes avec le développement open-source.",
          button: "En savoir plus"
        },
        meetups: {
          title: "Meetups",
          description: "Des rencontres entre développeurs africains pour échanger et collaborer.",
          button: "En savoir plus"
        },
        trainings: {
          title: "Formations",
          description: "Des tutoriels et formations en ligne pour accompagner les développeurs.",
          button: "Démarrer"
        },
        collaboration: {
          title: "Collaboration Open-Source",
          description: "Participation à des projets open-source pour encourager l'innovation.",
          button: "Participer"
        }
      }
    },
    blog: {
      title: "Blog & Actualités",
      subtitle: "Découvrez les dernières actualités, tutoriels et interviews de l'écosystème tech africain.",
      filters: {
        all: "Tout",
        web: "Web",
        mobile: "Mobile",
        ia: "IA",
        interviews: "Interviews",
        news: "News"
      },
      readMore: "Lire l'article →",
      loadMore: "Voir plus d'articles"
    },
    community: {
      title: "Rejoindre la Communauté",
      description: "En rejoignant AF-DEV, vous bénéficiez de nombreux avantages pour booster votre carrière de développeur :",
      benefits: [
        "Accès à des ressources exclusives et tutoriels.",
        "Réseautage avec des développeurs talentueux à travers l'Afrique.",
        "Participation à des projets open-source innovants.",
        "Invitations à des événements et hackathons.",
        "Opportunités de collaboration et de mentorat."
      ],
      ctaText: "Rejoignez-nous dès maintenant sur Telegram pour ne rien manquer !",
      ctaButton: "Rejoindre sur Telegram"
    },
    contact: {
      title: "Contactez-nous",
      nameLabel: "Votre nom",
      emailLabel: "Votre email",
      messageLabel: "Votre message",
      submitButton: "Envoyer le message"
    },
    footer: {
      copyright: "@AF-DEV Tous droits réservés"
    }
  },
  en: {
    nav: {
      home: "Home",
      activities: "Our Activities",
      blog: "Blog",
      join: "Join",
      contact: "Contact"
    },
    home: {
      intro: "AF-DEV is the community of African developers shaping the continent's technological future. Together, let's build innovative open-source solutions and propel Africa to the heart of the digital revolution.",
      button: "Join the Revolution"
    },
    services: {
      title: "Our Activities",
      description: "We collaborate on open-source projects to make Africa a new hub for development.",
      boxes: {
        hackathons: {
          title: "Hackathons",
          description: "Competitions to solve problems with open-source development.",
          button: "Learn More"
        },
        meetups: {
          title: "Meetups",
          description: "Meetups for African developers to exchange and collaborate.",
          button: "Learn More"
        },
        trainings: {
          title: "Trainings",
          description: "Tutorials and online courses to support developers.",
          button: "Get Started"
        },
        collaboration: {
          title: "Open-Source Collaboration",
          description: "Participate in open-source projects to foster innovation.",
          button: "Participate"
        }
      }
    },
    blog: {
      title: "Blog & News",
      subtitle: "Discover the latest news, tutorials, and interviews from the African tech ecosystem.",
      filters: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        ia: "AI",
        interviews: "Interviews",
        news: "News"
      },
      readMore: "Read Article →",
      loadMore: "Load More Articles"
    },
    community: {
      title: "Join the Community",
      description: "By joining AF-DEV, you gain numerous benefits to boost your developer career:",
      benefits: [
        "Access to exclusive resources and tutorials.",
        "Networking with talented developers across Africa.",
        "Participation in innovative open-source projects.",
        "Invitations to events and hackathons.",
        "Opportunities for collaboration and mentorship."
      ],
      ctaText: "Join us now on Telegram to stay updated!",
      ctaButton: "Join on Telegram"
    },
    contact: {
      title: "Contact Us",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Your Message",
      submitButton: "Send Message"
    },
    footer: {
      copyright: "@AF-DEV All rights reserved"
    }
  }
};

/**
 * Get translations based on selected language.
 * Defaults to French if language is not found.
 * @param {string} lang - Language code (e.g., 'fr' or 'en').
 * @returns {Object} Translation object for the given language.
 */
export function getTranslations(lang) {
  return translations[lang] || translations.fr;
}
