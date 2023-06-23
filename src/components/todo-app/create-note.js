import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ShowNotes from './show-notes';

const CreateNote = (props) => {
    const [value, setValue] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        let data = {
            message: value,
            completed: false
        }
        await axios.post("https://6495924bb08e17c917925395.mockapi.io/messages", data)
        
    }

    return (
        <Form className='form-box' onSubmit={handleSubmit} >
            <Form.Label className='form-label'>Title</Form.Label>
            <Form.Control
                type='text'
                name='note'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <Button type='submit'>Create Note</Button>
        </Form>

    )
}

export default CreateNote