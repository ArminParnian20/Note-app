import { useState } from 'react';
import simpleContext from './../context';
import { useContext } from 'react';
import { nanoid } from 'nanoid';

const AddNote = () => {
    const context = useContext(simpleContext);
    const noteText = context.noteText;
    const setNoteText =context.setNoteText;
    const notes=context.notes;
    const setNotes=context.setNotes;

    const AddNote=()=>{
      const date = new Date();
      const newNote={
        id:nanoid(),
        text:noteText,
        date:date.toLocaleDateString()
      }
      if(noteText.trim().length > 0){
           const newNotes=[...notes,newNote];
      setNotes(newNotes);
      setNoteText("");
      }
    }
    const handltext=(e)=>{
        if(e.target.value.length < 201){
            setNoteText(e.target.value)
        }
    }
    return ( <div className="addnote">
        <textarea placeholder='Type to add note ...' value={noteText} onChange={(e)=>handltext(e)}>

        </textarea>
        
        <div className='footer'>
            <p>{`${200 - noteText.length}`} Remaining</p>
        <button onClick={()=>AddNote()} ><i className="bi bi-save"></i></button>
        </div>
    </div> );
}
 
export default AddNote;