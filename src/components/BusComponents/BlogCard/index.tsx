const BlogCard = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`bg-blog-card-bg border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show ${className}`}
		>
			{children}
		</div>
	);
};

export default BlogCard;
