import React from "react";
import img1 from "./image4.jpeg";

const CardAbout = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src= {img1} alt="image 4"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Meet the team</h4>
                <p className="card-text text-secondary">
                    Escribe lo que quieras aqui
                </p>
                <a href="#" className="btn-btn-outline">Read More</a>
            </div>
        </div>
    );
}

export default CardAbout;