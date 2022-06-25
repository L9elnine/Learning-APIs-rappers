const express = require('express')
const app = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


const rappers = {

'21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},

'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, IL'
},

'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
}

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase()
    
    if( rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }   

})

app.listen(port, () =>{
    console.log(`The server is now running on port ${port}! Betta go catch it!`)
})