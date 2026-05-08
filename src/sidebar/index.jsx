import { Link, NavLink } from 'react-router-dom'


export const SideBar = () => {

    const getStyle = ({ isActive }) => {
        return isActive ? 'bg-indigo-800 flex align-center px-2 py-1 gap-2 rounded-tr-full rounded-br-full  ' : ' hover:bg-indigo-800 flex align-center hover:text-slate-200 gap-2 p-2 px-1 rounded-tr-full rounded-br-full '
    }
    return (
        <aside className='flex flex-col px-2 py-1 border-r-2 border-gray-500 w-45 h-screen gap-1  '>
            <NavLink className={getStyle} to='/home'>
                <span className="material-icons-outlined">home</span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyle} to='/archive' >
                <span className="material-icons-outlined">
                    archive
                </span>
                <span>Archine</span>
            </NavLink>
            <NavLink className={getStyle} to='/important' >
                <span class="material-icons-outlined">
                    label_important
                </span>
                <span>Important</span></NavLink>
            <NavLink className={getStyle} to='/bin' >
                <span className="material-icons-outlined">
                    delete
                </span>
                <span>Bin</span></NavLink>
        </aside>
    )
}