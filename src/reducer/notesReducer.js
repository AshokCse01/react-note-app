import { v4 as uuidv4 } from "uuid";

export const NotesReducer = (state,{  type, payload }) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
            case 'ADD_NOTE':
                return{
                    ...state,
                    notes:[...state.notes,{title:state.title,text:state.text, id:uuidv4()}]
                }
                case 'CLEAR_INPUT':
                    return{
                        ...state,
                        title:'',
                        text:''
                    }
        default:
            return state
    }
}