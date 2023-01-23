import Mock from "../mock";


const database = {
  information: {
    name: 'Matthew Rhodes',
    aboutContent: "As a Navy Submarine Sonar Technician veteran, I bring a unique combination of technical skills and discipline to my transition into a career in software development. My time in the Navy honed my ability to work under pressure and think critically, while my experience as a sonar technician gave me a strong foundation in electronics and troubleshooting. I am now excited to apply these skills to software development, where I am eager to learn new technologies and techniques to create innovative and efficient solutions. I am confident that my background in the Navy and my passion for technology make me a valuable asset to any team.",
    age: 30,
    phone: '',
    nationality: 'American',
    language: 'English',
    email: 'mrhodes415@gmail.com',
    location: 'San Diego, CA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/rhodesmt/',
      dribbble: '',
      github: 'https://github.com/rhodesmt'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Portfolio-Resume.pdf'
  },
  services: [
    {
      title: "UI/UX Design",
      icon: 'react', 
      details: "Experience in UI/UX design with technologies such as React, React in Rails and HTML5/CSS, including designing and implementing responsive and user-centered interfaces, prototyping and testing with users, and optimizing for accessibility and performance."
    },
    {
      title: "Software Development",
      icon: 'javascript',
      details: " JavaScript (ES6), HTML5/CSS, PostgreSQL, Ruby, JSON, Node.js, Devise, Jest, Rspec "
    },
    {
      title: "Database Management",
      icon: 'database',
      details: "Experience with both relational and non-relational databases, including designing and implementing databases, optimizing performance, troubleshooting and resolving issues, and data migration."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "I’ve had the pleasure of working with Matthew on multiple projects. He is incredibly patient and thorough with problem-solving, and has never shied away from a challenge in our time together. On top of that, his creative writing skills are absolutely phenomenal - he can take even the most mundane concept and turn it into something truly new and exciting. His upbeat personality makes him incredibly easy and fun to work with, and I would happily take on another project with him in the future!",
      author: {
        name: 'Ari Brashear',
        designation: 'Full Stack Developer, XplorSTEM'
      }
    },
    {
      id: 2,
      content: "",
      author: {
        name: '',
        designation: ''
      }
    },
    {
      id: 3,
      content: "",
      author: {
        name: '',
        designation: ''
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "Ruby",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "PostgreSQL",
      value: 65
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "The Gamer Lounge",
      subtitle: "A Full Stack application built by gamers, for gamers. ",
      imageUrl: '/images/gamer-lounge.png',
      largeImageUrl: ["/images/gamer-lounge.png"],
      url: 'https://github.com/rhodesmt/gamer-lounge-app'
    },
    {
      id: 2,
      title: "Wildlife Tracker",
      subtitle: "This is wildlife tracking application that will display animal species information and migratory movements and patterns. My goal is to incorporate an API that will allow the data to be updated automatically and ideally in real time.",
      imageUrl: "/images/wildlife-tracker.jpg",
      largeImageUrl: ["/images/wildlife-tracker.jpg"],
      url: 'https://github.com/rhodesmt/wildlife-tracker-rhodesmt'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2022 - Present",
        position: "Software Developer Intern",
        company: "Victorise",
        details: "Developed, tested and implemented features for web and mobile apps in an Agile environment, utilizing daily SCRUM meetings. Mastered AngularJS, PHP, React Native and NoSQL, specifically MongoDB, and currently learning Python3. Effectively increased the speed, accuracy, and scalability of web and mobile application databases, and improved customer and user experience."
      },
      {
        id: 2,
        year: "2022 - 2023",
        position: "Full-Stack Developer Student",
        company: "LEARN Academy",
        details: "Completed 480+ hours of direct coding experience in an intensive full stack software development bootcamp. Gained proficiency in building JavaScript, Ruby, and React applications with UI/UX. Practiced test-driven development to produce full-stack Ruby on Rails applications with associated databases."
      },
      {
        id: 3,
        year: "2021 - 2022",
        position: "B2B Support Specialist",
        company: "Carbon Health Technologies, Inc.",
        details: "Engaged in B2B communications and customer relationship management provided support and tracking for COVID-19 cases for partnered employers. Operated in accordance with Federal and State HIPAA and PII Compliance laws and regulations."
      },
      {
        id: 4,
        year: "2013 - 2018",
        position: "Submarine Sonar Technician, Third Class",
        company: "US Navy",
        details: "Commissioning crew member of the USS Illinois, responsible for the installation, operation, and maintenance of advanced sonar systems and equipment. Assisted in the development and implementation of new procedures and protocols for the operation and maintenance of sonar systems. Demonstrated a high level of technical expertise and attention to detail, resulting in the successful commissioning of the USS Illinois and its subsequent deployment."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019",
        graduation: "Orange County EMT/National Registy EMT",
        university: "Santiago Canyon College",
        details: "Completed coursework: Intro to Computer Science (C#), Trigonometry/Pre-Calculus, Emergency Medical Technician Certification"
      },
      {
        id: 2,
        year: "2006 - 2010",
        graduation: "High School Diploma",
        university: "El Modena High School",
        details: ""
      },
      
    ]
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});