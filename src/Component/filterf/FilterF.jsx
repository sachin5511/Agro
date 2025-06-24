import React, { createContext, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import Dropdown from 'react-bootstrap/Dropdown';

const FilterF = (props) => {
  const searchHandler = (e) => {
    props.searchHandler(e.target.value);
  };
  const lowtoHighHandler = (e) => {
    props.lowtoHighHandler(e);
  };

  const hightoLowhHandler = (e) => {
    props.hightoLowhHandler(e);
  };

  const arrival = (e) => {
    console.log('arrival');
  };

  return (
    <>
      <div className="border-t-2 border-b-2 border border-gray-300 flex flex-wrap items-center justify-between bg-white p-2 md:p-4">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
          <CiFilter />
          <span>Filter</span>
        </div>

        <div className=" flex items-center gap-4 w-full md:w-auto mr-10 md:mt-0">
          <div className="w-full sm:w-auto">
            <input
              onChange={searchHandler}
              type="text"
              placeholder="Search"
              className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-64"
            />
          </div>

          <div className="flex items-center gap-2 text-gray-600 w-full sm:w-auto">
            <span className="text-sm md:text-base">Sort by :</span>
            <Dropdown>
              <Dropdown.Toggle className="bg-white text-black border border-gray-300 px-3 py-1 rounded-md text-sm md:text-base">
                Featured
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-white shadow-lg rounded-md mt-1 w-40 sm:w-48 md:w-56">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={lowtoHighHandler}
                  className="px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                >
                  Price: Low to High
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={hightoLowhHandler}
                  className="px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                >
                  Price: High to Low
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  onClick={arrival}
                  className="px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                >
                  New Arrival
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterF;
