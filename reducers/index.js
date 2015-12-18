import { combineReducers } from 'redux'
import plans from './plans'
import offices from './offices'
import card from './card'
import coupon from './coupon'

const rootReducer = combineReducers({
  plans, offices, card, coupon
})

export default rootReducer
