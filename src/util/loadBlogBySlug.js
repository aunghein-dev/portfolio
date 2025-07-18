// blogLoader.js
export const loadBlogBySlug = async (slug) => {
  const map = {
    "create-contact-form-nextjs": () => import("../blogs/test.mdx"),
    "astro-reading-time": () => import("../blogs/test.mdx"),
    "a-priori-care": () => import("../blogs/test.mdx"),
    "git-workflows": () => import("../blogs/test.mdx"),
  };
  return map[slug] ? map[slug]() : null;
};
