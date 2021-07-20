import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: "40vh" }}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.cn/in/zijian-zhou/" underline="always" style={{ borderBottom: 'none' }}>
        {"Zijian Zhou"}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography >
  );

};
export default Copyright;
