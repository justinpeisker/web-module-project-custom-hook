import React, {useState} from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        if(localStorage.getItem(key)){
            return localStorage.getItem(key)
        }else{
            localStorage.setItem(key, initialValue);
            return(intialValue)
        }
        
    })
    const setStoredValue = (value) => {
        localStorage.setItem(key, value);
        setValue(value);
    }
    return[value, setStoredValue]
}

export default useLocalStorage;