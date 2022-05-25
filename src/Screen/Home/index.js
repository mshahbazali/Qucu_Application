import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default function Index({ navigation }) {

    const category = [
        {
            categoryName: "Food",
            categoryDiscription: "Treat yourself to afree meal",
            subCategory: [
                {
                    name: "Restaurants",
                    icon: <Image source={require("../../Assests/Images/Golf.png")} style={{ width: 140, height: 140 }} />

                },
                {
                    name: "Desserts",
                    icon: <Image source={require("../../Assests/Images/billiards.png")} style={{ width: 140, height: 140 }} />

                }
            ],
        },
        {
            categoryName: "Entertainment",
            categoryDiscription: "Take the day and enjoy the good things that life has",
            subCategory: [
                {
                    name: "Cinema",
                    icon: <Image source={require("../../Assests/Images/Cinema.png")} style={{ width: 140, height: 140 }} />

                },
                {
                    name: "Golf",
                    icon: <Image source={require("../../Assests/Images/Golf.png")} style={{ width: 140, height: 140 }} />

                },
                {
                    name: "Billiard",
                    icon: <Image source={require("../../Assests/Images/billiards.png")} style={{ width: 140, height: 140 }} />

                },
                {
                    name: "Concerts",
                    icon: <Image source={require("../../Assests/Images/concerts.png")} style={{ width: 140, height: 140 }} />

                }
            ],
        },
        {
            categoryName: "Travel",
            categoryDiscription: "Travel like never before",
            subCategory: [{
                name: "Flights",
                icon: <Image source={require("../../Assests/Images/Airplane.png")} style={{ width: 140, height: 140 }} />

            }]
        }
    ]


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 60, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: "#fff", fontSize: 40, fontWeight: "600" }}>Categories</Text>
                    </View>
                    <View>
                        <Ionicons name="md-menu" size={36} color="white" />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#21283F", marginTop: 13, marginBottom: 20, paddingVertical: 5, paddingHorizontal: 12, borderRadius: 10 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Ionicons name="search" size={30} color="black" />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <TextInput placeholderTextColor={"#707584"} placeholder='search for your next exit' style={{ color: "#fff", fontSize: 17 }} />
                    </View>
                </View>
                {
                    category.map((e, i) => {
                        return (
                            <View key={i} style={{ marginVertical: 5 }}>
                                <View>
                                    <Text style={{ color: "#fff", fontSize: 33, fontWeight: "400" }}>{e.categoryName}</Text>
                                </View>
                                <View style={{ marginTop: 6 }}>
                                    <Text style={{ color: "#707584", fontSize: 20, fontWeight: "300" }}>{e.categoryDiscription}</Text>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                        {
                                            e.subCategory.map((e, i) => {
                                                return (
                                                    <TouchableOpacity onPress={() => navigation.navigate("SubCategory")} key={i} style={{ width: 140, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                                                        <View style={{ backgroundColor: "#175676", width: "100%", borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                                                            {e.icon}
                                                        </View>
                                                        <View style={{ backgroundColor: "#2D344B", width: "100%", paddingVertical: 8, borderBottomEndRadius: 20, borderBottomStartRadius: 20 }}>
                                                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "300", textAlign: 'center' }}>{e.name}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }

                                    </ScrollView>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141927',
        paddingHorizontal: 20
    },
});