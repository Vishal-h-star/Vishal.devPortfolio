
export const frontendProjects = [
  {
    title: "Multilingual Job Listings",
    label: "Frontend",
    status: "active",
    desc:
      "Job listing platform supporting multiple languages with proper RTL and LTR layout handling.",
    problem:
      "Handling multiple languages while keeping layout, spacing, and UI consistent across RTL and LTR directions.",
    approach:
      "Used i18next for translations and applied conditional layout logic to switch between RTL and LTR while keeping components reusable.",
    learnings:
      "Gained practical experience with internationalization, RTL layouts, and language-driven UI decisions.",
    tech: "React · Tailwind CSS · i18next",
    liveLink: "https://multilingual-job-listings.vercel.app/",
    repoLink: "https://github.com/Vishal-h-star/multilingual-job-listings",
  },
  {
    title: "Vishal.dev Portfolio",
    label: "Frontend",
    status: "active",
    desc:
      "Personal portfolio focused on clean UI, recruiter/developer modes, and explaining problem-solving approach.",
    problem:
      "Standing out from generic portfolios while clearly communicating skills to both recruiters and developers.",
    approach:
      "Designed a mode-based UI, editorial layout, and reusable components with clean animations and structure.",
    learnings:
      "Learned how to design content-driven UI and structure a portfolio as a product rather than a showcase.",
    tech: "React · Tailwind CSS · Framer Motion · Vite",
    liveLink: "https://vishal-dev-portfolio-psi.vercel.app/",
    repoLink: "https://github.com/Vishal-h-star/Vishal.devPortfolio",
  },
  {
    title: "Indian e-Visa Portal",
    label: "Client Project",
    status: "active",
    desc:
      "Responsive visa application portal built for a real client with a strong focus on usability and mobile experience.",
    problem:
      "Designing a user-friendly interface for visa applications that works smoothly across devices.",
    approach:
      "Built a responsive React UI with SCSS, focused on clear form flow and mobile-first layouts.",
    learnings:
      "Improved understanding of real-world client requirements, usability concerns, and production deployment.",
    tech: "React · SCSS · Responsive Design · Netlify",
    liveLink: "https://indiansvisaonline.com/",
    repoLink: null, // client project
  },
  {
    title: "Unicurr (Real Estate UI)",
    label: "Client Project",
    status: "active",
    desc:
      "Frontend interface for a real estate platform with smooth navigation and responsive layouts.",
    problem:
      "Improving navigation clarity and usability for browsing property listings.",
    approach:
      "Implemented clean routing, smooth scrolling, and responsive UI using React and Tailwind CSS.",
    learnings:
      "Strengthened skills in UI flow, routing, and building interactive frontend experiences.",
    tech: "React · Tailwind CSS · React Router · React Slick",
    liveLink: "https://realstate-pied-nine.vercel.app/",
    repoLink: null, // client project
  },
];


export const backendProjects = [
  {
    title: "Fitness Buddy",
    label: "Backend",
    status: "active",
    desc:
      "MERN application with authentication, JWT-based login, and workout tracking features.",
    problem:
      "Building a secure backend to manage users and workout data with proper authentication.",
    approach:
      "Created REST APIs using Express, implemented JWT authentication, and structured backend using MVC.",
    learnings:
      "Gained hands-on experience with auth flows, protected routes, and API design.",
    tech: "React.js · Node.js · Express · MongoDB · JWT · REST API",
    liveLink: "https://workout-app-frontend-blush.vercel.app/",
    repoLink: {
      frontend: "https://github.com/Vishal-h-star/WorkoutApp-frontend",
      backend: "https://github.com/Vishal-h-star/WokoutApp-Backend",
    },
  },
  {
    title: "Library Management System",
    label: "Backend",
    status: "active",
    desc:
      "Backend system for managing books, users, and roles with REST APIs.",
    problem:
      "Designing a structured backend to handle CRUD operations and data validation.",
    approach:
      "Used Express with MongoDB and Mongoose, applied MVC structure and centralized error handling.",
    learnings:
      "Improved understanding of backend structure, validation, and maintainable API design.",
    tech: "Node.js · Express · MongoDB · Mongoose",
    liveLink: null,
    repoLink: "https://github.com/Vishal-h-star/Library-managment-system",
  },
];

// ================= UPCOMING PROJECTS =================

export const upcomingProjects = [
  {
    title: "Visitor Management App",
    label: "In Progress",
    status: "in-progress",
    desc:
      "Role-based visitor management system currently under development.",
    problem:
      "Managing visitor flow with role-based access and secure authentication.",
    approach:
      "Designing backend structure and frontend flows incrementally with authentication and role separation.",
    learnings:
      "Learning how to design scalable systems step by step before full implementation.",
    tech: "React · Node.js · MongoDB",
    liveLink: null,
    repoLink: null,
  },
];
