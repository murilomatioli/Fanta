import React from "react";
import fantaLogo from '../assets/fanta-logo.png'

const Header = () => {
    return(
        <>
            <div className="flex p-4 w-100% mx-auto top-0 items-center md:space-x-36 lg:space-x-52 xl:space-x-[500px] space-x-8 justify-center">
                <img src={fantaLogo} className="h-16"></img>
                <ul className="flex space-x-6 font-medium text-center items-center text-gray-200 text-lg">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Produtos</li>
                    <li className="hover:underline cursor-pointer w-24">Sobre nós</li>
                    <li className="hover:underline cursor-pointer">Prêmios</li>
                </ul>
            </div>
        </>
    )
}

export default Header