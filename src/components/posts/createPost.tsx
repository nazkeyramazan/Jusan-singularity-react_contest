import React, {useState} from 'react'
import {Post} from "./post";

export const CreatePost = () => {
    const [userId, setUserId] = useState<number>(5)
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    // const [newPost, setNewPost] = useState<Post>({
    //     userId: 0,
    //     id: 0,
    //     title: '',
    //     body: ''
    // })
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        console.log('new post is submitted')
        e.preventDefault();
    }
    console.log(
        title, body, id, userId
    )
    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>
                        title:
                        <input type="number" name='userId' value={userId} onChange={(e)=>console.log(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        title:
                        <input type="number" name='id' value={title} onChange={(e)=>console.log(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        title:
                        <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        body:
                        <input type="text" name='body' value={body} onChange={(e)=>setBody(e.target.value)} />
                    </label>

                </div>

                <input type="submit" value="Отправить" />
            </form>

        </>
        )
}