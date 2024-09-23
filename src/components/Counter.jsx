import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const plus = () => {
        if(counter < 10) {
        setCounter(counter + 1);
    }
    };
    const minus = () => {
        if(counter > -5) 
        setCounter(counter - 1);
    }

    

    return (
        <div>
            <div>Қазырғы сан: {counter}</div>
            <button onClick={minus}>Алу -</button>
            <button onClick={plus}>Қосу +</button>
        </div>
    );
};

export default Counter;
