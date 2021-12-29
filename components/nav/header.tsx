import css from './header.module.scss';
import { useRef, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Menu } from 'react-feather';

const Header = () => {
	const headerRef = useRef(null)
	const [hasScrolled, setHasScrolled] = useState(false)

	useScrollPosition(
		({ currPos }) => {
			// default transition height
			let height = 100;

			// get real transition height
			if (headerRef?.current) {
				const { clientHeight } = headerRef.current
				height = clientHeight
			}
			const _hasScrolled = currPos.y < (-height * 2);

			//Only update when a change happen to avoid unecesary re-renders
			if (_hasScrolled !== hasScrolled) setHasScrolled(_hasScrolled);
		},
		[headerRef, hasScrolled, setHasScrolled]
	)

	return (
		<>
			<header
				className={css.header}
				ref={headerRef}
			>
				{headerContent}
			</header>
			<AnimatePresence>
				{hasScrolled &&
					<motion.header
						className={css.fixed_header}
						variants={fixedHeaderVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						{headerContent}
					</motion.header>
				}
			</AnimatePresence>
		</ >
	);
};

const headerContent = (
	<div className={css.header_content} >
		<Link href="/">
			<a className={css.title_container}>
				<div className={css.logo}></div>
				<div className={css.title}>Simon Renault</div>
			</a>
		</Link>

		<Menu size={24} />
	</div>
)

const fixedHeaderVariants = {
	initial: {
		y: -100,
		transition: { type: "tween", duration: .2 }
	},
	animate: {
		y: 0,
		transition: { type: "tween", duration: .2 }
	},
	exit: {
		opacity: 0,
		y: -100,
		transition: { type: "tween", duration: .2 }
	}
}

export default Header;
