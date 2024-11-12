import { useState, useEffect } from "react";
export function ExampleUseEffect(){

    const [winnerName, setWinnerName] = useState('WILL');
    const [admin, setAdmin] = useState(false);

    useEffect(()=>{
        console.log('use effect triigerred')
    }, [winnerName])

    useEffect(()=>{
        console.log('The user is ', (admin? 'admin': 'not admin'))
    }, [admin])
    return <div>

        Congratulations {winnerName}!

        <button onClick={()=> setWinnerName('BILL')}>Change Winner</button>
        <p>{admin? "logged in": "not logged in"}</p>
        <button onClick={()=> setAdmin(true)}>Log In</button>
    </div>
}