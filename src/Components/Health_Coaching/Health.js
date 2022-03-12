import React from 'react'
import './Health.css'
import Footer from '../Footer/Footer'
import { display } from '@mui/system'
export default function Health() {
  return (
    <div>
      <div id='body'>
        <ul className='slideshow'>
          <li>
            {/* <h3>The Seasons</h3> */}

            <span>Personal Workout Plans</span>

          </li>
          <li>
            {/* <h3>The Seasons</h3> */}
            <span>Your Personal Health Coach</span>
          </li>
          <li>
            {/* <h3>The Seasons</h3> */}
            <span></span>
          </li>
          <li>
            {/* <h3>The Seasons</h3> */}
            <span>Wholesomes Healthy Recipes</span>
          </li>
        </ul>
      </div>


      <div style={{backgroundColor:'#f6f6f6',padding:"100px 0"}}>

      <div className='middle'>
        <div>
          <h2 className='small1'>Book an appointment withyour
            <span className='small'> personal nutritionist</span></h2>
          <p>Book a consultation session on the app with one of our nutritionists to discuss your health concerns and goals.</p>

          <div style={{display: "flex"}}>
            <div style={{ width: "40px",marginRight:"10px" }} >
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLAUuH2niyiZwwYp1-M14RjoPNOlbNlFChcgQbOcuSa_BxVCgdfFSPRICmhL1Can02LQ&usqp=CAU' style={{ width: "100%" }} />
            </div>
            <h6>Every day from 12:00 PM to 10:00 PM</h6>
          </div>
          <div style={{display: "flex"}}>
            <div style={{ width: "40px",marginRight:"10px" }} >
              <img src='data:image/jpeg;base64,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' style={{ width: "100%" }} />
            </div>
            <h6>+91 9100347489</h6>
          </div>
        

        </div>
        <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/09/businesswoman-2817567_640-600x299.jpg' />
      </div>
      </div>
      <Footer />
    </div>
  )
}
