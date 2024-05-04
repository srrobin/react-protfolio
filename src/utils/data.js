import HomeImage from '../assets/home.jpg';
import HeroImage from '../assets/hero.jpg';
import PetImage from '../assets/petclinic.png';
import PosImage from '../assets/pos.png';
import QuoteImage from '../assets/quote.png';
import ProtImage from '../assets/protfolio.png';
import LogImage from '../assets/login.png';
import CrudImage from '../assets/crud.png';
import QrImage from '../assets/qr.png';
import cv from '../components/pdf/cv1.pdf';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const meta = {
  title: "srrobin",
  description:
    "frontend software developer",
};
const homePage = {
      image_url: HomeImage,
};
const heroSection = {
   greetingText : "Hey you, I'm",
   nameText : "sayam rahman robin",
   image_url: HeroImage,
}
const hiddenText = {
   lockText : "Every soul shall taste death  al—Quran 3:185"
}
const aboutSection = {
  title: "ABOUT ME",
  sub: "abt",
  link: "not yeat",
  desc:
    "I AM A SELF 👩‍💻TAUGHT CREATIVE FRONT-END DEVELOPER AND WEB DESIGNER BASED IN DHAKA, BANGLADESH . I ESPECIALLY LIKE TO WORK ON THE FRONT END OF SOFTWARE. AS A FRONT-END DEVELOPER AND WEB DESIGNER, HELPING STARTUPS GAIN THEIR UNFAIR ADVANTAGE. ALTHOUGH I MAJORED IN MATH, I LOVE CODING. WHEN I'M NOT DEVELOPING OR DESIGNING, I ENJOY STUDYING OR TRAVELING AROUND THE VARIOUS RURAL AREAS OF BANGLADESH.",
};
const educationSection = {
  title: "MY EDUCATION",
  sub: "edu",
  link: cv,
  desc:
    "I AM A GRADUATE OF✏️ DHAKA COLLEGE AT NATIONAL UNIVERSITY, WHERE I EARNED B.SC. IN 🍀 MATHEMATICS.",
};
const experienceSection = {
  title: "MY EXPERIENCE",
  sub: "xp",
  link: cv,
  desc:[ 
    {
      inst_name: "HYPERTAG SOLUTION LTD, BANGLADESH",
      inst_desc: "🢅 I WORKED FOR 1 ➕ YEARS AS INTERN PLUS JUNIOR FRONT END DEVELOPER AT",
    },
    {
      inst_name: "CREATIVE IT SOFT LTD, BANGLADESH",
      inst_desc: "🢅 AFTER THAT I WORKED AS FRONT END SOFTWARE DEVELOPER FOR 2 YEARS ✌ AT",
    },
    {
      inst_name: "",
      inst_desc: "🢅 IN BETWEEN, I WORKED AS A DIRECTOR OF A COACHING CENTER FOR 3 YEARS AND WORKED FOR SOME LOCAL CLIENTS AS A WEB DESIGNER .",
    },
  ]
};

const expertisesSection = {
  title: "MY EXPERTISES",
  sub: "exp",
  link: "not yeat",
  desc: "not yeat",
  full_expart:[ "WEB DEVELOPMENT", "SOFTWARE DEVELOPMENT","WEB DESIGN"],
};

const toolSection = {
  title: "MY DEGITAL TOOL BOX",
  sub: "tool",
  link: "not yeat",
  desc: "not yeat",
  full_expart:[ "HTML", "CSS","JAVASCRIPT","REACTJS","SASS"],
  mid_expart:[ "REDUX","NEXTJS", "TAILWIND CSS"],
  low_expart:[ "DJANGO", "DRF","MONGODBG"],
};

const staticDemo = [
  {
    project_title:'Petclinic',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://petclinics.netlify.app',
    github_link:'https://github.com/srrobin/petclinic',
    project_image:PetImage,
    tech:["reactjs","sass","ant-design"],
  },
  {
    project_title:'POS System',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://pos-systems.netlify.app/',
    github_link:'https://github.com/srrobin/pos-system.git',
    project_image:PosImage,
    tech:[
      "reactjs",
      "ant-design",
      "scss",
      "tanstack-query",
    ],
  },
  
];

