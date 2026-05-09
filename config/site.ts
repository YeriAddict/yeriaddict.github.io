export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "denis-leang",
  description: "Denis's personal website!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/denis-leang",
    linkedin: "https://www.linkedin.com/in/denis-leang/",
  },
};
