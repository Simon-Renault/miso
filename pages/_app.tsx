import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/nav/header'
import { AnimatePresence } from 'framer-motion'




function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<AnimatePresence>

				<Component {...pageProps} />

			</AnimatePresence>
		</>
	)

}

export default MyApp
