import React, { PureComponent } from 'react'
import { setWindowScrollToSession, autoWindowScroll } from '../../common/utility';
import { connect } from 'react-redux'; //引入 connect 模块
import { InitIndex } from './store/actionCreators'; //引入InitIndex 方法
class Index extends PureComponent {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
    }

    componentDidMount() {
        this.props.initPage(this.props.location.pathname);
    }
    componentWillUnmount() {
        setWindowScrollToSession(this.props.location.pathname);
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.getIn(["index", "content"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initPage(pathname) {
            dispatch(InitIndex()); //dispatch中使用的是方法，而非对象
            autoWindowScroll(pathname);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);