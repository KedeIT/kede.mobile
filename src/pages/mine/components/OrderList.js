import React, {  } from 'react'
import OrderItem from './OrderItem';
import {
    ListWrapper
} from '../style';

export default (props) => {
    return (
        <ListWrapper>
            {
                props.orderList.map((item,index) => {
                    return <OrderItem key={index} item={item} ></OrderItem>
                })
            }
        </ListWrapper>

    )
}