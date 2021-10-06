var bankResponse=require('./responses')  
const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  const failValues=['MATCH']
  
  const data=req.body
  console.log(data)
  if(data.hasOwnProperty('payload')&&!data.hasOwnProperty('header')){
      if(failValues.includes(bankResponse.response.decisionElements[0].decision)){
        console.log('hi')
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