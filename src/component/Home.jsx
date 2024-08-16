

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import store from '../store/store'
// import getState from 'redux/lib/store'


const Home = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        loadData()
        console.log(store.getState())


    })
    function loadData() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setproduct(res.data)
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className='p-3 d-flex justify-content-between'>
                <h1 className='text-center '>Welcome to home page</h1>
                <button className="btn btn-warning position-relative bi bi-camera-video" onClick={loadData}><span className="badge bg-danger position-absolute rounded rounded-circle  text-success"> </span></button>
            </div>


            {product.map(item => <div key={item.id} className='p-3 ' style={{ border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "10px", display: "inline-block" }}>
                <p>{item.id}.</p>
                <p className='display-7'>{item.title}</p>
                <p>{item.description}</p>
                <Link className='btn btn-secondary' to={`/product/${item.id}`} >{item.price}</Link>

            </div>)}

        </div>
    )
}

export default Home