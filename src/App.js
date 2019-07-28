import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from './about';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import { createStore } from 'redux'
const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
            <Route path="/about" exact component={AboutUs} />
            <Link to={'/about'}>About Us</Link>
      </header>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
