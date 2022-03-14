import React from "react";
import { View, Text, Pressable } from "react-native";

const TechnicianLogin = ({ onBack, navigate }) => {
    return (
        <View>
            <Pressable onPress={onBack}><Text style={{ color: "#000000" }}> &#60; </Text>
            </Pressable>
            <Text style={{ color: "#000000" }}>Technician Login</Text>
            <Pressable onPress={()=> navigate('TechnicianInfo')}>
                <Text style={{backgroundColor: 'black'}}>Next Page</Text>
            </Pressable>
        </View>
    );

}
export default TechnicianLogin;