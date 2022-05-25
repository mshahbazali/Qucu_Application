import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../Screen/Home'
import SubCategory from '../../../Screen/SubCategory'
export default function Index() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />
        </Stack.Navigator>
    )
}