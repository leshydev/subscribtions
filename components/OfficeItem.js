import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class OfficeItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { office, selectOffice } = this.props

    return (
      <li className={classnames({
        selected: office.selected
      })} onClick={id => {selectOffice(office.id)}}>
        {office.location}
      </li>
    )
  }
}

OfficeItem.propTypes = {
  office: PropTypes.object.isRequired,
  selectOffice: PropTypes.func.isRequired
}

export default OfficeItem
