import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Copyright from '../Copyright/Copyright';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            root: {
                color: "white",

            },
            outlined: {
                border: "1px solid white;",
                width: "150px",
                height: "70px"
            }
        },

    },
});

const StopWatch = () => {
    const [isStart, setIsStart] = useState(false);
    const [isStop, setIsStop] = useState(true);
    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const startHandler = () => {
        setIsStart(true);
        setIsStop(false);

    };
    const stopHandler = () => {
        setIsStop(true);
    };
    const resetHandler = () => {
        setIsStart(false);
        setIsStop(true);
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
            if (isStart === true && isStop === false) {
                intervalMilliseconds = setInterval(() => {
                    setMilliseconds((milliseconds) => {
                        if (milliseconds > 98) {
                            return (0);
                        }
                        return (milliseconds + 1);
                    });
                }, 10);
                intervalSecond = setInterval(() => {
                    setSeconds((seconds) => {
                        return (seconds + 1);
                    });
                }, 1000);
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
            <div>
                <Container disableGutters={true} maxWidth={false}>
                    <Typography component="div" style={{ backgroundColor: '#a5c6ec', height: '100vh' }} align="center">
                        <Typography align="center" component="div" style={{ paddingTop: "15%" }}>
                            <Typography variant="h2" align="center" style={{ color: "white", paddingTop: "1%" }}>STOPWATCH</Typography>
                            <Typography variant="h2" style={{ color: "white", marginTop: "2%" }}>{`${leadingSecondsZero + seconds}:${leadingMillisecondsZero + milliseconds}`}</Typography>
                            <Typography component="div" align="center" style={{ color: "white", marginTop: "5%" }} >
                                <Button variant="outlined" size="large" style={{ marginRight: "5%" }} onClick={startHandler}>Start</Button>
                                <Button variant="outlined" size="large" style={{ marginRight: "5%" }} onClick={stopHandler}>Stop</Button>
                                <Button variant="outlined" size="large" onClick={resetHandler}>Reset</Button>
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