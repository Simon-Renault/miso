import Image from 'next/image';
import React, { CSSProperties, useState } from 'react';
import css from './image.module.scss';

interface IImageProps {
	src: string;
	alt?: string;
	className?: string;
	style?: CSSProperties;
	onLoad?: () => void;
}

const Img = ({ src, className, style, alt, onLoad }: IImageProps): JSX.Element => {
	const whenLoaded = onLoad; // to avoid naming collision
	const [isLoaded, SetLoad] = useState(false);

	return (
		<div style={style} className={`${className} ${css.image} ${isLoaded ? css.loaded : css.loading}`}>
			<Image
				src={src}
				alt={alt}
				layout="fill"
				objectFit="cover"
				onLoad={() => {
					SetLoad(true);
					if (whenLoaded) whenLoaded();
				}}
			/>
		</div>
	);
};

export default Img;
