import classNames from "classnames"
import { motion } from "framer-motion"
import Parallax from "../Paralax"
import css from "./grid.module.scss"

interface IGridProps {
	items: JSX.Element[]
}

const Grid = ({ items }: IGridProps) => {
	return (
		<motion.div className={css.grid}>
			{items.map((item, index) => {

				const { classNamesList, scrollSpeed } = computeClassNamesByIndex(index, items.length);

				return (
					<Parallax offset={scrollSpeed} key={`grdi-item_${index}`}>
						<motion.div
							className={classNames(css.grid_item, classNamesList)}>
							{item}
						</motion.div>
					</Parallax>

				)
			})}
		</motion.div >)
}

const computeClassNamesByIndex = (index: number, totalItems: number) => {

	const item_reminaing = totalItems - index;
	const item_number = index % 11;

	let pushClass;
	let otherClass;
	let scrollSpeed;

	//Vertical displacement
	if (index == 0) {
		if (item_reminaing > 1) {
			pushClass = css.mt_2;
		} else if (item_reminaing > 0 || item_number == 8) {
			pushClass = css.mt_1;
		}
	} else if (index == 1) {
		if (item_reminaing > 0) {
			pushClass = css.mt_1;
		}
	} else if (index == 2) {
		pushClass = css.mt_half;
	} else {
		if (item_number == 0) {
			if (item_reminaing > 1) {
				pushClass = css.mt_1;
			} else if (item_reminaing > 0) {
				//one plus
				pushClass = css.mt_2;
			} else {
				pushClass = css.mt_1;
			}
		} else if (item_number == 1) {
			if (item_reminaing > 0) {
				pushClass = css.mt_1;
			}
		} else if (item_number == 3) {
			if (item_reminaing > 0) {
				pushClass = css.mt_1;
			}
		} else if (item_number == 5 || item_number == 8) {
			pushClass = css.mt_2;
		} else if (item_number == 6) {
			if (item_reminaing > 0) {
				pushClass = css.mt_1;
			} else {
				pushClass = css.mt_half;
			}
		} else if (item_number == 9) {
			if (item_reminaing > 1) {
				pushClass = css.mt_2;
			} else {
				pushClass = css.mt_1;
			}
		} else {
			pushClass = css.mt_1;
		}
	}

	//base class Names
	if (item_number == 0) {
		otherClass = classNames(css.span_2, css.ml_1)
		scrollSpeed = -60

	} else if (item_number == 1) {
		otherClass = classNames(css.span_4, css.ml_1)
		scrollSpeed = 10

	} else if (item_number == 2) {
		otherClass = classNames(css.span_2, css.ml_1)
		scrollSpeed = 50

	} else if (item_number == 3) {
		otherClass = classNames(css.span_3, css.ml_2)
		scrollSpeed = -10

	} else if (item_number == 4) {
		otherClass = classNames(css.span_3, css.ml_2)
		scrollSpeed = 70

	} else if (item_number == 5) {
		otherClass = classNames(css.span_2, css.ml_2)
		scrollSpeed = -35

	} else if (item_number == 6) {
		otherClass = classNames(css.span_3, css.ml_1)
		scrollSpeed = 15

	} else if (item_number == 7) {
		otherClass = classNames(css.span_2, css.ml_1)
		scrollSpeed = 35

	} else if (item_number == 8) {
		otherClass = classNames(css.span_2, css.ml_1)
		scrollSpeed = -35

	} else if (item_number == 9) {
		otherClass = classNames(css.span_3, css.ml_1)
		scrollSpeed = 10

	} else if (item_number == 10) {
		otherClass = classNames(css.span_2, css.ml_1)
		scrollSpeed = 35

	} else {
		otherClass = classNames(css.span_3, css.ml_half)
	}


	return { classNamesList: classNames(otherClass, pushClass, css.mb_1), scrollSpeed }
}

export default Grid