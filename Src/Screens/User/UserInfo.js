import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image } from 'react-native';
import { addUser } from '../../Utils/addUser';
import auth from '@react-native-firebase/auth';
const UserInfo = ({ navigate }) => {
  const [number, setNumber] = useState("")
  const [firebaseId, setFirebaseId] = useState("")
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setNumber(user.phoneNumber.substring(1))
        setFirebaseId(user.uid)
      }
    });
  }, [])
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const handelSubmit = async () => {
    if (name === "" || email === "" || address === "") {
      alert("Please fill all the field")
    } else {
      const res = await addUser({ name: name, email: email, mobileNumber: number, fireBaseId: firebaseId, address: address, type: 0 })
      console.log(await res.json())
      if (res) {
        navigate('UserHome')
      } else {
        alert("Something went wrong!!")
      }
    }
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#ffffff' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderWidth: 2 }}>
        <Text style={{ color: '#000000', fontSize: 26, fontWeight: "bold" }}>User Info</Text>
      </View>
      <View style={styles.userInp}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholderTextColor="#000000"
          style={styles.input}
          placeholder="Enter Your Name Here"
          onChangeText={newText => setname(newText)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholderTextColor="#000000"
          style={styles.input}
          placeholder="Enter Your Email Here"
          onChangeText={newText => setemail(newText)}
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholderTextColor="#000000"
          style={styles.input}
          placeholder="Enter Your Office Address Here"
          onChangeText={newText => setaddress(newText)}
        />
        <Pressable style={styles.btn} onPress={handelSubmit}>
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  userInp: {
    height: '80%',
    justifyContent: 'center',
    display: 'flex',
    padding: 12,
  },
  label: {
    color: "#000000",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10

  },
  btn: {
    marginTop: 45,
    backgroundColor: '#5e72eb',
    borderRadius: 10,
    alignItems: 'center',
    height: 60,
    justifyContent: "center"
  },
  btnText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: '#000000',
    color: "#000000",
    fontSize: 18,
    height: 48,
    marginBottom: 30
  }
});
export default UserInfo;
