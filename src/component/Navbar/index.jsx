import logo from '../../assets/notesimg.png'

export const Navbar=()=>{

    return (

    <header className='flex gap-10 '>
        <img src={logo} alt='logo'/>
        <h1>NotesApp</h1>
        
    </header>
    )
}