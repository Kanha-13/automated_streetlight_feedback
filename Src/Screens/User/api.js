export const getMyCOmplains = async () => {
    const res = await fetch('http://192.168.136.190:8002/complains')
    const data = await res.json()
    console.log(data, '++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log(data, '++++++++++++++++++++++++++++++++++++++++++++++++')
    return await data
}