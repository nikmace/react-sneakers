import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header({ onClickCart }) {
    const { totalPrice } = useCart();

    return (
        <>
         <header className="d-flex justify-between align-center">
            <Link to="/">
            <div className="d-flex align-center">
                <img src="/images/logo-sneakers.png" width={40} height={40} alt="logo"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="headerText">Магазин лучших кросовок</p>
                </div>
            </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={onClickCart}>
                    <img src="/images/cart.svg" width={18} height={18} alt="cart"/>
                    <span>{totalPrice} руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img src="/images/favorite.svg" width={18} height={18} alt="favorites"/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img src="/images/user.svg" width={18} height={18} alt="user"/>
                    </Link>
                </li>
            </ul>
        </header>   
        </>
    )
}

export default Header;
