import { Fragment } from "react"
import { Navbar } from "../../component/Navbar"
import { SideBar } from "../../sidebar"
import { NotesCard } from "../../component/NotesCard"
import { useNotes } from "../../context/note-context"

export const Home = () => {
    const { notes, title, text, notesDispatch } = useNotes();

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


    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned)
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned)

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <SideBar />
                <div>
                    <div className="flex flex-col w-[300px]  border-slate-800 relative ">

                        <input value={title} onChange={onTitleChange} className="border" placeholder="Enter Title"
                            className=" border border-natural-800 rounded-t-md focus:outline-none border-b-0 p-1" />
                        <textarea value={text} onChange={onTextChange} className="border border-natural-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder="Enter Text" />
                        <button disabled={title.length === 0} onClick={onAddClick} className=" w-7 h-7  bg-indigo-800 text-slate-50 rounded-full absolute bottom-0 right-0">
                            <span className="material-icons-outlined">add</span>
                        </button>
                    </div>



                    {
                        pinnedNotes?.length > 0 && (
                            <>
                                <h3>Pinned Notes</h3>
                            <div className="flex flex-wrap mt-14 gap-6">
                                {
                                    pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                                    ))
                                }
                            </div>
                            </>
                        )
                    }

                    
                    <div className="flex flex-wrap mt-14 gap-6">
                        {
                            pinnedNotes?.length > 0 && <h3>other Notes </h3>
                        }
                        {
                            otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => (
                                <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                            ))
                        }
                    </div>


                </div>

            </main>

        </Fragment>
    )
}