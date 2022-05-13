import React, { useState, useRef, useLayoutEffect} from 'react';
import { useForm } from './useform';

export const UseLayout1Measures = () => {
    const [values, handleChange] = useForm({email:""});
    const [measures, setMeasure] = useState({inputHeight: 0, inputWidth: 0});
    const inputRef = useRef();
    const inputtextRef = useRef();
    const inputHref = useRef();
    const inputWref = useRef();
    const sayHello = useRef(() => {
        // console.log("uselayout1measure says 'hello'");
        inputtextRef.current.value = "hello sent by button";
    });
    useLayoutEffect(() => {
        // console.log("training inputRef.current...Rect(): ", inputRef.current.getBoundingClientRect());
        inputHref.current.value = inputRef.current.getBoundingClientRect().height;
        inputWref.current.value = inputRef.current.getBoundingClientRect().width;
    }, []);

    return (
        <fieldset><legend>useLayout1measures</legend>
           <div className='divrow'>
                <input name="email" value={values.email} placeholder="email"
                    onChange={handleChange} 
                    ref={inputRef} 
                    />
                <button onClick={() => { // console.log(inputRef.current);
                        inputRef.current.focus(); 
                        sayHello.current();
                    }} >focus on 'email'</button>
                <input name='textref' 
                  placeholder='text will be shown here'
                  style={{fontWeight: 'bold'}}
                  ref={inputtextRef} />
            </div>
            <input name='inputHeight' value={measures.inputHeight} 
                ref={inputHref}
                readOnly={true} />
            <input name='inputWidth' value={measures.inputWidth} 
                readOnly={true} 
                ref={inputWref}/>
        </fieldset>
    );
} ;