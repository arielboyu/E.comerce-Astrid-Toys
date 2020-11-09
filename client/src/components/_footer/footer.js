import React from "react";
import style from "./footer.module.css"

const Footer = () => {
  return (
    <div className={`${style.footer} col-12 text-center p-5`}>
      © 2020 ASTRID TOYS - Todos los derechos reservados
    </div>
  );
};

export default Footer;