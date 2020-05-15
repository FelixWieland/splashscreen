import { renderHook } from '@testing-library/react-hooks'
import { useSplashscreen } from '../lib/hooks'


const effectFn = async () => {
    return true
}

const effectFnArr = [effectFn, effectFn, effectFn]

describe("#useSplashscreen", () => {
    it("should use the provided function as a effect", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSplashscreen(effectFn))
        
        await waitForNextUpdate()
        
        expect(result.current.active).toBe(true)
        expect(result.current.done).toBe(1)
    })
    it("should use the provided array as a effect", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSplashscreen(effectFnArr))
        
        await waitForNextUpdate()
        
        expect(result.current.active).toBe(true)
        expect(result.current.done).toBe(effectFnArr.length)
    })
})

export {}