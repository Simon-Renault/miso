import css from './header.module.scss';
import { Menu } from 'react-feather';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import classNames from 'classnames';


const Header = () => {


	const headerRef = useRef(null)
	const [lhp, setLhp] = useState(0)
	const [animate, setAnimate] = useState(false)
	const [fix, setFix] = useState(false)
	const [ready, setReady] = useState(false)

	useScrollPosition(
		({ prevPos, currPos }) => {

			const st = -currPos.y
			const lst = -prevPos.y

			if (st < 0 || Math.abs(lst - st) <= 5) return;

			if (st <= lhp) {
				setAnimate(false)
				setReady(false)
				setFix(false)
			} else {
				if (st == 0) {
					setAnimate(false)
					setReady(false)
					setFix(false)
				} else if (st <= lst && !fix) {
					if (headerRef?.current) {
						const { offsetTop } = headerRef.current
						setLhp(offsetTop)
					}
					setFix(true)
					setTimeout((() => setReady(true)), 5);
					setTimeout((() => setAnimate(true)), 25);

				} else if (st > lst && animate) {
					setAnimate(false)
					setTimeout((() => {
						setFix(false)
						setReady(false)
					}), 105);
				}
			}
		},
		[setAnimate, setFix, setReady, setLhp]
	)

	return (
		<header className={classNames(css.header_holder, animate && css.animate, fix && css.fix, ready && css.ready)}>
			<div className={css.header} ref={headerRef}>

				<Link href="/">
					<a className={css.title_container}>
						<div className={css.logo}></div>
						<div className={css.title}>Simon Renault</div>
					</a>
				</Link>

				<Menu size={24} />

			</div>
		</header>
	);
};

export default Header;
