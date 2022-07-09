import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";

const CommentForm = () => {
  const { user_id, post_id } = useParams
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    postComment(text)
  }

  const postComment = async (comment) => {
    try {
      await axios.post(`/api/users/${user_id}/posts/${post_id}/comments`, comment)
    } catch(err) {
      alert("Error occurred with postComment")
      console.log(err)
    }
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