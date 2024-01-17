interface IIconFont {
	type: string;
	className?: string;
}

export default function IconFont({ type, className }: IIconFont) {
	return <i className={`${type} ${className}`}></i>;
}
