import { CHECK_PAYMENT_TYPE } from "../constants/action-types";

import { RadioButtonActionTypes } from "../system/types";

const initialState = {
  paymentType: 1,
};

function rootReducer(state = initialState, action: RadioButtonActionTypes) {
  if (action.type === CHECK_PAYMENT_TYPE) {
    return { paymentType: action.payload };
  }
  return state;
}

console.info(typeof rootReducer);

export default rootReducer;
