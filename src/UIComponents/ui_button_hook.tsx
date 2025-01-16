import React, {useEffect} from "react";
import PropTypes from "prop-types";

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

type ButtonProps = ButtonAccessibilityProps & ButtonUiProps

// @ts-ignore
function UiButtonHook({accProps, uiProps}:ButtonProps) {


    useEffect(() => {

    }, [accProps, uiProps]);

    return (
        <button name={accProps.name}>{uiProps.text}</button>
    )
}

UiButtonHook.propTypes = {
    accProps: PropTypes.object.isRequired,
    uiProps: PropTypes.object.isRequired
}
export default UiButtonHook;

