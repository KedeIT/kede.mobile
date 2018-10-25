import React, { PureComponent } from 'react'
import OrderList from './components/OrderList';
import OrderItemContext, { STYLE } from '../../context/orderItemContext.js'


class Mine extends PureComponent {
    state = {
        orderList: [
            {
                title: "博士伦隐形眼镜",
                price: 23
            },
            {
                title: "海昌护理液",
                price: 24
            }
        ],

        currentColor: STYLE.colorRed,
    }
    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Mine page
                <br></br>
                <br></br>
                <OrderItemContext.Provider value={{
                    itemColor: this.state.currentColor,
                    toggleColor: this.toggleColor
                }}>

                </OrderItemContext.Provider>

                <OrderList orderList={this.state.orderList}>
                </OrderList>
                <button onClick={this.toggleColor}>toggleColor</button>

            </div>);
    }

    toggleColor = () => {
        if (this.state.currentColor === STYLE.colorRed) {
            this.setState({
                currentColor: STYLE.colorBlue
            });
        }
        else {
            this.setState(() => {
                return {
                    currentColor: STYLE.colorRed
                }
            });
        }
    }
}

export default Mine;