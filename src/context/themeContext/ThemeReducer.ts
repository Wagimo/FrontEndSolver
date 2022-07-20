import { InitialState, ItemMenu } from "@/models";

type ThemActions =
  | { type: "SET_CHAT"; payload: boolean }
  | { type: "SET_CART"; payload: boolean }
  | { type: "SET_USER_PROFILE"; payload: boolean }
  | { type: "SET_NOTIFICATION"; payload: boolean }
  | { type: "SET_CLICKED"; payload: { name: string; value: boolean } }
  | { type: "SET_MENU_OPTIONS"; payload: ItemMenu[] };

export const ThemeReducer = (
  state: InitialState,
  action: ThemActions
): InitialState => {
  switch (action.type) {
    case "SET_CHAT":
      return {
        ...state,
        chat: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.payload,
      };
    case "SET_NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    case "SET_CLICKED":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_MENU_OPTIONS":
      return {
        ...state,
        menuOptions: action.payload,
      };

    default:
      return state;
  }
};
