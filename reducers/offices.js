import { SELECT_OFFICE } from '../constants/OfficeActionTypes'

const initialState = [
  {
    id: 0,
    location: 'Minsk, Lenina st., 12',
    selected: false
  },
  {
    id: 1,
    location: 'Brest, Kirova st., 18',
    selected: true
  },
  {
    id: 2,
    location: 'Vitebsk, Kalinina st., 1',
    selected: true
  }
]

export default function offices(state = initialState, action) {
  switch (action.type) {
    case SELECT_OFFICE:
      return state.map(office =>
          office.id === action.id ?
              Object.assign({}, office, { selected: !office.selected }) :
              office
      )
    default:
      return state
  }
}
