export default function TemplateSetting() {
	return (
		<div className='mt-6'>
			<div className='text-2xl'>公共样式配置表</div>
			<div className='mt-4 grid grid-cols-4 gap-4'>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 text-[#4f46e5]'>
					<div>主题色: #4f46e5</div>
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 hover:bg-[#4f46e5] hover:text-[#FFFFFF] cursor-pointer'>
					<div>Hover颜色</div>
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 bg-[#f7f9fe]'>
					默认背景色: #f7f9fe;
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 bg-[#FFFFFF]'>
					卡片默认背景色: #FFFFFF;
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60'>
					卡片边框颜色: #e3e8f7;
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60'>
					卡片边框宽度
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60'>
					卡片圆角: 12px
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 shadow-[0_8px_16px_-4px_#2c2d300c]'>
					阴影色
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 text-[#363636]'>
					文字颜色黑色: #363636
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 text-[#363636]'>
					默认字体大小: 16px
				</div>
				<div className='px-[16px] py-[8px] border rounded-[12px] border-[#e3e8f7] h-40 w-60 text-[#363636]'>
					默认字体: "PingFang SC","Hiragino Sans GB","Microsoft YaHei";
				</div>
			</div>
		</div>
	);
}
