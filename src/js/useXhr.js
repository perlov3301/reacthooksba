import { useState, useEffect, useCallback } from 'react';

export const useXhr = (url) => {
    const [state, setState] = useState({data: "nodata", loading: true});
    var mytext = "";
    useEffect(() => {
        let args = Array.prototype.slice.call(arguments,3);
        let xhr = new XMLHttpRequest();
        console.log("unset: ", xhr.statusText);
        xhr.ontimeout = function () {
            console.error("the request for " + url + " time out:" + xhr.statusText);
        };
        xhr.onprogress = function () {console.log("loading:", xhr.statusText)} ;
        xhr.onload = function () {
            console.log(" useXhr onload=done xhr.status" + xhr.statusText);
            if (xhr.readyStatus === 4) {
                console.log(" useXhr response received xhr.status" + xhr.statusText);
                if (xhr.status === 200) { 
                    mytext = xhr.responseText;
                    console.log("xhr responseText: ", mytext);
                    console.log("xhr callback text: " + callback.text());
                    callback.apply(xhr, args);
                    setState({data: mytext, loading: false});
                 }
                else { console.error(xhr.statusText); }
            }
        };
        xhr.open ("GET", url, true);
        console.log("opened: ", xhr.statusText);
        xhr.timeout = 3000;
        xhr.send(null);
    }, [url]);
    return state;
};