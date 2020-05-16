import { SplashscreenProps } from './types'
import { BaseAnimationProps, LogoAnimationProps } from './animation'


export const defaultBaseAnimationProps: BaseAnimationProps = {
    active: true,
    children: null as unknown as JSX.Element,
    timeout: 500,
    type: "fade",
    onEntered: () => {},
    onExited: () => {},
}

export const defaultLogoAnimationProps: LogoAnimationProps = {
    active: true,
    children: null as unknown as JSX.Element,
    timeout: 500,
    type: "fade",
    onEntered: () => {},
    onExited: () => {},
}
export const defaultSplashscreenProps: SplashscreenProps = {
    active: true,
    logo: undefined,
    color: "default",
    logoAnimation: defaultBaseAnimationProps,
    baseAnimation: defaultBaseAnimationProps,
}