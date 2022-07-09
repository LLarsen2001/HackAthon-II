import axios from "axios";
import { useContext, useEffect, useState } from "react"
import React from "react";
import PostCard from "../components/shared/PostCard";
import { AuthContext } from "../providers/AuthProvider";
import Button from 'react-bootstrap/Button'
import PostForm from "./PostForm";
import { useToggle } from "../hooks";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'
import { render } from "@testing-library/react";

const Posts = () => {
    const { isToggled, toggle } = useToggle(false);
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            let res = await axios.get('/api/posts')
            setPosts(cleanedPost(res.data))
        }
        catch (err) {
            alert('err')
        }
    }

    const newPost = async (post) => {
        try {
            let res = await axios.post(`/api/users/${user.id}`, post)
            setPosts([...posts, res.data])
        } catch (err) {
            alert('err')
        }

    }

    const cleanedPost = (post) => {
        let clean = post.map((p) => {
            return {
                id: p.id,
                title: p.title,
                body: p.body,
                user_id: p.user_id
            };
        });
        return clean


    }
    const renderPost = () => {
        return posts.map(po => {
            return <PostCard key={po.id} {...po} />
        })
    }





    return (
        <div>
            <h2>Posts</h2>
            <PostForm newPost={newPost} />
            {renderPost()}
        </div>
    )

}
export default Posts;