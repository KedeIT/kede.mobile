[toc]

# 使用 React 重写 kede mobile 培训课件
# 项目初始化：
## 使用 create-react-app 创建项目
```javascript
create-react-app kede.mobile
```

## 删除多余的文件：
如：
- src/registerServiceWorker.js
  - 能够允许你在第一次访问成功之后，本地会有完整的缓存（相当于把网页当成App了）。第二次再访问的时候，就算断网了，依然可以打开页面
- src/logo.svg
- src/index.css
- src/App.test.js
  删除这些文件，需要调整 src/App.css 以及 src/index.js 对这些文件的引用。

## 创建开发所需文件夹
在src文件夹中创建 components 文件夹，所有的组件均建立在该文件夹下

# styled-components：react中的CSS最佳实践
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180928102948854-405744301.png)
>styled-components：
>- 核心理念：移除样式与组件之间的对应关系
>- css in js，写的是真CSS，非类似于CSS的JS对象
>- 拥有 sass，less 的优点
>
>官网地址：https://www.styled-components.com/

## 使用 styled-components 全局注入 normalize.css
### 安装 styled-components：
```javascript
npm install --save styled-components
```
### 创建 src/style.js文件
使用 {injectGlobal} from 'styled-components'进行全局样式的注入
*推荐使用 normalize.css?v=7.0.0 版本*
normalize.css：https://github.com/necolas/normalize.css
```javascript
/style.js
import {injectGlobal} from 'styled-components';
injectGlobal`
    /*normalize.css*/
`
```
### 在 src/index.js 中引入上面的style.js
```javascript
import './style.js';
```

# 网站body样式：
/style.js
```javascript
export const Wrapper = styled.div`
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    padding-top: 0;
    overflow: hidden;
    position: relative;
    padding-bottom: 80px;
`
```
/index.js
```javascript
import {
    Wrapper
} from './style.js';

const container = (
    <Wrapper>
        <App />
    </Wrapper>
)
ReactDOM.render(container, document.getElementById('root'));
```
# header 组件布局
路径：src/components/header

新增文件：

- index.js：用于页面布局。
- style.js：页面样式，使用"styled-components"模块进行布局处理。

/components/header/index.js

```javascript
import styled from 'styled-components';
import searchIcon from '../../assets/img/icon_head.png';
export const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 750px;
    min-width: 320px;
    height: 45px;
    z-index: 11;
    top: 0;
    position: fixed;
`
export const Mask = styled.div`
    width: 100%;
    height: 45px;
    position: absolute;
    background: #141414;
    opacity: .8;
    top: 0;
    left: 0;
    z-index: 0;
`

export const ClassMenuLink = styled.a`
    position: absolute;
    top: 50%;
    left: 10px;
    width: 31px;
    margin-top: -16px;
    display: block;
`
export const ClassMenuImg = styled.img.attrs({
    src: "https://pic.keede.com//app/images/Community/Index/classmenu.png"
})`
    width: 31px;
    vertical-align: middle;
    border: none;
`

export const SearchBar = styled.div`
    background-size: 21px auto;
    background-position: 12px -47px;
    background-color: #fff;
    background-repeat: no-repeat;
    width: 60%;
    height: 27px;
    margin: 9px auto;
    padding: 0 24px 0 42px;
    position: relative;
    border-radius: 15px;
    &.head_icon {
        background-image: url(${searchIcon});
    }
    &.hd_search{
        background-size: 21px auto;
        background-position: 12px -47px;
        background-color: #ffffff;
        background-repeat: no-repeat;
        width: 60%;
        height: 27px;
        margin: 9px auto;
        padding: 0 24px 0 42px;
        position: relative;
        border-radius: 15px;
    }
`

