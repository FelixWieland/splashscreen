import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  }
}))

export function Splashscreen() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      -
    </div>
  )
}