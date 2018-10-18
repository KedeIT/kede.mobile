import React, { Component } from 'react'
import List from './components/List';

import { ThemeButtonContext, style } from './context/ThemeButtonContext';

class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentColor: style.colorRed
        }
        // this.toggleColor2 = this.toggleColor2.bind(this);
    }

    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Mine page
                <ThemeButtonContext.Provider value={this.state.currentColor}>
                    <List></List>
                </ThemeButtonContext.Provider>
                <button onClick={ this.toggleColor} my="自定义的">父级Mine更改按钮颜色,当前为{this.state.currentColor}</button>
            </div>);
    }

    toggleColor = () => {
        if (this.state.currentColor == style.colorRed)
            this.setState({
                currentColor: style.colorYellow
            });
        else
            this.setState({
                currentColor: style.colorRed
            });
    }

    toggleColor2(a,b,e) {

        if (this.state.currentColor == style.colorRed)
            this.setState({
                currentColor: style.colorYellow
            });
        else
            this.setState({
                currentColor: style.colorRed
            });
    }
}

export default Mine;