// require that mongoose package! 
const mongoose = require('../db/connection')

// we want a schema with a title and a url 
const BookmarkSchema = new mongoose.Schema({
    title: String, // give it a name and a data type!
    url: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

// export it so other files can access it! 

module.exports = Bookmark