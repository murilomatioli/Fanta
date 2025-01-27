import React from "react";
import fantaLogo from '../assets/fanta-logo.png'

const Header = () => {
    return(
        <>
            <div className="flex p-4 w-2/4 mx-auto top-0 items-center space-x-72 justify-center">
                <img src={fantaLogo} className="h-16"></img>
                <ul className="flex space-x-6 font-medium text-gray-200 text-lg">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Produtos</li>
                    <li className="hover:underline cursor-pointer">Sobre nós</li>
                    <li className="hover:underline cursor-pointer">Prêmios</li>
                </ul>
            </div>
        </>
    )
}

export default Header