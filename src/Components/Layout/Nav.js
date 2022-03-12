import React, { useState } from "react";
import "./Nav.scss";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export default function () {
  return (
    <>
      <div id="first_div">
        {/* <nav class="navbar navbar-light bg-light"> */}
        <div className="icon_flex">
          <p>
            <img
              src="https://www.allenviewturf.com.au/wp-content/uploads/2021/01/png-transparent-green-map-marker-logo-computer-icons-map-location-logo-logo-internet-map-thumbnail-1-300x300.png"
              alt=""
              style={{ width: "24px" }}
              class="d-inline-block align-text-top"
            />
            Food delivery only in Hyderabad
          </p>
          <p>
            <img
              src="https://p1.hiclipart.com/preview/272/350/486/mobile-icon-telephone-call-text-messaging-email-logo-iphone-smartphone-cordless-telephone-png-clipart.jpg"
              style={{ width: "24px" }}
              class="d-inline-block align-text-top"
            />
            9100347480
          </p>
          <p>
            <img
              src="https://www.pngkit.com/png/detail/176-1762283_see-here-envelope-clipart-black-and-white-icon.png"
              style={{ width: "24px" }}
              class="d-inline-block align-text-top"
            />
            fitmealsindia@gmail.com
          </p>
        </div>
        <div id="left_icons">
          <Nav.Link as={Link} to="/Products" className="icon_color">
            <img
              src="https://cdn-icons.flaticon.com/png/128/3031/premium/3031293.png?token=exp=1646036496~hmac=8819851a0b316d1c8c3fd67fac3ef643"
              style={{ width: "24px" }}
            />
          </Nav.Link>
          <Nav.Link as={Link} to="/Login" className="icon_color">
            <img
              src="https://img.icons8.com/ios/2x/user--v3.gif"
              style={{ width: "24px" }}
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/Cart" className="icon_color">
            <img
              src="https://cdn-icons-png.flaticon.com/128/743/743131.png"
              style={{ width: "24px" }}
            />
          </Nav.Link>
        </div>
        {/* </nav> */}
      </div>
      <Navbar bg="white" variant="white" className="navbar , fixed-nav-bar">
        <div className="img_div">
          <img
            src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png"
            alt="Fitmeal_logo"
          />
        </div>

        <div className="inside">
          <Navbar.Brand as={Link} to="/" className="colour , colour2">
            Home
          </Navbar.Brand>
          <Nav.Link as={Link} to="#" className="colour">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Meal Plans"
              menuVariant="white"

            >
              <NavDropdown.Item as={Link} to="/WLMP" style={{padding:"20px"}}>
                Weight Loss Meal Plan
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/AMP"  style={{padding:"20px"}}>
                Athletic Plan
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/MMP"  style={{padding:"20px"}}>Maintenance Meal Plan</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/KMP" style={{padding:"20px"}}>Keto Meal Plan
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav.Link>

          <Nav.Link as={Link} to="/Health" className="colour">
            Health Coaching
          </Nav.Link>
          <Nav.Link as={Link} to="/Products" className="colour">
            Products
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/Blogs" className="colour">
            Blog
          </Nav.Link> */}
          <Nav.Link as={Link} to="/About_us" className="colour">
            AboutUs
          </Nav.Link>
        </div>

        {/* </Nav> */}
        {/* </Container> */}
        <button>Call: 9100347480</button>
      </Navbar>

      {/* <div id="bottom_nav" style={{ width: "100px" }}>
        <Nav.Link as={Link} to="/Mycart" className="colour">
          <img
            src="https://cdn-icons-png.flaticon.com/128/859/859270.png"
            style={{ width: "100%" }}
          />
        </Nav.Link>
      </div> */}
    </>
  );
}
