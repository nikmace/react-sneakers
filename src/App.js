import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 align-center justify-between">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex justify-around flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    </div>
  );
}

export default App;
