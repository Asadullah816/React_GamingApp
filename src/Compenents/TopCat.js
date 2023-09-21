import top1 from '../images/categories-01.jpg'
import top2 from '../images/categories-02.jpg'
import top3 from '../images/categories-03.jpg'
import top4 from '../images/categories-04.jpg'
import top5 from '../images/categories-05.jpg'

function TopCat() {
    const TopData = [
        {
            id: 1,
            src: top1,
            genre: "Action"
        },
        {
            id: 2,
            src: top2,
            genre: "Action"
        },
        {
            id: 3,
            src: top3,
            genre: "Action"
        },
        {
            id: 4,
            src: top4,
            genre: "Action"
        },
        {
            id: 5,
            src: top5,
            genre: "Action"
        }
    ]
    return (
        <div>
            <div className="top-games container">
                <div className="top-header">
                    <div className="top-text">
                        <h6>CATEGORIES</h6>
                        <h2>Top Categories</h2>
                    </div>
                </div>
                <div className="top-cards row">
                    {
                        TopData.map((data) => (
                            <div className="top-card col-lg col-sm-6 col-xs-12 " key={data.id}>
                                <div className="top-bg-color">

                                    <div className="top-card-contents">
                                        <div className="top-name">

                                            <h6>{data.genre}</h6>
                                        </div>

                                    </div>
                                    <div className="top-card-img">
                                        <a href="trending.html">
                                            <img className="trend-img" src={data.src} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="top-card col-lg col-sm-6 col-xs-12">
                        <div className="top-bg-color">

                            <div className="top-card-contents">
                                <div className="top-name">

                                    <h6>Action</h6>
                                </div>

                            </div>
                            <div className="top-card-img">
                                <a href="trending.html">
                                    <img className="trend-img" src={top2} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="top-card col-lg col-sm-6 col-xs-12">
                        <div className="top-bg-color">

                            <div className="top-card-contents">
                                <div className="top-name">

                                    <h6>Action</h6>
                                </div>

                            </div>
                            <div className="top-card-img">
                                <a href="trending.html">
                                    <img className="trend-img" src={top3} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="top-card col-lg col-sm-6 col-xs-12">
                        <div className="top-bg-color">

                            <div className="top-card-contents">
                                <div className="top-name">

                                    <h6>Action</h6>
                                </div>

                            </div>
                            <div className="top-card-img">
                                <a href="trending.html">
                                    <img className="trend-img" src={top4} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="top-card col-lg col-sm-6 col-xs-12">
                        <div className="top-bg-color">

                            <div className="top-card-contents">
                                <div className="top-name">

                                    <h6>Action</h6>
                                </div>

                            </div>
                            <div className="top-card-img">
                                <a href="trending.html">
                                    <img className="trend-img" src={top5} alt="" />
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="shop-heading">
                                            <h6>OUR SHOP</h6>
                                            <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                                        </div>
                                        <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                                        <div className="shop-btn">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 align-self-end">
                            <div className="subscribe">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="shop-heading">
                                            <h6>NEWSLETTER</h6>
                                            <h2>
                                                Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!
                                            </h2>
                                        </div>
                                        <div className="sub-search">
                                            <form action="" id="subscribe">
                                                <input type="email" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" placeholder="Your email..." />
                                                <button className="sub-btn" type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TopCat;