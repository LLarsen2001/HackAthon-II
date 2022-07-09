import Card from 'react-bootstrap/Card'
import React from 'react'

const PostCard = ({ title, body }) => {

    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>username</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PostCard;