var responses=require('./responses')  
var failValues=require('./failValues')  
const AUTH_RESPONSES=require('./AuthResponses')

const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/Authenticate', (req, res) => {
  
  const firstName=req.body.payload.contacts[0].person.names[0].firstName
  const surName=req.body.payload.contacts[0].person.names[0].surName
  console.log(firstName + surName)
  if(firstName=="SIMON"&&surName=="SMITH")   res.status(200).send(AUTH_RESPONSES.FAILED_AUTH_AU01)
  if(firstName=="TOM"&&surName=="SMITH")   res.status(200).send(AUTH_RESPONSES.FAILED_AUTH_AU02)
  if(firstName=="JOHN"&&surName=="SMITH")   res.status(200).send(AUTH_RESPONSES.FAILED_AUTH_NA00)
  if(firstName=="MARTIN"&&surName=="SMITH")   res.status(200).send(AUTH_RESPONSES.FAILED_AUTH_RA00)
  else res.status(200).send(AUTH_RESPONSES.FAILED_AUTH_AU01)
}
  );
  app.get('/Peps', (req, res) => {
  
    const reqData=req.body
  
    res.status(200).send(responses.PEPS)  
  }
    );
    app.get('/BankWizard', (req, res) => {
  
      const reqData=req.body
      
      res.status(200).send(responses.FAILED_BANK_WIZARD)
    }
      );


