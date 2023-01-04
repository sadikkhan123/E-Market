import React from 'react'
import {FaShoppingBag,FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const  {cartTotalQuantity} = useSelector(state => state.cart)
  return (
<header className="text-gray-600 body-font justify-center text-center items-center fixed bg-white z-10 w-full">
  <div className="container mx-auto flex flex-wrap p-5  flex-row items-center text-center justify-between">
   <Link to='/'>
     my shop
   
     </Link>
     <div className='flex'>
      <Link to='/' className="mr-5 hover:text-gray-900"><FaHome size={20}/></Link>
      <Link to='/Cart' className="mr-5 hover:text-gray-900"><FaShoppingBag size={20}/>
      <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">{ cartTotalQuantity}</span>
    </Link>
      </div>
    
  </div>
</header>

  )
}

export default Navbar