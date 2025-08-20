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
    'Recent B.E. Computer Science graduate (2025) with a solid foundation in Java and web development (HTML, CSS, JavaScript). Passionate about building meaningful applications and eager to apply problem-solving skills in real-world software projects. Seeking an entry-level role to contribute and grow in a dynamic, tech-driven environment.',
  resume: 'https://drive.google.com/file/d/16wGhLJVJJDP1OhKiGPvgZ_aduk9-ZeZX/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/elamaran-r-96b2a5311',
    github: 'https://github.com/ELAMARAN-R',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'To-Do List',
    description:
      "Developed a dynamic To-Do List web application that allows users to add, mark, and delete tasks. Integrated the browsers's local storage to persist tasks even after page reloads. Implemented features like task validation, strike-through functionality, and a delete button using DOM manipulation.",
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    sourceCode: 'https://github.com/ELAMARAN-R/To-Do-List-web-application.git',
    livePreview: ' https://elamaran-r.github.io/To-Do-List-web-application/',
    image: 'To-Do List.png',
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
    name: 'Digital Clock',
    description:
      "Developed a digital clock web application using React.js with real-time updates for hours, minutes, and seconds. Integrated dynamic features to display the current date and day of the week, leveraging React hooks (useState, useEffect). Styled the interface with simple CSS to ensure a clean, responsive, and user-friendly design.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    sourceCode: 'https://github.com/ELAMARAN-R/Digital-Clock.git',
    livePreview: 'https://elamaran-r.github.io/Digital-Clock/',
    image : 'Digital Clock.png',
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
  'C',
  'C++',
  'Python'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'elamaranraju07@gmail.com',
}

export { header, about, projects, skills, contact }
