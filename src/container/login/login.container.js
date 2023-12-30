import { useSelector } from "react-redux";
import { keys } from "../../utils/javascript";

const LoginContainer = ({ formPath, formData, validate, setError }) => {
  const { [formPath?.parent]: loadingStatus } = useSelector(
    (state) => state.api?.loader
  );

  const apiCall = async () => {};
  console.log("formData", formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    keys(formData).forEach((name) => {
      const error = validate(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    apiCall();
  };
  return { handleSubmit, loadingStatus };
};

export default LoginContainer;
