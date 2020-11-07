import React, {useState, useEffect} from 'react';
import axios from 'axios';


const getCategory = axios.get("http://localhost:3002/categories");


function DashboardLoadProduct(){

    //Seteo un estado general para mostrar las categorias en las listas desplegrables
    const [category, setCategory]= useState([]);
    //Seteo un estado general
    const [productLoad, setProduct ] = useState({
        name: "",
        category: "",
        subCategory: "",
        stock: 0,
        price: 0,
        description:"",
        active: false,
        image:"/asdas/asd"
    });
    //ejecuto la primesa cuando se hace el pre render
    useEffect(()=>{
        getCategory.then((res)=>{
          setCategory(res.data)
        })
      },[])

      //seteo el estado producto mediante voy cambiando los valores del input
    const handlerChange=(e)=>{
        setProduct({...productLoad,
            [e.target.name]:e.target.value
        })
    }
    //el submit hace un post con axio y le paso el req.body como segundo parametro
    const handlerSubmit=(e)=>{
        axios.post("http://localhost:3002/products",productLoad)
        .then(r => {
            console.log(r)
        })
        .catch(er => {
            console.log(er)
        })
        e.preventDefault()
    }

    return(
    <div className="container">
        <h2>Load Product</h2>
        <form onSubmit={handlerSubmit}>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input type="text" className="form-control" name="name" value={productLoad.name} placeholder="Funko..." onChange={handlerChange}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="productCategory">Category</label>
                    <select className="form-control" name="category" value={productLoad.category} onChange={handlerChange}>
                        <option></option>
                        {category.map((c)=>
                            <option>{c.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="productCategory">Sub-Category</label>
                    <select className="form-control" name="subCategory" onChange={handlerChange} value={productLoad.subCategory}>
                        <option></option>
                        <option>Sub-Category 1</option>
                        <option>Sub-Category 2</option>
                        <option>Sub-Category 3</option>
                    </select>
                </div>
            </div>   
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="productStock">Stock</label>
                    <input type="text" className="form-control" name="stock" value={productLoad.stock} onChange={handlerChange}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="productPrice">Price</label>
                    <input type="text" className="form-control" name="price" value={productLoad.price} onChange={handlerChange}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="productDescription">Example textarea</label>
                <textarea className="form-control" name="description" value={productLoad.description} rows="3" onChange={handlerChange}></textarea>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="productImage">Cargar Imagen</label>
                        <input type="file" class="form-control-file" id="productImage"></input>
                </div>
                <div className="form-group col-md-6">
                    <input className="form-check-input" type="checkbox" value="productCheck" name="productCheck"/>
                    <label className="form-check-label" htmlFor="productCheck">Activar producto en la tienda?</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>
            {/* <!-- Modal --> */}
            <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Producto Agregado
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                </div>
                </div>
            </div>
            </div>
        </form>
    </div>
    )
}

export default DashboardLoadProduct;