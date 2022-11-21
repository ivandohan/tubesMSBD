import "./posts.scss"
import profPict1 from "../../images/comUser1.jpg"
import profPict2 from "../../images/comUser2.jpg"
import profPict3 from "../../images/login.jpg"
import postPict from "../../images/post.jpg"
import Post from "../post/Post"

const Posts = () => {
    const postsTemp = [
        {
            id: 1,
            name: "Sam D. Ohann",
            userId: 1,
            profPict: profPict1,
            postPict,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat aliquam eum error odio officiis et!",
        },
        {
            id: 2,
            name: "Sir D. Egar",
            userId: 1,
            profPict: profPict2,
            postPict,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat aliquam eum error odio officiis et!",
        },
        {
            id: 3,
            name: "Van D. Muel",
            userId: 1,
            profPict: profPict3,
            postPict,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat aliquam eum error odio officiis et!",
        },
    ]

    return (
        <div className="posts">
            {
                postsTemp.map((post) => (
                    <Post post={post} key={post.id}/>
                ))
            }
        </div>
    )
}

export default Posts
