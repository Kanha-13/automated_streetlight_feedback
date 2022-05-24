import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, PermissionsAndroid } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import { Image } from 'react-native'
export default function Camera({ navigate, onConfirm }) {
    const [{ cameraRef }, { takePicture }] = useCamera(null)
    const [imageUri, setImageUri] = useState(null)
    useEffect(() => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((status) => {
            if (status) {
                console.log(status)
            } else {
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, { message: "Please permission to store image", title: "Storage permission" }).then((data) => {

                }).catch(() => {

                })
            }
        })
    }, [])
    const camptureHandel = async () => {
        try {
            const data = await takePicture();
            setImageUri(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <View style={styles.body}>
            {imageUri === null && <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Click Image of functional street light</Text>
                </View>
                <Pressable style={{
                    marginBottom: 20, borderRadius: 50,
                    backgroundColor: "#ffffff", width: 80, height: 80,
                }} onPress={camptureHandel}></Pressable>
            </RNCamera>}

            {imageUri !== null &&
                <View style={{
                    alignItems: 'center',
                    justifyContent: "center", height: "100%"
                }}>
                    <Image style={{ height: "80%", width: "90%" }} source={{ uri: imageUri.uri }} />
                    <Pressable onPress={() => {
                        setImageUri(null)
                    }} style={{ marginTop: 20, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: '#5e72eb', width: 160, height: 60 }}><Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold" }}>Retake</Text></Pressable>
                    <Pressable onPress={() => {
                        onConfirm(imageUri)
                        navigate('RegisterCompalin')
                    }} style={{ marginTop: 20, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: '#5e72eb', width: 160, height: 60 }}><Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold" }}>Confirm</Text></Pressable>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        height: "100%",
        backgroundColor: "white"
    },
    preview: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    }
})