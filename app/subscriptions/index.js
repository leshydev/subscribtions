import 'babel-core/polyfill'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

require ('../base/bootstrap/bootstrap.css')
require ('./index.css')

import rootReducer from './reducers/index'
import Subscriptions from './containers'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(rootReducer)

window.store = store

render(
  <Provider store={store}>
    <Subscriptions />
  </Provider>,
  document.getElementById('root')
)
