

import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import store from '../store/store'
import { addToCart } from '../slicer/cartSlicer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
    const[product , setproduct] = useState([])
    let location = useLocation();
    let navigate = useNavigate();

    let cart = useSelector((state) => state.cart)

    let paras = useParams();
    let param = paras.id
    let dispatch = useDispatch();

    useEffect(() => {
        LoadProduct()
        // alert(location.pathname)
       
    }, [])
    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products/${param}`)
        .then((res) => {
            setproduct(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    function cartClick(){
        try {
            dispatch(addToCart(product))
            alert("product added to cart")
            navigate('/home')
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
  
  return (
    <div className='d-flex justify-content-center'>
        {/* <h1 className='text-center mt-5'>Product Page</h1> */}
        <div className='p-3 card w-25 mt-5'>
            <div className='p-3 card-header'>
                <h3>{product.title}</h3>
            </div>
            <div className='p-3 card-body'>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
            <div className='p-3 card-footer'> 
                <img src={product.image} alt="" style={{width:"100%" , height:"200px" }} />
                <hr />
                <div>
                   <div className='d-flex justify-content-between'>
                   <button className='btn btn-primary' onClick={cartClick}>Add to cart</button>
                   <button className='btn btn-danger'>Buy Now</button>
                   </div>
                    <Link to={"/home"} className='text-decoration-none text-center'>Back to Product</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductPage