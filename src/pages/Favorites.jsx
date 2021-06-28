import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

import AppContext from '../context';

function Favorites() {
  const {favorites, onAddToFavorites} = React.useContext(AppContext);
    return (
        <>
        <div className="content p-40">
          <div className="d-flex align-center mb-40 ">
            <Link to="/">
              <img className="mr-20" src="/images/go-back-arrow.svg" /> 
            </Link>
            <h1>Мои закладки</h1>
          </div>

          <div className="d-flex justify-around flex-wrap">
            {favorites.map((item, index) => (
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
