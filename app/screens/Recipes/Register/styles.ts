import styled from "styled-components/native";

export const RegisterContainer = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.BEIGE_500};
    padding: 10px;
    align-items: center;
    justify-content: center;
    gap: 19px;
`
const BaseInput = styled.TextInput`
    width: 100%;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_900};
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    border-radius: 7px;
    font-weight: 900;
    margin-block: 10px;
`

export const RegisterInput = styled(BaseInput)``

export const RegisterTextArea = styled(BaseInput).attrs(({theme}) => ({
    multiline: true,
    numberOfLines: 8
}))`
    textAlignVertical: top;
    min-height: 300px;
`

export const RegisterTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    font-size: 22px;
    text-align: center;
    font-weight: bold;
`

const BaseButton = styled.TouchableOpacity`
    width: 100%;
    padding: 20px;
    border-radius: 6px;
`

export const ButtonSubmit = styled(BaseButton)`
    background: ${({ theme }) => theme.COLORS.RED_400};
`

export const ButtonBack = styled(BaseButton)`
    background: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const TextWhite = styled.Text`
    color: white;
    text-transform: uppercase;
    text-align: center;
`