import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";

const Posts = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            let res = await axios.get('/api/posts')
            setPosts(res.data)
        }
        catch (err) {
            alert('err')
        }
    }

    const cleanedProducts = () => {
        posts.map((p) => {
            return {
                id: p.id,
                title: p.title,
                body: p.body,
                user_id: p.user_id
            };
        });

    }
    console.log(cleanedProducts)


    const renderAllPosts = () => {
        console.log(posts)
        return posts.map(p => {
            return (
                <div>
                    {JSON.stringify(p)}
                </div>
            )
        })
    }

    return (
        <div>
            <h2>hello</h2>
            {renderAllPosts()}
        </div>
    )

}
export default Posts;