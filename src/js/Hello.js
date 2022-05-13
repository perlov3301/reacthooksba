import React from 'react';
export const Hello = (props) => {
    React.useEffect(() => {
        // console.log(' Hello: render');
        // cleaner function
        return () => { 
            // console.log('Hello: unmount'); 
          };
    },[]);

    return (
        <fieldset><legend>Hello</legend>
          <div className='divrow'> <span>{props.app}</span>
              {props.toggle &&
               (<b>liliya 052 371 83 90  elionora 054 495 61 92 daniel 052 372 9187</b>)}
              </div>
        </fieldset>
    );
};
