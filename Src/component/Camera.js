import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, PermissionsAndroid } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import { Image } from 'react-native'
export default function Camera() {
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
            setImageUri(data.uri)
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
                <Pressable style={{ backgroundColor: "purple", width: 60, height: 60 }} onPress={camptureHandel}><Text>Snap</Text></Pressable>
            </RNCamera>}

            {imageUri !== null &&
                <View style={{
                    backgroundColor: "red", alignItems: 'center',
                    justifyContent: "space-evenly", height: "60%"
                }}>
                    <Image style={{ height: "50%", width: "80%" }} source={{ uri: imageUri }} />
                    <Pressable onPress={() => {
                        setImageUri(null)
                    }} style={{ borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: 'purple', width: 60, height: 60 }}><Text>Retake</Text></Pressable>
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