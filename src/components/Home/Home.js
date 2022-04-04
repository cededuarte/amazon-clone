import React from 'react'
import "./Home.css"
import Product from '../Product/Product'
import { toast } from 'react-toastify';
import { useEffect } from 'react'
import faker from 'faker'
import { ToastContainer } from 'react-toastify';

const Home = () => {

    useEffect(() => (
        slider(0)
    ), [])

    return (
        <div className="home">
            <div className="home__container">
                {/* Image Banner */}
                <div className="home__toast-container">
                    <ToastContainer />
                </div>
                <div className="home__slider-container">
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://film-book.com/wp-content/uploads/2020/04/hanna-season-two-tv-show-poster-banner-01-700x400-1.jpg"
                            alt="image0" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg"
                            alt="image1" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
                            alt="image2" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://www.androidauthority.com/wp-content/uploads/2019/06/amazon-prime-video-originals-one.jpg"
                            alt="image3" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/0-26.jpg"
                            alt="image4" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
                            alt="image5" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/03/Amazon-Prime-Original-Shows-Returning-2021-The-Boys-Marvelous-Mrs.-Maise-Jack-Ryan-combined-poster.jpg"
                            alt="image6" />
                    </div>
                </div>
                {/* Product id, title, price, rating, image */}
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={12320}
                        title="PlayStation 5"
                        price={50.99}
                        rating={4.5}
                        image="https://www.nme.com/wp-content/uploads/2020/10/PS5-Console.jpg"
                    />
                    <Product
                        id={12320}
                        title="Nintendo Switch"
                        price={8.99}
                        rating={4.5}
                        image="https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/08/14/how-to-find-new-switch-improved-battery-life-nintendo-cover_feature.jpg"
                    />
                    <Product
                        id={12334}
                        title="Iphone 13"
                        price={98.99}
                        rating={3.5}
                        image="https://coolhdwall.com/storage1/202107/iphone-13-pro-max-4k-phone-wallpaper-2160x3840-21.jpg"
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
                        title="Xiaomi Pad 5"
                        price={18.99}
                        rating={3.5}
                        image="https://www.powerplanetonline.com/cdnassets/xiaomi_pad_5_gris_cosmico_06_ad_l.jpg"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={12323}
                        title="LG UltraGear 4K gaming monitor"
                        price={199.99}
                        rating={3}
                        image="https://www.xda-developers.com/files/2022/01/LG-UltraGear-4K-monitor-1024x683.jpg"
                    />
                    <Product
                        id={12324}
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={2}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id={3254354345}
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={90829332}
                        title="LG UHD TV AI ThinQ"
                        price={1094.98}
                        rating={4}
                        image="https://images.immediate.co.uk/production/volatile/sites/3/2021/02/lg_vs_samsung_LG_43UN74006LB-1-f314e04.jpg?quality=90&lb=620,413&background=white"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={12326}
                        title="Apple Airpods"
                        price={20}
                        rating={5}
                        image="https://images.macrumors.com/t/jeSIj6IH-yMuFn6CI44qwcc9Q4o=/800x0/smart/article-new/2019/10/airpods-pro-roundup.jpg?lossy"
                    />
                    <Product
                        id={12328}
                        title="MSI Gaming Laptop"
                        price={598.99}
                        rating={4}
                        image="https://images.anandtech.com/doci/12307/carouselgt75vrtitproklr1550_678x452.jpg"
                    />
                    <Product
                        id={12327}
                        title="Lenovo Gaming Laptop"
                        price={98.99}
                        rating={5}
                        image="https://cdn.shopify.com/s/files/1/0355/8296/7943/products/lenovo-legion-5-15ith6h-5_1_4c2cb171-bcda-4fe1-813a-89bd7e71f4b3_800x.jpg?v=1646276269"
                    />
                    <Product
                        id={12329}
                        title="Ced Eduarte"
                        price={0.1}
                        rating={10}
                        image="https://media-exp1.licdn.com/dms/image/C5603AQFKB5mikNj8aA/profile-displayphoto-shrink_200_200/0/1647211098172?e=1652918400&v=beta&t=6a5l7C3MXwvphey5gzBeOTzilV_alNjR-Yl2bYuLbR4"
                    />
                </div>
            </div>
        </div>
    )
}

function slider(counter) {
    const slides = document.querySelectorAll(".home__image");

    slides.forEach((slide, index) => {
        if (index !== counter) {
            slide.style.visibility = `hidden`
            slide.classList.add(`image-${index}`)
        }
    })
    moveCorousal(counter, slides, slides.length)
}

function moveCorousal(counter, slides, len) {

    if (slides) {

        if (counter >= len - 1)
            counter = 0
        else
            counter += 1

        slides.forEach((slide, index) => {
            if (index === counter) {
                slide.style.visibility = `visible`
            }
            else {
                slide.style.visibility = `hidden`
            }
        })

    }
    setTimeout(() => {
        moveCorousal(counter, slides, len);
    }, 5000)

    // parseInt(counter) % 5 === 0 ? (
    //     setTimeout(() => {
    //         toast.info(`${faker.name.findName()} added new product to cart`, {
    //             position: "bottom-left"
    //         });
    //     }, 10500)
    // ) : (
    //         setTimeout(() => {
    //         }, 21000)
    //     )

}

export default Home