export const SearchInput = styled.input.attrs({
    placeholder: "库博硅水凝胶日抛"
})`
    display: inline;
    height: 27px;
    line-height: initial;
    width: 100%;
    border: none;
    background: none;
    font-size: 14px;
    outline:none;
`
```
/components/header/style.js

``` javascript
import React, { PureComponent } from 'react'
import {
    HeaderWrapper,
    Mask,
    ClassMenuLink,
    ClassMenuImg,
    SearchBar,
    SearchInput
} from './style';
class Header extends PureComponent {
    render() {
        return (<HeaderWrapper>
            <Mask></Mask>
            <ClassMenuLink>
                <ClassMenuImg></ClassMenuImg>
            </ClassMenuLink>
            <SearchBar className="head_icon hd_search">
                <SearchInput></SearchInput>
            </SearchBar>
        </HeaderWrapper>);
    }
}

export default Header;
```
# footer组件布局
路径：src/components/footer

新增文件：
- index.js：用于页面布局
- style.js：页面样式，使用"styled-components"模块进行布局处理。

/components/footer/index.js
```javascript
import styled from 'styled-components';
import footerIcon from '../../assets/img/footer_nav.png'
export const FooterWrapper = styled.div`
    background: #ffffff;
    border-top: 1px solid #ccc;
    height: 55px;
    position: fixed;
    bottom: 0;
    max-width: 750px;
    min-width: 320px;
    width: 100%;
    font-size: 0;
    z-index: 11;
    transform: translateX(-50%);
    left: 50%;
`
export const ItemContainer = styled.ul`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
`

export const Item = styled.li`
    width: 25%;
    display: inline-block;
    position: relative;
    float: left;
    /* 元素内部元素上的样式 */
    .link_duwu::after{
        background-position: 0 -100px;
    }
`

export const ItemLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    vertical-align: text-bottom;
    font-size: 14px;
    padding: 31px 0 3px;
    text-decoration: none;
    cursor: pointer;
    color: #888;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    &::after{
        content: "";
        background: url(${footerIcon});
        background-size: 20px auto;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        top: 6px;
        left: 50%;
        margin-left: -10px;
    }
    &.link_home::after{
        background-position: 0 0px;
    }

    &.link_cart::after{
        background-position: 0 -120px;
    }

    &.link_mine::after{
        background-position: 0 -140px;
    }
`

export const CartQuantity = styled.i`
    background: #ff7c7c;
    font-size: 10px;
    padding: 0 5px;
    border-radius: 8px;
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: 4px;
    font-style: normal;
    color: #fff;
`
```
/components/footer/index.js
```javascript
import React, { PureComponent } from 'react'
import {
    FooterWrapper,
    ItemContainer,
    Item,
    ItemLink,
    CartQuantity
} from './style';
class Footer extends PureComponent {
    render() {
        return (
            <FooterWrapper>
                <ItemContainer>
                    <Item>
                        <ItemLink className="link_home">首页</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink className="link_duwu">毒物</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink className="link_cart">购物车</ItemLink>
                        <CartQuantity>0</CartQuantity>
                    </Item>
                    <Item>
                        <ItemLink className="link_mine">我的</ItemLink>
                    </Item>
                </ItemContainer>
            </FooterWrapper>
        );
    }
}

export default Footer;
```


# 使用iconfont.cn
1. 从iconfont.cn中下载需要的图标到本地（红框中的为项目中需要使用到的文件）
-  ![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180928143924004-1701288675.png)
2. 嵌入react项目中
- ![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180928155024427-378426499.png)

3. 修改文件后缀： iconfont.css -> iconfont.js 
4. 修改iconfont.js中内容，使用styled-components
- 使用unicode
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180928155706017-714559447.png)
组件中使用：
```javascript
导入：import  from './assets/icon/iconfont.js'
使用：<i class="iconfont">& #xe67c;</i>  //中间空格去掉
```
- 使用fontClass
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180928175857212-868804250.png)
组件中司用：
```javascript
导入：import{CartIcon} from './assets/icon/iconfont.js'
使用：<CartIcon></CartIcon>
```

