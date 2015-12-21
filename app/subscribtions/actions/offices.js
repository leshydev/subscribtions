import * as types from '../constants/OfficeActionTypes'

export function selectOffice(id) {
  return { type: types.SELECT_OFFICE, id }
}
