# 概述：
- 本次培训内容基于 kede.mobile 项目，版本：[tag/v1.0](https://github.com/KedeIT/kede.mobile/tree/tag/v1.0)
- 本次培训内容最终会合并至kede.mobile的master分支，并且打标为：[tag/v2.0](https://github.com/KedeIT/kede.mobile/tree/tag/v2.0)
- kede.mobile项目：git tag版本说明：
    - v1.0：kede.mobile培训内容，components组件库包含在项目中
    - v2.0：kede.mobile培训内容，components组件库作为独立的package存在，kede.mobile安装该组件库
- demo-react-ui项目的git地址：[demo-react-ui in git](https://github.com/KedeIT/demo-react-ui)
- demo-react-ui组件库的npm package放在公司内网中：地址：http://192.168.117.183:4873/#/detail/demo-react-ui
# 如何制作包？
## 通过使用 create-react-library 创建组件库
>create-react-library项目地址：[create-react-library in github](https://github.com/transitive-bullshit/create-react-library)
>
1. 安装：create-react-library
``` javascript
npm install -g create-react-library
```
2. 通过create-react-library创建组件lib
- 首先 cd 到对应的目录
- 执行：
``` javascript
create-react-library
```
- 之后根据问答式提示进行创建包文件，如：
![cc756c40-7e9d-4437-81ac-c17886075916.png](http://pic.zhuliang.ltd/cc756c40-7e9d-4437-81ac-c17886075916.png)
>tips：安装模板的时候会从npm源下载一些文件，建议先将npm的registry切到国内，如淘宝源等。

生成后目录结构：
/

![807fa51f-a736-42ad-a600-5c70b5045f6d.png](http://pic.zhuliang.ltd/807fa51f-a736-42ad-a600-5c70b5045f6d.png)

其中：

- /dist：发布组件到npm的时候，会将生成到此文件夹中的文件发布上去（即包的内容） 

- /src：我们自定义的ui组件源码放在该目录下

![cd68fc76-8a1b-46f2-a351-2c3e5abb24a9.png](http://pic.zhuliang.ltd/cd68fc76-8a1b-46f2-a351-2c3e5abb24a9.png)

- /example：主要用于测试我们编写的组件

![d294c2d5-01fd-416f-b208-174d2f8184bc.png](http://pic.zhuliang.ltd/d294c2d5-01fd-416f-b208-174d2f8184bc.png)

## 添加ui组件源码
将 kede.mobile 项目中的 assets，components文件夹及其中的内容复制到 src 文件夹内，如：

![3515dec6-fab1-4e60-aa8c-d7a9a27231f7.png](http://pic.zhuliang.ltd/3515dec6-fab1-4e60-aa8c-d7a9a27231f7.png)
- 其中 /src/index.js作为当前组件的入口函数，其内容为：

```javascript
/*      /src/index.js     */
import Header from './Header';
import Footer from './Footer';
import GoToTop from './GoToTop';

export { Header, Footer, GoToTop };
```
## 安装必要的模块
> 本次需要安装的模块有： styled-components、react-router-dom
```javascript
/*为防止冲突，这里安装模块的时候使用 -D 选项，同时修改package.json，将 styled-components，react-router-dom添加到 peerDependencies中 */
npm install -D styled-components react-router-dom
```
```javascript
/* package.json  代码片段*/

"peerDependencies": {
    /*其他模块信息*/
 
"styled-components": "^4.1.1",
"react-router-dom": "^4.3.1"
},
"devDependencies": {

      /*其他模块信息*/
  
"styled-components": "^4.1.1",
"react-router-dom": "^4.3.1"
}
```

## 发布前的测试
>调整 /example中的项目，以可以显示安装的ui组件，对于本次培训，直接调整/example/src/index.js即可：
```javascript
    /*  example/src/index.js  */
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import App from './App'
const container = (
    <Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Fragment>
)
ReactDOM.render(container, document.getElementById('root'))
```
- 测试：
```javascript
/*
需要启动两个项目：
    1.在根目录下：npm start：这里主要是为了能够监听文件的变化，以可以实时打包编译至dist文件夹中
    2.cd到example文件夹：npm start：这里就是启动一个dev-server，用于测试
*/
//在项目根目录下：
npm start
//定位到example文件夹
cd example
npm start
```

# 如何上传包？
> 公司内部私有库地址：http://192.168.117.183:4873/
> 基于 verdaccio：一个轻量级的私有代理npm库
## 通过添加一个registry
>不强制，只是个人习惯而已，大家有其他好的方法的，记得分享 ：）
- 这里通过 nrm 来添加 registry
```javascript
nrm add kede http://192.168.117.183:4873/

测试：
nrm test kede

将npm的当前registry切换至kede
nrm use kede
```
> **P.S.：** 目前，在 verdaccio 配置中，uplink已经设置为 taobao 源，但测试下来，虽然已经设置了上游信息，在安装非内部包的时候依然会出现一些莫名错误。建议：在安装非内部pakcage的时候，切换到 taobao 源进行安装。


**以下步骤均在 kede 源下进行：$nrm use kede**

## 注册：
```javascript
npm adduser
//之后根据提示进行注册
```
## 登陆：
```javascript
npm login
//之后根据提示进行注册
```
## 发布：
```javascript
npm publish
```
## 取消发布：
```javascript
npm unpublish <package_name>@<version_no>
```

# 在kede.mobile中使用该package
## 安装 demo-react-ui：
```javascript
nrm use kede
npm install --save demo-react-ui
```

## 删除项目中的components文件夹

## 调整引用：
```javascript
/*  src\App.js */

// import Header from './components/header';
// import Footer from './components/footer';
import {Header, Footer} from 'demo-react-ui';
```

```javascript
/*  src\pages\cart\index.js */

// import GoToTop from '../../components/goToTop';
import {GoToTop} from 'demo-react-ui';
```