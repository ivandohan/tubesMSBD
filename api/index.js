import express from "express"
import usersRoute from "./routes/users.js"
import postsRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import likesRoute from "./routes/likes.js"
import commentsRoute from "./routes/comments.js"

const PORT = 8800

const app = express()

app.use(express.json())

app.use("api/auth", authRoute)

app.use("/api/users", usersRoute)

app.use("/api/posts", postsRoute)

app.use("api/comments", commentsRoute)

app.use("api/likes", likesRoute)

app.listen(PORT, () => {
    console.log("Server started on http://localhost:" + PORT)
})