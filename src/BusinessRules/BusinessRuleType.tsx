type BusinessRuleType = {
    businessRules: businessRule[]
}

export type businessRule = {
    logicalOperator:string,
    filedNames: string[]
}

export default BusinessRuleType
