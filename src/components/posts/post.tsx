import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface getPostsReq {
    data : Post[]
}
export const Post = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(()=>{
        const axios = require('axios');
        // @ts-ignore
        axios.get<getPostsReq>('https://jsonplaceholder.typicode.com/posts')
            .then(function (response:getPostsReq) {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(function (error:string) {
                console.log(error);
            })

    }, [])
    const handleClickOpen = () =>{
        console.log('open')
    }
    // @ts-ignore
    return (
        <>
            <button
                style={{display: 'flex', alignItems: 'center'}}
                onClick={handleClickOpen}
            >
                <Link to="/new">Add new Post</Link>
            </button>
            <div>

                {posts.map((item: Post) => (
                    <div>
                        <p>{item.id} </p>
                        <p>{item.title} </p>
                        <p>{item.body} </p>
                    </div>
                ))}
            </div>
        </>
        )
}