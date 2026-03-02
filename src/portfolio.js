const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'ER.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'ELAMARAN R',
  role: 'Full Stack Developer',
  picture: 'Elamaran.png',

  description:
    'B.E. Computer Science graduate (2025) with a solid foundation in Java and web development (HTML, CSS, JavaScript). Passionate about building meaningful applications and eager to apply problem-solving skills in real-world software projects. Seeking an entry-level role to contribute and grow in a dynamic, tech-driven environment.',
  resume: 'https://drive.google.com/file/d/1PrE7934RkN4sBmyKhfziNN7oNXHF8Mw9/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/elamaran-r-96b2a5311',
    github: 'https://github.com/ELAMARAN-R',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Employee Management REST API',
    description:
      "Developed a production-style REST API using Spring Boot and MySQL following a layered architecture (Controller–Service–Repository). Implemented full CRUD operations with the DTO pattern, validation, global exception handling, and proper RESTful HTTP status codes. Integrated pagination and sorting using Spring Data JPA and tested all endpoints using Postman.",
    stack: ['Java', 'Spring Boot', 'MySQL'],
    sourceCode: 'https://github.com/ELAMARAN-R/employee-management',
    livePreview: 'https://www.linkedin.com/posts/elamaran-r-96b2a5311_springboot-java-backenddevelopment-ugcPost-7431413137763110913-X1hJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8-OSMBCWqFuEGef03g3o-RM56LnOw8acU',
    image: 'Emp_Management.png',
  },
  {
    name: 'ATM Management System',
    description:
      "Developed an ATM Management System enabling users to create accounts, log in securely, deposit, withdraw, and check balances. Implemented layered architecture with Controller, Service, and Repository for clean code separation. Integrated MySQL for persistent data storage and tested APIs using Postman.",
    stack: ['Java', 'Spring Boot', 'MySQL', 'Postman'],
    sourceCode: 'https://github.com/ELAMARAN-R/Atm-Management-System.git',
    livePreview: 'https://www.linkedin.com/posts/elamaran-r-96b2a5311_java-springboot-fullstackdeveloper-activity-7363573539511099393-rb69?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8-OSMBCWqFuEGef03g3o-RM56LnOw8acU',
    image: 'ATM.png',
  },
  {
    name: 'Library Management System',
    description:
      "Developed a RESTful Library Management System using Spring Boot that allows users to perform CRUD operations-Create, Read, Update, and Delete books. The project implements a service layer to separate business logic from controllers and includes exception handling for scenarios such as accessing non-existent books. Built with Spring Data JPA and MySQL/H2, it demonstrates proficiency in API design, database integration, and structured backend development.",
    stack: ['Java', 'Spring Boot', 'MySQL', 'Postman'],
    sourceCode: 'https://github.com/ELAMARAN-R/Library-Management-System',
    image : 'Lib_Management.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Java',
  'Spring Boot',
  'MySQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'elamaranraju07@gmail.com',
}

export { header, about, projects, skills, contact }
