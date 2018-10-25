import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
class Duwu extends PureComponent {

    state = {
        title: {
            text: "here is duwu title",
            color: "red"
        },
        content: {
            text: "here is duwu content",
            color: "blue"
        }
    }

    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Duwu page
                <Link to="/cart">跳转到购物车</Link>
                <br />
                <br />
                <br />
                <div style={{ color: this.state.title.color }}>{this.state.title.text}</div>
                <div style={{ color: this.state.content.color }}>{this.state.content.text}</div>
                <button onClick={this.reverseColor}>反转颜色</button>
            </div>)
    }

    reverseColor = () => {
        let currentTitleInfo = this.state.title;
        let currentContentInfo = this.state.content;
        this.setState(() => {
            return {
                title: {
                    ...currentTitleInfo,
                    color: currentContentInfo.color
                },
                content: {
                    ...currentContentInfo,
                    color: currentTitleInfo.color
                }
            }
        });
    }
}

export default Duwu;