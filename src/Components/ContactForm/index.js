import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from '../TextField'
import PrimaryButton from '../Buttons/PrimaryButton'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={`${classes.root} cntcFrmCls`} Validate autoComplete="off">
            {/* <TextField id="standard-basic" label="Standard" /> */}
            <TextInput required label="Name / பெயர்" />
            <TextInput required label="Mobile No. / கைபேசி எண்" />
            <TextInput required label="e-Mail / மின்னஞ்சல்" />
            <TextInput required multiline={true} rows={6} className="msgFld" label="Message/ விவரம்" />
            <PrimaryButton label="Submit / சமர்ப்பிக்கவும்" />
        </form>
    );
}
