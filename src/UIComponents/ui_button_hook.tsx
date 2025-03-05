import React, {useEffect} from "react";
import PropTypes from "prop-types";
import BusinessRuleType from "../BusinessRules/BusinessRuleType";
import styled from "styled-components";
import {businessRuleParser} from "../BusinessRules/BusinessRuleEngine";

// UI Components access all accessibility parameters as props
// This approach leads developers to provide accessibility parameter
// One parameter is included in this type as an example
type ButtonAccessibilityProps ={
    accProps: {
        name: string
    }
}

// UI Components access all content parameters as props
// This approach leads developers to provide content parameter as parameter, perhaps retrived
// from a CMS (contentful etc.)
// One parameter and a theme is included in this type as an example
type ButtonUiProps = {
    uiProps: {
        text: string,
        theme: object
    }
}

// Overall props include business rules needed for forms as well
type ButtonProps = ButtonAccessibilityProps & ButtonUiProps & BusinessRuleType;

// @ts-ignore
function UiButtonHook({accProps, uiProps, businessRules}:ButtonProps) {

    const enabled = businessRuleParser(businessRules);

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
    background-color: ${theme.disabled};
  }`;
    return (
       enabled? <Button  name={accProps.name}>{uiProps.text}</Button>:
           <Button disabled name={accProps.name}>{uiProps.text}</Button>
    )
}

UiButtonHook.propTypes = {
    accProps: PropTypes.object.isRequired,
    uiProps: PropTypes.object.isRequired,
    businessRules: PropTypes.object.isRequired
}
export default UiButtonHook;

