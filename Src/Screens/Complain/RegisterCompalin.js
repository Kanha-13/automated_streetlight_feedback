import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text } from "react-native";
import auth from '@react-native-firebase/auth';
import SuccessIcon from '../../component/Images/success.png'
import { registerComplain } from "../../Utils/registerComplain";

const RegisterCompalin = ({ navigate, imageUri }) => {
    const [success, setSuccess] = useState(0)
    const timeOut = () => {
        let timer1 = setTimeout(() => { setSuccess(0); navigate('UserHome') }, 1500);
        return () => {
            clearTimeout(timer1);
        };
    }
    const [number, setNumber] = useState("")
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                setNumber(user.phoneNumber.substring(1))
            }
        });
    }, [])
    const handelRegister = async () => {
        try {
            const resp = await registerComplain(imageUri, number)
            setSuccess(1)
            timeOut()
        } catch (error) {

        }
    }
    return (
        <>
            {success === 0 && <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff", height: "100%", width: "100%" }}>
                <Image style={{ height: "60%", width: "90%" }} source={{ uri: imageUri.uri }} />
                <Pressable onPress={handelRegister} style={{ height: 60, width: 160, marginTop: 30, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#5e72eb" }}><Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold" }}>Register</Text></Pressable>
            </View>}
            {
                success === 1 && <View style={{ backgroundColor: "#ffffff", height: "100%", width: "100%" }}>
                    <Image style={{ height: 90, width: 90, marginLeft: 160, marginTop: 150 }} source={SuccessIcon} />
                </View>
            }
        </>
    );
}
export default RegisterCompalin;