const getWindowScroll = () => {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return {
        x,
        y
    };
}

const getWindowScrollFromSession = (path) => {
    let info = sessionStorage.getItem(`scroll-${path}`);
    if (!info) return null;
    return JSON.parse(info);
}

export const setWindowScrollToSession = (path) => {
    let scrollInfo = getWindowScroll();
    sessionStorage.setItem(`scroll-${path}`, JSON.stringify(scrollInfo));
}

export const autoWindowScroll = (path) => {
    let scrollInfo = getWindowScrollFromSession(path);
    if (!scrollInfo) return;
    window.scrollTo(scrollInfo.x, scrollInfo.y);
}
