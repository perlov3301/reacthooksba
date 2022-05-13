import React, {useState} from 'react';
import './jscss.css';

const UseSt1 = () => {
    const [{count, count2, count3}, setCount] = useState({count: 0, count2: 20, count3: 20});
    return (
        <fieldset>
            <legend>useState 2:  one setCount for object of three counts</legend>
            <div className='divrow'>
                <span className='textspan'>invariable:{count3}</span>&ensp;
                <span className='textspan'>invariable2:{count2}</span>&ensp;
                <span className='textspan'>count:{count}</span>
              <button className='button'
                onClick={o => {
                  setCount(curr => 
                   ( {...curr, count: curr.count+1}))
                  }} > count+
              </button>
            </div>
        </fieldset>
    );
};

export default UseSt1;