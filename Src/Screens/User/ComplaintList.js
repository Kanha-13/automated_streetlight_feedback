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
        }} style={{ alignSelf: "flex-start", height: 60, width: 80, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#000000", fontSize: 25 }}>&#60;</Text></Pressable>
        <Text style={{ width: "65%", textAlign: "center", color: "#000000", fontSize: 25 }}>Compalins</Text>
      </View>
      {compalins.map((complain, index) => {
        console.log(complain)
        return <View key={index} style={{ flexDirection: "row", overflow: "hidden", height: 300, elevation: 5, borderRadius: 10, width: "90%", backgroundColor: "white", marginVertical: 30 }}>
          <View style={{ width: "50%" }}>
            <Image style={{ width: '100%', height: '100%' }}
              source={{ uri: 'https://drive.google.com/uc?id=' + complain.defectiveLightUrl.split('/')[5] }} />
          </View>
          <View style={{ paddingHorizontal: 5, width: "50%", paddingTop: 5 }}>
            <Text style={{ color: "#000000", fontSize: 27, flexWrap: "wrap" }}>{complain.problemTitle}</Text>
            <Text style={{ color: "#000000", fontSize: 22, marginTop: 10 }}>Description: </Text>
            <Text style={{ color: "#000000", flexWrap: "wrap" }}>{complain.problemDesc}</Text>
            <Text style={{ color: "#000000", fontSize: 22 }}>Address:</Text>
            <Text style={{ color: "#000000", fontSize: 16 }}>Sate: {complain.address.state}</Text>
            <Text style={{ color: "#000000", fontSize: 16 }}>City: {complain.address.city}</Text>
            <Text style={{ color: "#000000", fontSize: 16 }}>Locality: {complain.address.locality}</Text>
            <Text style={{ color: "#000000", fontSize: 16 }}>Landmark: {complain.address.landmark}</Text>
          </View>
        </View>
      })
      }
      {
        compalins.length === 0 && <View style={{ marginTop: 150, height: 280, borderRadius: 10, width: 300, alignItems: "center", justifyContent: "center", elevation: 15, shadowColor: "red", marginBottom: 20, backgroundColor: "#5e72eb" }}>
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 30 }}>No records found</Text>
        </View>
      }
    </ScrollView >
  )
}

export default UserComplaintList;
