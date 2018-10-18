import React from 'react'

export const style={
    colorRed:"red",
    colorYellow:"yellow",
    colorDefault:"blue"
}

export const ThemeButtonContext = React.createContext(style.colorDefault);