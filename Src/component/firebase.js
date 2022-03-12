import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';

const FirebaseSignIn = () => {
    const [confirm, setConfirm] = useState(null);

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
            }
            else {
                console.log("error")
            }
        });
        RNOtpVerify.getOtp().then(p => RNOtpVerify.addListener(message => {
            try {
                if (message) {
                    const messageArr = message.split('\n');
                    if (messageArr[2]) {
                        const otp = messageArr[2].split(' ')[0];
                        if (otp.length === 6) {
                            setOtp(opt.split(''));
                        }
                    }
                }
            } catch (error) {
                logErrorWithMessage(
                    error.message,
                    'RNOtpVerify.getotp - read message, OtpVerification')
            }
        })).catch(error => {
            logErrorWithMessage(
                error.message,
                'RNOtpVerify.getotp, OtpVerification')
        });
        return () => {
            RNOtpVerify.removeListener();
        };
    }, []);

    const [otp, setOtp] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log(confirmation)
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            let login = await confirm.confirm(otp)
            if (login) {
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
            console.log("confirm  error====>", err.message)
        }
    }
    const [number, setNUmber] = useState('')
    if (!confirm) {
        return (
            <>
                <TextInput value={number} onChangeText={text => setNUmber(text)} />
                <Button
                    title="Phone Number Sign In"
                    onPress={() => {
                        signInWithPhoneNumber(`+91${number}`)

                    }
                    }
                />
            </>
        );
    }



    return (
        <>
            <TextInput value={otp} onChangeText={text => setOtp(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}

export default FirebaseSignIn;