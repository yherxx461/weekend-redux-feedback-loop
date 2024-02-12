import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Import Components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Home from '../Home/Home';
import Review from '../Review/Review';

function App() {
  return (
    <>
      <div className="App">
        {/* Linking different components here to see how each page works/rendering */}
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/feeling">
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/thankyou">
            <ThankYou />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
