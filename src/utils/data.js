import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import newImg from '../assets/blog2.png';
import CrudImage from '../assets/crud.png';
import CvImage from '../assets/cv1.png';
import SDLC from '../assets/devops.png';
import HeroImage from '../assets/hero.jpg';
import HomeImage from '../assets/home.jpg';
import LogImage from '../assets/login.png';
import PetImage from '../assets/petclinic.png';
import PosImage from '../assets/pos.png';
import ProtImage from '../assets/protfolio.png';
import QrImage from '../assets/qr22.png';
import QuoteImage from '../assets/quote.png';
import DeshImage from "../assets/d1.png"
import ExpanceImage from "../assets/e1.png"

import cv from '../components/pdf/cv.pdf';

const meta = {
  title: 'srrobin',
  description: 'frontend software developer',
};
const homePage = {
  image_url: HomeImage,
};
const heroSection = {
  greetingText: "Hey you, I'm",
  nameText: 'sayam rahman robin',
  image_url: HeroImage,
};
const hiddenText = {
  lockText: 'Every soul shall taste death  al—Quran 3:185',
};
const aboutSection = {
  title: 'ABOUT ME',
  sub: 'abt',
  link: 'not yeat',
  desc: 'I AM  A SELF  👩‍💻 TAUGHT CREATIVE FRONT ⥊ END DEVELOPER AND WEB DESIGNER BASED IN DHAKA, BANGLADESH . I ESPECIALLY LIKE TO WORK ON THE FRONT END OF SOFTWARE. AS A FRONT ⥊ END DEVELOPER AND WEB DESIGNER, HELPING STARTUPS GAIN THEIR UNFAIR ADVANTAGE. ALTHOUGH I MAJORED IN MATH, I LOVE CODING. WHEN I‵M  NOT DEVELOPING OR DESIGNING, I ENJOY STUDYING OR TRAVELING AROUND THE VARIOUS RURAL AREAS OF BANGLADESH.',
};
const educationSection = {
  title: 'MY EDUCATION',
  sub: 'edu',
  link: cv,
  desc: 'I AM A GRADUATE OF✏️ DHAKA COLLEGE AT NATIONAL UNIVERSITY, WHERE I EARNED B.SC. IN 🍀 MATHEMATICS.',
};
const experienceSection = {
  title: 'MY EXPERIENCE',
  sub: 'xp',
  link: cv,
  desc: [
    {
      inst_name: 'HYPERTAG SOLUTION LTD, BANGLADESH',
      inst_desc:
        '🢅 I WORKED FOR 1 ➕ YEARS AS INTERN PLUS JUNIOR FRONT END DEVELOPER AT',
    },
    {
      inst_name: 'CREATIVE IT SOFT LTD, BANGLADESH',
      inst_desc:
        '🢅 AFTER THAT I WORKED AS FRONT END SOFTWARE DEVELOPER FOR 2 YEARS ✌ AT',
    },
    {
      inst_name: '',
      inst_desc:
        '🢅 IN BETWEEN, I WORKED AS A DIRECTOR OF A COACHING CENTER FOR 3 YEARS AND WORKED FOR SOME LOCAL CLIENTS AS A WEB DESIGNER .',
    },
  ],
};

const expertisesSection = {
  title: 'MY EXPERTISES',
  sub: 'exp',
  link: 'not yeat',
  desc: 'not yeat',
  full_expart: [
    {
      title: 'WEB DEVELOPMENT',
    },
    {
      title: 'SOFTWARE DEVELOPMENT',
    },
    {
      title: 'WEB DESIGN',
    },
  ],
};

const toolSection = {
  title: 'MY DEGITAL TOOL BOX',
  sub: 'tool',
  link: 'not yeat',
  desc: 'not yeat',
  full_expart: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'SASS'],
  mid_expart: ['REDUX', 'NEXTJS', 'TAILWIND CSS'],
  low_expart: ['python', 'DRF', 'MONGODB'],
};

const staticDemo = [
  {
    project_title: 'Petclinic',
    project_desc:
      'PetClinic: Manage pet records, consultations, and shop supplies online with React.js.',
    live_demo_link: 'https://petclinics.netlify.app',
    github_link: 'https://github.com/srrobin/petclinic',
    project_image: PetImage,
    tech: ['reactjs', 'sass', 'ant-design'],
  },
  {
    project_title: 'POS System',
    project_desc:
      'POS system in React.js for customer, product, order management, and payment processing',
    live_demo_link: 'https://pos-systems.netlify.app/',
    github_link: 'https://github.com/srrobin/pos-system.git',
    project_image: PosImage,
    tech: ['reactjs', 'ant-design', 'scss', 'tanstack-query'],
  },
];

