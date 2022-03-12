import React from "react";
import { View, Text, Pressable } from "react-native";

const TechnicianLogin = ({ onBack }) => {
    return (
        <View>
            <Pressable onPress={onBack}><Text style={{ color: "#000000" }}> &#60; </Text>
            </Pressable>
            <Text style={{ color: "#000000" }}>Technician Login</Text>
        </View>
    );

}
export default TechnicianLogin;