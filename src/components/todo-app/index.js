import React, { useState } from 'react'
import CreateNote from './create-note'
import "./style.scss"
import { Container } from 'react-bootstrap'
import ShowNotes from './show-notes'

const TodoApp = () => {

  return (
    <Container className='main-container'>
          <CreateNote />
          <ShowNotes />
    </Container>
  )
}

export default TodoApp