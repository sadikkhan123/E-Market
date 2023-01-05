import axios from 'axios'
import {React,useState,useEffect} from 'react'
import {FaRupeeSign} from "react-icons/fa"
import {  useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cartSlice'

const Products = () => {
  const handleAddtoCart=(item)=>{
  dispatch(addToCart(item))
  }
    const [items,setitems] = useState([])
    useEffect(()=>
    {
      axios.get("https://fakestoreapi.com/products/")
      .then((res)=>
      {
       console.log(res)
       setitems(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
 const dispatch=useDispatch()
    
    return (
      
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-slate-200'>
        {items.map((item)=>
   <div key={item.id} className="flex mx-5 mt-28 justify-center ">
   <div className="rounded-lg shadow-lg bg-white w-full ">
     <span >
       <img
         className="rounded-t-lg h-48 justify-center mx-auto pt-3"
         src={item.image}
         alt="/"
       />
     </span>
     <div className="p-6">
       <h5 className="text-gray-900 text-xl font-medium mb-2">{item.title.slice(0,17)}...</h5>
       <div className='flex justify-between items-center'>
       <p className="text-gray-700 text-base mb-4 flex items-center">
       <FaRupeeSign/>{Math.ceil(item.price)} 
       </p>
       <p className='flex items-center'>{item.category.name} </p>
       
       </div> 
       <div className=' flex items-center justify-center mx-auto'>
      <button onClick={()=>handleAddtoCart(item)}
         type="button"
         className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
       >
         buy
       </button>
      
       </div> 
     </div>
   </div>

 </div>
    
    
      )}
  
    </div>
    )
  }
  

export default Products