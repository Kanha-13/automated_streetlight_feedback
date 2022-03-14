import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import FirebaseSignIn from './Src/component/firebase';
import StackNavigation from './Src/component/Navigation/Stack';
import Login from './Src/Screens/Login';
import UserHome from './Src/Screens/User';
import TechnicianHome from './Src/Screens/Technician';
import Camera from './Src/component/Camera'
import Setting from './Src/component/Setting';
import TechnicianInfo from './Src/Screens/Technician/TechnicianInfo';
import UserInfo from './Src/Screens/User/UserInfo';
import RegisterCompalin from './Src/Screens/Complain/RegisterCompalin';
import UserComplaintList from './Src/Screens/User/ComplaintList';
const App = () => {
  // const [mobileNUmber,setMobileNUmber]=useState()
  const [imageUri, setImageUri] = useState(null)
  return (
    <StackNavigation initialRoute="Login">
      <Login />
      <UserHome />
      <Camera onConfirm={setImageUri} />
      <TechnicianHome />
      <TechnicianInfo />
      <UserInfo />
      <Setting />
      <RegisterCompalin imageUri={imageUri} />
      <UserComplaintList />
      {/* <TechnicianComplaintList /> */}
    </StackNavigation>
  )
}

export default App; 