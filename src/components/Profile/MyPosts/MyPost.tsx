import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostsDataPropsType} from "../../../App";
import {rerenderDom} from "../../../index";


type MyPostsPropsType = {
    postsData: PostsDataPropsType[]
    addPost: (value: any) => void
}

const MyPost = (props: MyPostsPropsType) => {

    const posts = props.postsData.map(posts => <Post message={posts.message} likeCounts={posts.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }

    return (<div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    </div>)
}

export default MyPost