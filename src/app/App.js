import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ComparePlayer from '../containers/ComparePlayer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Starting 9</h1>
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/" component={ComparePlayer} />            
          </Switch>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
