import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import MobileNumber from "../../component/MobileNumber";
import Otp from "../../component/Otp";
import { sendOtp } from "./api";

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
                navigate('UserHome')
                let user = login.user
                console.log("user=====>", user)
                console.log("login=====>", login)
                let userData = {
                    uid: user.uid,
                    // name: userDetails.name,
                    // email: userDetails.email,
                    // mobileNumber: userDetails.mobileNumber,
                }
            }
        } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
            setCounter(0)
        }
    }

    return (
        <View style={{ height: "100%", width: "100%", paddingHorizontal: 10, }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 15, marginBottom: 70 }}>
                <Pressable onPress={onBack} style={{ marginRight: 90 }}><Text style={{ fontSize: 30, color: "#000000" }}> &#60; </Text></Pressable>
                <Text style={{ color: "#000000", fontSize: 25 }}>User Login</Text>
            </View>
            {
                !mobileNUmber && <MobileNumber onSend={onSendOtp} />
            }
            {
                mobileNUmber &&
                <Otp otpVerify={handelOtpVerify} sendOTP={sendOtp} message={message} counter={counter} setCounter={setCounter} />
            }
        </View>
    );

}
export default UserLogin;