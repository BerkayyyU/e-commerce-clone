import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload}; //action.payload comes from user action which is productaction.js
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_SIGNOUT:
            return {}; // bu having empty object data and userInfo should be removed
        default: return state;
    } 
} 
// After that we added usersigning to store.js to combinereducers
// And we added dispatch to signingscreen and defined the submithandler

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}; //action.payload comes from user action which is productaction.js
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default: 
        return state;
    } 
};
// After that we added userRegister to store.js to combinereducers

export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
          return { loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
          return { loading: false, success: true };
        case USER_UPDATE_PROFILE_FAIL:
          return { loading: false, error: action.payload };
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
          return state;
      }
};

