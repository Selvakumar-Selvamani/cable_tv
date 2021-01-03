import React from 'react';
import Table from '../../Components/Table'

function createData(col1, col2) {
    return { col1, col2 };
}

const PendingTable = () => {

    const rowValues = [
        createData('01/11/20', '135.00'),
        createData('04/11/20', '137.00'),
        createData('07/11/20', '138.00'),
        createData('09/11/20', '145.00'),
        createData('10/11/20', '148.00'),
        createData('13/11/20', '150.00'),
        createData('15/11/20', '152.00'),
    ];

    const headerValues = [
        { id: 'col1', numeric: false, disablePadding: false, label: 'Date / தேதி' },
        { id: 'col2', numeric: false, disablePadding: false, label: 'Recharge Amount / ரீசார்ஜ் தொகை' },
    ]

    return (
        <Table header={headerValues} rows={rowValues} />
    )
}

export default PendingTable;