import React from 'react';

import Card from '../components/Card';

function Home({ 
  items, 
  searchValue, 
  setSearchValue, 
  onChangeSearchInput, 
  onAddToFavorites, 
  onAddToCart, 
  isLoading 
}) {

  const renderItems = () => {
    const filteredItems = items.filter((item) => 
      item.title.toLowerCase().includes(searchValue)
    )
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
        <Card
          key={index} 
          onFavorite={(obj) => onAddToFavorites(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
          {...item}
        />
      ))
  }

    return (
        <>
        <div className="content p-40">
          <div className="d-flex align-center mb-40 align-center justify-between">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}` : 'Все кросовки'}</h1>
            <div className="search-block d-flex">
              <img src="/images/search.svg" alt="search"/>
              <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue}/>
              {searchValue && <img onClick={() => {setSearchValue('')}} className="cu-p clear" src="/images/cross-remove.svg" alt="Close" width={15} height={15}/>}
            </div>
          </div>

          <div className="d-flex justify-around flex-wrap">
            {renderItems()}
          </div>
          
        </div>
        </>
    )
}

export default Home;
