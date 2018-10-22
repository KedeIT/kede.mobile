import React from 'react';
import {
    OrderListWrapper,
    OrderTitle
} from '../style';
import OrderItem from './OrderItem';
export default (props) => {
    return (
        <OrderListWrapper>
            <OrderTitle>订单信息：</OrderTitle>
            {props.orderList.map((item, index) => {
                return <OrderItem key={index} item={item} itemColor={props.itemColor}></OrderItem>
            })}
        </OrderListWrapper>
    )
}