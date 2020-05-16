import React from 'react'
import { AnimationProps } from '../animation';
import { Fade, Collapse, Grow, Slide, Zoom } from '@material-ui/core';

export function Animation({ type, active, timeout, direction, onEntered, onExited, children }: AnimationProps) {
    switch (type) {
        case "fade": return (
            <Fade
                in={active}
                timeout={timeout}
                onEntered={onEntered}
                onExited={onExited}
            >
                {children}
            </Fade>
        )
        case "collapse": return (
            <Collapse 
                in={active}
                timeout={timeout}
                collapsedHeight={0}
                onEntered={onEntered}
                onExited={onExited}
            >
                {children}
            </Collapse>
        )
        case "grow": return (
            <Grow 
                in={active}
                timeout={timeout}
                onEnter={onEntered}
                onExit={onExited}
            >
                    {children}
            </Grow>
        )
        case "slide": return (
            <Slide 
                in={active}
                timeout={timeout}
                direction={direction}
                onEnter={onEntered}
                onExit={onExited}
            >
                {children}
            </Slide> 
        )
        case "zoom": return (
            <Zoom 
                in={active}
                timeout={timeout}
                onEnter={onEntered}
                onExit={onExited}
            >
                {children}
            </Zoom>
        )
        default: return (
            <>{children}</>
        )
    }
}