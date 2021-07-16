import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({ 
  id, 
  title, 
  price, 
  imageUrl, 
  onFavorite, 
  onPlus, 
  favorited = false, 
  loading = false
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
      onPlus({id, title, price, imageUrl});
    }

    const onClickFavorite = () => {
      setIsFavorite(!isFavorite);
      onFavorite({id, title, price, imageUrl});
    }

    return (
        <>
          <div className={styles.card}>
            {
              loading ? (
                <ContentLoader 
                  speed={2}
                  width={155}
                  height={250}
                  viewBox="0 0 150 265"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                <rect x="0" y="-1" rx="10" ry="10" width="155" height="155" /> 
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
                <rect x="0" y="234" rx="5" ry="5" width="80" height="25" /> 
                <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
              ) : (
                <>
                  {onFavorite && <div className={styles.favorite}>
                    <img onClick={onClickFavorite} src={isFavorite ? "/images/heart-liked.svg" : "/images/heart-unliked.svg"} alt="heart"/>  
                  </div>}

                  <img src={imageUrl} alt="sneakers" width={133} height={112}/>
                  <h5>{title}</h5>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>Цена</span>
                      <b>{price} руб.</b>
                    </div>
              
                    {onPlus && <img 
                      className={styles.plus} 
                      onClick={onClickPlus} 
                      src={isItemAdded(id) ? "/images/btn-checked-alt.svg" : "/images/btn-add.svg"} 
                      alt="plus" 
                    />}
              
                  </div>
                </>
              )
            }
            
          </div>
        </>
    )
}

export default Card;
