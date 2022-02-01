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

router.post('/', async (req, res, next) => {
    try {
        const newBookmark = await Bookmark.create(req.body)
        res.status(201).json(newBookmark)
    } catch(err) { 
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const bookmarkToUpdate = await Bookmark.findOneAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        )
        if (bookmarkToUpdate) {
            res.json(bookmarkToUpdate)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async(req,res,next) => {
    try {
        const bookmarkToDelete = await Bookmark.findByIdAndDelete(req.params.id)
        console.log(bookmarkToDelete)
        if (bookmarkToDelete) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router