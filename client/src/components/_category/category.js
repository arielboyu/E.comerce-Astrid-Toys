/* Este componente define la estructura que tenda una categoria
para el front */

import React from "react";

export default function Category({ name, description /* image */ }) {
  return (
    <div>
      <div>
        <img src="" alt="a">{/* OPCIONAL UNA IMAGEN, para debatir */}</img>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
