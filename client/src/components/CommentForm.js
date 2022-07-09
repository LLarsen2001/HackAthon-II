import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CommentForm = () => {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="text" placeholder="Enter comment here" onChange={(e)=> setText(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default CommentForm