<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 8e27abeafbc1bb49d3ab73fdf34c1c09561b1218
import React, { useState } from 'react';

    export default function SearchBar({onSearch}) {
      
      const { funko, setFunko} = useState('');
       return (
          <form onSubmit = {(e) => {
            e.preventDefault();

            onSearch('');

            setFunko('');
          }}> 
            <label>
              FunkoPop             
            </label>
              <input type="text"
              placeholder="Buscar..."

              value= {''}

              onCange = { e => setFunko(e.target.value)}
              />
              <button type= "submit"> Submit </button>
           </form>
        );
      };
=======
import React, { useState } from 'react';

export default function SearchBar() {
  
  
  return (
    <form> 
        <input type="text"/>
        <button type= "submit"> Submit </button>
      </form>
  );
};
>>>>>>> S11-RouterApp
