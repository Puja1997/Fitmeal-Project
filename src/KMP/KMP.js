import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'


import './KMP.css'
export default function KMP() {
  return (
    <div>

      <div>
        <div className='images_KMP'>
          <div className='box_KMP'>

          </div>
        </div>
      </div>

      <div>
        <div id="main_second">
          <div id="second">
            <div>
              <p style={{ fontWeight: "light", fontSize: "15px", lineHeight: "30px" }}>If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet. <br /> <br />
                Disclaimer: This isn’t going to be any type of a crash diet which will give you magical results; we’ll aim for 2-4kgs   permonth and all your meals will be designed by our nutritionists who focus not only on seeing results but also on    ensuringthat there’s no compromise on your mental and physical health.</p>
              <button>View Simple Menu</button>
            </div>
            <div>
              <h1 style={{ fontFamily: "'Sacramento', cursive", fontWeight: "lighter" }}>What our meals look like:</h1>
              <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance-300x203.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{textAlign: "center"}} id="head_button">
          <h1>How Does It Work?</h1>
          <div id="bottom_para_two">
            <div style={{textAlign: "center"}}>
              <div className="image " style={{margin:" auto"}}>
                <img src="https://cdn3.iconfinder.com/data/icons/finance-banking-1/64/07_financial_calculation-128.png" />
              </div>
              <p className="Four_name">Select your plan</p>
              <p className="opensans">Choose the meal plan you want based on your preferences.</p>
            </div>
            <div style={{textAlign: "center"}}>
              <div className="image" style={{margin: "auto"}}><img src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-person-avatar-business/100/11-1User_2-128.png" /></div>
              <p className="Four_name">Nutrition Support</p>
              <p className="opensans">Our nutritionists will design your meals & will be available for further consultations.</p>
            </div>
            <div style={{textAlign: "center"}}>
              <div className="image" style={{margin: "auto"}}><img src="https://cdn2.iconfinder.com/data/icons/logistics-lineart/64/motorcycle-128.png"/ ></div>
              <p className="Four_name">Home delivery</p>
              <p className="opensans">Freshly prepared, hot meals will be delivered right at your doorstep.</p>
            </div>
            <div style={{textAlign: "center"}}>
              <div className="image" style={{margin: "auto"}}> <img src="https://cdn1.iconfinder.com/data/icons/kitchen-and-food-2/44/noodles-128.png"/> </div>
              <p className="Four_name">Enjoy your meal</p>
              <p className="opensans">Microwave the food if needed then dig in!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div id="all_grid">
            <div style={{margin:"20px"}}>
                <h1 style={{fontSize: "50px"}}>Choose your ideal program & get started!</h1>
            </div>
            <div class="white_back">
                <h3 style={{textAlign: "center"}}>1 week Plan</h3>
                <div id="tick_li" class="marg">
                    <ul>
                        <li> &nbsp; Freshly prepared meals</li>
                        <li> &nbsp; Home delivery</li>
                        <li> &nbsp; No refined sugars</li>
                        <li> &nbsp; Planned by nutritionists</li>
                        <li> &nbsp; Plan flexibility</li>
                    </ul>
                </div>

                <button> <Link to ='/Keto_OneWeek' >Order Now</Link>  </button>

            </div>
            <div  className="white_back">
                <h3 style={{textAlign: "center"}}>2 week Plan</h3>
                <div id="tick_li" className="marg">
                    <ul>
                        <li> &nbsp; Freshly prepared meals</li>
                        <li> &nbsp; Home delivery</li>
                        <li> &nbsp; No refined sugars</li>
                        <li> &nbsp; Planned by nutritionists</li>
                        <li> &nbsp; Plan flexibility</li>
                    </ul>
                </div>
                <button><Link to ='/Keto_TwoWeek' >Order Now</Link></button>
            </div>
           <div   className="white_back">
                <h3 style={{textAlign: "center"}}>4 week Plan</h3>
                <div id="tick_li" className="marg">
                    <ul>
                        <li> &nbsp; Freshly prepared meals</li>
                        <li> &nbsp; Home delivery</li>
                        <li> &nbsp; No refined sugars</li>
                        <li> &nbsp; Planned by nutritionists</li>
                        <li> &nbsp; Plan flexibility</li>
                    </ul>
                </div>
                <button><Link to ='/Keto_FourWeek' >Order Now</Link></button>
            </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>


    </div>
  )
}
