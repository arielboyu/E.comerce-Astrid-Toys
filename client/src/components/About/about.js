import React, {Component} from "react";
import "./about.css";
import CardAbout from './cardAbout.js';


import img1 from "./ariel.jpeg";
import img2 from "./maxi.jpeg";
import img3 from "./rodri.jpeg";
import img4 from "./astrid.jpeg";
import img5 from "./nico.jpeg";
import img6 from "./nahue.jpeg";


const About = () => {

        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                
                    <div className="col-md-4">
                         <CardAbout imgsrc={img1} title="Full Stack Developer" name="Ariel Salcedo" id="ari"/>
                    </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img2} title="Full Stack Developer" name="Maximiliano de Filipis" id="max" />
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img3} title="Full Stack Developer" name="Rodrigo Penela" />
                        </div>
                        <div className="row">
                        <div className="col-md-4">
                         <CardAbout imgsrc={img4} title="Full Stack Developer" name="Astrid Medina"/>
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img5} title="Full Stack Developer" name="Nicolas Acevedo"/>
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img6} title="Full Stack Developer" name="Nahuel Caputto"/>
                        </div>
                    </div>
                </div>     
      </div>
                

    );
}

export default About;
