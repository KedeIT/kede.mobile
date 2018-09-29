import React, { PureComponent } from 'react'
import {
    FooterWrapper,
    ItemContainer,
    Item,
    ItemLink,
    CartQuantity
} from './style';
class Footer extends PureComponent {
    // state = {
    //     menuList:[
    //         {
    //             index:0,
    //             name:"首页",
    //             link:"/",
    //             className:"link_home"
    //         },
    //         {
    //             index:1,
    //             name:"毒物",
    //             link:"/duwu",
    //             className:"link_duwu"
    //         },
    //         {
    //             index:2,
    //             name:"购物车",
    //             link:"/cart",
    //             className:"link_cart"
    //         },
    //         {
    //             index:3,
    //             name:"我的",
    //             link:"/mine",
    //             className:"link_mine"
    //         }
    //     ]
    // }
    render() {
        return (
            <FooterWrapper>
                <ItemContainer>
                    <Item>
                        <ItemLink to="/" className="link_home">首页</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink to="/duwu" className="link_duwu">毒物</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink to="/cart" className="link_cart">购物车</ItemLink>
                        <CartQuantity>0</CartQuantity>
                    </Item>
                    <Item>
                        <ItemLink to="/mine" className="link_mine">我的</ItemLink>
                    </Item>
                    {/* {this.state.menuList.map(ent=>{
                        return (
                            <Item>
                            <ItemLink to={ent.link} className={ent.className}>{ent.name}</ItemLink>
                        </Item>
                        )
                    })} */}
                </ItemContainer>
            </FooterWrapper>

        )
    }
}

export default Footer;