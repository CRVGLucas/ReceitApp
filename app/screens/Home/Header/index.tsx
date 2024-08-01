
import { Text } from "react-native";
import { CreateNewReciepe, HomeFormContainer, HomeHeaderContainer, HomeSearchButton, HomeSearchInput, HomeTextWhite } from "./styles";
import { MagnifyingGlass, Receipt } from "phosphor-react-native";

export function HomeHeader() {

    return (
        <HomeHeaderContainer>
            <HomeFormContainer>
                <HomeSearchInput testID="search-input" placeholder="Buscar por..."/>

                <HomeSearchButton testID="search-button">
                    {/* <Text>Buscar</Text> */}
                    <MagnifyingGlass size={24}/>
                </HomeSearchButton> 
            </HomeFormContainer> 

            <CreateNewReciepe>
                <HomeTextWhite>cadastrar receita</HomeTextWhite>
                <Receipt color="#FFF" size={32} />
            </CreateNewReciepe>
        </HomeHeaderContainer>
    )
}