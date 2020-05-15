import React from "react";
import { makeStyles } from "@material-ui/core";
import { SplashscreenProps, ISplashscreen } from "../types";
import { defaultSplashscreenProps } from "../default";
import { Logo } from "./Logo";

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
}))

export function Splashscreen(sprops: SplashscreenProps) {
  const classes = useStyle()
  const props = {
    ...defaultSplashscreenProps,
    ...sprops,
  } as ISplashscreen

  return (
    <div className={classes.root}>
      {props.logo && <Logo {...props.logoAnimation}>{props.logo}</Logo>}
    </div>
  )
}