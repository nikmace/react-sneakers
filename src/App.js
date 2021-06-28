import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get('https://60d4399c61160900173ca948.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://60d4399c61160900173ca948.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://60d4399c61160900173ca948.mockapi.io/items');
        
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);


  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60d4399c61160900173ca948.mockapi.io/cart/${obj.id}`)
          .catch(err => console.error(err));
        setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://60d4399c61160900173ca948.mockapi.io/cart', obj)
          .catch(err => console.error(err));
        setCartItems((prev) => [...prev, obj]);
      }
      
    } catch (error) {
      alert('Could not add item to cart' + error.message);
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d4399c61160900173ca948.mockapi.io/cart/${id}`)
      .catch(err => console.error(err));
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://60d4399c61160900173ca948.mockapi.io/favorites/${obj.id}`)
        .catch(err => console.error(err));
        setFavorites((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://60d4399c61160900173ca948.mockapi.io/favorites', obj)
          .catch(err => console.error(err));
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Could not add to favorites: ' + error.message)
    }
  }


  return (
    <Router>
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
        
        <Header onClickCart={() => setCartOpened(true)}/>

        <Route path="/" exact>
          <Home 
            items={items}
            cartItems={cartItems} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorites={onAddToFavorites}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites">
          <Favorites items={favorites} onAddToFavorites={onAddToFavorites} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
