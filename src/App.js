import React, { useEffect } from "react"
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Header from "./Header"
import "./index.css"
import Checkout from "./checkout"
import Home from "./Home" 
import Login from "./login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {

const [{basket , user}, dispatch] = useStateValue()

useEffect(()=>{
  auth.onAuthStateChanged(authUser => {
    
    if(authUser){
dispatch({
  type: 'SET_USER',
  user : authUser
}

)
    }
    else{
dispatch({
  type:'SET_USER',
  user:null
})
    }
  })
},[])
  return (
    <Router>
    <div className="App">
      <Header/>

      
      <Switch>
      <Route path="/login"> 
       <Login />
        </Route>

        <Route path="/checkout"> 
        <Checkout/>
        </Route>
        <Route path="/">
      <Home />
        </Route>
      
      </Switch>
     </div>
     </Router>
  );
}

export default App;
