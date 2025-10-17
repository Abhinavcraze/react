import { useState } from 'react';
import MethodasPropsChild from './MethodasPropsChild'; 

function MethodasPropsParent() {
    const [message, setMessage] = useState("Waiting for a message from the child...");

    const handleChildMessage = (messageFromChild) => {
        console.log("Parent received message:", messageFromChild);
        setMessage(messageFromChild); 
    };

    return (
        <div style={{ border: '2px solid #0288d1', borderRadius: '8px', padding: '16px', margin: '10px 0' }}>
            <h3>I am the Parent Component (Method as Props Example)</h3>
            <p style={{ fontWeight: 'bold', color: '#d32f2f' }}>
                Current Message: "{message}"
            </p>
            <hr/>
            <MethodasPropsChild onButtonClick={handleChildMessage} />
        </div>
    );
}

export default MethodasPropsParent;