import React, { useMemo } from "react";

import "./style.sass";

interface DetailPropsType {
  amount: undefined | number;
}

const Detail = ({ amount }: DetailPropsType) => {
  const computeView = useMemo(() => {
    const ndfl = amount ? amount * 0.13 : 0;
    return (
      <div>
        <p>{amount} сотрудник будет получать на руки</p>
        <p>{amount && ndfl} НДФЛ, 13% от оклада</p>
        <p>{amount && amount + ndfl} за сотрудника в месяц</p>
      </div>
    );
  }, [amount]);

  return <div className="detail">{computeView}</div>;
};

export default Detail;
