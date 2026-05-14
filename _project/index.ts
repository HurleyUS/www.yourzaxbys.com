export interface OutlineItem {
  anchor: string;
  href: string;
  title: string;
  items?: OutlineItem[];
}

export interface Outline {
  public: OutlineItem[];
  private: OutlineItem[];
}

export const outline: Outline = {
  public: [
    { anchor: "Home", href: "/", title: "Home" },
    { anchor: "Features", href: "/features", title: "Features" },
    { anchor: "Pricing", href: "/pricing", title: "Pricing" },
    { anchor: "About", href: "/about", title: "About" },
    { anchor: "Contact", href: "/contact", title: "Contact" },
  ],
  private: [
    { anchor: "Dashboard", href: "/dashboard", title: "Dashboard Overview" },
    {
      anchor: "Analytics",
      href: "/dashboard/analytics",
      title: "Performance Analytics",
    },
    {
      anchor: "Reports",
      href: "/dashboard/reports",
      title: "Reports & Insights",
    },
    {
      anchor: "Team",
      href: "/dashboard/team",
      title: "Team Management",
      items: [
        {
          anchor: "Members",
          href: "/dashboard/team/members",
          title: "Team Members",
        },
        {
          anchor: "Schedule",
          href: "/dashboard/team/schedule",
          title: "Schedule",
        },
      ],
    },
    { anchor: "Settings", href: "/dashboard/settings", title: "Settings" },
  ],
};
