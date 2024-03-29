import Card from 'react-bootstrap/Card'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

import axios from "axios";
import CommentForm from './CommentForm';

const PostCard = ({ title, body, id, user_id, email }) => {

  const newComment = async (comment) => {
    console.log(comment)
    try {
      await axios.post(`/api/users/${id}/posts/${user_id}/comments`, { comment: comment })
    } catch (err) {
      alert("Error occurred with postComment")
      console.log(err)
    }
  }

  return (
    <Card border="secondary" style={{ width: '18rem' }}>
      <Card.Header>{email}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
          <hr></hr>
          <CommentForm key={id} id={id} user_id={user_id} newComment={newComment} />
        </Card.Text>

      </Card.Body>
    </Card>
  )
}
export default PostCard;