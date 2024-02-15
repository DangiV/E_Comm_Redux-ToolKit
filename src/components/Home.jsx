import React, { useEffect } from 'react'
import '../assets/Style/Cart.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { addToCart, fetchProducts } from '../Redux/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nevigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.allCart.products.products);

    console.log('data', products);

    // function to add to cart 
    const AddToCart = (item) => {
        dispatch(addToCart(item))
        toast.success('Product added to cart !');
    }

    // View more about product
    const ViewMoreDetails = (id) => {
        nevigate(`/ViewMoreDetails/${id}`)
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
            <section className='iteam_section mt-4 container'>

                {/* show all carts product here after getting from cartSlice */}
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        Array.isArray(products) && products.map((item, index) => {
                            return (
                                <Card style={{ width: '22rem', border: "none" }} className="hove mb-4" key={index}>
                                    <Card.Img variant='top' className='cd' src={item.images[0]} />

                                    {/* Show here item name and rating of that product */}
                                    <div className='card_body'>
                                        <div className='upper_data d-flex justify-content-between align-items-center'>

                                            <h4 className='mt-2'>{item.title} </h4>
                                            <span>{item.rating}</span>
                                        </div>

                                        {/* show here description of product */}
                                        <div className='lower_data d-flex justify-content-between '>
                                            <h5>{item.description}</h5>
                                        </div>
                                        <div className='extra'></div>

                                        {/* button section for adding in cart  */}
                                        <div className="last_data d-flex justify-content-between align-items-center">

                                            <Button style={{ width: "120px", border: "none" }} variant='outline-light'
                                                className='mt-2 mb-2 btn btn-primary'
                                                onClick={() => AddToCart(item)}>Add TO Cart
                                            </Button>

                                            <Button style={{ width: "70px", border: "none" }} variant='outline-light'
                                                className='mt-2 mb-2 btn btn-success'>₹{item.price}
                                            </Button>

                                            <Button style={{ width: "120px", border: "none" }} variant='outline-light'
                                                className='mt-2 mb-2 btn btn-warning' onClick={() => ViewMoreDetails(item.id)}>View-More
                                            </Button>

                                        </div>

                                    </div>

                                </Card>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Home
