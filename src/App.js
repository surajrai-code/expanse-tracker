import React, { useContext } from 'react'

import { Route} from 'react-router-dom'
import ExpensePage from './components/pages/ExpensePage'
import AuthContext from './components/store/AuthContext'
import SignUp from './components/LayOut/SignUp'
function App() {
  const authCtx = useContext(AuthContext)
  return (
    <div>
      <main>
   {authCtx.isLoggedIn &&  <Route path='/ExpensePage'>
        <ExpensePage/>
      </Route>}
     </main>

   {!authCtx.isLoggedIn&&<SignUp/>}  
    </div>
  )
}

export default App