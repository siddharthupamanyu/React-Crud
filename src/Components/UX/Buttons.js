import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonComponent() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <Button className={classes.root} variant="contained" color="primary" href="#contained-buttons">
        Login
      </Button>
    </React.Fragment>
  );
}
