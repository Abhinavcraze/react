import { useState , useEffect} from "react";
import Condition from "./Hooks/Condition"; 

function ErrorHandlingUseEffect() {
  const [courses, setCourses] = useState(null);
  {/*if that case is performed which is coded below make active on below line */}
  {/*const [loading , setLoading] = useState(true);*/}
  const [error , setError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('http://localhost:3000/courses')     
      .then(response => {    {/*promise*/}
        if(!response.ok){        //if the link is wrong
          throw Error("Couldn't retrieve data from an server")
        }
        console.log(response);
        return response.json();
      })
      .then(data => {
        const coursesWithDefaults = data.map(course => ({
          ...course,
          purchased: false,
          show: true
        }));
        setCourses(coursesWithDefaults);
        setError(null);
      })

      .catch(error => {
        console.log(error);
        console.log(error.message);
        setError(error.message);
      });
    },5000);
    return ()=>clearTimeout(timer);
  }, []);

  function handleDelete(id) {
    console.log(id);
    const newCourses = courses.filter((course) => course.id != id)
    setCourses(newCourses)
  }

  function handleBuy(id) {
    if (!courses) return;
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, purchased: true } : course
    );
    setCourses(updatedCourses);
  }

  {/*this*/}

  if(!courses){
    return (
      <>
        {!error &&<img src="data/assets/loading.gif"></img>}
        {error && <p>{error}</p>}
      </>
    )
  }

  {/*or that*/}

  {/*if (loading) {
  //   return <img src="data/assets/loading.gif" alt="Loading..." />;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // } */}

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
      {courses.length > 0 ? courseList : <p>No courses were found.</p>}
    </>
  );
}

export default ErrorHandlingUseEffect;

//npx json-server --watch data/dummyData.json --port 3000 --static ./data
//json content is shown over this link