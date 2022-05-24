import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { addUser } from '../../Utils/addUser';
import auth from '@react-native-firebase/auth';
const TechnicianInfo = ({ navigate }) => {
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
    const [empId, setempId] = useState("")
    const handelSubmit = async () => {
        if (name === "" || email === "" || address === "" || empId === "") {
            alert("Please fill all the field")
        } else {
            const res = await addUser({ employeeId: empId, name: name, email: email, mobileNumber: number, fireBaseId: firebaseId, address: address, type: 1 })
            console.log(await res.json())
            if (res) {
                navigate('TechnicianHome')
            } else {
                alert("Something went wrong!!")
            }
        }
    }
    return (
        <ScrollView style={{ height: '100%', paddingBottom: 30, backgroundColor: '#ffffff' }} contentContainerStyle={{ paddingHorizontal: 10 }}>
            <Text style={{ color: '#000000', marginBottom: 30, fontSize: 26, fontWeight: "bold", marginTop: 50 }}>Technician Info</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
                placeholderTextColor="#000000"
                style={styles.input}
                placeholder="Enter Your Name"
                onChangeText={newText => setname(newText)}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                placeholderTextColor="#000000"
                style={styles.input}
                placeholder="Enter Your Email"
                onChangeText={newText => setemail(newText)}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                placeholderTextColor="#000000"
                style={styles.input}
                placeholder="Enter Your Office Address"
                onChangeText={newText => setaddress(newText)}
            />
            <Text style={styles.label}>Employee Id</Text>
            <TextInput
                placeholderTextColor="#000000"
                style={styles.input}
                placeholder="Enter Your Employee Id"
                onChangeText={newText => setempId(newText)}
            />
            <Pressable style={styles.btn} onPress={handelSubmit}>
                <Text style={styles.btnText}>Continue</Text>
            </Pressable>
        </ScrollView>
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
export default TechnicianInfo;