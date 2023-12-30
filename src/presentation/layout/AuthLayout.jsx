import { Grid, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import useStyles from './css/layout.style'
import LogoWrap from "../../components/LogoWrap";

const AuthLayout = () => {
    const classes = useStyles();
    return (
      <div>
        <Stack className={classes.wrapper}>
          <Grid container spacing={2} className={classes.mainContent}>
            <Outlet />
            <Grid item md={6} xs={12}>
              <LogoWrap />
            </Grid>
          </Grid>
        </Stack>
      </div>
    );
  };
  
  export default AuthLayout;