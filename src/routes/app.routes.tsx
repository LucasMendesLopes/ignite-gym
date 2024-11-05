import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Exercise, History, Home, Profile } from "@screens";

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    history: undefined;
    profile: undefined;
}

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="history"
                component={History}
            />

            <Screen
                name="profile"
                component={Profile}
            />

            <Screen
                name="exercise"
                component={Exercise}
            />
        </Navigator>
    )
}