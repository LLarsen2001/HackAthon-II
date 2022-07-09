import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CommentForm = () => {
  const [text, setText] = useState("")

  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="text" placeholder="Enter comment here" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default CommentForm