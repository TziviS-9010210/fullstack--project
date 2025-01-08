const express = require("express")
const router = express.Router()
console.log("111")
console.log("Tzivi")

const posts = require("../models/Posts");
router.post("/", async (req,res)=>{
const {title} = req.body
const posts = await Posts.create({title:title});
res.json(posts)
})

console.log("Tzivi")

console.log("Tzivi")
console.log("make changes")
console.log("make changes")

module.exports = router