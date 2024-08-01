import styled from "styled-components/native";

export const HomeContainer = styled.View`
    flex: 1;
    background: ${({theme}) => theme.COLORS.BEIGE_500};
`

export const HomeContent = styled.View`
    margin-top: 50px;
    padding: 10px 20px 0 20px;
`

export const ListCardsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`

