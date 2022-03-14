import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, FlatList, StyleSheet, ScrollView } from 'react-native';
import { getMyCOmplains } from './api';

const UserComplaintList = ({ navigate }) => {
    const [compalins, setCompalins] = useState([])
    const getCOmplain = async () => {
        setCompalins(await getMyCOmplains())
    }
    useEffect(() => {
        getCOmplain()
    }, [])
    return (
        <ScrollView style={{ backgroundColor: "white" }} contentContainerStyle={{ alignItems: "center" }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => {
                    navigate('UserHome')
                }} style={{ alignSelf: "flex-start", height: 80, width: 80 }}><Text style={{ color: "#000000", fontSize: 25 }}>&#60;</Text></Pressable>
                <Text style={{ marginLeft: 50, color: "#000000", fontSize: 25 }}>Compalins</Text>
            </View>
            {compalins.map((complain, index) => {
                return <View key={index} style={{ height: 300, elevation: 5, borderRadius: 10, width: "90%", backgroundColor: "white", marginVertical: 30 }}>
                    <Image style={{ width: '100%', height: '100%' }}
                        source={{ uri: 'https://drive.google.com/uc?id=' + complain.defectiveLightUrl.split('/')[5] }} />
                </View>
            })
            }
        </ScrollView >
    )
}

export default UserComplaintList;