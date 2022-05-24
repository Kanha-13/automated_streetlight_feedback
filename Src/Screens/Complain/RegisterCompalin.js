import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text, TextInput, ScrollView, Dimensions } from "react-native";
import auth from '@react-native-firebase/auth';
import SuccessIcon from '../../component/Images/success.png'
import RejectIcon from '../../component/Images/rejectIcon.png'
import loader from '../../component/Images/loading.png'
import { registerComplain } from "../../Utils/registerComplain";

const RegisterCompalin = ({ navigate, imageUri }) => {
    const [success, setSuccess] = useState(0)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [locality, setLocality] = useState('')
    const [landmark, setLandmark] = useState('')
    const { height, width } = Dimensions.get("screen")
    const timeOut = () => {
        let timer1 = setTimeout(() => { setSuccess(0); navigate('UserHome') }, 12000);
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
    const [show, setShow] = useState(false)
    const handelRegister = async () => {
        try {
            // const resp = await registerComplain(imageUri, number, state, city, locality, landmark, title, desc)
            setSuccess(1)
            setTimeout(() => {
                setShow(true)
            }, 5000);
            timeOut()
        } catch (error) {

        }
    }
    return (
        <ScrollView style={{ backgroundColor: "white", paddingHorizontal: 20 }} contentContainerStyle={{}}>
            {success === 0 && <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, marginTop: 10, color: "#000000", textAlign: "center" }}>Complain Details</Text>
                <Text style={{ fontSize: 22, textAlign: "left", color: "#000000", marginTop: 20 }}>Image of Non-functional Street Light</Text>
                <Image style={{ borderRadius: 10, marginVertical: 20, height: 350, width: width, resizeMode: "contain", alignSelf: "center" }} source={{ uri: imageUri.uri }} />
                <Text style={{ color: "#000000", width: "90%", paddingLeft: 2, fontSize: 19, marginTop: 20 }}>Problem Title</Text>
                <TextInput value={title} onChangeText={(txt) => setTitle(txt)} style={{ borderRadius: 10, paddingLeft: 15, width: "100%", fontSize: 20, color: "#000000", borderWidth: 1 }} />
                <Text style={{ color: "#000000", width: "90%", paddingLeft: 2, fontSize: 19, marginTop: 20 }}>Problem Description</Text>
                <TextInput multiline={true} value={desc} onChangeText={(txt) => setDesc(txt)} style={{ borderRadius: 10, paddingLeft: 15, width: "100%", fontSize: 20, color: "#000000", borderWidth: 1, height: 150 }} />
                <Text style={{ color: "#000000", width: "90%", paddingLeft: 2, fontSize: 19, marginTop: 20 }}>State</Text>
                <TextInput value={state} onChangeText={(txt) => setState(txt)} style={{ borderRadius: 10, paddingLeft: 15, width: "100%", fontSize: 20, color: "#000000", borderWidth: 1 }} />
                <Text style={{ color: "#000000", width: "90%", paddingLeft: 2, fontSize: 19, marginTop: 20 }}>City</Text>
                <TextInput value={city} onChangeText={(txt) => setCity(txt)} style={{ borderRadius: 10, paddingLeft: 15, width: "100%", fontSize: 20, color: "#000000", borderWidth: 1 }} />
                <Text style={{ color: "#000000", width: "90%", paddingLeft: 2, fontSize: 19, marginTop: 20 }}>Locality / Colony</Text>
                <TextInput value={locality} onChangeText={(txt) => setLocality(txt)} style={{ borderRadius: 10, paddingLeft: 15, width: "100%", fontSize: 20, color: "#000000", borderWidth: 1 }} />
                <Text style={{ color: "#000000", width: "90%", paddingLeft: 2, fontSize: 19, marginTop: 20 }}>Landmark</Text>
                <TextInput value={landmark} onChangeText={(txt) => setLandmark(txt)} style={{ borderRadius: 10, paddingLeft: 15, width: "100%", fontSize: 20, color: "#000000", borderWidth: 1 }} />
                <Pressable onPress={handelRegister} style={{ marginBottom: 30, height: 60, width: 160, marginTop: 30, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#5e72eb" }}><Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold" }}>Register</Text></Pressable>
            </View>}
            {
                success === 1 && !show && <View>
                    <Image style={{ height: 150, width: 150, marginTop: 100, marginLeft: 120 }} source={loader} />
                </View>
            }
            {
                success === 1 && show && <View style={{ backgroundColor: "#ffffff", height: "100%", width: "100%" }}>
                    {/* <Image style={{ height: 90, width: 90, marginLeft: 160, marginTop: 150 }} source={SuccessIcon} /> */}
                    <Image style={{ height: 90, width: 90, marginLeft: 160, marginTop: 150 }} source={RejectIcon} />
                    <Text style={{ color: "#000000", marginTop: 20, fontSize: 22 }}>Your complain rejected because of Invalid/Improper image.</Text>
                    <Text style={{ color: "#000000", marginTop: 20, fontSize: 22 }}>Try again with a valid(Image of non-functional street light) image.</Text>
                    <Text style={{ color: "#000000", marginTop: 100, fontSize: 19 }}>Invalid/Improper:</Text>
                    <Text style={{ color: "#000000", marginTop: 10, fontSize: 16 }}>- Image that does not contain street light.</Text>
                    <Text style={{ color: "#000000", fontSize: 16 }}>- Image that contains street light, but its in working condition.</Text>
                    <Text style={{ color: "#000000", fontSize: 16 }}>- Image may be blured.</Text>
                    <Text style={{ color: "#000000", fontSize: 16 }}>- Street light may not be visible properly.</Text>
                </View>
            }
        </ScrollView >
    );
}
export default RegisterCompalin;