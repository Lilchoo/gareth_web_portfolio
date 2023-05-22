import {
    mobile,
    backend,
    learner,
    web,
    javascript,
    python,
    java,
    html,
    css,
    reactjs,
    androidstudio,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    firebase,
    aws,
    td,
    yvr,
    rbc,
    wecollaba,
    wecollabw,
    pokedex,
    boids,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Android Studio",
      icon: androidstudio,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud Solution Architect (Capston Project)",
      company_name: "YVR Vancouver Airport",
      icon: yvr,
      iconBg: "#E6DEDD",
      date: "April 2023 - Dec 2023",
      points: [
        "Designed and implemented a robust cloud infrastructure on AWS to facilitate bidirectional communication between buoys deployed throughout YVR airport and the dashboard team.",
        "Configured a scalable database system on AWS to efficiently store and manage data received from the buoys, ensuring availability for future analytics and reporting.",
        "Initiated collaboration with service providers, the dashboard team, the device team, and other stakeholders to formulate solutions, optimizing the performance and security of the cloud-based solution for YVR.",
      ],
    },
    {
      title: "Financial Advisor",
      company_name: "Toronto Dominion Bank",
      icon: td,
      iconBg: "#383E56",
      date: "May 2021 - Jan 2022",
      points: [
        "Proactively guide clients in developing personalized investment strategies, considering their financial goals, risk tolerance, and time horizon.",
        "Offer comprehensive financial planning services, including retirement planning, tax optimization, and estate planning, to help clients achieve long-term financial success.",
        "Provide expert guidance on mortgage options, analyzing financial data, and assisting clients in securing the most favorable mortgage terms and rates.",
        "Foster strong client relationships through regular communication, financial education, and continuous monitoring of investment portfolios and mortgage refinancing opportunities.",
      ],
    },
    {
      title: "Banking Advisor",
      company_name: "Royal Bank of Canada",
      icon: rbc,
      iconBg: "#E6DEDD",
      date: "May 2019 - May 2021",
      points: [
        "Act as a client-focused advisor, providing comprehensive banking solutions and addressing everyday banking, credit, and investment needs..",
        "Utilize expert problem-solving skills to deliver exceptional client experiences, leveraging technology and digital banking platforms.",
        "Proactively engage with clients, uncovering their unique banking requirements, and identifying sales and referral opportunities.",
        "Collaborate with internal partners to maximize business opportunities, while maintaining strong client relationships and driving client satisfaction and loyalty.",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "Achieved 1st place in the YVR Inauguration Hackathon 2023 with \"Crow's Nest\", an AI-based project that effectively addresses real-world challenges at YVR, contributing to their NET ZERO 2030 goal.",
      name: "YVR Airport"
    },
    {
      testimonial:
        "Received an Award from RBC as the Top Sales Performer in East Vancouver, Burnaby & New Westminster Markets for Q3 2020, demonstrating exceptional sales achievements and contributions.",
      name: "Royal Bank of Canada"
    },
  ];
  
  const projects = [
    {
      name: "Pokedex",
      description:
        "Developed a Pokedex utilizing Python, RESTful APIs, and design patterns including Chain of Responsiblity to ensure organized and industry-standard code.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "RESTful-APIs",
          color: "green-text-gradient",
        },
        {
          name: "oop-design-patterns",
          color: "pink-text-gradient",
        },
      ],
      image: pokedex,
      source_code_link: "https://github.com/Lilchoo/pokedex-python",
    },
    {
      name: "weCollab",
      description:
        "Web application that enables users to browse and purchase merchandise and includes features such as user authentication, cart management, and payment processing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: wecollabw,
      source_code_link: "https://github.com/Lilchoo/cloud3962-weCollab",
    },
    {
      name: "weCollab-mobile",
      description:
        "A mobile application of weCollab.",
      tags: [
        {
          name: "androidstudio",
          color: "blue-text-gradient",
        },
        {
          name: "kotlin",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: wecollaba,
      source_code_link: "https://github.com/Lilchoo/weCollab-android",
    },
    {
      name: "Boids",
      description:
        "A Java application inspired by Boids, an artificial life program created by Craig Reynolds in 1986, that simulates the flocking behavior of birds, offering a fascinating glimpse into collective movement patterns.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
      ],
      image: boids,
      source_code_link: "https://github.com/Lilchoo/boids-java",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };