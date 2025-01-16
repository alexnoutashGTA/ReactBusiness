import React, {useEffect} from "react";
import PropTypes from "prop-types";
import BusinessRuleType from "../BusinessRules/BusinessRuleType";


type ButtonAccessibilityProps ={
    accProps: {
        name: string
    }
}

type ButtonUiProps = {
    uiProps: {
        text: string
    }
}

type ButtonProps = ButtonAccessibilityProps & ButtonUiProps & BusinessRuleType;

// @ts-ignore
function UiButtonHook({accProps, uiProps, businessRule}:ButtonProps) {


    useEffect(() => {

    }, [accProps, uiProps]);

    return (
        <button name={accProps.name}>{uiProps.text}</button>
    )
}

UiButtonHook.propTypes = {
    accProps: PropTypes.object.isRequired,
    uiProps: PropTypes.object.isRequired,
    businessRule: PropTypes.object.isRequired
}
export default UiButtonHook;

