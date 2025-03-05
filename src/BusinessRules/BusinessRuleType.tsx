type BusinessRuleType = {
    businessRules: businessRule[]
};

export type fieldNameType = [string,boolean][];

export type businessRule = {
    logicalOperator:string,
    filedNames: fieldNameType
};

export default BusinessRuleType
