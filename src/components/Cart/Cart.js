import React from 'react'
import './Cart.css'
import { useStateValue } from '../../context/StateProvider'
import CartProducts from '../CartProducts/CartProducts'
import Subtotal from '../Subtotal/Subtotal'
import FlipMove from 'react-flip-move';

function Cart() {
    const [{ cart }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
                        alt=""
                        className="checkout__ad"
                    />
                }

                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is Empty</h2>
                        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
                        <img src=""/>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Cart</h2>
                            <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
                                {/* List all the checkout products */}
                                {cart?.map((item, index) => (
                                    <div key={index}>
                                        <CartProducts
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                        />
                                    </div>

                                ))}
                            </FlipMove>
                        </div>
                    )}
            </div>

            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Cart
