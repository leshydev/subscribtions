import { SELECT_PLAN, SELECT_SUBSCRIBTION } from '../constants/PlanActionTypes'

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
    subscribtions: [
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
    subscribtions: [
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
    case SELECT_SUBSCRIBTION:
      state[action.planId].subscribtions = state[action.planId].subscribtions.map(subscribtion =>
        subscribtion.id === action.subscribtionId ?
            Object.assign({}, subscribtion, { selected: true }) :
            Object.assign({}, subscribtion, { selected: false })
      )
      return state.map(plan => Object.assign({}, plan))
    default:
      return state
  }
}
