import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function Index({ navigation }) {
    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../Assests/Images/logo.png")} style={styles.logo} />
                </View>
                <View style={styles.logoTextContainer}>
                    <Text style={styles.logoText}>QuCu</Text>
                </View>
                <View style={styles.startBtnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Steps")} style={styles.startBtn}>
                        <Text style={styles.startBtnText}>Start</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginTextContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.creditContainer}>
                    <Text style={styles.creditTextOne}>Created by</Text>
                    <Text style={styles.creditTextTwo}>QUCU</Text>
                </View>
            </ScrollView >
        </ View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141927',
    },
    logoContainer: {
        marginTop: 100,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 250
    },
    logoTextContainer: {
        marginBottom: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        color: "#1C5E7E",
        fontSize: 40,
        fontWeight: "800",
    },
    startBtnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startBtn: {
        backgroundColor: '#1C5E7E',
        marginVertical: 20,
        width: "80%",
        paddingVertical: 15,
        borderRadius: 50
    },
    startBtnText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: '400'
    },
    loginTextContainer: {
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: "#fff",
        textDecorationLine: "underline",
        fontSize: 20
    },
    creditContainer: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditTextOne: {
        textAlign: 'center',
        color: "grey",
        fontSize: 17,
        fontWeight: '400'
    },
    creditTextTwo: {
        marginTop: 3,
        textAlign: 'center',
        color: "#9597A3",
        fontSize: 20,
        fontWeight: '700',

    }
});
