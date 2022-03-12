import { useContext } from 'react';
import simpleContext from './../context';

const Header = () => {
    const context = useContext(simpleContext);
    const setSearchText=context.setSearchText;
    const setDarkMode = context.setDarkMode;
    const darkMode = context.darkMode;

    return ( <>
    <div className="header">
        <div className="head"><h1 style={{'color':`${!darkMode ? "#333":"#ddd"}`}}>Notese</h1>
         <button>
             <i onClick={()=> setDarkMode(!darkMode)} 
             style={{'color':`${!darkMode ? "#333":"#ddd"}`}} 
             className={darkMode ? "bi bi-brightness-high":"bi-moon-stars"}>
                 
             </i>
             </button></div>
        <div className="inp">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Type to search" 
            onChange={(e)=> setSearchText(e.target.value)}/></div>
    </div>
    </> );
}
 
export default Header;