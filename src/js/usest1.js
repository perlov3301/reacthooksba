import React, {useState} from 'react';
import './jscss.css';

const UseSt1 = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);
    return (
        <fieldset>
            <legend>useState 1: two setCount's</legend>
            <div className='divrow'>
                <button className='button'
                    onClick={o => setCount2(c1=>c1+1)} > count2+
                </button>
                <span className='textspan'>count2:{count2}</span>&ensp;
                <span className='textspan'>count:{count}</span>
              <button className='button'
                onClick={o => setCount(c1 => c1+1)} > count+
              </button>
            </div>
        </fieldset>
    );
};

export default UseSt1;