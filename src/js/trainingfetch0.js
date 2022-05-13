import {useState, useRef, useEffect} from 'react';

export const useFetch = (url) => {
    const isCurrent = useRef(true);
    const [state, setState] =  useState({data: null, loading: true});
    // console.log("trainingusefetch const isCurrent.current: " + isCurrent.current);
    useEffect(() => {
      // console.log("trainingusefetch useeffect before return isCurrent.current: " + isCurrent.current);
        return () => {
          // console.log("trainingusefetch useeffect return isCurrent.current: " + isCurrent.current);
                  // calling when component going be unmount
            isCurrent.current = false;
        }; // cleanup function
    }, []);

    useEffect(() => {
        setState((state) => ({ data: state.data, loading: true }));
        console.log("trainingusefetch useeffect before fetch isCurrent.current: " + isCurrent.current);
        fetch(url)
          .then(x => x.text())
          .then(y => {
              // console.log("trainingusefetch y: " + y);
              // console.log("trainingusefetch useeffect fetch isCurrent.current: " + isCurrent.current);
            //  setState({data: y, loading: false});
              setTimeout(() => {
                // console.log("trainingusefetch setTimeout isCurrent.current: " + isCurrent.current);
                  if(isCurrent.current) {
                    setState({data: y, loading: false});
                  }
                }, 1000);
          });
    }, [url]);
   return state;
};