const demoSection = [
  {
    id: 1,
    project_title: 'Petclinic',
    project_desc:
      'Manage pet records, consultations, and shop supplies online with React.js.',
    live_demo_link: 'https://petclinics.netlify.app',
    github_link: 'https://github.com/srrobin/petclinic',
    project_image: PetImage,
    tech: ['reactjs', 'sass', 'ant-design'],
    order: 1,
    type: 1,
  },
  {
    id: 2,
    project_title: 'POS System',
    project_desc:
      'POS system in React.js for customer, product, order management, and payment processing',
    live_demo_link: 'https://pos-systems.netlify.app',
    github_link: 'https://github.com/srrobin/pos-system.git',
    project_image: PosImage,
    tech: ['reactjs', 'ant-design', 'scss', 'tanstack-query'],
    order: 1,
    type: 2,
  },
  {
    id: 3,
    project_title: 'Login page',
    project_desc:
      'A simple, responsive, and user-friendly login interface using CSS modules.',
    live_demo_link: 'https://demo-react-login.netlify.app',
    github_link: 'https://github.com/srrobin/demo-react-login-design',
    project_image: LogImage,
    tech: ['reactjs', 'cssmodule', 'responsive'],
    order: 1,
    type: 2,
  },
  {
    id: 5,
    project_title: 'demo-crud',
    project_desc:
      'The project is a React CRUD app for managing product data',
    live_demo_link: 'https://demo-crud.netlify.app/',
    github_link: 'https://github.com/srrobin/e-crud',
    project_image: CrudImage,
    tech: ['reactjs', 'react-bootstra', 'i18next', 'tanstack-query'],
    order: 2,
    type: 1,
  },
  {
    id: 4,
    project_title: 'protfolio@2024',
    project_desc:
      'Modern portfolio website in React.js showcasing projects, skills, and experience interactively.',
    live_demo_link: 'https://srrobin.vercel.app',
    github_link: 'https://github.com/srrobin/react-protfolio',
    project_image: ProtImage,
    tech: ['reactjs', 'scss', 'framer-motion'],
    order: 2,
    type: 1,
  },
  {
    id: 6,
    project_title: 'ant design deshboard',
    project_desc:
      'Hotel front desk dashboard in React for bookings, room status, and operations management',
    live_demo_link: 'https://ant-deshboard.vercel.app',
    github_link: 'https://github.com/srrobin/ant-deshboard',
    project_image: DeshImage,
    tech: ['reactjs', 'scss', 'ant-dsign'],
    order: 2,
    type: 2,
  },
  {
    id: 7,
    project_title: 'Expense Tracker',
    project_desc:
      'Track income, expenses, and view current balance easily.',
    live_demo_link: 'https://expenses-tracker07.vercel.app',
    github_link: 'https://github.com/srrobin/redux-expense-tracker',
    project_image: ExpanceImage,
    tech: ['reactjs', 'react-bootstra', 'redux'],
    order: 2,
    type: 2,
  },
];

const footerSection = {
  fist_col_quote:
    'I Feel Very Honored That The Hawaiian Spirits Chose To Contact Me.',
  fist_col_quoteImage: QuoteImage,
  fist_col_cvImage: CvImage,
  second_col_number: '+880 1302 700 760',
  second_col_email: 'srrobin07@gmail.com',
  second_col_skype: 'srrobin07',
  third_col_cvlink: cv,
  third_col_qr: QrImage,
  fourth_col: [
    {
      title: 'WhatsApp',
      icon: <IoLogoWhatsapp style={{ color: '#3FE05C' }} />,
      link: 'https://wa.me/01302700760',
    },
    {
      title: 'facebook',
      icon: <FaFacebook style={{ color: '#1469C7' }} />,
      link: 'https://www.facebook.com/srrobin07/',
    },
    {
      title: 'Linkedin',
      icon: <FaLinkedin style={{ color: '#0981BF' }} />,
      link: 'https://www.linkedin.com/in/srrobin/',
    },
    {
      title: 'github',
      icon: <FaGithub style={{ color: '' }} />,
      link: 'https://github.com/srrobin',
    },
  ],
};

