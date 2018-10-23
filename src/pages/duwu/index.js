import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {GetReverseColorAction} from '../../store/actionCreators';
class Duwu extends PureComponent {
    // state = {
    //     title: {
    //         text: "here is duwu title",
    //         color: "red"
    //     },
    //     content: {
    //         text: "here is duwu content",
    //         color: "blue"
    //     }
    // }

    render() {
        const { title, content, reverseColor } = this.props;
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Duwu page
                <Link to="/cart">跳转到购物车</Link>
                <br></br>
                <br></br>
                <br></br>
                <div style={{ color: title.color, }}>{title.text}</div>
                <div style={{ color: content.color }}>{content.text}</div>
                <button onClick={()=>reverseColor()}>反转颜色</button>
            </div>)
    }

    // reverseColor = () => {
    //     let currentTitle = this.state.title;
    //     let currentContent = this.state.content;
    //     this.setState(() => {
    //         return {
    //             title: {
    //                 ...currentTitle,
    //                 color: currentContent.color
    //             },
    //             content: {
    //                 ...currentContent,
    //                 color: currentTitle.color
    //             }
    //         }
    //     })
    // }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        content: state.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reverseColor() {
            let action = GetReverseColorAction();
            console.log(action);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Duwu);