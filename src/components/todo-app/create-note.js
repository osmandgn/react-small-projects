import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CreateNote = () => {
    const [note, setNote] = useState("");
    const createNote = () =>{

    }

  return (
      <Form className='form-box' onSubmit={createNote} >
        <Form.Label className='form-label'>Title</Form.Label>
        <Form.Control
        type='text'
        name='note' />
        <Button>Create Note</Button>
    </Form>
  )
}

export default CreateNote