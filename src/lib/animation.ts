
export type AnimationType = 'fade'

export interface IAnimation {
    duration?: number
    type: AnimationType
}

export interface ILogoAnimation extends IAnimation {
}

export interface IBaseAnimation extends IAnimation {
}