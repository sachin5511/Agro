import React, { useState } from 'react';
import FilterF from '../../../Component/filterf/FilterF';
import Leftlayout from '../../../Component/layout/Leftlayout';
import '../../../styles/vegetable.css';
import VegetableRl from './VegetableRl';
import '../../../styles/fruitsRl.css';

const Vegetable = () => {
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
      <div className="vegetable">
        <div className="vegetable_div">
          <div className="vegetable_img">
            <h1 className="centered-text">Fresh Vegetables</h1>
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
          <div className="vegetable-rl">
            <VegetableRl
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

export default Vegetable;
