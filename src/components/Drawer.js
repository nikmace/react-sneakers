import React from 'react';
import axios from 'axios';

import Info from './Info';
import AppContext from '../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, items, onRemove }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);

            const {data} = await axios.post('https://60d4399c61160900173ca948.mockapi.io/orders', {items: cartItems});

            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                console.log(item)
                await axios.delete('https://60d4399c61160900173ca948.mockapi.io/cart/' + item.id);
                await delay(1000);
            }

            setIsLoading(false);
        } catch (error) {
            alert('Could not send items to orders');
        }
    }

    return (
        <>
            <div className="overlay">
                <div className="drawer">
                    <h2 className="mb-30 d-flex justify-between align-center">
                        Корзина
                        <img onClick={onClose} className="cu-p" src="/images/cross-remove.svg" alt="Close" width={20} height={20}/>
                    </h2>

                    {
                        items.length > 0 
                        ? (
                            <>
                            <div className="items">
                            {items.map((item) => (
                                <div key={item.id} className="cartItem d-flex align-center mb-20">
                                    <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cartItemImg"></div>
                                    <div className="mr-20 flex">
                                    <p className="mb-5">{item.title}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(item.id)} className="removeBtn" src="/images/btn-remove.svg" alt="remove" />
                                </div>
                            ))}
                            </div>
                                <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого:</span>
                                        <div>
        
                                        </div>
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li>
                                    <span>Налог 5%</span>
                                    <div>
        
                                    </div>
                                    <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                                  Оформить заказ 
                                    <img src="/images/arrow.svg" alt="arrow"/>
                                </button>
                          </div>
                          </>
                        ) : (
                            <Info 
                                title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая" }
                                description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан курьерской службе` :"Добавьте хотя бы одну пару кросовок, чтобы сделать заказ"}
                                image={isOrderComplete ? "/images/order.svg" : "/images/empty-cart.jpg" }
                            />
                        )
                    }
                    

                  
                </div>
            </div>

        </>
    )
}

export default Drawer;
