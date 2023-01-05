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
    <div className='lg:flex'>
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
<div className='pt-10 md:pt-0'>
  <h3 className='px-5 md:pt-24 '>order details</h3>
  <form method='post' action='/' className='mx-5'>
  <div className="relative z-0 mb-6 w-full group">
    <input
      type="email"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email address
    </label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_first_name"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        First name
      </label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="floating_last_name"
        id="floating_last_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_last_name"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Last name
      </label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="floating_phone"
        id="floating_phone"
        className="pb-5 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Phone(123-456-7890)
      </label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="floating_phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
       shipping Address
      </label>
    </div>
   
   
  </div>

  <button 
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Cheackout
  </button>
</form>

</div>
</div>
  )
}

export default Cart