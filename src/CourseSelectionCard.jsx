//acts as child component for MethodAsPropsDemo.jsx

import PropTypes from "prop-types";

function CourseSelectionCard({ course, onSelectCourse }) {
    const { name, price, image } = course;

    const cardStyle = {
        backgroundColor: '#f0f4c3',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        border: '1px solid #cddc39'
    };

    return (
        <div className="card2" style={cardStyle}>
            <img src={image} alt={`${name} logo`} className="course-img" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button 
                onClick={() => onSelectCourse(name)} 
                style={{ backgroundColor: '#00796b', color: 'white' }}
            >
                Select Course
            </button>
        </div>
    );
}

CourseSelectionCard.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onSelectCourse: PropTypes.func.isRequired,
};

export default CourseSelectionCard;