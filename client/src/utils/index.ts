import React, {
  ReactChild,
  ReactFragment,
  ReactNode,
  ReactPortal,
} from "react";
import { IntlShape } from "react-intl";

export const findChild = (
  children: ReactNode | ReactNode[],
  type: ReactChild | ReactFragment | ReactPortal
) => {
  const element = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === type
  );

  return React.isValidElement(element) ? element : null;
};

export function formatValue(
  value: Number | String,
  type: String,
  intl: IntlShape
) {
  switch (type) {
    case "percentage":
      return intl.formatNumber(parseFloat(value.toString()), {
        style: "percent",
      });
    case "number": {
      return value;
    }
    default:
      return `${value} ${type}`;
  }
}
