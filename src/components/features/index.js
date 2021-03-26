 
 import React from 'react' 
 import {Container,Title,SubTitle} from './styles/features'


 export default function Features({children}){
     return (<Container>{children}</Container>)
 }


 Features.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Features.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}