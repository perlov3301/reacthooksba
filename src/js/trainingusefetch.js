import { useEffect, useState, useRef } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });
  // console.log("trainingusefetch 1 isCurrent.current: " , isCurrent.current);
  useEffect(() => {
    // console.log("trainingusefetch 2 isCurrent.current: " , isCurrent.current);
    return () => {
      // called when the component is going to unmount
      // console.log("trainingusefetch 3 isCurrent.current: " , isCurrent.current);
      // isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    // console.log("trainingusefetch 4 isCurrent.current: " , isCurrent.current);
     setState(state => ({ data: state.data, loading: true }));
    //  console.log("trainingusefetch 5 isCurrent.current: " , isCurrent.current);
     fetch(url)
       .then(x => x.text())
       .then(y => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
       });
  }, [url, setState]) ;

  return state;
} ;