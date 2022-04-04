import React from 'react'
import Product from '../Product/Product'
import './ProductList.css'

function ProductList() {
    return (
        <div className="productList">
            <div className="productList__row">
                {/* Product */}
                <Product
                    id={12320}
                    title="PlayStation 5"
                    price={10}
                    rating={4.5}
                    image="https://www.nme.com/wp-content/uploads/2020/10/PS5-Console.jpg"
                />
                <Product
                    id={12320}
                    title="Nintendo Switch"
                    price={10}
                    rating={4.5}
                    image="https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/08/14/how-to-find-new-switch-improved-battery-life-nintendo-cover_feature.jpg"
                />
                <Product
                    id={12321}
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id={12334}
                    title="Iphone 13"
                    price={98.99}
                    rating={3.5}
                    image="https://coolhdwall.com/storage1/202107/iphone-13-pro-max-4k-phone-wallpaper-2160x3840-21.jpg"
                />
            </div>
            <div className="productList__row">
                {/* Product */}
                <Product
                    id={12321}
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id={12320}
                    title="The Lean Startup"
                    price={10}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />
                <Product
                    id={12320}
                    title="Playstation 4"
                    price={10}
                    rating={4.5}
                    image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/83406_1632326298.jpg"
                />
                <Product
                    id={12334}
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={3.5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>

        </div>
    )
}

export default ProductList
