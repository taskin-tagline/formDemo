import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormContainer from "../../container/form.container";
import { memo } from "react";
import {
  attribute,
  defaultValues,
  formPath,
  linkText,
  submitBtnText,
  welcomeHead,
} from "../../description/login/login.description";
import DemoLink from "../../shared/DemoLink";
import DemoButton from "../../shared/DemoButton";
import FormFields from "../../shared/FormFields";
import LoginContainer from "../../container/login/login.container";

const useStyles = makeStyles((theme) => ({
  loginWrap: {
    padding: 20,
    overflow: "hidden",
  },
  loginForm: {
    maxWidth: 430,
    margin: [[0, "auto"]],
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 40px)",
    justifyContent: "center",
    "& h2": {
      fontSize: 39,
      fontWeight: 700,
    },
    "& a": {
      display: "block",
      textAlign: "right",
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "& button": {
      margin: [[20, "auto", 0]],
      "&.MuiButtonBase-root": {
        padding: "8px 63px",
      },
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const { handleChange, formData, error, validate, setError } = FormContainer({
    attribute,
    defaultValues,
    formPath,
  });
  const { handleSubmit, loadingStatus } = LoginContainer({
    formData,
    validate,
    setError,
    formPath,
  });
  return (
    <Grid item md={6} xs={12}>
      <div className={classes.loginForm}>
        <Typography color="#04020E" fontSize={31}>
          {welcomeHead}
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormFields
            attribute={attribute}
            error={error}
            formData={formData}
            handleChange={handleChange}
            sx={{
              "& .MuiFormHelperText-root": { position: "static" },
            }}
          />
          <Grid item xs={12}>
            <DemoLink text={linkText} />
          </Grid>
          <Grid item xs={12} align="center">
            <DemoButton type="submit" isLoading={loadingStatus}>
              {submitBtnText}
            </DemoButton>
          </Grid>
        </form>
      </div>
    </Grid>
  );
};

export default memo(Login);
