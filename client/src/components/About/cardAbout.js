import React from "react";
import { Link } from "react-router-dom";
import img from "./img/background6.jpg";


import img1 from "./img/ariel.jpeg";
import img2 from "./img/maxi.jpeg";
import img3 from "./img/rodri.jpeg";
import img4 from "./img/astrid.jpeg";
import img5 from "./img/nico.jpeg";
import img6 from "./img/nahue.jpeg";


const CardAbout = (props) => {
  return (
    <div className="container">
      <section>
        <h1 className="heading">Meet the Team</h1>

        <div className="card-wrapper">
          {/*ASTRID MEDINA*/}
          <div className="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={img4} alt="card image" className="profile-img" />
            <h1 className="name"> Astrid Medina </h1>
            <p className="job-title"> Front-End Developer and Designer</p>
            <a href="#" className="btn">
              Contact
            <p className="about">Professional IT Engineer.</p>
            </a>
            <ul className="social-media">
              <li><i class="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina/"}}target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i className="fab fa-github"></i></li> 
            </ul>  
          </div>
          {/*ARIEL SALCEDO*/}
          <div className="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={img1} alt="card image" className="profile-img" />
            <h1 className="name"> Ariel Salcedo </h1>
            <p className="job-title"> Full Stack Developer</p>
            <p className="about">Describe lo que quieras aqui</p>
            <a href="#" className="btn">
              Contact
            </a>
            <ul className="social-media">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname: "https://www.linkedin.com/in/ariel-salcedo-b423b61ba/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i className="fab fa-github"></i></li> 
            </ul>  
          </div>
           {/*Maxi De Filippis*/}
           <div className="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={img2} alt="card image" className="profile-img" />
            <h1 className="name"> Maxi De Filippis</h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="about">Describe lo que quieras aqui</p>
            <a href="#" className="btn">
              Contact
            </a>
            <ul className="social-media">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/maxidf/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i className="fab fa-github"></i></li> 
            </ul>  
          </div>
          {/*Nahu Caputto*/}
          <div className="row">
          <div className="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={img6} alt="card image" className="profile-img" />
            <h1 className="name"> Nahuel Caputto </h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="about">Describe lo que quieras aqui</p>
            <a href="#" className="btn">
              Contact
            </a>
            <ul className="social-media">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/nahuel-caputto-63132b32/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i className="fab fa-github"></i></li> 
            </ul>  
          </div>
          {/*Nico Acevedo*/}
     
          <div className="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={img5} alt="card image" className="profile-img" />
            <h1 className="name"> Nico Acevedo </h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="about">Describe lo que quieras aqui</p>
            <a href="#" className="btn">
              Contact
            </a>
            <ul className="social-media">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/nicolas-acevedo-b444a41b2/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i className="fab fa-github"></i></li> 
            </ul>  
          </div>
          {/*Rodri Penela*/}
          <div className="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={img3} alt="card image" className="profile-img" />
            <h1 className="name"> Rodri Penela </h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="about">Describe lo que quieras aqui</p>
            <a href="#" className="btn">
              Contact
            </a>
            <ul className="social-media">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/rodrigomanuelpenela"}} target="_blank" ><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i className="fab fa-github"></i></li> 
            </ul>  
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default CardAbout;


