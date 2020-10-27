import { CHECK_PAYMENT_TYPE } from "../constants/action-types";

export function checkPaymentType(payload: number) {
  return { type: CHECK_PAYMENT_TYPE, payload };
}
