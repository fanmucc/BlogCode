// 引用的组件
import Link from "next/link";
import IconFont from "@/components/BusComponents/IconFont";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import styles from "./index.module.scss";

const TopBanner = () => {
	return (
		<div className='relative py-2 px-4 flex items-center justify-between h-[50px] bg-blog-bg-color border-1 border-solid rounded-[12px] border-blog-border-color shadow-blog-card-show text-blog-text hover:border-blog-text-primary'>
			<div className='absolute left-4 w-[50px] text-[16px] font-semibold'>
				热点
			</div>
			<Swiper
				className={`relative w-full text-[16px] h-full overflow-hidden ${styles["swiper-box"]}`}
				direction={"vertical"}
				modules={[Autoplay, Pagination]}
				centeredSlides={false}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide className='!w-full !h-full'>
					<Link
						className='flex flex-1 items-center justify-center h-full font-semibold'
						href=''
					>
						内容1
					</Link>
				</SwiperSlide>
				<SwiperSlide className='!w-full !h-full'>
					<Link
						className='flex flex-1 items-center justify-center h-full font-semibold'
						href=''
					>
						内容2
					</Link>
				</SwiperSlide>
				<SwiperSlide className='!w-full !h-full'>
					<Link
						className='flex flex-1 items-center justify-center h-full font-semibold'
						href=''
					>
						内容3
					</Link>
				</SwiperSlide>
			</Swiper>
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
