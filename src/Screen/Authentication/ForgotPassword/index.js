import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { api } from '../../../Config/Api'
import Toast from 'react-native-root-toast';
import { useSelector } from 'react-redux';
export default function Index({ navigation }) {
    const [identifierInput, setIdentifierInput] = useState(false)
    const [identifier, setIdentifier] = useState(undefined)
    const [identifierError, setIdentifierError] = useState(undefined);
    const state = useSelector(state => state)
    const forgotPassword = () => {
        const phoneData = {
            identifier,
        }
        state.RegisterMobileNumber = identifier
        axios.post(`${api}/auth/forgotpassword`, phoneData)
            .then((response) => {
                state.UserId = response.data.user._id
                if (response.data.message == "Please enter valid mobile number" || response.data.message == undefined) {
                    let toast = Toast.show(`Please enter valid mobile number`, {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.TOP,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                    });
                    setTimeout(function () {
                        Toast.hide(toast);
                    }, 10000);
                }
                else {
                    navigation.navigate("ResetPasswordVerification")
                }
            })
            .catch((err) => {
            })
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../../Assests/Images/logo.png")} style={styles.logo} />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Please enter your mobile number so you can change your password</Text>
                        <TextInput keyboardType='default' onChangeText={(text) => setIdentifier(text)} onFocus={() => {
                            setIdentifierInput(true)
                            setIdentifierError(undefined)
                        }} placeholder="Enter any of above" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: identifierError !== undefined ? "red" : identifierInput == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingVertical: 10, fontSize: 15 }} />
                        <Text style={{ color: "red", marginTop: 5, display: identifierError == undefined ? "none" : "flex" }}>Please Enter Valid Mobile Number</Text>
                    </View>
                    <View style={{ marginTop: 70 }}>
                        <TouchableOpacity onPress={() => {
                            identifier === undefined ? setIdentifierError(true) : null
                            identifier === undefined ? null : forgotPassword()
                        }} style={{ backgroundColor: identifier === undefined ? '#21283F' : "#175676", paddingVertical: 10, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141927",
        flex: 1
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        width: 340,
        height: 340
    },
    loginTextContainer: {
        marginTop: 50,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: "#fff",
        textDecorationLine: "underline",
        fontSize: 20
    },
})