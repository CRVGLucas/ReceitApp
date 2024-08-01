import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeRegister } from "../screens/Recipes/Register";
import { RecipeDetails } from "../screens/Recipes/Details";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Screen 
                name="Details"
                component={RecipeDetails}
                options={({ headerShown: false })}
            />
            <Screen 
                name="Register"
                component={RecipeRegister}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}