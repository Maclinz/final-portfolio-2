import css1 from "../img/portImages/cv_css.png";
import css2 from "../img/portImages/ms.png";
import react1 from "../img/portImages/react_styled.png";
import img1 from "../img/portImages/maya-1.jpg";
import img2 from "../img/portImages/maya-2.jpg";
import img3 from "../img/portImages/maya-3.jpg";
import img4 from "../img/portImages/maya-4.jpg";

const portfolios = [
  {
    id: 1,
    category: "React",
    image: img1,
    link1: "https://github.com/eikpeme/GraceShopper",
    link2: "https://grayce-shoppa.herokuapp.com/",
    title: "Grayce-Shoppa",
    text:
      " E-commerce Website demonstrating CRUD functionality. React | Node | Express | PostgresSQL",
  },
  {
    id: 2,
    category: "React",
    image: img2,
    link1: "https://github.com/eikpeme/2104-FSA-RM-WEB-FT-JPFP",
    link2: "https://ninja-academy.herokuapp.com/campuses",
    title: "Academy App",
    text:
      "Student Campus directory demonstrating CRUD functionality. React | Node | Express | PostgresSQL",
  },
  {
    id: 3,
    category: "React Native",
    image: img3,
    link1: "https://github.com/eikpeme/parkapp/tree/main",
    link2: "https://youtu.be/PPomOi4U0kk",
    title: "Park App",
    text:
      "Park app is a community based mobile parking applicaiton where users can provide parking and rent parking to other user. React-Native | Firebase | Google location API | Expo",
  },
  {
    id: 4,
    category: "React",
    image: img4,
    link1: "https://github.com/eikpeme/PairExercise.TodoList.V2",
    link2: "https://todoz-todoz.herokuapp.com/#/",
    title: "Todoz App",
    text:
      "Todoz is a simple note taking application. React|Node|Express|PostgresSQL ",
  },
];

export default portfolios;
