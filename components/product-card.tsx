import { Product } from '@chec/commerce.js/types/product'
import Link from 'next/link'
import Image from 'next/image'
import css from './product-card.module.scss'

interface IProductCard {
	product: Product
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {

	const maybeImage = product.image && <Image src={product.image.url}
		layout="responsive"
		alt={product.name}
		quality={10}
		width={product.image.image_dimensions.width / 10}
		height={product.image.image_dimensions.height / 10} />

	return (
		<Link href="/" >
			<a>
				<figure className={`${css.card}`}>
					<div className={css.placeholder}>
						{maybeImage}
					</div>
					<div className={css.title}>{product.name}</div>
					<div className={css.price}>{product.price.formatted_with_symbol}</div>
				</figure>
			</a>
		</Link>
	)
}

export default ProductCard
