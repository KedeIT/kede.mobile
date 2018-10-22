import React, { Component } from 'react'
import OrderList from './components/OrderList';
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
            currentColor: "blue"
        }
    }

    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                <div>Mine page</div>
                <OrderList orderList={this.state.orderList} itemColor={this.state.currentColor}></OrderList>
                <button onClick={() => this.toggleColor()}>toggleColor</button>
            </div>);
    }

    toggleColor = () => {
        if (this.state.currentColor === "red") {
            this.setState({
                currentColor: "blue"
            });
        } else {
            this.setState(() => ({
                currentColor: "red"
            }));
        }
    }

}

export default Mine;