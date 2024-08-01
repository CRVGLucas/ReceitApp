import styled from "styled-components/native";

export const CardContainer = styled.View`
    height: 248px;
    width: 160px;
    border-radius: 6px;
    padding: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    background: ${({theme}) => theme.COLORS.WHITE};
    margin-right: 5px;
`

export const CardImage = styled.Image`
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 6px;
`

export const CardTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_900};
    font-size: ${({theme}) => theme.FONT_SIZE.L};
    text-align: center;
    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
`

export const CardSubTitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    text-align: center;
`

export const CardButtonOptionsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonDetails = styled.TouchableOpacity`
    width: 40px;
    padding:8px;
    align-self: flex-end;
    align-items: center;
    background: ${({theme}) => theme.COLORS.GRAY_900};
    margin-top: 10px;
    border-radius: 4px;
`

export const ButtonFavorite = styled.TouchableOpacity`
    width: 40px;
    padding:8px;
    align-self: flex-end;
    align-items: center;
    background: ${({theme}) => theme.COLORS.RED_400};
    margin-top: 10px;
    border-radius: 4px;
`

export const TextWhite = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE}
`