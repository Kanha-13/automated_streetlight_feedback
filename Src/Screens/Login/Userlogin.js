import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import MobileNumber from "../../component/MobileNumber";
import Otp from "../../component/Otp";
import { checkUser } from "../../Utils/checkUser";
import { sendOtp } from "./api";
import auth from '@react-native-firebase/auth';
import LoadingIcon from '../../component/Images/loading.png'
const UserLogin = ({ onBack, navigate }) => {
    const [mobileNUmber, setMobileNumber] = useState(null)
    const [message, showMessage] = useState();
    const [counter, setCounter] = useState(0);
    const [confirm, setConfirm] = useState(null);

    const onSendOtp = async (number) => {
        setMobileNumber(number || mobileNUmber)
        setConfirm(await sendOtp(number || mobileNUmber))
    }


    const handelOtpVerify = async (otp) => {
        showMessage({})
        try {
            let login = await confirm.confirm(otp)
            if (login) {
                // checkUser(mobileNUmber, navigate, 0);
            }
        } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
            setCounter(0)
        }
    }
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                checkUser(user.phoneNumber, navigate, 0)
            }
            else {
                // setLoginType(-1)
            }
        });
    }, [])
    return (
        <View style={{ height: "100%", width: "100%", paddingHorizontal: 10, }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 15, marginBottom: 70 }}>
                <Pressable onPress={onBack} style={{ marginRight: 90 }}><Text style={{ fontSize: 30, color: "#000000" }}> &#10232; </Text></Pressable>
                <Text style={{ color: "#000000", fontSize: 25 }}>User Login</Text>
            </View>
            {
                !mobileNUmber && <MobileNumber onSend={onSendOtp} />
            }
            {
                confirm && mobileNUmber &&
                <Otp otpVerify={handelOtpVerify} sendOTP={sendOtp} message={message} counter={counter} setCounter={setCounter} />
            }
            {
                confirm === null && mobileNUmber && <Image style={{ marginTop: 150, marginLeft: 150, height: 90, width: 90 }} source={LoadingIcon} />
            }
        </View>
    );

}
export default UserLogin;