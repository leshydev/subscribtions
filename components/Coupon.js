import React, { Component, PropTypes } from 'react'

class Coupon extends Component {
  constructor(props, context) {
    super(props, context)
      this.state = {
          couponId: props.coupon.id
      }
  }

    handleChange(e) {
        this.setState({ couponId: Number.parseInt(e.target.value) })
    }

  render() {
    const { coupon, actions } = this.props

    let couponId = this.state.couponId

    return (
      <div className="main">
        <div>
          <input type="text"
                 defaultValue={couponId}
                 onChange={this.handleChange.bind(this)}/>
        </div>
          <button onClick={() => {actions.getCoupon(couponId)}}>Get coupon</button>
      </div>
    )
  }
}

Coupon.propTypes = {
    coupons: PropTypes.array.isRequired,
    getCoupon: PropTypes.func.isRequired
}

export default Coupon
