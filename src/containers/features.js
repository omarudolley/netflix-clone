

import {Features} from '../components'
import {TrialForm} from '../components'






export function FeaturesContainer(){
    return (<Features>
                <Features.Title>Unlimited films, TV programmes and more.</Features.Title>
                <Features.SubTitle>Watch anywhere. Cancel at any time.</Features.SubTitle>
                <TrialForm>
                    <TrialForm.Text>Ready to watch? Enter your email to create or restart your membership</TrialForm.Text>
                    <TrialForm.Break/>
                    <TrialForm.Input placeholder='Enter address'/>
                    <TrialForm.Button>Try it now</TrialForm.Button>
                    <TrialForm.Break/>
                    <TrialForm.Text>Only new members are eligible for this offer</TrialForm.Text>
                </TrialForm>
            </Features>)
}