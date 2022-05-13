import {useState, useEffect} from 'react';
export const useFetch = (url) => {
    const [state, setState] =  useState({data: null, loading: true});
    useEffect(() => {
        setState((state) => ({ data: state.data, loading: true }));
        fetch(url)
          .then(x => x.text())
          .then(y => {
            //   console.log("useFetchunmount y: " + y);
               setState({data: y, loading: false})
          })
    }, [url]);
   return state;
};
/**
 try {
     const response = await Promise.race([
         fetch(request),
         new Promise((_, reject) => setTimeout( 
             () => reject(new Error('Timeout')), 10000)),
     ]);
 } catch (e) {
     if (error.message === 'Timeout' 
       || error.message === 'Network request failed') {  } // retry
     else {  trow e; } // rethrow other unexpected errors
 }
 */
/**
 function loadFile(url, timeout, callback) {
     var args Array.prototype.slice.call(arguments, 3);
     var xhr = new XMLHttpRequest();
     xhr.ontimeout = function () { 
         console.error("the request for " + url + "timed out") };
     xhr.onload = function () {
         if (xhr.readyStatus === 4) {  
             if (xhr.status === 200) { callback.apply(xhr, args);}
             else {console.error(xhr.statusText);}
          }
     };
     xhr.open ("GET", url, true);
     xhr.timeout = timeout;
     xhr.send(null);
 }
 
 */
/**
  useEffect((url) => {
      async function fetchData() {
          const response = await fetch(url).then(x => x.text).then(y => {data: y, loading: false});
         ? return response; ?
      }
      fetchData();
  }, [url]);
 */
/**
  useEffect((url) => {
      const request = async (url) => {
          const x = await fetch(url);
          const y = await x.text();
          setData({data: y, loading: false});
          return y;
      };
  }, [url]);
 */