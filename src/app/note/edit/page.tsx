import NoteEditor from "@/components/BlogDemo/NoteEditor";

export default async function EditPage() {
	return <NoteEditor note={null} initialTitle='Untitled' initialBody='' />;
}
