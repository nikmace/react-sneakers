import React from 'react';

import styles from './Card.module.scss';

function Card({ title, price, imageUrl, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      onPlus({title, price, imageUrl});
      setIsAdded(!isAdded);
    }

    return (
        <>
          <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/images/heart-unliked.svg" alt="heart"/>  
            </div>

            <img src={imageUrl} alt="sneakers" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>{price} руб.</b>
              </div>
              
                <img 
                  className={styles.plus} 
                  onClick={onClickPlus} 
                  src={isAdded ? "/images/btn-checked-alt.svg" : "/images/btn-add.svg"} 
                  alt="plus" 
                />
              
            </div>
          </div>
        </>
    )
}

export default Card;
