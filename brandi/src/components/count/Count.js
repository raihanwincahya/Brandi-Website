import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { Button } from "react-bootstrap";

const Count = () => {
    
    const [counter, setCounter] = useState(1)

    const handleIncrementClick = () => {
        setCounter(counter + 1)
    }

    const handleDecrementClick = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="align-items-center w-50 d-flex justify-content-between">
            <Button variant="light" size='sm' onClick={handleDecrementClick}><IoRemove /></Button>
                <div className='fs-5 text-center'>{counter}</div>
            <Button variant="light" size='sm' onClick={handleIncrementClick}><IoAdd /></Button>
        </div>
    )
    
}

export default Count;