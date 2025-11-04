import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"


export default function useCustomHook(){
    const navigate = useNavigate();
    const location = useLocation();
    
    // 구조분해 할당
    const [ string, setString ] = useState("");
    const [ number, setNumber ] = useState(0);
    const [ bool, setBool ] = useState(false);
    const [ boolB, setBoolB ] = useState(false);
    const [ array,setArray ] = useState([]);
    
    return{
        navigate,
        location,
        string,
        setString,
        bool,
        setBool,
        boolB, 
        setBoolB,
        array,
        setArray,
        number, 
        setNumber
    }
}