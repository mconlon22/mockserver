var bankResponse=require('./responses')  
var failValues=require('./failValues')  


const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  
  const reqData=req.body

   
    

    if(reqData.payload.contacts[0].hasOwnProperty('bankAccount')){
      if(failValues.FAIL_BANK_WIZARD_VALUES.includes(bankResponse.FAILED_BANK_WIZARD.decisionElements[0].decision)){
        res.status(200).send(bankResponse.FAILED_BANK_WIZARD)
      }
  }
else{  
  console.log(failValues.FAIL_AUTH_VALUES)
    if(failValues.FAIL_AUTH_VALUES.includes(bankResponse.FAILED_BANK_WIZARD.decisionElements[0].decision)){
       res.status(200).send(bankResponse.FAILED_AUTH)
    }
    else{
      res.status(200).send(bankResponse.FAILED_AUTH)
    }
  }
}
  );


