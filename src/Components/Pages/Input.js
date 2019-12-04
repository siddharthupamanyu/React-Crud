import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "../UX/TextFields";
import Button from "../UX/Buttons";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex"
  },
  margin: {
    margin: theme.spacing(1)
  },
  header: {
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center"
  },
  alignCenter: {
    textAlign: "center"
  }
}));

export default function LoginComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={clsx(classes.paper, classes.header)}>
        <span className={clsx(classes.alignCenter)}>CRUD APPLICATION</span>
      </Paper>
      <Paper className={clsx(classes.paper, classes.header)}>
        <TextField label="Username" type="text" />
        <TextField label="Password" type="password" />
        <Button/>
      </Paper>
    </React.Fragment>
  );
}
