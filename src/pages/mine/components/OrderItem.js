import React from 'react';
import OrderItemContext from '../../../context/orderItemContext';
import {
    OrderItem
} from '../style';
export default (props) => {
    return (
        <OrderItemContext.Consumer>
            {
                importedValue => {
                    return (
                        <OrderItem color={importedValue.currentColor} onClick={()=>importedValue.toggleColor()}>
                            {props.item.title}
                        </OrderItem>
                    )
                }
            }
        </OrderItemContext.Consumer>
    )
}


