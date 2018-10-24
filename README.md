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
![](http://pic.zhuliang.ltd/ac66c00d-a6df-4642-a9c6-0de546d388c9.png)
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
-  ![](http://pic.zhuliang.ltd/1101407-20180928143924004-1701288675.png)
2. 嵌入react项目中
- ![](http://pic.zhuliang.ltd/1101407-20180928155024427-378426499.png)

3. 修改文件后缀： iconfont.css -> iconfont.js 
4. 修改iconfont.js中内容，使用styled-components
- 使用unicode
![](http://pic.zhuliang.ltd/1101407-20180928155706017-714559447.png)
组件中使用：
```javascript
导入：import  from './assets/icon/iconfont.js'
使用：<i class="iconfont">& #xe67c;</i>  //中间空格去掉
```
- 使用fontClass
![](http://pic.zhuliang.ltd/1101407-20180928175857212-868804250.png)
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

![b864d260-bbf6-a4cd-009c-07701cc6951f.png](http://pic.zhuliang.ltd/b864d260-bbf6-a4cd-009c-07701cc6951f.png)

在上图中，假设子组件A需要用到App.js中state中的某个属性值A，那么这个时候，虽然Tool.js，Head.js都用不到属性值A，但他们必须分别对父级提供props.A 属性，以此来将A属性传递给子组件A。

那么有没有什么办法可以简化这个操作？通过：context。

举例：有如下文件结构：

![b5f84f92-2e48-450c-aed8-263552947a12.png](http://pic.zhuliang.ltd/b5f84f92-2e48-450c-aed8-263552947a12.png)

需要通过index.js中的按钮来控制OrderItem.js中的文本颜色：引用上：index.js中嵌套OrderList.js，OrderList.js中嵌套OrderItem.js，在正常单项数据流的情况下，虽然最终只是OrderItem用到了由index.js传递的属性（itemColor），但因为index.js并非直接引用 OrderItem.js，所以作为中间者的OrderList.js不得不对index.js提供 props.itemColor，从而再将该值传递给OrderItem.js中的props.itemColor。代码如下：

index.js
```javascript
	import OrderList from './components/OrderList';
    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                <div>Mine page</div>
                <OrderList 
                    orderList={this.state.orderList} 
                    itemColor={this.state.currentColor}>
                </OrderList>
                <button onClick={() => this.toggleColor()}>toggleColor</button>
            </div>);
    }
```

orderList.js
```javascript
	import OrderItem from './OrderItem';
	export default (props) => {
		return (
			<OrderListWrapper>
				<OrderTitle>订单信息：</OrderTitle>
				{props.orderList.map((item, index) => {
                    return (<OrderItem 
                            key={index} 
                            item={item} 
                            itemColor={props.itemColor}>
                        </OrderItem>)
				})}
			</OrderListWrapper>
		)
	}
```

orderItem.js
```javascript
	export default (props)=>{
    return (
			<OrderItem color={props.itemColor}>
				{props.item.title}
			</OrderItem>
		)
	}
```

## 使用react的context来改写上面的例子：

在src目录下增加context文件夹：

![46fd1f50-b17c-47ac-aa45-773e4261b926.png](http://pic.zhuliang.ltd/46fd1f50-b17c-47ac-aa45-773e4261b926.png)

context/orderItemContext.js
```javascript
import React from 'react';

export const style = {
    colorRed: "red",
    colorBlue: "blue"
}

export default React.createContext(style.colorRed);
```

pages/mine/index.js
```javascript
import React, { Component } from 'react'
import OrderList from './components/OrderList';

import OrderItemContext, { style } from '../../context/orderItemContext';
class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: [
                {
                    title: "博士伦隐形眼镜",
                    price: 23
                },
                {
                    title: "海昌隐形眼镜",
                    price: 33
                },
                {
                    title: "依视路镜片",
                    price: 43
                }
            ],
            currentColor: style.colorRed
        }
    }

    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                <div>Mine page</div>

                <OrderItemContext.Provider value={this.state.currentColor}>
                    <OrderList orderList={this.state.orderList} ></OrderList>
                </OrderItemContext.Provider>
                <button onClick={() => this.toggleColor()}>toggleColor</button>
            </div>);
    }

    toggleColor = () => {
        if (this.state.currentColor === style.colorRed) {
            this.setState({
                currentColor: style.colorBlue
            });
        } else {
            this.setState(() => ({
                currentColor: style.colorRed
            }));
        }
    }

}

export default Mine;
```

pages/mine/components/OrderList.js
```javascript
import React from 'react';
import {
    OrderListWrapper,
    OrderTitle
} from '../style';
import OrderItem from './OrderItem';
export default (props) => {
    return (
        <OrderListWrapper>
            <OrderTitle>订单信息：</OrderTitle>
            {props.orderList.map((item, index) => {
                return <OrderItem key={index} item={item} ></OrderItem>
            })}
        </OrderListWrapper>
    )
}
```

pages/mine/components/OrderItem.js
```javascript
import React from 'react';
import OrderItemContext from '../../../context/orderItemContext';
import {
    OrderItem
} from '../style';
export default (props) => {
    return (
        <OrderItemContext.Consumer>
            {
                importedValue => {
                    return (
                        <OrderItem color={importedValue}>
                            {props.item.title}
                        </OrderItem>
                    )
                }
            }
        </OrderItemContext.Consumer>
    )
}
```

- 通过React的Context，OrderItem.js中原先用到的props.currentColor，直接通过OrderItemContext.Consumer来获取。而数据则直接由index.js中的OrderItemContext.Provider来提供。原先作为中间者的OrderList.js则不再无谓传输props.itemColor
- 关于React的上下文：
    - 创建上下文：let MyContext = React.createContext([defaultValue])
        - 它有一个默认值，关于这个默认值，仅在Consumer往上查找，找不到Provider的时候才会触发（而非Provider组件的value属性为null/undefined时触发）
    - 提供数据：通过使用MyContext.Provider来限定上下文的范围，通过 value属性来传递值。
    - 获取/使用苏剧：通过使用MyContext.Consumer来限定上下文使用的范围，在写法上需要注意下，children部分以代码段开始。
    - 更多关于上下文见此：https://reactjs.org/docs/context.html

## 使用 react-redux 来传递数据
### 使用步骤：
1. 安装
    ```shell
    npm install --save react-redux

    同时也需要安装 redux 模块：
    npm install --save redux
    ```
2. 在项目根目录下创建store文件夹，并在其内创建reducer.js，index.jS
   
    ![](http://pic.zhuliang.ltd/1101407-20180926160444487-702449478.png)

    /store/reducer.js
    ```javascript
    const defaultState = {
        ...
    }

    export default (state = defaultState, action) => {
        switch (action.type) {
            ...
            default:
                return state;
        }
    }
    ```

    /store/index.js
    ```javascript
    import { createStore } from 'redux';
    import reducer from './reducer';

    const store = createStore(reducer)

    export default store;
    ```

3. 在入口文件中引入 Provider组件，作为顶层App的分发点，在相关的页面组件中使用connect进行组件跟redux的store进行连接。
    /index.js
    ```javascript
    import { Provider } from 'react-redux';
    import store from './store';
    const container = (
        <Provider store={store}>
            <Wrapper>
                <App />
            </Wrapper>
        </Provider>
    )
    ReactDOM.render(container, document.getElementById('root'));
    ```

4. components/自定义组件/index.js
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

### 例子：使用 react-redux 实现点击按钮时互换上方title和content的文字颜色：
![9b306fb8-e888-4d8f-a4f0-1524d83bac00.gif](http://pic.zhuliang.ltd/9b306fb8-e888-4d8f-a4f0-1524d83bac00.gif)

/store/reducer.js
```javascript
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
        case "reverseColor":
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
```

/store/index.js
```javascript
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer)

export default store;
```

/pages/duwu/index.js
```javascript
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Duwu extends PureComponent {
    render() {
        const { title, content, reverseColor } = this.props;
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Duwu page
                <Link to="/cart">跳转到购物车</Link>
                <br></br>
                <br></br>
                <br></br>
                <div style={{ color: title.color, }}>{title.text}</div>
                <div style={{ color: content.color }}>{content.text}</div>
                <button onClick={()=>reverseColor()}>反转颜色</button>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        content: state.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reverseColor() {
            console.log(111)
            let action = {
                type: "reverseColor",
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Duwu);
```


# redux 

## 为什么要用redux？
react的数据传递是单向的：

![](http://pic.zhuliang.ltd/14a288ea-7104-4afb-b3dd-53832a3d753f.gif)

>通过props属性进行数据的传递


非父子组件之间共享 state

![](http://pic.zhuliang.ltd/61f0b857-ff20-447e-a854-b4047f3c6c20.gif)


使用redux之后：数据传递不再是单向、线性的，所有组件的数据都会放到 Store 中，直接下放到对应需要更新的组件中。

![](http://pic.zhuliang.ltd/fa9a3b6a-31be-4011-a87a-fb11a19b979f.gif)

## redux 简介：
redux= reducer + flux

redux是一个数据层框架(跟flux一样，可能看成是一个"模式"更为妥当)。其设计理念：所有的数据放在 store 里管理,一个组件改变了store中的内容,其他组件就会感知到store的这个变化,从而直接从store中获取数据来进行更新。

## redux 工作流：
![](http://pic.zhuliang.ltd/1101407-20180925141104597-2088633436.png)

## 使用 react-redux来简化
项目地址：https://github.com/reduxjs/react-redux

>react-redux 是一个模块（或者说是一个库：一个将 redux 模式跟 react.js相结合的一个库）（也可以认为是 redux 在 react.js 中的体现）

# 如何进一步优化使用：react-redux
## 将抽离 action.types，将 action 的生成放到一个独立的文件中，进一步从页面中剥离出业务。
1. 在 /store 文件夹中新增 actionTypes.js，actionCreators.js
   
   ![1ad8708a-76f0-43d4-ba98-ff1e6a19643f.png](http://pic.zhuliang.ltd/1ad8708a-76f0-43d4-ba98-ff1e6a19643f.png)

   actionTypes.js
    ```javascript
    export const REVERSE_COLOR = "DUWU/REVERSE_COLOR"
    ```
    actionCreators.js
    ```javascript
    import { REVERSE_COLOR } from './actionTypes';

    export const GetReverseColorAction = ()=>{
        return {
            type:REVERSE_COLOR
        }
    }
    ```
2. 调整原 reducer.js 和 /pages/duwu/index.js代码
   
    /store/reducer.js
    ```javascript
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
            case REVERSE_COLOR: //统一从actionTypes中获取
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
    ```
    /pages/duwu/index.js
    ```javascript
    import { REVERSE_COLOR } from './actionTypes';

    export const GetReverseColorAction = {
        type:REVERSE_COLOR
    }
    ```

## immutable.js
为什么要用immutable.js？
- 在reducer.js中，无法对state直接做修改，只能返回一个新的对象用来更新state，如果是基于原始state的修改，那么只能对他进行深拷贝后进行修改，再进行返回。
- 通过使用 immutable.js，就可以省略深拷贝这一步，因为任何对于 immutable对象的修改，最终都会返回一个新的immutable对象。
### 使用 immutable
安装：

```javascript
npm install immutable
```

在reducer.js中引入 immutable，将原先的state对象转换为immutable类型

```javascript
import { REVERSE_COLOR } from './actionTypes';
import { fromJS } from 'immutable'; //引入 immutable的 fromJS 模块
//fromJS()：将一个map对象转换成 immutable 对象
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
                //使用getIn()以层级的关系获取数据
                let currentTitleColor = state.getIn(["title","color"]);
                let currentContentColor = state.getIn(["content","color"]);
                //使用setIn()以层级的方式来设置属性
                return state
                        .setIn(["title","color"],currentContentColor)
                        .setIn(["content","color"],currentTitleColor)
            }
        default:
            return state;
    }
}
```

调整使用的地方：/pages/duwu/index.js

```javascript
const mapStateToProps = (state) => {
    return {
        //使用get来获取属性，使用 toJS()将immutable对象转换成js对象
        title: state.get("title").toJS(),
        content: state.get("content").toJS()
    }
}
```

## 进一步抽离store文件夹到每一个独立的pages页面中
### 调整项目结构
- 在 /pages/duwu 文件夹中新建 store 文件夹
- 将原 /store 目录下的 actionCreators.js，actionTypes.js 移动至 /pages/duwu/store中
- 将原 /store 目录下的 reducer.js 复制一份到 /pages/duwu/store 中
- 在 /pages/duwu/store 中新建一个 index.js
  
**调整后的最终目录结构为：**
    
![14a2224c-a26e-44a7-bf2b-ff85e1c5fe05.png](http://pic.zhuliang.ltd/14a2224c-a26e-44a7-bf2b-ff85e1c5fe05.png)

其中:
- /pages/duwu/store 文件夹中的 actionCreators.js，actionTypes.js，reducer.js 代码保持不变。

- /pages/duwu/store/index.js：仅作为对外暴露的入口
    ```javascript
    import reducer from './reducer';
    import * as actionCreators from './actionCreators';
    import * as actionTypes from './actionTypes';

    export { reducer, actionCreators, actionTypes};
    ```
- /store/index.js：保持不变
- /store/reducer.js：引入 combineReducers 模块 来连接不同页面、组件的 store
    ```javascript
    import { combineReducers } from 'redux';
    import { reducer as duwuReducer } from '../pages/duwu/store';

    export default combineReducers({
        duwu: duwuReducer  // "标记A"
    });
    ```
- /pages/duwu/index：调整原先获取数据的地方
    ```javascript
    /*
        注意：原先是直接 state.get() 来获取数据
        使用 combineReducers 之后，state的结构有所变化，需要加上在 /store/reducer.js 中定义 key，如在上面(/sotre/reducer.js)标识的"标记A" 处的 key值
    */
    const mapStateToProps = (state) => {
        return {
            //获取值的时候，需要加上 duwu 这个 js 对象，之后在 duwu 这个对象上来进行数据的获取。
            title: state.duwu.get("title").toJS(),
            content: state.duwu.get("content").toJS()
        }
    }
    ```

## 统一格式，让在页面中使用 state.duwu 也是一个 immutable对象
- 通过使用 redux-immutable来实现。

- 安装：
    ```javascript
    npm install redux-immutable
    ```

- 调整 /store/reducer.js
    ```javascript
    import { combineReducers } from 'redux-immutable'; //原先从 redux 模块获取改成从 redux-immutable获取
    import { reducer as duwuReducer } from '../pages/duwu/store';

    export default combineReducers({
        duwu: duwuReducer
    });
    ```
- 调整 /pages/duwu/index.jS
    ```javascript
    const mapStateToProps = (state) => {
        return {
            // title: state.duwu.get("title").toJS(),
            // content: state.duwu.get("content").toJS()
            //调整后，duwu也是一个immutable对象了，获取值的方式需做调整，如下
            title: state.getIn(["duwu","title"]).toJS(),
            content: state.getIn(["duwu","content"]).toJS()
        }
    }
    ```

## 使用 redux-thunk：进一步从页面中抽离业务方法

## chrome插件：redux的安装和配置及使用