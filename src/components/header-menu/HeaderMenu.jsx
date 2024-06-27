import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";




const HeaderMenu = () => {



    return (
        <div>
        
            <div className="bg-[#D42D2A]">
                <div className="containerWidth flex justify-between items-center">
                    <div className="w-[250px] py-3 px-4 flex justify-between items-center bg-[#ad2220] hover:bg-[#9a1e1c]">
                        <span className="text-[1rem] font-[700] text-white">Categories <span className="text-white font-normal opacity-80 ml-5">(see all)</span></span>
                        <IoIosArrowDown className="text-[1.2rem] ml-1 mt-[2px] text-white" />
                    </div>

                    <div className="list-none">
                        <ul className="flex justify-start">
                            <li className=""><a href="#" className="mainMenuItem">Home</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Flash Sale</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Blog</a></li>
                            <li className=""><a href="#" className="mainMenuItem">All Brand</a></li>
                            <li className=""><a href="#" className="mainMenuItem">All Category</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Coupon</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Todays Deal</a></li>
                        </ul>
                    </div>

                    <div className="w-[200px] py-3 px-4 flex justify-between items-center bg-[#ad2220] hover:bg-[#9a1e1c]">
                        <FaShoppingCart className="text-[1.2rem] ml-1 mt-[2px] text-white" />
                        <span className="text-[1rem] font-[700] text-white">$0.000</span>
                        <span className="text-white font-normal opacity-80">(0 items)</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderMenu;

