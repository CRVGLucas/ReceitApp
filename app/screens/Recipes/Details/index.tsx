import { Heart } from "phosphor-react-native";
import { ButtonFavorite, RecipeDescription, RecipeDetailsContainer, RecipeImage, RecipeSubTitle, RecipeTitle } from "./styles";
import { Text, View } from "react-native";

export function RecipeDetails() {
    return (
        <RecipeDetailsContainer>
            <RecipeImage src={"https://imagens-revista.vivadecora.com.br/uploads/2020/06/Bolo-de-cenoura-com-cobertura-Foto-Noticias-ao-Minuto.jpg"}/>
            <ButtonFavorite>
                <Heart color="#FFF" size={28}/>
            </ButtonFavorite>
            <RecipeTitle>Bolo de cenoura</RecipeTitle>
            <RecipeSubTitle>Doce</RecipeSubTitle>
            <RecipeDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis unde nemo sunt quaerat nisi modi et minima alias beatae, error cumque labore provident temporibus nam, tempore maxime quos ea.
            </RecipeDescription>
            <View>
                <Text>Modo de preparo</Text>
            </View>
        </RecipeDetailsContainer>
    )
}