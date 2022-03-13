let persons = [
    {
      name: "Arto Hellas",
      phone: "040-1234567",
      id: 1
    },
    {
      name: "Martti Tienari",
      phone: "040-1234555",
      id: 2
    },
    {
      name: "Arto Jarvinen",
      phone: "040-1234566",
      id: 3
    },
    {
      name: "Lea Kutvonen",
      phone: "040-1234577",
      id: 4
    }
]

app.get('/api/persons', (request, response) => {
    response.send(persons)
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const contact = persons.find(contact => contact.id === id)
    // const note = persons.find(note => {
    //     console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    //     return note.id === id
    //     //parseInt(id)
    // })

    if ( contact ) {
        response.json(contact)
    } else {
        response.status(404).end()
    }
    // console.log(note)
    // response.json(note)
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id, typeof id)
  const person = persons.find(person => {
    // console.log(person.id, typeof person.id, id, typeof id, person.id === id)
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

  if (body.name === undefined) {
    return response.status(400).json({error: 'name is missing'})
  }
  
  if (body.phone === undefined) {
    return response.status(400).json({error: 'number is missing'})
  }

  if (body.name === persons[0].name) {
    console.log(body.name)
    return response.status(400).json({error: 'name must be unique'})
  }

  if (body.name === persons[1].name) {
  console.log(body.name)
  return response.status(400).json({error: 'name must be unique'})
  }
  if (body.name === persons[2].name) {
    console.log(body.name)
    return response.status(400).json({error: 'name must be unique'})
  }
  if (body.name === persons[3].name) {
    console.log(body.name)
    return response.status(400).json({error: 'name must be unique'})
  }

  if (body.name === persons.map(person => person.name)) {
    console.log(body.name)
    return response.status(400).json({error: 'name must be unique'})
  }

  if (body.name === persons.filter(person => person.name === body.name)) {
    console.log(body.name)
    return response.status(400).json({error: 'name must be unique'})
  }

  if (persons.reduce(person => person.name === body.name)) {
    console.log(body.name)
    return response.status(400).json({error: 'name must be unique'})
  }

  const person = {
    name: body.name,
    phone: body.phone,
    id: randomId()
  }

  console.log(request.body);
  persons = persons.concat(person)

  response.json(person)

})
