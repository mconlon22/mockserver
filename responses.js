module.exports = Object.freeze({
    response: {"decisionElements": [{			
        "applicantId":"MainApplicant_1" ,
        "serviceName":"BankWizardService",
        "decision":"MATCH",
        "decisionText":"Data validation error, please check input",
        "matches": [{
            "name":"ACCOUNT OWNER",
            "value":"MATCH"
        },
        {
            "name":"Account Setup Date",
            "value":"MATCH"
        },
        {
            "name":"Account Type",
            "value":"MATCH"
        }],
        "scores": [{
            "name":"Personal details",
            "type":"score",
            "score":9
        },		
        {		
            "name":"Address",
            "type":"score",
            "score":9
        },		
        {		
            "name":"Account setup date",
            "type":"score",
            "score":9
        }]		,
        "warningsErrors": [{		
            "responseCode":"condition code",
            "responseType":"severity",
            "responseMessage":"condition value"
        }]	}]	},
    ANOTHER_CONSTANT: 'another value'
});
