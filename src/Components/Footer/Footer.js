import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div id="back">
            <div id="last_div">

                <div style={{ marginRight: "50px" }}>
                    <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-white.png"
                        style={{ width: "150px", marginBottom: "40px" }} />
                    <p className="white">The Fitmeals culinary team consists of very passionate and skilled chefs. Our team
                        is well versed in nutrition and all our menus and plans are designed by qualified nutrition
                        experts.</p>
                    <div style={{ display: "flex" }} id="last_div_one">
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                            style={{ padding: "5px", borderRadius: "50%" }} />
                        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png"
                            style={{ padding: "5px", borderRadius: "50%" }} />
                        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                            style={{ padding: "5px", borderRadius: "50%" }} />
                    </div>
                </div>

                <div className="one_by_one">
                    <h1 className="green" style={{ marginBottom: "30px",fontSize:"34px" }}>Explore</h1>
                    <button>Home</button><br />
                    <button>Meal Plan</button>
                </div>
                <div className="one_by_one">
                    <h1 className="green" style={{ marginBottom: "30px" ,fontSize:"35px"}}>Links</h1>
                    <button>About us</button><br />
                    <button>Blog</button><br />
                    <button>FAQ</button><br />
                    <button>Testimonials</button>
                </div>
                <div >
                    <h1 className="green" style={{ marginBottom: "42px",fontSize:"34px" }}>Contact</h1>
                    <div >
                        <div className="small_image">
                            <img src="https://cdn-icons-png.flaticon.com/128/2934/2934394.png" className="marg" />
                            <p className="marg green">Call Us</p>
                        </div>
                        <p className="white white_marg" >9100347480</p>
                        <p className="white white_marg">9963697412</p>
                    </div>
                    <div>
                        <div className="small_image">
                            <img src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261159_Po5JS7ds82XaePJIsG1MiEtHRzOeUPNj.jpg"
                                className="marg" />
                            <p className="marg green">Email Us:</p>
                        </div>
                        <p className="white white_marg">fitmealsindia@gmail.com</p>
                    </div>
                    <div>
                        <div className="small_image">
                            <img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" className="marg" />
                            <p className="marg green">Our location</p>
                        </div>
                        <p className="white white_marg">Banjara Hills, Road no.5, Hyderabad</p>
                    </div>
                </div>
            </div>
            <p className='footer_msg'>Copyright © 2021. FitMeals. All Rights Reserved</p>
        </div>
    )

}
