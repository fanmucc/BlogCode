// 引用的组件
import IconFont from "@/components/BusComponents/IconFont";

const TopBanner = () => {
	return (
		<div className='relative py-2 px-4 flex items-center justify-between h-[50px] bg-blog-bg-color border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show text-blog-text hover:border-blog-text-primary'>
			<div className='absolute left-4 w-[50px] text-[16px] font-semibold'>
				热点
			</div>
			<div className='relative px-[50px] w-full text-[16px] h-full font-medium overflow-hidden'>
				<div className='absolute left-0 right-0 top-0 bottom-0 h-full w-full animate-banners'>
					<div className='flex flex-1 items-center justify-center h-full'>
						内容1
					</div>
					<div className='flex flex-1 items-center justify-center h-full'>
						内容2
					</div>
					<div className='flex flex-1 items-center justify-center h-full'>
						内容3
					</div>
				</div>
			</div>
			<div className='absolute right-4 p-[4px] flex items-center justify-center bg-blog-bg-op rounded-[50%] hover:bg-blog-text-primary'>
				<IconFont
					type='icon-[teenyicons--right-small-outline]'
					size={16}
					className='text-blog-card-bg'
				/>
			</div>
		</div>
	);
};

export default TopBanner;
