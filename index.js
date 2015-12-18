import 'babel-core/polyfill'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(rootReducer)

window.store = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
