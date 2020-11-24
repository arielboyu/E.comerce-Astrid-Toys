import React, {Component} from "react";
import "./about.css";
import CardAbout from './cardAbout.js';


import img1 from "./image1.jpeg";
import img2 from "./image2.jpeg";
import img3 from "./image3.jpeg";
import img4 from "./image4.jpeg";
//import img5 from "./image5.jpeg";


const About = () => {

        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                         <CardAbout imgsrc={img1} title="Full Stack Developer" name="Ariel Salcedo" />
                    </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img2} title="Full Stack Developer" name="Maximiliano de Filipis" />
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img3} title="Full Stack Developer" name="Rodrigo Penela" />
                        </div>
                        <div className="row">
                        <div className="col-md-4">
                         <CardAbout imgsrc={img4} title="Full Stack Developer" name="Astrid Medina"/>
                        </div>
                        <div className="col-md-4">
                         {/*<CardAbout imgsrc={img5} title="Full Stack Developer" name="Nicolas Acevedo"/>*/}
                        </div>
                        <div className="col-md-4">
                         {/*<CardAbout imgsrc={img6} title="Full Stack Developer" name="Nahuel Caputto"/>*/}
                        </div>
                    </div>
                </div>     
      </div>
                

    );
}

export default About;
