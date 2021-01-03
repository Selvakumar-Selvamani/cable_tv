import React, { useRef } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import './Header.css';

const Header = () => {

    const history = useHistory();

    return (
        <nav className="mainHeader d-flex align-items-center justify-content-between">
            <h2 className="m-0">
                LOGO
            </h2>
            <div className="rightNavs d-flex align-items-center">
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="" activeClassName="inactive">Service</NavLink>
                <NavLink to="/home#contactus" activeClassName="inactive">Contact Us</NavLink>
                <PrimaryButton className="" label="User Login" onClick={() => { history.push('/userlogin') }} />
                <SecondaryButton className="" label="Operator Login" onClick={() => { history.push('/operatorlogin') }} />
                {/* <PrimaryButton className="" label="User Login" onClick={() => { window.location.href = '/userlogin' }} /> */}
                {/* <SecondaryButton className="" label="Operator Login" onClick={() => { window.location.href = '/operatorlogin' }} /> */}
            </div>
        </nav>
    )
}

export default Header;