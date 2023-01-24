import {
  USER_ERROR,
  USER_LOADED,
  USER_LOADING,
  ON_FIELD_CHANGE,
} from "../constants/authConstants";
export const userInitialState = {
  email: "",
  password: "",
  user: null,
  error: null,
  loading: false,
};
export const authReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ON_FIELD_CHANGE:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    default:
      break;
  }
};
