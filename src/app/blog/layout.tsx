import { ReactNode } from "react";
import Sidebar from "@/components/BlogDemo/Sidebar";

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className='container'>
			<div className='main'>
				<Sidebar />
				<section className='col note-viewer'>{children}</section>
			</div>
		</div>
	);
}
