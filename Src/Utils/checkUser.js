export const checkUser = async (number, navigate, LoginType) => {
    const res = await fetch(`http://192.168.29.59:8002/user/${number.substring(1)}`)
    console.log("got response")
    const userExist = await res.json()
    console.log(userExist)
    if (userExist) {
        if (userExist.employeeId) {
            navigate('TechnicianHome')
        } else {
            navigate('UserHome')
        }
    } else {
        if (LoginType === 1) {
            navigate("TechnicianInfo")
        } else if (LoginType === 0) {
            navigate("UserInfo")
        }
    }
}