import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection({ data }) {

    return (
        <div>
            <div className="hero-multi-section shop-hs">

                <div className=" shop-section container-fluid">
                    <div className="shop-hero">
                        <div className="shop-hero-heading">
                            <h2>{data.title}</h2>
                            <span><Link to={"/"}>Home</Link> &gt; {data.link}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;