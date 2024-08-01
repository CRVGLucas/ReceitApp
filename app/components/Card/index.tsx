import { Eye, Heart } from "phosphor-react-native";
import { ButtonDetails, ButtonFavorite, CardButtonOptionsContainer, CardContainer, CardImage, CardSubTitle, CardTitle, TextWhite } from "./styles";
import { useNavigation } from "expo-router";
import { NavigationContainerProps } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type CardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
    navigation: CardScreenNavigationProp;
  };
export function Card() {
    const navigation = useNavigation()
    function handleNavigateToDetails(){
        navigation.navigate("Details")
    }
    return (
        <CardContainer >
            <CardImage src={"https://imagens-revista.vivadecora.com.br/uploads/2020/06/Bolo-de-cenoura-com-cobertura-Foto-Noticias-ao-Minuto.jpg"}/>
            <CardTitle>TESTE</CardTitle>
            <CardSubTitle>Doce</CardSubTitle>
            <CardButtonOptionsContainer>
                <ButtonDetails onPress={handleNavigateToDetails}>
                    <TextWhite>
                        <Eye color="#FFF" size={25}/>
                    </TextWhite>
                </ButtonDetails>
                <ButtonFavorite>
                    <TextWhite>
                        <Heart color="#FFF" size={25}/>
                    </TextWhite>
                </ButtonFavorite>
            </CardButtonOptionsContainer>

        </CardContainer>
    )
}