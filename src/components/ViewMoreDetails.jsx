import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../Redux/features/cartSlice';

const ViewMoreDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const products = useSelector((state) => state.allCart.products.products);

    console.log('data', products);

    const selectedProduct = products.find(product => product.id === parseInt(id, 10));


    console.log("selectedProduct", selectedProduct);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card text-black">
                                <img
                                    src={selectedProduct.thumbnail}
                                    className="card-img-top"
                                    alt="Apple Computer"
                                />
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5 className="card-title">{selectedProduct.brand}</h5>
                                        <p className="text-muted mb-4">{selectedProduct.title}</p>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <span>Brand</span>
                                            <span>{selectedProduct.brand}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Product Name</span>
                                            <span>{selectedProduct.title}</span>
                                        </div> 
                                        <div className="d-flex justify-content-between">
                                            <span>Stock</span>
                                            <span>{selectedProduct.stock}</span>
                                        </div> 
                                        <div className="d-flex justify-content-between">
                                            <span>Rating</span>
                                            <span>{selectedProduct.rating}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Discount Percentage</span>
                                            <span>{selectedProduct.discountPercentage}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                        <span>Price</span>
                                        <span>₹{selectedProduct.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ViewMoreDetails
