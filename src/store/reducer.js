import { REVERSE_COLOR } from './actionTypes';
import { fromJS } from 'immutable'; //引入 immutable的 fromJS 模块

const defaultState = fromJS({
    title: {
        text: "here is duwu title",
        color: "red"
    },
    content: {
        text: "here is duwu content",
        color: "blue"
    }
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case REVERSE_COLOR:
            {
                //使用getIn来获取数据
                let currentTitleColor = state.getIn(["title","color"]);
                let currentContentColor = state.getIn(["content","color"]);
                //使用setIn来设置属性
                return state
                        .setIn(["title","color"],currentContentColor)
                        .setIn(["content","color"],currentTitleColor)
            }
        default:
            return state;
    }
}