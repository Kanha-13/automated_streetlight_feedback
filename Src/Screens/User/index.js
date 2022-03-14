import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
const UserHome = ({navigate}) => {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 12,
          borderWidth: 2,
        }}>
        <Text style={{color: '#000000', fontSize: 26}}>Complaint Section</Text>
        <Image
          source={require('../../component/Images/bell.png')}
          style={{height: 40, width: 30}}
        />
      </View>
      <View style={styles.container}>
        <Pressable onPress={()=>navigate('ComplaintList')}>
          <Text style={styles.btn}>List Of Complaints</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.btn}>File A Complaint</Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          position: 'relative',
          bottom: 0,
          paddingLeft: 20,
          paddingBottom: 12,
          width: '100%',
          backgroundColor: 'white',
          paddingTop: 10
        }}
        onPress={() => navigate('UserInfo')}>
        <Image
          source={require('../../component/Images/backButton.png')}
          style={{height: 40, width: 40}}
        />
      </Pressable>
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
    borderWidth: 2,
    backgroundColor: 'grey',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 80,
    borderRadius: 7
  },
});
export default UserHome;
