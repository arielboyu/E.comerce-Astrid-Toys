import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function CategoriesList(){
    const getCategory = axios.get("http://localhost:3002/categories");
    const [category, setCategory]= useState([]);
    useEffect(()=>{
        getCategory.then((res)=>{
            setCategory(res.data)
          })
        },[category])
        
        const handleDelete = (c) => {
             axios.delete(`http://localhost:3002/categories/delete/${c.id}`, c)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
          };
    return (
        <div>
            <table class="table table-reflow">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {category.map((c) => (
     <tr key={c.id}>
     <td>{c.id}</td>
     <td>{c.name}</td>
     <td>{c.description}</td>
     <button onClick={() => handleDelete(c)}>Delete</button>
    </tr>
    ))}
  </tbody>
</table>
        </div>
    )
 }
