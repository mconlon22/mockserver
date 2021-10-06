var bankResponse=require('./responses')  
var failValues=require('./failValues')  


const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  
  const reqData=req.body
  console.log(values)

   
    

    if(reqData.hasOwnProperty('payload')){
      if(failValues.FAIL_BANK_WIZARD_VALUES.includes(bankResponse.FAILED_BANK_WIZARD.decisionElements[0].decision)){
        res.status(200).send(bankResponse.FAILED_BANK_WIZARD)
      }
  }
  if(!reqData.hasOwnProperty('application')){
    if(failValues.FAIL_AUTH_VALUES.includes(bankResponse.FAILED_BANK_WIZARD.decisionElements[0].decision)){
       res.status(200).send(bankResponse.FAILED_AUTH)
    }
  }
}
  );


