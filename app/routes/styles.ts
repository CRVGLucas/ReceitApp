import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const WhiteIcon = styled(CaretLeft).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_900,
    size: 28
}))`
    
`
export const BackButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 25px;
`

