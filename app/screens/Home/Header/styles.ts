import { MagnifyingGlass } from "phosphor-react-native"
import styled from "styled-components/native"
export const HomeHeaderContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    height: 18%;
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
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 6px;
    padding: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100}; 

`

export const HomeSearchButton = styled.TouchableOpacity`
    width: 54px;
    padding: 8px;
    background: ${({ theme }) => theme.COLORS.BEIGE_600}; 
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const HomeTextWhite = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 22px;
    text-transform: uppercase;
`


export const CreateNewReciepe = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.RED_700};
    height: 60px;
    width: 100%;
    border-radius: 6px;
    margin-bottom: -59px; 
    
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    gap: 16px;
`