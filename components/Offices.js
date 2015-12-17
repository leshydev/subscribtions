import React, { Component, PropTypes } from 'react'
import OfficeItem from './OfficeItem'

class Offices extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { offices, actions } = this.props

    return (
      <div className="offices">
        <ul className="office-list">
          {offices.map(office =>
            <OfficeItem key={office.id} office={office} {...actions} />
          )}
        </ul>
      </div>
    )
  }
}

Offices.propTypes = {
  offices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Offices
