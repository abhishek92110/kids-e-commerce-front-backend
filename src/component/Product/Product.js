import React, { useEffect, useState, useContext } from "react";
import Filter from './Filter'
import ProductList from './ProductList'
import LoginContext from "../../Context/LoginContext";

const Product = (props) => {

  const ContextValue = useContext(LoginContext);
  const [productdetails, setproductdetails] =useState();
  const [prouctTitle, setprouctTitle] =useState();
  const [prouctTitleDesc, setprouctTitleDesc] =useState();

  useEffect(()=>{

    fetchProductData();

  },[ContextValue.productname])

  const fetchProductData =async()=>{

     let data = await fetch('https://commerce-backend-test.onrender.com/api/product/products');
    let parsedData  = await data.json();

  let filterdata  =parsedData.filter(data=>{
    return (data.product===ContextValue.productname)
  })

  

    setproductdetails(filterdata);
    setprouctTitle(filterdata[0].title)
    setprouctTitleDesc(filterdata[0].description)
  }
  return (
    <div className='product'>
        <Filter/>
        <ProductList productdetails={productdetails} prouctTitle={prouctTitle} prouctTitleDesc={prouctTitleDesc}/>
    </div>
  )
}

export default Product