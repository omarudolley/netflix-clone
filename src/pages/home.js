import React from 'react';
import { JumbotronContainer } from '../containers/Jumbotron'
import {FooterContainer}  from '../containers/footer'
import {AccordionContainer} from '../containers/accordion'
import {HeaderContainer} from '../containers/header' 
import {FeaturesContainer} from '../containers/features'


export default function Home() {
    return (
        <>
        <HeaderContainer>
            <FeaturesContainer/>
        </HeaderContainer>
        <JumbotronContainer />
        <AccordionContainer/>
        <FooterContainer/>  
        </>      
    )
}