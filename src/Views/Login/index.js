import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import BannerCarousel from '../../Components/BannerCarousel'
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { loginimages } from '../../Utils/Constants'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextInput from '../../Components/TextField'

const Login = (props) => {

    const history = useHistory();

    return (
        <div className="viewPort logContainer row">
            <div className="col-6">
                <BannerCarousel images={loginimages} />
            </div>
            <div className="col-6 p-4 pr-5">
                <div className="backButton">
                    <SecondaryButton onClick={() => history.push("/home")} label={<ArrowBackIcon />} />
                </div>
                <div className="contWrapper">
                    <h1><b>LOGO</b></h1>
                    {props.location.pathname === '/userlogin' ? (
                        <form className="mt-5">
                            <div className="d-flex w-100 align-items-center">
                                <TextInput required="required" label="Mobile No. / கைபேசி எண்" />
                                <PrimaryButton label={<ArrowForwardIcon />} onClick={() => history.push('/userdashboard')} />
                            </div>
                            <p className="info">புதிய கணக்கிற்கு உங்கள் கேபிள் டிவி ஆபரேட்டரைத் தொடர்பு கொள்ளுங்கள்</p>
                        </form>
                    ) : (<form className="mt-5">
                        <TextInput required="required" label="Mobile No. / கைபேசி எண்" />
                        <div className="d-flex w-100 align-items-center mt-3">
                            <TextInput required="required" label="Password / கடவுச்சொல்" />
                            <PrimaryButton onClick={() => history.push("/operatordashboard")} label={<ArrowForwardIcon />} />
                        </div>
                        <p className="info">Need an account?&nbsp;<Link to="/contactus">Contact Us</Link>
                            <br />புதிய கணக்கு தேவையா?&nbsp;
                        <Link to="/contactus">இங்கே கிளிக் செய்க</Link></p>
                    </form>)}
                </div>
            </div>
        </div>
    )
}

export default Login;