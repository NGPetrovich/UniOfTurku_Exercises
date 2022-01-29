const express = require('express')
const app = express()

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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})