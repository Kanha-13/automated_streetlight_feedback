import React from "react";
import { View, Text, Pressable } from "react-native";
import auth from '@react-native-firebase/auth';
const UserHome = ({ navigate }) => {
    const handleSignout = () => {
        try {
            auth().signOut()
            navigate('Login')
        } catch (error) {
            console.log("Signout error")
            navigate('Login')
        }
    };
    return (
        <View style={{ flexDirection: "column", alignItems: "center",height: "100%", backgroundColor: "#7027A0" }}>
            <Text style={{ marginTop:100,color: "#000000", fontSize: 40, fontWeight:"600"}}>User Home</Text>
            <Pressable onPress={handleSignout} style={{ backgroundColor: '#FFF5B7',marginTop:200, width: "40%", height: 60, borderRadius: 25, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "black", fontSize: 25, fontWeight: "700" }}>Sign Out</Text></Pressable>
        </View>
    );
}
export default UserHome;