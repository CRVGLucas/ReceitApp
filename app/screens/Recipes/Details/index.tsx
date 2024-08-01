import { Heart } from "phosphor-react-native";
import { ButtonFavorite, RecipeDescription, RecipeDetailsContainer, RecipeImage, RecipeSubTitle, RecipeTitle } from "./styles";

export function RecipeDetails() {
    return (
        <RecipeDetailsContainer>
            <ButtonFavorite>
                <Heart color="#FFF" size={28}/>
            </ButtonFavorite>
            <RecipeImage src={"https://imagens-revista.vivadecora.com.br/uploads/2020/06/Bolo-de-cenoura-com-cobertura-Foto-Noticias-ao-Minuto.jpg"}/>
            <RecipeTitle>Bolo de cenoura</RecipeTitle>
            <RecipeSubTitle>Doce</RecipeSubTitle>
            <RecipeDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis unde nemo sunt quaerat nisi modi et minima alias beatae, error cumque labore provident temporibus nam, tempore maxime quos ea.
            </RecipeDescription>
        </RecipeDetailsContainer>
    )
}