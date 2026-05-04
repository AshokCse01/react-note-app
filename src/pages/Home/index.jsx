import { Fragment, useReducer } from "react"
import { Navbar } from "../../component/Navbar"
import { SideBar } from "../../sidebar"
import { NotesReducer } from "../../reducer/notesReducer"
export const Home = () => {
    const initialState = {
        title: '',
        text: '',
        notes: []
    }
    const [{ title, text, notes }, notesDispatch] = useReducer(NotesReducer, initialState)

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

    console.log(notes)
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <SideBar />
                <div>
                    <div className="flex flex-col w-[300px]  border-slate-800 relative">

                        <input value={title} onChange={onTitleChange} className="border" placeholder="Enter Title"
                        className=" border border-natural-800 rounded-t-md focus:outline-none border-b-0 p-1" />
                        <textarea value={text} onChange={onTextChange} className="border border-natural-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder="Enter Text" />
                        <button disabled={title.length === 0} onClick={onAddClick} className=" w-7 h-7  bg-indigo-800 text-slate-50 rounded-full absolute bottom-0 right-0">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                    </div>


                    <div className="flex flex-wrap mt-14 gap-6">
                        {
                            notes?.length > 0 && notes.map(({ id, title, text }) => (
                                <div className="w-56 border border-slate-800 p-2  rounded-md" key={id}>
                                    <div className="flex justify-between" >
                                        <p>{title}</p>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                keep
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>{text}</p>
                                        <div className="ml-auto">

                                            <button><span className="material-symbols-outlined">
                                                archive
                                            </span></button>
                                            <button>

                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </main>

        </Fragment>
    )
}