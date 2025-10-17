import ConditionalRendering from "./ConditionalRendering";
import html from "./assets/html logo.png";
import css from "./assets/css logo.png";
import js from "./assets/JavaScript.jpg";
import react from "./assets/react.png";

function FilterandSort() {
  const courses = [
    {
      id: 1,
      name: "HTML(Dynamic Filter and Sorting)",
      price: 199,
      image: html,
      rating: 4.8,
    },
    {
      id: 2,
      name: "CSS(Dynamic Filter and Sorting)",
      price: 299,
      image: css,
      rating: 4.7,
    },
    {
      id: 3,
      name: "JavaScript(Dynamic Filter and Sorting)",
      price: 499,
      image: js,
      rating: 4.9,
    },
    {
      id: 4,
      name: "React(Dynamic Filter and Sorting)",
      price: 449,
      image: react,
      rating: 4.7,
    },
    {},
  ];

  const courseList = courses.filter((course) => course.id !== undefined);

  const sortedByPrice = [...courseList].sort((a, b) => b.price - a.price);

  const sortedByRating = [...courseList].sort((a, b) => b.rating - a.rating);

  const courseListByPrice = sortedByPrice.map((course) => (
    <ConditionalRendering
      key={course.id}
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
      show={true}
    />
  ));

  const courseListByRating = sortedByRating.map((course) => (
    <ConditionalRendering
      key={course.id}
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
      show={true}
    />
  ));

  return (
    <>
      {courseListByPrice}
      <h2>Filter and Sorting 2</h2>
      {courseListByRating}
    </>
  );
}

export default FilterandSort;
