import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Copyright from '../Copyright/Copyright';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
let theme = createTheme({});
theme = {
    ...theme,
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            root: {
                color: "white",
            },
            outlined: {
                [theme.breakpoints.down("xs")]: {
                    width: "90px",
                    height: "50px"
                },
                border: "1px solid white;",
                width: "150px",
                height: "70px"
            }
        },

    },
};


const StopWatch = () => {
    const theme1 = useTheme();
    const isSmallScreen = useMediaQuery(theme1.breakpoints.down("xs"));
    const buttonProps = {
        variant: isSmallScreen ? "outlined" : "outlined",
        size: isSmallScreen ? "small" : "large"
    };
    const typographyProps = {
        variant: isSmallScreen ? "h4" : "h2",

    };
    const [isStart, setIsStart] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isStop, setIsStop] = useState(true);
    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const startHandler = () => {
        setIsStart(true);
        setIsStop(false);
        setIsReset(false);

    };
    const stopHandler = () => {
        setIsStop(true);
        setIsReset(false);
    };
    const resetHandler = () => {

        setIsStart(false);
        setIsStop(true);
        setIsReset(true);
        setMilliseconds(0);
        setSeconds(0);


    };
    let leadingMillisecondsZero = "0";
    if (milliseconds > 9) {
        leadingMillisecondsZero = "";
    }
    let leadingSecondsZero = "0";
    if (seconds > 9) {
        leadingSecondsZero = "";
    }
    useEffect(
        () => {

            let intervalMilliseconds = null;
            let intervalSecond = null;
            if (isReset === true) {
                setMilliseconds(0);
                setIsStart(false);
            }
            if (isStart === true && isStop === false) {
                intervalMilliseconds = setInterval(() => {
                    setMilliseconds((milliseconds) => {
                        if (milliseconds > 98) {
                            setSeconds((seconds) => seconds + 1);
                            return (0);
                        }

                        return (milliseconds + 1);
                    });
                }, 10);

            } else {

                clearInterval(intervalMilliseconds);
                clearInterval(intervalSecond);
            }
            return () => {

                clearInterval(intervalMilliseconds);
                clearInterval(intervalSecond);

            };
        }, [isStart, isStop]
    );
    return (
        <ThemeProvider theme={theme}>
            <div >
                <Container disableGutters={true} maxWidth={false}>
                    <Typography component="div" style={{ backgroundColor: '#a5c6ec', height: '100vh' }} align="center">
                        <Typography align="center" component="div" style={{ paddingTop: "25vh" }}>
                            <Typography {...typographyProps} align="center" style={{ color: "white", paddingTop: "1%" }}>STOPWATCH</Typography>
                            <Typography  {...typographyProps} style={{ color: "white", marginTop: "2%" }}>{`${leadingSecondsZero + seconds}:${leadingMillisecondsZero + milliseconds}`}</Typography>
                            <Typography component="div" align="center" style={{ color: "white", marginTop: "5%" }} >
                                <Button {...buttonProps} style={{ marginRight: "5%" }} onClick={startHandler}>Start</Button>
                                <Button {...buttonProps} style={{ marginRight: "5%" }} onClick={stopHandler}>Stop</Button>
                                <Button {...buttonProps} onClick={resetHandler}>Reset</Button>
                            </Typography>

                        </Typography>
                        <Copyright />
                    </Typography>

                </Container>
            </div>
        </ThemeProvider >
    );
};

export default StopWatch;