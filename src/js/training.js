import React, { useState, useRef, useLayoutEffect } from 'react';
import { useForm } from './useform';
import {useFetch } from './trainingusefetch';
import { TrainingHello } from './traininghello';

export const Training = () => 
{
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName: ""});
    const [measures, setMeasure]  = useState({inputHeight: 0, inputWidth: 0});
    const inputRef = useRef();
    const inputtextRef = useRef();
    const inputHref = useRef();
    const inputWref = useRef();
    const sayhello = useRef(() => {
        console.log("training sayhello : hello");
        inputtextRef.current.value = "hello sent from button 'focus'";
});
    const [showHello, setShowHello] = useState(true);

    // useLayoutEffect(() => {
    //     console.log("training inputRef.current...Rect(): ", inputRef.current.getBoundingClientRect());
    //     inputHref.current.value = inputRef.current.getBoundingClientRect().height;
    //     inputWref.current.value = inputRef.current.getBoundingClientRect().width;
    // }, []);

    return (
        <fieldset> <legend>training last changes</legend>
            <div className='divrow'>
                <input name="email" value={values.email} placeholder="email"
                    onChange={handleChange} 
                    ref={inputRef} 
                    />
                <button onClick={() => { // console.log(inputRef.current);
                        inputRef.current.focus(); 
                        sayhello.current();
                    }} >focus on 'email'</button>
                <input name='textref' 
                  placeholder='text will be shown here'
                  style={{fontWeight: 'bold'}}
                  ref={inputtextRef} />
            </div>
            <div className='divrow' >
                'email input box measures:'
                <input name='inputHeight' value={measures.inputHeight} 
                ref={inputHref}
                readOnly={true} />
            <input name='inputWidth' value={measures.inputWidth} 
                readOnly={true} 
                ref={inputWref}/>
            </div>
           
            <div className='divrow'>
                <button onClick={() => setShowHello(!showHello)}>toggle Hello</button>
                { showHello && < TrainingHello /> }
            </div>
        </fieldset>
    );
};
