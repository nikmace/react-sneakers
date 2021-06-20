import React from 'react';

function Header() {
    return (
        <>
         <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img src="/images/logo-sneakers.png" width={40} height={40} alt="logo"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="headerText">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img src="/images/cart.svg" width={18} height={18} alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/images/user.svg" width={18} height={18} alt="user"/>
                </li>
            </ul>
        </header>   
        </>
    )
}

export default Header;
