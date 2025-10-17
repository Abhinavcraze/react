import PropTypes from 'prop-types';


function MethodasPropsChild({ onButtonClick }) {
    const messageToSend = "Hello from the Child Component!";

    return (
        <div className="card2" style={{ backgroundColor: '#e0f7fa' }}>
            <h4>I am the Child Component</h4>
            <p>Clicking the button below will send a message up to the parent.</p>
            <button onClick={() => onButtonClick(messageToSend)}>
                Send Message to Parent
            </button>
        </div>
    );
}

MethodasPropsChild.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
};

export default MethodasPropsChild;