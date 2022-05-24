import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Geolocation from "@react-native-community/geolocation";
import settingIcon from '../../component/Images/settingIcon.png'
import ListIcon from '../../component/Images/ListIcon.png'
import FormFillIcon from '../../component/Images/FormFillIcon.png'
const UserHome = ({ navigate }) => {
  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: "#d9d8d8"
        }}>
        <Pressable onPress={() => { navigate("Setting") }}><Image style={{ height: 30, width: 30 }} source={settingIcon} /></Pressable>
        <Text style={{ color: '#000000', fontSize: 26 }}>Complaint Section</Text>
        <Pressable onPress={() => {
          navigate("Notification")
        }}>
          <Image
            source={require('../../component/Images/bell.png')}
            style={{ height: 40, width: 30 }}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.btn} onPress={() => navigate('UserComplaintList')}>
          <Image style={{ resizeMode: "contain", width: 120 }} source={ListIcon} />
          <Text style={styles.btnText}>List of Complaints</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => navigate('Camera')}>
          <Image style={{ resizeMode: "contain", width: 150 }} source={FormFillIcon} />
          <Text style={styles.btnText}>File a Complaint</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display: 'flex',
    height: '80%',
    padding: 12
  },
  btn: {
    color: 'black',
    backgroundColor: '#5e72eb',
    flexDirection: "row",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    borderRadius: 7
  },
  btnText: {
    textAlign: 'center',
    fontSize: 30,
    color: "#ffffff",
    fontWeight: 'bold'
  }
});
export default UserHome;
