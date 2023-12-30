import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  wrapper: {
    padding: 20,
    overflow: "hidden",
    boxSizing: "border-box",
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "&.MuiGrid-root": {
      flexWrap: "wrap-reverse",
    },
  },
}));
