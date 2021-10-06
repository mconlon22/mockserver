var responses=require('./responses')  
var failValues=require('./failValues')  


const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  
  const reqData=req.body


    if(reqData.payload.contacts[0].hasOwnProperty('bankAccount')){
      if(failValues.FAIL_BANK_WIZARD_VALUES.includes(responses.FAILED_BANK_WIZARD.decisionElements[0].decision)){
        res.status(200).send(responses.FAILED_BANK_WIZARD)
      }
  }
  else if(reqData.payload.hasOwnProperty('source')){
      res.status(200).send(responses.PEPS)
    
}
else{  
  console.log(failValues.FAIL_AUTH_VALUES)
    if(failValues.FAIL_AUTH_VALUES.includes(responses.FAILED_BANK_WIZARD.decisionElements[0].decision)){
       res.status(200).send(responses.FAILED_AUTH)
    }
    else{
      res.status(200).send(responses.FAILED_AUTH)
    }
  }
}
  );


