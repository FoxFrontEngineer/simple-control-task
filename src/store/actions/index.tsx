import {
  CHECK_PAYMENT_TYPE,
  SWITCH_NDFL_TOGGLE,
} from "../constants/action-types";

export function checkPaymentType(payload: number) {
  return { type: CHECK_PAYMENT_TYPE, payload };
}

export function switchNdflToggler() {
  return { type: SWITCH_NDFL_TOGGLE };
}
