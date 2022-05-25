import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import RBSheet from "react-native-raw-bottom-sheet";

export default function Index() {

    const arr = ["Todos", "Tacos", "Tacos", "Tacos"]
    const [detailScreen, setDetailScreen] = useState(false);
    const [selectProduct, setSelectProduct] = useState(false);
    const ref = useRef()
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
            {
                detailScreen == false ?
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
                                        <TouchableOpacity onPress={() => setDetailScreen(true)}>
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
                                        </TouchableOpacity>

                                    )
                                })
                            }
                        </View>
                    </ScrollView >
                    :

                    selectProduct == false ?
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ marginTop: 20, backgroundColor: '#21283F', width: 40, borderRadius: 10, ...styles.shadow, justifyContent: 'center', alignItems: 'center', height: 40 }}>
                                <TouchableOpacity onPress={() => setDetailScreen(false)}>
                                    <Ionicons name="arrow-back-sharp" size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: 30, marginTop: -20, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
                                <View>
                                    <Image source={require('../../Assests/Images/restaurantslogo.png')} style={{ width: 80, height: 80 }} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: "#fff", fontSize: 27, fontWeight: "800", marginBottom: 5, marginRight: 6 }}>Tacos Fede</Text>
                                        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "300", marginTop: 10, marginRight: 6 }}>| Taquería</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                            <View style={{ marginHorizontal: 5, backgroundColor: "#2D344B", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 5, justifyContent: 'center', alignItems: 'center', ...styles.shadow }}>
                                                <FontAwesome name="facebook" size={25} color="white" />
                                            </View>
                                            <View style={{ marginHorizontal: 5, backgroundColor: "#2D344B", padding: 8, borderRadius: 5, justifyContent: 'center', alignItems: 'center', ...styles.shadow }}>
                                                <AntDesign name="instagram" size={25} color="white" />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <View style={{ marginHorizontal: 5 }}>
                                                <Feather name="clock" size={25} color="#F8981C" />
                                            </View>
                                            <View>
                                                <Text style={{ color: "#6C6C6C", fontSize: 15, fontWeight: "300", marginBottom: 5, marginRight: 6, flexWrap: 'wrap', width: 90, marginTop: 10 }}>De 5:50 am a 11:40 pm</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 30, ...styles.shadow, borderTopColor: "#6C6C6C", borderTopWidth: 1, borderBottomColor: "#6C6C6C", borderBottomWidth: 1, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ marginRight: 10, }}>
                                    <Octicons name="location" size={40} color="#F8981C" />
                                </View>
                                <View style={{}}>
                                    <Text style={{ color: "#6C6C6C", fontSize: 15, fontWeight: "300", marginBottom: 5, marginRight: 6, width: 245, lineHeight: 20 }}>Av. Eugenio Garza Sada Sur 6220, Torres de Satélite, 64960 Monterrey, N.L.</Text>
                                </View>
                                <View style={{ backgroundColor: '#2A2525', ...styles.shadow, borderRadius: 5, padding: 2 }}>
                                    <MaterialIcons name="navigate-next" size={35} color="#F8981C" />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setSelectProduct(true)}>
                                <View style={{ backgroundColor: '#2D344B', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 5, flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={{ color: "#fff", fontSize: 19, fontWeight: "600", width: 245, lineHeight: 20 }}>Pide de la forma más rápida</Text>
                                    <MaterialIcons name="navigate-next" size={40} color="#fff" />
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: "flex-start" }}>
                                <View style={{ marginRight: 10, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8, backgroundColor: '#21283F', borderRadius: 8, width: 90, flexDirection: 'row', ...styles.shadow }}>
                                    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>Visitas</Text>
                                    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>1</Text>
                                </View>
                                <View style={{ marginHorizontal: 10, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8, backgroundColor: '#21283F', borderRadius: 8, width: 90, flexDirection: 'row', ...styles.shadow }}>
                                    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>Visitas</Text>
                                    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>1</Text>
                                </View>
                                <View style={{ marginHorizontal: 10, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8, backgroundColor: '#21283F', borderRadius: 8, width: 90, flexDirection: 'row', ...styles.shadow }}>
                                    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>Visitas</Text>
                                    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>1</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: "#fff", fontSize: 24, fontWeight: "700" }}>Promociones Disponibles</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                {
                                    arr.map((e, i) => {
                                        return (
                                            <View key={i} style={{ flexDirection: 'row', justifyContent: "space-between", backgroundColor: '#21283F', paddingHorizontal: 15, paddingVertical: 8, ...styles.shadow, borderRadius: 7, marginVertical: 10 }}>
                                                <View style={{ width: 220 }}>
                                                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Visitas</Text>
                                                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "300", marginTop: 7 }}>Al completar 5 visitas recibe una orden de tacos.</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ color: "#9EA1AB", fontSize: 12, fontWeight: "300", marginBottom: 6 }}>Al completar:</Text>
                                                    <View style={{ backgroundColor: '#1B435F', alignItems: 'center', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 2 }}>
                                                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500", textAlign: 'center' }}>5 visitas</Text>
                                                    </View>
                                                    <Text style={{ color: "#9EA1AB", fontSize: 12, fontWeight: "300", marginBottom: 6, marginTop: 10 }}>Mín de compra:</Text>
                                                    <View style={{ backgroundColor: '#657386', alignItems: 'center', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 2 }}>
                                                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500", textAlign: 'center' }}>$ 50 MXN  </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }

                            </View>
                        </ScrollView>
                        :
                        <View style={{ flex: 1 }}>
                            <View style={{ marginTop: 20, backgroundColor: '#21283F', width: 40, borderRadius: 10, ...styles.shadow, justifyContent: 'center', alignItems: 'center', height: 40 }}>
                                <TouchableOpacity onPress={() => setSelectProduct(false)}>
                                    <Ionicons name="arrow-back-sharp" size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: 30, marginTop: -20, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
                                <View>
                                    <Image source={require('../../Assests/Images/restaurantslogo.png')} style={{ width: 80, height: 80 }} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: "#fff", fontSize: 27, fontWeight: "800", marginBottom: 5, marginRight: 6 }}>Tacos Fede</Text>
                                        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "300", marginTop: 10, marginRight: 6 }}>| Taquería</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                            <View style={{ marginHorizontal: 5, backgroundColor: "#2D344B", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 5, justifyContent: 'center', alignItems: 'center', ...styles.shadow }}>
                                                <FontAwesome name="facebook" size={25} color="white" />
                                            </View>
                                            <View style={{ marginHorizontal: 5, backgroundColor: "#2D344B", padding: 8, borderRadius: 5, justifyContent: 'center', alignItems: 'center', ...styles.shadow }}>
                                                <AntDesign name="instagram" size={25} color="white" />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <View style={{ marginHorizontal: 5 }}>
                                                <Feather name="clock" size={25} color="#F8981C" />
                                            </View>
                                            <View>
                                                <Text style={{ color: "#6C6C6C", fontSize: 15, fontWeight: "300", marginBottom: 5, marginRight: 6, flexWrap: 'wrap', width: 90, marginTop: 10 }}>De 5:50 am a 11:40 pm</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#21283F", marginTop: 13, marginBottom: 20, paddingVertical: 5, paddingHorizontal: 12, borderRadius: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Ionicons name="search" size={30} color="black" />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <TextInput placeholderTextColor={"#707584"} placeholder='¿Qué quieres pedir?' style={{ color: "#fff", fontSize: 17 }} />
                                    </View>
                                </View>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start', }}>
                                    <View style={{ borderRadius: 10, width: 42, height: 42, justifyContent: 'center', alignItems: 'center', ...styles.shadow, backgroundColor: '#21283F' }}>
                                        <Fontisto name="list-2" size={20} color="#fff" />
                                    </View>
                                    <View style={{ marginLeft: 10, paddingLeft: 27, paddingRight: 8 }}>
                                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                            {
                                                arr.map((e, i) => {
                                                    return (
                                                        <TouchableOpacity key={i} style={{}}>
                                                            <View style={{ backgroundColor: "#175676", flexDirection: 'row', padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
                                                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Comida</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }

                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={{ marginTop: 15, marginBottom: 25 }}>
                                    {
                                        arr.map(() => {
                                            return (
                                                <TouchableOpacity onPress={() => setDetailScreen(true)}>
                                                    <View style={{ ...styles.shadow, marginVertical: 7, backgroundColor: '#2D344B', paddingVertical: 10, paddingLeft: 10, borderRadius: 14, flexDirection: 'row', justifyContent: 'flex-start', paddingRight: 100 }}>
                                                        <View style={{ marginRight: 15 }}>
                                                            <Image source={require("../../Assests/Images/desh2.png")} style={{ width: 100, height: 100, ...styles.shadow, borderRadius: 7 }} />
                                                        </View>
                                                        <View>
                                                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", marginBottom: 5, marginRight: 6 }}>Orden de tacos</Text>
                                                            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300", marginBottom: 6 }}>5 tacos de Res</Text>
                                                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", marginTop: 10, marginRight: 6 }}>$10.00</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>

                                            )
                                        })
                                    }
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
                                    <TouchableOpacity onPress={() => {
                                        ref.current.open()
                                    }} style={{ ...styles.shadow, backgroundColor: "#9A9AA8", paddingHorizontal: 120, paddingVertical: 13, borderRadius: 10 }}>
                                        <Text style={{ color: '#AEAEB9', fontSize: 20, fontWeight: '700' }}>Ver Pedido</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                            <RBSheet
                                ref={ref}
                                height={630}
                                openDuration={250}
                                animationType={"slide"}
                                closeOnDragDown={true}
                                closeOnPressMask={false}
                                dragFromTopOnly={true}
                                customStyles={{
                                    container: {
                                        paddingHorizontal: 20,
                                        backgroundColor: "#21283F",
                                        borderTopRightRadius: 40,
                                        borderTopLeftRadius: 40,
                                    }
                                }}
                            >
                                <View style={{ marginTop: 130 }}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 25 }}>Orden de Tacos</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 25 }}>$10.00</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: "#7E8291", fontWeight: "400", fontSize: 18 }}>Los mejores tacos de Res.</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20, marginTop: 40 }}>Comentarios</Text>
                                        <View style={{ backgroundColor: "#2D344B", padding: 20, ...styles.shadow, marginVertical: 30, borderRadius: 15, height: 190 }}>
                                            <TextInput placeholder='Añade instrucciones y/o comentarios. El establecimiento hará lo posible por cumplirlo.' multiline={true} style={{ fontSize: 15, color: "#9FA2B1", fontWeight: "500" }} placeholderTextColor="#9FA2B1" />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <View style={{ backgroundColor: "#2D344B", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...styles.shadow, width: 120, paddingHorizontal: 17, paddingVertical: 10, borderRadius: 5 }}>
                                            <TouchableOpacity>
                                                <Text style={{ color: "#7E8291", fontWeight: "500", fontSize: 20, marginTop: -10 }}>__</Text>
                                            </TouchableOpacity>
                                            <Text style={{ color: "#7E8291", fontWeight: "400", fontSize: 23 }}>1</Text>
                                            <TouchableOpacity>
                                                <Text style={{ color: "#7E8291", fontWeight: "500", fontSize: 26 }}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ backgroundColor: "#4BA3C3", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...styles.shadow, width: 190, paddingHorizontal: 17, paddingVertical: 10, borderRadius: 5 }}>
                                            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20, }}>Agregar</Text>
                                            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 23 }}>$20.00</Text>

                                        </View>
                                        <View></View>
                                    </View>
                                </View>
                            </RBSheet>
                        </View >
            }
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