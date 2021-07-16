import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);
          const { data } = await axios.get('https://60d4399c61160900173ca948.mockapi.io/orders');
          setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
          setIsLoading(false);
        } catch (error) {
          alert('Could not display your orders')
        }
      })()

    }, []);

    return (
        <>
        <div className="content p-40">
          <div className="d-flex align-center mb-40 ">
            <Link to="/">
              <img className="mr-20" src="/images/go-back-arrow.svg" alt="go back"/> 
            </Link>
            <h1>Мои заказы</h1>
          </div>

          <div className="d-flex justify-around flex-wrap">
            {(isLoading ? [Array(8)] : orders).map((item, index) => (
              <Card
              key={index} 
              loading={isLoading}
              {...item}
              />
            ))}
          </div>
          
        </div>
        </>
    )
}

export default Orders;
