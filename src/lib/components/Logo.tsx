import React from 'react'
import { LogoAnimationProps } from '../animation'

export function Logo({ duration, children }: LogoAnimationProps) {
    return (
        <div>
            {children}
        </div>
    )
}