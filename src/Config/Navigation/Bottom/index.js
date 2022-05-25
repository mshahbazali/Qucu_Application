import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Home from '../../../Screen/Home'
import Notification from '../../../Screen//Notification'
import Products from '../../../Screen//Products'
import Profile from '../../../Screen//Profile'
import QRScanner from '../../../Screen//QRScanner'
import HomeNavigation from '../HomeNavigation'
export default function Index() {
    const Tab = createBottomTabNavigator();
    const MainBtn = ({ children, onPress }) => {
        return (
            <TouchableOpacity
                style={{
                    top: -30,
                    justifyContent: 'center',
                    alignItems: "center",
                    ...styles.shadow
                }} onPress={onPress}>
                <View style={{
                    width: 70,
                    height: 70,
                    backgroundColor: "#fff",
                    borderRadius: 35
                }}>
                    {children}
                </View>
            </TouchableOpacity>
        )

    }
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    // bottom: 20,
                    // left: 20,
                    // right: 20,
                    // elevation: 0,
                    backgroundColor: "#21283F",
                    borderTopColor: "#21283F",
                    borderTopWidth: 2,
                    // borderRadius: 10,
                    // borderTopEndRadius: 15,
                    // borderTopStartRadius: 15,
                    height: 60,
                    ...styles.shadow
                }
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Octicons name="home" size={28} color={focused ? "#fff" : "#918c8c"} />
                            {/* <Text style={{ color: "#000", fontSize: 12 }}>Home</Text> */}
                        </View>
                    ),
                    headerShown: false
                }}
                name="HomeNavigation" component={HomeNavigation} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <MaterialCommunityIcons name="card-bulleted-outline" size={35} color={focused ? "#fff" : "#918c8c"} />
                            {/* <Text style={{ color: "#000", fontSize: 12 }}>Home</Text> */}
                        </View>
                    ),
                    headerShown: false
                }}
                name="Products" component={Products} />
            <Tab.Screen name="QRScanner" component={QRScanner}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="qrcode" size={45} color="black" />),
                    tabBarButton: (props) => <MainBtn {...props} />,
                    headerShown: false

                }}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <MaterialIcons name="notifications-none" size={35} color={focused ? "#fff" : "#918c8c"} />
                            {/* <Text style={{ color: "#000", fontSize: 12 }}>Home</Text> */}
                        </View>
                    ),
                    headerShown: false
                }}
                name="Notification" component={Notification} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Feather name="user" size={33} color={focused ? "#fff" : "#918c8c"} />
                            {/* <Text style={{ color: "#000", fontSize: 12 }}>Home</Text> */}
                        </View>
                    ),
                    headerShown: false
                }}
                name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#21283F",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 4
    }
})