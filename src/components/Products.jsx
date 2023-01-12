import { React, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import { addToCart } from "../features/cartSlice";

const Products = () => {
  const [loading, setloading] = useState(false);
  const handleAddtoCart = (item) => {
    dispatch(addToCart(item));
  };

  const [items, setitems] = useState([]);
  const [filter, setFilter] = useState(items);
  let componentMounted = true;
  useEffect(() => {
    const getItems = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setitems(await response.clone().json());
        setloading(false);
        setFilter(await response.json());
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getItems();
  }, []);
  const dispatch = useDispatch();
  const filterResult = (catItem) => {
    const updatedList = items.filter((x) => x.category === catItem);
    setFilter(updatedList);
  };

  return (
    <div className="flex ">
      {loading?<div className="h-screen items-center justify-center text-center text-black w-full flex"> Loading...</div>:
      <><div className=" pt-16 z-20 justify-between w-52 px-10 bg-white h-screen    border border-r border-gray-900 hidden md:block">
          <div className="pt-5 flex items-center font-bold text-lg justify-between">
            {" "}
            catagory{" "}
            <div>
              <BsChevronDown color="blue" />
            </div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => filterResult("men's clothing")}
              className="pt-5"
            >
              {" "}
              men fashion{" "}
            </button>
            <button
              onClick={() => filterResult("women's clothing")}
              className="pt-5"
            >
              {" "}
              lady fashion
            </button>
            <button onClick={() => filterResult("jewelery")} className="pt-5">
              {" "}
              jewelery
            </button>
            <button onClick={() => filterResult("electronics")} className="pt-5">
              {" "}
              electronics
            </button>
            <button onClick={() => setFilter(items)} className="pt-5">
              all
            </button>
          </div>
        </div><div className="bg-white z-10 md:flex w-full fixed items-center justify-center text-center ">
            <div className=" pt-28 md:pt-20 flex w-full mx-7 items-center">
              <div className="mb-3 flex md:ml-[193px]  items-center  text-center  justify-between w-[70%] md:w-[40%]">
                <form className="input-group relative flex w-full rounded">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-[60%] px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" />
                  <span className="-mx-6 pt-3 z-10">
                    {" "}
                    <FaSearch />
                  </span>
                </form>
              </div>
            </div>
            <div className="flex md:flex-row justify-between px-10">
              <div className="md:mt-20 absolute flex md:left-3/4 -ml-0.5 w-0.5 h-7 justify-between bg-gray-600 items-center" />

              <div className="md:mt-20  w-20 ">SORT BY</div>
              <div className="md:mt-20 text-blue-800 flex px-3">
                Desc{" "}
                <button className="px-3">
                  <BsChevronDown />
                </button>
              </div>
            </div>
          </div><div className="md:h-screen md:overflow-y-auto w-full justify-center items-center  ">
            <div className="md:mt-36 mt-44  md:gap-2 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-5 md:pb-32">
              {filter.map((item) => (
                <div
                  key={item.id}
                  className="flex md:ml-7 mx-5   justify-center mt-4 "
                >
                  <div className="p-2  h-full w-fit shadow-lg border border-solid border-black bg-white ">
                    <span>
                      <img
                        className="rounded-t-lg h-48 w-48 justify-center object-contain mx-auto pt-3 "
                        src={item.image}
                        alt="/" />
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
                          readOnly />
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
              ))}
            </div>
          </div></>
      }
    </div>
  );
};

export default Products;
