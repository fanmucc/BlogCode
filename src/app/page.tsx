"use client";
import Cookies from "js-cookie";
// import blog from "@/api/index";

import TemplateSetting from "@/components/TemplateSetting";
import { Button } from "@nextui-org/react";
import BlogHeader from "@/components/BlogHeader";
import TopBanner from "@/components/BusComponents/TopBanner";
import CategoryMenu from "@/components/BusComponents/CategoryMenu";
import BigBlogItem from "@/components/BusComponents/BlogCard/BigBlogItem";

const categoryList = [
	{
		name: "首页",
		id: 0,
		href: "/",
	},
	{
		name: "我的项目",
		id: 1,
		href: "/",
	},
	{
		name: "问题解决",
		id: 2,
		href: "/",
	},
	{
		name: "Vue",
		id: 3,
		href: "/",
	},
	{
		name: "React",
		id: 4,
		href: "/",
	},
	{
		name: "NextJs",
		id: 5,
		href: "/",
	},
	{
		name: "Node",
		id: 6,
		href: "/",
	},
];

async function getData() {
	// let data = await blog();
	// console.log(data, "===获取到的数据===");
	// return data;
	// return JSON.parse(JSON.stringify(data));
	console.log("===data");
	// let data = getAllNotes();
	console.log(data, "===data");
}

export default function Home() {
	return (
		<main className='max-w-[1024px] mx-auto pt-[80px] grid min-h-full'>
			<BlogHeader />
			<TopBanner />
			<div className='w-full py-3'>
				<CategoryMenu menu={categoryList} />
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<BigBlogItem />
				<BigBlogItem />
				<BigBlogItem />
				<BigBlogItem />
			</div>
			<div className='text-center'>
				<p className='text-8xl font-semibold text-indigo-600'>404</p>
				<h1 className='mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
					文库正在建设中
				</h1>
				<p className='mt-10 text-base leading-7 text-gray-600'>
					对不起，文库正在建设中，您可以浏览其他开发者所创作的优秀文章
				</p>
			</div>
			<div className='flex flex-col bg-blog-bg-color p-20'>
				{/* <div className='text-2xl text-blog-text'>公共样式使用</div>
				<div className='text-blog-text-primary'>主题色</div>
				<div className='text-blog-text hover:text-blog-text-primary cursor-pointer'>
					文字hover颜色
				</div>
				<div className='p-8 w-50 h-50 text-blog-text bg-blog-card-bg border-solid border-1 rounded-[12px] hover:bg-blog-text-primary hover:text-white cursor-pointer shadow-blog-card-show'>
					我是一个卡片 圆角与边框色
				</div> */}
				{/* <div className='flex gap-4 px-[10px] py-[8px] border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show'>
					<div
						className='px-[16px] py-[8px] w-auto border-1 border-solid border-blog-border-color rounded-[8px] cursor-pointer text-blog-text-primary hover:bg-blog-text-primary hover:text-white dark:hover:text-blog-text'
						onClick={() => {
							console.log("点击了按钮 light");
							console.log(document.cookie);
							Cookies.set("blog_next_theme_type", "light");
							document.body.className = "light";
							// cookies().set("theme", "light");
						}}
					>
						浅色模式
					</div>
					<div
						className='px-[16px] py-[8px] w-auto border-1 border-solid border-blog-border-color rounded-[8px] cursor-pointer text-blog-text-primary hover:bg-blog-text-primary hover:text-white dark:hover:text-blog-text'
						onClick={() => {
							console.log("点击了按钮 dark");
							Cookies.set("blog_next_theme_type", "dark");
							document.body.className = "dark";
							// cookies().set("theme", "dark");
						}}
					>
						深夜模式
					</div>
					<div
						className='px-[16px] py-[8px] w-auto border-1 border-solid border-blog-border-color rounded-[8px] cursor-pointer text-blog-text-primary hover:bg-blog-text-primary hover:text-white dark:hover:text-blog-text'
						onClick={() => {
							console.log("点击了按钮 auto");
							const darkModeMediaQuery = window.matchMedia(
								"(prefers-color-scheme: dark)"
							);
							const isDarkMode = darkModeMediaQuery.matches;
							Cookies.set("blog_next_theme_type", "");
							document.body.className = isDarkMode ? "dark" : "light";
							// cookies().set("theme", "auto");
						}}
					>
						AUTO
					</div>
				</div> */}
				{/* <div className='mt-[20px]'>
					<Button
						disableRipple
						className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 light:text-black dark:text-white"
						size='lg'
					>
						Press me
					</Button>
					<Button color='primary'>Press me</Button>
				</div> */}
			</div>
			{/* <TemplateSetting /> */}
		</main>
	);
}
