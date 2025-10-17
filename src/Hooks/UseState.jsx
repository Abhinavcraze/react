import PropTypes from 'prop-types';
import { useState} from 'react';

function UseState(props) {

    //let purchased = false;
    //[state,setState]   -->update the value
    const [purchased, setPurchased] = useState(false);
    const [Orderdoneornot, setOrderdoneornot] = useState('false');

    //Updating price based on discount
    const [amount,setAmount] = useState(props.price);

    function BuyCourse(discount){
      alert(`${props.name} purchased with ${discount} % discount`);
      setPurchased(true); 
      setAmount(amount-(amount*discount)/100);
      //console.log(purchased)
      setOrderdoneornot('true'); 
    }

    return (
        props.name && 
        <div className='card2'>
          <img src={props.image} alt={`${props.name} course`} />
          <h2>{props.name}</h2>
          <p>{amount}</p>
          <button onClick={(event) => {BuyCourse(20); console.log(event)}}>Buy Now</button>
          <p className="main">{purchased ? "Already Purchased" : "Not yet purchased"}</p>
          <p className="main">{Orderdoneornot}</p>
        </div>
    );
}

UseState.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    show: PropTypes.bool,
};



export default UseState;


