import logo from '../../assets/notes.png'

export const Navbar=()=>{

    return (

    <header className='flex gap-2 p-2 border-b-2 border-gray-400 '>
        <div className='w-12 h-12 ' >

        <img className='w-full h-full ' src={logo} alt='logo'/>
        </div>
        <h1 className='text-sky-900 text-4xl font-bold'>NotesApp</h1>
        
    </header>
    )
}