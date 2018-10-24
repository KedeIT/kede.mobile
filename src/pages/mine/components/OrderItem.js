import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {toggleColor} from '../store/actionCreators';
import {
    OrderItemWrapper
} from '../style';
// export default (props) => {
//     return (
//         <OrderItemContext.Consumer>
//             {
//                 importedValue => {
//                     return (
//                         <OrderItem color={importedValue.currentColor} onClick={()=>importedValue.toggleColor()}>
//                             {props.item.title}
//                         </OrderItem>
//                     )
//                 }
//             }
//         </OrderItemContext.Consumer>
//     )
// }

class OrderItem extends PureComponent {

    render() {
        return (
            <OrderItemWrapper
                color={this.props.currentColor}
                onClick={() => this.props.toggleColor()}>
                {this.props.item.title}
            </OrderItemWrapper>)
    }
}

const mapState = (state) => {
    return {
        currentColor: state.getIn(["mine","currentColor"]),
    }
}

const mapDispatch = (dispatch) => {
    return {
        toggleColor() {
            dispatch(toggleColor());
        }
    }
}

export default connect(mapState, mapDispatch)(OrderItem);


