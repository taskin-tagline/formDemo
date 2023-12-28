import { useState } from "react";
import { equal, getObject, head, last } from "../utils/javascript";
import validation from "../utils/validation";

const FormContainer = ({ attribute, defaultValues, formPath }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [error, setError] = useState({});
  // const dispatch = useDispatch();
  // const { parent } = formPath;

  const handleChange = (e, callback) => {
    const { name, value } = e.target;
    const countryCodeName = e.target?.countryCodeName;
    //   const countryCodeNumber = e.target?.countryCodeNumber;
    setError({
      ...error,
      [name]: validate(name, value, countryCodeName),
    });
    const updatedFormData = {
      ...formData,
      [name]: equal(value, "") ? null : value,
    };
    setFormData(updatedFormData);

    //   dispatch({
    //     type: SET_FORM_DATA,
    //     payload: {
    //       [parent]: { ...formData, [name]: equal(value, "") ? null : value },
    //     },
    //   });

    //   countryCodeName &&
    //     dispatch({
    //       type: SET_FORM_PATTERN_DATA,
    //       payload: {
    //         [parent]: {
    //           countryCodeName,
    //           countryCodeNumber,
    //         },
    //       },
    //     });
  };

  const validate = (name, value, ...rest) => {
    const { pattern, isRequired, error, min, max } = getObject(attribute, name);
    const res = validation(pattern, value, ...rest);
    if (isRequired) {
      if (!value) {
        return head(error);
      }
    }
    if (isRequired && !res) {
      return last(error);
    }
    if (Number(value) < min || Number(value) > max) {
      return last(error);
    }
  };

  return {
    handleChange,
    formData,
    setFormData,
    error,
    validate,
    setError,
  };
};

export default FormContainer;
