import { Fragment } from "react"
import { SideBar } from "../../sidebar"
import { Navbar } from "../../component/Navbar"
import { useNotes } from "../../context/note-context"
import { NotesCard } from "../../component/NotesCard"

export const Archive = () => {
    const { archive } = useNotes();
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-5" >

                <SideBar />
                <div>

                    <div className="flex flex-wrap gap-6">
                        {
                            archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => (
                                <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>

            </main>
        </Fragment>
    )
} 