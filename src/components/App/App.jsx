import React from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Import Components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
// import Home from '../Home/Home';
import Review from '../Review/Review';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        {/* Linking different components here to see how each page works/rendering */}
        {/* <Route path="/" exact>
            <Home />
          </Route> */}
      </div>
      <main>
        <Router>
          <Route path="/" exact>
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
      </main>
    </>
  );
}

export default App;
