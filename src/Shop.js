import HeroSection from "./Compenents/HeroSection"
import { Container } from "react-bootstrap"

import { BsFillHandbagFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { useState } from "react"
import { ShopData } from "./shopData"


export default function Shop() {

    const heroData = [
        {
            title: "OUR SHOP", link: "Shop"
        }
    ]


    const filterAdvData = ShopData.filter((data) => data.cg === 1);
    const filterRacedData = ShopData.filter((data) => data.cg === 2);
    const filterStrdData = ShopData.filter((data) => data.cg === 3);
    const [toggle, setToggle] = useState(1);

    function tabToggle(id) {
        setToggle(id)
    }

    return (

        <div>
            {
                heroData.map((data, index) => (
                    <HeroSection key={index} data={data} />
                ))
            }

            <div className="tab-targets">
                <ul className="tab-ul">
                    <li className={toggle === 0 ? "tab-li active-li active-tab" : "tab-li "} onClick={() => tabToggle(0)}>
                        Show All
                    </li>
                    <li className={toggle === 1 ? "tab-li active-li active-tab" : "tab-li "} onClick={() => tabToggle(1)}>
                        Adventure
                    </li>
                    <li className={toggle === 2 ? "tab-li active-li active-tab" : "tab-li "} onClick={() => tabToggle(2)}>
                        Strategy
                    </li>
                    <li className={toggle === 3 ? "tab-li active-li active-tab" : "tab-li "} onClick={() => tabToggle(3)}>
                        Racing
                    </li>
                </ul>
            </div>

            <Container>
                <div className="trending-games container">

                    <div className={toggle === 0 ? "trend-cards row active" : "not-active "}>
                        {

                            ShopData.map((data) => (


                                <div className="trend-card shop-trend-card col-lg-3 col-md-6 col-sm-12  trend-card-an" key={data.id}>
                                    <div className="trend-bg-color">
                                        <div className="trend-card-img">
                                            <Link to={`/Product/${data.id}`}>
                                                <img className="trend-img" src={data.src} alt="" />
                                            </Link>

                                        </div>
                                        <div className="trend-card-contents">
                                            <div className="tc-name">
                                                <p>{data.genre}</p>
                                                <h6>{data.name}</h6>
                                            </div>
                                            <div className="tc-icon tc-bag">
                                                <BsFillHandbagFill className='bag-icon' />
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
                <div className="trending-games container">

                    <div className={toggle === 1 ? "trend-cards row active" : "not-active "}>


                        {
                            filterAdvData.map((data) => (
                                <div className="trend-card shop-trend-card col-lg-3 col-md-6 col-sm-12  trend-card-an" key={data.id}>
                                    <div className="trend-bg-color">
                                        <div className="trend-card-img">
                                            <Link to={`/Product/${data.id}`}>
                                                <img className="trend-img" src={data.src} alt="" />
                                            </Link>

                                        </div>
                                        <div className="trend-card-contents">
                                            <div className="tc-name">
                                                <p>{data.genre}</p>
                                                <h6>{data.name}</h6>
                                            </div>
                                            <div className="tc-icon tc-bag">
                                                <BsFillHandbagFill className='bag-icon' />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
                <div id="adventure" className="shop-tab" data-tab-content>
                    <div className="trending-games container">

                        <div className={toggle === 2 ? "trend-cards row active" : "not-active"}>

                            {
                                filterStrdData.map((data) => (
                                    <div className="trend-card col-lg-3 col-md-6 col-sm-12  trend-card-an" key={data.id}>
                                        <div className="trend-bg-color">
                                            <div className="trend-card-img">
                                                <Link to={`/Product/${data.id}`}>
                                                    <img className="trend-img" src={data.src} alt="" />
                                                </Link>
                                            </div>
                                            <div className="trend-card-contents">
                                                <div className="tc-name">
                                                    <p>{data.genre}</p>
                                                    <h6>{data.name}</h6>
                                                </div>
                                                <div className="tc-icon tc-bag">
                                                    <BsFillHandbagFill className="bag-icon" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div id="racing" className="shop-tab" data-tab-content>
                    <div className="trending-games container">

                        <div className={toggle === 3 ? "trend-cards row active" : "not-active"}>
                            {
                                filterRacedData.map((data) => (
                                    <div className="trend-card col-lg-3 col-md-6 col-sm-12  trend-card-an" key={data.id}>
                                        <div className="trend-bg-color">
                                            <div className="trend-card-img">
                                                <Link to={`/Product/${data.id}`}>
                                                    <img className="trend-img" src={data.src} alt="" />
                                                </Link>
                                            </div>
                                            <div className="trend-card-contents">
                                                <div className="tc-name">
                                                    <p>{data.genre}</p>
                                                    <h6>{data.name}</h6>
                                                </div>
                                                <div className="tc-icon tc-bag">
                                                    <BsFillHandbagFill className="bag-icon" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </Container >
        </div >
    )
}