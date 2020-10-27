import React from "react";
import { Field, reduxForm } from "redux-form";

import "./style.sass";

const renderField = ({ input, label, type }: any) => (
  <input className="form-input" {...input} placeholder={label} type={type} />
);

const onlyDigit = (value: any) => {
  if (!Number.isNaN(value % 10)) {
    return value;
  } else {
    return value.slice(0, -1);
  }
};

const Form = () => {
  return (
    <div className="form">
      <Field
        name="amount"
        component={renderField}
        label="сумма"
        type="text"
        normalize={onlyDigit}
      />
    </div>
  );
};

export default reduxForm({
  form: "simple",
})(Form);
