import { useState, useRef, useLayoutEffect, ReactNode } from 'react'
import { motion, useViewportScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

type ParallaxProps = {
	children: ReactNode
	offset?: number
}

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {

	//For accessibility reasons
	const prefersReducedMotion = useReducedMotion()

	//DOM refs
	const ref = useRef<HTMLDivElement>(null)
	const { scrollY } = useViewportScroll()

	//State
	const [elementTop, setElementTop] = useState(0)
	const [clientHeight, setClientHeight] = useState(0)


	const initial = elementTop - clientHeight
	const final = elementTop + offset

	const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
	const y = useSpring(yRange, { stiffness: 400, damping: 90 })

	useLayoutEffect(() => {
		const element = ref.current
		const onResize = () => {
			if (!element) return
			setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
			setClientHeight(window.innerHeight)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [ref])

	// Don't parallax if the user has "reduced motion" enabled
	if (prefersReducedMotion) {
		return <>{children}</>
	}

	return (
		<motion.div ref={ref} style={{ y }}>
			{children}
		</motion.div>
	)
}

export default Parallax