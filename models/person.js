const mongoose = require('mongoose')

const url = 'mongodb+srv://nikita:PASSWORD@phonebook-cli.130n8.mongodb.net/phonebook'
// mongodb+srv://<dbUsername>:<dbPassword>@<clusterAddr>/<dbName>
mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  phone: String,
  id: Number
})

module.exports = Person