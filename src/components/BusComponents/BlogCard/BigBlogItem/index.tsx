import BlogCard from "../index";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import IconFont from "@/components/BusComponents/IconFont";

import styles from "./index.module.scss";

const BigBlogItem = () => {
	return (
		<BlogCard className='group cursor-pointer hover:border-blog-text-primary overflow-x-hidden'>
			<Link href='/personal' className={`${styles["big-blog-item"]}`}>
				<div className='h-[225px] w-full overflow-hidden'>
					<Image
						height={225}
						alt='NextUI Fruit Image with Zoom'
						src='https://p.zhheo.com/euXHTT23590281707014915500.png!cover'
						radius='none'
					/>
				</div>
				<div className='px-[32px] py-[20px]'>
					{/* 分类组件 */}
					<div>
						<div className='text-blog-tag-color/80 text-[10px] leading-[20px]'>
							闲聊杂谈
						</div>
					</div>
					{/* 标题 */}
					<div className='text-blog-text text-[20px] leading-[30px] line-clamp-2 font-bold group-hover:text-blog-text-primary'>
						这是我的文章标题 超过两行则切换成。。。这是我的文章标题
						超过两行则切换成。。。这是我的文章标题
						超过两行则切换成。。。这是我的文章标题
						超过两行则切换成。。。这是我的文章标题
						超过两行则切换成。。。这是我的文章标题 超过两行则切换成。。。
					</div>
					{/* 标签模块 */}
					<div className='mt-[20px] flex items-center justify-between'>
						<div className='flex items-center'>
							<div className='mr-[6px] flex items-center text-blog-text font-bold hover:text-blog-text-primary'>
								<IconFont
									type='icon-[material-symbols--tag-rounded]'
									size={12}
									className='text-blog-text/40 mr-[2px]'
								/>
								标签一
							</div>
							<div className='mr-[6px] flex items-center text-blog-text font-bold hover:text-blog-text-primary'>
								<IconFont
									type='icon-[material-symbols--tag-rounded]'
									size={12}
									className='text-blog-text/40 mr-[2px]'
								/>
								标签二
							</div>
							<div className='mr-[6px] flex items-center text-blog-text font-bold hover:text-blog-text-primary'>
								<IconFont
									type='icon-[material-symbols--tag-rounded]'
									size={12}
									className='text-blog-text/40 mr-[2px]'
								/>
								标签三
							</div>
						</div>
						<div className='text-blog-text font-bold'>2/14</div>
					</div>
				</div>
			</Link>
		</BlogCard>
	);
};

export default BigBlogItem;
