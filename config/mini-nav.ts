import { MainNavItem, SidebarNavItem } from "../types/nav";

interface miniNavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const miniNavConfig: miniNavConfig = {
  mainNav: [
    {
      title: "GitHub",
      href: "http://www.github.com/DrakeAlia",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/drake___alia",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Create Review",
          href: "/review",
          items: [],
        },
        {
          title: "View Bookshelf",
          href: "/bookshelf",
          items: [],
        },
      ],
    },
  ],
};
