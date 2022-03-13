import { useEffect, useState } from 'react';
import './App.css'
import NoteList from './Components/NoteList';
import simpleContext from './context';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Components/Header';
import { BarLoader, BeatLoader, BounceLoader } from 'react-spinners';

const App = () => {
  const [noteText,setNoteText]=useState('');
  const [searchText,setSearchText]=useState('');
  const [darkMode,setDarkMode]=useState(false);
  const [notes,setNotes]=useState([]);
  const [loadig,setloading]=useState(false);
  window.addEventListener('load',
  ()=>{setTimeout(()=>setloading(true),1000)}
  )
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  return (
  <simpleContext.Provider 
  value={{setNotes:setNotes,darkMode:darkMode,
  notes:notes,setNoteText:setNoteText,
  noteText:noteText,searchText:searchText,
  setDarkMode:setDarkMode,setSearchText:setSearchText}}>
  <div className='cont' style={{'--i':`${darkMode ? '#333':"#ddd"}`}}>
{loadig ? <div>   <Header/>
  <NoteList/></div>:   <BounceLoader  loading color='red'/>}

   


  
  </div>

  </simpleContext.Provider>
 );
}

 
export default App;