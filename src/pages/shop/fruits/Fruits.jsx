import React, { useState } from 'react';
import '../../../styles/fruits.css';
import Leftlayout from '../../../Component/layout/Leftlayout';
import FruitsRl from './rightlayout/FruitsRl';
import FilterF from '../../../Component/filterf/FilterF';

const Fruits = () => {
  const [ltohfilteredData, setFilteredData] = useState(null);

  const [htolfilteredData, setHToLFilteredData] = useState(null);
  const [searchItemData, setSearchItemData] = useState('');

  //search data
  const searchHandler = (e) => {
    setSearchItemData(e);
  };
  //find data low to high
  const lowtoHighHandler = (e) => {
    setFilteredData('lowtohigh');
    setHToLFilteredData(null);
  };

  //find data high to low
  const hightoLowhHandler = (e) => {
    setHToLFilteredData('hightolow');
    setFilteredData(null);
  };

  const arrival = (e) => {
    // console.log("arrival")
  };
  return (
    <>
      <div className="fruits">
        <div className="fruits_div">
          <div className="fruits_img">
            <h1 className="centered-text ">Fresh Fruits</h1>
          </div>
        </div>
        <FilterF
          lowtoHighHandler={lowtoHighHandler}
          hightoLowhHandler={hightoLowhHandler}
          searchHandler={searchHandler}
        />
        <div className="containerc">
          <div className="left-layout">
            <Leftlayout />
          </div>
          <div className="fruits-rl">
            <FruitsRl
              lowtoHighHandler={ltohfilteredData}
              hightoLowHandler={htolfilteredData}
              searchItemData={searchItemData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fruits;
