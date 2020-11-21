import React from "react";
//import img from "../img/ari.jpeg";
import "./about.css";

const About = (props) => {

    return (
        <div className= "card text-center">
            <div className= "overflow">
                <img src= {props.imgsrc} alt="image 1"  className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">About Title</h4>
                <p className="card-text text-secondary">
                    Describe lo que quieras aqui
                </p>
                <a href="#" className="btn-btn-outline-success">
                    Read More
                </a>
            </div>
        </div>

    );
}

export default About;
