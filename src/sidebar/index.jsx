import { Link } from 'react-router-dom'


export const SideBar = () => {
    return (
        <aside className='flex flex-col border-r-2 border-gray-400 w-45 h-screen'>
            <Link to='/home'>
                <span class="material-symbols-outlined">
                    home
                </span>
                <span>Home</span>
            </Link>
            <Link to='/archive' >
                <span class="material-symbols-outlined">
                    archive
                </span>
                <span>Archine</span>
            </Link>
            <Link to='/important' >
                <span class="material-symbols-outlined">
                    priority_high
                </span>
                <span>Important</span></Link>
            <Link to='/bin' >
                <span class="material-symbols-outlined">
                    delete
                </span>
                <span>Bin</span></Link>
        </aside>
    )
}