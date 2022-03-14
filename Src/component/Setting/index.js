import React, { useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import { View, Text, Pressable } from "react-native";
const Setting = ({ navigate }) => {
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
        <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
            <View style={{ alignItems: "center", flexDirection: "row", marginBottom: 30 }}>
                <Pressable onPress={() => {
                    navigate('UserHome')
                }} style={{ height: 60, width: 60, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#000000", fontSize: 28 }}>&#60;</Text></Pressable>
                <Text style={{ marginLeft: 100, color: "#000000", fontSize: 25, fontWeight: "bold" }}>Settings</Text>
            </View>
            <Pressable onPress={handleSignout} style={{
                marginLeft: 30,
                backgroundColor:
                    '#5e72eb', width: "40%", height: 60, borderRadius: 15, alignItems: "center",
                justifyContent: "center"
            }}><Text style={{ color: "#ffffff", fontSize: 22 }}>Sign Out</Text>
            </Pressable>
        </View>
    );
}
export default Setting;