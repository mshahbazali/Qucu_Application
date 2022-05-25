import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Register, Login, Verification, ForgotPassword } from '../../Screen/Authentication'
export default function Index() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Verification" component={Verification} />
            <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}