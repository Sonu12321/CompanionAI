import exp from "constants";
import { useState,useEffect } from "react";

export function useDebounce <T>(value: T,delay ?:number): T {
    const [debouncevalue,setDebouncevalue] =  useState<T>(value)

    useEffect (()=>{
        const timer = setTimeout(()=>setDebouncevalue(value),delay || 500)
        return ()=>{
            clearTimeout(timer)
        }
    },[value,delay])
    return debouncevalue
}