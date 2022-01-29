const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
      name: "Arto Hellas",
      number: "040-1234567",
      id: 1
    },
    {
      name: "Martti Tienari",
      number: "040-1234555",
      id: 2
    },
    {
      name: "Arto Jarvinen",
      number: "040-1234566",
      id: 3
    },
    {
      name: "Lea Kutvonen",
      number: "040-1234577",
      id: 4
    }
]

app.get('/api', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id, typeof id)
  const person = persons.find(person => {
    console.log(person.id, typeof person.id, id, typeof id, person.id === id)
    return person.id === id
  })

  if ( person ) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

const randomId = () => {
  const maxId = persons.length > 0 ? persons.map(p => p.id).sort((a,b) => a - b).reverse()[0] : 1
  const random = Math.floor(Math.random(maxId) * 120)
  if (persons.map(person => person.id) !== random) {
    return random
  } else {
    return randomId()
  }
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
    id: randomId()
  }

  persons = persons.concat(person)

  response.json(person)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})