# 使用 react-router-dom 进行页面路由
>文档：https://reacttraining.com/react-router/web/guides/basic-components
## 安装：
```javascript
npm install --save react-router-dom
```

## 使用：
App.js
```javascript
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Header></Header>

            <Route path="/" exact component={Index}></Route>
            <Route path="/Duwu" exact component={Duwu}></Route>
            <Route path="/Cart" exact component={Cart}></Route>
            <Route path="/Mine" exact component={Mine}></Route>
            <Route path="/Detail" exact component={Detail}></Route>

            <Footer />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
```
> 需要注意，Fragment标签需要有一个根节点
> 
> Route所用与的属性：path，exact，render，component等。

在styled-components中，使用Link模块
/components/footer/style.js
```javascript
import {Link} from 'react-router-dom';
export const ItemLink = styled(Link).attrs({
    to:props=>props.to  //从外部获取标签上 to 元素属性的方法
})`
    /*其他样式*/
`
```

## 页面使用：
通过 \<Link\>标签进行路由跳转
> Link所用到的属性：to。

这里使用在 styled-components声明的标签 ItemLink  （此时即为Link）
```javascript
<ItemLink className="link_cart" to="/cart">购物车</ItemLink>
```

## 标签切换时的当前状态变化


# 首页内容渲染
涉及知识点：
- axios 使用
- 在测试环境，可以直接在public文件夹下新建一个api文件夹，将一些mock数据放到里面
- dangerouslySetInnerHTML
  
封装的axios（beta）
```javascript
import qs from 'qs'
import axios from 'axios'

/**
 * axios请求拦截器
 * @param {object} config axios请求配置对象
 * @return {object} 请求成功或失败时返回的配置对象或者promise error对象
 **/
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * axios 响应拦截器
 * @param {object} response 从服务端响应的数据对象或者error对象
 * @return {object} 响应成功或失败时返回的响应对象或者promise error对象
 **/
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error)
})

/**
 * 请求发出后检查返回的状态码,统一捕获正确和错误的状态码，正确就直接返回response,错误就自定义一个返回对象
 * @param {object} response 响应对象
 * @return {object} 响应正常就返回响应数据否则返回错误信息
 **/
function checkStatus (response) {
  // 如果状态码正常就直接返回数据,这里的状态码是htttp响应状态码有400，500等，不是后端自定义的状态码
  if (response && ((response.status === 200 || response.status === 304 || response.status === 400))) {
    return response.data // 直接返回http response响应的data,此data会后端返回的数据数据对象，包含后端自定义的code,message,data属性
  }
  return { // 自定义网络异常对象
    code: '404',
    message: '网络异常'
  }
}

/**
 * 检查完状态码后需要检查后如果成功了就需要检查后端的状态码处理网络正常时后台语言返回的响应
 * @param {object} res 是后台返回的对象或者自定义的网络异常对象，不是http 响应对象
 * @return {object} 返回后台传过来的数据对象，包含code,message,data等属性，
 **/
// function checkCode (res) {
//   // 如果状态码正常就直接返回数据
//   console.log(res)
//   if (res.code === -404) { // 这里包括网络异常，服务器异常等这种异常跟业务无关，直接弹窗警告
//     alert(res.message)
//     return {code: '', message: '网络错误'}
//   } else { // 除了上面的异常就剩下后端自己返回的状态code了这个直接返回出去供调用时根据不同的code做不同的处理
//     return res
//   }
// }

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: process.env.BASE_URL,
      url: url,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      timeout: 10000
    }).then((res) => {
      return checkStatus(res)
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: process.env.BASE_URL,
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }

}
```

/pages/index.js
```javascript
import React,{Component} from 'react';
import http from '../../service/api';

class Index extends Component{
    state = {
        content : "Index page"
    }
    render(){
        return <div style={{width:"600px", margin:"50% auto"}} dangerouslySetInnerHTML={{__html:this.state.content}}>
        </div>
    }

    componentDidMount(){
        http.get("/api/feature.json").then(ent=>{
            this.setState(()=>{
                return {
                    content:ent.data
                }
            })
        });
    }
}

export default Index;
```

