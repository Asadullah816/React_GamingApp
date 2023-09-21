import mI1 from '../images/top-game-01.jpg'
import mI2 from '../images/top-game-02.jpg'
import mI3 from '../images/top-game-03.jpg'
import mI4 from '../images/top-game-04.jpg'
import mI5 from '../images/top-game-05.jpg'
import mI6 from '../images/top-game-06.jpg'
function MostPlayed() {
    const MpData = [
        {
            id: 1,
            name: "Warframe",
            src: mI1,
            alt: "Most Popular games",
            genre: "Action"

        },
        {
            id: 2,
            name: "WareFrame",
            src: mI2,
            alt: "Most Popular games",
            genre: "Action"

        },
        {
            id: 3,
            name: "Apex Legends",
            src: mI3,
            alt: "Most Popular games",
            genre: "Action"

        },
        {
            id: 4,
            name: "The Sims 4",
            src: mI4,
            alt: "The Sims 4",
            genre: "Adventure"

        },
        {
            id: 5,
            name: "LOsT Ark",
            src: mI5,
            alt: "Most Popular games",
            genre: "Adventure"

        },
        {
            id: 6,
            name: "Destiny 2",
            src: mI6,
            alt: "Most Popular games",
            genre: "Adventure"

        },
    ]
    return (
        <div>
            <div className="most-played-section container-fluid">
                <div className="most-played container">
                    <div className="mp-header">
                        <div className="mp-text">
                            <h6>TOP GAMES</h6>
                            <h2>MOST PLAYED</h2>
                        </div>
                        <div className="mp-btn">
                            <button>VIEW ALL</button>
                        </div>
                    </div>
                    <div className="mp-cards row">
                        {MpData.map((data) => (
                            <div className="mp-card col-lg-2 col-md-4 col-sm-12  " key={data.id}>
                                <div className="mp-bg-color">
                                    <div className="mp-card-img">
                                        <a href="trending.html">
                                            <img className="mp-img" src={data.src} alt={data.alt} />
                                        </a>
                                    </div>
                                    <div className="mp-card-contents">
                                        <div className="mp-name d-flex align-items-center justify-content-center flex-column ">
                                            <p>{data.genre}</p>
                                            <h6 className="p-3">{data.name}</h6>
                                        </div>
                                        <div className="mp-btn-bottom">
                                            <button className="mp-butn">EXPLORE</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))

                        }
                        {/* <div className="mp-card col-lg-2 col-md-4 col-sm-12  ">
                            <div className="mp-bg-color">
                                <div className="mp-card-img">
                                    <a href="trending.html">
                                        <img className="mp-img" src={mI2} alt="" />
                                    </a>
                                </div>
                                <div className="mp-card-contents">
                                    <div className="mp-name d-flex align-items-center justify-content-center flex-column ">
                                        <p>Adventure</p>
                                        <h6 className="p-3">Assasin Creed</h6>
                                    </div>
                                    <div className="mp-btn-bottom">
                                        <button className="mp-butn">EXPLORE</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mp-card col-lg-2 col-md-4 col-sm-12  ">
                            <div className="mp-bg-color">
                                <div className="mp-card-img">
                                    <a href="trending.html">
                                        <img className="mp-img" src={mI3} alt="" />
                                    </a>
                                </div>
                                <div className="mp-card-contents">
                                    <div className="mp-name d-flex align-items-center justify-content-center flex-column ">
                                        <p>Adventure</p>
                                        <h6 className="p-3">Assasin Creed</h6>
                                    </div>
                                    <div className="mp-btn-bottom">
                                        <button className="mp-butn">EXPLORE</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mp-card col-lg-2 col-md-4 col-sm-12  ">
                            <div className="mp-bg-color">
                                <div className="mp-card-img">
                                    <a href="trending.html">
                                        <img className="mp-img" src={mI4} alt="" />
                                    </a>
                                </div>
                                <div className="mp-card-contents">
                                    <div className="mp-name d-flex align-items-center justify-content-center flex-column ">
                                        <p>Adventure</p>
                                        <h6 className="p-3">Assasin Creed</h6>
                                    </div>
                                    <div className="mp-btn-bottom">
                                        <button className="mp-butn">EXPLORE</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mp-card col-lg-2 col-md-4 col-sm-12  ">
                            <div className="mp-bg-color">
                                <div className="mp-card-img">
                                    <a href="trending.html">
                                        <img className="mp-img" src={mI5} alt="" />
                                    </a>
                                </div>
                                <div className="mp-card-contents">
                                    <div className="mp-name d-flex align-items-center justify-content-center flex-column ">
                                        <p>Adventure</p>
                                        <h6 className="p-3">Assasin Creed</h6>
                                    </div>
                                    <div className="mp-btn-bottom">
                                        <button className="mp-butn">EXPLORE</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mp-card col-lg-2 col-md-4 col-sm-12  ">
                            <div className="mp-bg-color">
                                <div className="mp-card-img">
                                    <a href="trending.html">
                                        <img className="mp-img" src={mI6} alt="" />
                                    </a>
                                </div>
                                <div className="mp-card-contents">
                                    <div className="mp-name d-flex align-items-center justify-content-center flex-column ">
                                        <p>Adventure</p>
                                        <h6 className="p-3">Assasin Creed</h6>
                                    </div>
                                    <div className="mp-btn-bottom">
                                        <button className="mp-butn">EXPLORE</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostPlayed;