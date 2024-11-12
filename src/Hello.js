import { useState } from "react";

export function Hello(props){
    const [checked, setChecked] = useState(false);
   
   return(
    <div>
       <input type="checkbox" value={checked} onChange={()=> setChecked(!checked)}/>
       <p>{(checked?'CHECKED': 'NOT CHECKED')}</p>
    </div>
   )
}