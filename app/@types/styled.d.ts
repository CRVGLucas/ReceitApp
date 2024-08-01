import themes from "../themes";
import 'styled-components/native';
declare module 'styled-components' {
    type ThemeType = typeof themes
    export interface DefaultTheme  extends ThemeType {}
}