import { Container, Row, Col } from 'react-bootstrap';
import tImg from '../../src/images/trending-01.jpg'
import tImg2 from '../../src/images/trending-02.jpg'
import tImg3 from '../../src/images/trending-03.jpg'
import tImg4 from '../../src/images/trending-04.jpg'
import { BsFillHandbagFill } from 'react-icons/bs'
function Trending() {
    const trendData = [
        {
            id: 1,
            name: "Stars War2",
            src: tImg,
            genre: "Action"
        },
        {
            id: 2,
            name: "Stars War2",
            src: tImg2,
            genre: "Action"
        },
        {
            id: 3,
            name: "Stars War2",
            src: tImg3,
            genre: "Action"
        },
        {
            id: 4,
            name: "Stars War2",
            src: tImg4,
            genre: "Action"
        }
    ]
    return (
        <div>
            <Container className='trending-games '>

                <div className="tren-header">
                    <div className="tren-text">
                        <h6>TRENDING</h6>
                        <h2>Trending Games</h2>
                    </div>
                    <div className="tren-btn">
                        <button>VIEW ALL</button>
                    </div>
                </div>
                <div className="trend-cards row">
                    {

                        trendData.map((data) => (
                            <div className="trend-card col-lg-3 col-md-6 col-sm-12  ">
                                <div className="trend-bg-color">
                                    <div className="trend-card-img">
                                        <a href="trending.html">
                                            <img className='trend-img' src={data.src} alt="" />
                                        </a>
                                    </div>
                                    <div className="trend-card-contents">
                                        <div className="tc-name">
                                            <p>{data.genre}</p>
                                            <h6>{data.name}</h6>
                                        </div>
                                        <div className="tc-icon tc-bag d-flex justify-content-center align-items-center">
                                            <BsFillHandbagFill className='bag-icon' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </Container >
        </div >
    )
}
export default Trending;