import {businessRule, fieldNameType} from "./BusinessRuleType";
function oredRules(bizFields:fieldNameType) {
    return bizFields.findIndex(filed=>filed[1]===true) >=0;

}

function andedRule(bizFields:fieldNameType) {
    console.log("indec"+bizFields.findIndex(filed=>filed[1]===false))
    console.log( bizFields.findIndex(filed=>filed[1]===false) ==-1);
    return bizFields.findIndex(filed=>filed[1]===false) ==-1;

}

export function businessRuleParser(bizRules:businessRule[]){
    let rulePredicate: boolean[] = [];
    bizRules.map(bizRule=>{
        const evaluation = bizRule.logicalOperator==="&"? andedRule(bizRule.filedNames): oredRules(bizRule.filedNames)
        rulePredicate.push(evaluation);
    });
    return rulePredicate.indexOf(false) <-1
}