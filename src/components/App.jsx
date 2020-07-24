import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Images from './Images/Images'
import SemiNavbar from './SemiNavbar'
import FullImage from './Images/FullImage'
import Videos from './Videos/Videos'
import Jokes from './Jokes/Jokes'
import Quotes from './Quotes/Quotes'

function App() {
  return <Router>
    <div className="master" >
      <Navbar />
      <div className="app-page">
        <SemiNavbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/images" component={Images} />
          <Route exact path="/images/:id" component={FullImage} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/jokes" component = {Jokes} />
          <Route exact path="/quotes" component = {Quotes}  />
        </Switch>
      </div>
    </div>
  </Router>
}

export default App;