import React from 'react';
import Card from '../components/Card';

function Favorites({ items, onAddToFavorites }) {
    return (
        <>
        <div className="content p-40">
          <div className="d-flex align-center mb-40 align-center justify-between">
            <h1>Мои закладки</h1>
          </div>

          <div className="d-flex justify-around flex-wrap">
            {items.map((item, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorites}
                {...item}
            />
            ))}
          </div>
          
        </div>
        </>
    )
}

export default Favorites;
