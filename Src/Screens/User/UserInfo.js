import React from 'react';
import {View, Text, Pressable, TextInput, StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
const UserInfo = ({navigate}) => {
  const handleSignout = () => {
    try {
      auth().signOut();
      navigate('Login');
    } catch (error) {
      console.log('Signout error');
      navigate('Login');
    }
  };
  return (
    <View style={{height: '100%', backgroundColor: '#075264'}}>
    <View style = {{display:'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderWidth:2}}>
      <Text style={{color: '#000000', fontSize: 26}}>User Info</Text>
      </View>
      <View style={styles.userInp}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 4,
            textAlign: 'center',
            borderColor: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            height: 48,
          }}
          placeholder="Enter Your Name Here"
          onChangeText={newText => setText(newText)}
        />
         <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 4,
            textAlign: 'center',
            borderColor: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            height: 48,
            marginTop :50 
          }}
          placeholder="Enter Your Email Here"
          onChangeText={newText => setText(newText)}
        />
         <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 4,
            textAlign: 'center',
            borderColor: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            height: 48,
            marginTop :50 
          }}
          placeholder="Enter Your Home Address Here"
          onChangeText={newText => setText(newText)}
        />
      <Pressable onPress={()=>navigate('UserHome')}>
          <Text style = {styles.btn}>Continue</Text>
      </Pressable>
      </View>
      <Pressable
        onPress={handleSignout}
        style={{
          backgroundColor: 'purple',
          width: '40%',
          height: 60,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#ffffff', fontSize: 22}}>Sign Out</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  userInp: {
    height: '80%',
    justifyContent: 'center',
    display: 'flex',
    padding: 12,
  },
  btn:{
   textAlign: 'center',
   marginTop: 45,
   backgroundColor: 'white',
   fontSize: 30,
   color: '#075264',
   fontWeight: 'bold',
   alignContent: 'center'
  }
});
export default UserInfo;
