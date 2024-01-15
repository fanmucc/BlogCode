"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";

import TemplateSetting from "@/components/TemplateSetting";

export default function Home() {
	let themeTypeCookies = Cookies.get("blog_next_theme_type");
	// useEffect(() => {
	// 	if (themeTypeCookies === "auto") {
	// 		const darkModeMediaQuery = window.matchMedia(
	// 			"(prefers-color-scheme: dark)"
	// 		);
	// 		const isDarkMode = darkModeMediaQuery.matches;
	// 		document.body.className = isDarkMode ? "dark" : "light";
	// 	}
	// }, [themeTypeCookies]);
	return (
		<main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-bg-a dark:bg-bg-a bg-blog-bg-color'>
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
				<div className='text-2xl text-blog-text'>公共样式使用</div>
				<div className='text-blog-text-primary'>主题色</div>
				<div className='text-blog-text hover:text-blog-text-primary cursor-pointer'>
					文字hover颜色
				</div>
				<div className='p-8 w-50 h-50 text-blog-text bg-blog-card-bg border-solid border-1 rounded-[12px] hover:bg-blog-text-primary hover:text-white cursor-pointer shadow-blog-card-show'>
					我是一个卡片 圆角与边框色
				</div>
				<div className='flex gap-4 px-[10px] py-[8px] border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show'>
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
							Cookies.set("blog_next_theme_type", "auto");
							document.body.className = isDarkMode ? "dark" : "light";
							// cookies().set("theme", "auto");
						}}
					>
						AUTO
					</div>
				</div>
			</div>
			<TemplateSetting />
		</main>
	);
}
