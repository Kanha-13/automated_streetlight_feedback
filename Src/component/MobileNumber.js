import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
const MobileNumber = ({ onSend }) => {
    const [number, setNUmber] = useState('')
    const [error, setError] = useState(false)
    const checkValid = () => {
        if (number.toString().length === 10) {
            setError(false)
            onSend(number)
        }
        else {
            setError(true)
        }
    }
    return (
        <View style={{ height: "100%" }}>
            <Text style={{ color: "#000000", fontSize: 22 }}>MobileNumber</Text>
            <TextInput value={number} onChangeText={text => setNUmber(text)} keyboardType="phone-pad" style={{ fontSize: 20, marginTop: 50, width: "80%", borderWidth: 2, borderRadius: 5, paddingLeft: 10, color: "#000000" }} placeholderTextColor="#000000" placeholder="Enter You Mobile Number" />
            {error && <Text style={{ color: "red" }}>Enter a valid number</Text>}
            <Pressable onPress={checkValid} style={{
                height: 60, borderRadius: 15,
                justifyContent: "center", alignItems: "center", backgroundColor: "purple",
                width: "40%", marginTop: 20
            }}><Text style={{ color: "#FFFFFF", fontSize: 23 }}>Send Otp</Text></Pressable>
        </View>
    );
}
export default MobileNumber;