import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'



const Home = lazy(()=>import('./pages/home'))
const SignIn = lazy(()=>import('./pages/signin'))
const SignUp = lazy(()=>import('./pages/signup'))
const Browse = lazy(()=>import('./pages/browse'))


export default function App() {
  return (
    <Suspense fallback="loading..">
        <Router>
        <Switch>
          <Route path={ROUTES.BROWSE}>
            <Browse/>
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignIn/>
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignUp/>
          </Route>
          <Route path={ROUTES.HOME}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Suspense>
   
  );
}

