import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rightImg from './images/banner-image.jpg'
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { CloudDownload } from 'react-bootstrap-icons';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { LuLayoutDashboard } from 'react-icons/lu';
import Trending from './Compenents/Trending';
import MostPlayed from './Compenents/MostPlayed';
import TopCat from './Compenents/TopCat';









function Home() {
    const [val, setVal] = useState("");
    function inpVal(e) {
        setVal(e.target.value);
    }
    return (

        <div className="hero-section">
            <div className="hero d-flex justify-content-center align-items-center">



                <Container>
                    <Row className=' d-flex justify-content-between'>
                        <Col className='hero-content flex-column'>
                            <div className="hero-text">
                                <h6>WELCOME TO LUGX</h6>
                                <h2>BEST GAMING SITE EVER!</h2>
                                <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can
                                    download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
                                </p>
                                <div className="search">
                                    <form className="input-form" action="">
                                        <input type="text" onChange={inpVal} placeholder='Type something' />
                                        <button className="search-btn">SEARCH NOW</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col className='hero-right-img align-self-end d-flex justify-content-end'>
                            <div className="hero-img">
                                <img className='' src={rightImg} alt="" />
                            </div>
                            <div className="hero-price">
                                <span>$22</span>
                            </div>
                            <div class="hero-percent">
                                <span>-40%</span>
                            </div>
                        </Col>
                    </Row>

                </Container>


            </div>
            <Container className='hero-cards'>

                <Row className='p-0'>
                    <Col className=" cards">
                        <a className="text-decoration-none" href="#">
                            <div className="card">
                                <div className="card-icon d-flex justify-content-center align-items-center">
                                    <CloudDownload className='icon' />

                                </div>
                                <h6 className="hc-text">
                                    FREE STORAGE
                                </h6>
                            </div>
                        </a>
                    </Col>
                    <Col className=" cards ">
                        <a className="text-decoration-none" href="#">
                            <div className="card">
                                <div className="card-icon d-flex justify-content-center align-items-center">
                                    <IoPersonCircleOutline className='icon' />
                                </div>
                                <h6 className="hc-text">
                                    USER MORE
                                </h6>
                            </div>
                        </a>
                    </Col>
                    <Col className="cards ">
                        <a className="text-decoration-none" href="#">
                            <div className="card">
                                <div className="card-icon d-flex justify-content-center align-items-center">
                                    <AiOutlinePlayCircle className='icon' />

                                </div>
                                <h6 className="hc-text">
                                    REPLY READY
                                </h6>
                            </div>
                        </a>
                    </Col>
                    <Col className="cards ">
                        <a className="text-decoration-none" href="#">
                            <div className="card">
                                <div className="card-icon d-flex justify-content-center align-items-center">
                                    <LuLayoutDashboard className='icon' />

                                </div>
                                <h6 className="hc-text">
                                    EASY LAYOUT
                                </h6>
                            </div>
                        </a>
                    </Col>
                </Row>

            </Container >
            <Trending />
            <MostPlayed />
            <TopCat />
        </div >
    )
}
export default Home;