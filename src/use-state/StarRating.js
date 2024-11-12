import { useState } from "react";
import { Star } from "./Star"


export function StarRating({totalStars = 5}){
    const [totalStarRating, setTotalStarRating] = useState(0);
    const createArray = (length) => [...Array(length)];

    return <>
    {createArray(5).map((value, i) =>( <Star key={i} selected={totalStarRating>i} onSelect={()=> setTotalStarRating(i+1)}/>))}
        <p>Selected stars {totalStarRating} out of {totalStars}</p>
    </>;
}