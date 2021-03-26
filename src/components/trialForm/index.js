
import React from 'react' 
import {Container,Input, Button, Text,Break } from './styles/trialForm'



export default function TrialForm({children,...rest}){
    return (<Container {...rest}>{children}</Container>)
}


TrialForm.Input = function TrialFormInput({children,...rest}){
    return <Input {...rest}/>
}


TrialForm.Button = function TrialFormButton({children,...rest}){
    return(
        <Button {...rest}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    ) 
}


TrialForm.Text = function TrialFormText({children,...rest}){
    return(
        <Text {...rest}>
            {children} 
        </Text>
    ) 
}

TrialForm.Break = function TrialFormBreak({ ...restProps }) {
    return <Break {...restProps} />;
}