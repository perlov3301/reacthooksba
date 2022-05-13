import React, { useState, useRef } from 'react';
import { useForm } from './useform';
import { HelloUseref4 } from './Hellouseref4';

export const Useref4 = () => {
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName: ""
    });
    const inputRef = useRef();
    const [showHello, setShowHello] = useState(true);

    return (
        <fieldset>
            <legend>
                useref4afterunmount fetch after Timeout while Hello was unmounting (toggled)
            </legend>
            <div className='divrow'>
                <button onClick={() => setShowHello(!showHello)}>
                    toggle at Hello
                </button>
                {showHello && < HelloUseref4/> }
            </div>
        </fieldset>
    );
};
