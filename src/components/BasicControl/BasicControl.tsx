import React from "react";

import RadioButton from "./RadioButton/RadioButton";

const BasicControl = () => {
  return (
    <div className="basic-control">
      <RadioButton
        name="payment_month"
        label="Оплата за месяц"
        isChecked={false}
        value={1}
      />
      <RadioButton
        name="payment_day"
        label="Оплата за день"
        isChecked={false}
        value={2}
      />
      <RadioButton name="mrot" label="Мрот" isChecked={false} value={3} />
      <RadioButton
        name="payment_hour"
        label="Оплата за час"
        isChecked={false}
        value={4}
      />
    </div>
  );
};

export default BasicControl;
