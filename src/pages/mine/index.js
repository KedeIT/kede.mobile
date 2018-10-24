import React, { Component } from 'react'
import OrderList from './components/OrderList';
import { connect } from 'react-redux';
import { toggleColor } from './store/actionCreators';

class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: [
                {
                    title: "博士伦隐形眼镜",
                    price: 23
                },
                {
                    title: "海昌隐形眼镜",
                    price: 33
                },
                {
                    title: "依视路镜片",
                    price: 43
                }
            ],
        }
    }

    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                <div>Mine page</div>

                <OrderList orderList={this.state.orderList} ></OrderList>
                <button onClick={() => this.props.toggleColor()}>toggleColor</button>
            </div>);
    }
}

const mapDispatch = (dispatch) => {
    return {
        toggleColor() {
            dispatch(toggleColor());
        }
    }
}

export default connect(null, mapDispatch)(Mine);