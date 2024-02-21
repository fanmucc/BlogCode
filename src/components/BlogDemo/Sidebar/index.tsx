import React, { Suspense } from "react";

import Link from "next/link";
import SidebarNoteList from "@/components/BlogDemo/SidebarNoteList";
import EditButton from "@/components/BlogDemo/EditButton";
import NoteListSkeleton from "../NoteListSkeleton";

export default async function Sidebar() {
	// const notes = await getAllNotes();

	return (
		<>
			<section className='col sidebar'>
				<Link href={"/"} className='link--unstyled'>
					<section className='sidebar-header'>
						<img
							className='logo'
							src='/logo.svg'
							width='22px'
							height='20px'
							alt=''
							role='presentation'
						/>
						<strong>React Notes</strong>
					</section>
				</Link>
				<section className='sidebar-menu' role='menubar'>
					{/* SideSearchField */}
					<EditButton>New</EditButton>
				</section>
				<nav>
					{/* <SidebarNoteList notes={notes} /> */}
					<Suspense fallback={<NoteListSkeleton />}>
						<SidebarNoteList />
					</Suspense>
				</nav>
			</section>
		</>
	);
}
