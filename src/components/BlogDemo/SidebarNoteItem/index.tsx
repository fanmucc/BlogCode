import dayjs from "dayjs";
import SidebarNoteItemContent from "@/components/BlogDemo/SidebarNoteItemContent";
import SidebarNoteItemHeader from "@/components/BlogDemo/SidebarNoteItemHeader";

export default function SidebarNoteItem({ noteId, note }: any) {
	const { title, content = "", updateTime } = note;
	return (
		<SidebarNoteItemContent
			id={noteId}
			title={note.title}
			expandedChildren={
				<p className='sidebar-note-excerpt'>
					{content.substring(0, 20) || <i>(No content)</i>}
				</p>
			}
		>
			<SidebarNoteItemHeader title={title} updateTime={updateTime} />
		</SidebarNoteItemContent>
	);
}
