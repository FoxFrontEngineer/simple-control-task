import {
  CHECK_PAYMENT_TYPE,
  SWITCH_NDFL_TOGGLE,
} from "../constants/action-types";

import { RadioButtonActionTypes } from "../system/types";

const initialState = {
  paymentType: 1,
  ndflToggleStatus: true,
};

function rootReducer(state = initialState, action: RadioButtonActionTypes) {
  if (action.type === CHECK_PAYMENT_TYPE) {
    return { paymentType: action.payload };
  }
  if (action.type === SWITCH_NDFL_TOGGLE) {
    return { ...state, ndflToggleStatus: !state.ndflToggleStatus };
  }
  return state;
}

export default rootReducer;
