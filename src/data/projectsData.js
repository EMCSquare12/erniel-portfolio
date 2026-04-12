import {
  IconReactJs,
  IconNodeJs,
  IconMongoDb,
  IconExpressJs,
  IconSocketIO,
  ProjectLiveBingoMainPage,
} from "../assets";

export const techIcons = [
  { src: IconMongoDb, name: "MongoDB" },
  { src: IconExpressJs, name: "Express.js" },
  { src: IconReactJs, name: "React" },
  { src: IconNodeJs, name: "Node.js" },
];

export const liveBingoIcons = [
  { src: IconMongoDb, name: "MongoDB" },
  { src: IconExpressJs, name: "Express.js" },
  { src: IconReactJs, name: "React" },
  { src: IconNodeJs, name: "Node.js" },
  { src: IconSocketIO, name: "Socket.io" },
];

export const proShopClientIcons = [
  { src: IconMongoDb, name: "MongoDB" },
  { src: IconExpressJs, name: "Express.js" },
  { src: IconReactJs, name: "React" },
  { src: IconNodeJs, name: "Node.js" },
];

export const proShopDetails = [
  {
    title: "Modern Tech Marketplace",
    descriptions: [
      "A high-performance e-commerce platform for consumer electronics, combining advanced inventory management with a secure, user-centric shopping experience.",
    ],
  },
  {
    title: "Frontend Technical Highlights",
    descriptions: [
      "Responsive Mobile-First Design: Implemented fluid layouts and media queries to ensure a seamless user experience across all devices, prioritizing performance and readability on mobile screens.",
      "Global State & Data Fetching: Managed complex application states and streamlined asynchronous API interactions using Redux, ensuring a predictable and centralized data flow.",
      "Real-Time Updates: Integrated Socket.IO to provide users with instant, live shipping status notifications without requiring page refreshes.",
      "Performance Optimization: Developed a custom Debounce hook to throttle API requests during search and category filtering, significantly reducing server load and improving UI responsiveness.",
      "Seamless Data Loading: Implemented Infinite Scroll for a modern, fluid browsing experience, eliminating the friction of traditional pagination.",
      "Secure Payment Processing: Integrated the Stripe API to handle sensitive transaction data securely, supporting a robust and reliable checkout workflow.",
      "Flexible Authentication: Built a versatile login system offering both traditional email/password accounts and streamlined Google OAuth for a frictionless user onboarding experience.",
    ],
  },
  {
    title: "Backend Technical Highlights",
    descriptions: [
      "Database Management: Leveraged MongoDB and Mongoose to architect a flexible, schema-based NoSQL data model, ensuring efficient data storage and retrieval.",
      "Secure Authentication: Implemented JSON Web Tokens (JWT) for stateless user authentication, providing a secure method for transmitting verified identity between the client and server.",
      "Role-Based Access Control (RBAC): Established strict Authorization protocols to differentiate between standard clients and administrative users, securing sensitive endpoints and managing user permissions.",
      "RESTful API Development: Engineered a structured and scalable API to facilitate seamless communication between the frontend and the database, following industry-standard design patterns for maintainability.",
    ],
  },
];

export const dataScienceDetails = [
  {
    title: "Technical Highlights & Methodologies",
    descriptions: [
      "Data Preparation: Cleaned and prepared large datasets for analysis using Python and Pandas.",
      "Feature Engineering: Created meaningful feature representations for customer segmentation.",
      "Clustering Algorithms: Applied K-Means clustering techniques to identify distinct customer groups.",
      "Segmentation Analysis: Interpreted cluster profiles to derive actionable insights for targeting.",
    ],
  },
  {
    title: "Tableau dashboard & Visualizations",
    descriptions: [
      "Interactive Visuals: Developed intuitive dashboards and charts to explore segment trends.",
      "Data Storytelling: Built visual narratives to communicate complex data patterns to stakeholders.",
    ],
  },
];

export const modernTechDetails = [
  {
    title: "E-Commerce Admin Management Portal",
    descriptions: [
      "A high-performance e-commerce  management portal for store managers. It features a clean UI/UX for inventory control, business analytics, and secure role-based access control (RBAC) to ensure streamlined, protected operations.",
    ],
  },
  {
    title: "Frontend Technical Highlights",
    descriptions: [
      "Inventory Management (CRUD): Full administrative control to Add, Read, Update, and Delete gadget product listings seamlessly.",
      "Real-Time Analytics Dashboard: A daily performance overview displaying crucial business metrics, including Daily Total Orders, Total Daily Revenue, and Total Daily New Users.",
      "Live Order & Status Notifications: Integrated Socket.io to push real-time alerts to the admin regarding new customer orders and critical item status updates without needing a page refresh.",
      "Optimized Search & Filtering: Utilized debouncing techniques on search inputs to minimize unnecessary API calls, ensuring high performance even with a large product database.",
      "Seamless Media Management: Integrated Cloudinary for highly optimized, reliable product image uploads and hosting.",
    ],
  },
  {
    title: "Backend Technical Highlights",
    descriptions: [
      "Role-Based Security: Implemented strict authentication protocols ensuring only verified administrator accounts can access the dashboard and execute backend operations.",
      "RESTful API Architecture: Designed and deployed a clean, efficient REST API to handle all client-to-server communications, including product CRUD operations and secure data fetching.",
      "Real-Time Event Broadcasting: Configured a Socket.io server to maintain persistent, bidirectional connections with the client, instantly emitting payload data for new orders and inventory updates.",
      "Secure Data Modeling: Utilized MongoDB (with Mongoose) to create well-structured, relational schemas for Users, Products, and Orders, ensuring data integrity and efficient querying.",
      "Third-Party Service Integration: Securely managed API keys and backend logic to route image data to Cloudinary for cloud-based storage, returning optimized image URLs to the database.",
    ],
  },
];

export const galleryItems = [
  {
    title: "Live Bingo",
    tech: "MERN",
    label: "App",
    image: ProjectLiveBingoMainPage,
  },
  {
    title: "HR Data Reporting",
    tech: "Excel/SQL",
    label: "Report",
    image: ProjectLiveBingoMainPage,
  },
  {
    title: "Supply Dashboard",
    tech: "Power BI",
    label: "Dashboard",
    image: ProjectLiveBingoMainPage,
  },
  {
    title: "Web Scraper",
    tech: "Python",
    label: "Scraper",
    image: ProjectLiveBingoMainPage,
  },
];
