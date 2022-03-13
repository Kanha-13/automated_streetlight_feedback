import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import FirebaseSignIn from './Src/component/firebase';
import StackNavigation from './Src/component/Navigation/Stack';
import Login from './Src/Screens/Login';
import UserHome from './Src/Screens/User';
import TechnicianHome from './Src/Screens/Technician';
import Camera from './Src/component/Camera'
import Setting from './Src/component/Setting';
const App = () => {

  return (
    <StackNavigation initialRoute="Login">
      <Login />
      <UserHome />
      <TechnicianHome />
      <Setting />
    </StackNavigation>
  )
}

export default App; 