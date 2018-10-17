import React, { Component } from 'react'

import { ThemeButtonContext } from '../context/ThemeButtonContext';
class ThemeButton extends Component {
    render() {
        return (
            <ThemeButtonContext.Consumer>
                {item => (
                    <div style={{color:item}}>当前按钮的颜色  ：
                            <span>{item}</span>
                    </div>
                )
                }

            </ThemeButtonContext.Consumer>

        );
    }
}

export default ThemeButton;