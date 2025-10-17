import { useState , useEffect} from "react";
import Condition from "./Hooks/Condition"; 

function FetchAPIUseEffect() {
  {/*data inside the useState is takes place in dummyData.json*/}
  const [courses, setCourses] = useState(null);

  //this is data from json placeholder

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //       console.log(response);
  //       return response.json()
  //     }
  //   ).then(data => console.log(data))
  // }, []);

  //my own data should make coded as like this

  useEffect(() => {
    fetch('http://localhost:3000/courses')     
      .then(response => {    {/*promise*/}
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const coursesWithDefaults = data.map(course => ({
          ...course,purchased: false, show: true        
        }));
        setCourses(coursesWithDefaults);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  function handleDelete(id) {
    if (!courses) return;
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  }

  function handleBuy(id) {
    if (!courses) return;
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, purchased: true } : course
    );
    setCourses(updatedCourses);
  }

  if(!courses){
    return <div>Loading...</div>
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
      show={course.show}
      onBuy={() => handleBuy(course.id)}
  
      onDelete={() => handleDelete(course.id)} 
    />
  ));

  return (
    <>
      {courseList}
    </>
    //  <div>
    //   <h1>Courses</h1>
    //   <ul>
    //     {courses.map(course => (
    //       <li key={course.id}>{course.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default FetchAPIUseEffect;

//npx json-server --watch data/dummyData.json --port 3000 --static ./data
//json content is shown over this link