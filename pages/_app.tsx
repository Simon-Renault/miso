import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/nav/header'
import { AnimatePresence, motion } from 'framer-motion'


const test = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1
	},
	exit: {
		opacity: 0
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<AnimatePresence>
				<motion.div variants={test} initial="initial" animate="animate" exit="exit">
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</>
	)

}

export default MyApp
