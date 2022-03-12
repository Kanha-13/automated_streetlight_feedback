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
        <View style={{ height: "100%", backgroundColor: "pink" }}>
            <Text style={{ color: "#000000" }}>User Home</Text>
            <Pressable onPress={handleSignout} style={{ backgroundColor: 'purple', width: "40%", height: 60, borderRadius: 15, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#ffffff", fontSize: 22 }}>Sign Out</Text></Pressable>
        </View>
    );
}
export default UserHome;