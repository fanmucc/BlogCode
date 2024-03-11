"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	useDisclosure,
} from "@nextui-org/react";
import { Logo } from "@/components/Logo";
import IconFont from "@/components/BusComponents/IconFont";

import styles from "./blogheader.module.scss";

const BlogHeader = () => {
	const pathname = usePathname();
	const [scroll, setScroll] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	// 监听页面滚动
	useEffect(() => {
		const handleScroll = () => {
			let scrollDistance = window.scrollY || document.documentElement.scrollTop;
			setScroll(scrollDistance > 80);
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
							{`Fan'mu`}
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
					<NavbarItem className='cursor-pointer'>
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
						className='w-[300px] bg-blog-card-bg'
						itemClasses={{
							base: "gap-4",
						}}
					>
						<DropdownItem
							key='blog_list'
							// description={
							// 	<span className='text-[12px]'>
							// 		所有文章列表，个人的所有知识产出
							// 	</span>
							// }
							// showDivider
							className='py-[8px] !text-blog-text hover:!bg-blog-text-primary hover:!text-blog-black-white'
							startContent={
								<IconFont type='icon-[material-symbols--lists]' size={20} />
							}
						>
							<div className='text-[14px]'>文章列表</div>
							<div className='mt-[8px] text-[12px]'>
								所有文章列表，个人的所有知识产出
							</div>
						</DropdownItem>
						<DropdownItem
							key='blog_series'
							// description='一套按照顺序记录的文章列表'
							className='py-[8px] !text-blog-text hover:!bg-blog-text-primary hover:!text-blog-black-white'
							startContent={
								<IconFont
									type='icon-[fluent--number-row-20-filled]'
									size={20}
								/>
							}
						>
							<div className='text-[14px]'>系列文章</div>
							<div className='mt-[8px] text-[12px]'>
								一套按照顺序记录的文章列表
							</div>
						</DropdownItem>
						<DropdownItem
							key='blog_sort'
							// description='所有文章的分类'
							className='py-[8px] !text-blog-text hover:!bg-blog-text-primary hover:!text-blog-black-white'
							startContent={
								<IconFont
									type='icon-[icon-park-solid--category-management]'
									size={20}
								/>
							}
							href='/category'
						>
							<div className='text-[14px]'>全部分类</div>
							<div className='mt-[8px] text-[12px]'>所有文章的分类</div>
						</DropdownItem>
						<DropdownItem
							key='blog_tag'
							// description='所有文章的标签'
							className='py-[8px] !text-blog-text hover:!bg-blog-text-primary hover:!text-blog-black-white'
							startContent={<IconFont type='icon-[mdi--tag-faces]' size={20} />}
						>
							<div className='text-[14px]'>全部标签</div>
							<div className='mt-[8px] text-[12px]'>所有文章的标签</div>
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
