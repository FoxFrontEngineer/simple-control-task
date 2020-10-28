import React, { useMemo } from "react";
import numbro from "numbro";

import "./style.sass";

interface DetailPropsType {
  amount: number;
  ndflToggleStatus: boolean;
}

const Detail = ({ ndflToggleStatus, amount }: DetailPropsType) => {
  const computeView = useMemo(() => {
    const ndfl = amount ? amount * 0.13 : 0;

    const numbroFormatt = (amount: number) => {
      return numbro(amount)
        .format({ thousandSeparated: true })
        .replace(/,/g, " ");
    };

    if (ndflToggleStatus) {
      return (
        <div className="detail__block">
          <p>
            <span className="detail__text">{numbroFormatt(amount)} ₽</span>{" "}
            сотрудник будет получать на руки
          </p>
          <p>
            <span className="detail__text">
              {amount && numbroFormatt(ndfl)} ₽
            </span>{" "}
            НДФЛ, 13% от оклада
          </p>
          <p>
            <span className="detail__text">
              {amount && numbroFormatt(amount + ndfl)} ₽
            </span>{" "}
            за сотрудника в месяц
          </p>
        </div>
      );
    } else {
      return (
        <div className="detail__block">
          <p>
            <span className="detail__text">
              {amount && numbroFormatt(amount - ndfl)} ₽
            </span>{" "}
            сотрудник будет получать на руки
          </p>
          <p>
            <span className="detail__text">
              {amount && numbroFormatt(ndfl)} ₽
            </span>{" "}
            НДФЛ, 13% от оклада
          </p>
          <p>
            <span className="detail__text">
              {amount && numbroFormatt(amount)} ₽
            </span>{" "}
            за сотрудника в месяц
          </p>
        </div>
      );
    }
  }, [ndflToggleStatus, amount]);

  return <div className="detail">{computeView}</div>;
};

export default Detail;
