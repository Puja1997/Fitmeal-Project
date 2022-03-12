// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Components/Routing/Routing';
import SimpleContainer from './Components/demo/demo';
import Login from './Components/demo/demo';
import FormPage from './Components/demo/demo';
import Footer from './Components/Footer/Footer';
import Practice from './Components/demo/Practice';
import Log from './Components/demo/log';
import Health from './Components/Health_Coaching/Health';
import Tabs from './Components/HomeButtonFour/HomeButtonFour';
import Navbar from './Components/Navbar/Navbar';
// import Deck from './Components/demo/demo';

function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
     <Routing/>
     {/* <Deck/> */}
     {/* <Footer/>
      */}
      {/* <Practice/> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
      {/* <Log/> */}
      {/* <Health/> */}
      {/* <Tabs/> */}
     
      
    </div>
  );
}

export default App;
