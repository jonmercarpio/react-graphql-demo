import { CircularProgress } from "@material-ui/core";
import React, { Fragment } from "react";
import { findChild } from "../utils";

export interface Props {
  request: {
    loading: boolean;
    error: any;
  };
  children: React.ReactNode;
}

export default function Loader({ request, children }: Props) {
  const loadingChild = findChild(children, Loading);
  const contentComponent = findChild(children, Content);

  if (request.loading) {
    return loadingChild;
  }

  if (!request.error) {
    return contentComponent;
  }

  if (request.error) {
    return request.error.message;
  }

  return null;
}

function Loading() {
  return <CircularProgress />;
}

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <Fragment>{children}</Fragment>;
}

Loader.Loading = Loading;
Loader.Content = Content;
