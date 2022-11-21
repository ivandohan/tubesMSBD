import "./comments.scss"
import comUser1 from "../../images/comUser1.jpg"
import comUser2 from "../../images/comUser2.jpg"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Comments = () => {
    const {currentUser} = useContext(AuthContext)

    const commentsTemp = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quia architecto eum dicta ipsum optio! Praesentium ea sed porro esse!",
            name: "Sam D. Ohann",
            userId: 1,
            profPict: comUser1,
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis voluptas similique vel molestias repudiandae",
            name: "Sir D. Egarr",
            userId: 2,
            profPict: comUser2,
        },
    ]

    return (
        <div className="comments">
            { currentUser.isAdmin &&
            <div className="write">
                <img src={currentUser.profPict} alt="" />
                <input type="text" placeholder="Write a comment..."/>
                <button>Send</button>
            </div>
            }
            {
                commentsTemp.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <img src={comment.profPict} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments