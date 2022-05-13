import React, {useState} from 'react';
import './jscss.css';

const UseSt3 = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);
    return (
        <fieldset>
            <legend>UseState 3: two indepence setCount's</legend>
            <div className='divrow'>
                <button className='button'
                    onClick={o => {
                        setCount2(curr=>curr+1)
                        setCount(curr => curr+1)}} > +
                </button>
                <span className='textspan'>count2:{count2}</span>&ensp;
                <span className='textspan'>count:{count}</span>
             
            </div>
        </fieldset>
    );
};

export default UseSt3;