import React from "react";
import img1 from "./image1.jpeg";
//import "./card-style.css";

const CardAbout = props => {
    return(
        <div className="container">
            <h1 class="heading">Meet the Team</h1>
            <div className="card-wrapper">
            <div class="card">
                <img src= {props.imgsrc} alt="card background" className="card-img"/>
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1>Astrid Medina</h1>
                   <p className="job-title">Designer</p>
                   <p class="About">
                            Describe lo que quieras aqui
                        </p>
                        <a href="#" className="btn">Contact</a>
                        <ul class="social-media">
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li> <i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-github"></i></li>
                        </ul>
             </div> 
             </div>
             <div class="card">
                <img src= {props.imgsrc} alt="card background" className="card-img"/>
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1>Ariel Salcedo</h1>
                   <p className="job-title">Full Stack Developer</p>
                   <p class="About">
                            Describe lo que quieras aqui
                        </p>
                        <a href="#" className="btn">Contact</a>
                        <ul class="social-media">
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li> <i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-github"></i></li>
                        </ul>
             </div>
             <div class="card">
                <img src= {props.imgsrc} alt="card background" className="card-img"/>
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1>Nahuel Caputto</h1>
                   <p className="job-title">Full Stack Developer</p>
                   <p class="About">
                            Describe lo que quieras aqui
                        </p>
                        <a href="#" className="btn">Contact</a>
                        <ul class="social-media">
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li> <i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-github"></i></li>
                        </ul>
             </div> 
             <div class="card">
                <img src= {props.imgsrc} alt="card background" className="card-img"/>
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1>Maximiliano de Fillipis</h1>
                   <p className="job-title">Full Stack Developer</p>
                   <p class="About">
                            Describe lo que quieras aqui
                        </p>
                        <a href="#" className="btn">Contact</a>
                        <ul class="social-media">
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li> <i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-github"></i></li>
                        </ul>
             </div> 
             <div class="card">
                <img src= {props.imgsrc} alt="card background" className="card-img"/>
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1>Nicolas Acevedo</h1>
                   <p className="job-title">Full Stack Developer</p>
                   <p class="About">
                            Describe lo que quieras aqui
                        </p>
                        <a href="#" className="btn">Contact</a>
                        <ul class="social-media">
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li> <i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-github"></i></li>
                        </ul>
             </div> 
             <div class="card">
                <img src= {props.imgsrc} alt="card background" className="card-img"/>
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1>Rodrigo Penela</h1>
                   <p className="job-title">Full Stack Developer</p>
                   <p class="About">
                            Describe lo que quieras aqui
                        </p>
                        <a href="#" className="btn">Contact</a>
                        <ul class="social-media">
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li> <i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-github"></i></li>
                        </ul>
             </div> 
             
        </div>
    );
}

export default CardAbout;

