import React from 'react';
import './Button.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function PrimaryButton(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.root, props.className} primButton`}>
            <Button variant="contained" onClick={props.onClick}>{props.label}</Button>
        </div>
    );
}
