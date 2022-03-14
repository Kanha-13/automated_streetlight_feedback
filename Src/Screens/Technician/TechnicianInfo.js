import React from 'react';
import {View, Text, Pressable, TextInput, StyleSheet, Image} from 'react-native';

const TechnicianInfo = ({navigate}) =>{
    return (
        <View style={{height: '100%', backgroundColor: '#075264'}}>
        <View style = {{display:'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderWidth:2}}>
          <Text style={{color: '#000000', fontSize: 26}}>Technician Info</Text>
          </View>
          <View style={styles.userInp}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name Here"
              onChangeText={newText => setText(newText)}
            />
             <TextInput
              style={styles.input}
              placeholder="Enter Your Email Here"
              onChangeText={newText => setText(newText)}
            />
             <TextInput
              style={styles.input}
              placeholder="Enter Your Office Address Here"
              onChangeText={newText => setText(newText)}
            />
             <TextInput
          style={styles.input}
          placeholder="Enter Your Employee ID"
          numeric
          keyboardType={'numeric'}
        />
          <Pressable onPress={()=>navigate('TechnicianHome')}>
              <Text style = {styles.btn}>Continue</Text>
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
    btn:{
     textAlign: 'center',
     marginTop: 45,
     backgroundColor: 'white',
     fontSize: 30,
     color: '#075264',
     fontWeight: 'bold',
     alignContent: 'center'
    },
    input:{
        height: 40,
        borderColor: 'black',
        borderWidth: 4,
        textAlign: 'center',
        borderColor: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        height: 48,
        marginBottom: 30
      }
  });
export default TechnicianInfo;