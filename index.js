const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Person = require('./models/person');
const { request } = require('express');
const { response } = require('express');

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

const formatPerson = (person) => {
  const formattedPerson = { ...person._doc, id: person._id }
  delete formattedPerson._id
  delete formattedPerson.__v

  return formattedPerson
}

app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons.map(formatPerson))
      console.log(persons.map(formatPerson))
    })
})

app.get('/api/persons/:id', (request, response) => {
  Person
    .findById(request.params.id)
    .then(person => {
      response.json(formatPerson(person))
    })
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({error: 'name is missing'})
  }
  
  if (body.phone === undefined) {
    return response.status(400).json({error: 'number is missing'})
  }

  const person = new Person({
    name: body.name,
    phone: body.phone
  })

  person.
    save()
    .then(savedPerson => {
      response.json(formatPerson(savedPerson))
    })
})

const logger = (request, response, next) => {
  console.log('Method:',request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(logger)

const error = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(error)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`)
});
