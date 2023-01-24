import {
  FONT_TOGGLE,
  THEME_TOGGLE,
  MENU_NUMBER_CHANGE,
  ON_TOGGLE_CONTENT,
  CLOSE_MODAL,
  CONTENT_INFORMATION_NUMBER,
  LAYOUT_NUMBER_CHANGE,
} from "../constants/uiConstants";

export const uiInitialState = {
  theme: {
    isDark: false,
    fontFamily: `Poppins, sans-serif`,
    color: "#000000",
  },
  menuNumber: 0,
  openContent: false,
  openModal: false,
  contentNumber: 0,
  layoutNumber: 0,
};

export const uiReducer = (state, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return {
        ...state,
        theme: { ...state.theme, color: action.payload },
      };
    case FONT_TOGGLE:
      return {
        ...state,
        theme: { ...state.theme, fontFamily: action.payload },
      };
    case MENU_NUMBER_CHANGE:
      return {
        ...state,
        menuNumber: action.payload,
      };
    case ON_TOGGLE_CONTENT:
      return {
        ...state,
        openContent: !state.openContent,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    case CONTENT_INFORMATION_NUMBER:
      return {
        ...state,
        contentNumber: action.payload,
        openModal: true,
      };
    case LAYOUT_NUMBER_CHANGE:
      return {
        ...state,
        layoutNumber: action.payload,
      };
    default:
      return state;
  }
};
