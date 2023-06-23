import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {FaTrash} from 'react-icons/fa'

const TodoCard = (props) => {
  return (
    <div>
          <Card className='todo-card'>
              <Card.Header className={props.completed ? 'completed' : ''}>
                  {props.title}
              </Card.Header>
              <Card.Body className='todo-card-body'>
                  <Form.Check type='checkbox' />
                  <FaTrash />
              </Card.Body>
          </Card>
    </div>
  )     

}

export default TodoCard