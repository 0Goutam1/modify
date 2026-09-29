const express= require("express")
const songController= require('../controller/song.Controller')
const upload= require('../middleware/song.Middleware')

const router= express.Router()

router.post('/',upload.single("song"),songController.uploadSong)
router.get('/',songController.getSong)

module.exports= router