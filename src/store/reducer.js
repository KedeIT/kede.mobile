import {REVERSE_COLOR} from './actionTypes';
const defaultState = {
    title: {
        text: "here is duwu title",
        color: "red"
    },
    content: {
        text: "here is duwu content",
        color: "blue"
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case REVERSE_COLOR:
            {
                let currentTitle = state.title;
                let currentContent = state.content;
                return {
                    title: {
                        ...currentTitle,
                        color: currentContent.color
                    },
                    content: {
                        ...currentContent,
                        color: currentTitle.color
                    }
                }

            }
        default:
            return state;
    }
}