const projects = [
  {
    id: "gym-management-system",
    number: "01",
    title: "Gym Management System",
    category: "Full Stack Web Application",

    overview:
      "A comprehensive gym management platform designed to streamline operations for administrators, trainers and members through a unified digital system.",

    problem:
      "Traditional gym operations often require separate processes for memberships, workout plans, diet plans, subscriptions and progress tracking. The system brings these workflows together into a centralized application.",

    technologies: [
      "React",
      "Vite",
      "Java",
      "Spring Boot",
      "MySQL",
      "Redux Toolkit",
      "Axios",
      "REST APIs",
    ],

    features: [
      "Role-based authentication and protected dashboards",
      "Admin, trainer and member workflows",
      "Member and trainer management",
      "Workout and diet plan management",
      "Subscription and membership management",
      "Progress report tracking",
      "REST API integration",
      "Centralized state management",
    ],

    architecture:
      "React frontend connected to a Spring Boot backend with MySQL persistence and RESTful API communication.",

    github: "https://github.com/Piyush8008",
  },

  {
    id: "crm-mobile-application",
    number: "02",
    title: "CRM Mobile Application",
    category: "Cross-Platform Mobile Application",

    overview:
      "A cross-platform CRM application built to streamline business operations through secure authentication, attendance tracking, leave management and user-focused workflows.",

    problem:
      "Business teams need a convenient way to manage attendance, leave requests and employee information while accessing essential workflows from a mobile device.",

    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "REST APIs",
      "AsyncStorage",
      "React Navigation",
    ],

    features: [
      "Secure authentication flow",
      "Persistent token-based sessions",
      "Clock In / Clock Out functionality",
      "Swipe-based attendance interaction",
      "Leave management",
      "Profile and personal details",
      "Reusable mobile components",
      "API-driven application architecture",
    ],

    architecture:
      "React Native and TypeScript application using modular components, navigation, centralized state management and REST API integration.",

    github: "https://github.com/Piyush8008",
  },
];

export default projects;