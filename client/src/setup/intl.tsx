import React from "react";
import { IntlProvider } from "react-intl";

interface Props {
  children: React.ReactNode;
}

export default function IntlSetup({ children }: Props) {
  return (
    <IntlProvider messages={{}} defaultLocale="en" locale="en">
      {children}
    </IntlProvider>
  );
}
