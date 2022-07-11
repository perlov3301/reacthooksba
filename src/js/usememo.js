import React, { useState, useMemo } from 'react';
import { useFetch } from './usefetchuselayout2';

function computeLongestWord(arr) {
    if (!arr) { return []; }
    console.log("computeLongestWord");
    let longestWord = "";
    JSON.parse(arr).forEach(sentence => 
        sentence.split(" ").forEach(word => {
            if(word.length > longestWord.length) {longestWord = word;}
        })
      );
    return longestWord;
}

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [n, setN] = useState(1);
    const {data} = useFetch(
        "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
      );
    const longestWord = useMemo(() => computeLongestWord(data),[
        data,
        computeLongestWord
      ]);
    return (
        <fieldset><legend>useMemo avoid unnecesary computing</legend>
          <div className='divrow'>
              <div>count {count}</div>
              <button onClick={()=> {setCount(count+1);setN(n+1);}}>
                  increment
              </button>
              <button onClick={()=>{setCount(count-1);setN(n+1);}}>
                  decrement
              </button>
          </div>
          <div>{n} time longest Word was written without computing:
                "{longestWord}"
          </div>
        </fieldset>
    );
};