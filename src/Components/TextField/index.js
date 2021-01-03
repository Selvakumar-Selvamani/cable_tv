import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Text.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.root} txtFldWrp`}>
            <TextField required={props.required} multiline={props.multiline} rows={props.rows} className={`${props.className} txtField`} label={props.label} placeholder={props.placeholder} />
        </div >
    );
}
