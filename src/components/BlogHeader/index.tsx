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

const BlogHeader = () => {
	const pathname = usePathname();
	return (
		<Navbar>
			<NavbarBrand>
				<Logo />
				{/* <p className='font-bold text-inherit'></p> */}
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-16' justify='center'>
				<NavbarItem>
					<Link
						size='md'
						href='/'
						aria-current='page'
						color={pathname === "/" ? "primary" : "foreground"}
						className='text-2xl'
					>
						文库
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						size='md'
						color={pathname === "/personal" ? "primary" : "foreground"}
						href='/personal'
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
