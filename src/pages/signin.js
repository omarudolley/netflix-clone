
import React, { useContext, useState } from 'react' 
import { Form } from '../components'
import { HeaderContainer} from '../containers/header'
import  FirebaseContext  from '../context/firebase'
import {useHistory} from 'react-router-dom'
import {Footer} from '../components'



export default function SignIn(){

    const [error,setError] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {firebase,FieldValue} = useContext(FirebaseContext)

    const history = useHistory()
    const isInvalid = password === "" || email === ""

    const handleSubmit = async (e) =>{
        e.preventDefault()
     
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/browse')
         
        }catch(err){
            setEmail('')
            setPassword('')
            setError(err.message)
        }

    }
    return (

    <HeaderContainer showlink={false}>
          <Form>
            <Form.Title>Sign In</Form.Title>
            { error && <Form.Error>{error}</Form.Error>}
            <Form.Panel onSubmit={handleSubmit}>
                <Form.Input 
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={({target})=>setEmail(target.value)}/>

                <Form.Input 
                type="password"
                value={password}
                autoComplet='off'
                placeholder='password'
                onChange={({target})=>setPassword(target.value)}/>

                <Form.Button  disabled={isInvalid} type="submit">Sign In</Form.Button>
                

                <Form.Text>
                    New to Netflix?<Form.Link to={'/signup'}> Sign up now.</Form.Link>
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
    
    )
}