const demoSection = [
  { 
    id:1,
    project_title:'Petclinic',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://petclinics.netlify.app',
    github_link:'https://github.com/srrobin/petclinic',
    project_image:PetImage,
    tech:["reactjs","sass","ant-design"],
    order:1,
    type:1,
  },
  {
    id:2,
    project_title:'POS System',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://pos-systems.netlify.app',
    github_link:'https://github.com/srrobin/pos-system.git',
    project_image:PosImage,
    tech:[
      "reactjs",
      "ant-design",
      "scss",
      "tanstack-query",
    ],
    order:1,
    type:2,
  },
  {
    id:3,
    project_title:'Login page',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://demo-react-login.netlify.app',
    github_link:'https://github.com/srrobin/demo-react-login-design',
    project_image:LogImage,
    tech:[
      "reactjs",
      "cssmodule",
      "responsive",
    ],
    order:1,
    type:2,
  },
  {
    id:5,
    project_title:'demo-crud',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://demo-crud.netlify.app/',
    github_link:'https://github.com/srrobin/e-crud',
    project_image:CrudImage,
    tech:[
      "reactjs",
      "react-bootstra",
      "i18next",
      "tanstack-query",
    ],
    order:2,
    type:1,
  },
  {
    id:4,
    project_title:'protfolio@2024',
    project_desc:'This app is designed for pet clinic front desk personnel to register.',
    live_demo_link:'https://srrobin.vercel.app',
    github_link:'https://github.com/srrobin/react-protfolio',
    project_image:ProtImage,
    tech:[
      "reactjs",
      "scss",
      "framer-motion",
    ],
    order:2,
    type:1,

  },

];

const footerSection = {
  fist_col_quote: "I Feel Very Honored That The Hawaiian Spirits Chose To Contact Me.",
  fist_col_quoteImage:QuoteImage,
  second_col_number:"+880 1302 700 760",
  second_col_email:"srrobin07@gmail.com",
  second_col_skype:"srrobin07",
  third_col_cvlink:cv,
  third_col_qr:QrImage,
  fourth_col:[
    { title: "WhatsApp", icon: <IoLogoWhatsapp style={{color: '#3FE05C'}} /> },
    { title: "facebook", icon: <FaFacebook style={{color: '#1469C7'}}/> },
    { title: "Linkedin", icon:<FaLinkedin style={{color: '#0981BF'}}/> },
    { title: "github", icon: <FaGithub style={{color: ''}}/> },
  ],
};

const ideasSection=[
  {
    title:"SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)",
    ideaImage:"",
    createDate:"1 MAY, 2024",
    subTitle:"",
    desc:"THE SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) CREATES AN ENVIRONMENT WHERE BUSINESSES AND IT DEPARTMENTS CAN COLLABORATE TO PRODUCE HIGH-QUALITY SOFTWARE. THE SYSTEMATIC APPROACH TO PLANNING, DESIGNING, TESTING, AND DEPLOYING SOFTWARE PRODUCTS MAKES SDLC AN INDISPENSABLE PART OF SUCCESSFUL SOFTWARE PROJECTS. THE SDLC EVOLVES WITH TECHNOLOGY. IN THIS ARTICLE, WE’LL LOOK AT THE STATE OF THE SOFTWARE DEVELOPMENT LIFE CYCLE IN 2024 AND CONSIDER HOW ITS PRINCIPLES CAN BE USED TO CREATE MORE EFFICIENT SOFTWARE PRODUCTS. THE SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) IS A SET OF STAGES, ACTIVITIES, AND TASKS THAT SOFTWARE PROJECTS GO THROUGH. THE PROCESS OUTLINES HOW SOFTWARE DEVELOPMENT TEAMS BUILD, TEST, DEPLOY, AND MAINTAIN THEIR SOFTWARE TO ACHIEVE TOP QUALITY ON TIME AND WITHIN BUDGET. SDLC BEGINS WITH THE PLANNING PHASE, WHERE THE DEVELOPMENT TEAM DEFINES AND ANALYZES THE PROJECT REQUIREMENTS, GOALS, AND TIMELINE. AFTER THE PLANNING PHASE, THE TEAM CREATES THE PROTOTYPE BY DESIGNING, BUILDING, AND INTEGRATING DIFFERENT COMPONENTS. NEXT, THE DEVELOPERS EVALUATE THE PROJECT, INVESTIGATE ANY REPORTED ISSUES, AND FIX BUGS TO ENSURE THE SOFTWARE WORKS EFFICIENTLY BEFORE THE OFFICIAL LAUNCH. WHILE THE GOAL IS TO ENSURE A QUALITY AND TIMELY DEVELOPMENT PROCESS, THE DEVELOPMENT CYCLE ALSO INVOLVES ROUTINE MAINTENANCE TO ENSURE THE SOFTWARE REMAINS RUNNING WITHOUT HITCHES. WHEN IMPLEMENTED CORRECTLY, THESE CORE SDLC ACTIVITIES PROVIDE SEVERAL BENEFITS. THE FOLLOWING SECTIONS WILL DIVE MORE DEEPLY INTO THE IMPORTANCE OF SDLC TO BUSINESSES AND DEVELOPMENT TEAMS."
  }
] ;

export {
  meta,
  homePage,
  heroSection,
  hiddenText,
  aboutSection,
  educationSection,
  experienceSection,
  expertisesSection,
  toolSection,
  staticDemo,
  demoSection,
  footerSection,
  ideasSection,
};