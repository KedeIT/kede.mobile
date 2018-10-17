import React, { Component } from 'react'
import ThemeButton from './ThemeButton';
class List extends Component{
    render(){
        return (
            <div>
                这里是List组件：
                <br></br>
                <ThemeButton></ThemeButton>
            </div>
        );
    }
}

export default List;