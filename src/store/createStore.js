

export const createStore = (state, stateChanger) => {
    const getState = () => state;
    const dispatch = (action) => stateChanger(state, action);
    return { getState, dispatch };
}

export const renderApp = (appState) => {
    this.renderTitle(appState.title);
    this.renderContent(appState.content);
}

const renderTitle = (title) => {
    const titleDOM = document.getElementById('duwuTitle');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

const renderContent = (content) => {
    const contentDOM = document.getElementById('duwuContent');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}