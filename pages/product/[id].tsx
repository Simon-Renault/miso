import { motion } from "framer-motion"
import { commerce } from "lib/commerce";
import { NextPage } from "next/types"
import css from "./[id].module.scss"
import { Product } from "@chec/commerce.js/types/product";
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

interface IproductPageProps {
	product: Product,
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context
	const { data: products } = await commerce.products.list();
	const product = products.find(p => params && p.id === params.id)

	return {
		props: {
			product
		},
	};
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: products } = await commerce.products.list();

	const paths = products.map((product) => ({
		params: { id: product.id },
	}))

	return { paths, fallback: false }
}



const ProductPage: NextPage<IproductPageProps> = ({ product }) => {

	return (
		<motion.div>

			{product.id}
			<motion.div className={css.image}>
				{product.image && <Image src={product.image?.url} layout="fill" />}
			</motion.div>

		</motion.div>
	)
}

export default ProductPage