import React from 'react';
import { Accordion,TrialForm } from '../components';
import faqsData from '../fixtures/faqs.json'

export function AccordionContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item,index) => (
                    <Accordion.Item key={item.id} index={index}>
                        <Accordion.Header >{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
            <TrialForm>
                <TrialForm.Text>Ready to watch? Enter your email to create or restart your membership</TrialForm.Text>
                <TrialForm.Break/>
                <TrialForm.Input placeholder='Enter address'/>
                <TrialForm.Button>Try it now</TrialForm.Button>
            </TrialForm>
        </Accordion>);
}