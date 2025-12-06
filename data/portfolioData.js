// data/portfolioData.js

export const data = {
  name: "Mohammad Shahzeb",
  title: "Frontend Developer",
  bio: "I build clean, high-performance web applications using React, modern JavaScript, and scalable UI architectures. My focus is on delivering seamless, user-centric experiences backed by efficient state management and reliable API integrations.",

  email: "mohammadshazeb0449@gmail.com",
  github: "https://github.com/shahzeb0099",
  linkedin: "https://www.linkedin.com/in/mohammad-shahzeb-888s77/",
  portfolio: "https://mshahzeb.vercel.app/",

  // ABOUT SECTION
  about: {
    headline: "Turning Complex UI Challenges Into Seamless User Experiences.",
    text: "With 2+ years of experience in frontend engineering, I specialize in building scalable React applications, admin dashboards, and complete e-commerce interfaces. I excel in component-driven architecture, clean state management, and delivering performant UIs that simplify workflows. I’m currently seeking opportunities where I can contribute to frontend architecture, collaborate with strong engineering teams, and build high-impact user interfaces.",
    skills: [
      "React.js",
      "Redux Toolkit",
      "React Hook Form",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "Git & GitHub",
      "Postman",
    ],
  },

  // PROJECTS SECTION
  projects: [
    {
      id: 1,
      title: "Leem E-Commerce UI",
      slug: "leem-ecommerce",
      description:
        "Developed responsive PLP/PDP pages and reusable UI components for Leem, a leading GCC fashion e-commerce brand.",
      detailedDescription: [
        "Built a fully responsive product listing and detail interface using React.js with reusable component structures.",
        "Implemented clean UI blocks (banners, cards, categories) optimized for performance across mobile and desktop.",
      ],
      responsibilities: [
        "Developed modular UI components aligned with design system.",
        "Ensured responsive and accessible layouts for all breakpoints.",
        "Collaborated with designers and backend team for accurate data rendering.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Axios"],
      liveUrl: "https://www.leem.com",
      githubUrl: "#",
      imageUrl: "/image/leem.png",
    },

    {
      id: 2,
      title: "Yohesa Admin Panel",
      slug: "yohesa-admin",
      description:
        "A full-featured admin dashboard for managing leads, roles, users, and credit card workflows.",
      detailedDescription: [
        "Built complex dashboards with filtering, inline editing, CSV export, and role-based views.",
        "Integrated backend APIs with reliable state flow using Redux Toolkit.",
      ],
      responsibilities: [
        "Developed key dashboard modules and dynamic form workflows.",
        "Implemented role-based routing and secure access control.",
        "Integrated AWS S3 for file/image uploads.",
      ],
      technologies: ["MERN", "Redux Toolkit", "AWS S3", "Tailwind CSS"],
      liveUrl: "https://yohesa.in/public/",
      githubUrl: "#",
      imageUrl: "/image/yohesa.png",
    },

    {
      id: 3,
      title: "AZOWN Property Platform",
      slug: "azown-property",
      description:
        "A multi-category property listing platform with user roles, authentication, and responsive UI.",
      detailedDescription: [
        "Developed a responsive multi-role property listing UI using MERN stack.",
        "Used Context API for authentication and multi-step form persistence.",
      ],
      responsibilities: [
        "Built core UI flows including listing, details, and category views.",
        "Implemented state handling for multi-step property forms.",
      ],
      technologies: ["MERN", "Context API", "Tailwind CSS"],
      liveUrl: "https://azown.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/azown1.png",
    },

    {
      id: 4,
      title: "Forever Store E-Commerce",
      slug: "forever-store",
      description:
        "A personal MERN e-commerce project featuring product pages, cart system, and admin product management.",
      detailedDescription: [
        "Designed a clean shopping UI with category navigation, product filtering, and cart flow.",
        "Implemented admin panel for product creation, editing, and media uploads.",
      ],
      responsibilities: [
        "Built full frontend pages for user shopping flows.",
        "Integrated admin product CRUD with secure API calls.",
      ],
      technologies: ["MERN", "Tailwind CSS", "Vercel"],
      liveUrl: "https://foreverfrontend-xi.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/forever.png",
    },
  ],

  // EXPERIENCE SECTION
  experience: [
    {
      company: "Tech Mahindra",
      role: "Associate Software Engineer",
      duration: "Mar 2024 - Present",
      description: [
        "Developed and maintained UI modules and internal tools using React.js with reusable component architectures.",
        "Improved API data workflows by collaborating with backend teams and optimizing integrations.",
        "Enhanced internal dashboards by simplifying user interactions and reducing UI complexity.",
      ],
    },
    {
      company: "AndroCoders",
      role: "Frontend Developer (React.js)",
      duration: "Mar 2023 - Mar 2024",
      description: [
        "Developed responsive interfaces using Material UI, Chakra UI, and Tailwind CSS for multiple client applications.",
        "Built dynamic form flows and multi-step modules using React Hook Form.",
        "Assisted with feature development, debugging, and UI enhancement under tight deadlines.",
      ],
    },
  ],

  // EDUCATION SECTION
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Allenhouse Institute of Technology, Kanpur",
      duration: "2019 - 2023",
      gpa: "7.6 / 10",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "S.F.I. College, Kanpur",
      duration: "2016 - 2018",
      gpa: "7.5 / 10",
    },
  ],
};
