import React, { Component, PropTypes } from 'react'

class Card extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { card } = this.props

    return (
      <div className="main">
        <div>
          <input type="text" value={card.type} />
        </div>
        <div>
          <input type="text" value={card.number} />
        </div>
        <div>
          <input type="text" value={card.address} />
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card
