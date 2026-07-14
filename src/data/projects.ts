import type { Project } from "@/types";

const baseCaseStudy = {
  research: [
    "Conducted 8 user interviews with fellow students about study app frustrations",
    "Analyzed 12 competitor apps across productivity and education categories",
    "Mapped current-state workflows through contextual inquiry sessions",
    "Synthesized findings into affinity diagrams and opportunity areas",
  ],
  competitorAnalysis: [
    {
      name: "Notion",
      strengths: "Flexible workspace, strong brand trust, rich feature set",
      weaknesses: "Steep learning curve, overwhelming for focused study tasks",
    },
    {
      name: "Forest",
      strengths: "Simple focus mechanic, delightful micro-interactions",
      weaknesses: "Limited planning features, no collaborative study tools",
    },
    {
      name: "Todoist",
      strengths: "Clear task hierarchy, natural language input",
      weaknesses: "Generic visual identity, weak motivation for students",
    },
  ],
  personas: [
    {
      name: "Priya",
      role: "3rd Year CSE Student",
      goals: [
        "Track assignments across 6 courses without missing deadlines",
        "Study in focused 45-minute blocks between classes",
        "Collaborate on group projects with clear ownership",
      ],
      frustrations: [
        "Too many disconnected apps for notes, tasks, and schedules",
        "Notification fatigue from generic reminder systems",
        "Hard to visualize weekly workload at a glance",
      ],
    },
    {
      name: "Arjun",
      role: "Final Year Design Student",
      goals: [
        "Balance portfolio work with academic deadlines",
        "Maintain creative momentum during exam seasons",
        "Document design process for case studies",
      ],
      frustrations: [
        "Productivity tools feel corporate, not creative",
        "No visual way to see project progress over time",
        "Context switching breaks deep work flow",
      ],
    },
  ],
  journeyMaps: [
    {
      stage: "Discover",
      actions: ["Opens app after missing a deadline", "Explores onboarding flow"],
      thoughts: "I need something simpler than my current setup",
      emotions: "Frustrated but hopeful",
    },
    {
      stage: "Plan",
      actions: ["Adds weekly tasks", "Sets focus sessions", "Invites group members"],
      thoughts: "This actually reflects how I think about my week",
      emotions: "Relieved, in control",
    },
    {
      stage: "Execute",
      actions: ["Starts focus timer", "Checks off tasks", "Reviews daily summary"],
      thoughts: "Small wins feel visible and motivating",
      emotions: "Focused, accomplished",
    },
    {
      stage: "Reflect",
      actions: ["Views weekly insights", "Adjusts next week's plan"],
      thoughts: "I can see patterns in when I work best",
      emotions: "Confident, self-aware",
    },
  ],
  informationArchitecture: [
    "Home — Daily overview, active focus session, quick actions",
    "Tasks — Course-based organization, priority filters, due dates",
    "Focus — Timer modes, session history, distraction blocking",
    "Groups — Shared boards, member roles, activity feed",
    "Insights — Weekly patterns, completion rates, streak tracking",
    "Profile — Preferences, notification settings, integrations",
  ],
  wireframes: ["/images/case-study/wireframe-1.svg", "/images/case-study/wireframe-2.svg"],
  lowFidelity: ["/images/case-study/lowfi-1.svg", "/images/case-study/lowfi-2.svg"],
  highFidelity: ["/images/case-study/hifi-1.svg", "/images/case-study/hifi-2.svg"],
  designSystem: {
    colors: [
      { name: "Ink", value: "#0A0A0A" },
      { name: "Paper", value: "#FAFAFA" },
      { name: "Mist", value: "#E5E5E5" },
      { name: "Accent", value: "#2563EB" },
    ],
    typography: [
      { name: "Display", value: "Inter Tight — 48/56/64px" },
      { name: "Heading", value: "Inter — 24/32px Semibold" },
      { name: "Body", value: "Inter — 16/24px Regular" },
      { name: "Caption", value: "Inter — 12/16px Medium" },
    ],
    components: [
      "Button variants (primary, secondary, ghost)",
      "Task card with status indicators",
      "Focus timer with circular progress",
      "Navigation bar with active states",
      "Empty states and loading skeletons",
    ],
  },
  prototype: "https://figma.com",
  challenges: [
    "Balancing feature richness with onboarding simplicity for first-time users",
    "Designing focus mode that feels calm without hiding critical notifications",
    "Creating group collaboration that doesn't add cognitive overhead",
  ],
  solution:
    "A progressive disclosure model that surfaces core daily actions first, with advanced planning tools revealed as users build habits. Focus mode uses ambient visual cues instead of harsh lockouts, and group features mirror familiar chat patterns students already use.",
  outcome: [
    "Usability testing with 6 participants showed 40% faster task creation vs. baseline",
    "Onboarding completion rate of 85% in prototype testing",
    "Positive feedback on visual clarity and reduced notification anxiety",
  ],
  reflection:
    "This project taught me to design for behavioral change, not just interface aesthetics. Starting with research grounded every design decision and helped me articulate trade-offs clearly in my portfolio presentation.",
};

