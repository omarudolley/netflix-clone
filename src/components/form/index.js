import React from 'react'
import { Container,Title,Input,Button,Panel,Error,TextSmall,Text,Link } from './styles/form'





export default function Form({children, ...rest}){
    return (<Container {...rest}>
                    {children}
            </Container>)
}


Form.Panel = function FormPanel({children,...rest}){
    return <Panel {...rest}>{children}</Panel>
}

Form.Title = function FormTitle({children,...rest}){
    return <Title {...rest}>{children}</Title>
}


Form.Input = function FormInput({...rest}){
    return <Input {...rest}/>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

Form.Button = function FormButton({children,...rest}){
    return <Button  {...rest}>{children}</Button>
}


Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}


Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}



Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}