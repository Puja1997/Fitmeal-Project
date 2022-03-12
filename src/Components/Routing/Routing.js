import React from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import AMP from '../../AMP/AMP'
import KMP from '../../KMP/KMP'
import MMP from '../../MMP/MMP'
import OneWeekAthleticMealPlan from '../1WeekAthleticMealPlan/OneWeekAthleticMealPlan'
import OneWeekWeightLossPlan from '../1WeekWeightLossPlan/OneWeekWeightLossPlan'
import TwoWeekWeightLossPlan from '../2WeekWeightLossPlan/TwoWeekWeightLossPlan'
import ThreeWeekWeightLossPlan from '../3WeekWeightLossPlan/ThreeWeekWeightLossPlan'
// import TwoWeekAthleticMealPla from '../TwoWeekAthleticMealPla/TwoWeekAthleticMealPla'
import About_us from '../About_us/About_us'
import Blogs from '../Blogs/Blogs'
import Cart from '../Cart/Cart'
import Mycart from '../Cart/Mycart'
import Health from '../Health_Coaching/Health'
import Home from '../Home/Home'
import Nav from '../Layout/Nav'
import WLMP from '../WLMP/WLMP'
import Login from '../Login/Login'
import Meals from '../Meals/Meals'
// import OneWeekMMP from '../OneWeekMMP/OneWeekMMP'
import OneWeekMMP from '../OneWeekMMP/OneWeekMMP'
import Pnf from '../Pnf/Pnf'
import Products from '../Products/Products'
import ThreeWeekAthleticMealPlan from '../ThreeWeekAthleticMealPlan/ThreeWeeekAthleticMealPlan'
import TwoWeekAthleticMealPlan from '../TwoWeekAthleticMealPlan/TwoWeekAthleticMealPlan'
import TwoWeekMMP from '../TwoWeekMMP/TwoWeekMMP'
import ThreeWeekMMP from '../ThreeWeekMMP/ThreeWeekMMP'
import Keto_OneWeek from '../Keto_OneWeek/Keto_OneWeek'
import Keto_TwoWeek from '../Keto_TwoWeek/Keto_TwoWeek'
import Keto_FourWeek from '../Keto_FourWeek/Keto_FourWeek'
import Protected from './Protected'
import Reg from '../Registration/Registration'


export default function 
() {
  return (
   <Router>
       <Nav/>
       <Routes>
       <Route path="" element={<Home />} />
       {/* <Route path="Meals" element={< Meals/>} /> */}
       <Route element={<Protected />}>
       <Route path="Health" element={< Health/>} />
       </Route>
       
      
       <Route path="Products" element={< Products/>} />
       
       {/* <Route path="Blogs" element={< Blogs/>} /> */}
      
       <Route path="About_us" element={<About_us/>} />
       <Route path="Cart" element={<Cart/>} />
       <Route path="Login" element={<Login/>} />
       <Route path="registration" element={<Reg/>} />
       <Route path="WLMP" element={<WLMP/>} />
       <Route path="OneWeekWeightLossPlan" element={<OneWeekWeightLossPlan/>} />
       <Route path="TwoWeekWeightLossPlan" element={<TwoWeekWeightLossPlan/>} />
       <Route path="ThreeWeekWeightLossPlan" element={<ThreeWeekWeightLossPlan/>} />
       
       <Route path="OneWeekAthleticMealPlan" element={<OneWeekAthleticMealPlan/>} />
       <Route path="TwoWeekAthleticMealPlan" element={<TwoWeekAthleticMealPlan/>} />
       <Route path="ThreeWeekAthleticMealPlan" element={<ThreeWeekAthleticMealPlan/>} />
       
       <Route path="OneWeekMMP" element={<OneWeekMMP/>} />
       <Route path="TwoWeekMMP" element={<TwoWeekMMP/>} />
       <Route path="ThreeWeekMMP" element={<ThreeWeekMMP/>} />

       <Route path="Keto_OneWeek" element={<Keto_OneWeek/>} />
       <Route path="Keto_TwoWeek" element={<Keto_TwoWeek/>} />
       <Route path="Keto_FourWeek" element={<Keto_FourWeek/>} />
       
      

       
       <Route path="AMP" element={<AMP/>} />
       <Route path="MMP" element={<MMP/>} />
       <Route path="KMP" element={<KMP/>} />
       {/* <Route path="Mycart" element={<Mycart/>} /> */}


       
       
       <Route path="*" element={<Pnf />} />
       </Routes>
   </Router>
  )
}
