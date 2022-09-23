import React from "react";
import { useState } from "react";

// function Component

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => { // EventHandler
        setIsConfirmed(prevIsConfirmed => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인완료" : "확인하기"}
            </button>
    );
}

export default ConfirmButton;