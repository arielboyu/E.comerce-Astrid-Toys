import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css"

const Footer = ({match}) => {
  return (
    !match.isExact ?
    <footer class="pt-3 pb-2">
    <div className={`${style.footer} container col-12 text-center p-5`}>
      <div class={`d-flex justify-content-between align-items-center flex-column flex-md-row pb-2 ${style.borderFooter}`}>
        <h2 class={`${style.title} ml-0 ml-md-3 mb-4 mb-sm-2`}>Astrid Toys</h2>
      </div>
      <div class="d-flex justify-content-center align-items-center justify-content-md-between flex-column flex-md-row mx-3 mt-4">
        <div class="d-flex"><p class={`mb-0 small ${style.textFooter}`}>© 2020. All right reserved .</p></div>
        <div class="d-flex mt-3 mt-md-0">
        <ul class="nav justify-content-center">
        <Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina-69a26a105/"}} target="_blank"><li class="nav-item mr-2"><i class="fab fa-linkedin mr-1 ml-2 "></i> Astrid Medina </li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/ariel-salcedo-b423b61ba/"}} target="_blank"><li class="nav-item mr-2"><i class="fab fa-linkedin mr-1 ml-2 "></i> Ariel Salcedo </li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/maxidf/"}} target="_blank"><li class="nav-item mr-2"><i class="fab fa-linkedin mr-1 ml-2 "></i> Maxi De Filippis </li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/nahuel-caputto-63132b32/"}} target="_blank"><li class="nav-item mr-2"><i class="fab fa-linkedin mr-1 ml-2 "></i> Nahuel Caputto </li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/nicolas-acevedo-b444a41b2/"}} target="_blank"><li class="nav-item mr-2"><i class="fab fa-linkedin ml-2 mr-1"></i> Nico Acevedo </li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/rodrigomanuelpenela"}} target="_blank" ><li class="nav-item mr-2"><i class="fab fa-linkedin mr-1 ml-2 "></i> Rodri Penela </li></Link>
        </ul>
        </div>
      </div>
    </div>
  </footer> :
  <></>
  );
};

export default Footer;