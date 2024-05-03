// import images
import Hero_person from "./assets/images/Hero/Ahmed Monem.jpg";

import html from "./assets/images/Skills/html5.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import js from "./assets/images/Skills/js.png";
import typescript from "./assets/images/Skills/Typescript.png";
import reactjs from "./assets/images/Skills/react.png";
import css from "./assets/images/Skills/css3.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import sass from "./assets/images/Skills/sass.png";
import git from "./assets/images/Skills/git.png";
import github from "./assets/images/Skills/github.png";
import redux from "./assets/images/Skills/redux.png";
import mui from "./assets/images/Skills/MUI.png";
import nextjs from "./assets/images/Skills/nextjs.png";
import nodejs from "./assets/images/Skills/nodejs.png";
import expressjs from "./assets/images/Skills/expressjs_logo.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mongoose from "./assets/images/Skills/mongoose.png";

import websiteAudit from "./assets/images/Services/website audit.png";
import mobileFriendly from "./assets/images/Services/mobile friendly.png";
import analytics from "./assets/images/Services/analytics.png";
import creativeDesign from "./assets/images/Services/creative design.png";
import eCommercePhoto from "./assets/images/Services/e-commerce.png";
import contentManagement from "./assets/images/Services/content management.png";

import freshCartApp from "./assets/images/Projects/Fresh Cart React.png";
import eCommerceProject from "./assets/images/Projects/e-commerce project.png";
import crudJsonServer from "./assets/images/Projects/crud json server.png";
import moviesApp from "./assets/images/Projects/movies application.png";
import shoppingCart from "./assets/images/Projects/shopping cart.png";
import todoList from "./assets/images/Projects/todolist.png";
import crudJS from "./assets/images/Projects/crud js.png";
import yummyBootstrap from "./assets/images/Projects/Yummy bootstrap.png";
import devFolioProject from "./assets/images/Projects/devfolio project.png";
import realEstateFreelanceProject from "./assets/images/Projects/Real Estate Website Freelance Project.png";
import codeAmyTask from "./assets/images/Projects/Codeamy Task UniDorm Design.png";
import bloodBankProject from "./assets/images/Projects/Blood Bank MultiPage Website.png";
import notesAppProject from "./assets/images/Projects/Notes App React.png";
import googleCloneNextProject from "./assets/images/Projects/Google Clone Next.png";
import noxeMoviesAppProject from "./assets/images/Projects/Noxe Movies App React.png";
import inifintElRowadFreelanceProject from "./assets/images/Projects/Infinit El-Rowad Freelance Landing Page.png";
import person_project from "./assets/images/Projects/Ahmed Monem 2.jpg";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/CV photo.jpg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front End Developer",
    firstName: "AHMED",
    LastName: "MONEM",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in front end development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "TypeScript",
        para: "Lorem ipsum text  dummy",
        logo: typescript,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "MUI",
        para: "Lorem ipsum text  dummy",
        logo: mui,
      },
      {
        name: "Sass",
        para: "Lorem ipsum text  dummy",
        logo: sass,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Github",
        para: "Lorem ipsum text  dummy",
        logo: github,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Redux & Redux toolkit",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "NextJS",
        para: "Lorem ipsum text  dummy",
        logo: nextjs,
      },
      {
        name: "NodeJS",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "EXPRESSJS",
        para: "Lorem ipsum text  dummy",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        para: "Lorem ipsum text  dummy",
        logo: mongodb,
      },
      {
        name: "Mongoose",
        para: "Lorem ipsum text  dummy",
        logo: mongoose,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Website Audits",
        para: "Looking to improve your page performance, SEO, or user experience? Request a free site audit.",
        logo: websiteAudit,
      },
      {
        title: "Mobile Friendly",
        para: "A responsive design makes your website accessible to all users, regardless of their device.",
        logo: mobileFriendly,
      },
      {
        title: "Analytics",
        para: "Get insights into who is browsing your site so that you can make smarter business decisions.",
        logo: analytics,
      },
      {
        title: "Creative Design",
        para: "Clean, modern designs - optimized for performance, search engines, and converting users to customers.",
        logo: creativeDesign,
      },
      {
        title: "E-commerce",
        para: "Integration of eCommerce platforms, payment gateways, custom product templates, and more.",
        logo: eCommercePhoto,
      },
      {
        title: "Content Management",
        para: "Custom WordPress theme and plugin development. Easily update content without knowing how to code.",
        logo: contentManagement,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Fresh Cart App",
        image: freshCartApp,
        description:
          "A Fresh Cart App is an e-commerce website with a Products ,Categories,Brands a shopping cart system, and a checkout process.",
        liveLink: "https://fresh-cart-react.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Fresh-Cart-React",
      },
      {
        title: "Google Clone NextJS Project",
        image: googleCloneNextProject,
        description:
          "It's a Google Clone Project made with NextJS 14, I used TailwindCSS, React Icons, Google Search API, As you can type any keyword in the search bar and search for anything you want in addition to adding a feeling lucky button which is used to search for a random keyword Plus adding skeleton Loading and Image Search.",
        liveLink: "https://google-clone-next-indol.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Google-Clone-Next",
      },
      {
        title: "Noxe Movies App with Auth.",
        image: noxeMoviesAppProject,
        description:
          "It's a Movies application with Authentication and Protected Routes, As you can be redirected to the Home Page where you can explore Trending Movies, TV shows and Actors, There are many routes using react router dom as you can visit any of the movies, TV shows and persons routes where you can find that you can search for any of those as you wanted, Find by page, And you can also do a search and find the pages of that specific search.",
        liveLink: "https://noxe-movie-app-react.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Noxe-Movie-App-React",
      },
      {
        title: "Notes App",
        image: notesAppProject,
        description:
          "Notes App is a CRUD project with Authentication, Protected Routes, As you can see your notes, Add notes, Edit a note and Delete a note.",
        liveLink: "https://notes-app-react-chi.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Notes-App-React",
      },
      {
        title: "E-Commerce",
        image: eCommerceProject,
        description:
          "It's an E-Commerce application where you can view the products' details, Add a product to the cart, You can also increase the amount of the product or decrease it, You can remove a product from the cart, You can also clear all of the products from the cart, And it's all built with React Redux toolkit in addition to using Redux persist library.",
        liveLink: "https://e-commerce-app-react-redux-toolkit.vercel.app/",
        codeLink:
          "https://github.com/AhmedMonem122/E-Commerce-App-React-Redux-toolkit",
      },
      {
        title: "CRUD JSON server API",
        image: crudJsonServer,
        description:
          "It's a Crud application using JSON server API and I used the Redux toolkit.",
        liveLink: "https://crud-json-server-react-redux-toolkit.vercel.app/",
        codeLink:
          "https://github.com/AhmedMonem122/Crud-JSON-server-React-Redux-toolkit",
      },
      {
        title: "Movies Application",
        image: moviesApp,
        description:
          "It's a Movies application in which you can go to movie details using React Router, Find by page, Search for a movie, And you can also do a search and find the pages of that specific search.",
        liveLink: "https://movie-app-react-pied.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Movie-App-React",
      },
      {
        title: "Shopping Cart",
        image: shoppingCart,
        description:
          "It's a shopping cart application using React and context API, You can add a product to the cart, Increase the quantity of the product or decrease it, And you can remove a product from the cart, And I used React Bootstrap.",
        liveLink: "https://shopping-cart-react-rose.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Shopping-Cart-React",
      },
      {
        title: "TodoList Application",
        image: todoList,
        description:
          "It's a todo list application where you can add a todo, You can also check this todo, You can edit this todo, You can delete a specific todo, And finally if you created more than one todo you can clear them all.",
        liveLink: "https://todo-list-react-mocha.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Todo-List-React",
      },
      {
        title: "CRUDS JS",
        image: crudJS,
        description:
          "It's an application made with HTML & CSS & JavaScript where you can add or create a product or a number of products together to 100 products, Read data from the user, Update or edit the product, Delete a specific product or delete all of the products, And finally you can search by title or category.",
        liveLink: "https://ahmedmonem122.github.io/Crud-System/",
        codeLink: "https://github.com/AhmedMonem122/Crud-System",
      },
      {
        title: "CodeAmy Task UniDorm Design",
        image: codeAmyTask,
        description:
          "It's a CodeAmy Task made with ReactJS, TailwindCSS, JavaScript, React Icons and React Slick.",
        liveLink: "https://codeamy-task.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Codeamy-Task",
      },
      {
        title: "Real Estate MultiPage Website",
        image: realEstateFreelanceProject,
        description:
          "It's a bootstrap freelance project, It consists of 3 multiPages in order to access the other 2 pages you can visit /properties.html and /properties-details.html, I used HTML, CSS, Bootstrap, JavaScript, JQuery, Owl Carousel, And I used Pure Counter.js.",
        liveLink: "https://real-estate-website-orcin.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Real-Estate-Website",
      },
      {
        title: "Blood Bank MultiPage Website",
        image: bloodBankProject,
        description:
          "It's a big bootstrap multiPage website, It consists of 7 multiPages, I used HTML, CSS, Bootstrap, JavaScript, JQuery, And I used Owl Carousel.",
        liveLink: "https://blood-bank-website-pi.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Blood-Bank-Website",
      },
      {
        title: "Yummy Bootstrap Template",
        image: yummyBootstrap,
        description:
          "It's a big bootstrap template, I used animations, lightboxes, swiperjs, and some other stuff, And I used Sass.",
        liveLink: "https://ahmedmonem122.github.io/Yummy-Bootstrap-template/",
        codeLink: "https://github.com/AhmedMonem122/Yummy-Bootstrap-template",
      },
      {
        title: "DevFolio Template",
        image: devFolioProject,
        description:
          "It's a React template using React Bootstrap and Bootstrap.",
        liveLink: "https://dev-folio-react-template.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/DevFolio-React-Template",
      },
      {
        title: "Infinit El-Rowad Landing Page",
        image: inifintElRowadFreelanceProject,
        description:
          "It's a freelance Bootstrap Landing page, I used HTML, CSS, Bootstrap, JavaScript and SwiperJS.",
        liveLink: "https://infinit-el-rowad.vercel.app/",
        codeLink: "https://github.com/AhmedMonem122/Infinit-ElRowad",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person,
    para: "I'm a freelance web developer with over one year of experience in building custom websites and web applications. I specialize in front-end development using HTML, CSS, JavaScript, Bootstrap, Tailwind, SASS, Git and Github, React, Redux and Redux toolkit.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ahmed.monem90@yahoo.com",
        icon: GrMail,
        link: "mailto:ahmed.monem90@yahoo.com",
      },
      {
        text: "+20 1550 4812 71",
        icon: MdCall,
        link: "https://wa.me/+201550481271?text=Hi%20Ahmed%20Monem",
      },
      {
        text: "ahmed_mohamed7966",
        icon: BsInstagram,
        link: "https://www.instagram.com/ahmed_mohamed7966/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
