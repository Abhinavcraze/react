import React from './assets/react.png'
import JavaScript from './assets/JavaScript.jpg'

const course1 = "React concept on Componenets"
const course2 = "Javascript"

function Components1() {

    return (
        <div className = "card1">
            <img src={React} alt="" />
            <h3>{course1} Learning</h3>
            <p>This is a JS learning course</p>
            <img src={JavaScript} alt="" />
            <h3>{course2} Learning</h3>
            <p>This is a JS learning platgorm</p>
        </div>
    );
}

export default Components1;