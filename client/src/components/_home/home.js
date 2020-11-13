import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Home = ({navShow}) => {
    const styleImg = {
        height : "613px",
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
        <div id="carouselExampleIndicators" className="carousel slide p-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img style={styleImg} src="https://images4.alphacoders.com/103/thumb-1920-1035777.jpg" className="w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img style={styleImg} src="https://images4.alphacoders.com/103/1035785.jpg" className="w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img style={styleImg} src="https://cutewallpaper.org/21/funko-pop-wallpaper/Funko-Pop-Marvel-Animation-Free-Wallpaper-and-Backgrounds-.jpg" className="w-100" alt="..."></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <Link to ="/products"><button className="btn btn-outline-dark btn-lg mb-5"> INGRESAR A LA TIENDA</button></Link>
        </div>
    ) 
}

export default Home;