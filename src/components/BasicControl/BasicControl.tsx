import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkPaymentType } from "../../store/actions/index";

import RadioButton from "./RadioButton/RadioButton";
import Detail from "./Detail/Detail";
import Form from "./Form/Form";

const BasicControl = () => {
  const { paymentType } = useSelector((state: any) => state.rootReducer);
  const amount = useSelector((state: any) => state.form.simple?.values?.amount);
  const dispatch = useDispatch();

  const handleCheck = (type: number) => {
    dispatch(checkPaymentType(type));
  };

  return (
    <div className="basic-control">
      <RadioButton
        name="payment_month"
        label="Оплата за месяц"
        isChecked={paymentType === 1}
        value={1}
        onCheck={(type: number) => handleCheck(type)}
      />
      <RadioButton
        name="payment_day"
        label="Оплата за день"
        isChecked={paymentType === 2}
        value={2}
        onCheck={(type: number) => handleCheck(type)}
      />
      <RadioButton
        name="mrot"
        label="Мрот"
        isChecked={paymentType === 3}
        value={3}
        onCheck={(type: number) => handleCheck(type)}
      />
      <RadioButton
        name="payment_hour"
        label="Оплата за час"
        isChecked={paymentType === 4}
        value={4}
        onCheck={(type: number) => handleCheck(type)}
      />
      <Form />
      {amount && paymentType === 1 && <Detail amount={+amount} />}
    </div>
  );
};

export default BasicControl;
