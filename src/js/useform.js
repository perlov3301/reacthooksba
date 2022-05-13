import { useState } from "react";

// custom Hook
export const useForm = (initialvalues) => {
    const [values, setValues] = useState(initialvalues);
// we can return [values] only
    return [values, e => {
        setValues({...values,  [e.target.name]:e.target.value})
    }];
};
