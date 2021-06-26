import React from 'react';
import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://60d4399c61160900173ca948.mockapi.io/items')
      .then((data) => setItems(data.data))
      .catch((err) => {
        console.error(err);
      })
  }, []);


  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 align-center justify-between">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex justify-around flex-wrap">
          {items.map((item) => (
            <Card 
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl} 
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;
