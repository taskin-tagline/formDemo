import { Autocomplete, FormLabel, Stack, styled } from "@mui/material";
import { memo } from "react";
import DemoTextField from "./DemoTextField";

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiInputBase-root': {
      '&.MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.natural.main,
          borderRadius: 10
        }
      }
    }
  }));
  
  const RequiredAsterisk = styled('span')({
    color: 'red'
  });
  
  const DemoAutoComplete = ({
    name,
    formLabel,
    options,
    label,
    value,
    onChange,
    error,
    isRequired = false,
    placeholder,
    onInputChange,
    sx,
    ...rest
  }) => {
    const handleChange = (event, newValue) => {
      const updatedEvent = {
        target: {
          name,
          value: newValue
        }
      };
      onChange(updatedEvent);
    };
    return (
      <Stack flex="1">
        {formLabel && (
          <FormLabel
            sx={{
              fontSize: 14,
              marginBottom: 1,
              display: 'block'
            }}
          >
            {formLabel}
            {isRequired && <RequiredAsterisk>*</RequiredAsterisk>}
          </FormLabel>
        )}
        <StyledAutocomplete
          options={options}
          defaultValue={value ?? ''}
          value={value ?? ''}
          onChange={handleChange}
          {...rest}
          renderInput={(params) => (
            <DemoTextField
              {...params}
              sx={sx}
              name={name}
              label={label}
              variant="outlined"
              error={!!error}
              helperText={error}
              placeholder={placeholder}
            />
          )}
          onInputChange={onInputChange}
        />
      </Stack>
    );
  };
  
  export default memo(DemoAutoComplete);