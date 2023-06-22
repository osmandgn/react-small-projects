import React, { useState } from 'react'
import { Button, Card, Container, ProgressBar } from 'react-bootstrap'

const ProgressCard = () => {
    const [progress, setProgress] = useState(0);
    const increaseProgress = () => {
        setProgress((prev) => prev < 100 ? prev + 10 : prev)
    }
    const decreaseProgress = () => {
        setProgress((prev) => prev > 0 ? prev - 10 : prev)
    }
  return (
    <Container className='my-5'>
          <Card>
              <Card.Body>
                <Button variant='danger' onClick={increaseProgress}>+</Button>
                <Button variant='warning' className='m-1' onClick={decreaseProgress}>-</Button>
                  <ProgressBar>
                      <ProgressBar striped variant="success" now={progress} key={1}></ProgressBar>
                  </ProgressBar>
              </Card.Body>
          </Card>
    </Container>
  )
}

export default ProgressCard