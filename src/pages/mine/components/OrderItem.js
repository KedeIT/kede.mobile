import React from 'react';
import {
    OrderItem
} from '../style';
export default (props)=>{
    return (
        <OrderItem color={props.itemColor}>
            {props.item.title}
        </OrderItem>
    )
}