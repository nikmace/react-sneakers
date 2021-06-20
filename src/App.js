
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
        <img src="/images/logo-sneakers.png" width={40} height={40} alt="logo"/>
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="headerText">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/images/cart.svg" width={18} height={18} alt="cart"/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img src="/images/user.svg" width={18} height={18} alt="user"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>

        <div className="d-flex justify-around flex-wrap">
          <div className="card">
            <img src="/images/sneakers/shoes-2.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
            <img src="/images/sneakers/shoes-3.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
            <img src="/images/sneakers/shoes-4.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
            <img src="/images/sneakers/shoes-5.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
            <img src="/images/sneakers/shoes-6.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
            <img src="/images/sneakers/shoes-7.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
            <img src="/images/sneakers/shoes-8.jpg" alt="sneakers" width={133} height={112}/>
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

          <div className="card">
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
        </div>
        
      </div>
    </div>
  );
}

export default App;
