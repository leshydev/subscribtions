import { SELECT_PLAN } from '../constants/PlanActionTypes'

const initialState = [
  {
    id: 0,
    type: 'silver',
    price: 0,
    bonuses: [
      'email support'
    ]
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
        months: 1
      },
      {
        months: 3,
        safe: 10
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
        months: 1
      },
      {
        months: 2,
        safe: 15
      },
      {
        months: 3,
        safe: 20
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
    default:
      return state
  }
}
