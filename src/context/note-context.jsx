import { createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducer/notesReducer";

const NotesContext = createContext();

//Provider Logic
const NotesProvider = ({ children }) => {
    const initialState = {
        title: '',
        text: '',
        notes: []
    }
    const [{ title, text, notes }, notesDispatch] = useReducer(NotesReducer, initialState)

    return (
        <NotesContext.Provider value={{ title, text, notes, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

//consumer logic

const useNotes = () => useContext(NotesContext);
export { useNotes, NotesProvider };