export const projects: Project[] = [
  {
    slug: "hp-photography",
    title: "HP Photography",
    subtitle: "Photography Portfolio",
    category: "exploration",
    tags: ["UI Design", "Figma"],
    year: "2024",
    thumbnail: "/images/projects/project1.png",
    color: "#2563EB",
    overview: "A sleek and minimal portfolio to showcase stunning photography collections with high-impact visual design.",
    problem: "Photographers need a lightweight, premium platform to present their high-resolution shots without distracting UI elements.",
    research: [
      "Surveyed professional photographers about existing portfolio platforms",
      "Identified visual clutter as the primary driver of high bounce rates on gallery sites",
      "Benchmarked top photography portfolios for typography and spacing standards"
    ],
    competitorAnalysis: [
      {
        name: "500px",
        strengths: "Large community, discovery algorithms",
        weaknesses: "Cluttered UI, distracting social badges on portfolio views"
      },
      {
        name: "Format",
        strengths: "Portfolio-focused templates",
        weaknesses: "Rigid grid layouts, slow loading high-res images"
      }
    ],
    personas: [
      {
        name: "Harish P.",
        role: "Commercial Photographer",
        goals: ["Present high-res editorial shots in a clean gallery", "Convert visitors into client bookings quickly"],
        frustrations: ["Traditional website builders compress image quality too aggressively", "Complex navigation confusing potential clients"]
      }
    ],
    journeyMaps: [
      {
        stage: "Discovery",
        actions: ["Client opens photography link from Instagram/Email"],
        thoughts: "Let's see if this photographer matches our brand aesthetic",
        emotions: "Curious, visual-first mindset"
      },
      {
        stage: "Engagement",
        actions: ["Browses through full-screen photo series and categories"],
        thoughts: "The lighting and framing here are incredible and load instantly",
        emotions: "Impressed, immersed"
      }
    ],
    informationArchitecture: ["Home Gallery", "Portfolio Categories", "About & Equipment", "Client Bookings & Contact"],
    wireframes: [
      "/images/projects/hp-photography/iphone-16-1.png"
    ],
    lowFidelity: [
      "/images/projects/hp-photography/iphone-16-2.png"
    ],
    highFidelity: [
      "/images/projects/hp-photography/iphone-16-1.png",
      "/images/projects/hp-photography/iphone-16-2.png",
      "/images/projects/hp-photography/iphone-16-3.png"
    ],
    designSystem: {
      colors: [
        { name: "Obsidian Black", value: "#0A0A0A" },
        { name: "Pure White", value: "#FFFFFF" },
        { name: "Neutral Gray", value: "#525252" },
        { name: "Electric Blue", value: "#2563EB" }
      ],
      typography: [
        { name: "Display", value: "Inter Tight — 48/64px Bold" },
        { name: "Body", value: "Inter — 16/24px Regular" }
      ],
      components: [
        "Full-bleed lightbox modal",
        "Masonry image grid with lazy loading",
        "Minimalist fixed navigation header"
      ]
    },
    prototype: "https://www.figma.com/design/0ZfVNDjYSR8TYi4YoUQPDb/Untitled?node-id=0-1&p=f&t=78edbfqAYTegXVWm-0",
    challenges: [
      "Optimizing visual layout for both portrait and landscape photography",
      "Creating seamless transitions between gallery overviews and detailed full-screen shots"
    ],
    solution: "Designed a monochrome, distraction-free interface where the photography takes center stage, complemented by smooth micro-animations and intuitive categorization.",
    outcome: [
      "Delivered a production-ready Figma design system and interactive prototype",
      "Streamlined the client inquiry workflow by integrating contextual booking actions right next to photo galleries"
    ],
    reflection: "Focusing on restraint taught me that exceptional typography and whitespace can elevate visual content more effectively than ornate decoration."
  },
  {
    slug: "scheme-plus",
    title: "Scheme plus",
    subtitle: "Digital Design System",
    category: "academic",
    tags: ["UX Research", "Figma"],
    year: "2025",
    thumbnail: "/images/projects/project2.png",
    color: "#7C3AED",
    overview: "A comprehensive digital design system and dashboard layout tailored for seamless usability and scalable engineering.",
    problem: "Enterprises struggle with inconsistent interface patterns across multiple platforms, slowing down development cycles.",
    research: [
      "Audited over 150 existing UI components across enterprise SaaS applications",
      "Interviewed front-end engineers and product managers regarding component reusability bottlenecks",
      "Mapped out design-to-code handoff friction points"
    ],
    competitorAnalysis: [
      {
        name: "Material Design",
        strengths: "Comprehensive documentation, universal familiarity",
        weaknesses: "Can feel rigid and overly standardized for unique enterprise branding"
      },
      {
        name: "Ant Design",
        strengths: "Data-dense table and form components",
        weaknesses: "Complex customization hierarchy for custom theming"
      }
    ],
    personas: [
      {
        name: "Sarah K.",
        role: "Senior UI/UX Designer",
        goals: ["Assemble complex data dashboards rapidly without rebuilding buttons or modals", "Ensure accessibility standards (WCAG 2.1 AA) across all screens"],
        frustrations: ["Inconsistent spacing and typography tokens across Figma and production code"]
      }
    ],
    journeyMaps: [
      {
        stage: "Adoption",
        actions: ["Designer imports Scheme Plus UI library into Figma"],
        thoughts: "All variants and auto-layout rules are already built-in, this saves hours",
        emotions: "Relieved, empowered"
      }
    ],
    informationArchitecture: ["Foundations (Tokens)", "Core Components", "Complex Data Dashboards", "Interactive Documentation"],
    wireframes: [
      "/images/projects/scheme-plus/splash-screen.png",
      "/images/projects/scheme-plus/onboarding-1.png"
    ],
    lowFidelity: [
      "/images/projects/scheme-plus/dashboard.png",
      "/images/projects/scheme-plus/dashboard-1.png"
    ],
    highFidelity: [
      "/images/projects/scheme-plus/dashboard-2.png",
      "/images/projects/scheme-plus/dashboard-3.png",
      "/images/projects/scheme-plus/dashboard.png",
      "/images/projects/scheme-plus/onboarding-1.png"
    ],
    designSystem: {
      colors: [
        { name: "Deep Purple Accent", value: "#7C3AED" },
        { name: "Slate Dark", value: "#1E293B" },
        { name: "Cloud Surface", value: "#F8FAFC" },
        { name: "Success Mint", value: "#10B981" }
      ],
      typography: [
        { name: "Headings", value: "Plus Jakarta Sans — 24/36px Bold" },
        { name: "UI Text", value: "Inter — 14/20px Medium" }
      ],
      components: [
        "Multi-variant Button & Badge matrices",
        "Advanced data tables with filtering parameters",
        "Modular dashboard stat widgets"
      ]
    },
    prototype: "https://www.figma.com/design/XIAejNycdQTJsxq20kXhLC/Schemeplus?node-id=0-1&p=f&t=WeWdrm0bwGgeZkBN-0",
    challenges: [
      "Designing a component hierarchy that scales gracefully across mobile, tablet, and ultra-wide desktop displays",
      "Maintaining high visual distinction while adhering strictly to AA contrast ratios"
    ],
    solution: "Constructed an atomic design system utilizing Figma auto-layout, nested component variants, and tokenized variables for colors, spacing, and elevation.",
    outcome: [
      "Accelerated mockup creation speed by 60% in standardized design trials",
      "Established unified naming conventions aligned directly with CSS variables"
    ],
    reflection: "Building a design system is an exercise in systems thinking—every minor change to a foundational token cascades across hundreds of screens, requiring meticulous planning."
  },
  {
    slug: "wedease",
    title: "Wedease",
    subtitle: "Wedding Planning Platform",
    category: "personal",
    tags: ["Product Design", "Figma"],
    year: "2025",
    thumbnail: "/images/projects/project3.png",
    color: "#059669",
    overview: "A delightful, end-to-end wedding planning platform designed to alleviate the stress of managing vendors, guests, and venues.",
    problem: "Planning a wedding involves managing multiple disjointed spreadsheets and communication chains, making the experience overwhelming.",
    research: [
      "Interviewed 12 recently married couples about their biggest logistical pain points during wedding preparation",
      "Surveyed wedding planners and vendors regarding budget tracking and communication breakdowns",
      "Analyzed the user flows of leading wedding registry and venue booking applications"
    ],
    competitorAnalysis: [
      {
        name: "The Knot",
        strengths: "Massive vendor directory, all-in-one checklist tools",
        weaknesses: "Overwhelming advertisements, clunky mobile navigation for budget splits"
      },
      {
        name: "Zola",
        strengths: "Seamless registry integration and custom invites",
        weaknesses: "Limited customization for bespoke Indian and multi-day wedding celebrations"
      }
    ],
    personas: [
      {
        name: "Ananya & Rohit",
        role: "Engaged Couple Planning Multi-Day Wedding",
        goals: ["Easily compare and book verified caterers, makeup artists, and venues all in one dashboard", "Keep track of guest invitations and RSVPs across different ceremonies"],
        frustrations: ["Vendor pricing is often hidden or unclear without endless phone calls", "Managing 300+ guests via WhatsApp spreadsheets causes chaos"]
      }
    ],
    journeyMaps: [
      {
        stage: "Discovery & Vendor Exploration",
        actions: ["Filters venues and packages by budget and guest count on Wedease"],
        thoughts: "Finally, upfront pricing packages with verified reviews and transparent inclusions",
        emotions: "Excited, relieved"
      },
      {
        stage: "Booking & Coordination",
        actions: ["Reviews catering packages and sends customized digital e-invites directly from the app"],
        thoughts: "Managing both decor teams and guest RSVPs in one place makes planning enjoyable",
        emotions: "Organized, stress-free"
      }
    ],
    informationArchitecture: [
      "Explore — Venues, Catering, Makeup & Photography Packages",
      "Vendors — Detailed Profiles, Portfolios & Direct Booking",
      "E-Invites — Customizable Digital Wedding Invitations & RSVPs",
      "Checklist & Budget — Milestone Tracking & Expense Management"
    ],
    wireframes: [
      "/images/projects/wedease/home-vendors-packages.png",
      "/images/projects/wedease/venues.png"
    ],
    lowFidelity: [
      "/images/projects/wedease/catering.png",
      "/images/projects/wedease/decor.png"
    ],
    highFidelity: [
      "/images/projects/wedease/photography.png",
      "/images/projects/wedease/makeup.png",
      "/images/projects/wedease/e-invites.png"
    ],
    designSystem: {
      colors: [
        { name: "Emerald Luxe", value: "#059669" },
        { name: "Warm Ivory", value: "#FDFBF7" },
        { name: "Charcoal Deep", value: "#1C1917" },
        { name: "Soft Gold Accent", value: "#D97706" }
      ],
      typography: [
        { name: "Editorial Display", value: "Outfit — 40/50px Medium" },
        { name: "Body & UI", value: "Inter — 15/24px Regular" }
      ],
      components: [
        "Vendor package comparison cards with upfront pricing pricing breakdown",
        "Interactive digital invitation builder and guest RSVP status tracker",
        "Visual category filter pills with smooth state animations"
      ]
    },
    prototype: "https://www.figma.com/design/SkRSWrYq3KTQ6fD1xCgRUt/Untitled?t=WeWdrm0bwGgeZkBN-0",
    challenges: [
      "Presenting comprehensive vendor package details (catering menus, decor themes, photography coverage) without overwhelming the user on mobile screens",
      "Designing an inviting, emotionally resonant visual aesthetic while maintaining robust functional utilities like budget calculators"
    ],
    solution: "Created an intuitive, visual-heavy interface with structured package cards, upfront pricing transparency, and dedicated workflows for venues, catering, makeup, photography, and e-invites.",
    outcome: [
      "User testing with engaged couples resulted in a 4.8/5 satisfaction rating for ease of vendor discovery and comparison",
      "Complete interactive prototype with modular screens ready for full-stack engineering handoff"
    ],
    reflection: "Designing Wedease highlighted the importance of blending emotional design aesthetics with practical logistical tools—when users are celebrating life milestones, their software should spark joy rather than stress."
  },
  {
    slug: "million-minds",
    title: "Million Minds",
    subtitle: "Educational Tech Hub",
    category: "exploration",
    tags: ["UI/UX Design", "Figma"],
    year: "2024",
    thumbnail: "/images/projects/project4.png",
    color: "#DC2626",
    overview: "An engaging platform for educational resources, designed to connect learners with high-quality content intuitively.",
    problem: "Learners face cognitive overload when navigating through dense educational content hubs lacking clear information architecture.",
    research: [
      "Conducted usability walkthroughs of major e-learning platforms with university students and self-taught developers",
      "Analyzed completion rates and drop-off triggers during lengthy online lecture sequences",
      "Investigated how visual progress tracking impacts long-term student retention and motivation"
    ],
    competitorAnalysis: [
      {
        name: "Coursera",
        strengths: "Academic rigor and university certifications",
        weaknesses: "Dense navigation and cluttered course discovery feeds"
      },
      {
        name: "Udemy",
        strengths: "Vast catalog of diverse technical courses",
        weaknesses: "Inconsistent course detail layouts and overwhelming discount pop-ups"
      }
    ],
    personas: [
      {
        name: "David M.",
        role: "Aspiring Full-Stack Developer",
        goals: ["Find structured, high-quality technical courses with clear syllabus modules", "Track daily learning streaks across multiple sub-topics effortlessly"],
        frustrations: ["Difficulty comparing what is actually taught inside dense course overview pages"]
      }
    ],
    journeyMaps: [
      {
        stage: "Course Evaluation",
        actions: ["Lands on Million Minds Course Details page after searching for UI/UX & Web Development"],
        thoughts: "The syllabus modules, instructor credentials, and preview lessons are laid out clearly with zero fluff",
        emotions: "Confident, ready to enroll"
      }
    ],
    informationArchitecture: [
      "Dashboard — Active Learning Paths, Streaks & Recommendations",
      "Course Details — Comprehensive Syllabus, Reviews & Instructor Profiles",
      "Interactive Classroom — Video Player, Side-by-Side Notes & Quizzes",
      "Community Hub — Peer Discussions & Resource Sharing"
    ],
    wireframes: [
      "/images/projects/million-minds/course-details-page.png"
    ],
    lowFidelity: [
      "/images/projects/million-minds/screen-1.png"
    ],
    highFidelity: [
      "/images/projects/million-minds/course-details-page.png",
      "/images/projects/million-minds/screen-1.png"
    ],
    designSystem: {
      colors: [
        { name: "Crimson Red Accent", value: "#DC2626" },
        { name: "Dark Midnight", value: "#0F172A" },
        { name: "Pure White Card", value: "#FFFFFF" },
        { name: "Neutral Border", value: "#E2E8F0" }
      ],
      typography: [
        { name: "Headings", value: "Inter Tight — 32/40px Bold" },
        { name: "Body", value: "Inter — 16/24px Regular" }
      ],
      components: [
        "Course details accordion structure with instant syllabus previewing",
        "Progress tracking badge ring with dynamic completion percentages",
        "Clean instructor bio and student rating breakdown widget"
      ]
    },
    prototype: "https://www.figma.com/design/vAI7lCmk5HlFrIPbNj94J9/Millions-Minds?node-id=0-1&p=f&t=QakGFN4wRMAExjdY-0",
    challenges: [
      "Structuring high-density syllabus information without making the course detail page feel intimidating or endless",
      "Creating clear visual distinctions between completed lessons, active modules, and locked upcoming topics"
    ],
    solution: "Designed a clean, modern educational dashboard and course details interface with collapsible syllabus modules, prominent enrollment CTAs, and frictionless navigation.",
    outcome: [
      "Streamlined course discovery and evaluation time by over 45% in prototype usability evaluations",
      "Achieved a clean, highly scannable visual layout that received enthusiastic praise from peer design critiques"
    ],
    reflection: "Educational software has a profound impact on user empowerment—when interfaces remove friction between a student and learning material, engagement naturally increases."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 4): Project[] {
  return projects.slice(0, count);
}
