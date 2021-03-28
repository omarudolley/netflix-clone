import React, { useState, useContext } from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import {Footer} from '../components'
import FirebaseContext from '../context/firebase'
import {useHistory} from 'react-router-dom'

export default function Signup() {
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {firebase} = useContext(FirebaseContext)
    
    const isInvalid = fullName === '' || password === '' || emailAddress === '';

    const history = useHistory()
    
    const handleSignup = async (event) => {
        event.preventDefault();
        try{  
            const result = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
            await result.user.updateProfile({

                profile: [{
                    displayName:fullName,
                    photoUrl:Math.floor(Math.random()+5)+1
                }]
               
            })
            history.push("/browse")
        }
        catch(error){
            setEmailAddress('')
            setPassword('')
            setFullName('')
            setError(error.message)

        }
    }
    
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Panel onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Full Name"
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Button disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Button>
                        
                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Panel>
                </Form>
                <Footer displayBg={true}>
                <Footer.Title>Questions? Contact us.</Footer.Title>
                <Footer.Break />
                
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQs</Footer.Link>
                        <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    </Footer.Column>
                    
                    <Footer.Column>
                        <Footer.Link href="#">Help Center</Footer.Link>
                        <Footer.Link href="#">Corporate Information</Footer.Link>
                    </Footer.Column>
                    
                    <Footer.Column>
                        <Footer.Link href="#">Terms of Use</Footer.Link>
                    </Footer.Column>
                    
                    <Footer.Column>
                        <Footer.Link href="#">Privacy</Footer.Link>
                    </Footer.Column>
                </Footer.Row>

                <Footer.Break />
                <Footer.Text>Netflix Estonia</Footer.Text>
            </Footer> 
            </HeaderContainer>
          
        </>
    )
}