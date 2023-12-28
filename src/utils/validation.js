import {
  alphabetOnly,
  email,
  name,
  notEmptyOrNull,
  password,
  url,
} from "./constant";
import {
  alphabetValidation,
  emailValidation,
  minLengthCharacter,
  notEmpty,
  passwordValidation,
  urlValidation,
} from "./regex";

// eslint-disable-next-line import/no-anonymous-default-export
export default (pattern, value) => {
  switch (pattern) {
    case notEmptyOrNull:
      return notEmpty(value);
    case password:
      return passwordValidation(value);
    case email:
      return emailValidation(value);
    case url:
      return urlValidation(value);
    case alphabetOnly:
      return alphabetValidation(value);
    case name:
      return minLengthCharacter(value);
    default:
      return false;
  }
};
