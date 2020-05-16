
export type AnimationType = 'fade'
    | 'collapse'
    | 'grow'
    | 'slide'
    | 'zoom'

export type Direction = 'down'
    | 'left'
    | 'right'
    | 'up'

export type Timeout = number
    | { appear?: number, enter?: number, exit?: number }

export type TransitionCallback = ((node: HTMLElement) => void) | (() => void)

export interface LogoAnimationProps extends ILogoAnimation {
    active: boolean
    children: JSX.Element
}

export interface BaseAnimationProps extends IBaseAnimation {
    active: boolean
    children: JSX.Element
}

export interface AnimationProps extends IAnimation {
    active: boolean
    children: JSX.Element
}

export interface IAnimation {
    duration?: number
    type: AnimationType
    direction?: Direction
    timeout: Timeout
    onEntered: TransitionCallback
    onExited: TransitionCallback
}

export interface ILogoAnimation extends IAnimation {
}

export interface IBaseAnimation extends IAnimation {
}

