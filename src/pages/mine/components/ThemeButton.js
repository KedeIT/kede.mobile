import React, { Component } from 'react'

import { ThemeButtonContext } from '../context/ThemeButtonContext';
class ThemeButton extends Component {
    render() {
        return (
            <ThemeButtonContext.Consumer>
                {
                    importedValue => (
                        <div style={{ color: importedValue }} {...this.props}>当前按钮的颜色  ：
                                    <span>{importedValue}</span>
                        </div>
                    )
                }

            </ThemeButtonContext.Consumer>
        );
    }
}

export default ThemeButton;