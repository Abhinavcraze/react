 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import CourseComponents from "./CourseComponents";
import Components from "./Components/Components";
import Components1 from "./Components1";
import Props from "./Props";
import ConditionalRendering from "./ConditionalRendering";
import DynamicContentLoading from "./DynamicContentLoading";
import FilterandSort from "./FilterandSort";
import Clickevents from "./Clickevents";
import Clickevents1 from "./Clickevents1";
import MethodasProps from "./MethodasProps";
import MethodasPropsParent from "./MethodasPropsParent";
import MethodAsPropsDemo from "./MethodAsPropsDemo";
import FetchAPIUseEffect from "./FetchAPIUseEffect"
import ErrorHandling from "./ErrorHandlingUseEffect.jsx"

// Importing images
import Css from "./assets/css.png";
import JavaScript from "./assets/JavaScript.jpg";
import Html from "./assets/html logo.png";
import Angular from "./assets/angular.png";
import ReactImg from "./assets/react.png";

// Importing Hook-related components
import UseState from "./Hooks/UseState";
import UseState1 from "./Hooks/UseState1";
import UsestateMethodasProps from "./Hooks/UsestateMethodasProps";
import UseEffect from "./Hooks/UseEffect.jsx";
import CustomHooks from "./Hooks/CustomHooks.jsx"

function App() {

  {/*This is for useState with delete prop functionality */}
  const [courses, setCourses] = useState([
    { id: 1, name: "HTML (with delete)", price: 199, image: Html, show: true },
    { id: 2, name: "CSS (with delete)", price: 149, image: Css, show: true },
    { id: 3, name: "JavaScript (with delete)", price: 249, image: JavaScript, show: true },
    { id: 4, name: "Angular (with delete)", price: 449, image: Angular, show: true },
  ]);
  const greetParent = (childName) => {
    alert(`Hello from the Parent! This was triggered by the ${childName}.`);
  };

  const handleDeleteCourse = (courseIdToDelete) => {
    alert("Delete button clicked in the parent context!");
    const updatedCourses = courses.filter(course => course.id !== courseIdToDelete);
    setCourses(updatedCourses);
  };


  return (
    <>
      <Navbar />
      <div className="main-content">
        <h2>Standard Components & Props</h2>
        <div className="component-section">
          <Components />
          <CourseComponents />
          <Components1 />
          <Components1 />
          <Components1 />
        </div>
        <hr />

        <h2>Props Demonstration</h2>
        <div className="component-section">
            <Props name="HTML" price="$199" image={Html} rating={5} />
            <Props name="CSS" price="$149" image={Css} rating={4} />
            <Props name="JavaScript" price="$249" image={JavaScript} />
            <Props name="React" price="$449" rating={4.6} />
        </div>
        <hr />

  
        <h2>Conditional Rendering</h2>
        <div className="component-section">
          <ConditionalRendering
              name="HTML Conditional rendering"
              price="$199"
              image={Html}
              rating={5}
              show={true}
          />
          <ConditionalRendering
              name="CSS Conditional Rendering"
              price="$149"
              image={Css}
              rating={4}
          />
          <ConditionalRendering
              name="JavaScript Conditional Rendering"
              price="$249"
              image={JavaScript}
              rating={4.4}
              show={true}
          />
          </div>
          <hr />


          <h2>Dynamic Content</h2>
          <div className="component-section">
              <DynamicContentLoading />
              <h2>Filtering and sorting</h2>
              <FilterandSort />
          </div>
          <hr />

          <h2>Click Events</h2>
          <div className="component-section">
              <Clickevents name="HTML Click event Functionality" price="$199" image={Html} show={true}/>
              <Clickevents name="CSS Click event Functionality" price="$149" image={Css}/>
              <Clickevents name="JavaScript Click event Functionality" price="$249" image={JavaScript} show={true}/>
              <Clickevents name="Angular Click event Functionality" price="$449" image={Angular} show={true}/>
              <Clickevents show={true} />

              <hr />
              <h2>Click event Functionality</h2>
              <Clickevents1 name="HTML Click event Functionality1" price="$199" image={Html} show={true}/>
              <Clickevents1 name="CSS Click event Functionality1" price="$149" image={Css}/>
              <Clickevents1 name="JavaScript Click event Functionality1" price="$249" image={JavaScript} show={true}/>
              <Clickevents1 name="Angular Click event Functionality1" price="$449" image={Angular} show={true}/>
              <Clickevents1 show={true} />
          </div>
  
          <hr />

          <h2>React Hooks: useState Examples</h2>
          <div className="component-section">
            <UseState name="HTML UseState Functionality" price={199} image={Html} show={true}/>
            <UseState name="CSS UseState Functionality" price={149} image={Css}/>
            <UseState name="JavaScript UseState Functionality" price={249} image={JavaScript} show={true}/>
            <UseState name="Angular UseState Functionality" price={449} image={Angular} show={true}/>
            <UseState name="React Course" price={500} image={ReactImg} />

            <hr/>
        
            <h2>useState with Delete Prop (Functional!)</h2>
            <div className="component-section">
                {courses.map((course) => (
                <UseState1 key={course.id}   
                  id={course.id}   
                  name={course.name}
                  price={course.price}
                  image={course.image}
                  show={course.show}
                  delete={handleDeleteCourse} 
                />
              ))}
            </div>
            <hr/>
          </div>

          <hr/>

          <h2>Advanced State Management with Methods as Props</h2>
          <div className="component-section">
            <UseState1 name="HTML UseState Functionality with delete" price={199} image={Html} show={true} delete={handleDeleteCourse}/>
              <UseState1 name="CSS UseState Functionality with delete" price={149} image={Css} delete={handleDeleteCourse}/>
              <UseState1 name="JavaScript UseState Functionality with delete" price={249} image={JavaScript} show={true} delete={handleDeleteCourse}/>
              <UseState1 name="Angular UseState Functionality with delete" price={449} image={Angular} show={true} delete={handleDeleteCourse}/>
              
          </div>
          <hr />

          <h2>Use state Method as props</h2>
          <UsestateMethodasProps/>

          <hr/>

          <h2>Method as Props Demonstrations</h2>
          <div className="component-section">
            <MethodasProps greetHandler={greetParent} />
            <MethodasPropsParent />
            <MethodAsPropsDemo />
          </div>

          <h2>UseEffect Concept</h2>
          <UseEffect/>
          <hr/>

          <h2>Data Fetching using JSON</h2>
          <FetchAPIUseEffect/>
          <hr/>

          <h2>Error Handling Concept</h2>
          <ErrorHandling/>
          <hr/>

          <h2>Custom Hooks Concept</h2>
          <CustomHooks/>
          <hr/>

          
          <hr />
        </div>
        <Footer />
    </>
  );
}
export default App;