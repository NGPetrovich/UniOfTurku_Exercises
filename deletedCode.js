// const mongoose = require('mongoose')

// const url = 'mongodb+srv://fullstackUser:PASSWORD@fullstacktest.hehjc.mongodb.net/fullstack-notes'

// mongoose.connect(url)

// const Note = mongoose.model('Note', {
//   content: String,
//   date: Date,
//   important: Boolean
// })


///


// let notes = [
//     {
//       id: 1,
//       content: 'HTML on helppoa',
//       date: '2017-12-10T17:30:31.098Z',
//       important: true
//     },
//     {
//       id: 2,
//       content: 'Selain pystyy suorittamaan vain javascriptiä',
//       date: '2017-12-10T18:39:34.091Z',
//       important: false
//     },
//     {
//       id: 3,
//       content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
//       date: '2017-12-10T19:20:14.298Z',
//       important: true
//     }
// ]

// app.get('/api/notes', (request, response) => {
//     response.send(notes)
// });



///



// app.get('/api/notes/:id', (request, response) => {
//   Note
//     .findById(request.params.id)
//     .then(note => {
//       response.json(formatNote(note))
//     })
//     .catch(error => {
//       console.log(error)
//       response.status(404).end()
//     })
// })

// TO EDIT BELOW

// app.get('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     console.log(id)
//     const note = notes.find(note => note.id === id)
//     // const note = notes.find(note => {
//     //     console.log(note.id, typeof note.id, id, typeof id, note.id === id)
//     //     return note.id === id
//     //     //parseInt(id)
//     // })

//     if ( note ) {
//         response.json(note)
//     } else {
//         response.status(404).end()
//     }
// });

// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

// const generateId = () => {
//   const maxId = notes.length > 0 ? notes.map(n => n.id).sort((a,b) => a - b).reverse()[0] : 1
//   return maxId + 1
// }

// TO EDIT ABOVE

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (body.content === undefined) {
//     return response.status(400).json({error: 'content missing'})
//   }

//   const note = {
//     content: body.content,
//     important: body.important|| false,
//     date: new Date(),
//     id: generateId()
//   }

//   notes = notes.concat(note)

//   response.json(note)
// })