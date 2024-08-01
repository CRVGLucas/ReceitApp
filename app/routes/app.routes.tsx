import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeDetails } from "../screens/Recipes/Details";
import { Home } from "../screens/Home";
import { RecipeRegister } from "../screens/Recipes/Register";
import { CaretLeft } from "phosphor-react-native";
import { BackButton, WhiteIcon } from "./styles";

const { Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Screen 
                name="details"
                component={RecipeDetails}
                options={({navigation }) => ({ headerShown: false, headerLeft: () => (
                <BackButton onPress={navigation.goBack} >
                    <WhiteIcon/>
                </BackButton>
            ), })}
            />
            <Screen 
                name="register"
                component={RecipeRegister}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}