import React, { PureComponent } from 'react'
import {
    HeaderWrapper,
    Mask,
    HeaderLink,
    CategoryIcon,
    SearchBar,
    SearchInput
} from './style';
class Header extends PureComponent {

    render() {
        return (
            <HeaderWrapper>
                <Mask></Mask>
                <HeaderLink>
                    <CategoryIcon></CategoryIcon>
                </HeaderLink>
                <SearchBar className="head_icon">
                    <SearchInput></SearchInput>
                </SearchBar>
            </HeaderWrapper>
        )
    }
}

export default Header;