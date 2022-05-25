import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 60, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ color: "#fff", fontSize: 40, fontWeight: "600" }}>Mi Cuenta</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ ...styles.shadow, padding: 15, borderRadius: 10, backgroundColor: '#2D344B' }}>
            <View>
              <Text style={{ color: "#fff", fontSize: 25, fontWeight: "600" }}>Información</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10 }}>
              <View style={{ marginRight: 60 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: '600', }}>Nombre</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: '400', }}>Angel Ibañe</Text>
              </View>
              <View>
                <Text style={{ color: "white", fontSize: 16, fontWeight: '600', }}>Celular</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: '400', }}>+52 8123559694</Text>
              </View>
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 16, fontWeight: '600', }}>Correo electrónico</Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: '400', }}>aricxproductions@gmail.com</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: '600', textDecorationLine: "underline" }}>Cambiar contraseña</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2, }}>
            <View style={{ backgroundColor: "#FF9C41", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <FontAwesome5 name="crown" size={20} color="#fff" />
            </View>
            <View>
              <Text style={{ color: "#FF9C41", fontSize: 20, fontWeight: '300', }}>Obtener Premium</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2, marginTop: 25 }}>
            <View style={{ backgroundColor: "#175676", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <MaterialIcons name="live-help" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Ayuda</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2 }}>
            <View style={{ backgroundColor: "#175676", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <AntDesign name="contacts" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Contacto</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2, marginTop: 25 }}>
            <View style={{ backgroundColor: "#FF2D55", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <MaterialIcons name="star-rate" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Califícanos</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2 }}>
            <View style={{ backgroundColor: "#FF2D55", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <MaterialCommunityIcons name="arrange-send-to-back" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Enviar retro</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2 }}>
            <View style={{ backgroundColor: "#FF2D55", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <Octicons name="share" size={24} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Compartir aplicación</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2, marginTop: 25 }}>
            <View style={{ backgroundColor: "#00D971", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <Ionicons name="md-newspaper" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Aviso de Privacidad</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2 }}>
            <View style={{ backgroundColor: "#00D971", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <MaterialCommunityIcons name="checkbox-marked-outline" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Términos y condiciones</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopColor: "#2D344B", borderTopWidth: 2, paddingVertical: 8, borderBottomColor: "#2D344B", borderBottomWidth: 2, marginTop: 25, marginBottom: 70 }}>
            <View style={{ backgroundColor: "#BA324F", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
              <Feather name="log-out" size={20} color="white" />
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: '300', }}>Cerrar sesión</Text>
            </View>
          </View>
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