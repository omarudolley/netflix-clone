import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'



const Home = lazy(()=>import('./pages/home'))


export default function App() {
  return (
    <Suspense fallback="loading..">
        <Router>
        <Switch>
          <Route path={ROUTES.BROWSE}>
          </Route>
          <Route path={ROUTES.SIGN_IN}>
          </Route>
          <Route path={ROUTES.SIGN_UP}>
          </Route>
          <Route path={ROUTES.HOME}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Suspense>
   
  );
}

