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
        width={product.image.image_dimensions.width}
        height={product.image.image_dimensions.height} />
        
    return (
        <Link href="/" >
            <figure className={`${css.card}`}>
                <div className={css.placeholder}>
                    {maybeImage}
                </div>
                <div className={css.title}>{product.name}</div>
                <div className={css.price}>{product.price.formatted_with_symbol}</div>
            </figure>
        </Link>
    )
}

export default ProductCard
