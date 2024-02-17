import blog from "../../api/index";

export default async function Personal() {
	// const data = await getData();
	// console.log(data);
	let data = await blog();

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
			</div>
		</main>
	);
}
