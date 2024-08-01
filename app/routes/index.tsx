import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
    return (
        <NavigationContainer independent={true}>
            <AppRoutes/>
        </NavigationContainer>
    )
}