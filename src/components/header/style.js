import styled from 'styled-components';
import headIcon from '../../assets/img/icon_head.png';
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
export const HeaderLink = styled.a`
    position: absolute;
    top: 50%;
    left: 10px;
    width: 31px;
    margin-top: -16px;
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: #888;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
`

export const CategoryIcon = styled.img.attrs({
    src:"https://pic.keede.com//app/images/Community/Index/classmenu.png"
})`
    border: none;
    vertical-align: middle;
    width: 31px;
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
    display: inline-block;
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
    background-image: url(${headIcon});
}
`

export const SearchInput = styled.input.attrs({
    placeholder:"请输入你要的商品"
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
