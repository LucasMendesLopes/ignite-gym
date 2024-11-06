import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Exercise, History, Home, Profile } from "@screens";

import HomeIcon from "@assets/home.svg"
import HistoryIcon from "@assets/history.svg"
import ProfileIcon from "@assets/profile.svg"
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Platform } from "react-native";

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    history: undefined;
    profile: undefined;
}

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { tokens } = gluestackUIConfig
    const iconSize = tokens.space["6"]

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: tokens.colors.gray200,
            tabBarActiveTintColor: tokens.colors.green500,
            tabBarStyle: {
                backgroundColor: tokens.colors.gray600,
                borderTopWidth: 0,
                height: Platform.OS === "android" ? "auto" : 96,
                paddingTop: tokens.space["6"],
                paddingBottom: tokens.space["10"]
            }
        }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeIcon fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistoryIcon fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileIcon fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="exercise"
                component={Exercise}
                options={{ tabBarButton: () => null }}
            />
        </Navigator>
    )
}