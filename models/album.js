const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "id":String,
        "userid":String,
        "title":String,
  
    }
)

let albummodel=mongoose.model("albums",Schema);
module.exports={albummodel}