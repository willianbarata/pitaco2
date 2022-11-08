import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme } from "@react-navigation/native";

import PreloadScreen from '../screens/PreloadScreen';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="PreloadScreen"
                component={PreloadScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}