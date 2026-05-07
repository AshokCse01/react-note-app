import { useNotes } from "../../context/note-context"


export const NotesCard = ({ id, text, title, isPinned }) => {

    const { notesDispatch } = useNotes();
    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }):notesDispatch({
            type:'UNPIN',
            payload:{ id }
        })
    }
    return (
        <div className="w-56 border border-natural-800 p-2  rounded-md " key={id}>
            <div className="flex justify-between border-b-1 border-slate-700" >
                <p>{title}</p>
                <button onClick={() => onPinClick(id)}>
                    <span className={isPinned?"material-icons" : "material-icons-outlined"}>
                        push_pin
                    </span>
                </button>
            </div>
            <div className="flex flex-col ">
                <p>{text}</p>
                <div className="ml-auto">

                    <button><span className="material-icons-outlined">
                        archive
                    </span></button>
                    <button>

                        <span className="material-icons-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}