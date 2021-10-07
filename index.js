var responses=require('./responses')  
var failValues=require('./failValues')  


const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/Authenticate', (req, res) => {
  
  const reqData=req.body

  res.status(200).send(responses.FAILED_AUTH)
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


