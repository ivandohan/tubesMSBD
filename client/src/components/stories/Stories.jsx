import "./stories.scss"
import Image from "../../images/login.jpg"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Stories = () => {
    const {currentUser} = useContext(AuthContext)

    const storiesTemp = [
        {
            id: 1,
            name: "DOhann",
            img: Image,
        },
        {
            id: 2,
            name: "DOhann",
            img: Image,
        },
        {
            id: 3,
            name: "DOhann",
            img: Image,
        },
        {
            id: 4,
            name: "DOhann",
            img: Image,
        },
    ]

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profPict} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {
                storiesTemp.map((story) => (
                    <div className="story" key={story.id}>
                        <img src={story.img} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories