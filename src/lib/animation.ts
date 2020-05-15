
export type AnimationType = 'fade'


export interface LogoAnimationProps extends ILogoAnimation {
    children: JSX.Element
}

export interface BaseAnimationProps extends IBaseAnimation{
    
}

export interface IAnimation {
    duration?: number
    type: AnimationType
}

export interface ILogoAnimation extends IAnimation {
}

export interface IBaseAnimation extends IAnimation {
}

