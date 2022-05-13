import Reacg, { useEffect, useState, useRef } from 'react';
import { useForm } from './useform';
import {useFetch } from './useFetch';
import { Helloref3 } from './Helloref3';

export const Useref3countRen = () => 
{
    const [values, handleChange]  = useForm({
        email: "",
        password: "",
        firstName: ""
    });
    const [count, setCount] = useState(() => 
       { 
           let initcount = JSON.parse(localStorage.getItem("count"));
           if (initcount) {return initcount;}
           else { return 0; }
       }
    );
const {data, loading }= useFetch(`http://numbersapi.com/${count}/trivia`);
const inputRef = useRef();
const [showHello, setShowHello] = useState(true);

useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
}, [count]);

return (
    <fieldset> <legend>Useref3countRen count ouf renderings with createRoot=2</legend>
        {/* <div>{!data ? "loading..." : data} </div> */}
        <input name='mydata' placeholder='await to data'
          value={!data ? "loading" : data}
          style={{width:'90%'}} readOnly />
        <div className='divrow'>
            <button onClick={() => setCount(c => c -1)} > decrement</button>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)} >increment</button>
        </div>
        <div className='divrow'>
            <input name="email" value={values.email} placeholder="email"
                onChange={handleChange} 
                ref={inputRef} />
            <button onClick={() => { // console.log(inputRef.current);
                    inputRef.current.focus(); 
                }} >focus on 'email'</button>
        </div>
        <input name='firstName' value={values.firstName} placeholder="firstName"
            onChange={handleChange} />
        <input name='password' value={values.password} placeholder="password"
            onChange={handleChange} type="password" />
        <div className='divrow'>
            <button onClick={() => setShowHello(!showHello)}>toggle Hello</button>
            { showHello && < Helloref3 /> }
        </div>
    </fieldset>
);
};
