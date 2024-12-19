import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiProcessing = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        const fetch = async() => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setproducts(response.data)
        }
        fetch();
    }, [])
    
  return (
    <div className='w-screen h-fit'>
      {products.map((pro) => (
        <div className='flex items-center gap-8   p-12  text-black font-semibold overflow-hidden'>
        <div className=' object-contain w-fit h-fit bg-fuchsia-400'>
           <img src={`${pro.image}`}/> 
        </div>
        <div className='text-black text-[2vw]'>
            <h1>Title:- {pro.title}</h1>
            <h1>Price:- {pro.price}</h1>
            <h1>Description:- {pro.description}</h1>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default ApiProcessing
