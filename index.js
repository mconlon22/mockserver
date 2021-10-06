var bankResponse=require('./responses')  
const failvalues=require('./failValues').failValues  

const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  
  const data=req.body
  console.log(failvalues)
  console.log(data.hasOwnProperty('payload'))
  console.log(data.hasOwnProperty('header'))

  if(data.hasOwnProperty('payload')){
    
    console.log(failvalues.includes(bankResponse.response.decisionElements[0].decision))
    if(failvalues.includes(bankResponse.response.decisionElements[0].decision)){
      console.log('hi')
      res.status(500).send(bankResponse.response)
    }
    else{
      res.status(200).send(bankResponse.response)
    }
  }
  else{
    console.log(failvalues)
    res.status(200).send(bankResponse.response)
  }
}
)