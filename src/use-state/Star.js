import {FaStar} from "react-icons/fa";

export function Star({selected=false, onSelect}){
    return <FaStar color = {selected ?"red":"gray"} onClick={onSelect}/>
}