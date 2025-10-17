import { useState , useEffect} from "react";
import Condition from "./Condition"; // Assuming Condition.jsx is in the same folder
import html from "../assets/html logo.png";
import css from "../assets/css logo.png";
import js from "../assets/JavaScript.jpg";
import react from "../assets/react.png";

function UseEffect() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML (Dynamic Content Loading)",
      price: "$199",
      image: html,
      rating: 4.8,
      purchased: false,
      show: true,
    },
    {
      id: 2,
      name: "CSS (Dynamic Content Loading)",
      price: "$299",
      image: css,
      rating: 4.7,
      purchased: false,
      show: true,
    },
    {
      id: 3,
      name: "JavaScript (Dynamic Content Loading)",
      price: "$499",
      image: js,
      rating: 4.9,
      purchased: false,
      show: true,
    },
    {
      id: 4,
      name: "React (Dynamic Content Loading)",
      price: "$449",
      image: react,
      rating: 4.7,
      purchased: false,
      show: true,
    },
  ]);

  const [dummy,setDummy] = useState(true);

  useEffect(() => {
    console.log('use Effect Called');
    console.log(dummy);
  },[dummy]) //it means useEffect depends on dummy ,after dummy value changes useEffect gets activated 
          //here dummy acts as dependency

///case 2

  //  useEffect(() => {
  //   console.log('use Effect Called');
  //   console.log(dummy);
  // }) //it will perfoem all courses and dummy button

  //case 3
  
    //  useEffect(() => {
  //   console.log('use Effect Called');
  //   console.log(dummy);
  // },[])  //useEffect will render only once

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  }

  function handleBuy(id) {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, purchased: true } : course
    );
    setCourses(updatedCourses);
  }

  const courseList = courses.map((course) => (
    <Condition
      key={course.id}
      id={course.id}
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
      purchased={course.purchased}
      onBuy={() => handleBuy(course.id)}
      show={course.show}
      // --- THIS IS THE FIX ---
      // Changed prop name from "delete" to "onDelete"
      onDelete={() => handleDelete(course.id)} 
    />
  ));

  return (
    <>
      {courseList}
      < button onClick = {() => {setDummy(false)}}>Dummy Button</button>
    </>
  );
}

export default UseEffect;