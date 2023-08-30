import React ,{ useState }from "react";
import { createSvgIcon } from '@mui/material/utils';
import Fab from '@mui/material/Fab';
const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 22"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

function CreateArea(props) {
  
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  
  function HandleChange(event){
    const prev=note;
    let change=event.target.value;
    if(event.target.name==="title"){
      setNote({
        title:change,
        content:prev.content
      });
    }
    else{
      setNote({
        title:prev.title,
        content:change
      });
    }
  }
  function HandleSubmit(event){
    const prev=props.notes;
    props.setNotes([...prev,note]);
    setNote({
    title:"",
  content:""});
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note" onSubmit={HandleSubmit}>
        <input name="title" placeholder="Title" onChange={HandleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={HandleChange} value={note.content}/>
        <Fab sx={{':hover':{backgroundColor:'#e1a32c'},}}type="submit"><PlusIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