const ideasSection = [
  {
    title: 'SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)',
    ideaImage: SDLC,
    createDate: '1 MAY, 2024',
    subTitle: '',
    desc: 'THE SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) CREATES AN ENVIRONMENT WHERE BUSINESSES AND IT DEPARTMENTS CAN COLLABORATE TO PRODUCE HIGH-QUALITY SOFTWARE. THE SYSTEMATIC APPROACH TO PLANNING, DESIGNING, TESTING, AND DEPLOYING SOFTWARE PRODUCTS MAKES SDLC AN INDISPENSABLE PART OF SUCCESSFUL SOFTWARE PROJECTS. THE SDLC EVOLVES WITH TECHNOLOGY. IN THIS ARTICLE, WE’LL LOOK AT THE STATE OF THE SOFTWARE DEVELOPMENT LIFE CYCLE IN 2024 AND CONSIDER HOW ITS PRINCIPLES CAN BE USED TO CREATE MORE EFFICIENT SOFTWARE PRODUCTS. THE SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) IS A SET OF STAGES, ACTIVITIES, AND TASKS THAT SOFTWARE PROJECTS GO THROUGH. THE PROCESS OUTLINES HOW SOFTWARE DEVELOPMENT TEAMS BUILD, TEST, DEPLOY, AND MAINTAIN THEIR SOFTWARE TO ACHIEVE TOP QUALITY ON TIME AND WITHIN BUDGET. SDLC BEGINS WITH THE PLANNING PHASE, WHERE THE DEVELOPMENT TEAM DEFINES AND ANALYZES THE PROJECT REQUIREMENTS, GOALS, AND TIMELINE. AFTER THE PLANNING PHASE, THE TEAM CREATES THE PROTOTYPE BY DESIGNING, BUILDING, AND INTEGRATING DIFFERENT COMPONENTS. NEXT, THE DEVELOPERS EVALUATE THE PROJECT, INVESTIGATE ANY REPORTED ISSUES, AND FIX BUGS TO ENSURE THE SOFTWARE WORKS EFFICIENTLY BEFORE THE OFFICIAL LAUNCH. WHILE THE GOAL IS TO ENSURE A QUALITY AND TIMELY DEVELOPMENT PROCESS, THE DEVELOPMENT CYCLE ALSO INVOLVES ROUTINE MAINTENANCE TO ENSURE THE SOFTWARE REMAINS RUNNING WITHOUT HITCHES. WHEN IMPLEMENTED CORRECTLY, THESE CORE SDLC ACTIVITIES PROVIDE SEVERAL BENEFITS. THE FOLLOWING SECTIONS WILL DIVE MORE DEEPLY INTO THE IMPORTANCE OF SDLC TO BUSINESSES AND DEVELOPMENT TEAMS.',
  },
  {
    title: 'new title  LIFE CYCLE (SDLC)',
    ideaImage: newImg,
    createDate: '13 MAY, 2024',
    subTitle: '',
    desc: 'lorem200Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus dolorum repellendus vel unde, vitae nesciunt accusamus repellat non repudiandae error itaque eos ipsam voluptatem sed adipisci animi odit hic corrupti. Obcaecati, consequatur. Illo dignissimos facere autem unde, hic cupiditate eius voluptas, officiis ipsa, numquam beatae consequuntur nam earum ab! Quidem iste nesciunt consectetur aperiam voluptatibus, id aliquam culpa explicabo rerum itaque modi fugit tempore iusto inventore earum numquam illo eligendi ad atque? Perferendis fuga, unde eligendi amet laudantium qui, autem aperiam suscipit assumenda commodi ea neque sit adipisci vitae itaque eum eius repellendus facere. Laboriosam doloribus odio quasi, soluta provident alias delectus a, aliquam deleniti voluptatum temporibus illo eaque, neque odit iure aut numquam! Itaque rem minus ipsam quidem tempora nesciunt a cupiditate placeat? Error maxime ullam eveniet vitae sed deleniti, atque quasi rerum asperiores architecto doloribus, suscipit tenetur amet dolore molestiae consequuntur eligendi nostrum nisi blanditiis labore quibusdam nulla. Nam dolores vitae nisi provident? Esse dolor voluptas omnis harum nostrum aliquam incidunt provident quas placeat molestias facilis, nesciunt quia cum deleniti iure dolorem aspernatur fugit iste veritatis! Nemo commodi voluptatibus voluptas, nobis esse pariatur eligendi molestiae veritatis minima iure, saepe quas sint! Asperiores perspiciatis amet dolore nemo at.',
  },
];

export {
  aboutSection,
  demoSection,
  educationSection,
  experienceSection,
  expertisesSection,
  footerSection,
  heroSection,
  hiddenText,
  homePage,
  ideasSection,
  meta,
  staticDemo,
  toolSection,
};
