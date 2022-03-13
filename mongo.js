// USED FOR DEVELOPMENT STAGES FOR TESTING

const mongoose = require('mongoose')

const url = 'mongodb+srv://fullstackUser:password@fullstacktest.hehjc.mongodb.net/fullstack-notes'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})


// Note
//   .find({})
//   .then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
// })


// const note = new Note({
//   content: 'And here it comes another one!',
//   date: new Date(),
//   important: true
// })

// note
//   .save()
//   .then(response => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })