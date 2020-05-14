import { IBaseAnimation, ILogoAnimation } from './animation'

export interface SplashscreenProps {
    active: boolean
    logo?: JSX.Element | null
    color: Color,
    baseAnimation?: IBaseAnimation,
    logoAnimation?: ILogoAnimation,
}

export type Color = 'default'
                  | 'inherit'
                  | 'primary'
                  | 'secondary'
                  | 'transparent'

export type Position = 'center'
                     | 'top-left'
                     | 'top-right'
                     | 'bottom-left'
                     | 'bottom-right'


