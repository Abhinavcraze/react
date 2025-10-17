{/* custom hooks performed in useFetch.jsx*/}

import Condition from "./Condition"; 
import useFetch from "./useFetch"

function CustomHooks() {

  const [courses,error,loading,setCourses] = useFetch('http://localhost:3000/courses');
  

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

  if (loading) {
    return <img src="data/assets/loading.gif" alt="Loading..." />;
  }

  if (error) {
    return <p>Error: {error}</p>;
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
      {courses.length > 0 ? courseList : <p>No courses were found.</p>}
    </>
  );
}

export default CustomHooks;

//npx json-server --watch data/dummyData.json --port 3000 --static ./data
//json content is shown over this link