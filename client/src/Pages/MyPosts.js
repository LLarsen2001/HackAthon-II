import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../components/shared/PostCard'
import { AuthContext } from '../providers/AuthProvider'
import PostForm from './PostForm'

const MyPost = () => {
    const { user } = useContext(AuthContext)
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        getUsersPost()
    }, [])

    const getUsersPost = async () => {
        try {
            let res = await axios.get(`/api/users/${user.id}/posts`)
            setUserPosts(cleanedUserPost(res.data))
        }
        catch (err) {
            alert('err')
        }
    }

    const cleanedUserPost = (userPosts) => {
        let clean = userPosts.map((p) => {
            return {
                id: p.id,
                title: p.title,
                body: p.body,
                user_id: p.user_id
            };
        });
        return clean
    }

    const newPost = async (post) => {
        try {
            let res = await axios.post(`/api/users/${user.id}`, post)
            setUserPosts([...userPosts, res.data])
        } catch (err) {
            alert('err')
        }

    }

    const renderUserPosts = () => {
        return userPosts.map(po => {
            return (<div className='postpage'>
                <PostCard key={po.id} {...po} />
            </div>
            )
        })
    }

    return (

        <div>
            <div>
                <h2>Add Post</h2>
            </div>
            <div className="pagecontainer">


                <PostForm newPost={newPost} />
            </div>
            <h2>Your Posts</h2>

            {renderUserPosts()}
        </div>
    )
}
export default MyPost;