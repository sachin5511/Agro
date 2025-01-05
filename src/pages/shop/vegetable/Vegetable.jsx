import React from 'react'
import FilterF from '../../../Component/filterf/FilterF'
import Leftlayout from '../../../Component/layout/Leftlayout';
import '../../../styles/vegetable.css'
import VegetableRl from './VegetableRl';
import '../../../styles/fruitsRl.css'

const Vegetable = () => {
  return (
    <>
         <div className='vegetable'>
           <div className='vegetable_div'>
                <div className='vegetable_img'>
                    <h1 className="centered-text">Fresh Vegetables</h1>
                </div>
           </div>
           <FilterF/>
           <div className="containerc">
                <div className="left-layout">
                    <Leftlayout />
                </div>
                <div className="vegetable-rl">
                  <VegetableRl/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Vegetable
