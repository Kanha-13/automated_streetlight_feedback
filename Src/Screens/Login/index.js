import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import TechnicianLogin from "./Technicianlogin";
import UserLogin from "./Userlogin";
import auth from '@react-native-firebase/auth';

const Login = ({ path, navigate }) => {
    const [LoginType, setLoginType] = useState(-1)
    const goBack = () => {
        setLoginType(-1)
    }
    useEffect(() => {
        try {
            auth().onAuthStateChanged((user) => {
                if (user) {
                    navigate('UserHome')
                }
                else {
                    setLoginType(-1)
                }
            });
        } catch (error) {
            setLoginType(-1)
        }
    }, [])
    return (
        <View style={{
            backgroundColor: "#FFFFFF", height: '100%',
            alignItems: "center"
        }}>{
                LoginType === -1 &&
                <>
                    <Text style={{ color: "#000000", fontSize: 30, marginTop: 200 }}>Login as</Text>
                    <View style={{
                        marginTop: 70, width: "100%", alignItems: "center",
                        justifyContent: "center", height: "30%"
                    }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setLoginType(0)//0 for user
                        }} style={{ backgroundColor: "purple", width: "70%", height: "27%", borderRadius: 15, alignItems: "center", justifyContent: "center", marginBottom: 50 }}><Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>User</Text></TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setLoginType(1)//1 for technician
                        }} style={{ backgroundColor: "purple", width: "70%", height: "27%", borderRadius: 15, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>Technician</Text></TouchableOpacity>
                    </View>
                </>

            }
            {
                LoginType === 0 && <UserLogin onBack={goBack} navigate={navigate} />
            }
            {
                LoginType === 1 && <TechnicianLogin onBack={goBack} navigate={navigate} />
            }
        </View>
    );
}
export default Login;