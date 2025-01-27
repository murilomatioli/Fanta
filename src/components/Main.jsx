import React, { useEffect, useState } from "react";
import fantas from "../data/data";
import Header from "./Header";
import Try from "./mainComponents/Try";
import FantaSelector from "./mainComponents/FantaSelector";

const Main = () => {
    const [fanta, setFanta] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [color, setColor] = useState(undefined)
    const [hoverAnimation, setHoverAnimation] = useState(false)

    useEffect(() => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 400);
        setColor(fantas[fanta].color)

    }, [fanta]); 

    const SeletorDados = (dados) => {
        setColor(dados.cor)
        setFanta(dados.id)
    }

    useEffect(() => {
        setHoverAnimation(true);
        setTimeout(() => {
            setHoverAnimation(false)
        }, 400);
    }, [hoverAnimation])

    return (
        <>
        <div className={`bg-orange-500 min-h-screen h-full`} style={{ backgroundColor: color, transition: "background-color: 0.5 ease"}}>
        <Header/>
            <div className="flex p-4 w-100% mx-auto justify-center md:w-[90%] top-0">
                <div className="grid grid-cols-1 md:grid-cols-2 relative gap-8 md:gap-20 mt-12 flex">
                    <div className="w-fit">
                        <div className="grid grid-cols-1 gap-12 h-fit w-full">
                            <h1 className="text-[5rem] font-bold text-white drop-shadow-xl w-fit md:w-40 h-fit leading-[80px]">{fantas[fanta].nome}</h1>
                            <p className="w-96 max-h-[40px] drop-shadow-2xl font-bold text-gray-100 transition">{fantas[fanta].desc}</p>
                            <button className={`bg-indigo-800 ${hoverAnimation  ? "animate-shake" : ""} hover:animate-shake w-fit text-xl mx-auto sm:mx-none mb-8  text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:brightness-90`}>
                                Comprar agora!
                            </button>
                        </div>
                        <Try />
                        <FantaSelector enviarDados={SeletorDados}/>
                    </div>
                    <span className="flex mx-auto md:absolute md:bottom-0 md:-translate-y-[25%] lg:bottom-0 right-0 h-fit w-fit justify-center">
                        <img
                            src={fantas[fanta].img}
                            alt={fantas[fanta].nome}
                            className={`cursor-pointer md:w-60 lg:w-72 w-40 transition-all drop-shadow-[50px_10px_40px_rgba(0,0,0,0.40)] ${animate ? "animate-slide-left" : ""}`}
                        />
                    </span>
                </div>
            </div>
        </div>
    </>
    );
};

export default Main;
