import React, {Component} from "react";
import "./about.css";
import CardAbout from './cardAbout.js';

//import img from "./image.png";
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
                         {/*<CardAbout imgsrc={img} />*/}
                    </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img1}/>
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img2}/>
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img3}/>
                        </div>
                        <div className="col-md-4">
                         <CardAbout imgsrc={img4}/>
                        </div>
                        <div className="col-md-4">
                         {/*<CardAbout imgsrc={img5}/>*/}
                        </div>
                </div>     
      </div>
                

    );
}

export default About;
