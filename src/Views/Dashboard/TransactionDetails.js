import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import Table from '../../Components/Table'

function createData(col1, col2, col3, col4, col5) {
    return { col1, col2, col3, col4, col5 };
}

const TransactionDetails = (props) => {
    const history = useHistory();

    const rowValues = [
        createData('01/11/20', '135.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('04/11/20', '137.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('07/11/20', '138.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('09/11/20', '145.00', 'ASD2135FDZXCV5484', 'Failed'),
        createData('10/11/20', '148.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('13/11/20', '150.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('15/11/20', '152.00', 'ASD2135FDZXCV5484', 'Failed'),
    ];

    const OprrowValues = [
        createData('01/11/20', 'Bruce Wayne', '135.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('04/11/20', 'Bruce Wayne', '137.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('07/11/20', 'Bruce Wayne', '138.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('09/11/20', 'Bruce Wayne', '145.00', 'ASD2135FDZXCV5484', 'Failed'),
        createData('10/11/20', 'Bruce Wayne', '148.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('13/11/20', 'Bruce Wayne', '150.00', 'ASD2135FDZXCV5484', 'Successful'),
        createData('15/11/20', 'Bruce Wayne', '152.00', 'ASD2135FDZXCV5484', 'Failed'),
    ];

    const headerValues = [
        { id: 'col1', numeric: false, disablePadding: false, label: 'Date / தேதி' },
        { id: 'col3', numeric: false, disablePadding: false, label: 'Recharge Amount / ரீசார்ஜ் தொகை' },
        { id: 'col4', numeric: false, disablePadding: false, label: 'Transaction Id /  பரிவர்த்தனை ஐடி' },
        { id: 'col5', numeric: false, disablePadding: false, label: 'Payment Status / கட்டண நிலை' },
    ]

    const OprtrheaderValues = [
        { id: 'col1', numeric: false, disablePadding: false, label: 'Date / தேதி' },
        { id: 'col2', numeric: false, disablePadding: false, label: 'User Name / பயனர் பெயர்' },
        { id: 'col3', numeric: false, disablePadding: false, label: 'Recharge Amount / ரீசார்ஜ் தொகை' },
        { id: 'col4', numeric: false, disablePadding: false, label: 'Transaction Id /  பரிவர்த்தனை ஐடி' },
        { id: 'col5', numeric: false, disablePadding: false, label: 'Payment Status / கட்டண நிலை' },
    ]

    return (
        <div className="viewPort conctDetls">
            <div className="backButton text-left">
                {props.location.pathname.includes('/userdashboard') ? (
                    <SecondaryButton onClick={() => history.push("/userdashboard")} label={<ArrowBackIcon />} />
                ) : (
                        <SecondaryButton onClick={() => history.push("/operatordashboard")} label={<ArrowBackIcon />} />
                    )}
            </div>
            <div className="tableWrapper mt-4">
                <h5 className="mb-3">TRANSACTIONS</h5>
                {props.location.pathname.includes('/userdashboard') && <Table header={headerValues} rows={rowValues} />}
                {props.location.pathname.includes('/operatordashboard') && <Table header={OprtrheaderValues} rows={OprrowValues} />}
            </div>
        </div >
    )
}

export default TransactionDetails;