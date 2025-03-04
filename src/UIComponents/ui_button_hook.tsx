import React, {useEffect} from "react";
import PropTypes from "prop-types";
import BusinessRuleType from "../BusinessRules/BusinessRuleType";
import styled from "styled-components";


type ButtonAccessibilityProps ={
    accProps: {
        name: string
    }
}

type ButtonUiProps = {
    uiProps: {
        text: string,
        theme: object
    }
}

type ButtonProps = ButtonAccessibilityProps & ButtonUiProps & BusinessRuleType;

// @ts-ignore
function UiButtonHook({accProps, uiProps, businessRules}:ButtonProps) {


    useEffect(() => {

    }, [accProps, uiProps]);

    // @ts-ignore
    const theme = uiProps.theme["pink"]

    const Button = styled.button`
  background-color: ${ theme.default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${theme.hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
    return (
        <Button name={accProps.name}>{uiProps.text}</Button>
    )
}

UiButtonHook.propTypes = {
    accProps: PropTypes.object.isRequired,
    uiProps: PropTypes.object.isRequired,
    businessRules: PropTypes.object.isRequired
}
export default UiButtonHook;

