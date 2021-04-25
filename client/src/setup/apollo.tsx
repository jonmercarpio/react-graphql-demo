import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

interface Props {
  children: React.ReactNode;
}

export default function ApolloSetup({ children }: Props) {
  return <Provider client={client}>{children}</Provider>;
}
