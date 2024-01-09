const WebFooter = () => {
	return (
		<div className='position: fixed bottom-10 left-0 right-0 flex flex-1 items-center justify-center w-100%'>
			个人网站备案号:
			<a
				href='https://beian.miit.gov.cn/'
				target='_blank'
				className='ml-1 text-[#f59e0b]'
			>
				豫ICP备2023039354号-1
			</a>
		</div>
	);
};

export default WebFooter;
