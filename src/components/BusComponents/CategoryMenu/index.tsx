// 引入组件
import Link from "next/link";

type MenuItem = {
	name: string;
	id: number;
	href: string;
};

const CategoryMenu = (props: { menu: MenuItem[] }) => {
	const { menu } = props;
	return (
		<div className='py-[8px] px-[14px] flex items-center justify-start gap-[6px] h-[50px] bg-blog-card-bg border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show text-blog-text'>
			{menu?.map((item: MenuItem) => {
				return (
					<div key={item?.id}>
						<Link
							className={`py-[2px] px-[10px] flex items-center justify-center text-[16px] font-bold text-blog-text rounded-[8px] ${
								item?.id === 0
									? "bg-blog-text-primary text-blog-text-black"
									: ""
							} hover:bg-blog-text-primary hover:text-blog-text-black`}
							href={item?.href || "/"}
						>
							{item.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default CategoryMenu;
