import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../Screen/Home'
import Splash from '../../../Screen/Splash'
import Steps from '../../../Screen/Steps'
import AuthNavigation from '../../AuthNavigation'
import { Login, ForgotPassword, ResetPasswordVerification, ResetPassword } from '../../../Screen/Authentication'
import Bottom from '../Bottom'
import SubCategory from '../../../Screen/SubCategory'
export default function Index() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
            {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} /> */}
            <Stack.Screen options={{ headerShown: false }} name="AuthNavigation" component={AuthNavigation} />
            <Stack.Screen options={{ headerShown: false }} name="Steps" component={Steps} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen options={{ headerShown: false }} name="ResetPasswordVerification" component={ResetPasswordVerification} />
            <Stack.Screen options={{ headerShown: false }} name="ResetPassword" component={ResetPassword} />
            <Stack.Screen options={{ headerShown: false }} name="Bottom" component={Bottom} />
            <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />
        </Stack.Navigator>
    )
}