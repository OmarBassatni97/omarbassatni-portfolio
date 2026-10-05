'use client'

import { useEffect, useState } from 'react'

type Options = {
    words: string[]
    typeSpeed?: number
    deleteSpeed?: number
    delaySpeed?: number
}

// Types each word, pauses, deletes it, then moves on to the next, looping forever
export function useTypewriter({ words, typeSpeed = 80, deleteSpeed = 50, delaySpeed = 1500 }: Options) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const word = words[wordIndex % words.length]

        if (!deleting && text === word) {
            const pause = setTimeout(() => setDeleting(true), delaySpeed)
            return () => clearTimeout(pause)
        }
        if (deleting && text === '') {
            setDeleting(false)
            setWordIndex((i) => i + 1)
            return
        }

        const step = setTimeout(() => {
            setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
        }, deleting ? deleteSpeed : typeSpeed)
        return () => clearTimeout(step)
    }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed])

    return text
}
