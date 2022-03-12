import { useState } from "react";
import { Link } from "react-router-dom";
import './HomeButtonFour.css'

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Weight Loss Meal Plan
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Athletic Meal Plan
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Maintenance Meal Plan
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    Keto Meal Plan
                </button>
            </div>

            <div className="content-tabs">
            <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div className="New_div">
                        <div className="images">
                            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg" />
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <h2>Weight Loss Meal Plan</h2>
                            <h6>1200-1400kcal</h6>

                            <p>
                            If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.<br/>
                            <br/>
                            <button style={{border:"1px solid red"}} ><Link to ='/WLMP'> View plans</Link></button>
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <div className="New_div">
                        <div className="images">
                            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance.jpg" />
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <h2>Athletic Meal Plann</h2>
                            <h6>1500-1800 kcal</h6>

                            <p>
                            A diet rich in protein is essential for promoting muscle growth and repair while simultaneously burning fat to ensure you stay in shape. This plan includes high protein meals for individuals who want to gain weight or build muscle. If you are a fitness enthusiast who’s looking for meals higher in calories and lean protein then we’ve got you covered.
                            <br/>
                            <button style={{border:"1px solid red"}} ><Link to ='/AMP'> View plans</Link></button>

                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <div className="New_div">
                        <div className="images">
                            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/athletic.jpg" />
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <h2>Maintenance Meal Plan</h2>
                            <h6>1400-1600kcal</h6>

                            <p>
                                This plan is for individuals looking for meals that will help in weight maintenance. All the meals have moderately portioned macros and micros.
                                <br/>
                                <button style={{border:"1px solid red"}} ><Link to ='/MMP'> View plans</Link></button>
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    <div className="New_div">
                        <div className="images">
                            <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto.jpg" />
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <h2>Keto Meal Plan</h2>
                            <h6>1300-1500kcal</h6>

                            <p>
                                The keto diet is all about eating meals that are high in fat, consist moderate portions of protein and very low in carbs. The reduction of carbohydrates results in a metabolic process called ketosis where your body fat is then used to generate energy in the body.
                                <br/>
                                <button style={{border:"1px solid red"}} ><Link to ='/KMP'> View plans</Link></button>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Tabs;