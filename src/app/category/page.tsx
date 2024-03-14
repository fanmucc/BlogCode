// 引入组件
import BlogHeader from "@/components/BlogHeader";
import Link from "next/link";
import IconFont from "@/components/BusComponents/IconFont";

import styles from "./index.module.scss";

import { getAllNotes } from "@/app/api/index";

export default async function Category() {
	let data: any = await getAllNotes();
	let categoryList = data?.data || [];
	console.log(categoryList);

	return (
		<main className='max-w-[1024px] mx-auto pt-[80px] grid min-h-full'>
			<BlogHeader />
			<div className='py-[20px]'>
				<div className='text-[32px] font-bold text-blog-text'>分类</div>
				<div className='py-[20px] flex items-center justify-center flex-wrap gap-[20px]'>
					{categoryList?.map((item: any) => {
						return (
							<Link
								className={`${styles["category-list"]} py-[5px] px-[12px] flex items-center justify-center text-blog-text text-[22px] gap-[4px] bg-blog-card-bg border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show hover:bg-blog-text-primary hover:text-white`}
								key={item.id}
								href={item.href}
							>
								<IconFont
									type='icon-[material-symbols--tag-rounded]'
									size={20}
									className='text-blog-text/40'
								/>
								{item.name}
								<span
									className={`p-[4px] flex items-center justify-center text-[20px] leading-[20px] text-blog-text/80 bg-blog-card-op-color rounded-[8px] ${styles["category-list-num"]}`}
								>
									{item.num}
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</main>
	);
}
