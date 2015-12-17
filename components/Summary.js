import React, { Component, PropTypes } from 'react'

class Summary extends Component {
  constructor(props, context) {
    super(props, context)
  }

    discount(price, discount) {
        return (price * officesCount * (1 - discount / 100)).toFixed(2)
    }

    countPrice(price, officesCount, discount) {
        return (price * officesCount * (1 - discount / 100)).toFixed(2)
    }

  render() {
    const { plan, offices, coupon } = this.props

    let officesCount = offices.filter(office => office.selected).length

    return (
      <div className="main">
        <div>
          Price per office: ${plan.price}
        </div>
        <div>
          Offices selected: {officesCount}
        </div>
        <div>
          Coupon: {coupon.discount}%
        </div>
        <div>
          Total price: {this.countPrice(plan.price, officesCount, coupon.discount)}
        </div>
      </div>
    )
  }
}

Summary.propTypes = {
    plan: PropTypes.object.isRequired,
    offices: PropTypes.array.isRequired,
    coupon: PropTypes.object.isRequired
}

export default Summary
