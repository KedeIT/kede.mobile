import styled from 'styled-components';
import footerIcon from '../../assets/img/footer_nav.png'
import {Link} from 'react-router-dom';
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

export const ItemLink = styled(Link)`
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