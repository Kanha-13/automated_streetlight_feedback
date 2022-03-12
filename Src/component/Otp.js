
import React, { useRef, useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from 'react-native'

const Otp = ({ otpVerify, sendOTP, message, counter, setCounter }) => {
    const [isError, setError] = useState(false)
    const [otp, setOtp] = useState({
        d1: "",
        d2: "",
        d3: "",
        d4: "",
        d5: "",
        d6: "",
    })
    const d2 = useRef()
    const d3 = useRef()
    const d4 = useRef()
    const d5 = useRef()
    const d6 = useRef()

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Text style={{
                alignSelf: "flex-start", textAlign: "left",
                width: "70%", marginBottom: 5, color: "#000000", fontSize: 22
            }}>Enter the OTP received</Text>
            <View style={{
                width: "90%", flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center", marginVertical: 30

            }}>
                <TextInput
                    placeholder="0" placeholderTextColor="#000000"
                    keyboardType='number-pad' value={otp.d1} maxLength={1} onChangeText={text => {
                        setOtp({ ...otp, d1: text })
                        if (text.length == 1)
                            d2.current.focus()
                    }}
                    style={{ width: 50, height: 60, color: "#000000", fontSize: 20, borderRadius: 5, textAlign: "center", backgroundColor: "#ffffff", borderWidth: 2 }} />
                <TextInput
                    placeholder="0" placeholderTextColor="#000000"
                    keyboardType='number-pad' value={otp.d2} maxLength={1} ref={d2} onChangeText={text => {
                        setOtp({ ...otp, d2: text })
                        if (text.length == 1)
                            d3.current.focus()
                    }}
                    style={{ width: 50, height: 60, color: "#000000", fontSize: 20, borderRadius: 5, textAlign: "center", backgroundColor: "#ffffff", borderWidth: 2 }} />
                <TextInput
                    placeholder="0" placeholderTextColor="#000000"
                    keyboardType='number-pad' value={otp.d3} maxLength={1} ref={d3} onChangeText={text => {
                        setOtp({ ...otp, d3: text })
                        if (text.length == 1)
                            d4.current.focus()
                    }}
                    style={{ width: 50, height: 60, color: "#000000", fontSize: 20, borderRadius: 5, textAlign: "center", backgroundColor: "#ffffff", borderWidth: 2 }} />
                <TextInput
                    placeholder="0" placeholderTextColor="#000000"
                    keyboardType='number-pad' value={otp.d4} maxLength={1} ref={d4} onChangeText={text => {
                        setOtp({ ...otp, d4: text })
                        if (text.length == 1)
                            d5.current.focus()
                    }}
                    style={{ width: 50, height: 60, color: "#000000", fontSize: 20, borderRadius: 5, textAlign: "center", backgroundColor: "#ffffff", borderWidth: 2 }} />
                <TextInput
                    placeholder="0" placeholderTextColor="#000000"
                    keyboardType='number-pad' value={otp.d5} maxLength={1} ref={d5} onChangeText={text => {
                        setOtp({ ...otp, d5: text })
                        if (text.length == 1)
                            d6.current.focus()
                    }}
                    style={{ width: 50, height: 60, color: "#000000", fontSize: 20, borderRadius: 5, textAlign: "center", backgroundColor: "#ffffff", borderWidth: 2 }} />
                <TextInput
                    placeholder="0" placeholderTextColor="#000000"
                    keyboardType='number-pad' value={otp.d6} maxLength={1} ref={d6} onChangeText={text => {
                        setOtp({ ...otp, d6: text })
                    }}
                    style={{ width: 50, height: 60, color: "#000000", fontSize: 20, borderRadius: 5, textAlign: "center", backgroundColor: "#ffffff", borderWidth: 2 }} />

            </View>
            <Text style={{ color: isError ? "red" : "transparent" }}>Enter received OTP</Text>
            {message && <Text
                style={{
                    color: message.color || 'blue',
                    textAlign: 'center',
                    margin: '5%',
                }}>
                {message.text}
            </Text>
            }
            {counter > 0 && <Text style={{ color: "purple", marginBottom: 20 }}> Resend OTP in 00:{counter < 10 && "0"}{counter}</Text>}
            <Pressable
                onPress={() => {
                    sendOTP();
                    setCounter(59)
                }}
                disabled={counter > 0 ? true : false}
                style={{ backgroundColor: "purple", width: "40%", height: 60, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Text style={{ color: "#ffffff", textAlign: "center", fontSize: 20 }}>Re-Send</Text>
            </Pressable>

            <Pressable
                onPress={() => {
                    if (otp.d1 === "" || otp.d2 === "" || otp.d3 === "" || otp.d4 === "" || otp.d5 === "" || otp.d6 === "") {
                        setError(true)
                    }
                    else {
                        setError(false)
                        otpVerify(otp.d1 + otp.d2 + otp.d3 + otp.d4 + otp.d5 + otp.d6)
                    }
                }}
                style={{ backgroundColor: "purple", width: "40%", borderRadius: 10, marginTop: "2%", height: 60, justifyContent: "center" }}>
                <Text style={{ color: "#ffffff", textAlign: "center", fontSize: 20 }}>Verify</Text>
            </Pressable>
        </View>

    );
}

export default Otp;