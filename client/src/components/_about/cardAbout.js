import React from "react";
//import img from "./image.png";
//import "./card-style.css";

const CardAbout = props => {
    return(
        <div className="container">
            <h1 class="heading">Meet the Team</h1>
            <div className="card-wrapper">
            <div class="card">
                 {/*<img src= {img} alt="card background" className="card-img"/>*/}
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1 className="name"> {props.name} </h1>
                   <p className="job-title"> {props.title} </p>
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
                 {/*<img src= {img} alt="card background" className="card-img"/>*/}
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1 className="name"> {props.name} </h1>
                   <p className="job-title"> {props.title} </p>
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
                 {/*<img src= {img} alt="card background" className="card-img"/>*/}
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1 className="name"> {props.name} </h1>
                   <p className="job-title"> {props.title} </p>
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
                {/*<img src= {img} alt="card background" className="card-img"/>*/}
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                   <h1 class="name"> {props.name} </h1>
                   <p className="job-title">{props.title}</p>
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
                 {/*<img src= {img} alt="card background" className="card-img"/>*/}
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                <h1 class="name"> {props.name} </h1>
                   <p className="job-title">{props.title}</p>
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
                {/*<img src= {img} alt="card background" className="card-img"/>*/}
                <img src= {props.imgsrc} alt="card background" className="profile-img"/>
                <h1 class="name"> {props.name} </h1>
                   <p className="job-title">{props.title}</p>
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

