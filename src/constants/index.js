import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    djangologo,
    tailwind,
    python,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    virtumind,
    django,
    jobit,
    tripguide,
    threejs,
    MoneyMatrix,
    Sapara
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
      title: "Python kiddy",
      icon: mobile,
    },
    {
      title: "React developer",
      icon: backend,
    },
    {
      title: "Cyber Sequrity",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: djangologo,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Vinay proved me wrong.",
      name: "Anita Donta",
      designation: "Mumbai",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    //{/*{
    //  testimonial:
    //    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //  name: "Chris Brown",
    //  designation: "COO",
    //  company: "DEF Corp",
    //  image: "https://randomuser.me/api/portraits/men/5.jpg",
    //},
    //{
    //  testimonial:
    //    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //  name: "Lisa Wang",
    //  designation: "CTO",
    //  company: "456 Enterprises",
    //  image: "https://randomuser.me/api/portraits/women/6.jpg",
    //},*/}
  ];
  
  const projects = [
    {
      name: "Sapara Email",
      description:
        "A completely powered by groq Email Agent, Sapara is known for its research sharing. this email agent generates email response based on real data available on internet. you can even explore example emails generated by other people",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: Sapara,
      source_code_link: "https://github.com/Gluchub/Sapara.git",
    },
    {
      name: "MoneyMatrix",
      description:
        "MoneyMatrix is the online banking platform where you can transfer funds from one bank account to another. it uses various advance softwares like plaid and dwolla to communicate with various banks",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "Sentry",
          color: "orange-text-gradient",
        },
      ],
      image: MoneyMatrix,
      source_code_link: "https://github.com/Gluchub/Banking.git",
    },
    {
      name: "Virtumind",
      description:
        "it is a online discord like app where you can create rooms on a particular topic and add friends and enjoy discussion.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: virtumind,
      source_code_link: "https://github.com/Gluchub/Virtumind.git",
    },
    {
      name: "JWT authentication",
      description:
        "A simple note making website. This website is powered by the jwt authentication process one of the most safest way to store user data ,it creates access and refresh token which a user can you use to communicate with website after getting authenticated.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: django,
      source_code_link: "https://github.com/Gluchub/Django-react-full-stack.git",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };