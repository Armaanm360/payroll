import { Grid, Paper } from '@mui/material';
import React from 'react';
const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto"
  }
};
const Apon = () => {
  return (
    <div style={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
        {/*However, this component will have 9 units of space */}
        <Grid item xs={3}>
          <Paper style={classes.paper}>xs=9</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Apon;