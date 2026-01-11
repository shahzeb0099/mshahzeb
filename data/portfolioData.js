// data/portfolioData.js

export const data = {
  name: "Mohammad Shahzeb",
  title: "Frontend Software Engineer",
  bio: "Frontend engineer with 2+ years of experience building scalable, production-grade web applications using React. I focus on clean UI architecture, maintainable state management, and delivering interfaces that are fast, reliable, and easy to use. I have hands-on experience working on admin dashboards, e-commerce platforms, and data-driven applications in real-world business environments.",

  email: "mohammadshazeb0449@gmail.com",
  github: "https://github.com/shahzeb0099",
  linkedin: "https://www.linkedin.com/in/mohammad-shahzeb-888s77/",
  portfolio: "https://mshahzeb.vercel.app/",

  // ABOUT SECTION
  about: {
    headline:
      "Building Scalable Frontend Systems That Solve Real Business Problems",
    text: "I am a frontend developer with over two years of professional experience working on enterprise dashboards, admin panels, and consumer-facing web applications. My strengths lie in building reusable component systems, managing complex application state, and translating business requirements into intuitive user interfaces. I enjoy working closely with designers and backend teams to ship features that are not only visually polished but also performant and maintainable. I am currently looking for frontend roles where I can take ownership of UI modules and contribute to long-term frontend architecture.",
    skills: [
      "React.js",
      "Redux Toolkit",
      "React Hook Form",
      "JavaScript (ES6+)",
      "TypeScript (working knowledge)",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "REST APIs",
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
        "Frontend development for a large-scale fashion e-commerce platform serving customers across the GCC region.",
      detailedDescription: [
        "Worked on product listing (PLP) and product detail pages (PDP) with a strong focus on responsiveness and performance.",
        "Built reusable UI components such as product cards, banners, and category sections aligned with the brand design system.",
        "Ensured consistent behavior and layout across mobile, tablet, and desktop breakpoints.",
      ],
      responsibilities: [
        "Developed reusable React components following a modular component structure.",
        "Implemented responsive layouts using Tailwind CSS.",
        "Collaborated with backend teams to consume APIs and render dynamic product data.",
        "Focused on UI performance and clean component composition.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Axios"],
      liveUrl: "https://www.leem.com",
      githubUrl: "#",
      imageUrl: "/image/leem.png",
    },

    {
      id: 2,
      title: "Yohesa Banking Admin Panel",
      slug: "yohesa-admin",
      description:
        "A comprehensive admin dashboard used for managing users, roles, teams, and financial workflows across multiple banking modules.",
      detailedDescription: [
        "Yohesa is an internal banking software designed to manage day-to-day administrative operations in a centralized system.",
        "The platform supports role-based access control, employee management, credit card application workflows for multiple banks, and insurance-related modules.",
        "The application is built to handle large datasets, complex forms, and frequent data updates in a secure environment.",
      ],
      responsibilities: [
        "Integrated REST APIs for multiple modules including roles, employees, teams, and credit card applications.",
        "Built reusable and scalable UI components using React.js to support long-term feature growth.",
        "Implemented complex forms and validations using React Hook Form.",
        "Managed global and module-level state using Redux Toolkit.",
        "Worked extensively with data tables, filters, pagination, and conditional rendering.",
        "Debugged production issues and optimized UI behavior for better performance and usability.",
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "React Hook Form",
        "Tailwind CSS",
        "Axios",
      ],
      liveUrl: "https://yohesa-test-three.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/yohesa.png",
    },

    {
      id: 3,
      title: "AZOWN Property Platform",
      slug: "azown-property",
      description:
        "A real estate listing platform allowing owners and brokers to manage and publish multiple property types.",
      detailedDescription: [
        "Azown enables users to list, manage, and explore different categories of properties through a clean and responsive interface.",
        "The platform supports authenticated user flows and dynamic property data rendering.",
      ],
      responsibilities: [
        "Developed the frontend using React with a focus on clean UI and usability.",
        "Created reusable components for property listings, forms, and detail views.",
        "Integrated APIs to handle property CRUD operations.",
        "Worked on state management and data rendering logic to ensure smooth user interactions.",
      ],
      technologies: ["React.js", "Context API", "Tailwind CSS"],
      liveUrl: "https://azown.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/azown1.png",
    },

    {
      id: 4,
      title: "Forever Store – MERN E-Commerce",
      slug: "forever-store",
      description:
        "A personal full-stack e-commerce project built to strengthen understanding of end-to-end application flow.",
      detailedDescription: [
        "Implemented user-facing shopping flows including product browsing, filtering, and cart management.",
        "Built an admin interface for managing products and media uploads.",
      ],
      responsibilities: [
        "Developed complete frontend UI using React and Tailwind CSS.",
        "Integrated admin-side product management with backend APIs.",
      ],
      technologies: ["MERN Stack", "Tailwind CSS", "Vercel"],
      liveUrl: "https://foreverfrontend-xi.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/forever.png",
    },
  ],

  // EXPERIENCE SECTION
  experience: [
    {
      company: "Tech Mahindra",
      role: "Software Engineer",
      duration: "Mar 2024 - Present",
      description: [
        "Working on enterprise-grade frontend modules using React with a focus on maintainability and reusability.",
        "Collaborating closely with backend teams to integrate APIs and handle real-world data workflows.",
        "Improving internal dashboards by simplifying UI flows and reducing unnecessary complexity.",
      ],
    },
    {
      company: "AndroCoders",
      role: "Frontend Developer",
      duration: "Mar 2023 - Mar 2024",
      description: [
        "Built responsive user interfaces using Material UI, Chakra UI, and Tailwind CSS.",
        "Developed dynamic and multi-step forms using React Hook Form.",
        "Worked on feature development, bug fixes, and UI improvements across multiple client projects.",
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
