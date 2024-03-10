import SidebarNoteListFilter from "@/components/BlogDemo/SidebarNoteListFilter";
import { getAllNotes } from "@/lib/strapi";
import SidebarNoteItemHeader from "@/components/BlogDemo/SidebarNoteItemHeader";

export default async function NoteList() {
	const notes = await getAllNotes();
	console.log(notes, "====notes====");

	if (Object.entries(notes).length == 0) {
		return <div className='notes-empty'>{"No notes created yet!"}</div>;
	}

	return (
		<SidebarNoteListFilter
			notes={Object.entries(notes).map(([noteId, note]) => {
				const noteData = JSON.parse(note);
				return {
					noteId,
					note: noteData,
					header: (
						<SidebarNoteItemHeader
							title={noteData.title}
							updateTime={noteData.updateTime}
						/>
					),
				};
			})}
		/>
	);
}
