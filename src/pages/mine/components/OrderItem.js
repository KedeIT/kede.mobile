import React from 'react';
import OrderItemContext from '../../../context/orderItemContext.js'

import {
    ItemWrapper
} from '../style';
export default (props) => {
    return (
        <OrderItemContext.Consumer>
            {
                importedValue => {
                    return (
                        <ItemWrapper color={importedValue.itemColor} onClick={importedValue.toggleColor}>
                            {props.item.title}
                        </ItemWrapper>
                    );
                }
            }

        </OrderItemContext.Consumer>
    );
}