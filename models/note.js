const mongoose = require('mongoose')

const url = 'mongodb+srv://fullstackUser:PASSWORD@fullstacktest.hehjc.mongodb.net/fullstack-notes'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note