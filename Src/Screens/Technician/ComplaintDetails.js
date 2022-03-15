import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

const ComplaintDetails = ({navigate}) =>{
    return(
<View>
     <View style = {styles.container}>
       {/* <Image
           source={navigate.getParam('image')}

           /> */}
        <Text>{navigate.getParam('name')}</Text>
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
        onPress={() => navigate('TechnicianHome')}>
        <Image
          source={require('../../component/Images/backButton.png')}
          style={{height: 40, width: 40}}
        />
      </Pressable>
</View>

    )
}
const styles  = StyleSheet.create({
    container:{
        height: '91%',
        backgroundColor: 'white'
    },
    img:{
      width: 100,
      height: 100
    }
})

export default ComplaintDetails;