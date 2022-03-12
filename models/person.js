const mongoose = require('mongoose')

const url = 'mongodb+srv://nikita:PASSWORD@phonebook-cli.130n8.mongodb.net/phonebook'
// mongodb+srv://<dbUsername>:<dbPassword>@<clusterAddr>/<dbName>
mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  phone: String,
  id: Number
})

// const { argv } = process;
// const [, , inputName, inputPhone, inputID] = argv;

// const person = new Person({
//   name: inputName,
//   phone: inputPhone,
//   id: inputID
// })

// // console.log(contact.name)
// // console.log(contact.number)

// if (!person.name && !person.phone) {
//   Person
//     .find({})
//     .then(persons => {
//       console.log("Contacts:")
//       persons.forEach(person => {
//         console.log(person.name, person.phone)
//       })
//       mongoose.connection.close()
//     })
// } else {
//   person
//     .save()
//     .then(result => {
//       console.log(`adding person ${person.name} number ${person.phone} to the directory`);
//       mongoose.connection.close()
//     })
// }

module.exports = Person