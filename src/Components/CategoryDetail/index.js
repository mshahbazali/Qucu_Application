import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
export default function Index() {

    const arr = ["Todos", "Tacos", "Tacos", "Tacos"]
  

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
                <View style={{ marginTop: 60, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <SimpleLineIcons name="location-pin" size={24} color="white" />
                            <Text style={{ color: "white", marginLeft: 7, fontSize: 20 }}>Monterrey</Text>
                        </View>
                    </View>
                    <View>
                        <Ionicons name="md-menu" size={36} color="white" />
                    </View>
                </View>
                <View>
                    <Text style={{ color: "#fff", fontSize: 40, fontWeight: "600" }}>Restaurants</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#21283F", marginTop: 13, marginBottom: 20, paddingVertical: 5, paddingHorizontal: 12, borderRadius: 10 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Ionicons name="search" size={30} color="black" />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <TextInput placeholderTextColor={"#707584"} placeholder='search for your next exit' style={{ color: "#fff", fontSize: 17 }} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                    <View style={{ borderColor: "#5b5e63", borderWidth: 0.7, borderRadius: 10, width: 42, height: 42, justifyContent: 'center', alignItems: 'center', }}>
                        <Ionicons name="md-menu" size={36} color="#5b5e63" />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 38 }}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            {
                                arr.map((e, i) => {
                                    return (
                                        <TouchableOpacity key={i} style={{}}>
                                            <View style={{ backgroundColor: "#175676", flexDirection: 'row', padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
                                                <MaterialCommunityIcons name="dots-grid" size={24} color="white" />
                                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>{e}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </ScrollView>
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {
                            arr.map(() => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{ backgroundColor: "#21283F", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...styles.shadow, width: 300, height: 140, borderRadius: 20, paddingHorizontal: 15, marginHorizontal: 8 }}>
                                            <View>
                                                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "300", marginBottom: 6 }}>Producto del día</Text>
                                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", marginBottom: 5 }}>Ensalada de Pollo</Text>
                                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", marginBottom: 6 }}>2x1</Text>
                                                <Text style={{ color: "red", fontSize: 16, fontWeight: "300" }}>Super Salads</Text>
                                            </View>
                                            <View>
                                                <Image source={require("../../Assests/Images/desh.png")} style={{ width: 100, height: 100, ...styles.shadow }} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ color: "#fff", fontSize: 25, fontWeight: "600" }}>Restaurantes abiertos</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    {
                        arr.map(() => {
                            return (
                                <View style={{ ...styles.shadow, marginVertical: 7, backgroundColor: '#2D344B', paddingVertical: 10, paddingLeft: 10, borderRadius: 14, flexDirection: 'row', justifyContent: 'flex-start', paddingRight: 100 }}>
                                    <View style={{ marginRight: 15 }}>
                                        <Image source={require("../../Assests/Images/desh2.png")} style={{ width: 100, height: 100, ...styles.shadow, borderRadius: 7 }} />
                                    </View>
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", marginBottom: 5, marginRight: 6 }}>Tacos Fede</Text>
                                            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "300", marginBottom: 5, marginRight: 6 }}>| Taquería</Text>
                                            <View style={{ backgroundColor: "#4B464B", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 5, ...styles.shadow }}>
                                                <AntDesign name="star" size={10} color="#F2994A" style={{ marginHorizontal: 4 }} />
                                                <Text style={{ color: "#fff", fontSize: 10, fontWeight: "800", padding: 3 }}>4.2</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300", marginBottom: 6 }}>Los mejores tacos que puedan haber en el mercado.</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                            <Text style={{ color: "#5b5e63", fontSize: 13, fontWeight: "300" }}>Distancia: 1.6 km</Text>
                                            <Text style={{ color: "#5b5e63", fontSize: 13, fontWeight: "300", textAlign: 'center' }}>Promociones {'\n'} Disponibles: 5</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141927',
        paddingHorizontal: 20
    },
    shadow: {
        shadowColor: "#175676",
        shadowOffset: {
            width: 20,
            height: 20
        },
        shadowRadius: 20,
    }
});