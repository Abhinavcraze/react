import PropTypes from 'prop-types';
import React from './assets/react.svg';

function Clickevents(props) {
    const {
        name = 'React',
        price = 'Free',
        image = React, 
        show = false,
    } = props;

    const BuyCourse = () => {
        alert(`You clicked Buy Now for ${name} course!`);
        console.log(name, " Purchased");
    };

    function Offer(discount,e){
      alert(`${name} Purchased with ${discount} % discount`);
      console.log(name," purchased with", discount ,"% discount");
      console.log(e);
    }

    return (
        name && show && (
            <div className='card'>
                <img src={image} alt={`${name} course`} />
                <h2>{name}</h2>
                <p>{price}</p>
                <button onClick={BuyCourse}>Buy Now</button>
                <button onClick={(event) => Offer(20,event)}>Discount</button>
            </div>
        )
    );
}

Clickevents.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    show: PropTypes.bool,
};

Clickevents.defaultProps = {
    name: 'React',
    price: 'Free',
    image: React,
    show: false,
};

export default Clickevents;


