const express = require('express') 
const app = express()
let notes = [
    {
        "id":1,
        "content":"Me tengo que escribir",
        "date":"2019-05-30T17:30:31.098Z",
        "important":true,
    },
    {
        "id":2,
        "content":"tengo que estudiar",
        "date":"2019-05-30T17:30:34.098Z",
        "important":false,
    },
    {
        "id":3,
        "content":"repasar los retos",
        "date":"2019-05-30T17:30:14.098Z",
        "important":true,
    },

]

/* const app =  http.createServer((request, response)=> {
    response.writeHead(200, { 'Content-type':'application/json' })
    response.end(JSON.stringify(notes))
}) */

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
   const id = Number(request.params.id)
    console.log({id})
   const note = notes.find(note => note.id === id)

   if(note){
    response.json(note)
   }
   else {
       response.status(404).end()
   }
})

app.delete('/api/notes/:id', (request, response)=>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id )
    // status code
    response.status(204).end()
})

const PORT = 3000

// El servidor en express se inica asincrono:

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

