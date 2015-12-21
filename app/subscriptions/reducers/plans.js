import { SELECT_PLAN, SELECT_SUBSCRIPTION } from '../constants/PlanActionTypes'

const initialState = [
  {
    id: 0,
    type: 'silver',
    price: 0,
    bonuses: [
      'email support'
    ],
    subscriptions: []
  },
  {
    id: 1,
    type: 'gold',
    price: 199,
    bonuses: [
      'email support',
      'advanced search'
    ],
    selected: true,
    subscriptions: [
      {
        id: 0,
        months: 1,
        safe: 0,
        selected: false
      },
      {
        id: 1,
        months: 3,
        safe: 10,
        selected: true
      }
    ]
  },
  {
    id: 2,
    type: 'platinum',
    price: 299,
    bonuses: [
      'email support',
      'advanced search',
      'unlimited access'
    ],
    subscriptions: [
      {
        id: 2,
        months: 1,
        safe: 0,
        selected: false
      },
      {
        id: 3,
        months: 2,
        safe: 15,
        selected: false
      },
      {
        id: 4,
        months: 3,
        safe: 20,
        selected: false
      }
    ]
  }
]

export default function plans(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLAN:
      return state.map(plan =>
          plan.id === action.id ?
              Object.assign({}, plan, { selected: true }) :
              Object.assign({}, plan, { selected: false })
      )
    case SELECT_SUBSCRIPTION:
      state[action.planId].subscriptions = state[action.planId].subscriptions.map(subscription =>
        subscription.id === action.subscriptionId ?
            Object.assign({}, subscription, { selected: true }) :
            Object.assign({}, subscription, { selected: false })
      )
      return state.map(plan => Object.assign({}, plan))
    default:
      return state
  }
}
