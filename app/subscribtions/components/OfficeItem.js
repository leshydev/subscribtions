import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class OfficeItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { office, selectOffice } = this.props

    return (
      <li>
        <div className="checkbox">
          <label>
            <input name="office" type="checkbox" checked={office.selected}
                   onChange={id => {selectOffice(office.id)}}/>
            {office.location}
          </label>
        </div>
      </li>
    )
  }
}

OfficeItem.propTypes = {
  office: PropTypes.object.isRequired,
  selectOffice: PropTypes.func.isRequired
}

export default OfficeItem
