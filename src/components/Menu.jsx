import React from 'react';
import imagemAvatar from "../html-css-template/imagens/avatar.png";
import imagemLogoVerde from "../html-css-template/imagens/logo-verde.png";

function Menu() {
    return (
        <>
            <nav>
                <div className="container">
                    <img src={imagemLogoVerde} alt="Logo" className="logo" />
                    <img src={imagemAvatar} alt="Avatar" className="avatar" />
                </div>
            </nav>
        </>
    )
}
export default Menu;