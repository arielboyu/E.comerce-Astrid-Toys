
import React, { useState } from 'react';

    export default function SearchBar({onSearch}) {
      
      const { funko, setFunko} = useState('');
       return (
          <form onSubmit = {(e) => {
            e.preventDefault();
            onSearch(funko);
            setFunko('');
          }}> 
            <label>
              FunkoPop             
            </label>
              <input type="text"
              placeholder="Buscar..."
              value= {funko}
              onCange = { e => setFunko(e.target.value)}
              />
              <button type= "submit"> Submit </button>
           </form>
        );
      };