import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import { addToCart } from "../features/cartSlice";



const Categoryjewelery = () => {
    const [loading, setloading] = useState(false);
     
  const handleAddtoCart = (item) => {
    dispatch(addToCart(item));
  };

  const [items, setitems] = useState([]);
 

  useEffect(() => { 
    const getItems = async() =>{
        setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);

        setitems(await response.clone().json());
        setloading(false);
       
     
    }
   getItems();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="  w-full justify-center items-center  ">
         {loading?<div className="h-screen items-center justify-center text-center text-black w-full flex"> Loading...</div>:
    <div className="pt-36  2">
      {items.map(
        (item) => (
          <div
            key={item.id}
            className="flex mx-5   justify-center mt-4 "
          >
            <div className="p-2  h-full w-fit shadow-lg border border-solid border-black bg-white ">
              <span>
                <img
                  className="rounded-t-lg h-48 w-48 justify-center object-contain mx-auto pt-3 "
                  src={item.image}
                  alt="/"
                />
              </span>
              <div className="py-3 px-3 w-30">
                <h5 className="text-blue-900  font-medium mb-2">
                  {item.title.slice(0, 17)}...
                </h5>

                <p className="flex items-center text-black">
                  cat: {item.category}
                </p>
                <p className="flex items-center text-black justify-start">
                  Rating:{" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-blue-800">${item.price}</span>
                </p>
              </div>
              <div className=" flex items-center justify-center mx-auto">
                <button
                  onClick={() => handleAddtoCart(item)}
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  buy
                </button>
              </div>
            </div>
          </div>
        )

      
      )}
    </div>}
    </div>
  )
}

export default Categoryjewelery