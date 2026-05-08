import { Fragment } from "react"
import { Navbar } from "../../component/Navbar"
import { SideBar } from "../../sidebar"
import { NotesCard } from "../../component/NotesCard"
import { useNotes } from "../../context/note-context"

export const Home = () => {
    const { notes, title, text, notesDispatch, archive } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })
    }
    console.log(archive)

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned)
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned)

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <SideBar />
                <div className=" flex flex-col w-screen">
                    <div className="flex flex-col w-[300px]  border-slate-800 relative self-center">

                        <input value={title} onChange={onTitleChange} placeholder="Enter Title"
                            className=" border border-natural-800 rounded-t-md focus:outline-none border-b-0 p-1" />
                        <textarea value={text} onChange={onTextChange} className="border border-natural-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder="Enter Text" />
                        <button disabled={title.length === 0} onClick={onAddClick} className=" w-7 h-7  bg-indigo-800 text-slate-50 rounded-full absolute bottom-0 right-0">
                            <span className="material-icons-outlined">add</span>
                        </button>
                    </div>

                    <div className="mt-14">

                        {
                            pinnedNotes?.length > 0 && (
                                <>
                                    <h3 className="m-2 text-xl font-semibold">Pinned Notes</h3>
                                    <div className="flex flex-wrap gap-6">
                                        {
                                            pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                                                <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                                            ))
                                        }
                                    </div>
                                </>
                            )
                        }

                        {
                            pinnedNotes?.length > 0 && <h3 className="m-2 mt-2 text-xl font-semibold">Other Notes </h3>
                        }
                        <div className="flex flex-wrap  gap-6">
                            {
                                otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                                ))
                            }
                        </div>
                    </div>

                </div>

            </main>

        </Fragment>
    )
}