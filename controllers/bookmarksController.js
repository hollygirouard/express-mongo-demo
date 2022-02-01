const express = require('express')

const router = express.Router()

const Bookmark = require('../models/Bookmark')  

router.get('/', async (req, res, next) => {
    try {
        const bookmarks = await Bookmark.find({})
        res.json(bookmarks)
    } catch (err) {
        next(err)
    }
})

module.exports = router