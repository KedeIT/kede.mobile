import React, { Component } from 'react'
import List from './components/List';
import FancyBox from '../../components/fancyBox';
import { ThemeButtonContext, style } from './context/ThemeButtonContext';
class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentColor: style.colorRed,
            toggleColor: this.toggleColor
        }
    }

    render() {
        let themeButton = (
            <ThemeButtonContext.Provider value={this.state} >
                <List></List>
            </ThemeButtonContext.Provider>
        );
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Mine page

                <FancyBox topContent={themeButton} bottomContent={<span>HAHA BOTTOM CONTENT HERE</span>}></FancyBox>
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
}

export default Mine;