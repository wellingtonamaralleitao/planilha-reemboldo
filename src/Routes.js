import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SignIn from 'components/pages/SignIn'
import Stylesheet from 'components/pages/Stylesheet'

const Routes = ({ store }) => (
  <Router>
    <div>
      <Route path="/signin" component={SignIn} />
      <Route path="/stylesheet" component={Stylesheet} />
    </div>
  </Router>
)

export default Routes
