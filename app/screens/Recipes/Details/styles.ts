import styled from "styled-components/native";

export const RecipeDetailsContainer = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.BEIGE_500};
`

export const RecipeImage = styled.Image`
    width: 100%;
    height: 50%;
    object-fit: cover;
`

export const RecipeTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    font-weight: bold;
    text-align: center;
    padding: 5px;
`
export const RecipeSubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-weight: bold;
    text-align: center;
    font-style: italic;
    padding: 5px;
`

export const RecipeTertiaryTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.L};
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.RED_400};
`

export const RecipeDescription = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    text-align: justify;
    padding: 10px;
`
export const ButtonFavorite = styled.TouchableOpacity`
    padding: 10px;
    height: 50px;
    width: 50px;
    background: rgba(21,21,21,0.2);
    position: fixed;
    top: 5px;
    right: 1px;
    z-index: 999;
`
