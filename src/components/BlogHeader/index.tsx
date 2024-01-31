"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Tabs,
	Tab,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { Logo } from "@/components/Logo";
import IconFont from "@/components/BusComponents/IconFont";

import styles from "./blogheader.module.css";

const BlogHeader = () => {
	const pathname = usePathname();
	const [scroll, setScroll] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	// 监听页面滚动
	useEffect(() => {
		const handleScroll = () => {
			let scrollDistance = window.scrollY || document.documentElement.scrollTop;
			setScroll(scrollDistance > 80);
			console.log(scrollDistance);
		};
		document.addEventListener("scroll", handleScroll);
	}, []);
	return (
		<Navbar
			className={`fixed top-0 left-0 right-0 bg-blog-bg-color ${
				scroll ? "bg-blog-card-bg outline-1 outline-bg-blog-card-bg" : ""
			} ${styles.nav}`}
			height={"60px"}
		>
			<NavbarContent justify='start'>
				{/* <Logo /> */}
				<NavbarItem>
					<div className='group h-[35px] w-[70px] cursor-pointer'>
						<Link
							className='relative h-[35px] w-[70px] flex items-center justify-start text-[16px] font-[700] text-blog-text rounded-[40px] overflow-hidden'
							href='/'
						>
							Fan'mu
							<span className='hidden absolute left-0 top-0 h-[35px] w-[70px] bg-blog-text-primary/100 flex items-center justify-center group-hover:flex'>
								<IconFont
									type='icon-[material-symbols-light--home-rounded]'
									size={28}
									className='text-blog-card-bg'
								/>
							</span>
						</Link>
					</div>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className='hidden sm:flex gap-16' justify='center'>
				<Dropdown className='p-[8px]'>
					<NavbarItem>
						<DropdownTrigger>
							<Link
								size='md'
								// href='/'
								aria-current='page'
								// color={pathname === "/" ? "primary" : "foreground"}
								className='text-[16px] font-[700] tracking-[6px] text-blog-text hover:text-blog-text-primary'
							>
								文库
							</Link>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu
						aria-label='ACME features'
						className='w-[340px] bg-blog-card-bg'
						itemClasses={{
							base: "gap-4",
						}}
					>
						<DropdownItem
							key='autoscaling'
							description='ACME scales apps to meet user demand, automagically, based on load.'
							className='hover:!bg-blog-text-primary hover:!text-white'
						>
							Autoscaling
						</DropdownItem>
						<DropdownItem
							key='usage_metrics'
							description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
							className='hover:!bg-blog-text-primary hover:!text-white'
						>
							Usage Metrics
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavbarItem>
					<Link
						size='md'
						// color={pathname === "/personal" ? "primary" : "foreground"}
						href='/personal'
						className='text-[16px] font-[700] tracking-[6px] text-blog-text hover:text-blog-text-primary'
					>
						工具
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						size='md'
						// color={pathname === "/personal" ? "primary" : "foreground"}
						href='/personal'
						className='text-[16px] font-[700] tracking-[6px] text-blog-text hover:text-blog-text-primary'
					>
						我的
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				{/* <NavbarItem>
					<Popover placement='bottom'>
						<PopoverTrigger>
							<div className='px-[4px] py-[2px] flex items-center bg-blog-bg-op/15 rounded-[40px] cursor-pointer'>
								<IconFont type='icon-[material-symbols--language]' size={16} />
								<span className='ml-[4px] text-[12px] scale-80 text-blog-text'>
									简体
								</span>
							</div>
						</PopoverTrigger>
						<PopoverContent>
							<Tabs radius={"full"} aria-label='language'>
								<Tab key='zh-CN' title='中文简体' />
								<Tab key='zh-TW' title='中文繁体' />
								<Tab key='en' title='英文' />
							</Tabs>
						</PopoverContent>
					</Popover>
				</NavbarItem> */}
				{/* <NavbarItem>
					<Popover placement='bottom'>
						<PopoverTrigger>
							<div className='px-[4px] py-[2px] flex items-center bg-blog-bg-op/15 rounded-[40px] cursor-pointer'>
								<IconFont
									type='icon-[fluent--weather-sunny-low-48-filled]'
									size={16}
								/>
								<span className='ml-[4px] text-[12px] scale-80 text-blog-text'>
									浅色模式
								</span>
							</div>
						</PopoverTrigger>
						<PopoverContent>
							<Tabs radius='full' aria-label='language'>
								<Tab
									key='light'
									title={
										<div className='flex items-center'>
											<IconFont
												type='icon-[fluent--weather-sunny-low-48-filled]'
												className='mr-[4px]'
												size={16}
											/>{" "}
											浅色模式
										</div>
									}
								/>
								<Tab
									key='dark'
									title={
										<div className='flex items-center'>
											<IconFont
												type='icon-[fluent--weather-sunny-low-48-regular]'
												className='mr-[4px]'
												size={16}
											/>{" "}
											深色模式
										</div>
									}
								/>
								<Tab
									key='auto'
									title={
										<div className='flex items-center'>
											<IconFont
												type='icon-[streamline--interface-weather-sun-photos-light-camera-mode-brightness-sun-photo-full]'
												className='mr-[4px]'
												size={16}
											/>{" "}
											跟随系统
										</div>
									}
								/>
							</Tabs>
						</PopoverContent>
					</Popover>
				</NavbarItem> */}
				<NavbarItem>
					<div className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-blog-text hover:bg-blog-text-primary hover:rounded-[50%] hover:!text-blog-card-bg'>
						<IconFont type='icon-[ph--link-bold]' size={18} />
					</div>
				</NavbarItem>
				<NavbarItem>
					<div className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-blog-text hover:bg-blog-text-primary hover:rounded-[50%] hover:!text-blog-card-bg'>
						<IconFont type='icon-[pajamas--search-sm]' size={18} />
					</div>
				</NavbarItem>
				<NavbarItem>
					<div className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-blog-text hover:bg-blog-text-primary hover:rounded-[50%] hover:!text-blog-card-bg'>
						<IconFont type='icon-[mingcute--layout-6-fill]' size={18} />
					</div>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default BlogHeader;
