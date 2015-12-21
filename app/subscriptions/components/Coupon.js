import React, { Component, PropTypes } from 'react'
import {Button} from 'react-bootstrap'

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
      <div>
        <h4>Coupon</h4>
        <hr/>
        <div className="input-group">
          <input type="text" className="form-control"
                 defaultValue={couponId}
                 onChange={this.handleChange.bind(this)}/>
        </div>
        <br/>
        <div className="button-group">
          <Button onClick={() => {actions.fetchCoupon(couponId)}}>Get coupon</Button>
        </div>
      </div>
    )
  }
}

Coupon.propTypes = {
    coupon: PropTypes.array.isRequired,
    getCoupon: PropTypes.func.isRequired
}

export default Coupon
