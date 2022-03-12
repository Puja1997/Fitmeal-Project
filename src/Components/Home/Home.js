// import React from 'react'
import './Home.scss';
// import './Home.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';
import Tabs from '../HomeButtonFour/HomeButtonFour';
// import Deck from '../demo/demo';



export default function Home() {

  return (
    <div>

      {/* Nav bar */}

      <div className="carousel-inner" role="listbox" style={{ height: "600px" }}>
        <div className="item active" style={{ height: "600px", overflow: "hidden" }}>
          <div className="carousel-item , back_image" data-bs-interval="10000" wrap="false" />
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" alt="Chania" style={{ height: "580px", width: "85%" }} />

          <div className="carousel-caption text-left">

          </div>


          <div className="carousel-caption d-none d-md-block" />
        </div>
      </div>



      {/* Oil jar image section */}
      <div>
        <div id="three_div" className="fira">
          <div className='upper_pad'>
            <h1 className="size" style={{ marginBottom: "10px" }}>It's not just food,</h1>
            <h1 className="green_color size" style={{ marginTop: "10px" }}>It's a lifestyle!</h1>
            <p className="line_height">We break the stereotype ‘healthy eating is boring”. Reach your weight, health and workout goals with deliciously healthy food. We have various diet plans customised to suit your specific health and weight requirements. With a new changing menu every week, we bring to you food from various cuisines, with a healthy twist. We make healthy eating fun and effortless!</p>
          </div>

          <div id="three_div_img" className="marg"> <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/health-bottle-cut.jpg" alt="oil Bottle" /></div>

          <div id="tick_li" className="upper_pad">
            <ul>
              <li> &nbsp; Custom tailored diet plans.</li>
              <li> &nbsp; Free from refined sugars & trans fats.</li>
              <li> &nbsp; Different menu every day.</li>
              <li> &nbsp; Flexibility of plans</li>
              <li> &nbsp; Ongoing nutritionist support.</li>
            </ul>
          </div>
          <button>Read more</button>
        </div>
      </div>


      {/* gray div portion  */}
      <div id='gray_div'>
        <div>
          <div id="bottom_para_one">
            <h1 className="sacra green">Our benefits</h1>
            <h1 className="fira">So Why Choose Fitmeals?</h1>
            <p >Fitmeals is not a diet system that promotes cleanses, pills, preserved foods or any kind of disordered eating habits. We’re all about wholesome & nourishing foods that make you feel the best version of yourself. .</p>
          </div>

          <div id="bottom_para_two">
            <div style={{ textAlign: "center" }}>
              <div className="image " style={{ margin: "auto" }}>
                <img src="https://cdn1.iconfinder.com/data/icons/nature-farming-and-ecology-1/135/28-128.png" style={{ backgroundColor: "#8ec038", color: "white" }} />
              </div>
              <p className="fira" style={{ fontWeight: "500", fontSize: "25px", marginTop: "25px" }}>Fresh ingredients</p>
              <p className="open" style={{ fontSize: "19px", lineHeight: "35px" }}>Procuring fresh and fundamental ingredients required for a wholesome meal.</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className="image" style={{ margin: "auto" }}><img src="https://cdn0.iconfinder.com/data/icons/essentials-9/128/__Star-128.png" /></div>
              <p className="fira" style={{ fontWeight: "500", fontSize: "25px", marginTop: "25px" }}>Finest quality</p>
              <p className="open" style={{ fontSize: "19px", lineHeight: "35px" }}>All the meals are designed by our nutrition experts using only the best quality ingredients.</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="image" style={{ margin: "auto" }}><img src="https://cdn2.iconfinder.com/data/icons/logistics-lineart/64/motorcycle-128.png" /></div>
              <p className="fira" style={{ fontWeight: " 500", fontSize: "25px", marginTop: "25px" }}>On time delivery</p>
              <p className="open" style={{ fontSize: "19px", lineHeight: "35px" }}>Helping you stay ahead of your diet plans.</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div class="image" style={{ margin: "auto" }}> <img src="https://cdn1.iconfinder.com/data/icons/andriod-app/36/check_mark-128.png" /> </div>
              <p className="fira" style={{ fontWeight: "500", fontSize: "25px", marginTop: "25px" }}>Preservative-free</p>
              <p className="open" style={{ fontSize: "19px", lineHeight: "35px" }}>Your ultimate plan for eating clean without added preservatives.</p>
            </div>

          </div>

          <div style={{ background: "url(https://www.fitmeals.co.in/wp-content/uploads/2019/10/nutrion-left.png)", position: "relative" }}>
            <React.Fragment>
              <CssBaseline />
              <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '170vh', width: "1200px" }}>
                  {/* <img src='' */}
                  <div style={{ width: "1100px", margin: "auto" }} id='Hungry'>
                    <p>Hungry yet?</p>
                    <h1 >Choose your Meal Plan</h1>
                  </div>

                  <div>
                    <Tabs />
                  </div>
                  
                </Box>
              </Container>
            </React.Fragment>


          </div>

          <div id='main_back'>
            <div id='background_img' >
              <h1 style={{ paddingTop: "200px" }}>Not convinced yet?</h1>
              <h1>Get our <span style={{ color: "red" }}>1 week trial plan</span> </h1>
              <button>Order Now</button>
            </div>
          </div>

          <div id="after_meal">
            <div>
              <h1 className="green fira" style={{ marginBottom: "0", fontSize: "35px", color: "#8ec038" }}>Diet Plans</h1>
              <h1 className="fira" style={{ marginTop: "0", fontSize: "35px" }}>The Ultimate DIY Meal Guide</h1>
              <p className="open" style={{ lineHeight: "30px" }}>Say goodbye to crash diets and give us the opportunity to create highly tailored plans that suit your body type and food preferences distinctively. Just give us your details and goals and we’ll do all the meal planning for you!</p>
              <button>Comming Soon</button>
            </div>
            <div><img src="https://www.fitmeals.co.in/wp-content/uploads/2019/02/dish_07-1-360x360-1.jpg" alt="meal" />
            </div>
          </div>

        </div>
      </div>

      <div id='slideshow'>

      </div>

      <div style={{ backgroundColor: "#f3f5ed" }}>
        <div style={{ width: "500px", textAlign: "center", margin: "auto" }}>
          <h1 className="cursive green" style={{ fontWeight: "lighter", fontSize: "40px", paddingTop: "50px", marginBottom: "0" }}>
            Testimonials</h1>
          <h1 style={{ fontFamily: "'Fira Sans', sans-serif", marginTop: "0", fontSize: "40px" }}>What our clients say
          </h1>
          <p style={{ fontFamily: "'Open Sans', sans-serif" }}> The perfect combination of healthy and delicious
            food. Fitmeals made sure that I reach my fitness and weight goals with frequent follow up calls from
            the nutritionist who made sure to always check on the progress. Excellent service, really happy with
            the results .</p>
          <div>
            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/12-01-110x110.png" />
            <h3 style={{ fontFfamily: "'Fira Sans', sans-serif" }}>Sanjana Devulapally</h3>
          </div>

        </div>
        <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/testimonials-bg.png" style={{ width: "1330px" }} />
      </div>

      <div id='footers'>
        <Footer />
      </div>


    </div>
  )

}
