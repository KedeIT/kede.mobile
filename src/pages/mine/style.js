import styled from 'styled-components';

export const OrderListWrapper = styled.div`
    border:1px dashed green;
    position: relative;
`
export const OrderTitle = styled.div`
    text-align:left;
    width:100%;
`

export const OrderItemWrapper = styled.div`
    color:${props=>props.color};
`