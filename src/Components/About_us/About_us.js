import React from 'react'
import Footer from '../Footer/Footer'
import './About.css'
export default function About_us() {
  return (
    <div>

      <div className='images_about'>
        <div className='box_about'>

        </div>
      </div>

      <div id='aboutdiv'>
        <div>
          <h3 style={{fontFamily: "'Sacramento', cursive",fontSize:"50px"}}>Where it all began</h3>
          <p >In 2015, Aman, Zeeshan, Bhavyanth and Apoorva Co-Founded Fitmeals India, the first delivery service of its kind in India.The intention was to introduce the concept of healthy eating in Hyderabad where people always associated healthy food with terms like ‘expensive’, ‘boring’ and ’bland’. Since then Fitmeals grew profoundly over the years and now we cater to clients all over the city. Thanks to the diverse & talented staff, Fitmeals India has encouraged a revolution of progressive consumers.</p>
        </div>
        <div id='four_img'>
          <div className='founder'>
            <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0160-275x275.jpeg' />
          </div>
          <div className='founder'>
            <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0159-1-293x300.jpg' />
          </div>
          <div className='founder'>
            <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0161-300x294.jpg' />
          </div>
          <div className='founder'>
            <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0157-296x300.jpeg' />
          </div>
        </div>
      </div>

      <div id='about_last'>
        <h2>Our Mission</h2>
        <p>We are on a mission to bring awareness about the importance of eating well and to improve your relationship with food. The relationship between food and the human body is so intense yet ignored by everybody that often results in neglected health and ultimately health related problems. Our aim is to ensure that everybody has access to nutrient dense, convenient meals so that you don’t have to compromise on your nutrition because of your busy schedules.</p>
        <div id='green_div'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeSBJ8r35-eRzLsIubBhkeGOR6LF8bcus3A&usqp=CAU' style={{width:"100px"}}/>

          <p style={{fontStyle:"italic" ,fontSize:"18px"}} >For us it’s not ‘just food’, it’s a matter of good lifestyle choices and eventually a better quality of life.</p>

        </div>
      </div>

      <Footer />


    </div>
  )
}
