import React, {useEffect, useState} from 'react'

interface Post {
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
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(function (response:getPostsReq) {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(function (error:string) {
                console.log(error);
            })

    }, [])
    // @ts-ignore
    return (
        <div >
            {posts.map((item:Post)=>(
                <div>
                    <p >{item.id} </p>
                    <p >{item.title} </p>
                    <p >{item.body} </p>
                </div>
                ))}
        </div>
        )
}