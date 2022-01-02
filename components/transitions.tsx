
import { motion } from 'framer-motion'

const fade = {
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

const DefaultPageTransition: React.FC = ({ children }) => {

	return (
		<motion.div variants={fade} initial="initial" animate="animate" exit="exit">
			{children}
		</motion.div>
	)
}

export default DefaultPageTransition
