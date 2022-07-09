import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";
import PostCard from "../components/shared/PostCard";

const Posts = () => {
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
            {renderPost()}
        </div>
    )

}
export default Posts;