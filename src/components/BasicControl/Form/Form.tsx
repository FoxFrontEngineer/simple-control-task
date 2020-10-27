import React, { useMemo } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

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

type PropsOwn = {
  paymentType: string;
};

const Form: React.FC<InjectedFormProps & PropsOwn> = ({
  paymentType,
}: PropsOwn) => {
  const computedSpan = useMemo(() => {
    if (+paymentType === 3) {
      return <span>в день</span>;
    }
    if (+paymentType === 4) {
      return <span>в час</span>;
    }
  }, [paymentType]);

  return (
    <div className="form">
      <Field
        name="amount"
        component={renderField}
        label="сумма"
        type="text"
        normalize={onlyDigit}
      />
      <span>Р {computedSpan}</span>
    </div>
  );
};

// не разобрался, что вместо any нужно указывать, PropsOwn не принимает
export default reduxForm<InjectedFormProps, any>({
  form: "simple",
})(Form);
