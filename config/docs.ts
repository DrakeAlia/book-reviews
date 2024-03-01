import { MainNavItem, SidebarNavItem } from "../types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

// This is the configuration for the documentation site.
export const docsConfig: DocsConfig = {
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
          title: "Sign Up",
          href: "/sign-up",
          items: [],
        },
        {
          title: "Sign In",
          href: "/sign-in",
          items: [],
        },
      ],
    },
    {
      title: "Book Review",
      items: [
        {
          title: "Create Review",
          href: "/review",
          items: [],
        },
        // {
        //   title: "Edit",
        //   href: "/review/edit",
        //   items: [],
        // },
      ],
    },
  ],
};
