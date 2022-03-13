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
            <Pressable onPress={() => {
                navigate('UserHome')
            }} style={{ height: 60, width: 60 }}><Text style={{ color: "#000000", fontSize: 25 }}>&#60;</Text></Pressable>
            <Pressable onPress={handleSignout} style={{
                backgroundColor:
                    'purple', width: "40%", height: 60, borderRadius: 15, alignItems: "center",
                justifyContent: "center"
            }}><Text style={{ color: "#ffffff", fontSize: 22 }}>Sign Out</Text>
            </Pressable>
        </View>
    );
}
export default Setting;