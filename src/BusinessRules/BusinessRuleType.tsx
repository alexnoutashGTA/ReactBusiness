type BusinessRuleType = {
    businessRules: businessRule[]
}

type businessRule = {
    logicalOperator:string,
    filedNames: string[]
}

export default BusinessRuleType