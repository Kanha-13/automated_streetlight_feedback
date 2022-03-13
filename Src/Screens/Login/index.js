import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from "react-native";
import TechnicianLogin from "./Technicianlogin";
import UserLogin from "./Userlogin";
import auth from '@react-native-firebase/auth';


const image = { uri: "https://reactjs.org/logo-og.png" }

const Login = ({ path, navigate }) => {
    const [LoginType, setLoginType] = useState(-1)
    const goBack = () => {
        setLoginType(-1)
    }
    const checkUser = async (number) => {
        const res = await fetch(`http://192.168.29.59:8002/user/${number}`)
        const userExist = await res.json()
        if (userExist) {
            if (userExist.employeId) {
                navigate('TechnicianHome')
            } else {
                navigate('UserHome')
            }
        } else {
            if (LoginType) {
                console.log("deteail not available")
                navigate("TechnicianInfo")
            } else {
                console.log("deteail not available")
                navigate("UserInfo")
            }
        }
    }
    useEffect(() => {
        try {
            auth().onAuthStateChanged((user) => {
                if (user) {
                    checkUser(user.phoneNumber)
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
            backgroundColor: "#120c6e", height: '100%',
            alignItems: "center"
        }}>{
                LoginType === -1 &&
                <>
                    <Text style={{ color: "#FFFA4D", fontSize: 40, fontWeight: 'bold',marginTop: 200 }}>Login as</Text>
                    <View style={{
                        marginTop: 70, width: "100%", alignItems: "center",
                        justifyContent: "center", height: "30%"
                    }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setLoginType(0)//0 for user
                        }} style={{ backgroundColor: "#5e72eb", width: "70%", height: "27%", borderRadius: 25, alignItems: "center", justifyContent: "center", marginBottom: 50 }}><Text style={{ color: "#FFFFFF", fontSize: 30, fontWeight: "bold" }}>User</Text></TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setLoginType(1)//1 for technician
                        }} style={{ backgroundColor: "#5e72eb", width: "70%", height: "27%", borderRadius: 25, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#FFFFFF", fontSize: 30, fontWeight: "bold" }}>Technician</Text></TouchableOpacity>
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
const styles = StyleSheet.create({
    
})
export default Login;