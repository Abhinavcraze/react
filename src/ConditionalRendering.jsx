import PropTypes from 'prop-types';
import React from './assets/react.png'

//destructing function

function ConditionalRendering({
  name = 'React',
  price = 'Free',
  image = React,
  rating = 'N/A',
  show = false,
}) {
if (!show) {
    return <div className="card2">Course not Available</div>;
}

const displayName = name && name.trim() !== '' ? name : 'React';

return (
  <div className="card2">
    {image && <img src={image} alt={displayName + ' course image'} />}
    <h3>{displayName} {name ? 'Learning' : 'Course'}</h3>
    <p>{price || 'Price not available'}</p>
    <span>{rating || 'No rating'}</span>
  </div>
  );
}

ConditionalRendering.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  show: PropTypes.bool,
};

//defining

ConditionalRendering.defaultProps = {
  name: 'React',
  price: 'Free',
  image: React,
  rating: '5',
  show: false,
};

export default ConditionalRendering;