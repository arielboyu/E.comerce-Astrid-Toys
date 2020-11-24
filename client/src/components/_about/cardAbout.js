import React from "react";
import { Link } from "react-router-dom";
import img from "./background10.jpg";

const CardAbout = (props) => {
  return (
    <div className="container">
      <section>
        <h1 class="heading">Meet the Team</h1>
        <div className="card-wrapper">
          <div class="card">
            <img src={img} alt="card background" className="card-img" />
            <img src={props.imgsrc} alt="card image" className="profile-img" />
            <h1 className="name"> {props.name} </h1>
            <p className="job-title"> {props.title} </p>
            <p class="about">Describe lo que quieras aqui</p>
            <a href="#" className="btn">
              Contact
            </a>
         
            <ul class="social-media">
              <li><i class="far fa-envelope"></i></li>
              <Link id="ari" to={{ pathname: "https://www.linkedin.com/in/ariel-salcedo-b423b61ba/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <li><i class="fab fa-github"></i></li>
            </ul>  
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardAbout;

{/*<Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina/"}}target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
                <Link to={{ pathname:"https://www.linkedin.com/in/maxidf/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
                <Link to={{ pathname:"https://www.linkedin.com/in/nahuel-caputto-63132b32/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
                <Link to={{ pathname:"https://www.linkedin.com/in/nicolas-acevedo-b444a41b2/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
<Link to={{ pathname:"https://www.linkedin.com/in/rodrigomanuelpenela"}} target="_blank" ><li><i className="fab fa-linkedin-in"></i></li></Link>*/}
