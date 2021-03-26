import React from 'react';
import { JumbotronContainer } from '../containers/Jumbotron'
import {FooterContainer}  from '../containers/footer'
import {AccordionContainer} from '../containers/accordion'
import {HeaderContainer} from '../containers/header' 


export default function Home() {
    return (
        <>
        <HeaderContainer/>
        <JumbotronContainer />
        <AccordionContainer/>
        <FooterContainer/>  
        </>      
    )
}