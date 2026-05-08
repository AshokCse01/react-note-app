export const findNotesInArchive=()=>{
    const findNotesInArchive = (archive, id) => {
        return archive.some(note => note.id === id)
    }
}