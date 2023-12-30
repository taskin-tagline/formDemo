import { Button, CircularProgress, Grid } from "@mui/material";
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  btnStyle: {
    "&.MuiButton-root": {
      padding: "12px 20px",
      display: "flex",
      flexDirection: "row",
      borderRadius: 10,
      fontSize: 16,
      lineHeight: "24px",
      textTransform: "inherit",
    },
    "&.MuiButton-contained": {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    "&.MuiButton-outlined": {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      border: "none",
      "&:hover": {
        border: "none",
      },
    },
    "&.MuiButton-text": {
      color: theme.palette.primary.main,
    },
  },
}));

const DemoButton = ({
  children,
  variant = "contained",
  component,
  color,
  isDisable,
  sx,
  onClick,
  type = "submit",
  grid,
  classes,
  isLoading,
  startIcon,
  className,
  ...rest
}) => {
  const buttonClasses = useStyles();
  const button = (
    <Button
      disableElevation
      disabled={isDisable || isLoading}
      startIcon={isLoading ? <CircularProgress size={20} /> : startIcon}
      className={classNames(buttonClasses.btnStyle, className)}
      {...rest}
      {...{
        color,
        variant,
        sx,
        onClick,
        type,
        component,
      }}
    >
      {children}
    </Button>
  );

  return grid ? (
    <Grid item xs={sx} className={classes?.button}>
      {button}
    </Grid>
  ) : (
    button
  );
};

export default DemoButton;
