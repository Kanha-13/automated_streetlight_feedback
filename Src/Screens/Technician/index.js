import React, {useState} from 'react';
import {View, Text, Image, Pressable, FlatList, StyleSheet} from 'react-native';


const IMAGES = {
  image1: require('../../component/Images/StreetLightSample/sample2.jpeg'),
  image2: require('../../component/Images/StreetLightSample/sample4.jpeg'),
  image3: require('../../component/Images/StreetLightSample/TestStreetLight.jpg'),
  image4: require('../../component/Images/StreetLightSample/sample4.jpg'),
  image5: require('../../component/Images/StreetLightSample/sample2.jpeg'),
  image6: require('../../component/Images/StreetLightSample/TestStreetLight.jpg'),
  image7: require('../../component/Images/StreetLightSample/sample3.jpeg'),
};

const TechnicianHome = ({navigate}) => {
  const [images, setImages] = useState([
    {key: '1', image: IMAGES.image1, Complainer_Name: 'Kanha Agrawal', Date: '11/03/2022'},
    {key: '2', image: IMAGES.image2, Complainer_Name: 'Bhumi Panjwani', Date: '9/03/2022'},
    {key: '3', image: IMAGES.image3, Complainer_Name: 'Vishal Rathi', Date: '1/03/2022'},
    {key: '4', image: IMAGES.image4, Complainer_Name: 'Abhigyan Jain', Date: '28/02/2022'},
    {key: '5', image: IMAGES.image5, Complainer_Name: 'Kousubh Yadav', Date: '20/02/2022'},
    {key: '6', image: IMAGES.image6, Complainer_Name: 'Tushar Dubey', Date: '11/02/2022'},
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
        <Text style={{color: '#000000', fontSize: 26}}>List Of Complaints</Text>
        <Image
          source={require('../../component/Images/bell.png')}
          style={{height: 40, width: 30}}
        />
      </View>
      <FlatList
        data={images}
        renderItem={({item}) => (
         <Pressable onPress={()=> navigate('ComplaintDetails', item)}>
          <View style={styles.container}>
            <Image source={item.image} style={{height: 100, width: 100}} />
            <View style = {styles.data} >
            <Text style={styles.datavalues}>Complaint Id: {item.key}</Text>
            <Text style={styles.datavalues}>Name: {item.Complainer_Name}</Text>
            <Text style={styles.datavalues}>Date: {item.Date}</Text>

            </View>
          </View>
       </Pressable>
        )}
      />
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
    borderWidth: 3,
    width: '100%'
  },
  data:{
   justifyContent: 'center',
   marginLeft: 20,

  },
  datavalues:{
    color: 'black', fontSize: 17
  }
});
export default TechnicianHome;