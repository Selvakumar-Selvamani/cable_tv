import React from 'react';
import BannerCarousel from '../../Components/BannerCarousel'
import MultiCarousel from '../../Components/MultiCarousel'
import { channellogos, bannerimages } from '../../Utils/Constants'
import ContactForm from '../../Components/ContactForm'
import Footer from '../../Components/Footer'

const Homepage = () => {
    return (
        <div className="viewPort hmPageContainer">
            <div className="bannerWrapper">
                <BannerCarousel images={bannerimages} />
            </div>
            <div className="chnlLogoCarousel mt-4">
                <h1 className="crlHd text-center mb-3 pl-3 pr-3">WATCH MULTI LANGUAGE CHANNELS ON A SINGLE CABLE</h1>
                <MultiCarousel images={channellogos} />
            </div>
            <div className="whyUsWrppr mt-5 container">
                <h2 className="ttleTxt text-center mb-5">WHY<span className="ttleClr">US?</span></h2>
                <div className="contContainer row align-items-center mt-5">
                    <div className="col-6 text-center pl-3 pr-3">
                        <img src="./images/img1.png" />
                    </div>
                    <div className="col-6">
                        <h3 className="contHdr">Get Instant Access To Accounts</h3>
                        <p className="contDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                    </div>
                </div>
                <div className="contContainer row align-items-center mt-5">
                    <div className="col-6 text-right">
                        <h3 className="contHdr">Get Instant Access To Accounts</h3>
                        <p className="contDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                    </div>
                    <div className="col-6 text-center pl-3 pr-3">
                        <img src="./images/img2.png" />
                    </div>
                </div>
            </div>
            <div id="contactus" className="contactWrapper whyUsWrppr mt-4">
                <h2 className="ttleTxt text-center mb-5">CONTACT<span className="ttleClr">US</span></h2>
                <div className="contactForm">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;