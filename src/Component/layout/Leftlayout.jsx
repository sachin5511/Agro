import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../styles/leftlayout.css'

const Leftlayout = () => {

    const[hide,setHide] = useState("block");
    const[availabilityhide,setAvailabilityHide] = useState("block");
    const[pricehide,setPriceHide] = useState("block");
    
    const [showCheckbox, setShowCheckbox] = useState(false);

    const navigate = useNavigate();

    const handlerHide = () =>{
        if(hide==="none"){
            setHide("block")
        }else{
            setHide("none")
        }
    }
    const handleChange = (event) =>{
        const checked = event.target.checked;
        console.log(checked)
        if ((event.target.id === "fruits")) { 
            navigate("/shop/fruits");
            console.log("object")
            setShowCheckbox(true)
            console.log(showCheckbox)
        } else {
            navigate("/shop/vegetables");
        }
    }
    
  return (
    <>
    <div className="filter-container">
        <div className="filter-section">
            <div className='filter-option_hide'>
                <span className="filter-title">Product Type</span>
                {
                     hide === "block" ? <FaMinus onClick={handlerHide} />  : <FaPlus onClick={handlerHide} />
                }
            </div>
            <div style={{display:hide}}>
                <div className="filter-option">
                    <input type="checkbox" 
                        id="fruits" 
                        onChange={handleChange} 
                        checked={showCheckbox}
                        />
                    <label htmlFor="fruits">Fruits</label>
                </div>
                <div className="filter-option">
                    <input type="checkbox" id="greens"/>
                    <label htmlFor="greens">Seeds</label>
                </div>
                <div className="filter-option" >
                    <input type="checkbox" id="vegetables" onChange={handleChange} />
                    <label htmlFor="vegetables">Vegetables</label>
                </div>
            </div>
        </div>

        <div className="filter-section">
            <div className='filter-option_hide'>
                <span className="filter-title">Availability</span>
                {
                     availabilityhide === "block" ? <FaMinus onClick={()=>{availabilityhide==="none" ? setAvailabilityHide("block"): setAvailabilityHide("none")}} />  : <FaPlus onClick={()=>{availabilityhide==="none" ? setAvailabilityHide("block"): setAvailabilityHide("none")}} />
                }
            </div>
            <div style={{display:availabilityhide}} >
                <div className="filter-option">
                    <input type="checkbox" id="in-stock" name="" />
                    <label htmlFor="in-stock">In Stock</label>
                </div>
                <div className="filter-option">
                    <input type="checkbox" id="out-stock" />
                    <label htmlFor="out-stock">Out of Stock</label>
                </div>
            </div>
        </div>

        
        <div className="filter-section">
            <div className='filter-option_hide'>
                <span className="filter-title">Price</span>
                {
                     pricehide === "block" ? <FaMinus onClick={()=>{pricehide==="none" ? setPriceHide("block"):setPriceHide("none")}} />  : <FaPlus onClick={()=>{pricehide==="none" ? setPriceHide("block"): setPriceHide("none")}} />
                }
            </div>
            <div style={{display:pricehide}}>
                <div className="filter-option">
                    <input type="checkbox" id="in-stock" />
                    <label htmlFor="in-stock">100-200</label>
                </div>
                <div className="filter-option">
                    <input type="checkbox" id="out-stock" />
                    <label htmlFor="out-stock">200-300</label>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Leftlayout
