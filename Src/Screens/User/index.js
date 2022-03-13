import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Geolocation from "@react-native-community/geolocation";
const UserHome = ({ navigate }) => {
    // Geolocation.getCurrentPosition(data => {
    //     console.log(data.coords);
    // });

    return (
        <View style={{ height: "100%", backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 50, height: 60, alignItems: "center" }}>
                <Pressable onPress={() => {
                    navigate("Setting")
                }}><Text style={{ fontSize: 30 }}> 🔴 </Text></Pressable>
                <Text style={{ color: "#000000", fontSize: 25 }}>User Home</Text>
                <Pressable onPress={() => {
                    navigate("Notification")
                }}><Text style={{ fontSize: 30 }}> 🔔 </Text></Pressable>
            </View>
            <Pressable onPress={() => {
                console.log("pressed")
                navigate('Camera')
            }} style={{ backgroundColor: "purple", width: 60, height: 60 }}><Text>Register Complain</Text></Pressable>
        </View>
    );
}
export default UserHome;