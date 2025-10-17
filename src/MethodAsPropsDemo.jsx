import { useState } from 'react';
//acts as child component for MethodAsPropsDemo.jsx
import CourseSelectionCard from './CourseSelectionCard';

import htmlImg from './assets/html logo.png';
import cssImg from './assets/css.png';
import jsImg from './assets/JavaScript.jpg';
import angularImg from './assets/angular.png';

function MethodAsPropsDemo() {
    const courses = [
        { id: 1, name: 'HTML', price: 199, image: htmlImg },
        { id: 2, name: 'CSS', price: 149, image: cssImg },
        { id: 3, name: 'JavaScript', price: 249, image: jsImg },
        { id: 4, name: 'Angular', price: 449, image: angularImg },
    ];

    const [selectedCourse, setSelectedCourse] = useState('None');

    const handleCourseSelection = (courseName) => {
        setSelectedCourse(courseName);
    };

    const containerStyle = {
        border: '2px solid #00796b',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#e0f2f1',
        margin: '20px 0'
    };

    const selectionTextStyle = {
        color: '#d32f2f',
        fontSize: '1.2em',
        fontWeight: 'bold',
        minHeight: '30px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h2>Method as Props: Course Selector</h2>
            <p style={selectionTextStyle}>
                You have selected: {selectedCourse}
            </p>
            <hr />
            <div>
                {courses.map((course) => (
                    <CourseSelectionCard 
                        key={course.id} 
                        course={course} 
                        onSelectCourse={handleCourseSelection} 
                    />
                ))}
            </div>
        </div>
    );
}

export default MethodAsPropsDemo;