import { useContext } from "react";
import simpleContext from './../context';
import AddNote from "./AddNote";

const NoteList = () => {
    const context = useContext(simpleContext);
    const notes=context.notes;
    const setNotes=context.setNotes;
    const searchText=context.searchText;
const DeleteNote = (id)=>{
    const newNotes=notes.filter((n)=> n.id !== id);
    setNotes(newNotes);
}
    return ( <>
    <div className="container">
        {notes.filter(n=>{if(searchText == ""){
                   return n;
                 }else if(n.text.toLowerCase().includes(searchText.toLowerCase())){
                   return n;
                 }
               }).map((n=>{
            return <div className="note" key={n.id}>
                <p>{n.text}</p>
                <div className="footer">
                <p>{n.date}</p>
                    <i className="bi bi-trash" onClick={()=> DeleteNote(n.id)}></i>
                </div>
            </div>
        }))}
        {
            searchText.trim().length > 0 ? <div></div>: <AddNote/>
        }
       
    </div>
    
    </> );
}
 
export default NoteList;