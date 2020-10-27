import React, { useMemo } from "react";

import "./style.sass";

interface DetailPropsType {
  amount: undefined | number;
  ndflToggleStatus: boolean;
}

const Detail = ({ ndflToggleStatus, amount }: DetailPropsType) => {
  const computeView = useMemo(() => {
    const ndfl = amount ? amount * 0.13 : 0;
    if (ndflToggleStatus) {
      return (
        <div>
          <p>{amount} ₽ сотрудник будет получать на руки</p>
          <p>{amount && ndfl} ₽ НДФЛ, 13% от оклада</p>
          <p>{amount && amount + ndfl} ₽ за сотрудника в месяц</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{amount && amount - ndfl} ₽ сотрудник будет получать на руки</p>
          <p>{amount && ndfl} ₽ НДФЛ, 13% от оклада</p>
          <p>{amount && amount} ₽ за сотрудника в месяц</p>
        </div>
      );
    }
  }, [ndflToggleStatus, amount]);

  return <div className="detail">{computeView}</div>;
};

export default Detail;
