import HeroSection from "./Compenents/HeroSection";
import Map from "./Compenents/Map";


export default function Contact() {
    const herodata = [
        {
            title: "CONTACT US  ",
            link: "Contact Us"
        }
    ]
    return (
        <div>
            {
                herodata.map((data, index) => (
                    <HeroSection key={index} data={data} />
                ))
            }
            <div class="container contact-content">
                <div class="row">
                    <div class="col-lg-6 col-md-12 align-self-center">
                        <div class="contact-left-text">
                            <div class="contact-heading">
                                <h6>CONTACT US</h6>
                                <h2>Say Hello!</h2>
                            </div>
                            <p>
                                LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.
                            </p>
                            <ul>
                                <li>
                                    <span>Address</span>
                                    Sunny Isles Beach, FL 33160, United States
                                </li>
                                <li>
                                    <span>Phone</span>
                                    +123 456 7890
                                </li>
                                <li class="">
                                    <span>Email</span>
                                    ugx@contact.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="contact-right">
                            <div class="row">
                                <div class="col-lg-12">
                                    <Map />
                                </div>
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <fieldset>
                                                <input type="text" placeholder="Your Name..." />
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-6">
                                            <fieldset>
                                                <input type="text" placeholder="Your Surname..." />
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-6">
                                            <fieldset>
                                                <input type="text" placeholder="Your Email..." />
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-6">
                                            <fieldset>
                                                <input type="text" placeholder="Your Subject..." />
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message..."></textarea>
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                                <button>
                                                    SEND MESSAGE NOW
                                                </button>
                                            </fieldset>
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