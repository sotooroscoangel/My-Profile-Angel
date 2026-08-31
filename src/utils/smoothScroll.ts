// Ease-in-out cubic — quick to get moving, gentle landing.
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
}

/**
 * Scrolls smoothly to the element with the given id, with a custom
 * duration/easing (unlike CSS `scroll-behavior: smooth`, whose speed
 * and curve aren't configurable and can feel sluggish over long
 * distances).
 */
export function smoothScrollTo(targetId: string, duration = 700) {
  const target = document.getElementById(targetId)
  if (!target) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.scrollIntoView({ block: 'start' })
    return
  }

  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + startY
  const distance = targetY - startY

  let startTime: number | null = null

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)

    window.scrollTo({
      top: startY + distance * easeInOutCubic(progress),
      left: 0,
      behavior: 'auto',
    })

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
