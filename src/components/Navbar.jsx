import { React, useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import {BiMenu} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotals } from "../features/cartSlice";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState(0);
  const handleMenu = () =>
    setmenu(!menu)
   
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  let activeStyle = {
    color: "#6495ED",
  };

  let activeClassName = "#6495ED";

  return (
    <>
    <header className="md:mb-12 md: flex text-white body-font justify-between text-center items-center fixed bg-gray-900 z-40 w-full mb-48">
      <div className="w-full text-lg  mx-auto flex  p-3   items-center text-center justify-between ">
       <div className="w-full md:flex md:justify-between ">
        <Link to="/">
          <div className="flex justify-center">
          <span className=" text-blue-600 justify-center items-center  md:justify-between">Website</span>
          <span className="justify-center items-center  md:justify-between">Logo</span>
          </div>
        </Link>
        <div className="flex justify-between">
        <>
  <button
onClick={handleMenu}
    data-dropdown-toggle="dropdown"
    className="md:hidden text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center"
    type="button"
  >
 
  <BiMenu size={20}/>

   
  </button>
  {/* Dropdown menu */}
 
</>

        <div className="flex px-2">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="px-2"
            >
              Home
            </NavLink>

            <NavLink
              to="Products"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="px-4"
            >
              Products
            </NavLink>

            <NavLink
              to="Cart"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="px-2"
            >
              Cart
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5  py-0 px-1.5">
              {cart.cartTotalQuantity}
            </span>
            </NavLink>
           

            <NavLink
              to="About"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="px-2"
            >
              About
            </NavLink>
          </div>
          </div>
          </div>
      </div>
      
    </header>
     <div
     id="dropdown"
     className={menu ?"fixed bg-gray-900 z-30 pt-28 divide-y divide-gray-100 rounded shadow w-44":"hidden"}
   >
     <ul onClick={handleMenu}
       className="py-1 text-sm text-white "
       aria-labelledby="dropdownDefaultButton"
     >
       <li>
       <Link to="/menCategory"
           className="block px-4 py-2 hover:bg-gray-100 "
         >
           men
         </Link>
       </li>
       <li>
         <Link
           to="/womencategory"
           className="block px-4 py-2 hover:bg-gray-100"
         >
           womens
         </Link>
       </li>
       <li>
         <Link
           to="/jewelerycategory"
           className="block px-4 py-2 hover:bg-gray-100"
         >
           jewelery
         </Link>
       </li>
       <li>
         <Link
           to="/electronicsCategory"
           className="block px-4 py-2 hover:bg-gray-100"
         >
           electronics
         </Link>
       </li>
     </ul>
   </div>
   </>
  );
};

export default Navbar;
