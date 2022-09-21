import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function useReveal() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    const isVisible = async () => {
      if (inView) {
        await controls.start('visible')
      }
    }
    isVisible().catch(console.error)
  }, [controls, inView])

  return [controls, ref]
}

export default useReveal
