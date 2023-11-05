import React from 'react';
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
const Skeleton = (props: React.JSX.IntrinsicAttributes & IContentLoaderProps) => {
	return (
		<ContentLoader
			speed={3}
			width={280}
			height={455}
			viewBox="0 0 280 455"
			backgroundColor="#fdffdb"
			foregroundColor="#f8f3d3"
			{...props}
		>
			<circle cx="133" cy="134" r="130" />
			<rect x="-3" y="271" rx="15" ry="15" width="280" height="23" />
			<rect x="0" y="310" rx="25" ry="25" width="280" height="80" />
			<rect x="124" y="411" rx="25" ry="25" width="156" height="44" />
			<rect x="0" y="421" rx="5" ry="5" width="64" height="27" />
		</ContentLoader>
	)
};

export default Skeleton;

