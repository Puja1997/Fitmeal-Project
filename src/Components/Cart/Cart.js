import React from "react";
// import { Navigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./cart.css";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();
  const handeClick = () => {
    alert("Payment successful");
    navigate("/");
  };
  let Total = JSON.parse(localStorage.getItem("Total"));
  let Text = "";
  if (Total === 0) {
    Text = "Your Cart is Empty, Shop Now...";
  } else {
    Text = "Buy All Selected Products";
  }
  return (
    <div>
      <div className="image_cart">
        <div className="box_cart"></div>
      </div>
      <div id="tab_main">
       {}   
        <h4>{Text}</h4>
        <button> <Link to ='/' >Go to Buy</Link></button>
        <div id="table">
          <h2>Total: {Total}</h2>
        </div>
        <div id="checkout" style={{ marginLeft: "0px" }}>
          <button onClick={handeClick}>Proceed to Checkout</button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
