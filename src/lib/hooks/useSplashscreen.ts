import { useState, useEffect, useMemo } from "react";
import { EffectFunction } from "../types";

export function useSplashscreen(effect: EffectFunction | Array<EffectFunction>) {
    const [ran, setRan] = useState(false)
    const [steps, setSteps] = useState(Array.isArray(effect) ? effect.length : 1)

    useEffect(() => {
        if(ran) {
            return
        }
        if(Array.isArray(effect)) {
            effect.map(e => e().then(() => setSteps(old => old-1)))
            setRan(true)
        } else {
            effect().then(() => setSteps(old => old-1))
            setRan(true)
        }
    }, [effect, ran])

    const active = useMemo(() => steps !== 0, [steps])
    const done = useMemo(() => (Array.isArray(effect) ? effect.length : 1) - steps, [effect, steps])

    return {
        active,
        done
    }
}