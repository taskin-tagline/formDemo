// import { makeStyles } from "@mui/material";
import loginSvg from "../assets/login.png";

// const useStyles = makeStyles((theme) => ({
//   RightWrap: {
//     width: "100%",
//     minHeight: "calc(100vh - 40px)",
//     borderRadius: 30,
//     backgroundColor: theme.palette.primary.main,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     "&:before": {
//       content: '""',
//       position: "absolute",
//       background: "rgba(255, 255, 255, 0.1)",
//       borderRadius: 60,
//       transform: "rotate(31.06deg)",
//       width: 400,
//       height: 500,
//       top: -300,
//       right: 0,
//     },
//     "&:after": {
//       content: '""',
//       position: "absolute",
//       background: "rgba(255, 255, 255, 0.1)",
//       borderRadius: 60,
//       transform: "rotate(31.06deg)",
//       width: 550,
//       height: 500,
//       top: -250,
//       right: -30,
//     },
//   },
// }));
const LogoWrap = () => {
  //   const classes = useStyles();
  return (
    // <div className={classes.RightWrap}>
    <img src={loginSvg} alt="loginSvg" />
    // </div>
  );
};

export default LogoWrap;
