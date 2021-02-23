import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import './routes'
import Routes from './routes';
import rootReducers from './reducers'
import InitAuth from './component/InitAuth'

const store = createStore(
  rootReducers,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <InitAuth />
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}
export default App;
