import React, { PureComponent } from 'react'
import http from '../../service/api';
import {setWindowScrollToSession, autoWindowScroll} from '../../common/utility';
class Index extends PureComponent{
    state={
        content:"index page"
    }

    render(){
        return <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
    }

    componentDidMount(){
        http.get("/api/feature.json").then((result) => {
            this.setState(()=>{
                return {
                    content:result.data
                }
            }, ()=>autoWindowScroll(this.props.location.pathname));
            //记录日志
        });
    }
    componentWillUnmount(){
        setWindowScrollToSession(this.props.location.pathname);
    }
}

export default Index;