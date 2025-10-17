import ConditionalRendering from "./ConditionalRendering";
import html from "./assets/html logo.png";
import css from "./assets/css logo.png";
import js from "./assets/JavaScript.jpg";
import react from "./assets/react.png";

function DynamicContentLoading() {
  const courses = [
    {
      id: 1,
      name: "HTML(Dynamic Content Loading)",
      price: "$199",
      image: html,
      rating: 4.8,
    },
    {
      id: 2,
      name: "CSS(Dynamic Content Loading)",
      price: "$299",
      image: css,
      rating: 4.7,
    },
    {
      id: 3,
      name: "JavaScript(Dynamic Content Loading)",
      price: "$499",
      image: js,
      rating: 4.9,
    },
    {
      id: 4,
      name: "React(Dynamic Content Loading)",
      price: "$449",
      image: react,
      rating: 4.7,
    },
    {},
  ];

  const courseList = courses
    .filter((course) => course.id !== undefined)
    .map((course) => (
      <ConditionalRendering
        key={course.id}
        name={course.name}
        image={course.image}
        price={course.price}
        rating={course.rating}
        show={true}
      />
    ));

  return <>{courseList}</>;
}

export default DynamicContentLoading;
