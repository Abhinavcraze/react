import PropTypes from 'prop-types';
import { useState} from 'react';
function UseState1(props) {
//let purchased = false;
//[state,setState]  
const [purchased, setPurchased] = useState(false);


function BuyCourse(discount){
  alert(`${props.name} purchased with ${discount} % discount`);
  setPurchased('true'); 
}

{/*useEffect(() => {
  console.log('inside course use Effect');
  console.log(purchased)
})  */}

return (
    props.name && 
    <div className='card2'>
      <img src={props.image} alt={`${props.name} course`} />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <button onClick={() => {BuyCourse(20)}}>Buy Now</button>
      <button onClick={() => props.delete(props.id)}>Delete</button>
      <p className="main"> {purchased ? "Yes" : "No"}</p>
    </div>
);
}
UseState1.propTypes = {
id: PropTypes.any,
name: PropTypes.string,
price: PropTypes.number,
image: PropTypes.string,
show: PropTypes.bool,
delete: PropTypes.func,
};
export default UseState1;