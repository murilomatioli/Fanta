import React, { useEffect, useState } from "react";
import fantaOriginal from '../assets/original.png';
import fantas from "../data/data";
import Header
 from "./Header";
const Main = () => {
    const [fanta, setFanta] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [color, setColor] = useState(undefined)

    useEffect(() => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 500);
        setColor(fantas[fanta].color)

    }, [fanta]); 

    const selectFanta = (e) => {
        setFanta(e - 1); 
    };

    return (
        <>
        <div className={`bg-orange-500 h-screen`} style={{ backgroundColor: color, transition: "background-color: 0.5 ease"}}>
        <Header/>
            <div className="flex p-4 w-2/4 mx-auto top-0">
                <div className="grid grid-cols-2 gap-80 mt-12">
                    <div className="grid grid-cols-1 space-y-12">
                        <div className="grid grid-cols-1 space-y-4 h-56 w-fit">
                            <h1 className="text-6xl">{fantas[0].nome}</h1>
                            <p className="w-96">{fantas[0].desc}</p>
                            <button className="bg-blue-500 w-fit p-4 px-8 rounded-lg shadow-lg">
                                EXPERIMENTE JÁ!
                            </button>
                        </div>
                        <p>Experimente também:</p>
                        <ul className="flex items-center space-x-8 w-fit h-fit">
                            {fantas.map((fantaItem) => (
                                <li key={fantaItem.id} onClick={() => selectFanta(fantaItem.id)} className="w-28 hover:scale-[1.1] cursor-pointer transition">
                                    <img src={fantaItem.img} alt={fantaItem.nome} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <span>
                        <img
                            src={fantas[fanta].img}
                            alt={fantas[fanta].nome}
                            className={`cursor-pointer w-[200px] transition-all ${animate ? "animate-slide-left" : ""}`}
                        />
                    </span>
                </div>
            </div>
        </div>
    </>
    );
};

export default Main;
