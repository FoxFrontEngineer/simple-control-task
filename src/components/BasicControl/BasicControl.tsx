import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkPaymentType, switchNdflToggler } from "../../store/actions/index";

import RadioButton from "./RadioButton/RadioButton";
import Detail from "./Detail/Detail";
import Form from "./Form/Form";
import Toggler from "./Toggler/Toggler";
import InformationToolTip from "./InformationToolTip/InformationToolTip";

import "./style.sass";

const BasicControl = () => {
  const { paymentType, ndflToggleStatus } = useSelector(
    (state: any) => state.rootReducer
  );
  const amount = useSelector((state: any) => state.form.simple?.values?.amount);
  const dispatch = useDispatch();

  const handleCheck = (type: number) => {
    dispatch(checkPaymentType(type));
  };

  const handleSwitch = () => {
    dispatch(switchNdflToggler());
  };

  return (
    <div className="basic-control">
      <p className="basic-control__title">Сумма</p>
      <RadioButton
        name="payment_month"
        label="Оклад за месяц"
        isChecked={paymentType === 1}
        value={1}
        onCheck={(type: number) => handleCheck(type)}
      />
      <div className="basic-control__tooltip">
        <RadioButton
          name="mrot"
          label="МРОТ"
          isChecked={paymentType === 2}
          value={2}
          onCheck={(type: number) => handleCheck(type)}
        />
        <div className="basic-control__info">
          <InformationToolTip />
        </div>
      </div>
      <RadioButton
        name="payment_day"
        label="Оплата за день"
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
      <div className="basic-control__toggler">
        <Toggler
          preLabel="Указать с НДФЛ"
          postLabel="Без НДФЛ"
          isChecked={ndflToggleStatus}
          onSwitch={handleSwitch}
        />
      </div>
      <Form paymentType={paymentType} />
      <div className="basic-control__detail">
        {amount && paymentType === 1 && (
          <Detail
            ndflToggleStatus={ndflToggleStatus}
            amount={+amount.replace(" ", "")}
          />
        )}
      </div>
    </div>
  );
};

export default BasicControl;
