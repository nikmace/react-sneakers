import React from 'react';

function Drawer({ onClose, items, onRemove }) {
    console.log(items)
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
                              <button className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt="arrow"/></button>
                          </div>
                          </>
                        ) : (
                            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                                <img className="mb-20" width={120} height={120} src="/images/empty-cart.jpg" alt="Box" />
                                <h2>Корзина пустая</h2>
                                <p className="opacity-6">Добавьте хотя бы одну пару кросовок, чтобы сделать заказ.</p>
                            </div>
                        )
                    }
                    

                  
                </div>
            </div>

        </>
    )
}

export default Drawer;
