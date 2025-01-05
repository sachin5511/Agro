import React from 'react'
import { CiFilter } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';

const FilterF = (props) => {

    const searchHandler = (e)=>{
        props.searchHandler(e.target.value)
    }

    const lowtoHighHandler = (e)=>{
        props.lowtoHighHandler(e)
    }

    const hightoLowhHandler = (e)=>{
        props.hightoLowhHandler(e)
    }

    const arrival = (e)=>{
        console.log("arrival")
    }



  return (
    <>
        <div className='filter'>
            <div>
                <CiFilter />
                <span>filter</span>
            </div>
            <div className='filter_right'>
                <div>
                    <input onChange={searchHandler} type="text" name="" id=""  placeholder='search'/>
                </div>
                <div className='filter_dropdown'> 
                    <span>sort by :</span>
                    <Dropdown >
                        <Dropdown.Toggle style={{backgroundColor:"white", color:"black", border:"none"}}>
                            Featured
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='Dropdown.Menu'>
                            <Dropdown.Item href="#/action-1" onClick={lowtoHighHandler}>Price : low to high</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={hightoLowhHandler}>Price : high to low</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={arrival}>Now Arrival</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>   
    </>
  )
}

export default FilterF
