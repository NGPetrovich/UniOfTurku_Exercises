import React from 'react';
import Note from './components/Note';
import noteServices from './services/notes';
import Notification from './components/Notification';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        notes: [],
        newNote: '',
        showAll: true,
        error: null
      }
      console.log("constructor");
    }

    componentDidMount() {

        noteServices
            .getAll()
            .then(response => {
            this.setState({ notes: response })
            })

        // noteServices
        //     .getAll()
        //     .then(response => {
        //         this.setState({notes: response.data})
        //     })
    
        
            // console.log('did mount')
            // axios
            //   .get('http://localhost:3001/notes')
            //   .then(response => {
            //     console.log('promise fulfilled')
            //     this.setState({ notes: response.data })
            //   })
            // }
    
    }


    addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: this.state.newNote,
            date: new Date(),
            important: Math.random() > 0/5,
            // id: this.state.notes.length + 1 ====== We leave it to the server.
        }

        noteServices
            .create(noteObject)
            .then(newNote => {
                this.setState({
                    notes: this.state.notes.concat(newNote),
                    newNote: ''
                })
            })

        // noteServices
        //     .create(noteObject)
        //     .then(newNote => {
        //         this.setState({
        //             notes: this.state.notes.concat(newNote),
        //             newNote: '...'
        //         })
        //     })

        // axios.post('http://localhost:3001/notes', noteObject)
        // .then(response => {
        //     this.setState({
        //         notes: this.state.notes.concat(response.data),
        //         newNote: ''
        //     })
        // })
    }
      
    handleNoteChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNote: event.target.value })
    }

    toggleVisible = () => {
        this.setState({showAll: !this.state.showAll})
    }

    toggleImportanceOf = (id) => {
        return () => {
            // console.log(`importance of  ${id} need to be toggled`)
            const note = this.state.notes.find(n => n.id === id)
            const changedNote = { ...note, important: !note.important }

            noteServices
            .update(id, changedNote)
            .then(changedNote => {
              const notes = this.state.notes.filter(n => n.id !== id)
              this.setState({
                notes: notes.concat(changedNote)
              })
            })
            .catch(error => {
                this.setState({
                  error: `muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`,
                  notes: this.state.notes.filter(n => n.id !== id)
                })
                setTimeout(() => {
                  this.setState({error: null})
                }, 5000)
            })

            // noteServices
            //     .update(id, changedNote)
            //     .then(response => {
            //         this.setState({
            //             notes: this.state.notes.map(note => note.id !== id ? note : response.data)
            //         })
            //     })
            //     .catch(err => {
            //         alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
            //         this.setState({ notes: this.state.notes.filter(n => n.id !== id) })
            //       })
            // axios
            //     .put(url, changedNote)
            //     .then(response => {
            //         this.setState({
            //             notes: this.state.notes.map(note => note.id !== id ? note : response.data)
            //         })
            //     })
        }
    }
  
    render() {
        console.log("render")
        const notesToShow =
            this.state.showAll ?
                this.state.notes :
                this.state.notes.filter(note => note.important === true)
                // note.important is always boolean.
                // we could write simply:... note => note.important)

        const label = this.state.showAll ? 'only important' : 'all'

        return (
            <div>
                <h1>Muistiinpanot</h1>

                <Notification message={this.state.error}/>

                <div>
                    <button onClick={this.toggleVisible}>
                        show {label}
                    </button>
                </div>

                <ul>
                    {notesToShow.map(note =>
                        <Note
                            key={note.id}
                            note={note}
                            toggleImportance={this.toggleImportanceOf(note.id)}
                        />)
                    }
                </ul>
                <form onSubmit={this.addNote}>
                    <input
                        value={this.state.newNote}
                        onChange={this.handleNoteChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
  }

export default App



//////// This version allows adding new notes


// import React from 'react'
// import Note from './components/Note'

// class App extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         notes: props.notes,
//         newNote: 'new note is being created...'
//       }
//     }

//     addNote = (event) => {
//         event.preventDefault()
//         const noteObject = {
//             content: this.state.newNote,
//             date: new Date().toISOString(),
//             important: Math.random() > 0/5,
//             id: this.state.notes.length + 1
//         }

//         const notes = this.state.notes.concat(noteObject)

//         this.setState({
//             //
//             notes: notes,
//             // because of ES6, it could be written just: notes,
//             //
//             newNote: ''
//         })
//     }
      
//     handleNoteChange = (event) => {
//         console.log(event.target.value)
//         this.setState({ newNote: event.target.value })
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Muistiinpanot</h1>
//           <ul>
//             {this.state.notes.map(note => <Note key={note.id} note={note} />)}
//           </ul>
//           <form onSubmit={this.addNote}>
//               <input
//                 value={this.state.newNote}
//                 onChange={this.handleNoteChange}
//               />
//               <button type="submit">tallenna</button>
//           </form>
//         </div>
//       )
//     }
//   }

// export default App


/////////////// App below just creates the list of notes


// import React from 'react'
// import Note from './components/Note'

// const App = ({ notes }) => {
//     // Key is connected to 1 item, which we called "note". That's why,
//     // key != notes.id BUT key = note.id
//     // const lines = () => notes.map(note => <li key={note.id}>{note.content}</li>)
  
//     return (
//       <div>
//         <h1>Muistiinpanot</h1>
//         <ul>
//           {notes.map(note=><Note key={note.id} note={note}/>)}
//         </ul>
//       </div>
//     )
//   }

//   export default App