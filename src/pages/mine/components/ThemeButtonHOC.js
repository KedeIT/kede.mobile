import { ThemeButtonContext } from '../context/ThemeButtonContext';

export function ThemeButtonHOC(Component) {
    return function ThemeButtonComponent(props) {
        return (
            <ThemeButtonContext.Consumer>
                {
                    (importedValue) => <Component {...props} importedValue={importedValue}></Component>
                }
            </ThemeButtonContext.Consumer>
        )
    }
}