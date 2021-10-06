var bankResponse=require('./responses')  
const https = require('https');

const express = require('express')

app=express()

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.get('/', (req, res) => {
  
  const reqData=req.body
  const url="https://raw.githubusercontent.com/mconlon22/mockserver/main/values.js"
  https.get(url, (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data)
   
    const failvalues=JSON.parse(data).failValues
    

    if(reqData.hasOwnProperty('payload')){
    
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
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});





 
}

)
