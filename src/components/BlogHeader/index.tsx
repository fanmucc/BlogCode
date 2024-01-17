"use client";
import { usePathname } from "next/navigation";

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
} from "@nextui-org/react";
import { Logo } from "@/components/Logo";
import IconFont from "@/components/BusComponents/IconFont";

const BlogHeader = () => {
	const pathname = usePathname();
	return (
		<Navbar className='h-[60px] bg-blog-bg-color'>
			<NavbarBrand>
				{/* <Logo /> */}
				<div className='group h-[35px] w-[70px] cursor-pointer'>
					<Link
						className='relative h-[35px] w-[70px] flex items-center justify-center text-[16px] font-[700] text-blog-text rounded-[40px] overflow-hidden'
						href='/'
					>
						Fan'mu
						<span className='absolute left-0 top-0 h-[35px] w-[70px] bg-blog-text-primary/100 flex items-center justify-center hidden group-hover:flex'>
							<IconFont
								type='icon-[material-symbols-light--home-rounded]'
								className='text-[28px] text-blog-card-bg'
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
						className='text-[16px] font-[700] tracking-[6px] text-blog-text'
					>
						文库
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						size='md'
						// color={pathname === "/personal" ? "primary" : "foreground"}
						href='/personal'
						className='text-[16px] font-[700] tracking-[6px] text-blog-text'
					>
						我的
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					{/* <Link href='#'>Fanmu</Link> */}
					{/* <Link href='#'>Login</Link> */}
				</NavbarItem>
				<NavbarItem>
					<Button color='primary' href='#' className='text-1xl'>
						{/* Sign Up */}
						个人网站
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default BlogHeader;
