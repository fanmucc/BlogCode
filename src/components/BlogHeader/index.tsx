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
			className={`h-[60px] bg-blog-bg-color ${
				scroll ? "bg-blog-card-bg outline-1 outline-bg-blog-card-bg" : ""
			}`}
		>
			<NavbarBrand>
				{/* <Logo /> */}
				<div className='group h-[35px] w-[70px] cursor-pointer'>
					<Link
						className='relative h-[35px] w-[70px] flex items-center justify-center text-[16px] font-[700] text-blog-text rounded-[40px] overflow-hidden'
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
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-16' justify='center'>
				<NavbarItem>
					<Link
						size='md'
						href='/'
						aria-current='page'
						// color={pathname === "/" ? "primary" : "foreground"}
						className='text-[16px] font-[700] tracking-[6px] text-blog-text hover:text-blog-text-primary'
					>
						文库
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
					<div
						className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer hover:bg-blog-text-primary hover:rounded-[50%] hover:!text-blog-card-bg'
						onClick={() => onOpen()}
					>
						<IconFont type='icon-[mingcute--layout-6-fill]' size={18} />
					</div>
				</NavbarItem>
			</NavbarContent>
			<Modal
				size={"full"}
				isOpen={isOpen}
				onClose={onClose}
				classNames={{
					body: "py-6",
					backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
					base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
					header: "border-b-[1px] border-[#292f46]",
					footer: "border-t-[1px] border-[#292f46]",
					closeButton: "hover:bg-white/5 active:bg-white/10",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='lg flex flex-col gap-1'>
								Modal Title
							</ModalHeader>
							<ModalBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat
									consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit officia eiusmod Lorem
									aliqua enim laboris do dolor eiusmod.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Close
								</Button>
								<Button color='primary' onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</Navbar>
	);
};

export default BlogHeader;
