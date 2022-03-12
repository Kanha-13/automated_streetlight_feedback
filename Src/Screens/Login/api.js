import auth from '@react-native-firebase/auth';


export const sendOtp = async (number) => {
    const confirmation = await auth().signInWithPhoneNumber(`+91${number}`);
    return confirmation
}