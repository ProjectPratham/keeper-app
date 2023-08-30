import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
function Note(props){
    function HandleClick(id){
        props.setNotes(prevItems=>{
            return (prevItems.filter((item,index)=>{
                return index!==id;
            }))
        }
        )
    }
    return <div className="note" index={props.id}>
        <h1  >{props.title}</h1>
        <p >{props.content}</p>
        <Fab sx={{
            ':hover':{color:'#c10d01',opacity: [0.9, 0.8, 0.7]},
            backgroundColor:'white'}}  onClick={()=>HandleClick(props.id)}><DeleteIcon /></Fab>
    </div>
}

export default Note;