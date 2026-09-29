const mongoose = require('mongoose')

const SongSchema= new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    posterUrl:{
        type: String,
        require: true

    },
    title:{
        type:String,
        require:true
    },
    mood:{
         type: String,
        enum: {
            values: [ "sad", "happy", "surprised" ],
            message: "Enum this is"
        }

    }
})

const SongModel= mongoose.model("song",SongSchema)

module.exports=SongModel