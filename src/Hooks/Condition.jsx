import PropTypes from "prop-types";

function Condition({
  name = "React",
  price = "Free",
  image,
  rating = "N/A",
  show = false,
  onBuy,
  onDelete,
  purchased,
}) {
  if (!show) {
    return <div className="card2">Course not Available</div>;
  }

  const displayName = name && name.trim() !== "" ? name : "React";

  return (
    <div className="card2">
      {image && <img src={image} alt={`${displayName} course`} />}
      <h3>{displayName} Learning</h3>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      <p>Purchased: {purchased ? "True" : "False"}</p>
      <button onClick={onBuy}>Buy Now</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

Condition.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  show: PropTypes.bool,
  onBuy: PropTypes.func,
  onDelete: PropTypes.func,
  purchased: PropTypes.bool,
};

Condition.defaultProps = {
  name: "React",
  price: "Free",
  rating: "N/A",
  show: false,
  purchased: false,
};

export default Condition;
