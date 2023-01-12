import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:z-30 w-full md:fixed ">
      <footer className="bg-gray-800  px-4 md:-mt-11 h-12  shadow md:flex md:items-center md:justify-between ">
        <div>
          <div className="text-sm text-white  justify-center text-center items-center ">
            www.website.com
          </div>
          <div className="text-sm text-white justify-center text-center items-center ">c All rights Reserved.inspired Codes ...</div>
        </div>
        <ul className="flex flex-wrap items-center  justify-between mt-3 text-sm text-white  sm:mt-0">
          <Link to='/'>
            <div href="#" className="mr-4 hover:underline md:mr-6 ">
              contact us
            </div>
          </Link>
          <Link to='/'>
            <div href="#" className="mr-4 hover:underline md:mr-6">
              rule and policy
            </div>
          </Link>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
