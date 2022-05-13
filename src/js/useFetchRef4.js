import { useState, useRef, useEffect } from 'react';

export const useFetch = (url) => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({data: null, loading: true});

    // console.log("useFetchRef4 state.data: " + state.data)
    useEffect(() => {
        // console.log("useFetchRef4 state: " + state)
        // is calling when component going to be unmount
        return () => {
            isCurrent.current = false;
        };
      }, []);
    
    useEffect(() => {
      setState((state) =>  ({data: state.data, loading:true}));
      fetch(url)
        .then(x => x.text())
        .then(y => {
            // console.log("useFetchRef4 y: " + y, "iscurrent.current: " + isCurrent);
            setTimeout(() => {
                if(!isCurrent.current) {
                    setState({data: y, loading: false});
                }
            }, 1000);
        });
        
    }, [url]);
    return state;
};