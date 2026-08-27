import { useEffect, useState } from 'react'

interface TypewriterOptions {
  /** ms between each typed character. */
  typingSpeed?: number
  /** ms between each deleted character. */
  deletingSpeed?: number
  /** ms to hold the fully-typed word before deleting it. */
  pauseDuration?: number
}

/**
 * Cycles through a list of words with a classic typewriter effect:
 * types a word out character by character, holds it, deletes it
 * character by character, then moves on to the next word (looping).
 */
export function useTypewriter(
  words: string[],
  {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 1500,
  }: TypewriterOptions = {}
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex % words.length]

    // Fully typed: pause, then start deleting.
    if (!isDeleting && text === currentWord) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    // Fully deleted: move on to the next word.
    if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
      return
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed

    const timeout = setTimeout(() => {
      setText((current) =>
        isDeleting
          ? currentWord.slice(0, current.length - 1)
          : currentWord.slice(0, current.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return text
}
