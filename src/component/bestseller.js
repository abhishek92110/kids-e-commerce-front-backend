import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import cross from '../images/cross.png'
import img1 from '../images/img-1.png'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img5 from '../images/img-5.png'
import img6 from '../images/img-6.png'
import img7 from '../images/img-7.png'
import img8 from '../images/img-8.png'
import img9 from '../images/img-9.png'
import star from '../images/star.png'
import Swal from 'sweetalert2'
import ProductCart from './Product/ProductCart';





const Bestseller = () => {

  const [bestSellerData, setbestSellerData] = useState();
  const [quickViewStatus, setquickViewStatus] = useState(false);
  useEffect(()=>{
    fetchProductData();
    
  },[])

  const fetchProductData = async()=>{
    const res  =await fetch('https://commerce-backend-test.onrender.com/api/product/bestsellers')

    const data = await res.json();
    setbestSellerData(data);
    // setAllProduct(data);

  }

   

  const quickViewProduct = (image,productname)=>{
   
  const quickViewProduct = document.querySelector('.quick-view-product-container');
  const bestsellerSection = document.querySelector('.bestseller-section');
  const overlay = document.getElementById('overlay');

  document.body.style.overflow = 'hidden';

  quickViewProduct.style.visibility="visible";
  overlay.style.display = 'block';
  quickViewProduct.style.opacity="1";
  quickViewProduct.style.height="auto";
  bestsellerSection.style.opacity="0.3";
  // document.body.style.backgroundColor = "black";
  // document.body.style.opacity="0.3";
  bestsellerSection.style.background = 'black';

  }

  const hideQuickView =()=>{
    const quickViewProduct = document.querySelector('.quick-view-product-container');
    const bestsellerSection = document.querySelector('.bestseller-section');
    const overlay = document.getElementById('overlay');

    document.body.style.overflow = 'auto';

    quickViewProduct.style.visibility="hidden";
    overlay.style.display = 'none';
    quickViewProduct.style.opacity="0";
    quickViewProduct.style.height="0";
    bestsellerSection.style.opacity="1";
    // document.body.style.backgroundColor = "none";
    // document.body.style.opacity="1";
    bestsellerSection.style.background = 'none';
    setquickViewStatus(false)
  }

  return (
    <div className='bestseller container'>

      {<div className='quick-view-product-container'>
        <div className="container-fluid pb-5">
            <div className="quick-view-row row px-xl-5">
              <div className="bestseller-col-lg-5 col-lg-5 mb-30">
                <div id="product-carousel" style={{height:"100%"}} className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner bg-light" style={{height:"100%"}}>
                    <div className="carousel-item active" style={{height:"100%"}}>
                      <img className="w-100 h-100" src={localStorage.getItem('productImage')} alt="Image" />
                    </div>
                    <div className="carousel-item" style={{height:"100%"}}>
                      <img className="w-100 h-100" src={localStorage.getItem('productImage')} alt="Image" />
                    </div>
                    <div className="carousel-item" style={{height:"100%"}}>
                      <img className="w-100 h-100" src={localStorage.getItem('productImage')} alt="Image" />
                    </div>
                    <div className="carousel-item" style={{height:"100%"}}>
                      <img className="w-100 h-100" src={localStorage.getItem('productImage')} alt="Image" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                    <i className="fa fa-2x fa-angle-left text-dark" />
                  </a>
                  <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                    <i className="fa fa-2x fa-angle-right text-dark" />
                  </a>
                </div>
              </div>
              <div className="bestseller-col-lg-7 col-lg-7 pos-rel h-auto mb-30">
                <img className='cross-quick-view' src={cross} onClick={hideQuickView}/>
                <div className="h-100 bg-light p-30">
                  <h3 style={{textAlign:"initial"}}>{localStorage.getItem('productName')}</h3>
                  {console.log(localStorage.getItem('productName'))}
                  <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star-half-alt" />
                      <small className="far fa-star" />
                    </div>
                    <small className="pt-1">(99 Reviews)</small>
                  </div>
                  <h3 style={{textAlign:"initial"}} className="font-weight-semi-bold mb-4">Price : {localStorage.getItem('productPrice')} &#x20B9;</h3>
                  <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                    clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                    Nonumy</p>
                  {/* <div className="d-flex mb-3">
                    <strong className="text-dark mr-3 strong-text">Sizes:</strong>
                    <form>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-1" name="size" />
                        <label className="custom-control-label" htmlFor="size-1">XS</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                        <label className="custom-control-label" htmlFor="size-2">S</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                        <label className="custom-control-label" htmlFor="size-3">M</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                        <label className="custom-control-label" htmlFor="size-4">L</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-5" name="size" />
                        <label className="custom-control-label" htmlFor="size-5">XL</label>
                      </div>
                    </form>
                  </div> */}
                  {/* <div className="d-flex mb-4">
                    <strong className="text-dark mr-3 strong-text">Colors:</strong>
                    <form>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                        <label className="custom-control-label" htmlFor="color-1">Black</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                        <label className="custom-control-label" htmlFor="color-2">White</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                        <label className="custom-control-label" htmlFor="color-3">Red</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                        <label className="custom-control-label" htmlFor="color-4">Blue</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                        <label className="custom-control-label" htmlFor="color-5">Green</label>
                      </div>
                    </form>
                  </div> */}
                  <div className="d-flex align-items-center mb-4 pt-2">
                    {/* <div className="input-group quantity mr-3" style={{width: '158px', alignItems:'center'}}>
                      <div className="input-group-btn">
                        <button className="btn btn-primary btn-minus"  >
                          <i className="fa fa-minus"/>
                        </button>
                      </div>
                      <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
                      <div className="input-group-btn">
                        <button className="btn btn-primary btn-plus">
                          <i className="fa fa-plus"/>
                        </button>
                      </div>
                    </div> */}
                    <button className="btn btn-primary px-3" ><i className="fa fa-shopping-cart mr-1" /> <Link to='/productdetails' onClick={()=>document.body.style.overflow = 'auto'
}> Add To
                      Cart </Link></button>
                  </div>
                  <div className="d-flex pt-2">
                    <strong className="text-dark mr-2">Share on:</strong>
                    <div className="d-inline-flex">
                      <a className="text-dark px-2" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="text-dark px-2" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="text-dark px-2" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="text-dark px-2" href>
                        <i className="fab fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      </div>}
      <div id="overlay"></div>
      {/* bestseller quick overview container end */}
      <div className='bestseller-section'>
        <h2>Bestseller</h2>
        <span className='bestseller-span container'>Check our Bestseller Collection of Accessories and more</span>
        <div className='separator-image'></div>
        <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
             
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" />
              </a>
              <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                
                    {bestSellerData &&<div className="carousel-item active">
                    <div className="row">
                    
                      {bestSellerData.slice(0,4).map((data,index)=>{
                        console.log('data =',data)
                      return(
                        <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className='image-add-to-cart-conatiner'>
                          <img className="img-fluid" alt="100%x280" src={data.image}/>
                         
                          <div className='add-to-cart-dropdown-container'>
                            <button className='quick-add-to-btn' onClick={()=>{quickViewProduct(data.image, data.productname) ; localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image) ; setquickViewStatus(true)}}>Quick View</button>

                             <Link to='/productdetails' onClick={()=>{localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image)}}><button className='quick-add-to-btn'>Add to Cart</button></Link>
                             
                          </div>
                          </div>
                        
                          <div className="card-body">
                            <span className="card-title">{data.productname}({data.age}years)</span>
                            
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>{data.price}</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                       
                        </div>

                      </div>
                      )
                      })}


                </div>
              </div>}



              {bestSellerData &&<div className="carousel-item">
                    <div className="row">
                    
                      {bestSellerData.slice(5,9).map((data,index)=>{
                        console.log('data =',data)
                      return(
                        <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className='image-add-to-cart-conatiner'>
                          <img className="img-fluid" alt="100%x280" src={data.image}/>
                          
                          <div className='add-to-cart-dropdown-container'>
                          <button className='quick-add-to-btn' onClick={()=>{quickViewProduct(data.image, data.productname) ; localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image) ; setquickViewStatus(true)}}>Quick View</button>
                             <Link to='/productdetails' onClick={()=>{localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image)}}><button className='quick-add-to-btn'>Add to Cart</button></Link>
                          </div>
                          </div>
                        
                          <div className="card-body">
                            <span className="card-title">{data.productname} ({data.age}years)</span>
                           
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>{data.price}</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                       
                        </div>

                      </div>
                      )
                      })}


                </div>
              </div>}

              {bestSellerData &&<div className="carousel-item">
                    <div className="row">
                    
                      {bestSellerData.slice(0,4).map((data,index)=>{
                        console.log('data =',data)
                      return(
                        <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className='image-add-to-cart-conatiner'>
                          <img className="img-fluid" alt="100%x280" src={data.image}/>
                         
                          <div className='add-to-cart-dropdown-container'>
                          <button className='quick-add-to-btn' onClick={()=>{quickViewProduct(data.image, data.productname) ; localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image) ; setquickViewStatus(true)}}>Quick View</button>
                             <Link to='/productdetails' onClick={()=>{localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image)}}><button className='quick-add-to-btn'>Add to Cart</button></Link>
                          </div>
                          </div>
                        
                          <div className="card-body">
                            <span className="card-title">{data.productname} ({data.age}years)</span>
              
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>{data.price}</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                       
                        </div>

                      </div>
                      )
                      })}


                </div>
              </div>}

                  
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Bestseller