import React, { useEffect, useState } from "react";
import fantas from "../../data/data";

const FantaSelector = ({ enviarDados }) => {

    const [fanta, setFanta] = useState(0);
    const [color, setColor] = useState(null)

    useEffect(() => {
        setColor(fantas[fanta].color)
    }, [fanta]); 

    useEffect(() => {
        if(color){
            enviarDados({ cor: color, id: fanta })
        }
    }, [color, fanta, enviarDados])

    const selectFanta = (e) => {
        setFanta(e - 1); 
    };
    return(
        <>
        <ul className="flex items-center w-[100%] justify-center gap-8">
            {fantas.map((fantaItem) => (
                <li key={fantaItem.id} onClick={() => selectFanta(fantaItem.id)} className="w-24 drop-shadow-[10px_10px_40px_rgba(0,40,10,0.40)] hover:scale-[1.1] cursor-pointer transition">
                    <img src={fantaItem.img} alt={fantaItem.nome} />
                </li>
                ))}
        </ul>
        </>
    )
}

export default FantaSelector