import express from "express"

const route = express.Router()

route.get("/test", (req, res) => {
    res.json("Test on posts...")
})

export default route