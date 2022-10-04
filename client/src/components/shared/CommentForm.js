import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";

const CommentForm = (props) => {
  // const { user_id, post_id } = useParams()
  const [comment, setComment] = useState("")
  const { newComment } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(comment)
    newComment({ comment: comment, user_id: props.user_id, post_id: props.id })
  }

  const postComment = async (comment) => {
    try {
      await axios.post(`/api/users/${props.id}/posts/${props.user_id}/comments`, comment)
    } catch (err) {
      alert("Error occurred with postComment")
      console.log(err)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Control type="text" placeholder="Enter comment here" value={comment} onChange={(e) => setComment(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CommentForm