import React, { useState, useRef } from 'react';
import { useForm } from './useform';

export const TextRef = () => 
{
    const [values, handleChange]  = useForm({
        email: "",
        password: "",
        firstName: ""
      });
    const inputRef = useRef();
    const inputtextRef = useRef();
    const sayhello = useRef(() => {
        console.log("training sayhello : hello");
        inputtextRef.current.value = "hello from button 'focus'";
});

    return (
        <fieldset> <legend>useref5 click on referenced button make focus to one and send text to another referenced input</legend>
            <div className='divrow'>
                <input name="email" value={values.email} placeholder="email field"
                    onChange={handleChange} 
                    ref={inputRef} 
                    />
                <button style={{width: '22rem'}}
                    onClick={() => { // console.log(inputRef.current);
                        inputRef.current.focus(); 
                        sayhello.current();
                    }} >focus on 'email field'  and 'hello' at 'text field' </button>
                <input name='textref' style={{fontWeight: 'bold'}}
                  placeholder='text field'
                  ref={inputtextRef} />
            </div>
        </fieldset>
    );
};
