import auth from '@react-native-firebase/auth';

export const addUser = async (data) => {
    // data.address = {
    //     city: "raipur",
    //     state: "cg",
    //     locality: "samta"
    // }
    let uri = 'user'
    if (data.type) {
        uri = 'technician'
    }
    const res = await fetch(`http://192.168.29.59:8002/${uri}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res
}
