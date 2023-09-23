import HeroSection from "./Compenents/HeroSection"
import img from './images/single-game.jpg'
import { useParams } from "react-router-dom";

export default function Product({ ShopData }) {
    const herodata = [
        {
            title: "PRODUCT DETAIL",
            link: "Product Detail"
        }
    ]
    const { id } = useParams();

    console.log("this is the data", ShopData)

    // Find the data item that matches the extracted ID
    const product = ShopData.find((data) => data.id === parseInt(id));

    console.log("product", product)

    // Handle cases where the product is not found 
    if (!product) {
        return <div>Product not found</div>;
    }
    return (

        <div>

            {
                herodata.map((data, index) => (
                    <HeroSection key={index} data={data} />
                ))
            }

            {
                <div className="container pad-top">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pdd">
                            <div className="game-img">
                                <img className="img-fluid" src={product.src} alt="" />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 pdd">
                            <div className="game-content">
                                <div className="g-heading">
                                    <h2>{product.name}</h2>
                                </div>
                                <div className="g-price">
                                    <span className="span-1">$28</span>
                                    <span className="span-2">$20</span>
                                </div>
                                <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                                <div className="game-input">
                                    <form action="">
                                        <input type="text" name="" id="" placeholder="1"
                                            value="1" />
                                        <button><i className="fa-solid fa-bag-shopping s-bag"></i>Add to cart</button>
                                    </form>
                                </div>
                                <div className="g-detail-area d-flex">
                                    <div className="games-detail-col pe-5">
                                        <div className="g-names">
                                            <ul>
                                                <li>
                                                    Game ID:
                                                </li>
                                                <li>
                                                    Ganre:
                                                </li>
                                                <li>
                                                    Multi-tags:
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="games-detail-col">
                                        <div className="g-detail">
                                            <ul>
                                                <li>
                                                    {product.id}
                                                </li>
                                                <li>
                                                    {product.genre}
                                                </li>
                                                <li>
                                                    {product.genre}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
            <div className="container">
                <div className="game-para">
                    <div className="g-tabs">
                        <ul>
                            <li className="g-li1">
                                Description
                            </li>
                            <li className="g-li2">
                                Reviews (3)
                            </li>
                        </ul>
                    </div>
                    <div className="g-text pt-4">
                        <p>You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
                        <br />
                        <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}