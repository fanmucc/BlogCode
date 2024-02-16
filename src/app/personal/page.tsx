import { get } from "@/utils/request";

import blog from "../index";

async function getData() {
	const res = await get("/api/home");
	console.log(res, "====res====");

	// if (!res.ok) {
	// 	// 这会触发最近的 `error.js` 错误边界
	// 	throw new Error("Failed to fetch data");
	// }
	// return res.json();
	return [];
}

export default async function Personal() {
	// const data = await getData();
	// console.log(data);
	let data = await blog();
	console.log(data, "获取到的数据");

	return (
		<main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<p className='text-8xl font-semibold text-indigo-600'>404</p>
				<h1 className='mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
					个人中心正在建设中
				</h1>
				<p className='mt-10 text-base leading-7 text-gray-600'>
					对不起，个人中心正在建设中，您可以浏览其他开发者所创作的优秀文章
				</p>
				{/* <div className='mt-10 flex items-center justify-center gap-x-6'>
					<a
						href='#'
						className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Go back home
					</a>
					<a href='#' className='text-sm font-semibold text-gray-900'>
						Contact support <span aria-hidden='true'>&rarr;</span>
					</a>
				</div> */}
			</div>
		</main>
	);
}
