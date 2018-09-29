import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
class Duwu extends PureComponent {
    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Duwu page
                <Link to="/cart">跳转到购物车</Link>
            </div>)
    }
}

export default Duwu;