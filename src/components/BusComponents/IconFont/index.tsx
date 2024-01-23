import classNames from "classnames";

interface IIconFont {
	type: string;
	className?: string;
	size?: number;
}

export default function IconFont({
	type,
	className = "",
	size = 16,
}: IIconFont) {
	return (
		<i
			className={`${type} ${className}`}
			style={{
				fontSize: size + "px",
			}}
		></i>
	);
}
