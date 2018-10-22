import React, { Component } from 'react'
import OrderList from './components/OrderList';

import OrderItemContext, { style } from '../../context/orderItemContext';
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
            currentColor: style.colorRed
        }
    }

    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                <div>Mine page</div>

                <OrderItemContext.Provider 
                value={{
                    currentColor:this.state.currentColor,
                    toggleColor:this.toggleColor
                    }}>
                    <OrderList orderList={this.state.orderList} ></OrderList>
                </OrderItemContext.Provider>
                <button onClick={() => this.toggleColor()}>toggleColor</button>
            </div>);
    }

    toggleColor = () => {
        if (this.state.currentColor === style.colorRed) {
            this.setState({
                currentColor: style.colorBlue
            });
        } else {
            this.setState(() => ({
                currentColor: style.colorRed
            }));
        }
    }

}

export default Mine;