import React, { PureComponent } from 'react'
class Detail extends PureComponent {
    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Detail Page: seocode= {this.props.match.params.seocode}
                <br></br>
                url params={this.props.location.search}
            </div>)
    }
}

export default Detail;