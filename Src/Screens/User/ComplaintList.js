import React, {useState} from 'react';
import {View, Text, Image, Pressable, FlatList, StyleSheet} from 'react-native';

const IMAGES = {
  image1: require('../../component/Images/StreetLightSample/sample2.jpeg'),
  image2: require('../../component/Images/StreetLightSample/sample3.jpeg'),
  image3: require('../../component/Images/StreetLightSample/sample4.jpeg'),
  image4: require('../../component/Images/StreetLightSample/sample4.jpg'),
  image5: require('../../component/Images/StreetLightSample/sample2.jpeg'),
  image6: require('../../component/Images/StreetLightSample/TestStreetLight.jpg'),
  image7: require('../../component/Images/StreetLightSample/sample3.jpeg'),
};

const ComplaintList = ({navigate}) => {
  const [images, setImages] = useState([
    {key: '1', image: IMAGES.image1, Status: 'Fixed', Date: '11/03/2022'},
    {key: '2', image: IMAGES.image2, Status: 'Rejected', Date: '9/03/2022'},
    {key: '3', image: IMAGES.image3, Status: 'On Review', Date: '1/03/2022'},
    {key: '4', image: IMAGES.image4, Status: 'Accepted', Date: '28/02/2022'},
    {key: '5', image: IMAGES.image5, Status: 'Accepted', Date: '20/02/2022'},
    {key: '6', image: IMAGES.image6, Status: 'Fixed', Date: '11/02/2022'},
    {key: '7', image: IMAGES.image7, Status: 'Rejected', Date: '2/02/2022'},
  ]);

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
        <Text style={{color: '#000000', fontSize: 26}}>Your Complaints</Text>
        <Image
          source={require('../../component/Images/bell.png')}
          style={{height: 40, width: 30}}
        />
      </View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image source={item.image} style={{height: 100, width: 100}} />
            <View style = {styles.data} >
            <Text style={styles.datavalues}>Complaint Id: {item.key}</Text>
            <Text style={styles.datavalues}>Status: {item.Status}</Text>
            <Text style={styles.datavalues}>Date: {item.Date}</Text>
            </View>
          </View>
        )}
      />
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
        onPress={() => navigate('UserHome')}>
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
    backgroundColor: 'grey',
    marginBottom: 10,
    padding: 7,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 3
  },
  data:{
   justifyContent: 'center',
   marginLeft: 20,

  },
  datavalues:{
    color: 'black', fontSize: 17
  }
});
export default ComplaintList;
