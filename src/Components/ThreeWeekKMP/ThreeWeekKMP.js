import React, { useState } from 'react'
import Footer from '../Footer/Footer';
// import Footer from '../../Footer/Footer';

import './ThreeWeekKMP.css';

export default function ThreeWeekKMP() {
  const [data,setData] = useState(0);
  const [isChecked,setChecked] = useState(false);

  const handleClick = ()=>{
    
    setData(data+1980);
  }
  const handleClick2 = ()=>{
    setData(data+1980);
  }
  const handleClick3 = ()=>{
    setData(data+1980);
  }
  console.log("data",data)
  return (
    <div>

      <div className='lossplan_TRKMP'>
        <div className='box_TRKMP'>

        </div>
      </div>

      <div>
        <div>
          <div id="pro_details" className="open">
            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0148-550x515.jpg" />
            <div id="form_submit">
              <p>₹0.00</p>
              <p>Starting from 1980 /-</p>
              <form >
                <p>Meal Preference</p>
                <p>
                  <input type="checkbox" />  Non-Veg
                </p>
                <p>
                <input type="checkbox" /> Veg
                </p>
                
              </form>
              <br />
              <form id="choice">
                <p>Choice</p>
                <p><input type="checkbox" value={"&nbsp; Breakfast(+₹1,980.00)"} onClick={handleClick}/> Breakfast +₹1,980.00</p>
                <p><input type="checkbox" value={"&nbsp; Lunch(+₹1,980.00)"} onClick={handleClick2}/> Lunch +₹1,980</p>
                <p>
                  <input type="checkbox" value={"&nbsp; Dinner(+₹1,980.00)"} onClick={handleClick3}/> Dinner +₹1,980.00
                </p>

              </form>
              <br />
              <form id="snack">
                <p>Add Snacks and Drink</p>
                <p>
                  <input type="checkbox" /> Snack +₹360.00<br />
                </p>
                <p><input type="checkbox" /> Drink +₹360.00</p>

              </form>

              <br />
              <br />
              {/* <div>
                <table>
                  <tr>
                    <td>Product total</td>
                    <td>₹0.00</td>
                  </tr>

                  <tr >
                    <td>Option Total - </td>
                    <td className="option"></td>
                  </tr>

                  <tr >
                    <td>Grand Total - </td>
                    <td className="opt"></td>
                  </tr>

                </table>
              </div> */}
              <div id="qty">
                <input type="number" value="1" />
                <button className="open">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='discription'>
        <h6 style={{marginBottom:"50px"}}>Discription</h6>
        <div style={{textAlign:"left"}}>
          <h6>Here’s what you get with our weight loss meal plan :</h6>
          <ul  style={{ listStyleType: "none" }}>
            <li>-Freshly prepared, preservative free, ready to eat meals delivered to you.</li>
            <li>100% healthy meals free from refined sugars & trans fats</li>
            <li>-Different menu every day which includes a perfect blend of cuisines</li>
            <li>-Flexibility of plans; pause your plans or cancel meals according to your schedule. (Within the validity period)</li>
            <li>-Ongoing nutritionist support and consultations.</li>
          </ul>
        </div>
        
        <div style={{textAlign:"left"}}>
        <h6>Please note:</h6>
        <ul>
          <li>Orders will commence from the next working day</li>
          <li>We do not deliver on Sundays (1 Week plan= 6 days)</li>
          <li>All payments are collected on the first day of your meals. </li>
          <li>We have a strict No-refund policy</li>
         
        </ul>
        </div>
      </div>
          <Footer/> 
      
    </div>
  )
}
