import { createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducer/notesReducer";

const NotesContext = createContext();

//Provider Logic
const NotesProvider = ({ children }) => {
    const initialState = {
        title: '',
        text: '',
        notes: [],
        archive:[]
    }
    const [{ title, text, notes,archive }, notesDispatch] = useReducer(NotesReducer, initialState)

    return (
        <NotesContext.Provider value={{ title, text, notes,archive, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

//consumer logic

const useNotes = () => useContext(NotesContext);
export { useNotes, NotesProvider };