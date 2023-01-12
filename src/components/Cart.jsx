import {React,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import {BsFillTrashFill}from'react-icons/bs'
import{AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import { removeFromCart,decreaseCart,addToCart,clearCart,getTotals} from '../features/cartSlice'

const Cart = () => {
  const cart =useSelector((state)=> state.cart)

  const dispatch=useDispatch()
  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
    };
    const handleDecreaseCart=(cartItem)=>{
   dispatch(decreaseCart(cartItem))
    };
    const handleIncreaseCart =(cartItem)=>{
      dispatch(addToCart(cartItem))
    };
    const handleClearCart =()=>{
      dispatch(clearCart())
    };
useEffect(()=>{
dispatch(getTotals());
},[cart])

  return (
    <div className='lg:flex h-screen'>
<div className="pt-24 overflow-x-auto relative shadow-md sm:rounded-lg w-full">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="py-3 px-6">
          Product
        </th>
        <th scope="col" className="py-3 px-6">
          Qty
        </th>
        <th scope="col" className="py-3 px-6">
          Price
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
        <th scope="col" className="py-3 px-6">
          sub total
        </th>
      </tr>
    </thead>
    {cart.cartItems?.map(cartItem =>(
 <tbody key={cartItem.id}>
   
 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
 <td className="p-4 w-32">
   <img src={cartItem.image} alt="Apple Watch" />
 </td>
 <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
   {cartItem.title}
 </td>
 <td className="py-4 px-6">
   <div className="flex items-center space-x-3">
     <button onClick={()=> handleDecreaseCart(cartItem)}
       className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
       type="button"
     >
    <AiOutlineMinusCircle/>
     </button>
     <div>
       {cartItem.cartQuantity}
         
     </div>
     <button onClick={()=> handleIncreaseCart(cartItem)}
       className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
       type="button"
     >
       <AiOutlinePlusCircle/>
     </button>
   </div>
 </td>
 <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
   {Math.ceil(cartItem.price)}
 </td>
 <td className="py-4 px-6">
   <button onClick={()=>handleRemoveFromCart(cartItem)}
     className="font-medium text-red-600 dark:text-red-500 hover:underline"
   >
     Remove
   </button>
 </td>
 <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
   
    <p>{Math.ceil(cartItem.price)*cartItem.cartQuantity}</p>
  </td>

</tr>

</tbody>

    ))}
   
  </table>
  <div className='px-10 md:px-20 flex w-full'>
  <div className='justify-between w-full flex h-10'>
    <span>Grand total</span>
    <div className='flex items-center mx-20'>{Math.ceil(cart.cartTotalAmount)}</div>
   
    
   </div>
   <button onClick={()=> handleClearCart()} ><BsFillTrashFill/></button>
   </div>
</div>


</div>

  )
}

export default Cart