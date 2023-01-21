import Mock from "../mock";


const database = {
  information: {
    name: 'Matthew Rhodes',
    aboutContent: "I am a software developer and I'm having a great time learning JavaScript, React, and Ruby among others after switching gears from 3 years in the Medical Field. I previously served 5 years in the submarine force which was the ultimately lesson in dealing with stressful situations. I am looking forward to beginning my career as a software developer with an exciting and innovative company.",
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
    cvfile: '/files/Software Developer Resume.pdf'
  },
  services: [
    {
      title: "UI/UX Design",
      icon: 'react', 
      details: "React, Rails, Ruby on Rails, React in Rails"
    },
    {
      title: "Software Development",
      icon: 'javascript',
      details: " JavaScript (ES6), HTML5/CSS, PostgreSQL, Ruby, JSON, Node.js, Devise, Jest, Rspec "
    },
    {
      title: "Database Management",
      icon: 'database',
      details: "Experience in test-driven development to produce full-stack Ruby on Rails applications with associated databases"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
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
      title: "Pets After Covid",
      subtitle: "This is my first fullstack application created with fellow developer Ari Brashear! The idea behind the application is to help connect animals who were adopted during the pandemic the opportunity to connect and play with other animals in your area. Due to the pandemic, many animals weren't afforded the opportunity to socialize, so we thought this would be a fun way to help the transition for the animal, as well as help the owner make friends! Check out the GitHub link to see the project progress! ",
      imageUrl: "",
      largeImageUrl: [""],
      url: 'https://github.com/learn-academy-2022-foxtrot/cat-tinder-frontend-pets-after-covid'
    },
    {
      id: 2,
      title: "Tic-Tac-Toe",
      subtitle: "This is a web game for two players on one device, taking turns. ",
      imageUrl: "",
      largeImageUrl: [
        "",
        ""
      ],
      url: 'https://github.com/learn-academy-2022-foxtrot/tic-tac-toe-matthew-and-heath'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2022 - Present",
        position: "Full-Stack Developer Student",
        company: "LEARN Academy",
        details: "Completed 480+ hours of direct coding experience in an intensive full stack software development bootcamp. Gained proficiency in building JavaScript, Ruby, and React applications with UI/UX. Practiced test-driven development to produce full-stack Ruby on Rails applications with associated databases."
      },
      {
        id: 2,
        year: "2021 - 2022",
        position: "B2B Support Specialist",
        company: "Carbon Health Technologies, Inc.",
        details: "Engaged in B2B communications and customer relationship management provided support and tracking for COVID-19 cases for partnered employers. Operated in accordance with Federal and State HIPAA and PII Compliance laws and regulations."
      },
      {
        id: 3,
        year: "2013 - 2018",
        position: "Submarine Sonar Technician, Third Class",
        company: "US Navy",
        details: "Implemented and successfully coordinated over 10,000 worker hours of QA level maintenance to ensure no interruption of the submarine’s scheduled operations. Subject Matter Expert for the Sonar System including system architecture and security, server maintenance, and virus scans necessary for successful operation."
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