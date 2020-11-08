import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategoriesList(){
    const getCategory = axios.get("http://localhost:3002/categories");
    const [category, setCategory]= useState([]);
    useEffect(()=>{
        getCategory.then((res)=>{
            setCategory(res.data)
          })
        },[])
        
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
     <button
          onClick={() => handleDelete(c)}
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Delete
        </button>
    </tr>
    ))}
  </tbody>
</table> 
        {/* <!-- Modal --> */}
        <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => window.location.reload()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Category Deleted</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => window.location.reload()}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        
    )
 }
