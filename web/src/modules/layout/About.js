import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    typography: {
        color: 'black',
    },
    iconHome: {
        fontSize: 50,
        color: blue[500],
        marginTop: theme.spacing(3),
    },
    box: {
        padding: 0,
        height: "80vh",
        margin: 'auto',
    },
}));

const About = (props) => {
    const classes = useStyles();
    return (
        <Grid container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Grid item xs={12} sm={6}>
                <br />
                <Typography variant={'h2'}>Project 34: MechAcov</Typography>
                <br />
                <Typography className={classes.typography}>
                    Development of a tool for mechanistic meta-analyses using COVID-19 available data as proof of concept
                </Typography>
            </Grid>
        </Grid>
    );
}

export default About;