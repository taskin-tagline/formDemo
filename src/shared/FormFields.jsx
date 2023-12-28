import { Grid, InputAdornment, Stack, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from "./style";
import { equal } from "../utils/javascript";
import DemoTextField from "./DemoTextField";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import classNames from "classnames";
import DemoAutoComplete from "./DemoAutoComplete";

const FormFields = ({
  attribute,
  error,
  formData,
  handleChange,
  className,
  pointNumberClass,
  sx,
}) => {
  const classes = useStyles();
  const [visibility, setVisibility] = useState({});

  const togglePasswordVisibility = (fieldName) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [fieldName]: !prevVisibility[fieldName],
    }));
  };

  const setForm = ({ attr, error, formData, handleChange }) =>
    attr?.map(
      (
        {
          name,
          label,
          type,
          placeholder,
          startAdornment,
          endAdornment,
          options,
          variant = "standard",
          gridXl,
          gridLg,
          gridMd,
          gridSm,
          gridXsm,
          gridXs,
          pointNumber,
          preSelected,
          isRequired,
          showStar = false,
          ...rest
        },
        index
      ) => {
        switch (type) {
          case "text":
          case "email":
          case "url":
          case "password":
            return (
              <Grid
                item
                xl={gridXl || 12}
                lg={gridLg || 12}
                md={gridMd || 12}
                sm={gridSm || 12}
                xsm={gridXsm || 12}
                xs={gridXs || 12}
                key={index}
              >
                <Stack
                  {...(pointNumber && {
                    direction: "row",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  })}
                >
                  {pointNumber && (
                    <Typography
                      component="span"
                      mt={2}
                      width={20}
                      className={pointNumberClass}
                    >
                      {showStar ? `${pointNumber}*` : pointNumber}
                    </Typography>
                  )}
                  <DemoTextField
                    {...rest}
                    error={!!error?.[name]}
                    name={name}
                    id={`${name}-${index}`}
                    variant={variant}
                    label={equal(variant, "standard") ? label : null}
                    formLabel={!equal(variant, "standard") ? label : null}
                    type={visibility[name] ? "text" : type}
                    value={formData?.[name]}
                    placeholder={placeholder}
                    helperText={error?.[name]}
                    className={classNames(classes.inputField, className)}
                    onChange={(e) => handleChange(e)}
                    isRequired={isRequired}
                    sx={sx}
                    InputProps={{
                      endAdornment: equal(type, "password") ? (
                        <InputAdornment position="end">
                          {visibility[name] ? (
                            <VisibilityOutlinedIcon
                              onClick={() => togglePasswordVisibility(name)}
                            />
                          ) : (
                            <VisibilityOffOutlinedIcon
                              onClick={() => togglePasswordVisibility(name)}
                            />
                          )}
                        </InputAdornment>
                      ) : (
                        <InputAdornment position="end">
                          {endAdornment}
                        </InputAdornment>
                      ),

                      startAdornment: startAdornment && (
                        <InputAdornment position="start">
                          {startAdornment}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Grid>
            );
          case "number":
            return (
              <Grid
                item
                xl={gridXl || 12}
                lg={gridLg || 12}
                md={gridMd || 12}
                sm={gridSm || 12}
                xsm={gridXsm || 12}
                xs={gridXs || 12}
                key={index}
              >
                <Stack
                  {...(pointNumber && {
                    direction: "row",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  })}
                >
                  {pointNumber && (
                    <Typography
                      component="span"
                      mt={2}
                      width={20}
                      className={pointNumberClass}
                    >
                      {showStar ? `${pointNumber}*` : pointNumber}
                    </Typography>
                  )}
                  <DemoTextField
                    {...rest}
                    error={!!error?.[name]}
                    name={name}
                    id={`${name}-${index}`}
                    variant={variant}
                    label={equal(variant, "standard") ? label : null}
                    formLabel={!equal(variant, "standard") ? label : null}
                    type="number"
                    value={formData?.[name]}
                    placeholder={placeholder}
                    helperText={error?.[name]}
                    className={classNames(classes.inputField, className)}
                    onChange={(e) => handleChange(e)}
                    isRequired={isRequired}
                    sx={{
                      '& .MuiInputBase-input[type="number"]::-webkit-inner-spin-button, & .MuiInputBase-input[type="number"]::-webkit-outer-spin-button':
                        {
                          "-webkit-appearance": "none",
                          margin: 0,
                        },
                      ...sx,
                    }}
                  />
                </Stack>
              </Grid>
            );

          case "autoComplete":
            return (
              <Grid
                item
                key={index}
                xl={gridXl || 12}
                lg={gridLg || 12}
                md={gridMd}
                sm={gridSm || 12}
                xsm={gridXsm || 12}
                xs={gridXs || 12}
              >
                <Stack
                  {...(pointNumber && {
                    direction: "row",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  })}
                >
                  {pointNumber && (
                    <Typography
                      component="span"
                      mt={2}
                      width={20}
                      className={pointNumberClass}
                    >
                      {showStar ? `${pointNumber}*` : pointNumber}
                    </Typography>
                  )}
                  <DemoAutoComplete
                    name={name}
                    options={options}
                    error={error?.[name]}
                    value={formData?.[name]}
                    onChange={handleChange}
                    formLabel={label}
                    placeholder={placeholder}
                    isRequired={isRequired}
                    sx={sx}
                  />
                </Stack>
              </Grid>
            );

          default:
            return null;
        }
      }
    );
  return <>{setForm({ attr: attribute, error, formData, handleChange })}</>;
};

export default FormFields;
