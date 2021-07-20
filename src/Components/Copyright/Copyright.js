import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
let theme = createTheme({});
theme = {
  ...theme,
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      root: {
        [theme.breakpoints.down("xs")]: {
          paddingTop: "42vh"

        },
        paddingTop: "36vh"
      },

    },

  },
};
const Copyright = () => {

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" color="textSecondary" align="center" >
        {"Copyright © "}
        <Link color="inherit" href="https://www.linkedin.cn/in/zijian-zhou/" underline="always" style={{ borderBottom: 'none' }}>
          {"Zijian Zhou"}
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography >
    </ThemeProvider>

  );

};
export default Copyright;
