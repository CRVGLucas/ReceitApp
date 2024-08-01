import { MagnifyingGlass } from "phosphor-react-native"
import styled from "styled-components/native"
export const HomeHeaderContainer = styled.View`
    background-color: #151515;
    height: 25%;
    padding: 12px;
    align-items: center;
    justify-content: space-evenly;
`
export const HomeFormContainer = styled.View`
    flex-direction: row;
    gap: 8px;
`

export const HomeSearchInput = styled.TextInput.attrs(({theme }) => ({
        placeholderTextColor: theme.COLORS?.GRAY_100
}))`
    flex: 1;
    /* border: 1px solid #EEEEEE; */
    border-radius: 6px;
    padding: 8px;
    /* color: #EEEEEE; */

`

export const HomeSearchButton = styled.TouchableOpacity`
    width: 54px;
    padding: 8px;
    /* background: #EAD196; */
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const HomeTextWhite = styled.Text`
    /* color: #EEEEEE; */
    font-size: 22px;
    text-transform: uppercase;
`


export const CreateNewReciepe = styled.TouchableOpacity`
    /* background: #7D0A0A; */
    height: 80px;
    width: 100%;
    border-radius: 6px;
    margin-bottom: -95px; 
    
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    gap: 16px;
`