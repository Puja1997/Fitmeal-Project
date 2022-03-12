import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer.js';
import './TwoWeekAthleticMealPlan.css';
import { Link } from 'react-router-dom'

const mealarr = [
  {
    name: "veg",
    id: 0
  },
  {
    name: "Non-Veg",
    id: 1

  }
]
const choicearr = [
  {
    name: "Breakfast",
    price: 1980.00,
    checked: false,
  },
  {
    name: "Dinner",
    price: 1980.00,
    checked: false,
  },
  {
    name: "Lunch",
    price: 1980.00,
    checked: false,
  },
]

// const drinkarr = [
//   {
//     name: "snack",
//     price: 360.00,
//     id: 0
//   },
//   {
//     name: "Drink",
//     price: 360.00,
//     id: 1
//   }

// ]

export default function TwoWeekAthleticMealPlan() {
  const [data, setData] = useState(0);
  const [checked, setChecked] = useState(choicearr);
  const [isSelected, setIsSelected] = useState();
  const [total, setTotal] = useState(0);
  const handleCheck = (index) => {
    var checkedList = choicearr;
    checkedList.map((item,i) =>{
      if( i === index){
        item.checked = !item.checked;
      }
    }
    )
    setChecked(checkedList);
    console.log(checked)
    calculateTotal();
  };

  const calculateTotal = () =>{
    var totalVal = 0;
    checked.map((item)=>{
      if(item.checked){
        totalVal = totalVal + item.price
      }
    })
    setTotal(totalVal);
  }
  const handleClick = () => {

    setData(data + 1980);
  }
  const handleClick2 = () => {
    setData(data + 1980);
  }
  const handleClick3 = () => {
    setData(data + 1980);
  }
  console.log("data", data)
  return (
    <div>

      <div className='images_lossplan_TAMP'>
        <div className='box_lossplan_TAMP'>

        </div>
      </div>

      <div>
        <div>
          <div id="pro_details" className="open">
            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/120202323_1261589670872020_6790947016248641564_n-1.jpg" />
            <div id="form_submit">
              <p>{"₹"+total}</p>
              <p>Starting from 1980 /-</p>
              <form >
                <p>Meal Preference</p>
                {
                  mealarr.map((item) =>
                  <p>
                  <input type="radio" checked={item.name === isSelected} onChange={() => setIsSelected(item.name)} />  {item.name}
                </p>
                  )
                }
               

              </form>
              <br />
              <form id="choice">
                <p>Choice</p>
                {
                  checked.map((item,index)=>
                  <p><input type="checkbox" value={item.name} defaultChecked={item.checked} onClick={() =>handleCheck(index)}  /> {item.name+"(+₹"+item.price.toFixed(2)+")"}</p>
                  )
                }

              </form>
              <br />

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
                <button className="open"><Link to ='/Cart' >Buy Now</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='discription'>
        <h6 style={{ marginBottom: "50px" }}>Discription</h6>
        <div style={{ textAlign: "left" }}>
          <h6>Here’s what you get with our weight loss meal plan :</h6>
          <ul style={{ listStyleType: "none" }}>
            <li>-Freshly prepared, preservative free, ready to eat meals delivered to you.</li>
            <li>100% healthy meals free from refined sugars & trans fats</li>
            <li>-Different menu every day which includes a perfect blend of cuisines</li>
            <li>-Flexibility of plans; pause your plans or cancel meals according to your schedule. (Within the validity period)</li>
            <li>-Ongoing nutritionist support and consultations.</li>
          </ul>
        </div>

        <div style={{ textAlign: "left" }}>
          <h6>Please note:</h6>
          <ul>
            <li>Orders will commence from the next working day</li>
            <li>We do not deliver on Sundays (1 Week plan= 6 days)</li>
            <li>All payments are collected on the first day of your meals. </li>
            <li>We have a strict No-refund policy</li>

          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}
