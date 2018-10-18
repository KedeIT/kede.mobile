import React, { Component } from 'react'
import ThemeButton from './ThemeButton';
class List extends Component{
    render(){
        return (
            <div>
                这里是List组件：
                <br></br>
                <ThemeButton arg1="arg——1" arg2="arg——2" arg3="arg——3"></ThemeButton>
            </div>
        );
    }
}

export default List;