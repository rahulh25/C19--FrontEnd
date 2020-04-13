import axios from "axios";
import * as Constants from "./constants";

export const validateEmail = (email) => {
  return new Promise((resolve, reject) => {
    var result = {
      errorMessage: null,
      isEmailAddress: true,
      isEmailAlreadyExists: false,
    };
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValidate = re.test(String(email).toLowerCase());
    if (emailValidate) {
      ///// email address is valid
      axios
        .get(Constants.GET_USERS)
        .then((res) => {
          let users = res.data.message;
          let matchedUser = users.find((v) => v.email === email);
          console.log(matchedUser);
          if (matchedUser != null) {
            ///user already found in database
            result["isEmailAddress"] = emailValidate;
            result["isEmailAlreadyExists"] = true;
            resolve(result);
          } else {
            ///user not found in database
            result["isEmailAddress"] = emailValidate;
            result["isEmailAlreadyExists"] = false;
            resolve(result);
          }
        })
        .catch((err) => {
          console.log(`Error while retrieving users${err}`);
          result[
            "errorMessage"
          ] = `${err.response.data.message} ${err.message}`;
          reject(result);
        });
    } else {
      ///// email address entered is not valid
      result["isEmailAddress"] = emailValidate;
      resolve(result);
    }
  });
};
