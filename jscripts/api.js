/**
 * Simulated API call to fetch blog posts.
 * TODO: We need to make a real blog and fetch the latest article
 * Resolves after 1 second with an array of post objects.
 * @returns {Promise<Object[]>} Promise resolving to the blog posts.
 */
export function fetchBlogPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      const posts = [
        {
          id: 1,
          category: 'web',
          image: 'img/blog1.jpeg',
          title: {
            fr: "Les meilleures pratiques pour le développement web moderne",
            en: "Best Practices for Modern Web Development"
          },
          description: {
            fr: "Découvrez comment créer des sites web performants et accessibles avec les dernières technologies.",
            en: "Learn how to build high-performance, accessible websites with the latest technologies."
          },
          link: "#"
        },
        {
          id: 2,
          category: 'interviews',
          image: 'img/blog2.webp',
          title: {
            fr: "Rencontre avec Fatou, développeuse sénégalaise spécialisée en IA",
            en: "Interview with Fatou, a Senegalese AI Developer"
          },
          description: {
            fr: "Découvrez le parcours inspirant de Fatou et ses conseils pour percer dans l'industrie tech.",
            en: "Discover Fatou's inspiring journey and her advice for breaking into the tech industry."
          },
          link: "#"
        },
        {
          id: 3,
          category: 'news',
          image: 'img/blog3.jpg',
          title: {
            fr: "L'Afrique, futur hub de l'innovation technologique ?",
            en: "Is Africa the Future Hub of Tech Innovation?"
          },
          description: {
            fr: "Analyse des tendances tech en Afrique et des opportunités pour les développeurs.",
            en: "Analysis of tech trends in Africa and opportunities for developers."
          },
          link: "#"
        }
      ];
      resolve(posts);
    }, 1000);
  });
}

/**
 * Simulated API call to fetch blog categories.
 * Resolves after 0.5 seconds with an array of category strings.
 * @returns {Promise<string[]>} Promise resolving to the categories.
 */
export function fetchCategories() {
  return new Promise(resolve => {
    setTimeout(() => {
      const categories = ['all', 'web', 'mobile', 'ia', 'interviews', 'news']; // auto-translated
      resolve(categories);
    }, 500);
  });
}
