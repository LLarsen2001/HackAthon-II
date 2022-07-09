import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'



const PostForm = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const { newPost } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, body)
        newPost({ title, body })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Post title</Form.Label>
                    <Form.Control
                        type="title"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="text"
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    )
}
export default PostForm;