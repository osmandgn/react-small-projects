import React, { useEffect, useState } from 'react'
import TodoCard from './todo-card'
import { Row } from 'react-bootstrap'
import axios from 'axios';

const ShowNotes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        axios.get("https://6495924bb08e17c917925395.mockapi.io/messages").then(response => setNotes(response.data));
    }, [])



  return (
    <div className='show-area'>
        {
              notes.map((note, i) => <TodoCard key={i} title={note.message} completed={note.completed} />)
        }     

    </div>
  )
}

export default ShowNotes