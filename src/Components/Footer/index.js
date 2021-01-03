import React from 'react'

const footer = () => {
    return (
        <footer className="mnFooter">
            <div className="row">
                <div className="col-3 inrDiv">
                    <img src="./images/facebook.svg" alt="" />
                </div>
                <div className="col-3 inrDiv">
                    <img src="./images/email.svg" alt="" />
                </div>
                <div className="col-3 inrDiv">
                    <img src="./images/instagram.svg" alt="" />
                </div>
                <div className="col-3 inrDiv">
                    <img src="./images/twitter.svg" alt="" />
                </div>
            </div>
            <div className="mnContnt text-center ml-auto mr-auto">
                <h3>LOGO</h3>
                <div className="stLnks row justify-content-center">
                    <a href="">About Us</a>
                    <p>|</p>
                    <a href="">Terms & Conditions</a>
                    <p>|</p>
                    <a href="">Privacy Policy</a>
                </div>
                <div className="cpyRts">
                    <p>© 2020, All Right Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default footer;