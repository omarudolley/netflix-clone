import React,{lazy,Suspense, useState} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/userContext'
import useAuthListener from './hooks/use-auth-listener'
import ProtectedRoute from './helpers/protectedRoutes'



const Home = lazy(()=>import('./pages/home'))
const SignIn = lazy(()=>import('./pages/signin'))
const SignUp = lazy(()=>import('./pages/signup'))
const Browse = lazy(()=>import('./pages/browse'))


export default function App() {

  const {user} = useAuthListener()
  
  return (
        <UserContext.Provider value={{user}}>
              <Router>
              <Suspense fallback={<p>Loading...</p>}>
                <Switch>

                    <ProtectedRoute 
                    loggedInPath={ROUTES.SIGN_IN} 
                    user={user} 
                    path={ROUTES.BROWSE} exact>
                        <Browse/>
                    </ProtectedRoute>

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
            </Suspense>
          </Router>
        </UserContext.Provider>
        
  );
}

