import React from "react";
import { Link } from "react-router-dom";
import img from "./img/background10.jpg";
import "./about.css";



import img1 from "./img/ariel.jpg";
import img2 from "./img/maxi.jpeg";
import img3 from "./img/rodri.jpeg";
import img4 from "./img/astrid.jpeg";
import img5 from "./img/nico.jpg";
import img6 from "./img/nahue.jpeg";
import img7 from "./img/team.png";

const CardAbout = (props) => {
  return (
    <div className="containerAB">
      <section className="sectionAB">
        <h1 className="headingAB">Meet the Team</h1>

        <div className="row">
        <img src={img7} alt="image team" className="image-team"/>
        </div>

        <div className="card-wrapperAB">
          {/*ASTRID MEDINA*/}
          <div className="cardAB">
            <img src={img} alt="card background" className="cardAB-imgAB" />
            <img src={img4} alt="card image" className="profileAB-imgAB" />
            <h1 className="name"> Astrid Medina </h1>
            <p className="job-title"> Front-End Developer and Designer</p>
            <p className="aboutAB">Professional IT Engineer.</p>
            <a href="#" className="btnAB">
              Read More
            </a>
            <ul className="socialAB-mediaAB">
              <li><i class="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina/"}}target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
           
                <Link to={{ pathname: "https://github.com/Sifrisky/"}}target="_blank"><li><i className="fab fa-github"></i></li></Link> 
            </ul>  
          </div>
          {/*ARIEL SALCEDO*/}
          <div className="cardAB">
            <img src={img} alt="card background" className="cardAB-imgAB" />
            <img src={img1} alt="card image" className="profileAB-imgAB" />
            <h1 className="name"> Ariel Salcedo </h1>
            <p className="job-title"> Full Stack Developer</p>
            <p className="aboutAB">Describe lo que quieras aqui</p>
            <a href="#" className="btnAB">
            Read More
            </a>
            <ul className="socialAB-mediaAB">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname: "https://www.linkedin.com/in/ariel-salcedo-b423b61ba/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <Link to={{ pathname: "https://github.com/arielboyu/"}}target="_blank"><li><i className="fab fa-github"></i></li></Link>
            </ul>  
          </div>
           {/*Maxi De Filippis*/}
           <div className="cardAB">
            <img src={img} alt="card background" className="cardAB-imgAB" />
            <img src={img2} alt="card image" className="profileAB-imgAB" />
            <h1 className="name"> Maxi De Filippis</h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="aboutAB">Describe lo que quieras aqui</p>
            <a href="#" className="btnAB">
            Read More
            </a>
            <ul className="socialAB-mediaAB">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/maxidf/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <Link to={{ pathname:"https://github.com/maxidefilippis/"}}target="_blank"><li><i className="fab fa-github"></i></li> </Link>  
            </ul>  
          </div>
          {/*Nahu Caputto*/}
          <div className="row">
          <div className="cardAB">
            <img src={img} alt="card background" className="cardAB-imgAB" />
            <img src={img6} alt="card image" className="profileAB-imgAB" />
            <h1 className="name"> Nahuel Caputto </h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="aboutAB">Describe lo que quieras aqui</p>
            <a href="#" className="btnAB">
            Read More
            </a>
            <ul className="socialAB-mediaAB">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/nahuel-caputto-63132b32/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <Link to={{ pathname:"https://github.com/nahuelcaputto/"}}target="_blank">  <li><i className="fab fa-github"></i></li></Link>
            </ul>  
          </div>
          {/*Nico Acevedo*/}
     
          <div className="cardAB">
            <img src={img} alt="card background" className="cardAB-imgAB" />
            <img src={img5} alt="cardAB image" className="profileAB-imgAB" />
            <h1 className="name"> Nico Acevedo </h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="aboutAB">Describe lo que quieras aqui</p>
            <a href="#" className="btnAB">
            Read More
            </a>
            <ul className="socialAB-mediaAB">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/nicolas-acevedo-b444a41b2/"}} target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
              <Link to={{ pathname:"https://github.com/acevedonm/"}}target="_blank"><li><i className="fab fa-github"></i></li> </Link>  
            </ul>  
          </div>
          {/*Rodri Penela*/}
          <div className="cardAB">
            <img src={img} alt="card background" className="cardAB-imgAB" />
            <img src={img3} alt="card image" className="profileAB-imgAB" />
            <h1 className="name"> Rodri Penela </h1>
            <p className="job-title"> Full Stack Developer </p>
            <p className="aboutAB">Describe lo que quieras aqui</p>
            <a href="#" className="btnAB">
            Read More
            </a>
            <ul className="socialAB-mediaAB">
              <li><i className="far fa-envelope"></i></li> 
              <Link to={{ pathname:"https://www.linkedin.com/in/rodrigomanuelpenela"}} target="_blank" ><li><i className="fab fa-linkedin-in"></i></li></Link>
            <Link to= {{pathname: "https://github.com/Rodriip95/"}} target="_blank" ><li><i className="fab fa-github"></i></li></Link> 
            </ul>  
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default CardAbout;


