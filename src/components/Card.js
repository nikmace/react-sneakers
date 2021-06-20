import React from 'react';

function Card() {
    return (
        <>
            <div className="card">
            <div className="favorite">
              <img src="/images/heart-unliked.svg" alt="heart"/>  
            </div>

            <img src="/images/sneakers/shoes-9.jpg" alt="sneakers" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/images/plus-icon.svg" alt="plus"  width={11} height={11}/>
              </button>
            </div>
          </div>
        </>
    )
}

export default Card;
