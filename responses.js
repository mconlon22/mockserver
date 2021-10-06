module.exports = Object.freeze({
    FAILED_BANK_WIZARD: {"decisionElements": [{			
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
    FAILED_AUTH: 
    {
        "decisionElements": [{
        "applicantId":"ApplicantId_1",
        "serviceName":"Authenticate",
        "decision":"AU01",
        "score":"100",
        "decisionReason":"Caution: One or more high risk conditions applies to this request",
        "appReference":"BA12345678",
        "rules": [{
            "ruleId":"U001",
            "ruleText":"Applicant name found on the mortality file"
        },
        {
            "ruleName":"AUTP_IDCONFLEVEL",
            "ruleScore":1,
            "ruleText":"The identity supplied has been confirmed at the required 'Level 1'"
        }]
        }],
        "matches": [{
            "name":"OldAuthScorecard",
            "value":"Y"
        },
        {
            "name":"NewAuthScoreCard",
            "value":"Y"
        },
        {
            "name":"GranularDetails",
            "value":"Y"
        },
        {
            "name":"DisplayTelephone",
            "value":"Y"
        },
        {
            "name":"MultipleCIFASURN",
            "value":2
        },
        {
            "name":"NewAgeVerificationScorecard",
            "value":"Y"
        },
        {
            "name":"DisplayPEPSanctionSource",
            "value":"Y"
        },
        {
            "name":"VelocityRules",
            "value":"Y"
        }],		
        "scores": [{		
            "name":	"NewAuthIndex",
            "type":	"Score",
            "score":100
        },		
        {		
            "name":"ValidationScore",
            "type":"Score",
            "score":100
        },		
        {		
            "name":"VerificationScore",
            "type":"Score",
            "score":100
        }]		,
        "dataCounts": [{		
            "name":"IDandLocDataAtCL_NumPrimDataItems",
            "value":99
        },
        {
            "name":"IDandLocDataAtCL_NumPrimDataSources",
            "value":2
        },
        {
            "name":"IDandLocDataAtCL_StartDateOldestPrim",
            "value":201201
        },
        {
            "name":"IDandLocDataAtCL_NumSecDataItems",
            "value":2
        },
        {
            "name":"IDandLocDataAtCL_NumSecDataSources",
            "value":	2
        },
        {
            "name":"IDandLocDataAtCL_StartDateOldestSec",
            "value":201201
        },
        {
            "name":"LocDataOnlyAtCloc_NumPrimDataItems",
            "value":2
        },
        {
            "name":"LocDataOnlyAtCloc_NumPrimDataSources",
            "value":2
        },
        {
            "name":"LocDataOnlyAtCloc_StartDateOldestPrim",
            "value":201201
        },
        {
            "name":"LocDataOnlyAtCloc_NumSecDataItems",
            "value":2
        },
        {
            "name":"LocDataOnlyAtCloc_NumSecDataSources",
            "value":2
        },
        {
            "name":"LocDataOnlyAtCloc_StartDateOldestSec",
            "value":201201
        },
        {
            "name":"IDandLocDataAtPL_NumPrimDataItems",
            "value":2
        },
        {
            "name":"IDandLocDataAtPL_NumPrimDataSources",
            "value":2
        },
        {
            "name":"IDandLocDataAtPL_StartDateOldestPrim",
            "value":201201
        },
        {
            "name":"IDandLocDataAtPL_NumSecDataItems",
            "value":3
        },
        {
            "name":"IDandLocDataAtPL_NumSecDataSources",
            "value":3
        },
        {
            "name":"IDandLocDataAtPL_StartDateOldestSec",
            "value":201201
        },
        {
            "name":"LocDataOnlyAtPL_NumPrimDataItems",
            "value":3
        },
        {
            "name":"LocDataOnlyAtPL_NumPrimDataSources",
            "value":3
        },
        {
            "name":"LocDataOnlyAtPL_StartDateOldestPrim",
            "value":3
        },
        {
            "name":"LocDataOnlyAtPL_NumSecDataItems",
            "value":3
        },
        {
            "name":"LocDataOnlyAtPL_NumSecDataSources",
            "value":3
        },
        {
            "name":"LocDataOnlyAtPL_StartDateOldestSec",
            "value":3
        },
        {
            "name":"DataMatchCounts_NumAgeMatchesToPrim",
            "value":3
        },
        {
            "name":"DataMatchCounts_NumAgeMatchToSec",
            "value":3
        },
        {		
            "name":"DataMatchCounts_NumTimeAtCLMtchPrime",
            "value":3
        },		
        {		
            "name":"DataMatchCounts_NumTimeAtCLMatchSec",
            "value":3
        },		
        {		
            "name":"AuthPlusResultsContinued_HighRiskPolRuleCnt",
            "value":3
        },		
        {		
            "name":"NumberPrimaryCategoryIACurrentAddress",
            "value":3
        },		
        {		
            "name":"NumberSecondaryCategoryIACurrentAddress",
            "value":3
        },		
        {		
            "name":"NumberPrimaryCategoryIAPreviousAddress",
            "value":3
        },		
        {		
            "name":"NumberSecondaryCategoryIAPreviousAddress",
            "value":3
        },		
        {		
            "name":"CIFASCount",
            "value":2
        },		
        {		
            "name":"PEPSanctionCount",
            "value":2
        },		
        {		
            "name":"VariableDataLength",
            "value":3
        },		
        {		
            "name":"NameAndDOBPrimaryItemCountAll",
            "value":20
        },		
        {		
            "name":"NameAndDOBPrimarySourceCountAll",
            "value":1
        },		
        {		
            "name":"NameAndDOBPrimarySourceOldestDateAll",
            "value":3
        },		
        {		
            "name":"NameAndDOBSecondaryItemCountAll",
            "value":4
        },		
        {		
            "name":"NameAndDOBSecondaryItemSourceCountAll",
            "value":5
        },		
        {		
            "name":"NameAndDOBPrimarySourceOldestDateAll",
            "value":20120101
        },		
        {		
            "name":"NumberOfPrimaryNameAndDOBText",
            "value":1
        },		
        {		
            "name":"NumberOfSecondaryNameAndDOBText",
            "value":2
        }]		,
        "warningsErrors": [{		
            "responseCode":"006APLS001",
            "responseType":"8",
            "responseMessage":"Mainframe error creating object"
        }]		,
        "otherData": {		
            "response":	{
                "JSON": {
                    "response": {}
                }
            }
        }		
    }, 
    PEPS:{ "peps" : [ { "Value" : "DOW_6_HMT_NM_SIM_DOB" } ] }


}	
    
);
