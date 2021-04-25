import {
  AppBar as MaterialAppBar,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export interface Props {
  children?: React.ReactNode;
  title: string;
}

export default function AppBar({ children, title }: Props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MaterialAppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
          {children}
        </Toolbar>
      </MaterialAppBar>
      <div className={classes.offset} />
    </React.Fragment>
  );
}
