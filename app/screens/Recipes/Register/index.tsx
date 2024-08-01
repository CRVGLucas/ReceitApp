import { useNavigation } from "expo-router";
import { ButtonBack, ButtonSubmit, RegisterContainer, RegisterInput, RegisterTextArea, RegisterTitle, TextWhite } from "./styles";

export function RecipeRegister(){
    const navigation = useNavigation()
    function handleNavigateBack(){
        navigation.navigate("home")
    }
    return (
        <RegisterContainer>
            <RegisterTitle>CADASTRAR NOVA RECEITA</RegisterTitle>
            <RegisterInput placeholder="Título" />
            <RegisterInput placeholder="Categoria"/>
            <RegisterTextArea placeholder="Receita"/>
            <ButtonSubmit>
                <TextWhite>Cadastrar</TextWhite>
            </ButtonSubmit>
            <ButtonBack onPress={handleNavigateBack}>
                <TextWhite>Voltar</TextWhite>
            </ButtonBack>
        </RegisterContainer>
    )
}