import React from 'react';
import axios from 'axios';
import './App.css';

//Import Compoments
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <>
      <Header />;
      <div>
        {/* Linking different components here to see how each page works/rendering */}
        <Router>
          <Route path="/feeling" />
        </Router>
      </div>
    </>
  );
}

export default App;
