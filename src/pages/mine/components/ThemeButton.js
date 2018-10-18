import React, { Component, Fragment } from 'react'

import { ThemeButtonContext } from '../context/ThemeButtonContext';
class ThemeButton extends Component {
    render() {
        return (
            <ThemeButtonContext.Consumer>
                {
                    (importedValue) => (
                        <Fragment>
                            <div style={{ color: importedValue.currentColor }} {...this.props}>当前按钮的颜色  ：
                                    <span>{importedValue.currentColor}</span>
                            </div>
                            <button onClick={importedValue.toggleColor} >更改颜色,当前为{importedValue.currentColor}</button>
                        </Fragment>
                    )
                }

            </ThemeButtonContext.Consumer>
        );
    }
}

export default ThemeButton;