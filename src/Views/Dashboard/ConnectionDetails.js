import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import SelectField from '../../Components/Select'
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import CustomModal from '../../Components/Modal';
import InfoIcon from '@material-ui/icons/Info';
import { InfoRounded } from '@material-ui/icons';
import PendingTable from './PendingTable';


const ConnectionDetails = (props) => {
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const handleModalClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="viewPort conctDetls">
                <div className="backButton text-left">
                    {/* {props.location.pathname.includes('/userdashboard') && */}
                    <SecondaryButton onClick={() => history.push("/userdashboard")} label={<ArrowBackIcon />} />
                    {/* } */}
                </div>
                <div className="row">
                    <div className="leftContainer col-5">
                        <SelectField label="Select your operator / ஆபரேட்டரைத் தேர்ந்தெடுக்கவும்" values={[1, 2, 3, 4]} />
                        <div className="oprtrCard d-flex align-items-center">
                            <img className="oprLogo" src="/Images/oprlogo.png" />
                            <div className="oprDtls">
                                <h5 className="oprName">Jack Cable TV Network</h5>
                                <ul>
                                    <li>
                                        <span><LocationOnIcon /></span>
                                    Chrompet, Chennai.
                                </li>
                                    <li>
                                        <span> <PhoneIcon /> </span>
                                    9876543210
                                </li>
                                    <li>
                                        <span> <MailIcon /> </span>
                                    Jack_Cable@gmail.com
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer row col-7 pl-4">
                        <div className="col-12 mb-5">
                            <p className="amtTtle">Monthly Payment (A) / மாதாந்திர கட்டணம்</p>
                            <h4 className="amtDtl"><span>₹</span>180</h4>
                        </div>
                        <div className="col-6 mb-5">
                            <p className="amtTtle">Last Month Payment /
                        முந்தைய மாதம் செலுத்திய தொகை</p>
                            <h4 className="amtDtl"><span>₹</span>180</h4>
                        </div>
                        <div className="col-6 mb-5">
                            <div className="divWthMdl d-flex align-items-center">
                                <p className="amtTtle">Pending Payment (B) /நிலுவையில் உள்ள தொகை</p>
                                <SecondaryButton onClick={handleModalClick} label={<InfoRounded />} />
                            </div>
                            <h4 className="amtDtl"><span>₹</span>0</h4>
                        </div>
                        <div className="col-6">
                            <p className="amtTtle">Total Amount Payable (A+B)/செலுத்த வேண்டிய தொகை</p>
                            <h4 className="amtDtl"><span>₹</span>180</h4>
                        </div>
                        <div className="col-6 clkPyBtn">
                            <PrimaryButton label={<p className="m-0">Click to Pay <br /> கட்டணம் செலுத்த இங்கே கிளிக் செய்க</p>} />
                        </div>
                    </div>
                </div>
            </div >
            <CustomModal onClose={handleModalClick} open={open} title="Pending Payments">
                <PendingTable />
            </CustomModal>
        </>
    )
}

export default ConnectionDetails;