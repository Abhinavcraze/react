import reactLogo from './assets/react.png';

// function Props(props) {
//     const{name = 'react-learning', 
//         price = 'free',
//         image = {reactLogo},
//         rating = '4.6'

//     } =props
//     return (
//         <div className="card2">
//             <img src={props.image} alt={props.name} />
//             <h3>{props.name} Learning</h3>
//             <p>{props.price}</p>
//         </div>
//     );
// }

// Props.defaultProps = {
//     image: reactLogo,
//     name: "react Leraning"
// };

function Props({ name="React", price = "$450", image = reactLogo ,rating= "4.4"}) {
    return (
        <div className="card2">
            <img src={image} alt={name} className="course-img" />
            <h3>{name} Props Learning</h3>
            <p>{price}</p>
            <span>{rating}</span>
        </div>
    );
}

export default Props;
