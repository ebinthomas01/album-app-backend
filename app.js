const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { albummodel } = require("./models/album")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ebinthomas01:ebinthomas01@cluster0.te6dmsx.mongodb.net/albumDB?retryWrites=true&w=majority&appName=Cluster0")

//ADD
app.post("/add", (req, res) => {
    let input = req.body
    let album = new albummodel(input)
    album.save()
    console.log(album)
    res.json({ "status": "Success" })
})

//SEARCH
app.post("/search", (req, res) => {
    let input = req.body
    albummodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

//DELETE
app.post("/delete", (req, res) => {
    let input = req.body
    albummodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({ "status": "success" })
        }
    ).catch(
        (error) => {
            res.json({ "status": "error" })
        }
    )
})

//VIEW
app.get("/view", (req, res) => {
    albummodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})



app.listen(8081, () => {
    console.log("Server Started")
})