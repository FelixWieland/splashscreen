import React, { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { SplashscreenProps, ISplashscreen } from "../types";
import { defaultSplashscreenProps } from "../default";
import { Logo } from "./Logo";
import { Animation } from './Animation'

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
}))

export function Splashscreen(sprops: SplashscreenProps) {
  const classes = useStyle()
  const [active, setActive] = useState(sprops.active)
  const props = {
    ...defaultSplashscreenProps,
    ...sprops,
  } as ISplashscreen

  const onBaseEntered = (node: HTMLElement) => {
    setActive(true)
    props.baseAnimation.onEntered(node)
  }

  const onBaseExited = (node: HTMLElement) => {
    setActive(false)
    props.baseAnimation.onExited(node)
  }

  useLayoutEffect(() => {

  }, [sprops.active])

  const base = (
    <div className={classes.root}>
      {props.logo && <Logo active={props.active} {...props.logoAnimation}>{props.logo}</Logo>}
    </div>
  )

  return (
    <Animation 
      {...props.baseAnimation}
      active={props.active}
      onEntered={onBaseEntered}
      onExited={onBaseExited}
    >
      {base}
    </Animation>
  )
}