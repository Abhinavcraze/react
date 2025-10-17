import PropTypes from 'prop-types';
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';

function Clickevents1(props) {
    const {
        name = 'React',
        price = 'Free',
        image = reactLogo,
        show = false,
    } = props;

    const [purchased, setPurchased] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const BuyCourse = () => {
        alert(`You bought the ${name} course!`);
        console.log(`${name} purchased`);
        setPurchased(true); 
    };

    const DeleteCourse = () => {
        alert(`${name} course deleted`);
        console.log(`${name} course removed`);
        setDeleted(true); 
    };

    if (!show || deleted) {
        return null; 
    }

    return (
        <div className='card'>
            <img src={image} alt={`${name} course`} />
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={BuyCourse}>Buy Now</button>
            <button onClick={DeleteCourse}>Delete</button>
            <p>Purchased: {purchased ? 'True' : 'False'}</p>
        </div>
    );
}

Clickevents1.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    show: PropTypes.bool,
};

Clickevents1.defaultProps = {
    name: 'React',
    price: 'Free',
    image: reactLogo,
    show: false,
};

export default Clickevents1;
