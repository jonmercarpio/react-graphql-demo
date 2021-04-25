import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApolloSetup from "./setup/apollo";
import IntlSetup from "./setup/intl";

function App() {
  return (
    <ApolloSetup>
      <IntlSetup>
        <Dashboard />
      </IntlSetup>
    </ApolloSetup>
  );
}

export default App;
