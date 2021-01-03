import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import Table from '../../Components/Table'

function createData(col1, col2, col3, col4) {
    return { col1, col2, col3, col4 };
}

const UserDetails = () => {
    const history = useHistory();

    const rowValues = [
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
        createData('Bruce Wayne', '135.00', 'Wayne Industries, Gotham City, US', '9876543210'),
    ];

    const headerValues = [
        { id: 'col1', numeric: false, disablePadding: false, label: 'User Name / பயனர் பெயர்' },
        { id: 'col2', numeric: false, disablePadding: false, label: 'Monthly Payment / மாதாந்திர கட்டணம்' },
        { id: 'col3', numeric: false, disablePadding: false, label: 'Address /  முகவரி' },
        { id: 'col4', numeric: false, disablePadding: false, label: 'Phone No. / கைபேசி எண்' },
    ]

    return (
        <div className="viewPort conctDetls">
            <div className="backButton text-left">
                <SecondaryButton onClick={() => history.push("/operatordashboard")} label={<ArrowBackIcon />} />
            </div>
            <div className="tableWrapper mt-4">
                <h5 className="mb-3">USER DETAILS</h5>
                <Table header={headerValues} rows={rowValues} />
            </div>
        </div >
    )
}

export default UserDetails;