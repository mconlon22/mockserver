var bankResponse=require('./responses')  
const failvalues=require('./failValues').failValues  

const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  
  const data=req.body


  if(data.hasOwnProperty('payload')){
    
    if(failvalues.includes(bankResponse.response.decisionElements[0].decision)){
      res.status(500).send(bankResponse.response)
    }
    else{
      res.status(200).send(bankResponse.response)
    }
  }
  else{
    res.status(200).send(bankResponse.response)
  }
}
)