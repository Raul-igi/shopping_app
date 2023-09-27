import React from "react";
//import Product from "./Products";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer,toast } from "react-toastify";

const ProductsCard = ({ Product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const _id =Product.title;
  const idString =(_id)=>{
    return String(_id).toLowerCase().split("").join("");
  };
  const rootId = idString(_id);
  //console.log(_id);
  const handleDetails=()=>{
  navigate (`/product/${rootId}`, {
    state:{
      item:Product,
    }
  }) 
  }
  return (
    <div className="group relative">
      <div onClick={handleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={Product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {Product.title.substring(0, 15)}
            </h2>
          </div>
          <div div className="flex  gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through font-base text-gray-500 ">
                {" "}
                ${Product.oldPrice}
              </p>
              <p className="font-semibold"> ${Product.price}</p>
            </div>
            <p  onClick={()=> 
            dispatch(
              addToCart({
                _id:Product._id,
                title:Product.title,
                image:Product.image,
                price:Product.price,
                quantity:1,
                description: Product.description,


            })

            ) & toast.success(`${Product.title}is added`)
            
            }className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
              Add to cart <span><BsArrowRight/></span>
            </p>
          </div>
        </div>
        <div>
          <p>{Product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {
            Product.isNew && (
              <p className=" bg-black text-white font-semibold font-titleFont px-6 py-1">Sale</p>
            )
          }
        </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick 
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
