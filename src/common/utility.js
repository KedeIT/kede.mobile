import {List as ImmutableList} from 'immutable';
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

/*页面级分页数据:
    dataList:需分页原数据
    pageSize:页尺寸
    pageNo:页码
*/
export const getPagedData = (dataList, pageSize, pageNo) => {

    if (!dataList || dataList.length === 0 || pageNo < 1 || pageSize <= 0) return null;

    if (ImmutableList.isList(dataList)) {
        return dataList.skip((pageNo - 1) * pageSize).take(pageSize);
    }
    //以下为js和immutable object 通用部分
    //todo：性能测试，看slice和skip+take哪个性能更高
    let start = pageSize * (pageNo - 1);
    let end = pageNo * pageSize;
    return dataList.slice(start, end);
}

