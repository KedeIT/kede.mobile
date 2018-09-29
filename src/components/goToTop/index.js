import { PureComponent } from 'react'

class GoToTop extends PureComponent {

    render() {
        return null;
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
}

export default GoToTop;