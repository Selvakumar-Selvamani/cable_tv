import React from 'react';
import { useHistory } from 'react-router-dom'
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import CustomModal from '../../Components/Modal'
import PendingTable from './PendingTable'

const UserDashboard = (props) => {

    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const handleModalClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="viewPort dashbrdView">
                {props.location.pathname === "/operatordashboard" &&
                    <div className="d-flex nmbrOfusrsDtls mb-5">
                        <div className="col-6 mb-2">
                            <div className="divWthMdl d-flex align-items-center">
                                <p className="amtTtle">Total No. of Users / மொத்த பயனர்கள்</p>
                            </div>
                            <h4 className="amtDtl">120</h4>
                        </div>
                    </div>
                }
                <div className="d-flex">
                    {props.location.pathname === "/operatordashboard" &&
                        <div className="cards" onClick={() => history.push('/operatordashboard/userdetails')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="67.532" height="44.043" viewBox="0 0 67.532 44.043">
                                <g id="user" transform="translate(0 -85.333)">
                                    <g id="Group_52" data-name="Group 52" transform="translate(23.489 85.333)">
                                        <g id="Group_51" data-name="Group 51" transform="translate(0 0)">
                                            <path id="Path_42" data-name="Path 42" d="M180.943,85.333A10.277,10.277,0,1,0,191.219,95.61,10.288,10.288,0,0,0,180.943,85.333Zm0,17.617a7.34,7.34,0,1,1,7.34-7.34A7.351,7.351,0,0,1,180.943,102.95Z" transform="translate(-170.666 -85.333)" fill="#25a4db" />
                                        </g>
                                    </g>
                                    <g id="Group_54" data-name="Group 54" transform="translate(46.979 97.078)">
                                        <g id="Group_53" data-name="Group 53" transform="translate(0 0)">
                                            <path id="Path_43" data-name="Path 43" d="M348.674,170.667a7.34,7.34,0,1,0,7.34,7.34A7.351,7.351,0,0,0,348.674,170.667Zm0,11.745a4.4,4.4,0,1,1,4.4-4.4A4.41,4.41,0,0,1,348.674,182.412Z" transform="translate(-341.334 -170.667)" fill="#25a4db" />
                                        </g>
                                    </g>
                                    <g id="Group_56" data-name="Group 56" transform="translate(6.081 97.078)">
                                        <g id="Group_55" data-name="Group 55" transform="translate(0 0)">
                                            <path id="Path_44" data-name="Path 44" d="M51.522,170.667a7.34,7.34,0,1,0,7.34,7.34A7.349,7.349,0,0,0,51.522,170.667Zm0,11.745a4.4,4.4,0,1,1,4.4-4.4A4.41,4.41,0,0,1,51.522,182.412Z" transform="translate(-44.182 -170.667)" fill="#25a4db" />
                                        </g>
                                    </g>
                                    <g id="Group_58" data-name="Group 58" transform="translate(14.681 108.822)">
                                        <g id="Group_57" data-name="Group 57">
                                            <path id="Path_45" data-name="Path 45" d="M125.751,256a19.107,19.107,0,0,0-19.085,19.085,1.468,1.468,0,0,0,2.936,0,16.149,16.149,0,1,1,32.3,0,1.468,1.468,0,0,0,2.936,0A19.107,19.107,0,0,0,125.751,256Z" transform="translate(-106.666 -256)" fill="#25a4db" />
                                        </g>
                                    </g>
                                    <g id="Group_60" data-name="Group 60" transform="translate(46.769 114.695)">
                                        <g id="Group_59" data-name="Group 59">
                                            <path id="Path_46" data-name="Path 46" d="M347.363,298.667a13.214,13.214,0,0,0-6.844,1.909,1.468,1.468,0,1,0,1.524,2.51,10.279,10.279,0,0,1,15.6,8.794,1.468,1.468,0,0,0,2.936,0A13.229,13.229,0,0,0,347.363,298.667Z" transform="translate(-339.813 -298.667)" fill="#25a4db" />
                                        </g>
                                    </g>
                                    <g id="Group_62" data-name="Group 62" transform="translate(0 114.695)">
                                        <g id="Group_61" data-name="Group 61">
                                            <path id="Path_47" data-name="Path 47" d="M20.054,300.573A13.217,13.217,0,0,0,0,311.88a1.468,1.468,0,0,0,2.936,0,10.28,10.28,0,0,1,15.594-8.8,1.468,1.468,0,0,0,1.524-2.51Z" transform="translate(0 -298.667)" fill="#25a4db" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>User Details <br />பயனர் விவரங்கள்</p>
                        </div>
                    }
                    {props.location.pathname === "/userdashboard" &&
                        <div className="cards" onClick={() => history.push('/userdashboard/connectiondetails')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.1" height="56.067" viewBox="0 0 43.1 56.067">
                                <g id="Outline" transform="translate(-127.021 -15.949)">
                                    <path id="Path_22" data-name="Path 22" d="M156.118,59.022a23.468,23.468,0,0,0,11.122-2.558,3.959,3.959,0,0,0,1.664-.98c1.288-1.288,2.174-4.053-.658-9.933V24.361a4.67,4.67,0,1,0-6.538-6.538H140.517c-5.88-2.832-8.645-1.945-9.933-.658a3.959,3.959,0,0,0-.979,1.66,22.83,22.83,0,0,0-2.329,7.272l1.849.27a21.63,21.63,0,0,1,.663-3.024,23.84,23.84,0,0,0,1.838,4.533,63.9,63.9,0,0,0,11.51,15.056,63.9,63.9,0,0,0,15.056,11.51,23.843,23.843,0,0,0,4.524,1.836,22.415,22.415,0,0,1-6.58.9,27.769,27.769,0,0,1-18.947-8.3,29.083,29.083,0,0,1-6.494-9.863,25.486,25.486,0,0,1-1.76-10.853l-1.865-.121A27.363,27.363,0,0,0,128.957,39.7a31.18,31.18,0,0,0,15,16.338v2.9h-3.737V55.2h-1.869v3.737h-1.869a.934.934,0,0,0-.934.934v3.318l-8.1,7.2a.934.934,0,0,0,.621,1.633h5.606a.934.934,0,0,0,.621-.236l1.837-1.633h2.681v.934a.934.934,0,0,0,.934.934h4.672a.934.934,0,0,0,.934-.934v-.934h2.682l1.837,1.633a.934.934,0,0,0,.621.236H156.1a.934.934,0,0,0,.621-1.633l-8.1-7.2V59.869a.934.934,0,0,0-.934-.934h-1.869V56.887A27.847,27.847,0,0,0,156.118,59.022Zm10.259-16.877a68.43,68.43,0,0,0-9.37-11.762l5.861-5.861a4.666,4.666,0,0,0,3.509.683Zm-.934-24.322a2.8,2.8,0,1,1-2.8,2.8A2.8,2.8,0,0,1,165.443,17.823Zm-3.9,5.377-5.861,5.861a68.434,68.434,0,0,0-11.762-9.37h16.941a4.666,4.666,0,0,0,.682,3.509ZM133.29,27.022c-1.15-2.239-4.215-9.2.658-9.2a15.592,15.592,0,0,1,6.494,2.048,60.92,60.92,0,0,1,13.924,10.512L143.8,40.946A60.913,60.913,0,0,1,133.29,27.022Zm11.834,15.245L155.686,31.7A60.92,60.92,0,0,1,166.2,45.629c1.3,2.53,3.842,7.235.362,9.082-1.59.407-4.265-.263-7.513-1.931A60.911,60.911,0,0,1,145.123,42.267Zm-11.8,27.879h-2.793l6.307-5.606h1.981v.722Zm4.915-1.869.579-.515v.515Zm5.251,1.869h-2.8V64.541h2.8Zm1.869-1.869v-.515l.579.515Zm5.494,1.869-5.494-4.884v-.722h1.981l6.307,5.606Zm-4.093-7.475h-9.343V60.8h9.343Z" transform="translate(0)" fill="#25a4db" />
                                    <path id="Path_23" data-name="Path 23" d="M161.871,151.2l-1.859.187c.056.561.39,2.513.484,2.92l1.821-.421C162.23,153.511,161.923,151.715,161.871,151.2Z" transform="translate(-29.138 -119.455)" fill="#25a4db" />
                                    <path id="Path_24" data-name="Path 24" d="M175.4,197.59a25.008,25.008,0,0,1-5.248-9.133l-1.783.559a26.893,26.893,0,0,0,5.641,9.822Z" transform="translate(-36.517 -152.361)" fill="#25a4db" />
                                </g>
                            </svg>
                            <p>Connection Details <br />இணைப்பு விவரங்கள்</p>
                        </div>
                    }
                    <div className="cards"
                        onClick={props.location.pathname.includes('/userdashboard') ? (() => history.push('/userdashboard/transactiondetails')) : (() => history.push('/operatordashboard/transactiondetails'))}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="56.067" height="56.067" viewBox="0 0 56.067 56.067">
                            <g id="Group_44" data-name="Group 44" transform="translate(-389 -421)">
                                <g id="transaction" transform="translate(445.067 421) rotate(90)">
                                    <path id="Path_25" data-name="Path 25" d="M0,0H1.809V1.809H0Z" transform="translate(42.502 50.641)" fill="#25a4db" />
                                    <path id="Path_26" data-name="Path 26" d="M0,0H1.809V1.809H0Z" transform="translate(42.502 47.024)" fill="#25a4db" />
                                    <path id="Path_27" data-name="Path 27" d="M0,0H1.809V1.809H0Z" transform="translate(42.502 43.407)" fill="#25a4db" />
                                    <path id="Path_28" data-name="Path 28" d="M0,0H1.809V1.809H0Z" transform="translate(11.756 3.617)" fill="#25a4db" />
                                    <path id="Path_29" data-name="Path 29" d="M0,0H1.809V1.809H0Z" transform="translate(11.756 7.234)" fill="#25a4db" />
                                    <path id="Path_30" data-name="Path 30" d="M0,0H1.809V1.809H0Z" transform="translate(11.756 10.852)" fill="#25a4db" />
                                    <path id="Path_31" data-name="Path 31" d="M13.565,0A13.565,13.565,0,1,0,27.129,13.565,13.58,13.58,0,0,0,13.565,0Zm0,25.32A11.756,11.756,0,1,1,25.32,13.565,11.77,11.77,0,0,1,13.565,25.32Z" transform="translate(14.469 14.469)" fill="#25a4db" />
                                    <g id="Group_39" data-name="Group 39" transform="translate(28.938 12.66) rotate(90)">
                                        <path id="Path_33" data-name="Path 33" d="M0,0H1.809V1.809H0Z" transform="translate(28.938)" fill="#25a4db" />
                                        <path id="Path_34" data-name="Path 34" d="M0,0H1.809V1.809H0Z" transform="translate(0)" fill="#25a4db" />
                                    </g>
                                    <path id="Path_35" data-name="Path 35" d="M54.258,28.033a3.58,3.58,0,0,0-1.809.5V20.8a2.7,2.7,0,0,0-3.722-2.514,2.706,2.706,0,0,0-5.321.705v1.416A17.112,17.112,0,0,0,17.885,14.2l-.7-.937V0H2.713V11.455L.9,13.867A4.549,4.549,0,0,0,0,16.579V28.033H1.809a3.58,3.58,0,0,0,1.809-.5v7.737a2.7,2.7,0,0,0,3.722,2.514,2.706,2.706,0,0,0,5.321-.705V35.66a17.112,17.112,0,0,0,25.521,6.206l.7.937V56.067H53.354V44.612L55.162,42.2a4.549,4.549,0,0,0,.9-2.713V28.033ZM10.852,37.076a.9.9,0,0,1-1.809,0V28.033H7.234v7.234a.9.9,0,1,1-1.809,0V21.358l.885-.442a6.327,6.327,0,0,0,3.311-4.126l.3-1.2-1.754-.439-.3,1.2A4.517,4.517,0,0,1,5.5,19.3l-1.885.942v4.176a1.81,1.81,0,0,1-1.809,1.809V16.579a2.727,2.727,0,0,1,.543-1.628l2.17-2.894V1.809H15.373V13.866l1.112,1.482a17.121,17.121,0,0,0-5.634,12.686Zm1.809-9.043A15.373,15.373,0,1,1,28.033,43.407,15.39,15.39,0,0,1,12.66,28.033Zm41.6,11.455a2.729,2.729,0,0,1-.543,1.628l-2.17,2.894V54.258H40.694V42.2l-1.112-1.482a17.121,17.121,0,0,0,5.634-12.686V18.99a.9.9,0,1,1,1.809,0v9.043h1.809V20.8a.9.9,0,1,1,1.809,0v13.91l-.885.442a6.327,6.327,0,0,0-3.311,4.126l-.3,1.2,1.754.439.3-1.2a4.517,4.517,0,0,1,2.365-2.948l1.885-.941V31.651a1.81,1.81,0,0,1,1.809-1.809Z" fill="#25a4db" />
                                    <path id="Path_36" data-name="Path 36" d="M2.605,1.176C2.091.761,1.554.366,1.011,0L0,1.5c.5.338,1,.7,1.472,1.085Z" transform="translate(40.148 8.523)" fill="#25a4db" />
                                    <path id="Path_37" data-name="Path 37" d="M2.713,5.426a2.708,2.708,0,0,0,2.68-2.387A21.983,21.983,0,0,1,19.461,5.372l.869-1.586A23.8,23.8,0,0,0,5,1.271a2.71,2.71,0,1,0-2.29,4.154Zm0-3.617a.9.9,0,1,1-.9.9A.906.906,0,0,1,2.713,1.809Z" transform="translate(18.99 3.617)" fill="#25a4db" />
                                    <path id="Path_38" data-name="Path 38" d="M0,1.409c.515.414,1.051.809,1.594,1.176l1.011-1.5C2.1.747,1.608.382,1.133,0Z" transform="translate(13.313 44.959)" fill="#25a4db" />
                                    <path id="Path_39" data-name="Path 39" d="M17.617,0a2.708,2.708,0,0,0-2.68,2.387A21.982,21.982,0,0,1,.869.055L0,1.641a23.555,23.555,0,0,0,11.287,2.88,23.763,23.763,0,0,0,4.048-.354A2.71,2.71,0,1,0,17.617,0Zm0,3.617a.9.9,0,1,1,.9-.9A.906.906,0,0,1,17.617,3.617Z" transform="translate(16.747 47.024)" fill="#25a4db" />
                                </g>
                                <g id="Group_43" data-name="Group 43" transform="translate(411.549 440.751)">
                                    <g id="Group_42" data-name="Group 42">
                                        <path id="Path_41" data-name="Path 41" d="M170.046,131.656h-1.007a4.508,4.508,0,0,0-.844-1.828h1.852a.914.914,0,0,0,0-1.828h-9.139a.914.914,0,0,0,0,1.828h3.656a2.737,2.737,0,0,1,2.574,1.828h-6.229a.914.914,0,0,0,0,1.828h6.229a2.737,2.737,0,0,1-2.574,1.828h-3.656a.914.914,0,0,0-.844.565.907.907,0,0,0,0,.7.871.871,0,0,0,.2.3l7.31,7.31a.914.914,0,1,0,1.294-1.29l-5.752-5.752h1.449a4.574,4.574,0,0,0,4.476-3.656h1.007a.914.914,0,0,0,0-1.828Z" transform="translate(-159.992 -128)" fill="#25a4db" />
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <p>Transaction Details<br />பரிவர்த்தனை விவரங்கள்</p>
                    </div>
                    <div className="cards" onClick={handleModalClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="83.119" height="49.177" viewBox="0 0 83.119 49.177">
                            <g id="Group_142" data-name="Group 142" transform="translate(-801 -343.29)">
                                <g id="rupee_1_" data-name="rupee (1)" transform="translate(801 343.29)">
                                    <path id="Path_74" data-name="Path 74" d="M206.357,90.611a.8.8,0,0,0,0-1.607h-8.007a.8.8,0,1,0,0,1.607h2.29a2.545,2.545,0,0,1,2.505,1.741h-4.8a.8.8,0,1,0,0,1.607h4.8a2.662,2.662,0,0,1-2.505,1.875h-2.29a.8.8,0,0,0-.552,1.377l5.726,5.409a.8.8,0,0,0,1.1-1.162l-4.258-4.016h.27A4.234,4.234,0,0,0,204.8,93.96h1.554a.8.8,0,0,0,0-1.607H204.8a4.03,4.03,0,0,0-.842-1.741Zm0,0" transform="translate(-171.086 -77.083)" fill="#25a4db" />
                                    <path id="Path_75" data-name="Path 75" d="M85.13,37.777c-2.214-.036-3.717-.516-4.732-1.511-1.108-1.086-1.679-2.884-1.744-5.462a.818.818,0,0,0-.8-.8H37.8a.819.819,0,0,0-.8.8c-.152,5.918-1.651,6.906-5.231,6.963A.793.793,0,0,0,31,38.58V51.014a.785.785,0,0,0,.769.8c3.748.061,5.094,1.146,5.242,6.98a.817.817,0,0,0,.793.809H77.777a.826.826,0,0,0,.8-.808c.125-4.867,2.02-6.895,6.55-6.967a.812.812,0,0,0,.787-.817V38.58a.8.8,0,0,0-.788-.8Zm-.82,12.467c-4.554.317-6.961,2.8-7.3,7.755H38.577c-.134-2.813-.576-4.554-1.49-5.738a5.709,5.709,0,0,0-4.481-2.017V39.35c4.554-.336,5.751-3.05,5.972-7.738H77.083c.176,2.679.893,4.517,2.188,5.786a7.792,7.792,0,0,0,5.039,1.954Zm0,0" transform="translate(-26.846 -25.986)" fill="#25a4db" />
                                    <path id="Path_76" data-name="Path 76" d="M159.3,54.836A11.467,11.467,0,1,0,170.766,66.3,11.467,11.467,0,0,0,159.3,54.836Zm0,21.326a9.859,9.859,0,1,1,9.859-9.859A9.859,9.859,0,0,1,159.3,76.162Zm0,0" transform="translate(-128.031 -47.491)" fill="#25a4db" />
                                    <path id="Path_77" data-name="Path 77" d="M65.568,4.022H62.42V.87A.819.819,0,0,0,61.666,0H.871A.918.918,0,0,0,0,.87V36.761a.819.819,0,0,0,.871.748H4.018v3.153a.818.818,0,0,0,.753.865h60.8a.805.805,0,0,0,.737-.865V4.771a.7.7,0,0,0-.737-.749ZM1.607,1.611H60.812V35.9H1.607ZM64.7,39.92H5.626V37.509H61.666a.717.717,0,0,0,.753-.748V5.63H64.7Zm0,0" transform="translate(0 -0.004)" fill="#25a4db" />
                                </g>
                                <g id="Group_141" data-name="Group 141" transform="translate(846.151 354.499)">
                                    <g id="Group_140" data-name="Group 140" transform="translate(-0.047 -0.047)">
                                        <circle id="Ellipse_12" data-name="Ellipse 12" cx="18.983" cy="18.983" r="18.983" fill="#fff" />
                                        <path id="Path_79" data-name="Path 79" d="M32.393,5.558A18.976,18.976,0,1,0,5.558,32.393,18.976,18.976,0,1,0,32.393,5.558ZM31.6,31.6A17.851,17.851,0,1,1,6.353,6.353,17.851,17.851,0,1,1,31.6,31.6ZM30.8,7.148A16.727,16.727,0,0,0,7.148,30.8,16.73,16.73,0,0,0,33.715,26.89a.562.562,0,0,0-.991-.533,15.52,15.52,0,1,1,.956-2.156.562.562,0,1,0,1.06.377A16.749,16.749,0,0,0,30.8,7.148Z" transform="translate(0.064 0.064)" fill="#25a4db" />
                                    </g>
                                    <g id="Group_139" data-name="Group 139" transform="translate(16.051 6.057)">
                                        <path id="Path_80" data-name="Path 80" d="M12.96,6.006a3.126,3.126,0,0,0-3.1,3.354l1.108,13.891a2,2,0,0,0,3.978,0l.249-3.124a.843.843,0,0,0-1.681-.134l-.249,3.124a.309.309,0,0,1-.617,0L11.544,9.226a1.421,1.421,0,1,1,2.834,0l-.611,7.661a.843.843,0,0,0,1.681.134l.611-7.661A3.139,3.139,0,0,0,12.96,6.006Zm0,20.691a2.653,2.653,0,1,0,2.653,2.653A2.656,2.656,0,0,0,12.96,26.7Zm0,3.62a.967.967,0,1,1,.967-.967A.968.968,0,0,1,12.96,30.317Z" transform="translate(-9.852 -6.006)" fill="#25a4db" />
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <p>Pending Transactions<br />நிலுவையில் உள்ள தொகை</p>
                    </div>
                </div>
            </div>
            <CustomModal onClose={handleModalClick} open={open} title="Pending Payments">
                <PendingTable />
            </CustomModal>
        </>
    )
}

export default UserDashboard;