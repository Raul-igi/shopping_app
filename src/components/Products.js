import React from 'react'
import ProductsCard from './ProductsCard';

const Product = ({products}) => {
  
  return <div className="py-10">
<div className="flex flex-col items-center gap-4">
  <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">Shopping Everyday</h1>
  <span className="w-20 h-[3px] bg-black"></span>
  <p className="max-w-[700px] text-gray-600 text-center">
   Nike Founded in 1964 as Blue Ribbon Sports, the company became
   Nike in 1971 after the Greek goddess of victory. One of 
   the most valuable brands among sport businesses, Nike 
   employs over 76,000 people worldwide. It sells its 
   apparel through the Nike brand, as well as its Jordan
   Brand and Converse subsidiaries.
  </p>
</div>
<div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
{
  products.map((item)=>(
    <ProductsCard key= {item._id} Product={item}/>
  ))}
</div>
</div>;
  
  
}

export default Product
