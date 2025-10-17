import PropTypes from 'prop-types';

function MethodasProps(props) {
    const { greetHandler } = props;

    return (
        <div className="card2">
            <h3>Child Component</h3>
            <p>This button will trigger a function in the Parent Component.</p>

            <button onClick={() => greetHandler('Child Component')}>
                Greet Parent
            </button>
        </div>
    );
}

// It's good practice to define prop types to ensure the correct props are passed.
MethodasProps.propTypes = {
    greetHandler: PropTypes.func.isRequired,
};

export default MethodasProps;