# GoToTop
/components/goToTop/index.js
```javascript
import React,{PureComponent} from 'react';

class GoToTop extends PureComponent{
    render(){
        return null;
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }
}

export default GoToTop;
```
>使用方法：直接当组件一样，在需要的页面中进行加载即可。

# scrollRestoration
- 通过 sessionStorage 来记录位置
- 无法通过组件的形式来进行实现（∵部分页面是后渲染---即页面加载完成之后再去请求获取模板数据进行渲染）
/common/utility.js
```javascript
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

```
页面使用：
>需要注意的是，这里需要使用setState异步函数形式下的回调函数
```javascript
    componentDidMount(){
        http.get("/api/feature.json").then(ent=>{
            this.setState(()=>{
                return {
                    content:ent.data
                }
            }, ()=>autoWindowScroll(this.props.location.pathname))
        });
    }
    componentWillUnmount(){
        setWindowScrollToSession(this.props.location.pathname);
    }
```


# 组件之间的数据传递：
一般情况下，组件之间的数据传递是通过 props 进行，那么如果现在有子组件A被嵌套很深，但该子组件A的一些父组件可能并不会用到子组件A所需要的一些属性，但是因为嵌套了子组件A，他们不得不对外索要这些子组件所需要的属性，如下：

//////////////////////////////////////////////


# redux 

## 为什么要用redux？
react的数据传递是单向的：

![](http://pic.zhuliang.ltd/14a288ea-7104-4afb-b3dd-53832a3d753f.gif)

>通过props属性进行数据的传递


非父子组件之间共享 state

![](http://pic.zhuliang.ltd//61f0b857-ff20-447e-a854-b4047f3c6c20.gif)


使用redux之后：数据传递不再是单向、线性的，所有组件的数据都会放到 Store 中，直接下放到对应需要更新的组件中。

![](http://pic.zhuliang.ltd//fa9a3b6a-31be-4011-a87a-fb11a19b979f.gif)

## redux 介绍：
redux= reducer + flux
redux是一个数据层框架。其设计理念：所有的数据放在 store 里管理,一个组件改变了store中的内容,其他组件就会感知到store的这个变化,从而直接从store中获取数据来进行更新。

## redux 工作流：
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180925141104597-2088633436.png)

## 使用 react-redux来简化
项目地址：https://github.com/reduxjs/react-redux
### 使用步骤：
1. 安装
```shell
npm install --save react-redux
```
2. 在项目根目录下创建store文件夹，并在其内创建reducer.js，index.jS
   
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180926160444487-702449478.png)

/store/reducer.js
```javascript
import {fromJS} from 'immutable';

const defaultState = {
    showHeader:true,
    showFooter:true
}

export default (state = defaultState, action)=>{
    return state;
}
```

/store/index.js
```javascript
import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());
export default store;
```

3. 在入口文件中引入 Provider组件，作为顶层App的分发点，在相关的页面组件中使用connect进行组件跟redux的store进行连接。
/index.js
```javascript
import { Provider } from 'react-redux';
import store from './store/index.js';
const container = (
    <Provider store={store}>
        <Wrapper><App /></Wrapper>
    </Provider>
)
ReactDOM.render(container, document.getElementById('root'));
```
components/自定义组件/index.js
```javascript
import {connect} from 'react-redux';
...
class Header extends Component {
    render() {
        ...
    }
}
...
export default connect(null,null)(Header);
```

# 重构Header，将store放到组件自身内部中
## 操作步骤：
1. 在Header组件文件夹中，创建store文件夹，并在其内创建 index.js，reducer.js，actionCreators.js，actionTypes.js等
2. 调整根目录/store/reducer.js
```javascript
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../components/header/store';
export default combineReducers({
    header: headerReducer
});
```

# 搜索页面
