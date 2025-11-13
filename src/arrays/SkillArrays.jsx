import HTML from '../imgs/HTML5.png';
import CSS3 from '../imgs/CSS3.png';
import SCSS from '../imgs/SCSS.png';
import JS from '../imgs/JS.png';
import TS from '../imgs/Typescript.png';
import REACT from '../imgs/REACT.jpg';
import AXIOS from '../imgs/AXIOS.png';
import REDUX from '../imgs/REDUX.png';
import JQUERY from '../imgs/JQUERY.png';
import FIREBASE from '../imgs/FB.png';
import VERCEL from '../imgs/VERCEL.png';
import GIT from '../imgs/GIT.png';
import GITHUB from '../imgs/GITHUB.jpg';


export const Skills = [
  {
    id: 1,
    category: "Programming Language",
    items: [
      { img: HTML, label: "HTML5" },
      { img: CSS3, label: "CSS3" },
      { img: SCSS, label: "SCSS" },
      { img: JS, label: "JavaScript" },
      { img: TS, label: "TypeScript" },
    ]
  },
  {
    id: 2,
    category: "Library",
    items: [
      { img: REACT, label: "React" },
      { img: AXIOS, label: "Axios" },
      { img: REDUX, label: "Redux" },
      { img: JQUERY, label: "jQuery" },
    ]
  },
  {
    id: 3,
    category: "Server / Deploy",
    items: [
      { img: FIREBASE, label: "Firebase" },
      { img: VERCEL, label: "Vercel" },
    ]
  },
  {
    id: 4,
    category: "Other",
    items: [
      { img: GIT, label: "Git" },
      { img: GITHUB, label: "GitHub" },
    ]
  }
];
